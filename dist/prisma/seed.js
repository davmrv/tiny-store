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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.product.upsert({
            where: { id: 1 },
            update: {},
            create: {
                name: 'Razer Basilisk Ultimate',
                category: {
                    create: {
                        name: 'Gaming Mice',
                    },
                },
            }
        });
        yield prisma.product.upsert({
            where: { id: 2 },
            update: {},
            create: {
                name: 'Razer Huntsman mini',
                category: {
                    create: {
                        name: 'Gaming Keyboard',
                    },
                },
            }
        });
        yield prisma.product.upsert({
            where: { id: 3 },
            update: {},
            create: {
                name: 'Razer Tartarus',
                categoryId: 2
            },
        });
    });
}
seed();
//# sourceMappingURL=seed.js.map