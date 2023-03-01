import User, { IUser } from '../models/user.models';

const FindUser = async (email: Pick<IUser, 'email'>) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const CreateUser = async (input: IUser) => {
  try {
    await User.create(input);
  } catch (error) {
    console.log(error);
  }
};

const Get

export {FindUser, CreateUser}
