import ForumModel from '../models/ForumModel.js';
import UserModel from '../models/UserModel.js';
import ThreadModel from '../models/ThreadModel.js';
import PostModel from '../models/PostModel.js';
import { harvestValues, harvestColumns, harvestKeyValues, idToInt } from '../utils.js';
import { parse } from 'url';
import 'babel-polyfill';


class PostController {
    async getDetails (req, res) {
        const postId = req.params['id'];
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
            return res.status(404).json({ message : 'cant find post' });
        }

        const relatedTo = req.query['related'];
        console.log('RELATION', relatedTo);
        postData.id = parseInt(postData.id);
        postData.thread = parseInt(postData.thread);

        result.post = postData;
        return res.status(200).json(result);
    }

    async updateDetails (req, res) {
        const postId = req.params['id'];
        const newData = req.body;

        let postData;
        try {
            postData = await PostModel.getPostById(postId);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING POST BY ID');
            console.log(error);
        }

        if (!postData) {
            return res.status(404).json({ message : 'cant find post' });
        }


        // const columns = harvestColumns(newData);
        // const keyValues = harvestKeyValues(newData);

        // если было прислано пустое body
        // или все данные были присланы как пустые строки
        if (!Object.values(newData).length || newData.message === '') {
            postData.id = parseInt(postData.id);
            postData.thread = parseInt(postData.thread);
            postData.parent ? parseInt(postData.parent) : postData.parent;    
            return res.status(200).json(postData);
        }

        let result;
        try {
            result = await PostModel.updatePost(newData.message, postId);
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN UPDATIND POST');
            console.log(error); 
        }

        if (result === 'conflict') {
            return res.status(409).json({ message : 'already existed data'});
        } else {
            result.id = parseInt(result.id);
            result.thread = parseInt(result.thread);
            result.parent ? parseInt(result.parent) : result.parent;   
            return res.status(200).json(result);
        }
    }




}


export default new PostController;