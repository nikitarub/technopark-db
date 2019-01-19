import ServiceController from '../controllers/ServiceController.js';

async function serviceRouter (fastify, options) {
    fastify.get('/api/service/status', ServiceController.countAll);
}

export default serviceRouter;