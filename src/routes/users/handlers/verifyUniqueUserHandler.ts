import {
  Request,
  ResponseToolkit,
  Lifecycle
} from '@hapi/hapi';
import { User, IUser } from '../../../models/User';
import { badRequest } from '@hapi/boom';
import { IUserRequest } from '../../../models/types';

const verifyUniqueUserHandler = (request: IUserRequest, responseTookit: ResponseToolkit): any => {
  User.findOne({
    $or: [
      {
        email: request.payload.email
      },
      {
        username: request.payload.username
      }
    ]
  }, (err, user: IUser) => {
    if (user) {
      if (user.username === request.payload.username) {
        return badRequest('Username taken');
      }
      if (user.email === request.payload.email) {
        return badRequest('Email taken');
      }
    }
  });
};

export { verifyUniqueUserHandler };
