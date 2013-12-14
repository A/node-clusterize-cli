# Node Clusterize CLI

Simple CLI interface for clusterize and demonize your apps.


## Usage


### Arguments

    Usage: clusterize [options]

      Options:

        -h, --help           output usage information
        -V, --version        output the version number
        list                 list of running custers
        kill <pid>           stop daemon and all it's workers
        -c, --config <path>  Add config path
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