import { Request, Response } from 'express';
import { buildPagination } from '../lib/pagination';
import prisma from '../lib/prisma';

class categoriesController {
  async list(request: Request, response: Response) {
    const { skip, take, pagination } = buildPagination(request.query);

    return response.json({
      data: await prisma.category.findMany({
        skip,
        take,
      }),
      pagination
    });
  }

  async single(request: Request, response: Response) {
    return response.json(await prisma.category.findFirst({
      where: {
        id: Number(request.params.category),
      },
    }));
  }
}

export default new categoriesController;
