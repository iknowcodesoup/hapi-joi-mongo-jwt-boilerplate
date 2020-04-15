import {
    ServerOptions
} from '@hapi/hapi';

const hapiConfig: ServerOptions = {
    port: 3001,
    routes: {
        cors: true
    }
};

const dbUrl: string = 'mongodb+srv://iknowcodesoup:corn-dog-apples@codesoupcafe-sbc-yo2n6.azure.mongodb.net/test?retryWrites=true&w=majority';

export { hapiConfig, dbUrl };
