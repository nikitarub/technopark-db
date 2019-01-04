import express from 'express'
import UserModel from '../models/UserModel.js';

class UserController {
    createUser (req, res) {
        console.log(req);
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
                console.log(error);
            })
    }  
    
    updateUser (req, res) {
        console.log(req);
    }   
}

export default new UserController;