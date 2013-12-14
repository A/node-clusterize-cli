/* globals describe, it */

'use strict';

/**
 * Module dependencies.
 */
var exec           = require('child_process').exec;
var bin            = require('../bin/node-daemonize');
var assert         = require('assert');
var pkg            = require('../package.json');

// End of dependencies.


describe('Test', function () {

  it('should support this argvs', function (done) {
    assert(bin._events.list);
    assert(bin._events.version);
    assert(bin._events.start);
    assert(bin._events.stop);
    assert(bin._events.config);
    assert(bin._events.app);
    assert(bin._events.workers);
    assert(bin._events.log);
    done();
  });


  it('should prints version', function (done) {
    exec('./bin/node-daemonize -V', function (err, stdout) {
      var actual = stdout.replace(/\s/, '');
      var expected = pkg.version;

      assert(actual == expected);
      done(err);
    });
  });


  it('should starts workers', function (done) {
    exec('./bin/node-daemonize start -c ./test/config.json', function (err, stdout) {
      console.log(stdout);
      // assert(pkg.version == stdout);
      done(err);
    });
  });


  // it('should starts workers, too', function (done) {
  //   exec('./bin/node-daemonize start -a ./test/app.js -w 4 -l ./test/logs/test.log', function (err, stdout) {
  //     console.log(stdout);
  //     done(err);
  //   });
  // });



});