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
    handler: _handler2.default.test
}];
exports.default = routes;