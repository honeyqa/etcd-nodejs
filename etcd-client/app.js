var instance = require('./instance')
var Etcd = require('node-etcd');
var exec = require('child_process').exec;

function connect(etcd, i, callback){
	etcd.get(i.key, { recursive: true }, function (err, value) {
		etcd.set(i.key, instance.value, { recursive: true }, function() {
              exec(i.value, callback);
		});
	});
}

etcd = new Etcd();

console.log('etcd server started');

connect(etcd, instance.server.server_1, function (err, stdout, stderr) {
	// callback
	// notify to watcher by changing value
	etcd.get(instance.server.server_1.key, { recursive: true }, function (err, value) {
		etcd.set(instance.server.server_1.key, '', function (err, data) {
		});
	});
});