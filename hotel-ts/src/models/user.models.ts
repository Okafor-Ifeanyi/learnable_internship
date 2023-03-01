import { Schema, model, Model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface user {
  email: string;
  password: string;
  role: string;
}

interface UserMethods {
  matchPassword(password: string): Promise<boolean>;
}

type UserModel = Model<user, object, UserMethods>;

const userSchema = new Schema<user, UserModel, UserMethods>(
  {
    email: {
      type: String,
      required: [true, 'Email field is required'],
    },
    password: {
      type: String,
      required: [true, 'Password field is required'],
    },
    role: {
      type: String,
      enum: ['guest', 'admin'],
      default: 'guest',
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model<user, UserModel>('User', userSchema);

export default user;
