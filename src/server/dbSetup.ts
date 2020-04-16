import * as mongoose from 'mongoose';
import * as es6Promise from 'es6-promise';
import { IServerConfig } from '../models/types';

const dbSetup = (): void => {
  (<any>mongoose).Promise = es6Promise.Promise;
  mongoose.connect((<IServerConfig>process.env).MONGO_DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
};

export { dbSetup };
