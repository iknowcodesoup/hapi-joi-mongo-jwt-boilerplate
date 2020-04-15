import setupServer from './setupServer';
import { WebpackDevServerPlugin } from '@glints/hapi-webpack-dev-server-plugin';
const config = require('../../webpack.dev.js')
const webpack = require('webpack');
const compiler = new webpack(config);

const startServer = async () => {
  let server = await setupServer();

  await server
    .register({
      plugin: WebpackDevServerPlugin,
      options: {
        compiler,
        devMiddlewareOptions: {
          publicPath: config.output.publicPath,
          stats: {
            modules: false,
          },
        },
      },
    })
    .then(() => server.start())
    .then(() => console.log(`API server running at ${server.info.uri}`))
    .catch((reason: any) => {
      console.error(reason);
    });
};

startServer();