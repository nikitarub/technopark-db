import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import ThreadModel from '../models/ThreadModel.js';
import PostModel from '../models/PostModel.js';
import VoteModel from '../models/VoteModel.js';
import { harvestValues, harvestColumns, harvestKeyValues } from '../utils.js';
import { createPostsLoop } from './ControllerUtils.js';

class ThreadController {

    createPost (req, res){
        // const result = []
        // const creationDate = new Date();
        const newPosts = req.body;
        let threadSlug = req.params['slug_or_id'];
        let threadData = {}
        
        // есть ли такая ветка в базе 
        if (/^\d+$/.test(threadSlug)) {
            ThreadModel.getThreadById(parseInt(threadSlug))
                .then( data => {
                    if (data) {
                        threadData = data;
                        createPostsLoop(req,res, threadData);
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
                .then( data => {
                    if (data) {
                        threadData = data;
                        createPostsLoop(req,res, threadData);
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
}

export default new ThreadController;