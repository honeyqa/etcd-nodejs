var instance = require('./instance')
var Etcd = require('node-etcd');
var exec = require('child_process').exec;

function connect(etcd, i, callback){
	etcd.get(i.key, { recursive: true }, function (err, value) {
		etcd.set(i.key, instance.value, function() {
              exec(i.value, callback);
		});
	});
}

etcd = new Etcd();

console.log('etcd mysql started');

connect(etcd, instance.mysql.mysql_1, function (err, stdout, stderr) {
	// callback
	// notify to watcher by changing value
	etcd.get(instance.mysql.mysql_1.key, function (err, value) {
		etcd.set(instance.mysql.mysql_1.key, '', function (err, data) {
		});
	});
});