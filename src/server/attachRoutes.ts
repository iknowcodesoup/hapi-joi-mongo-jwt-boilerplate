import {
  Server
} from '@hapi/hapi';
import routes from '../routes/index';

const attachRoutes = (server: Server) => {
  server.route(routes);
};

export { attachRoutes };
