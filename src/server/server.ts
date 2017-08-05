import * as Hapi from 'hapi';

import serverConfig from '../config/server';
//import plugins          from './plugins';
import routes from './routes';

const server = new Hapi.Server();

server.connection(serverConfig);

//plugins( server );
routes(server);

export default server;
