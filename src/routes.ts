import {
    IRouteConfiguration
} from 'hapi';
import * as Joi from 'joi';

import handler from './handler';

const routes: IRouteConfiguration[] = [
    {
        method: 'GET',
        path: '/ping',
        handler: handler.test,
    },
];

export default routes;
