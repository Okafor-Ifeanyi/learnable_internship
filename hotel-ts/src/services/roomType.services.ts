import RoomType, { IRoomType } from '../models/roomType.model';

export const getRoomTypes = async () => {
  try {
    return await RoomType.find();
  } catch (error) {
    throw { status: 400, message: "Could't fetch room types" };
  }
};

export const createRoomType = async (input: IRoomType) => {
  try {
    return await RoomType.create(input);
  } catch (error:any) {
    if (error.name == 'ValidationError') {
      throw { status: 400, message: error.message };
    } else {
      throw { status: 400, message: 'Couldn\'t create room type' };
    }
  }
};
