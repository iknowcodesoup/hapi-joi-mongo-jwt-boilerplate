import setupServer from './setupServer';

(async () => {
  console.log(`API server starting`)
  const server = await setupServer();

  await server
    .start()
    .then(() => console.log(`API server running at ${server.info.uri}`))
    .catch((reason: any) => {
      console.error(reason);
    });
})().catch(e => {
  console.error(e);
});