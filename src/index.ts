import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routers from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routers);

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});
