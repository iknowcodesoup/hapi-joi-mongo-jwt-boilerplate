import { verifyUniqueUserHandler } from './handlers/verifyUniqueUserHandler';
import { createUserHandler } from './handlers/createUserHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';
import * as Joi from "@hapi/joi";
import { ServerRoute } from '@hapi/hapi';

const createUserRoute: ServerRoute = {
  method: 'POST',
  path: '/api/users',
  options: {
    description: 'Create User',
    notes: 'Creates a new user',
    tags: ['api', 'users'],
    auth: 'jwt',
    pre: [{
      method: verifyUniqueUserHandler,
      assign: 'user'
    },
    {
      method: createUserHandler,
      assign: 'response'
    }],
    validate: {
      payload: Joi.object({
        username: Joi.string().alphanum().min(2).max(30).required(),
        email: Joi.string().email().required()
      })
    },
    handler: defaultResponseHandler
  }
}

export default createUserRoute;
