import ServiceModel from '../models/ServiceModel.js';

class ServiceController {

    async countAll (req, res) {
		// console.log(req.originalUrl, req.method);

        let result;
        try {   
            result = await ServiceModel.countAll();
        } catch (error) {
            console.log('--------------------------------------------');
            console.log(error);
            console.log('ERROR IN COUNTING');
            return res.status(500).json({ message : "crash" });
        }
        // console.log('service countAll',result)
        return res.status(200).json(result);
    }


    async clearAll (req, res) {
        // console.log(req.originalUrl, req.method);

        let result;
        try {   
            result = await ServiceModel.clearAll();
        } catch (error) {
            console.log('--------------------------------------------');
            console.log(error);
            console.log('ERROR IN COUNTING');
            return res.status(500).json({ message : "crash" });
        }
        return res.status(200).end();
    }
}

export default new ServiceController;