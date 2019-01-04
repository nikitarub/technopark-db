import express from 'express';
import userRouter from './routers/userRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.get('/', () => {
  console.log('hello');
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});