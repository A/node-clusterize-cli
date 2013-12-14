'use strict';

/**
 * Based on https://www.digitalocean.com/community/articles/how-to-write-a-linux-daemon-with-node-js-on-a-vps
 */


/**
 * Module dependencies.
 */

var cluster        = require('cluster');
var daemon         = require('daemon');

// End of dependencies.


var Daemonizer = module.exports = function (options) {
  this.options = options;
  if (!this.options.workers) this.options.workers = require('os').cpus().length * 2;
  this.createWorkers(this.options.workers);
};


Daemonizer.prototype.createWorker = function () {
  // TODO: Записывать в .pidfile
  if (cluster.isMaster) {
    // Fork a worker if running as cluster master
    var child = cluster.fork();
    // Respawn the child process after exit
    // (ex. in case of an uncaught exception)
    child.on('exit', function (worker, code, signal) {
      // TODO: Заменить console.log на запись в файл. Можно через 
      worker.process.title = this.options.app;
      console.log('Cluster ' + worker.process.pid + ' died');
      console.log('Restart cluster ' + worker.process.pid + ' died');
      this.createWorker();
    });
  } else {
    console.log('Start new app instance', process.pid);
    // Run the HTTP server if running as worker
    require(this.options.app);
  }
};


/**
 * Creates the specified number of workers.
 * @param  {Number} n Number of workers to create.
 */
Daemonizer.prototype.createWorkers = function (n) {
  while (n-- > 0) this.createWorker();
};


/**
 * Kills all workers with the given signal.
 * Also removes all event listeners from workers before sending the signal
 * to prevent respawning.
 * @param  {Number} signal
 */
Daemonizer.prototype.killAllWorkers = function (signal) {
  var uniqueID,
      worker;
 
  for (uniqueID in cluster.workers) {
    if (cluster.workers.hasOwnProperty(uniqueID)) {
      worker = cluster.workers[uniqueID];
      worker.removeAllListeners();
      worker.process.kill(signal);
    }
  }
};