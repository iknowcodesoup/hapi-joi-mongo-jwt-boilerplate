'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handler = require('./handler');

var _handler2 = _interopRequireDefault(_handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    method: 'GET',
    path: '/ping',
    pre: [_handler2.default.test],
    handler: function handler(request, reply) {
        console.log('Processed done', request.pre);
        reply(request.pre);
    }
}];
exports.default = routes;