import express from 'express';
import userRouter from './routers/UserRoutes.js';
import forumRouter from './routers/ForumRoutes.js';


const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/forum', forumRouter);
app.get('/', () => {
  console.log('hello');
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});