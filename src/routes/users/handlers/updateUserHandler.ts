import {
  Request,
  ResponseToolkit,
  Lifecycle
} from '@hapi/hapi';
import { User, IUser } from '../../../models/User';
import { badRequest, notFound } from '@hapi/boom';
import { IUserPreRequest } from '../../../models/types';

const updateUserHandler = (request: IUserPreRequest, responseToolkit: ResponseToolkit) => {
  const id = request.params.id;

  User.findOneAndUpdate({
    _id: id
  }, request.pre.user, (err, user: IUser) => {
    if (err) {
      return badRequest(err);
    }
    if (!user) {
      return notFound('User not found!');
    }

    return responseToolkit.response('User updated');
  });
};

export { updateUserHandler };
