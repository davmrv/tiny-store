import express, { Router, Express } from 'express';
import index from '../controllers/index.controller';
import { signup, login, me } from '../controllers/auth.controller';
import authMiddleware from '../middleware/auth.middleware';
import productsController from '../controllers/product.controller';

const router: Router = express.Router();
const app: Express = express();

router.get('/', index);

// Authentication
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', authMiddleware, me);

// Products
router.get('/products', productsController.list);

app.use('/', router);

export default router;
