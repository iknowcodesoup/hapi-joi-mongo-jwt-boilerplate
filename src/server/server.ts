import * as Hapi from 'hapi';
import { authSetup } from './authSetup';
import { hapiConfig } from './config';
import { attachRoutes } from './attachRoutes';
import * as jwtAuth from 'hapi-auth-jwt2';
//import plugins          from './plugins';

const server = new Hapi.Server();

server.connection(hapiConfig);
server.register(jwtAuth, () => { authSetup(server); });

//plugins( server );

attachRoutes(server);

export default server;
