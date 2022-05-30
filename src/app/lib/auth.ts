import prisma from './prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserType } from '@prisma/client';

export const register = async (type: UserType, email: string, password: string) => {
  return await prisma.user.create({
    data: {
      type,
      email,
      password: await bcrypt.hash(password, 10),
    }
  });
}

export const attempt = async (email: string, password: string) => {
  const user = await prisma.user.findFirst({ where: { email } })
  const expiresIn: number = 60 * 60;

  if (!user || !bcrypt.compare(password, user.password)) {
    return false;
  }

  return {
    token: jwt.sign({
      id: user.id,
    }, process.env.JWT_SECRET as string, {
      expiresIn,
    }),
    expiresIn,
    type: 'Bearer',
  };
}

interface JwtPayload {
  id: number,
}

export const decodeUser = async (token: string) => {
  const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET as string) as JwtPayload;

  if (!decoded) {
    return false;
  }

  return await prisma.user.findFirst({
    where: { id: decoded.id },
    select: {
      password: false,
      email: true,
      id: true,
      type: true,
    }
  })
}
