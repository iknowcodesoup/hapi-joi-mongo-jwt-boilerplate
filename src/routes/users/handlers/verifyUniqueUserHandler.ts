import {
    Request,
    IReply
} from 'hapi';
import User from 'models/User';
import Boom from 'boom';

const verifyUniqueUserHandler = (request: Request, reply: IReply) => {
	User.findOne({
		$or: [
			{
				email: request.payload.email
			},
			{
				username: request.payload.username
			}
    ]
	}, (err, user) => {
		if (user) {
			if (user.username === request.payload.username) {
				reply(Boom.badRequest('Username taken'));
				return;
			}
			if (user.email === request.payload.email) {
				reply(Boom.badRequest('Email taken'));
				return;
			}
		}
		reply(request.payload);
	});
};

export { verifyUniqueUserHandler };
