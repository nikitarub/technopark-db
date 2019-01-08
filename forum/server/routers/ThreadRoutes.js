import express from 'express'
import ThreadController from '../controllers/ThreadController.js';

const threadRouter = express.Router();

threadRouter.post('/:slug_or_id/create', ThreadController.createPost);
threadRouter.post('/:slug_or_id/vote', ThreadController.voteForThread);
threadRouter.get('/:slug_or_id/details', ThreadController.getDetails);
threadRouter.get('/:slug_or_id/posts', ThreadController.getPosts);
threadRouter.post('/:slug_or_id/details', ThreadController.updateThread);


export default threadRouter;