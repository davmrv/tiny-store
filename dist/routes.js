"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexController_1 = __importDefault(require("./app/controllers/indexController"));
const authController_1 = require("./app/controllers/authController");
const auth_middleware_1 = __importDefault(require("./app/middleware/auth.middleware"));
const router = express_1.default.Router();
const app = (0, express_1.default)();
router.get('/', indexController_1.default);
router.post('/login', authController_1.login);
router.get('/me', auth_middleware_1.default, authController_1.me);
app.use('/', router);
exports.default = router;
