import express, { Router, Express } from 'express';
import index from './app/controllers/indexController';
import { signup, login, me } from './app/controllers/authController';
import authMiddleware from './app/middleware/auth.middleware';

const router: Router = express.Router();
const app: Express = express();

router.get('/', index);
router.post('/signup', signup)
router.post('/login', login)
router.get('/me', authMiddleware, me)

app.use('/', router);

export default router;
