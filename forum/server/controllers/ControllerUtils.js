import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import PostModel from '../models/PostModel.js';
import 'babel-polyfill';
import { valStr, constructPathString } from '../utils.js';
import ThreadModel from '../models/ThreadModel.js';


export const createPostsLoop = async function (req,res, slugOrId, isId) {
    const postsValues = [];
    const creationDate = new Date().toUTCString();
    const newPosts = req.body;

    if (!newPosts.length) {
        if (isId) {
            const thread = await ThreadModel.getThreadById(parseInt(slugOrId));
            if (thread) {
                return res.status(201).send([]);
            } else {
                return res.status(404).json({ message : 'cant find thread'});
            }
        } else {
            const thread = await ThreadModel.getThreadBySlug(slugOrId);
            if (thread) {
                return res.status(201).send([]);
            } else {
                return res.status(404).json({ message : 'cant find thread'});
            }
        }
    }

    for (let post of newPosts) {

        // если был передан id родительский пост
        if (post.parent) {
            // проверяем есть ли родительский пост в системе 
            // try {
            const parentPost = await PostModel.getPostByIdAndThreadId(post.parent, slugOrId, isId);
            if (!parentPost) {
                return res.status(409).json({ message : 'no parent posts' }); 
            } else {
                post.parent = parentPost.id;
            }
            // } catch (error) {
            //     console.log('--------------------------------------------');
            //     console.log('ERROR IN GETTING POST PARENTS');
            //     console.log(error);
            //     return res.status(500).json({ message : "crash" })
            // }
        } else {
            post.parent = null;
        }
        // добавляем юзера в форум 

        await ForumModel.createForumUserPairUsingThread(post.author, slugOrId, isId);

        // увеличиваем счетчик постов в форуме 
        // try {
        await ForumModel.incrementPosts(slugOrId, isId);
        // } catch (error) {
        //     console.log('--------------------------------------------');
        //     console.log('ERROR IN threads increment');
        //     console.log(error);
        //     return res.status(500).json({ message : "crash" })
        // }

        const postId = await PostModel.getIdForPost();

        post.author = `(SELECT nickname FROM users WHERE nickname=${`'` + post.author + `'`})`;
        post.message = `'` + post.message + `'`;
        post.created = `'` + creationDate + `'`;
        post.thread = isId ? slugOrId : `(SELECT id FROM threads WHERE slug='${slugOrId}')`;
        post.forum = isId ? `(SELECT forum FROM threads WHERE id=${slugOrId})` : `(SELECT forum FROM threads WHERE slug='${slugOrId}')`
        post.id = parseInt(postId.nextval);
        const path = await constructPathToPost(post);
        post.pathtopost = `'` + path + `'`;
        postsValues.push(post);
    }

    // добавляем пост
    const result = []; 
    const columns = `(author, "message", parent, "created", thread, forum, id, pathtopost)`
    const valuesInStringQuery = valStr(postsValues);
    const query = `INSERT INTO posts ` + columns + ` VALUES ` + valuesInStringQuery + ` RETURNING *`;
    // console.log('NOT HERE');
    const addedPosts = await PostModel.createNewPostsByQuery(query);
    // console.log('ADDEDDD POSTS', addedPosts);
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