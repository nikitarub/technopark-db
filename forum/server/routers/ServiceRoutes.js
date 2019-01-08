import express from 'express'
import ServiceController from '../controllers/ServiceController.js';

const serviceRouter = express.Router();

serviceRouter.get('/status', ServiceController.countAll);
serviceRouter.post('/clear', ServiceController.clearAll);

export default serviceRouter;