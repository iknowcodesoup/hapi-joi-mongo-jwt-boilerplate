'use strict';

import User from 'models/User';
import Boom from 'boom';
import { getUsersHandler } from './handlers/getUsersHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';

const getUsers = {
    method: 'GET',
    path: '/api/users',
    config: {
        auth: 'jwt',
        pre: [
            { method: getUsersHandler, assign: 'response' }
        ],
        handler: defaultResponseHandler
    }
}

export default getUsers;
