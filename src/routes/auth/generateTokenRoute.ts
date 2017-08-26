import {
    IRouteConfiguration
} from 'hapi';

import { generateTokenHandler } from './handlers/generateTokenHandler';
import { tokenResponseHandler } from './handlers/tokenResponseHandler';

const generateTokenRoute: IRouteConfiguration =
    {
        method: 'GET',
        path: '/api/auth/token',
        config: {
            auth: false,
            pre: [
                // TODO: Check for valid Oauth and app key
                // TODO: Find user if exists, if not create them
                { method: generateTokenHandler, assign: 'token' }]
        },
        handler: tokenResponseHandler
    };

export default generateTokenRoute;
