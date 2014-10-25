# Node Clusterize CLI

[![Build Status](https://secure.travis-ci.org/shuvalov-anton/node-clusterize-cli.png)](http://travis-ci.org/shuvalov-anton/node-clusterize-cli)
[![Code Climate](https://codeclimate.com/github/shuvalov-anton/node-clusterize-cli.png)](https://codeclimate.com/github/shuvalov-anton/node-clusterize-cli)  

[![NPM](https://nodei.co/npm/node-clusterize-cli.png)](https://nodei.co/npm/node-clusterize-cli/)

Simple CLI interface for clusterize, demonize your apps. Also, it starts again
fallen instances of your application.


## Install

    npm i -g node-clusterize-cli


## Usage

    $ clusterize --app ./test/express/app.js --workers 32 --log ./cluster.log
    done


### Arguments

    Usage: clusterize [options]

      Options:

        -h, --help           output usage information
        -V, --version        output the version number
        list                 list of running custers
        kill <pid>           stop daemon and all it's workers
        -a, --app <path>     Add path to demonizing app
        -w, --workers <q>    Set quantity of workers for your app. Defaut value is cpu.cores*2
        -l, --log <path>     Add path to demonizing app


### Start

    $ clusterize --app ./test/express/app.js --workers 32 --log ./cluster.log
    done


### List

    $ clusterize list
    53416 test/express/app.js


### Kill

    $ clusterize kill 53416
    done
