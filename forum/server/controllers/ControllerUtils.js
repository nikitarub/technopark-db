import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import PostModel from '../models/PostModel.js';
import { harvestValues, harvestColumns, harvestKeyValues } from '../utils.js';

export const createPostsLoop = function (req,res, threadData) { // TODO доделать 409
    const result = []
    const creationDate = new Date();
    const newPosts = req.body;
    for (let i = 0; i < newPosts.length; i++) {
        // есть ли такой пользователь
        if (newPosts[i].author) {
            UserModel.getUserNickname(newPosts[i].author)
                .then( data =>{
                    if (data) {
                        // создаем посты
                        if (newPosts[i].parent) {
                            PostModel.getPostByIdAndThreadId(newPosts[i].parent, threadData.id)
                                .then( parentPost => {
                                    const keyValues = harvestKeyValues(newPosts[i]);
                                    keyValues['author'] = data.nickname;
                                    keyValues['created'] = creationDate;
                                    keyValues['thread'] = threadData.id;
                                    keyValues['forum'] = threadData.forum;
                                    keyValues['parent'] = parentPost.id;
                                    const columns = harvestColumns(keyValues);
                                    
                                    for (let i = 0; i < columns.length; i++) {
                                        if (columns[i] === 'message' || columns[i] === 'created') {
                                            columns[i] = '"' + columns[i] + '"';
                                        }
                                    }
                                    const values = harvestValues(keyValues);
                                    PostModel.createNewPost(columns, values)
                                        .then( newPost => {
                                            ForumModel.createForumUserPair(threadData.forum, data.nickname)
                                                .then( () => {
                                                    console.log('pair created');
                                                })
                                                .catch( error => {
                                                    console.log('--------------------------------------------');
                                                    console.log('ERROR IN creating pair');
                                                    console.log(error);
                                                    return res.status(500).json({ message : "crash" })
                                                });
                                            ForumModel.incrementPosts(threadData.forum)
                                                .then( () => {
                                                    newPost.id = parseInt(newPost.id); // pg-promise считает BIGSERIAL строкой хз почему
                                                    newPost.thread = parseInt(newPost.thread);
                                                    result.push(newPost);
                                                    if (i === newPosts.length - 1) {
                                                        console.log('RESULT 2', result);
                                                        return res.status(201).json(result);
                                                    }
                                                })
                                                .catch( error => {
                                                    console.log('--------------------------------------------');
                                                    console.log('ERROR IN threads increment');
                                                    console.log(error);
                                                    return res.status(500).json({ message : "crash" })
                                                });
                                        })
                                        .catch( error => {
                                            console.log('--------------------------------------------');
                                            console.log('ERROR IN CREATE NEW POST');
                                            console.log(error);
                                            return res.status(500).json({ message : "crash" })
                                        });
                                })
                                .catch( error => {
                                    console.log('--------------------------------------------');
                                    console.log(error);
                                    console.log('ERROR IN GETTING PARENT POST');
                                    return res.status(500).json({ message : "crash" });
                                });

                        } else {
                            const keyValues = harvestKeyValues(newPosts[i]);
                            keyValues['author'] = data.nickname;
                            keyValues['created'] = creationDate;
                            keyValues['thread'] = threadData.id;
                            keyValues['forum'] = threadData.forum;
                            keyValues['parent'] = null;
                            const columns = harvestColumns(keyValues);
                            
                            for (let i = 0; i < columns.length; i++) {
                                if (columns[i] === 'message' || columns[i] === 'created') {
                                    columns[i] = '"' + columns[i] + '"';
                                }
                            }
                            const values = harvestValues(keyValues);
                            PostModel.createNewPost(columns, values)
                                .then( newPost => {
                                    ForumModel.createForumUserPair(threadData.forum, data.nickname)
                                        .then( () => {
                                            console.log('pair created');
                                        })
                                        .catch( error => {
                                            console.log('--------------------------------------------');
                                            console.log('ERROR IN creating pair');
                                            console.log(error);
                                            return res.status(500).json({ message : "crash" })
                                        });
                                    ForumModel.incrementPosts(threadData.forum)
                                        .then( () => {
                                            newPost.id = parseInt(newPost.id); // pg-promise считает BIGSERIAL строкой хз почему
                                            newPost.thread = parseInt(newPost.thread);
                                            result.push(newPost);
                                            if (i === newPosts.length - 1) {
                                                console.log('RESULT 1', result);
                                                return res.status(201).json(result);
                                            }
                                        })
                                        .catch( error => {
                                            console.log('--------------------------------------------');
                                            console.log('ERROR IN threads increment');
                                            console.log(error);
                                            return res.status(500).json({ message : "crash" })
                                        });
                                })
                                .catch( error => {
                                    console.log('--------------------------------------------');
                                    console.log('ERROR IN CREATE NEW post');
                                    console.log(error);
                                    return res.status(500).json({ message : "crash" })
                                });
                        }

                    } else {
                        return res.status(404).json({ message : 'cant find author' });
                    }
                })
                .catch( error => {
                    console.log('--------------------------------------------');
                    console.log(error);
                    console.log('ERROR IN GETTING USERS NICKNAME');
                    return res.status(500).json({ message : "crash" });
                });
        } else {
            return res.status(404).json({ message : 'cant find author' });
        }
    }
}