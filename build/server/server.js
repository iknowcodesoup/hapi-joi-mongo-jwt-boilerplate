'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hapi = require('hapi');

var Hapi = _interopRequireWildcard(_hapi);

var _server = require('../config/server');

var _server2 = _interopRequireDefault(_server);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var server = new Hapi.Server();
server.connection(_server2.default);
(0, _routes2.default)(server);
exports.default = server;