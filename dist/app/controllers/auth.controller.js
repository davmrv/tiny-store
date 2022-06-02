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
exports.me = exports.login = exports.signup = void 0;
const auth_1 = require("../lib/auth");
const signup = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, auth_1.register)(request.body.type, request.body.email, request.body.password);
    }
    catch (_a) {
        // TODO: Add more descriptive error messages :')
        return response.status(400).json({
            message: 'An error ocurred',
        });
    }
    return response.json(yield (0, auth_1.attempt)(request.body.email, request.body.password));
});
exports.signup = signup;
const login = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield (0, auth_1.attempt)(request.body.email, request.body.password);
    if (!token) {
        return response.json({
            'message': 'Invalid Credentials',
        });
    }
    return response.json(token);
});
exports.login = login;
const me = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return response.json(request.user);
});
exports.me = me;
//# sourceMappingURL=auth.controller.js.map