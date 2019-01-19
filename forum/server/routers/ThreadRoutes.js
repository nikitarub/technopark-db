import ThreadController from '../controllers/ThreadController.js';

async function threadRouter (fastify, options) {
    fastify.post('/api/thread/:slug_or_id/create', ThreadController.createPost);
    fastify.post('/api/thread/:slug_or_id/vote', ThreadController.voteForThread);
    fastify.get('/api/thread/:slug_or_id/details', ThreadController.getDetails);
    fastify.get('/api/thread/:slug_or_id/posts', ThreadController.getPosts);
    fastify.post('/api/thread/:slug_or_id/details', ThreadController.updateThread);
}

export default threadRouter;