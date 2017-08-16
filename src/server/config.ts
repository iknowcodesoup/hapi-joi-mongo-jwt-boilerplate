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
const secretKey: string = 'khLCm6gl4iMG6h4VstmyZ8T3GSbgEx9kbIxcmQmQOBfOFZ+NM0Tm4dYVhCFkwg4DeUljGFmI5mVLwk6DhNdkUvlMVFQ9ZLqO1jERb/H3+coJjBXsayKEkhdIh4e7c1QUmWuk8AxkxRKCXgNXHdsFCc13CZxq4oEo05i5EKAG0RiF/Kl2qNOcJcbCscBRAzICMeplnyeJ0RffLr8k33+pjpa6cMBY4kN8IOynPMkgKCPzuaOYyrlXXvbmpzK2UA/8xh+2EncsKZYeEE9baQYcpzYMBGsoRz3iXZPHNzXrjSjUieARm+8jqiFMww6nM15RjMTnzfSmBpPQDT5TML1o8w==';

export { hapiConfig, dbUrl, secretKey };
