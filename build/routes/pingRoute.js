'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pingHandler = require('./handlers/pingHandler');

var pingRoute = {
    method: 'GET',
    path: '/ping',
    config: {
        pre: [{ method: _pingHandler.pingTest, assign: 'pingResponse' }]
    },
    handler: function handler(request, reply) {
        console.log(request.pre);
        reply(request.pre.pingResponse);
    }
};
exports.default = pingRoute;