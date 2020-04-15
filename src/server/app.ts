import setupServer from './setupServer';

console.log(`API server starting`)

const startServer = async () => {
  let server = await setupServer();

  await server
    .start()
    .then(() => console.log(`API server running at ${server.info.uri}`))
    .catch((reason: any) => {
      console.error(reason);
    });
};

startServer();