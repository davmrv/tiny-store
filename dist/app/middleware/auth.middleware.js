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
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../lib/auth");
const authMiddleware = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        request.user = yield (0, auth_1.decodeUser)(request.headers.authorization);
    }
    catch (error) {
        return response.send({
            message: 'Invalid token',
        });
    }
    return next();
});
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map