import {
    IRouteConfiguration
} from 'hapi';
import { verifyUniqueUserHandler } from './handlers/verifyUniqueUserHandler';
import { createUserHandler } from './handlers/createUserHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';

const Joi require('joi');

const createUserRoute: IRouteConfiguration = {
    method: 'POST',
    path: '/api/users',
    config: {
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
