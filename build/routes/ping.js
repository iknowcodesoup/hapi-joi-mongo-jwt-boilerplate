'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pongHandler = require('./handlers/pongHandler');

var _pongHandler2 = _interopRequireDefault(_pongHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ping = {
    method: 'GET',
    path: '/ping',
    config: {
        pre: [_pongHandler2.default.test]
    },
    handler: function handler(request, reply) {
        console.log('Processed done', request.pre);
        reply(request);
    }
};
exports.default = ping;