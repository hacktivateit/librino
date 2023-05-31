import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/user';
import bookRouter from './routes/book';

// Read config from .env
dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3000;

// Use express json middleware
app.use(express.json());

app.use('/api',userRouter);
app.use('/api',bookRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello librino');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
