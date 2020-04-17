import {
  ResponseToolkit,} from '@hapi/hapi';
import { User } from '../../../models/User';
import { badRequest } from '@hapi/boom';
import { IUserRequest } from '../../../models/types';

const verifyUniqueUserHandler = async (request: IUserRequest, responseTookit: ResponseToolkit): Promise<any> => {
  const user = await User.findOne({
    $or: [
      {
        email: request.payload.email
      },
      {
        username: request.payload.username
      }
    ]
  });

  if (user) {
    if (user.username === request.payload.username) {
      throw badRequest('Username taken');
    }
    if (user.email === request.payload.email) {
      throw badRequest('Email taken');
    }
  }
};

export { verifyUniqueUserHandler };
