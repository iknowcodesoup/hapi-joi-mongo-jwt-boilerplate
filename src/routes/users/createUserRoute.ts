import {
    IRouteConfiguration
} from 'hapi';
import Joi from 'joi';
import { verifyUniqueUserHandler } from './handlers/verifyUniqueUserHandler';
import { createUserHandler } from './handlers/createUserHandler';
import { defaultResponseHandler } from '../defaultResponseHandler';

const createUserRoute: IRouteConfiguration = {
    method: 'POST',
    path: '/api/users',
    validate: {
        payload: Joi.object({
            username: Joi.string().alphanum().min(2).max(30).required(),
            email: Joi.string().email().required()
        })
    },
    config: {
        auth: 'jwt',
        pre: [{
            method: verifyUniqueUserHandler,
            assign: 'user'
        },
        {
            method: createUserHandler,
            assign: 'response'
        }]
    },
    handler: defaultResponseHandler
};

export default createUserRoute;
