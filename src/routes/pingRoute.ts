import {
    IRouteConfiguration
} from 'hapi';
//import * as Joi from 'joi';

import { pingTest } from './handlers/pingHandler';

const pingRoute: IRouteConfiguration =
    {
        method: 'GET',
        path: '/ping',
        config: {
            pre: [{ method: pingTest, assign: 'pingResponse' }]
        },
        handler: function(request, reply) {
            console.log(request.pre);
            reply(request.pre.pingResponse);
        }
    };

export default pingRoute;
