'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _statusHandler = require('./handlers/statusHandler');

var statusRoute = {
    method: 'GET',
    path: '/status',
    config: {
        pre: [{ method: _statusHandler.statusHandler, assign: 'status' }]
    },
    handler: function handler(request, reply) {
        reply(request.pre.status).code(200);
    }
};
exports.default = statusRoute;