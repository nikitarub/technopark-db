import UserModel from '../models/UserModel.js';
import ThreadModel from '../models/ThreadModel.js';
import PostModel from '../models/PostModel.js';
import VoteModel from '../models/VoteModel.js';
import { harvestColumns, harvestKeyValues } from '../utils.js';
import { createPostsLoop } from './ControllerUtils.js';

class ThreadController {

    async createPost (req, res){
        let slugOrId = req.params['slug_or_id'];
        // let thread;
        if (/^\d+$/.test(slugOrId)) {
            await createPostsLoop(req, res, slugOrId, true);    
            // try {
            //     thread = await ThreadModel.getThreadById(parseInt(slugOrId));
            // } catch (error) {
            //     console.log('--------------------------------------------');
            //     console.log(error);
            //     console.log('ERROR IN GETTING THREAD BY ID');
            //     return res.status(500).json({ message : "crash" });
            // }
        } else {
            await createPostsLoop(req, res, slugOrId, false);
            // try {
            //     thread = await ThreadModel.getThreadBySlug(slugOrId);
            // } catch (error) {
            //     console.log('--------------------------------------------');
            //     console.log(error);
            //     console.log('ERROR IN GETTING THREAD BY slug');
            //     return res.status(500).json({ message : "crash" });
            // }
        }

        // if (!thread) {
        //     return res.status(404).json({ mesage : 'cant find thread' });
        // }
        // createPostsLoop(req,res, thread);
    }

    
    async voteForThread (req ,res) {

        const slugOrId = req.params['slug_or_id'];
        const voiceValue = req.body.voice;

        let author = req.body.nickname;
        try {
            author = await UserModel.getUserNickname(author);
            if (!author) {
                return res.status(404).json({ message : 'cant find author' }); 
            }
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING USER BY NICKNAME');
            console.log(error);
            return res.status(500).json({ message : "crash" })
        }

        let thread;
        if (/^\d+$/.test(slugOrId)) {
            try {
                thread = await ThreadModel.getThreadById(parseInt(slugOrId));
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY ID');
                return res.status(500).json({ message : "crash" });
            }
        } else {
            try {
                thread = await ThreadModel.getThreadBySlug(slugOrId);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY slug');
                return res.status(500).json({ message : "crash" });
            }
        }

        if (!thread) {
            return res.status(404).json({ mesage : 'cant find thread' });
        }

        let votedData;
        try {
            votedData = await VoteModel.vote(voiceValue, thread.id, author.nickname)
        } catch (error) {
            console.log('--------------------------------------------');
            console.log(error);
            console.log('ERROR IN MAKING VOTE');
            return res.status(500).json({ message : "crash" }); 
        }

        if (votedData) {
            if (votedData.existed) {
                votedData.voice = votedData.voice === 1 ? votedData.voice + 1 : votedData.voice - 1;
            }
        } else {
            thread.id = parseInt(thread.id);
            return res.status(200).json(thread);
        }

        let result;
        try {
            result = await ThreadModel.incrementVotesById(thread.id, votedData.voice)
        } catch (error) {
            console.log('--------------------------------------------');
            console.log(error);
            console.log('ERROR IN incrementing votes in thread');
            return res.status(500).json({ message : "crash" }); 
        }

        result.id = parseInt(result.id);
        return res.status(200).json(result);
    }

    getDetails (req, res) {
        const slugOrId = req.params['slug_or_id'];
        if (/^\d+$/.test(slugOrId)) {
            ThreadModel.getThreadById(parseInt(slugOrId))
                .then( thread => {
                    if (thread) {
                        thread.id = parseInt(thread.id);
                        return res.status(200).json(thread);
                    } else {
                        return res.status(404).json({ mesage : 'cant find thread' });
                    }
                })
                .catch( error => {
                    console.log('--------------------------------------------');
                    console.log(error);
                    console.log('ERROR IN GETTING THREAD BY ID');
                    return res.status(500).json({ message : "crash" });
                });
        } else {
            ThreadModel.getThreadBySlug(slugOrId)
                .then( thread => {
                    if (thread) {
                        thread.id = parseInt(thread.id);
                        return res.status(200).json(thread);
                    } else {
                        return res.status(404).json({ mesage : 'cant find thread' });
                    }
                })
                .catch( error => {
                    console.log('--------------------------------------------');
                    console.log(error);
                    console.log('ERROR IN GETTING THREAD BY SLUG');
                    return res.status(500).json({ message : "crash" });
                }); 
        }
    }

    async getPosts(req, res) {
        
        const queryParams = harvestKeyValues(req.query);
        let result = [];
		if (!queryParams['limit']) {
			queryParams['limit'] = 10
		} else {
			queryParams['limit'] = parseInt(queryParams['limit']);
        }
        queryParams['desc'] = queryParams['desc'] === 'true';
        queryParams['since'] = parseInt(queryParams['since']);

        const slugOrId = req.params['slug_or_id'];
        let thread;
        if (/^\d+$/.test(slugOrId)) {
            try {
                thread = await ThreadModel.getThreadById(parseInt(slugOrId));
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY ID');
                return res.status(500).json({ message : "crash" });
            }
        } else {
            try {
                thread = await ThreadModel.getThreadBySlug(slugOrId);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY ID');
                return res.status(500).json({ message : "crash" });
            }
        }

        if (!thread) {
            return res.status(404).json({ mesage : 'cant find thread' });
        }

        if (queryParams.sort === 'flat' || !queryParams.sort) {
            try {
                result = await PostModel.flatSort(thread.id, queryParams);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN flat sort');
                return res.status(500).json({ message : "crash" });
            }
        } else if (queryParams.sort === 'tree') {
            try {
                result = await PostModel.treeSort(thread.id, queryParams);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN tree sort');
                return res.status(500).json({ message : "crash" });
            }
        } else if (queryParams.sort === 'parent_tree') {
            try {
                result = await PostModel.parentTreeSort(thread.id, queryParams);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN parent tree');
                return res.status(500).json({ message : "crash" });
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
        return res.status(200).json(result);
    }

    async updateThread (req, res) {
        const slugOrId = req.params['slug_or_id'];
        const newData = req.body;
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
                return res.status(500).json({ message : "crash" });
            }
        } else {
            try {
                thread = await ThreadModel.getThreadBySlug(slugOrId);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log(error);
                console.log('ERROR IN GETTING THREAD BY ID');
                return res.status(500).json({ message : "crash" });
            }
        }

        if (!thread) {
            return res.status(404).json({ mesage : 'cant find thread' });
        }

        // если было прислано пустое body
        // или все данные были присланы как пустые строки
        if (!Object.values(newData).length || !columns.length) {
            thread.id = parseInt(thread.id);
            return res.status(200).json(thread);
        }

        let result
        try {
            result = await ThreadModel.updateThread(thread.slug, columns, keyValues);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log(error);
            console.log('ERROR IN UPDATING THREAD');
            return res.status(500).json({ message : "crash" });
        }

        if (result === 'conflict') {
            return res.status(409).json({ message : 'already existed data'});
        } else {
            result.id = parseInt(result.id);
            return res.status(200).json(result);
        }

    }
}

export default new ThreadController;