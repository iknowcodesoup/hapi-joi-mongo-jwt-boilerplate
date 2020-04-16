import { Server, ServerRegisterPluginObject } from '@hapi/hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from'@hapi/inert';
import * as Vision from '@hapi/vision';
import * as pkg from '../../package.json';

const addSwagger = async (server: Server): Promise<void> => {
  console.log(`Registering Swagger.`)

  const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
      title: pkg.description
    },
    auth: 'swagger-auth'
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
