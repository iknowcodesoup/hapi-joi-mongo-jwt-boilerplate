import {
  ResponseToolkit,} from '@hapi/hapi';
import { User, IUser } from '../../../models/User';
import { notFound } from '@hapi/boom';
import { IUserRequest } from '../../../models/types';

const getUsersHandler = async (request: IUserRequest, responseToolkit: ResponseToolkit): Promise<IUser[]> => {
  const users = await User
    .find()
    .select('-__v');

  if (users.length) {
    return users;
  }

  throw notFound('No users found!');
};

export { getUsersHandler };