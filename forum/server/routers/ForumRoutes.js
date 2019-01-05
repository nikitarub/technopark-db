import express from 'express'
import ForumController from '../controllers/ForumController.js';

const forumRouter = express.Router();

forumRouter.post('/create', ForumController.createForum);
forumRouter.post('/:slug/create', ForumController.createBranch);
forumRouter.get('/:slug/details', ForumController.getDetails);
// forumRouter.get('/:slug/threads', ForumController.getThreads);
// forumRouter.get('/:slug/users', ForumController.getUsers);

export default forumRouter;