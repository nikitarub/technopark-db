import express from 'express'
import ThreadController from '../controllers/ThreadController.js';

const threadRouter = express.Router();

threadRouter.post('/:slug_or_id/create', ThreadController.createPost);
threadRouter.post('/:slug_or_id/vote', ThreadController.voteForThread);

export default threadRouter;