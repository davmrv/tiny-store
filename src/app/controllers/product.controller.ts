import { Request, Response } from 'express';
import { buildPagination } from '../lib/pagination';
import prisma from '../lib/prisma';

class productsController {
  async list(request: Request, response: Response) {
    const { skip, take, pagination } = buildPagination(request.query);

    return response.json({
      data: await prisma.product.findMany({
        skip,
        take,
      }),
      pagination,
    });
  }
}

export default new productsController;
