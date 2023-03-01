import { Schema, model, Model } from 'mongoose';

export interface room {
  name: string;
  roomType: Schema.Types.ObjectId,
  price: number
}

type RoomModel = Model<room>;

const roomSchema = new Schema<room, RoomModel>({
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

const Room = model<room, RoomModel>('Room', roomSchema);

export default Room;
