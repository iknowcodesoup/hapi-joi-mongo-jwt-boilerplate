import {
  ResponseToolkit
} from '@hapi/hapi';
import { User, IUser } from '../../../models/User';
import { badRequest } from '@hapi/boom';
import { IUserRequest } from '../../../models/types';

const createUserHandler = async (request: IUserRequest, responseToolkit: ResponseToolkit): Promise<IUser> => {
  let user = new User();

  user.email = request.payload.email;
  user.username = request.payload.username;

  const newUser = await User.create(user)
    .catch(err => {
      throw badRequest(err);
   });

  return newUser;
};

export { createUserHandler };
