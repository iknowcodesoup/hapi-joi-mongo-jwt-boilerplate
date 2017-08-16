import {
    Request,
    IReply
} from 'hapi';

const statusHandler = (request: Request, reply: IReply) => {
    reply('pong!');
};

export { statusHandler };
