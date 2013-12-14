'use strict';

/**
 * Based on https://www.digitalocean.com/community/articles/how-to-write-a-linux-daemon-with-node-js-on-a-vps
 */


/**
 * Module dependencies.
 */

var cluster        = require('cluster');
var daemon         = require('daemon');
var fs             = require('fs');


var Daemonizer = module.exports = function (options) {

  this.options = {};
  this.options.app = options.app;
  this.options.workers = options.workers || require('os').cpus().length * 2;
  this.options.stdout = fs.openSync(options.stdout, 'a');
  this.options.stderr = fs.openSync(options.stdout, 'a');


  daemon({
    stdout: this.options.stdout,
    stderr: this.options.stderr
  });


  cluster.isMaster
    ? this.createWorkers(this.options.workers)
    : this.runApp(this.options.app);

};


Daemonizer.prototype.createWorkers = function (n) {
  process.title = 'clusterize master ' + this.options.app;
  while (n-- > 0) this.createWorker();
};


Daemonizer.prototype.createWorker = function () {
  var child = cluster.fork();
};


Daemonizer.prototype.runApp = function (app) {
  process.title = 'clusterize worker ' + app;
  require(app);
};