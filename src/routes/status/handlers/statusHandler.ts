import {
  Request,
  ResponseToolkit
} from '@hapi/hapi';
import { MongooseReadyStateType } from '../../../models/types';
import * as mongoose from 'mongoose';

const statusHandler = (request: Request, responseToolkit: ResponseToolkit) => {
  return responseToolkit.response({
    db: MongooseReadyStateType[mongoose.connection.readyState] //mongoose.version
  }).code(200);
};

export { statusHandler };
