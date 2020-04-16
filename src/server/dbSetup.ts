import * as mongoose from 'mongoose';
import * as es6Promise from 'es6-promise';
import { IServerConfig, MongooseReadyStateType } from '../models/types';

const mongoDbUrlBuilder = (user: string, pwd: string): string => `mongodb+srv://${user}:${pwd}@codesoupcafe-sbc-yo2n6.azure.mongodb.net/test?retryWrites=true&w=majority`;

const dbSetup = (): void => {
  console.log(`Connecting to DB.`)
  let currentProcess = (<IServerConfig>process.env);

  (<any>mongoose).Promise = es6Promise.Promise;
  mongoose.connect(mongoDbUrlBuilder(currentProcess.DB_USER, currentProcess.DB_PWD), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
    .then(instance => {
      console.log(`DB state: ${MongooseReadyStateType[instance.connection.readyState]}`)

    });


};

export { dbSetup };
