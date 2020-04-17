import {
  ResponseToolkit,} from '@hapi/hapi';
import { User, IUser } from '../../../models/User';
import { badRequest, notFound } from '@hapi/boom';
import { IUserPreRequest } from '../../../models/types';

const updateUserHandler = async (request: IUserPreRequest, responseToolkit: ResponseToolkit): Promise<any> => {
  const id = request.params.id;

  const updatedUser = await User.findOneAndUpdate({
    _id: id
  }, request.pre.user, (err, user: IUser) => {
    if (err) {
      return badRequest(err);
    }
    if (!user) {
      return notFound('User not found!');
    }

    return 'User updated';
  });
};

export { updateUserHandler };
