import {
    Server
} from 'hapi';
import validateRequest from './validateRequest';
import { Buffer } from 'buffer';
import tokenSecret from './keys/token_secret';
import JWT from 'jsonwebtoken';
import Boom from 'boom';

const authSetup = (server: Server) => {
    server.auth.strategy('jwt', 'jwt', 'required',
        {
            key: new Buffer(tokenSecret, 'base64'),
            verifyOptions: {
                algorithms: ['HS256']
            },
            urlKey: false,
            cookieKey: false,
            verifyFunc: (_d, request, callback) => {
                try {
                    const decoded = JWT.verify(request.headers.authorization, tokenSecret);
                    if (decoded) {
                        return callback(null, true);
                    }
                } catch (e) {
                    return callback(Boom.unauthorized(null, 'jwt'));
                }
                return false;
            }
        });
};

export { authSetup };
