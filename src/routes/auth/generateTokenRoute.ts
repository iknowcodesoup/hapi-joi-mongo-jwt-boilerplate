import {
  ServerRoute
} from '@hapi/hapi';

import { generateTokenHandler } from './handlers/generateTokenHandler';
import { tokenResponseHandler } from './handlers/tokenResponseHandler';

const generateTokenRoute: ServerRoute =
{
  method: 'GET',
  path: '/auth/token',
  options: {
    description: 'Generate Token',
    notes: 'Generates a new Token',
    tags: ['api', 'jwt', 'token'],
    auth: false,
    pre: [
      // TODO: Check for valid Oauth and app key
      // TODO: Find user if exists, if not create them
      { method: generateTokenHandler, assign: 'token' }]
  },
  handler: tokenResponseHandler
};

export default generateTokenRoute;
