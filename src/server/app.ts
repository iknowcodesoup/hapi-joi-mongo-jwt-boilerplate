import server from './server';

server.start()
    .then(() => console.log(`API server running at ${server.info.uri}`));