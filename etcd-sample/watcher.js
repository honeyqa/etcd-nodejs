var instance = require('./instance')
var Etcd = require('node-etcd');
var exec = require('child_process').exec;

function setup (etcd, i, callback) {
	etcd.get(i.key, { recursive: true }, function (err, value) {
		etcd.set(i.key, i.value, callback);
	});
}

etcd = new Etcd();

etcd.watcher(instance.server.server_1.key).on('change', function set (data) {
    exec(instance.server.server_1.value, function (err, stdout, stderr) {
        setup(etcd, instance.server.server_1)
    });
});