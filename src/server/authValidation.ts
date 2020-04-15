import tokenSecret from './keys/token_secret';
import { verify } from 'jsonwebtoken';
import { unauthorized } from '@hapi/boom';

const authValidation = (_d: any, request: any, callback: any) => {
  try {
    const decoded = verify(request.headers.authorization, tokenSecret);
    if (decoded) {
      return callback(null, true);
    }
  } catch (e) {
    return callback(unauthorized(null, 'jwt'));
  }
  return false;
}

export default authValidation;
