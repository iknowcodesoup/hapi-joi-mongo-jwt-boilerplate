import {
    Request,
    IReply
} from 'hapi';
import User from '../../../models/User';
import Boom from 'boom';

const updateUserHandler = (request: Request, reply: IReply) => {
    const id = request.params.id;
    User.findOneAndUpdate({
        _id: id
    }, request.pre.user, (err, user) => {
        if (err) {
            throw Boom.badRequest(err);
        }
        if (!user) {
            throw Boom.notFound('User not found!');
        }
        reply({
            message: 'User updated!'
        });
    });
};

export { updateUserHandler };
