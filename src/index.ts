import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import generalRoutes from './app/routers/general';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(generalRoutes);

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});
