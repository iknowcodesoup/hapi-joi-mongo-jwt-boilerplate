import {
    IRouteConfiguration
} from 'hapi';
//import * as Joi from 'joi';

import { statusHandler } from './handlers/statusHandler';

const statusRoute: IRouteConfiguration =
    {
        method: 'GET',
        path: '/status',
        config: {
            pre: [{ method: statusHandler, assign: 'status' }]
        },
        handler: function(request, reply) {
            reply(request.pre.status).code(200);
        }
    };

export default statusRoute;
