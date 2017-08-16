import {
    Server
} from 'hapi';
import validateRequest from './validateRequest';
import { Buffer } from 'buffer';
import privateKey from './keys/private_key';
import svappKey from './keys/svapp_key';

const authSetup = (server: Server) => {
    server.auth.strategy('jwt', 'jwt', 'required',
        {
            key: new Buffer(privateKey, 'base64'),
            validateFunc: validateRequest,
            verifyOptions: {
                algorithms: ['HS256'],
                audience: svappKey
            }
        });
};

export { authSetup };
