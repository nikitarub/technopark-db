import PostController from '../controllers/PostController.js';

async function postRouter (fastify, options) {
    fastify.get('/api/post/:id/details', PostController.getDetails);
    fastify.post('/api/post/:id/details', PostController.updateDetails);
}

export default postRouter;