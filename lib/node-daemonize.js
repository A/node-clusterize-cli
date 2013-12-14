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
  daemon();
  this.options = {};
  this.options.app = options.app;
  this.options.workers = options.workers || require('os').cpus().length * 2;


  cluster.isMaster
    ? this.createWorkers(this.options.workers)
    : this.runApp(this.options.app);

};


Daemonizer.prototype.createWorkers = function (n) {
  while (n-- > 0) this.createWorker();
};


Daemonizer.prototype.createWorker = function () {
  var child = cluster.fork();
};


Daemonizer.prototype.runApp = function (app) {
  process.title = app;
  require(app);
};