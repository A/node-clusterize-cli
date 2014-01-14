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

// End of Dependencies



var Daemonizer = module.exports = function (options) {

  daemon(options);


  /**
   * Set title to process
   */
  cluster.isMaster
    ? process.title = options.app + ' clusterize master'
    : process.title = options.app + ' clusterize worker ';


  /**
   * And setup process
   */
  cluster.isMaster
    ? this.createWorkers(options.workers)
    : this.runApp(options.app);

};


Daemonizer.prototype.createWorkers = function (n) {
  while (n-- > 0) this.createWorker();
};


Daemonizer.prototype.createWorker = function () {
  var child = cluster.fork();
  var createWorker = this.createWorker.bind(this);
  child.on('exit', function (code, signal) {
    createWorker();
  });
};


Daemonizer.prototype.runApp = function (app) {
  require(app);
};