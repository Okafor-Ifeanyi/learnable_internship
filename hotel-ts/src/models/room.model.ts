import { Schema, model, Model } from 'mongoose';

export interface IRoom {
  name: string;
  roomType: Schema.Types.ObjectId,
  price: number
}

type RoomModel = Model<IRoom>;

const roomSchema = new Schema<IRoom, RoomModel>({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
  roomType: {
    type: Schema.Types.ObjectId,
    ref: 'RoomType',
    required: [true, 'RoomType field is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price field is required'],
  },
});

const Room = model<IRoom, RoomModel>('Room', roomSchema);

export default Room;
