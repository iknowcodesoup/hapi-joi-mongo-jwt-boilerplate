import {
    IServerConnectionOptions
} from 'hapi';

const hapiConfig: IServerConnectionOptions = {
    port: 3001,
    routes: {
        cors: true
    }
};

const dbUrl: string = 'mongodb://localhost:27017/hapi-app';

export { hapiConfig, dbUrl };
