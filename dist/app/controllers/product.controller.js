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
const pagination_1 = require("../lib/pagination");
const prisma_1 = __importDefault(require("../lib/prisma"));
class productsController {
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { skip, take, pagination } = (0, pagination_1.buildPagination)(request.query);
            return response.json({
                data: yield prisma_1.default.product.findMany({
                    skip,
                    take,
                }),
                pagination,
            });
        });
    }
}
exports.default = new productsController;
//# sourceMappingURL=product.controller.js.map