import UserModel from '../models/UserModel.js';
import { harvestColumns, harvestKeyValues } from '../utils.js'
import 'babel-polyfill';

class UserController {

    async createUser (request, reply) {
        // console.log(req.originalUrl, req.method);
        const nickname = request.params['nickname'];
        const email = request.body['email'];
        const newUserData = [
            nickname,
            request.body['fullname'],
            request.body['about'],
            email
        ];
        const result = await UserModel.createNewUser(newUserData);
        if (result) {
            return reply.status(201).send(result);
        } else {
            let existingUser;
            try {
				existingUser = await UserModel.getUserByNicknameOrEmail(nickname, email);
				return reply.status(409).send(existingUser)
            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICK OR EMAIL');
                console.log(error);
                return reply.status(500).send({ message : "crash" })
            }
        }
    
    }



    getUser (request, reply) {
        // console.log(req.originalUrl, req.method);

        const nickname = request.params['nickname'];
        UserModel.getUserByNickname(nickname)
            .then( user => {
                if (user) {
                    // console.log('getUser', user);
                    return reply.status(200).send(user);
                }                
                return reply.status(404).send({ message : "Can't find user" })
            })
            .catch( error => {
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICK');
                console.log(error);
                return reply.status(500).send({ message : "crash" })
            });
    }  

    
    async updateUser (request, reply) {
        // console.log(req.originalUrl, req.method);

        const nickname = request.params['nickname'];
        const newData = request.body;

        // существует ли пользователь
        let user;
        try {
            user = await UserModel.getUserByNickname(nickname);
            if (!user) {
                return reply.status(404).send({ message : "Can't find user" })
            }
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING USER BY NICK');
            console.log(error);
            return reply.status(500).send({ message : "crash" })
        }

        const keyValues = harvestKeyValues(newData);
        const columns = harvestColumns(newData);
        let result;
        if (!Object.values(newData).length || !columns.length) {
            return reply.status(200).send(user);
        }

        // если хотя бы какие-то данные были не пустые

        result = await UserModel.updateUser(nickname,columns,keyValues)
        if (!result) {
            return reply.status(409).send({ message : "User with such nickname or email already exists" });
        } else {
            return reply.status(200).send(result);
        }

    }
}

export default new UserController;