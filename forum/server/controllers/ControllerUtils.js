import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import PostModel from '../models/PostModel.js';
import 'babel-polyfill';
import { harvestValues, harvestColumns, harvestKeyValues } from '../utils.js';

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
                console.log('pair created');
            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN CREATING USER FORUM PAIR');
                console.log(error);
                return res.status(500).json({ message : "crash" })
            }

            // увеличиваем счетчик постов в форуме 
            try {
                await ForumModel.incrementPosts(threadData.forum);
                console.log('postsCNt incremented');
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