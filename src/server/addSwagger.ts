import { Server, ServerRegisterPluginObject } from '@hapi/hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from'@hapi/inert';
import * as Vision from'@hapi/vision';
//import { IServerConfig } from '../models/types';

const addSwagger = async (server: Server): Promise<void> => {

  const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
      title: 'Hapi, Joi, Mongo(ose), JWT Auth - Boilerplate'
    }
  };

  const plugins: Array<ServerRegisterPluginObject<any>> = [
    {
      plugin: Inert
    },
    {
      plugin: Vision
    },
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ];

  await server.register(plugins);
};

export { addSwagger };
