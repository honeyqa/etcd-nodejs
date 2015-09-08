var Etcd = require('node-etcd');
var etcd = new Etcd();

etcd.set('key', 'value', {ttl: 5}, console.log);

watcher = etcd.watcher("key");
watcher.on("expire", function(){
	console.log('\n\n\n-----expire-----');
	etcd.set('key', 'value', {ttl: 5}, console.log);

}); // Triggers on all expire


