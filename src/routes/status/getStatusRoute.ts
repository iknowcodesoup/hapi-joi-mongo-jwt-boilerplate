import {
    IRouteConfiguration
} from 'hapi';

import { statusHandler } from './handlers/statusHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';

const statusRoute: IRouteConfiguration =
    {
        method: 'GET',
        path: '/api/status',
        config: {
            auth: 'jwt',
            pre: [{ method: statusHandler, assign: 'response' }]
        },
        handler: defaultResponseHandler
    };

export default statusRoute;
