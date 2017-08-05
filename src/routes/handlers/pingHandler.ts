import {
    Request,
    IReply
} from 'hapi';


const pingTest = (request: Request, reply: IReply) => {
  reply('pong');
};

export { pingTest };
