import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import PostModel from '../models/PostModel.js';
import 'babel-polyfill';
import { valStr, constructPathString, createPaireQuery } from '../utils.js';


export const createPostsLoop = async function (request, reply, threadData) {
    const postsValues = [];
    const forumUserPairValues = [];
    const creationDate = new Date().toUTCString();
    const newPosts = request.body;

    if (!newPosts.length) {
        return reply.status(201).send([]);
    }

    const author = newPosts[0].author;
    for (let post of newPosts) {
        // если был передан id родительский пост
        if (post.parent) {
            // проверяем есть ли родительский пост в системе 
            try {
                const parentPost = await PostModel.getPostByIdAndThreadId(post.parent, threadData.id);
                if (!parentPost) {
                    return reply.status(409).send({ message : 'no parent posts' }); 
                } else {
                    post.parent = parentPost.id;
                }
            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING POST PARENTS');
                console.log(error);
                return reply.status(500).send({ message : "crash" })
            }
        } else {
            post.parent = null;
        }
        // добавляем юзера в форум 
        forumUserPairValues.push([post.author, threadData.forum]);
        // await ForumModel.createForumUserPair(threadData.forum, post.author);


        // const pair = await ForumModel.createForumUserPair(threadData.forum, post.author);        
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
    const addedPosts = await PostModel.createNewPostsByQuery(query);
    if (addedPosts) {
        for (let post of addedPosts) {
            post.id = parseInt(post.id);
            post.thread = parseInt(post.thread);
            post.parent = parseInt(post.parent);
            result.push(post);
        }


        const pairColumns = `(usernickname, forumslug)`;
        const stringPairValues = createPaireQuery(forumUserPairValues);
        const pairQuery = `INSERT INTO forumusers ` + pairColumns + ` VALUES ` + stringPairValues + ` ON CONFLICT ON CONSTRAINT unique_forumuser_pair DO NOTHING RETURNING *`;
        // await ForumModel.createForumUserPair(threadData.forum, author);
        try {
            await ForumModel.incrementPosts(threadData.forum, newPosts.length);
            await ForumModel.createForumUserPairByQuery(pairQuery);
            // await ForumModel.createForumUserPair(threadData.forum, post.author);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN threads increment');
            console.log(error);
            return reply.status(500).send({ message : "crash" })
        }

        return reply.status(201).send(result);

    } else {
        return reply.status(404).send({ message : 'cant find author' });
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