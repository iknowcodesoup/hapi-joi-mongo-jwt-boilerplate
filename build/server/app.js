'use strict';

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server2.default.start().then(function () {
    return console.log('API server running at ' + _server2.default.info.uri);
});