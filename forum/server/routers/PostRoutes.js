import express from 'express'
import PostController from '../controllers/PostController.js';

const postRouter = express.Router();

postRouter.get('/:id/details', PostController.getDetails);
postRouter.post('/:id/details', PostController.updateDetails);

export default postRouter;