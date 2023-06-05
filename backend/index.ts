import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user';
import bookRouter from './routes/book';
import authRouter from './routes/auth';
import checkAuth from './middlewares/checkAuth';

// Read config from .env
dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3000;

// Use express json middleware
app.use(express.json());

app.use('/api/auth/',authRouter);
// app.use('/api/user/',checkAuth,userRouter);
app.use('/api/book/',checkAuth,bookRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is librino api backend, use the endpoint /api to talk with me');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
