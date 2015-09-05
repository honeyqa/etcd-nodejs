var Etcd = require('node-etcd');
var etcd = new Etcd();

etcd.set(key, JSON.stringify({
	hostname: '127.0.0.1',
	port: '3000',
	pid: process.pid
}), function() {});
