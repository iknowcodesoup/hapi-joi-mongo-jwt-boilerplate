import {
    Server
} from 'hapi';
import { appKey, secretKey } from './config';
import validateRequest from './validateRequest';
import { Buffer } from 'buffer';

const authSetup = (server: Server) => {
    server.auth.strategy('jwt', 'jwt', 'required',
        {
            key: new Buffer(secretKey, 'base64'),
            validateFunc: validateRequest,
            verifyOptions: {
                algorithms: ['HS256'],
                audience: appKey
            }
        });
};

export { authSetup };
