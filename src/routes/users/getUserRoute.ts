import { getUserHandler } from './handlers/getUserHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';
import { ServerRoute } from '@hapi/hapi';

const getUser: ServerRoute = {
  method: 'GET',
  path: '/users/{id}',
  options: {
    description: 'Get a User',
    notes: 'Returns the Users',
    tags: ['api', 'users'],
    //auth: 'jwt',
    pre: [
      { method: getUserHandler, assign: 'response' }
    ],
    handler: defaultResponseHandler
  }
}

export default getUser;
