import express from 'express'
import UserModel from '../models/UserModel.js';
import { harvestColumns, harvestKeyValues } from '../utils.js'
import 'babel-polyfill';

class UserController {
    // createUser (req, res) {
    //     const nickname = req.params['nickname'];
    //     const email = req.body['email'];
    //     UserModel.getUserByNicknameOrEmail(nickname, email)
    //         .then( data => {
    //             if (data.length === 0) {
    //                 const newUserData = [
    //                     nickname,
    //                     req.body['fullname'],
    //                     req.body['about'],
    //                     req.body['email']
    //                 ];
    //                 UserModel.createNewUser(newUserData)
    //                     .then( data => {
    //                         return res.status(201).json(data);
    //                     })
    //                     .catch( error => {
    //                         console.log('--------------------------------------------');
    //                         console.log('ERROR IN CREATING');
    //                         console.log(error);
    //                     });
    //             } else {
    //                 return res.status(409).json(data);
    //             }
    //         })
    //         .catch( error => {
    //             console.log('--------------------------------------------');

    //             console.log('ERROR IN GETTING USER BY NICK OR EMAIL');
    //             console.log(error);
    //             return res.status(500).json({ message : "crash" })
    //         });
    // }    

    async createUser (req, res) {
        const nickname = req.params['nickname'];
        const email = req.body['email'];
        const newUserData = [
            nickname,
            req.body['fullname'],
            req.body['about'],
            email
        ];
        const result = await UserModel.createNewUser(newUserData);
        if (result) {
            return res.status(201).json(result);
        } else {
            let existingUser;
            try {
				existingUser = await UserModel.getUserByNicknameOrEmail(nickname, email);
				return res.status(409).json(existingUser)
            } catch (error) {
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICK OR EMAIL');
                console.log(error);
                return res.status(500).json({ message : "crash" })
            }
        }
    
    }



    getUser (req, res) {
        const nickname = req.params['nickname'];
        UserModel.getUserByNickname(nickname)
            .then( user => {
                if (user) {
                    return res.status(200).json(user);
                }                
                return res.status(404).json({ message : "Can't find user" })
            })
            .catch( error => {
                console.log('--------------------------------------------');
                console.log('ERROR IN GETTING USER BY NICK');
                console.log(error);
                return res.status(500).json({ message : "crash" })
            });
    }  

    
    async updateUser (req, res) {
        const nickname = req.params['nickname'];
        const newData = req.body;

        
        // существует ли пользователь
        let user;
        try {
            user = await UserModel.getUserByNickname(nickname);
            if (!user) {
                return res.status(404).json({ message : "Can't find user" })
            }
        } catch (error) {
            console.log('--------------------------------------------');
            console.log('ERROR IN GETTING USER BY NICK');
            console.log(error);
            return res.status(500).json({ message : "crash" })
        }

        const keyValues = harvestKeyValues(newData);
        const columns = harvestColumns(newData);
        let result;
        if (!Object.values(newData).length || !columns.length) {
            return res.status(200).json(user);
        }

        // если хотя бы какие-то данные были не пустые

        result = await UserModel.updateUser(nickname,columns,keyValues)
        if (!result) {
            return res.status(409).json({ message : "User with such nickname or email already exists" });
        } else {
            return res.status(200).json(result);
        }

    }
}

export default new UserController;