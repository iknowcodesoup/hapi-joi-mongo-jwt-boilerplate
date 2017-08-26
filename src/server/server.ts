import * as Hapi from 'hapi';
import { authSetup } from './authSetup';
import { hapiConfig, dbUrl } from './config';
import { attachRoutes } from './attachRoutes';
import * as jwtAuth from 'hapi-auth-jwt2';
import mongoose from 'mongoose';
import * as es6Promise from 'es6-promise';
//import bluebird from 'bluebird';
//import plugins          from './plugins';

const server = new Hapi.Server();

server.connection(hapiConfig);
server.register(jwtAuth, () => { authSetup(server); });

//plugins( server );
mongoose.Promise = es6Promise.Promise;
mongoose.connect(dbUrl, {
  useMongoClient: true
})

attachRoutes(server);

export default server;
