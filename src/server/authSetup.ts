import {
    Server
} from 'hapi';
import authValidation from './authValidation';
import { Buffer } from 'buffer';
import tokenSecret from './keys/token_secret';

const authSetup = (server: Server) => {
    server.auth.strategy('jwt', 'jwt', 'required',
        {
            key: new Buffer(tokenSecret, 'base64'),
            verifyOptions: {
                algorithms: ['HS256']
            },
            urlKey: false,
            cookieKey: false,
            verifyFunc: authValidation
        });
};

export { authSetup };
