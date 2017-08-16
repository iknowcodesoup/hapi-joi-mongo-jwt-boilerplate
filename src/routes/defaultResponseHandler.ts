import {
    Request,
    IReply
} from 'hapi';

const defaultResponseHandler = (request: Request, reply: IReply) => {
    reply(request.pre.response).code(201); // .header("Authorization", request.headers.authorization)
};

export { defaultResponseHandler };
