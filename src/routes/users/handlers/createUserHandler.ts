import {
  Request,
  ResponseToolkit
} from '@hapi/hapi';
import { IUser, User } from '../../../models/User';
import { badRequest } from '@hapi/boom';
import { IUserRequest } from '../../../models/types';

const createUserHandler = (request: IUserRequest, responseToolkit: ResponseToolkit): any => {
  let user = new User();
  user.email = request.payload.email;
  user.username = request.payload.username;
  user.save((err, user: IUser) => {
    if (err) {
      return badRequest(err);
    }

    return responseToolkit.response('User created').code(201);
  });
};

export { createUserHandler };
