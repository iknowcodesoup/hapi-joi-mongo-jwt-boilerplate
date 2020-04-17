import {
  ResponseToolkit,} from '@hapi/hapi';
import { User, IUser } from '../../../models/User';
import { notFound } from '@hapi/boom';
import { IUserRequest } from '../../../models/types';

const getUserHandler = async (request: IUserRequest, responseToolkit: ResponseToolkit): Promise<IUser> => {
  const id = request.params.id;

  const user = await User
    .findById(id)
    .select('-__v')

  if (user !== null)
    return user;

  throw notFound('User not found!');
};

export { getUserHandler };