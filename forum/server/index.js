// import express from 'express';
const fastify = require('fastify')({
  logger: false
});
import userRouter from './routers/UserRoutes.js';
import forumRouter from './routers/ForumRoutes.js';
import threadRouter from './routers/ThreadRoutes.js';
import postRouter from './routers/PostRoutes.js';
import serviceRouter from './routers/ServiceRoutes.js';
import ServiceModel from './models/ServiceModel.js';


fastify.register(userRouter);
fastify.register(forumRouter);
fastify.register(threadRouter);
fastify.register(postRouter);
fastify.register(serviceRouter);


const port = process.env.PORT || 5000;

fastify.post('/api/service/clear', async (request, reply) => {
	// console.log(req.originalUrl, req.method);
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
});


fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
    try {
      var json = JSON.parse(body)
      done(null, json)
    } catch (err) {
    //   err.statusCode = 400
      done(null, undefined);
    }
  });

fastify.listen(port, (err,address) => {
	console.log(`Server listening on port ${port}`);
});




// const app = express();

// app.use(express.json());

// app.use('/api/user', userRouter);
// app.use('/api/forum', forumRouter);
// app.use('/api/thread', threadRouter);
// app.use('/api/post', postRouter);
// app.use('/api/service', serviceRouter);
// app.get('/', () => {
//   console.log('hello');
// })


// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });