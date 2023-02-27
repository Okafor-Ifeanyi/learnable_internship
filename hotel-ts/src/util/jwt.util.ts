import jwt, { SignOptions } from 'jsonwebtoken';
import { Types } from 'mongoose';

interface IPayload {
  _id: Types.ObjectId;
  role: string;
}
interface IDecoded {
  decoded: { _id: Types.ObjectId; role: string; exp: number; iat: number } | null;
  expired: boolean;
}

const JWT_SECRET = process.env.JWT_SECRET!;

export const generateToken = (payload: IPayload, options: SignOptions) => {
  return jwt.sign(payload, JWT_SECRET, { ...options });
};

export const verifyToken = (token: string):IDecoded => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as IDecoded['decoded'];
    return {
      expired: false,
      decoded,
    };
  } catch (e: any) {
    return {
      expired: e.message === 'jwt expired',
      decoded: null,
    };
  }
};
