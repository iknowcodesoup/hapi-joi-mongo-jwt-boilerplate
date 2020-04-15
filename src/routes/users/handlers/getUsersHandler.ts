import {
  Request,
  ResponseToolkit,
  Lifecycle
} from '@hapi/hapi';
import { User, IUser } from '../../../models/User';
import { badRequest, notFound } from '@hapi/boom';
import { IUserRequest } from '../../../models/types';

const getUsersHandler = (request: IUserRequest, responseToolkit: ResponseToolkit): any => {
  User
    .find()
    .select('-__v')
    .exec((err, users: IUser[]) => {
      if (err) {
        return badRequest(err.message);
      }
      if (!users.length) {
        return notFound('No users found!');
      }

      return responseToolkit.continue;
    });
};

export { getUsersHandler };