import {
  Request,
  ResponseToolkit
} from '@hapi/hapi';

const defaultResponseHandler = (request: Request, responseTookit: ResponseToolkit) => {
  return responseTookit.response(request.pre.response).code(201); // .header("Authorization", request.headers.authorization)
};

export { defaultResponseHandler };
