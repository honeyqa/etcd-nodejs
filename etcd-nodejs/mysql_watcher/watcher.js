var instance = require('./instance')
var Etcd = require('node-etcd');
var exec = require('child_process').exec;

function setup (etcd, i, callback) {
	etcd.get(i.key, { recursive: true }, function (err, value) {
		etcd.set(i.key, i.value, callback);
	});
}

etcd = new Etcd();

etcd.watcher(instance.mysql.mysql_1.key).on('change', function set (data) {
    exec(instance.mysql.mysql_1.value, function (err, stdout, stderr) {
        setup(etcd, instance.mysql.mysql_1);
    });
});