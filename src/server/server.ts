import * as Hapi from '@hapi/hapi';
import { authSetup } from './authSetup';
import { hapiConfig, dbUrl } from './config';
import { attachRoutes } from './attachRoutes';
import * as mongoose from 'mongoose';
import * as es6Promise from 'es6-promise';

const server = new Hapi.Server(hapiConfig);

authSetup(server);  

(<any>mongoose).Promise = es6Promise.Promise;

mongoose.connect(dbUrl, {
  useMongoClient: true
})

attachRoutes(server);

export default server;
