import express from 'express';
import userRouter from './routers/UserRoutes.js';
import forumRouter from './routers/ForumRoutes.js';
import threadRouter from './routers/ThreadRoutes.js';
import postRouter from './routers/PostRoutes.js';
import serviceRouter from './routers/ServiceRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/forum', forumRouter);
app.use('/api/thread', threadRouter);
app.use('/api/post', postRouter);
app.use('/api/service', serviceRouter);
app.get('/', () => {
  console.log('hello');
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});