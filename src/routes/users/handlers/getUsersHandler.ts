import {
    Request,
    IReply
} from 'hapi';
import User from '../../../models/User';
import Boom from 'boom';

const getUsersHandler = (request: Request, reply: IReply) => {
    User
        .find()
        .select('-__v')
        .exec((err, users) => {
            if (err) {
                throw Boom.badRequest(err);
            }
            if (!users.length) {
                throw Boom.notFound('No users found!');
            }
            reply(users);
        })
};

export { getUsersHandler };
