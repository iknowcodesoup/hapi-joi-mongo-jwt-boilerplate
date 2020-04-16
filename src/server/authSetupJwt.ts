import {
  Server
} from '@hapi/hapi';
import authValidation from './authValidation';
import { Buffer } from 'buffer';
import { IServerConfig } from '../models/types';
import * as hapiAuthJwt2 from 'hapi-auth-jwt2';

const authSetupJwt = async (server: Server): Promise<void> => {

  console.log(`Registering JWT auth.`)
  await server.register(hapiAuthJwt2)
    .then(() => {
      server.auth.strategy('jwt', 'jwt',
        {
          key: Buffer.from((<IServerConfig>process.env).TOKEN_SECRET, 'base64'),
          verifyOptions: {
            algorithms: ['HS256']
          },
          urlKey: false,
          cookieKey: false,
          validate: authValidation
        });
    });
};

export { authSetupJwt };
