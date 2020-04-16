import {
  Server
} from '@hapi/hapi';
import { IServerConfig } from '../models/types';
import * as hapiAuthHeader from 'hapi-auth-header';

const authSetupSwagger = async (server: Server): Promise<void> => {

  console.log(`Registering Swagger auth.`)
  await server.register(hapiAuthHeader)
    .then(() => {
      server.auth.strategy('swagger-auth', 'auth-header', {
        validateFunc: async (tokens: any): Promise<any> => {
          if (tokens.Bearer === (<IServerConfig>process.env).SWAGGER_API) {
            return Promise.resolve([true, { token: tokens.bearer }])
          } else {
            return Promise.resolve([false, { token: tokens.bearer }])
          }
        }
      });
    });
};

export { authSetupSwagger };
