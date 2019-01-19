import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import ThreadModel from '../models/ThreadModel.js';
import PostModel from '../models/PostModel.js';
import { harvestValues, harvestColumns, harvestKeyValues, idToInt } from '../utils.js';
import { parse } from 'url';
import 'babel-polyfill';


class PostController {
    async getDetails (request, reply) {
        // console.log(request.originalUrl, request.method);

        const postId = request.params['id'];
        const result = {};

        let postData;
        try {
            postData = await PostModel.getPostById(postId);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING POST BY ID');
            console.log(error);
        }

        if (!postData) {
            return reply.status(404).send({ message : 'cant find post' });
        }

        const relatedTo = request.query['related'];
        let entity;
        if (relatedTo) {
            const relatedEntities = relatedTo.split(',');
            for (let relatedEntity of relatedEntities) {
                if (relatedEntity === 'user') {
                    try {
                        entity = await UserModel.getUserByNickname(postData.author);
                        result.author = entity;
                    } catch (error) {
                        console.log('--------------------------------------------');
                        console.log('ERROR IN GETTING USER BY NICKNAME');
                        console.log(error);
                    }
                } else if (relatedEntity === 'thread') {
                    try {
                        entity = await ThreadModel.getThreadById(postData.thread);
                        entity.id = parseInt(entity.id);
                        result.thread = entity;
                    } catch (error) {
                        console.log('--------------------------------------------');
                        console.log('ERROR IN GETTING THREAD BY ID');
                        console.log(error);
                    }
                } else if (relatedEntity === 'forum') {
                    try {
                        entity = await ForumModel.getForumBySlug(postData.forum);
                        // entity.id = parseInt(entity.id);
                        result.forum = entity;
                    } catch (error) {
                        console.log('--------------------------------------------');
                        console.log('ERROR IN GETTING THREAD BY ID');
                        console.log(error);
                    }  
                }
            }
        }
        postData.id = parseInt(postData.id);
        postData.thread = parseInt(postData.thread);
        postData.parent = parseInt(postData.parent);
        result.post = postData;
        // console.log('post getDetails',result);
        return reply.status(200).send(result);
    }

    async updateDetails (request, reply) {
        // console.log(request.originalUrl, request.method);

        const postId = request.params['id'];
        const newData = request.body;

        let postData;
        try {
            postData = await PostModel.getPostById(postId);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING POST BY ID');
            console.log(error);
        }

        if (!postData) {
            return reply.status(404).send({ message : 'cant find post' });
        }

        // если было прислано пустое body
        // или все данные были присланы как пустые строки
        if (!Object.values(newData).length || newData.message === '') {
            postData.id = parseInt(postData.id);
            postData.thread = parseInt(postData.thread);
            postData.parent ? parseInt(postData.parent) : postData.parent;    
            return reply.status(200).send(postData);
        }

        let result;
        if (postData.message !== newData.message) {
            try {
                result = await PostModel.updatePost(newData.message, postId);
            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN UPDATIND POST');
                console.log(error); 
            }
    
            if (result === 'conflict') {
                return reply.status(409).send({ message : 'already existed data'});
            } else {
                result.id = parseInt(result.id);
                result.thread = parseInt(result.thread);
                result.parent ? parseInt(result.parent) : result.parent;   
                return reply.status(200).send(result);
            }
        } else {
            postData.id = parseInt(postData.id);
            postData.thread = parseInt(postData.thread);
            postData.parent ? parseInt(postData.parent) : postData.parent; 
            return reply.status(200).send(postData);
        }
    }




}


export default new PostController;