import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import ThreadModel from '../models/ThreadModel.js';
import PostModel from '../models/PostModel.js';
import VoteModel from '../models/VoteModel.js';
import { harvestValues, harvestColumns, harvestKeyValues } from '../utils.js';
import { createPostsLoop } from './ControllerUtils.js';
import { parse } from 'url';

class ThreadController {

    async createPost (req, res){
        // const result = []
        // const creationDate = new Date();
        const newPosts = req.body;
        let slugOrId = req.params['slug_or_id'];
        // let threadData = {}
        
        // есть ли такая ветка в базе 
        // if (/^\d+$/.test(threadSlug)) {
        //     ThreadModel.getThreadById(parseInt(threadSlug))
        //         .then( data => {
        //             if (data) {
        //                 threadData = data;
        //                 createPostsLoop(req,res, threadData);
        //             } else {
        //                 return res.status(404).json({ message : 'cant find thread' });
        //             }
        //         })  
        //         .catch( error => {
        //             console.log('--------------------------------------------');
        //             console.log('ERROR IN GETTING THREAD BY ID');
        //             console.log(error);
        //             return res.status(500).json({ message : "crash" });
        //         });
        // } else {
        //     ThreadModel.getThreadBySlug(threadSlug)
        //         .then( data => {
        //             if (data) {
        //                 threadData = data;
        //                 createPostsLoop(req,res, threadData);
        //             } else {
        //                 return res.status(404).json({ message : 'cant find thread' });                    
        //             }
        //         }) 
        //         .catch( error => {
        //             console.log('--------------------------------------------');
        //             console.log(error);
        //             console.log('ERROR IN GETTING THREAD BY SLUG');
        //             return res.status(500).json({ message : "crash" });
        //         });
        // }


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
        createPostsLoop(req,res, thread);


        // если было прислано 0 постов
        if (!newPosts.length) {
            return res.status(201).json(newPosts);
        }
    }

    voteForThread (req ,res) {
        let initVoteData = req.body;
        let threadSlug = req.params['slug_or_id'];

        UserModel.getUserByNickname(initVoteData.nickname)
            .then ( user =>{
                if (user) {
                    // есть ли такая ветка в базе 
                    if (/^\d+$/.test(threadSlug)) {
                        ThreadModel.getThreadById(parseInt(threadSlug))
                            .then( thread => {
                                if (thread) {
                                    VoteModel.vote( initVoteData.voice, thread.id, user.nickname)
                                        .then( voteData => {
                                            if (voteData) {
                                                let voice = voteData.voice;
                                                if (voteData.existed) {
                                                    voice = voice === 1 ? voice + 1 : voice - 1;
                                                }
                                                ThreadModel.incrementVotes(thread.slug, voice)
                                                    .then( updateThread =>{
                                                        updateThread.id = parseInt(updateThread.id);
                                                        return res.status(200).json(updateThread);
                                                    })
                                                    .catch( error => {
                                                        console.log('--------------------------------------------');
                                                        console.log('ERROR IN UPDATING THREAD VOTES');
                                                        console.log(error);
                                                        return res.status(500).json({ message : "crash" });
                                                    });

                                            } else {
                                                thread.id = parseInt(thread.id);
                                                return res.status(200).json(thread);
                                            }
                                        })
                                        .catch( error => {
                                            console.log('--------------------------------------------');
                                            console.log('ERROR IN MAKING VOTE');
                                            console.log(error);
                                            return res.status(500).json({ message : "crash" });
                                        });
                                } else {
                                    return res.status(404).json({ message : 'cant find thread' });
                                }
                            })  
                            .catch( error => {
                                console.log('--------------------------------------------');
                                console.log('ERROR IN GETTING THREAD BY ID');
                                console.log(error);
                                return res.status(500).json({ message : "crash" });
                            });
                    } else {
                        ThreadModel.getThreadBySlug(threadSlug)
                            .then( thread => {
                                if (thread) {
                                    VoteModel.vote( initVoteData.voice, thread.id, user.nickname)
                                        .then( voteData => {
                                            if (voteData) {
                                                let voice = voteData.voice;
                                                if (voteData.existed) {
                                                    voice = voice === 1 ? voice + 1 : voice - 1;
                                                }
                                                ThreadModel.incrementVotes(thread.slug, voice)
                                                    .then( updateThread =>{
                                                        updateThread.id = parseInt(updateThread.id);
                                                        return res.status(200).json(updateThread);
                                                    })
                                                    .catch( error => {
                                                        console.log('--------------------------------------------');
                                                        console.log('ERROR IN UPDATING THREAD VOTES');
                                                        console.log(error);
                                                        return res.status(500).json({ message : "crash" });
                                                    });

                                            } else {
                                                thread.id = parseInt(thread.id);
                                                return res.status(200).json(thread);
                                            }
                                        })
                                        .catch( error => {
                                            console.log('--------------------------------------------');
                                            console.log('ERROR IN MAKING VOTE');
                                            console.log(error);
                                            return res.status(500).json({ message : "crash" });
                                        });


                                } else {
                                    return res.status(404).json({ message : 'cant find thread' });                    
                                }
                            }) 
                            .catch( error => {
                                console.log('--------------------------------------------');
                                console.log(error);
                                console.log('ERROR IN GETTING THREAD BY SLUG');
                                return res.status(500).json({ message : "crash" });
                            });
                    }
                } else {
                    return res.status(404).json({ message : 'cant find author' });
                }
            })
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
            console.log('THREAAAAD CONFLICT', result);
            return res.status(409).json({ message : 'already existed data'});
        } else {
            result.id = parseInt(result.id);
            return res.status(200).json(result);
        }

    }
}

export default new ThreadController;