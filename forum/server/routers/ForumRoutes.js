import ForumController from '../controllers/ForumController.js';

async function forumRouter (fastify, options) {
    fastify.post('/api/forum/create', ForumController.createForum);
    fastify.post('/api/forum/:slug/create', ForumController.createThreadInForum);
    fastify.get('/api/forum/:slug/details', ForumController.getDetails);
    fastify.get('/api/forum/:slug/threads', ForumController.getThreads);
    fastify.get('/api/forum/:slug/users', ForumController.getUsers);
}

export default forumRouter;