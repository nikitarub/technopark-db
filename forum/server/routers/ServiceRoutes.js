import ServiceController from '../controllers/ServiceController.js';

async function serviceRouter (fastify, options) {
    fastify.get('/api/service/status', ServiceController.countAll);
    // fastify.delete('/api/service/clear', ServiceController.clearAll);
}

export default serviceRouter;