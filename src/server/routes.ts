import {
    Server
} from 'hapi';
import handler from '../handler';
import routes from '../routes';

const attachRoutes = (server: Server) => {
    server.route(routes);
};

export default attachRoutes;
