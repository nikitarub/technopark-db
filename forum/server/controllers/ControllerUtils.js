import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import PostModel from '../models/PostModel.js';
import 'babel-polyfill';
import { harvestValues, harvestColumns, harvestKeyValues, valStr } from '../utils.js';

export const createPostsLoop = async function (req,res, threadData) {
    const result = []
    const creationDate = new Date();
    const newPosts = req.body;

    for (let post of newPosts) {
        
        if (post.author) {
            // есть ли такой автор в базе
            try {
                const author = await UserModel.getUserNickname(post.author);
                if (!author) {
                    return res.status(404).json({ message : 'cant find author' }); 
                } else {
                    post.author = author.nickname;
                }
            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICKNAME');
                console.log(error);
                return res.status(500).json({ message : "crash" })
            }

            // если был передан id родительский пост
            if (post.parent) {
                // проверяем есть ли родительский пост в системе 
                try {
                    const parentPost = await PostModel.getPostByIdAndThreadId(post.parent, threadData.id);
                    if (!parentPost) {
                        return res.status(409).json({ message : 'no parent posts' }); 
                    } else {
                        post.parent = parentPost.id;
                    }
                } catch (error) {
                    console.log('--------------------------------------------');
                    console.log('ERROR IN GETTING POST PARENTS');
                    console.log(error);
                    return res.status(500).json({ message : "crash" })
                }
            } else {
                post.parent = null;
            }

            // добавляем пост 
            try {
                const keyValues = harvestKeyValues(post);
                keyValues['created'] = creationDate;
                keyValues['thread'] = threadData.id;
                keyValues['forum'] = threadData.forum;
                const columns = harvestColumns(keyValues);                
                for (let i = 0; i < columns.length; i++) {
                    if (columns[i] === 'message' || columns[i] === 'created') {
                        columns[i] = '"' + columns[i] + '"';
                    }
                }
                const values = harvestValues(keyValues);

                const addedPost = await PostModel.createNewPost(columns, values);
                addedPost.id = parseInt(addedPost.id); // pg-promise считает BIGSERIAL строкой хз почему
                addedPost.thread = parseInt(addedPost.thread);
                addedPost.parent = parseInt(addedPost.parent);
                result.push(addedPost);

            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN ADDING NEW POST');
                console.log(error);
                return res.status(500).json({ message : "crash" })
            }

            // добавляем юзера в форум 
            try {
                await ForumModel.createForumUserPair(threadData.forum, post.author);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING USER FORUM PAIR');
                console.log(error);
                return res.status(500).json({ message : "crash" })
            }

            // увеличиваем счетчик постов в форуме 
            try {
                await ForumModel.incrementPosts(threadData.forum);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN threads increment');
                console.log(error);
                return res.status(500).json({ message : "crash" })
            }
        } else {
            return res.status(404).json({ message : 'cant find author' }); 
        }
    }

    return res.status(201).send(result);
}



// const columns = `(author, "message", parent, "created", thread, forum)`;


// export const createPostsLoop = async function (req,res, threadData) {
//     const creationDate = new Date();
//     const newPosts = req.body;
//     let batches = '';
//     let batch = '';
//     const columnsSet = ` (author, "message", parent, "created", thread, forum) `;
//     const postAmount = newPosts.length;
//     let flag = 0;
//     // console.log('IN INIT',flag, postAmount);

    
//     for (let post of newPosts) {
//         // есть ли такой автор в базе

//         try {
//             const author = await UserModel.getUserNickname(post.author);
//             if (!author) {
//                 return res.status(404).json({ message : 'cant find author' }); 
//             } else {
//                 post.author = author.nickname;
//             }
//         } catch (error) {
//             console.log('--------------------------------------------');
//             console.log('ERROR IN GETTING USER BY NICKNAME');
//             console.log(error);
//             return res.status(500).json({ message : "crash" })
//         }
//         // если был передан id родительский пост
//         if (post.parent) {
//             // проверяем есть ли родительский пост в системе 
//             try {
//                 const parentPost = await PostModel.getPostByIdAndThreadId(post.parent, threadData.id);
//                 if (!parentPost) {
//                     return res.status(409).json({ message : 'no parent posts' }); 
//                 } else {
//                     post.parent = parentPost.id;
//                 }
//             } catch (error) {
//                 console.log('--------------------------------------------');
//                 console.log('ERROR IN GETTING POST PARENTS');
//                 console.log(error);
//                 return res.status(500).json({ message : "crash" })
//             }
//         } else {
//             post.parent = null;
//         }


//         post.created = creationDate;
//         post.thread = threadData.id;
//         post.forum = threadData.forum;

//         const values = harvestValues(post);
//         console.log(flag, postAmount);
//         if (flag === postAmount - 1) {
//             batch = valStr(values, true);    
//         } else {
//             batch = valStr(values, false);
//         }
//         console.log('I AM BATCH', batch);
//         batches += batch;
//         flag += 1;
//     }


//     const query = `INSERT INTO posts` + columnsSet + `VALUES` + batches + ` RETURNING *`;
//     try {
//         const result = await PostModel.createNewPostsByQuery(query);
//     } catch (error) {
//         console.log('--------------------------------------------');
//         console.log('ERROR IN ADDING NEW POST');
//         console.log(error);
//         return res.status(500).json({ message : "crash" })
//     }

//     for (let post of newPosts) {
//             // добавляем юзера в форум 
//         try {
//             await ForumModel.createForumUserPair(threadData.forum, post.author);
//         } catch (error) {
//             console.log('--------------------------------------------');
//             console.log('ERROR IN CREATING USER FORUM PAIR');
//             console.log(error);
//             return res.status(500).json({ message : "crash" })
//         }
//         // увеличиваем счетчик постов в форуме 
//         try {
//             await ForumModel.incrementPosts(threadData.forum);
//         } catch (error) {
//             console.log('--------------------------------------------');
//             console.log('ERROR IN threads increment');
//             console.log(error);
//             return res.status(500).json({ message : "crash" })
//         }
//     }
//     return res.status(201).send(result);
// }
