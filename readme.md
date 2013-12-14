# Node Clusterize CLI

#### Start

    # Setup options inline
    clusterize --app ./test/express/app.js --workers 32 --log ./cluster.log

    # Or by config.json
    clusterize --config ../test/my-config.json


#### Stop

    # ps aux | grep 'clusterize master'
    antonshuvalov   48922   0.0  0.2  3048032  14812   ??  Ss    8:13PM   0:00.15 clusterize master /Users/antonshuvalov/Desktop/daemonizer/test/express/app.js       
    antonshuvalov   48970   0.0  0.0  2432784    492 s004  R+    8:13PM   0:00.00 grep clusterize master
    $ kill -9 48922


#### Arguments

    Usage: clusterize [options]

    Options:

      -h, --help           output usage information
      -V, --version        output the version number
      -c, --config <path>  Add config path
      -a, --app <path>     Add path to demonizing app
      -w, --workers <q>    Set quantity of workers for your app. Defaut value is cpu.cores*2
      -l, --log <path>     Add path to demonizing app


### Config

    {
      "app": "../test/express/app.js",
      "log": "../test/logs/test.log",
      "workers": "4"
    }

