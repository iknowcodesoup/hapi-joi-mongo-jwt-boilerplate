'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var handler = {
    test: function test(request, reply) {
        reply('pong');
    }
};
exports.default = handler;