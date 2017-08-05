'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var pongHandler = {
    test: function test(request, reply) {
        reply('pong');
    }
};
exports.default = pongHandler;