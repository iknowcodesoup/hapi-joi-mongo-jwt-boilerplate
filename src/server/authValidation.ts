import tokenSecret from './keys/token_secret';
import JWT from 'jsonwebtoken';
import Boom from 'boom';

const authValidation = (_d, request, callback) => {
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

export default authValidation;
