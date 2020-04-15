import { Server } from '@hapi/hapi';
import { authSetup } from './authSetup';
import { dbSetup } from './dbSetup';
import { attachRoutes } from './attachRoutes';
import { IServerConfig } from '../models/types';

const serverSetup = async (): Promise<Server> => {
  let server = new Server({
    host: `localhost`,
    port: (<IServerConfig>process.env).HAPI_PORT,
    routes: {
      cors: true
    }
  });

  dbSetup();
  await authSetup(server);
  attachRoutes(server);

  return server;
};

export default serverSetup;
