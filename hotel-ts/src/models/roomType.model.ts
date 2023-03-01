import { Schema, Model, model } from 'mongoose';

export interface roomType {
  name: string;
}

type RoomTypeModel = Model<roomType>;

const roomTypeSchema = new Schema<roomType, RoomTypeModel>({
  name: {
    type: String,
    required: [true, 'Name field is required'],
  },
});

const RoomType = model<roomType, RoomTypeModel>('RoomType', roomTypeSchema);

export default RoomType;
