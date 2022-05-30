import { Request, Response } from 'express'
import { attempt, register } from '../lib/auth';

export const signup = async (request: Request, response: Response) => {
  try {
    await register(request.body.type, request.body.email, request.body.password);
  } catch {
    // TODO: Add more descriptive error messages :')
    return response.status(400).json({
      message: 'An error ocurred',
    });
  }

  return response.json(await attempt(request.body.email, request.body.password));
}

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
