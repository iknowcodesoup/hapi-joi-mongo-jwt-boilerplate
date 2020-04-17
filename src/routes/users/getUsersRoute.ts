import { getUsersHandler } from './handlers/getUsersHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';
import { ServerRoute } from '@hapi/hapi';

const getUsers: ServerRoute = {
  method: 'GET',
  path: '/users',
  options: {
    description: 'Get all Users',
    notes: 'Returns list of Users',
    tags: ['api', 'users'],
    //auth: {
    //  strategy: 'jwt',
    //  scope: ['admin']
    //},
    pre: [
      { method: getUsersHandler, assign: 'response' }
    ],
    handler: defaultResponseHandler
  }
}

export default getUsers;
