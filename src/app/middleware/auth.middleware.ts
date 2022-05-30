import { Request, Response, NextFunction } from 'express';
import { decodeUser } from '../lib/auth';

const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  try {
    request.user = await decodeUser(request.headers.authorization as string)
  } catch (error) {
    return response.send({
      message: 'Invalid token',
    });
  }
  return next();
}

export default authMiddleware;
