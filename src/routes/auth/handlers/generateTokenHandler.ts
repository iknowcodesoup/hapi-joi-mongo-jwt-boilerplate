import {
  Request,
  ResponseToolkit
} from '@hapi/hapi';
import { sign } from 'jsonwebtoken';
import { IServerConfig } from '../../../models/types';

const generateTokenHandler = (request: Request, responseToolkit: ResponseToolkit) => {
  var obj = { id: 123, "name": "Charlie" };
  var token = sign(obj, (<IServerConfig>process.env).TOKEN_SECRET);

  return responseToolkit.response(token);
};

export { generateTokenHandler };
