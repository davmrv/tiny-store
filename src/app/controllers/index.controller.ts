import { Request, Response } from 'express';

const index = (request: Request, response: Response) => {
  return response.send({
    message: 'Tiny Store API',
    version: 1,
  });
}

export default index;
