import { verifyUniqueUserHandler } from './handlers/verifyUniqueUserHandler';
import { updateUserHandler } from './handlers/updateUserHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';
import { ServerRoute } from '@hapi/hapi';
const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi);

const updateUserRoute: ServerRoute = {
  method: 'PATCH',
  path: '/api/users/{id}',
  options: {
    auth: 'jwt',
    pre: [{
      method: verifyUniqueUserHandler,
      assign: 'user'
    },
    {
      method: updateUserHandler,
      assign: 'response'
    }],
    handler: defaultResponseHandler,
    validate: {
      payload: Joi.object({
        username: Joi.string().alphanum().min(2).max(30),
        email: Joi.string().email()
      }),
      params: Joi.object({
        id: Joi.objectId().required()
      })
    }
  }
}

export default updateUserRoute;
