import {
  Server
} from '@hapi/hapi';
import authValidation from './authValidation';
import { Buffer } from 'buffer';
import tokenSecret from './keys/token_secret';

const authSetup = (server: Server): void => {
  server.auth.strategy('jwt', 'jwt',
    {
      key: new Buffer(tokenSecret, 'base64'),
      verifyOptions: {
        algorithms: ['HS256']
      },
      urlKey: false,
      cookieKey: false,
      verifyFunc: authValidation
    });

  server.auth.default('jwt');
};

export { authSetup };
