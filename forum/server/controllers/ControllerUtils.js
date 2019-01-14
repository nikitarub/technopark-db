import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import PostModel from '../models/PostModel.js';
import 'babel-polyfill';
import { valStr, constructPathString } from '../utils.js';


export const createPostsLoop = async function (req,res, threadData) {
    const postsValues = [];
    const creationDate = new Date().toUTCString();
    const newPosts = req.body;

    if (!newPosts.length) {
        return res.status(201).send([]);
    }

    for (let post of newPosts) {
        
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

        const postId = await PostModel.getIdForPost();

        post.created = creationDate;
        post.thread = threadData.id;
        post.forum = threadData.forum;
        post.id = parseInt(postId.nextval);
        const path = await constructPathToPost(post);
        post.pathtopost = path;
        // console.log(post);
        postsValues.push(post);
    }

    // добавляем пост
    const result = []; 
    try {
        const columns = `(author, "message", parent, "created", thread, forum, id, pathtopost)`
        const valuesInStringQuery = valStr(postsValues);
        const query = `INSERT INTO posts ` + columns + ` VALUES ` + valuesInStringQuery + ` RETURNING *`;

        const addedPosts = await PostModel.createNewPostsByQuery(query);
        // console.log('-------------------------------------------- BEFORE INSERT------------------------------------');
        // for (let post of addedPosts) {
        //     console.log(post.id);
        //     console.log(post.parent);
        //     console.log(post.pathtopost);
        // }
        for (let post of addedPosts) {
            
            // const nextId = await PostModel.getIdForPost();
            // console.log('IDDDD', nextId);

            // const path = await constructPathToPost(post);
            // const updatedPost = await PostModel.setPathToPost(post.id, path);
            post.id = parseInt(post.id);
            post.thread = parseInt(post.thread);
            post.parent = parseInt(post.parent);
            result.push(post);
        }
        // console.log('-------------------------------------------- AFTER INSERT------------------------------------');
        // for (let post of result) {
        //     console.log(post.id);
        //     console.log(post.parent);
        //     console.log(post.pathtopost);
        // }
        return res.status(201).json(result);
    } catch (error) {
        console.log('--------------------------------------------');
        console.log('ERROR IN ADDING NEW POST');
        console.log(error);
        return res.status(500).json({ message : "crash" })
    }
}


export const constructPathToPost = async function (post) {
    const idArray = [];
    idArray.push(post.id);
    const idString = constructPathString(idArray);
    let pathtopost;
    if (!post.parent) {
        pathtopost = post.pathtopost || idString;
    } else {

        const path = await PostModel.getPathToPost(post.parent);
        path.pathtopost.push(post.id);
        const pathString = constructPathString(path.pathtopost);
        pathtopost = post.pathtopost || pathString || idString
    }
    return pathtopost;
}