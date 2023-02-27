import { Request, Response, NextFunction } from 'express';
import * as services from '../services/room.services';

export const getRooms = async (req:Request, res:Response, next:NextFunction) => {
  const search = req.query.search || '';
  const minPrice = req.query.minPrice || 0;
  const maxPrice = req.query.maxPrice || Infinity;

  try {
    const rooms = await services.getRoom({
      name: { $regex: search, $options: 'i' },
      price: { $gt: minPrice, $lt: maxPrice }
    });
    return res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

export const getRoom = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;
  try {
    const room = await services.getRoomById(id);

    return res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

export const createRoom = async (req:Request, res:Response, next:NextFunction) => {
  const { name, roomType, price } = req.body;
  try {
    if (!name || !roomType || !price) {
      throw { status: 400, message: 'All fields must be filled' };
    }
    await services.createRoom({ name, roomType, price });
    return res.status(200).json({ message: 'Room created successfully' });
  } catch (error) {
    next(error);
  }  
};

export const updateRoom = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;
  try {
    await services.updateRoom(id, req.body);
    return res.status(201).json({ message: 'Room updated successfully' });
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;
  try {
    await services.deleteRoom(id);
    return res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    next(error);
  }
};
