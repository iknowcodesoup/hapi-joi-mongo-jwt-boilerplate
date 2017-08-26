import {
    Request,
    IReply
} from 'hapi';
import User from 'models/User';
import Boom from 'boom';

const getUsersHandler = (request: Request, reply: IReply) => {
    User
        .find()
        .select('-__v')
        .exec((err, users) => {
            if (err) {
                return reply(Boom.badRequest(err));
            }
            if (!users.length) {
                return reply(Boom.notFound('No users found!'));
            }
            return reply(users);
        })
};

export { getUsersHandler };
