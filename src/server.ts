import express, {Express} from 'express';
import dotenv from 'dotenv';
import route from './controller/route';

dotenv.config();

const app : Express = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1', route);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});