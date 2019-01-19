import UserModel from '../models/UserModel.js';
import ThreadModel from '../models/ThreadModel.js';
import PostModel from '../models/PostModel.js';
import VoteModel from '../models/VoteModel.js';
import { harvestColumns, harvestKeyValues } from '../utils.js';
import { createPostsLoop } from './ControllerUtils.js';

class ThreadController {

    async createPost (request, reply){
        // console.log(request.originalUrl, request.method);

        let slugOrId = request.params['slug_or_id'];
        let thread;
        if (/^\d+$/.test(slugOrId)) {
            try {
                thread = await ThreadModel.getThreadById(parseInt(slugOrId));
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY ID');
                return reply.status(500).send({ message : "crash" });
            }
        } else {
            try {
                thread = await ThreadModel.getThreadBySlug(slugOrId);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY slug');
                return reply.status(500).send({ message : "crash" });
            }
        }

        if (!thread) {
            return reply.status(404).send({ mesage : 'cant find thread' });
        }
        createPostsLoop(request,reply, thread);
    }

    
    async voteForThread (request, reply) {
		// console.log(request.originalUrl, request.method);

        const slugOrId = request.params['slug_or_id'];
        const voiceValue = request.body.voice;

        let author = request.body.nickname;

        let thread;
        if (/^\d+$/.test(slugOrId)) {
            try {
                thread = await ThreadModel.getThreadById(parseInt(slugOrId));
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY ID');
                return reply.status(500).send({ message : "crash" });
            }
        } else {
            try {
                thread = await ThreadModel.getThreadBySlug(slugOrId);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY slug');
                return reply.status(500).send({ message : "crash" });
            }
        }

        if (!thread) {
            return reply.status(404).send({ mesage : 'cant find thread' });
        }

        const votedData = await VoteModel.vote(voiceValue, thread.id, author);

        if (votedData) {
            if (votedData.existed) {
                votedData.voice = votedData.voice === 1 ? votedData.voice + 1 : votedData.voice - 1;
            }
        } else {
            try {
                author = await UserModel.getUserNickname(author);
                if (!author) {
                    return reply.status(404).send({ message : 'cant find author' }); 
                } else {
                    thread.id = parseInt(thread.id);
                    return reply.status(200).send(thread);
                }
            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICKNAME');
                console.log(error);
                return reply.status(500).send({ message : "crash" })
            }
        }

        let result;
        try {
            result = await ThreadModel.incrementVotesById(thread.id, votedData.voice)
        } catch (error) {
            console.log('--------------------------------------------');
            console.log(error);
            console.log('ERROR IN incrementing votes in thread');
            return reply.status(500).send({ message : "crash" }); 
        }

        result.id = parseInt(result.id);
        return reply.status(200).send(result);
    }

    getDetails (request, reply) {
        // console.log(request.originalUrl, request.method);

        const slugOrId = request.params['slug_or_id'];
        if (/^\d+$/.test(slugOrId)) {
            ThreadModel.getThreadById(parseInt(slugOrId))
                .then( thread => {
                    if (thread) {
                        thread.id = parseInt(thread.id);
                        // console.log('thread getDetails', thread);
                        return reply.status(200).send(thread);
                    } else {
                        return reply.status(404).send({ mesage : 'cant find thread' });
                    }
                })
                .catch( error => {
                    console.log('--------------------------------------------');
                    console.log(error);
                    console.log('ERROR IN GETTING THREAD BY ID');
                    return reply.status(500).send({ message : "crash" });
                });
        } else {
            ThreadModel.getThreadBySlug(slugOrId)
                .then( thread => {
                    if (thread) {
                        thread.id = parseInt(thread.id);
                        // console.log('thread getDetails', thread);
                        return reply.status(200).send(thread);
                    } else {
                        return reply.status(404).send({ mesage : 'cant find thread' });
                    }
                })
                .catch( error => {
                    console.log('--------------------------------------------');
                    console.log(error);
                    console.log('ERROR IN GETTING THREAD BY SLUG');
                    return reply.status(500).send({ message : "crash" });
                }); 
        }
    }

    async getPosts(request, reply) {
        // console.log(request.originalUrl, request.method);

        const queryParams = harvestKeyValues(request.query);
        let result = [];
		if (!queryParams['limit']) {
			queryParams['limit'] = 10
		} else {
			queryParams['limit'] = parseInt(queryParams['limit']);
        }
        queryParams['desc'] = queryParams['desc'] === 'true';
        queryParams['since'] = parseInt(queryParams['since']);

        const slugOrId = request.params['slug_or_id'];
        let isId;
        if (/^\d+$/.test(slugOrId)) {
            isId = true;
        } else {
            isId = false
        }


        if (queryParams.sort === 'flat' || !queryParams.sort) {
            result = await PostModel.flatSort(slugOrId, isId, queryParams);
        } else if (queryParams.sort === 'tree') {
            result = await PostModel.treeSort(slugOrId, isId, queryParams);
        } else if (queryParams.sort === 'parent_tree') {
            result = await PostModel.parentTreeSort(slugOrId, isId, queryParams);
        }

        if (!result || !result.length) {
            const thread = isId ? await ThreadModel.getThreadById(parseInt(slugOrId)) : await ThreadModel.getThreadBySlug(slugOrId);
            if (!thread) {
                return reply.status(404).send({ mesage : 'cant find thread' });
            } else {
                return reply.status(200).send(result);
            }
        }


        result = result.map( (post) => {
            const resPost = {};
            resPost['author'] = post.author;
            resPost['created'] = post.created;
            resPost['forum'] = post.forum;
            resPost['id'] = parseInt(post.id);
            resPost['message'] = post.message;
            resPost['parent'] = parseInt(post.parent);
            resPost['thread'] = parseInt(post.thread);
            
            return resPost;
        })
        return reply.status(200).send(result);
    }

    async updateThread (request, reply) {
        // console.log(request.originalUrl, request.method);

        const slugOrId = request.params['slug_or_id'];
        const newData = request.body;
        const keyValues = harvestKeyValues(newData);
        const columns = harvestColumns(newData);
        let thread;
        if (/^\d+$/.test(slugOrId)) {
            try {
                thread = await ThreadModel.getThreadById(parseInt(slugOrId));
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY ID');
                return reply.status(500).send({ message : "crash" });
            }
        } else {
            try {
                thread = await ThreadModel.getThreadBySlug(slugOrId);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY ID');
                return reply.status(500).send({ message : "crash" });
            }
        }

        if (!thread) {
            return reply.status(404).send({ mesage : 'cant find thread' });
        }

        // если было прислано пустое body
        // или все данные были присланы как пустые строки
        if (!Object.values(newData).length || !columns.length) {
            thread.id = parseInt(thread.id);
            return reply.status(200).send(thread);
        }

        let result
        try {
            result = await ThreadModel.updateThread(thread.slug, columns, keyValues);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log(error);
            console.log('ERROR IN UPDATING THREAD');
            return reply.status(500).send({ message : "crash" });
        }

        if (result === 'conflict') {
            return reply.status(409).send({ message : 'already existed data'});
        } else {
            result.id = parseInt(result.id);
            return reply.status(200).send(result);
        }

    }
}

export default new ThreadController;