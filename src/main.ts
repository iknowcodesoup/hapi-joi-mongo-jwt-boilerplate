'use strict';

import Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.start((err: string) => {

    if (err) {
        throw err;
    }
  
    console.log(`Server running at: ${server.info.uri}`);
}); 