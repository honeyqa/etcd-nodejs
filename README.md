# etcd Study

## [etcd](https://coreos.com/etcd/docs/latest/getting-started-with-etcd.html)

1. simple interface
2. key/value starage
3. watch for changes

### Install
**_OSX Homebrew_**

    $ brew install etcd
    $ etcd
    
Open another terminal:

    $ etcdctl set mykey "this is awesome"
    this is awesome
    $ etcdctl get mykey
    this is awesome

## [node-etcd](https://www.npmjs.com/package/node-etcd)

[Library fork](https://github.com/honeyqa/etcd-study/tree/master/etcd-library)

### Install

For nodejs >= 0.10 and iojs:

    $ npm install node-etcd

For nodejs == 0.8:

    $ npm install node-etcd@3.0.2

## node.js / MySQL Auto-Recovery System

### study
* [etcd-sample](https://github.com/honeyqa/etcd-study/tree/master/etcd-sample)
* [etcd-test/mysql_watcher](https://github.com/honeyqa/etcd-study/tree/master/etcd-test/mysql_watcher)

## REFERENCE

* [coreos-etcd-api](https://coreos.com/etcd/docs/latest/api.html)
* [coreos-etcd-git](https://github.com/coreos/etcd/tree/master/etcdctl)
* [etcd-tutorials](https://www.digitalocean.com/community/tutorials/how-to-use-etcdctl-and-etcd-coreos-s-distributed-key-value-store)
* [swmaestro6th-crashreport/nodejs-etcd-mongodb](https://github.com/swmaestro6th-crashreport/nodejs-etcd-mongodb)
* [etcd를 이용한 DB Watcher 구현하기](http://www.slideshare.net/parkdainel/etcd-db-watcher)