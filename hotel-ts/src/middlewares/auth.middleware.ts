import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../util/jwt.util';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized access, user not admin' });
  }

  next();
};

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  let token;

  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return res.status(403).json({ message: 'Invalid token, Unauthorized user' });
  }

  token = req.headers.authorization.split(' ')[1];

  const { decoded, expired } = verifyToken(token);

  if (expired) {
    return res.status(403).json({ message: 'Expired token, Unauthorized user' });
  }

  req.user = { _id: decoded?._id, role: decoded?.role };
  next();
};
