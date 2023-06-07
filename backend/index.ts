import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import bookRouter from './routes/book';
import authRouter from './routes/auth';
import checkAuth from './middlewares/checkAuth';
import cors from 'cors';

// Read config from .env
dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3000;

// This SHOULD enable cors for every domain
// https://expressjs.com/en/resources/middleware/cors.html#simple-usage-enable-all-cors-requests
app.use(cors());

// Use express json middleware
app.use(express.json());

app.use('/api/auth/',authRouter);
app.use('/api/book/',checkAuth,bookRouter);
//Used for debug
//app.use('/api/user/',checkAuth,userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is librino api backend, use the endpoint /api to talk with me');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
