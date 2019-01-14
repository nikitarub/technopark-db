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

        const pair = await ForumModel.createForumUserPair(threadData.forum, post.author);

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
        postsValues.push(post);
    }

    // добавляем пост
    const result = []; 
    const columns = `(author, "message", parent, "created", thread, forum, id, pathtopost)`
    const valuesInStringQuery = valStr(postsValues);
    const query = `INSERT INTO posts ` + columns + ` VALUES ` + valuesInStringQuery + ` RETURNING *`;
    // console.log('NOT HERE');
    const addedPosts = await PostModel.createNewPostsByQuery(query);
    // console.log(addedPosts);
    if (addedPosts) {
        for (let post of addedPosts) {
            post.id = parseInt(post.id);
            post.thread = parseInt(post.thread);
            post.parent = parseInt(post.parent);
            result.push(post);
        }
        return res.status(201).json(result);

    } else {
        return res.status(404).json({ message : 'cant find author' });
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