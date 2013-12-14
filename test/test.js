/* globals describe, it */

'use strict';

/**
 * Module dependencies.
 */
var exec           = require('child_process').exec;
var bin            = require('../bin/clusterize');
var assert         = require('assert');
var pkg            = require('../package.json');

// End of dependencies.


describe('Test', function () {

  it('should support this argvs', function (done) {
    assert(bin._events.list);
    assert(bin._events.kill);
    assert(bin._events.version);
    assert(bin._events.app);
    assert(bin._events.workers);
    assert(bin._events.log);
    done();
  });

});