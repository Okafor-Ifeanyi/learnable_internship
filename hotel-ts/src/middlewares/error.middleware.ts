import { Request, Response, NextFunction } from 'express';

interface IHttpError extends Error {
  status?: number;
}

const errorHandler = (err: IHttpError, req: Request, res: Response, next: NextFunction) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    message: errorMessage,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export default errorHandler