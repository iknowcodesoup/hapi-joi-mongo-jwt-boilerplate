'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('../routes/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attachRoutes = function attachRoutes(server) {
    server.route(_index2.default);
};
exports.default = attachRoutes;