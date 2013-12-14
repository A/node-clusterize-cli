# Node Clusterize CLI

#### Example

    clusterize --app ./test/express/app.js --workers 32 --log ./cluster.log

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