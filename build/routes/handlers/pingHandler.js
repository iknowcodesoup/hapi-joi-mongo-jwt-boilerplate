'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pingTest = function pingTest(request, reply) {
    reply('pong');
};
exports.pingTest = pingTest;