import {
  Request,
  ResponseToolkit
} from '@hapi/hapi';
import { sign } from 'jsonwebtoken';
import tokenSecret from '../../../server/keys/token_secret';

const generateTokenHandler = (request: Request, responseToolkit: ResponseToolkit) => {
  var obj = { id: 123, "name": "Charlie" };
  var token = sign(obj, tokenSecret);

  return responseToolkit.response(token);
};

export { generateTokenHandler };
