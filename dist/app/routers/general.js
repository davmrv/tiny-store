"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_controller_1 = __importDefault(require("../controllers/index.controller"));
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const categoryProducts_controller_1 = __importDefault(require("../controllers/categoryProducts.controller"));
const router = express_1.default.Router();
const app = (0, express_1.default)();
router.get('/', index_controller_1.default);
// Authentication
router.post('/signup', auth_controller_1.signup);
router.post('/login', auth_controller_1.login);
router.get('/me', auth_middleware_1.default, auth_controller_1.me);
// Products
router.get('/products', product_controller_1.default.list);
router.get('/category/:category/products', categoryProducts_controller_1.default.list);
app.use('/', router);
exports.default = router;
//# sourceMappingURL=general.js.map