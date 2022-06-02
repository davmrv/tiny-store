"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index = (request, response) => {
    return response.send({
        message: 'Tiny Store API',
        version: 1,
    });
};
exports.default = index;
