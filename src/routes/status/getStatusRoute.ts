import {
  ServerRoute
} from '@hapi/hapi';

import { statusHandler } from './handlers/statusHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';

const statusRoute: ServerRoute =
{
  method: 'GET',
  path: '/api/status',
  options: {
    tags: ['api', 'healthcheck', 'status'],
    auth: false,
    pre: [{ method: statusHandler, assign: 'response' }]
  },
  handler: defaultResponseHandler
};

export default statusRoute;
