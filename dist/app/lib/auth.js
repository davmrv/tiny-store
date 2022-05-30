"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeUser = exports.attempt = void 0;
const prisma_1 = __importDefault(require("./prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const attempt = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findFirst({ where: { email } });
    const expiresIn = 60 * 60;
    if (!user || !bcrypt_1.default.compare(password, user.password)) {
        return false;
    }
    return {
        token: jsonwebtoken_1.default.sign({
            id: user.id,
        }, process.env.JWT_SECRET, {
            expiresIn,
        }),
        expiresIn,
        type: 'Bearer',
    };
});
exports.attempt = attempt;
const decodeUser = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.verify(token.split(' ')[1], process.env.JWT_SECRET);
    if (!decoded) {
        return false;
    }
    return yield prisma_1.default.user.findFirst({
        where: { id: decoded.id },
        select: {
            password: false,
            email: true,
            id: true,
            type: true,
        }
    });
});
exports.decodeUser = decodeUser;
