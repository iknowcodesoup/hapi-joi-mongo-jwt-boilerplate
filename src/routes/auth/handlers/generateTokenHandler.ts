import {
    Request,
    IReply
} from 'hapi';
import JWT from 'jsonwebtoken';
import tokenSecret from '../../../server/keys/token_secret';

const generateTokenHandler = (request: Request, reply: IReply) => {
    var obj = { id: 123, "name": "Charlie" };
    var token = JWT.sign(obj, tokenSecret);

    reply(token);
};

export { generateTokenHandler };
