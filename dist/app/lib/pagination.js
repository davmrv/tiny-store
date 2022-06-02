"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPagination = void 0;
const buildPagination = ({ page = 1, perPage = 10 }) => {
    page = Number(page);
    perPage = Number(perPage);
    return {
        skip: (page - 1) * perPage,
        take: perPage,
        pagination: {
            page,
            perPage,
        }
    };
};
exports.buildPagination = buildPagination;
//# sourceMappingURL=pagination.js.map