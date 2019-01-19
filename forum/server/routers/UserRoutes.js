import UserController from '../controllers/UserController.js';

async function userRouter (fastify, options) {
    fastify.post('/api/user/:nickname/create', UserController.createUser);
    fastify.post('/api/user/:nickname/profile', UserController.updateUser);
	fastify.get('/api/user/:nickname/profile', UserController.getUser);
}

export default userRouter;