import { Schema, Model, model } from 'mongoose';

export interface IRoomType {
  name: string;
}

type RoomTypeModel = Model<IRoomType>;

const roomTypeSchema = new Schema<IRoomType, RoomTypeModel>({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
});

const RoomType = model<IRoomType, RoomTypeModel>('RoomType', roomTypeSchema);

export default RoomType;
