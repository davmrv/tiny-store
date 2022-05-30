import { Request, Response } from 'express'
import { attempt } from '../lib/auth';

export const login = async (request: Request, response: Response) => {
  const token = await attempt(request.body.email, request.body.password);

  if (!token) {
    return response.json({
      'message': 'Invalid Credentials',
    });
  }

  return response.json(token);
}

export const me = async (request: Request, response: Response) => {
  return response.json(request.user);
}
