import {
  Server
} from '@hapi/hapi';
import authValidation from './authValidation';
import { Buffer } from 'buffer';
import tokenSecret from './keys/token_secret';
import * as hapiAuthJwt2 from 'hapi-auth-jwt2';

const authSetup = async (server: Server): Promise<void> => {
  await server.register(hapiAuthJwt2);

  server.auth.strategy('jwt', 'jwt',
    {
      key: Buffer.from(tokenSecret, 'base64'),
      verifyOptions: {
        algorithms: ['HS256']
      },
      urlKey: false,
      cookieKey: false,
      validate: authValidation
    });
};

export { authSetup };
