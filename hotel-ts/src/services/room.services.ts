import { FilterQuery } from 'mongoose';
import Room, { IRoom } from '../models/room.model';

export const getRoom = async (filter:FilterQuery<IRoom>) => {
  try {
    return await Room.find(filter).populate('roomType', 'name -_id');
  } catch (error) {
    console.log(error);
    throw { status: 400, message: "Couldn't fetch rooms" };
  }
};

export const getRoomById = async (id:string) => {
  try {
    return await Room.findById(id);
  } catch (error) {
    throw { status: 404, message: 'Room was not found' };
  }
};

export const createRoom = async (input:IRoom) => {
  try {
    await Room.create(input);
  } catch (error) {
    throw { status: 400, message: "Room couldn't be created" };
  }
};

export const updateRoom = async (id:string, update:Partial<IRoom>) => {
  try {
    await Room.findByIdAndUpdate(id, update);
  } catch (error:any) {
    if (error.name == 'CastError') {
      throw { message: `Room with id ${id} doesn't exist`, status: 404 };
    } else {
      throw { status: 400, message: "Room couldn't be updated" };
    }
  }
};

export const deleteRoom = async (id:string) => {
  try {
    await Room.findByIdAndDelete(id);
  } catch (error:any) {
    if (error.name == 'CastError') {
      throw { message: `Room with id ${id} doesn't exist`, status: 404 };
    } else {
      throw { status: 400, message: "Room couldn't be deleted" };
    }
  }
};
