var Etcd = require('node-etcd');
var exec = require('child_process').exec;
var instance = require('./instance')

etcd = new Etcd();
for (var i in instance.server) {
  init_instance(i);
}

function init_instance(i) {
  run_instance(false, i, instance.server[i].key, instance.server[i].value);
  watcher = etcd.watcher(instance.server[i].key);
  watcher.on("delete", function(k) {
    run_instance(true, i, instance.server[i].key, instance.server[i].value);
  });
}

function run_instance(restart, name, key, cmd) {
  if (restart) {
    console.log("[!] restart %s", name);
  } else {
    console.log("[!] start %s", name);
  }
  etcd.set(key);
  exec(cmd, function(err, stdout, stderr) {
    console.log(err);
    etcd.del(key);
  });
}
