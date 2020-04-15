'use strict';

import { getUsersHandler } from './handlers/getUsersHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';
import { ServerRoute } from '@hapi/hapi';

const getUsers: ServerRoute = {
  method: 'GET',
  path: '/api/users',
  options: {
    auth: 'jwt',
    pre: [
      { method: getUsersHandler, assign: 'response' }
    ],
    handler: defaultResponseHandler
  }
}

export default getUsers;
