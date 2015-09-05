# etcd-nodejs
Etcd for Node.js


# Getting Started
**OSX**

To get started on OSX run the following in a terminal:

    curl -L  https://github.com/coreos/etcd/releases/download/v2.1.3/etcd-v2.1.3-darwin-amd64.zip -o etcd-v2.1.3-darwin-amd64.zip
    
    unzip etcd-v2.1.3-darwin-amd64.zip
    cd etcd-v2.1.3-darwin-amd64 
    ./etcd
Open another terminal:

    ./etcdctl set mykey "this is awesome"
    ./etcdctl get mykey
