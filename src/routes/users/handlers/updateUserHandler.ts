import {
    Request,
    IReply
} from 'hapi';
import { User } from 'models/index';
import Boom from 'boom';

const updateUserHandler = (request: Request, reply: IReply) => {
    const id = request.params.id;
    User.findOneAndUpdate({
        _id: id
    }, request.pre.user, (err, user) => {
        if (err) {
            return reply(Boom.badRequest(err));
        }
        if (!user) {
            return reply(Boom.notFound('User not found!'));
        }
        return reply({
            message: 'User updated!'
        });
    });
};

export { updateUserHandler };
