import { Request, Response } from 'express';
import { buildPagination } from '../lib/pagination';
import prisma from '../lib/prisma';

class categoryProductsController {
  async list(request: Request, response: Response) {
    const { skip, take, pagination } = buildPagination(request.query);

    return response.json({
      data: await prisma.product.findMany({
        where: {
          categoryId: Number(request.params.category),
        },
        skip,
        take,
      }),
      pagination,
    });
  }
}

export default new categoryProductsController;
