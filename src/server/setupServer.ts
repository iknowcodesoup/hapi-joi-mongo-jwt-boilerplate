import { Server } from '@hapi/hapi';
import { authSetupJwt } from './authSetupJwt';
import { authSetupSwagger } from './authSetupSwagger';
import { dbSetup } from './dbSetup';
import { attachRoutes } from './attachRoutes';
import { IServerConfig } from '../models/types';
import { addSwagger } from './addSwagger';

const serverSetup = async (): Promise<Server> => {
  let server = new Server({
    host: `localhost`,
    port: (<IServerConfig>process.env).HAPI_PORT,
    routes: {
      cors: true
    }
  });

  dbSetup();

  await authSetupJwt(server);
  await authSetupSwagger(server);
  attachRoutes(server);

  await addSwagger(server);

  return server;
};

export default serverSetup;
