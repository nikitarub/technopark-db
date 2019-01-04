import express from 'express'
import UserController from '../controllers/UserController.js';

const userRouter = express.Router();

userRouter.post('/:nickname/create', UserController.createUser);
userRouter.post('/:nickname/profile', UserController.updateUser);
userRouter.get('/:nickname/profile', UserController.getUser);

export default userRouter;