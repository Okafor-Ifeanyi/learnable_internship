import { Request, Response, NextFunction } from 'express';
import * as services from '../services/roomType.services';

export const getRoomTypes = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const rooms = await services.getRoomTypes();
    return res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

export const createRoomType = async (req:Request, res:Response, next:NextFunction) => {
  const { name } = req.body;
  try {
    if (!name) {
      throw { status: 400, message: 'All fields must be filled' };
    }

    await services.createRoomType({ name });
    return res.status(200).json({ message: 'Room Type created successfully' });
  } catch (error) {
    next(error);
  }
};
