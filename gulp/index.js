import onlyScripts from './util/scriptFilter';

var realFs = require('fs');
/*
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(realFs);
*/

const tasks = realFs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach((task) => {
  require('./tasks/' + task);
});
