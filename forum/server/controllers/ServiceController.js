import ServiceModel from '../models/ServiceModel.js';

class ServiceController {

    async countAll (request, reply) {
		// console.log(req.originalUrl, req.method);

        let result;
        try {   
            result = await ServiceModel.countAll();
        } catch (error) {
            console.log('--------------------------------------------');
            console.log(error);
            console.log('ERROR IN COUNTING');
            return reply.status(500).send({ message : "crash" });
        }
        // console.log('service countAll',result)
        return reply.status(200).send(result);
    }


    async clearAll (request, reply) {
        // console.log(req.originalUrl, req.method);
        console.log('REQUEST',request);

        try {   
            await ServiceModel.clearAll();
        } catch (error) {
            console.log('--------------------------------------------');
            console.log(error);
            console.log('ERROR IN COUNTING');
            return reply.status(500).send({ message : "crash" });
        }
        reply.type('application/json').status(200);
        return null;
    }
}

export default new ServiceController;