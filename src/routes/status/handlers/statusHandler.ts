import {
    Request,
    IReply
} from 'hapi';
import { MongooseReadyStateType } from '../../../models/types';
import mongoose from 'mongoose';

const statusHandler = (request: Request, reply: IReply) => {
    reply({
      db: MongooseReadyStateType[mongoose.connection.readyState] //mongoose.version
    });
};

export { statusHandler };
