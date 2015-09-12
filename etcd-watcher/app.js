var Etcd = require('node-etcd');
var exec = require('child_process').exec;

etcd = new Etcd();
run_s1(false);

watcher = etcd.watcher("server_1");
watcher.on("delete", function(k) {
  run_s1(true);
});

function run_s1(restart) {
  if (restart) {
    console.log("[!] restart server_1");
  } else {
		console.log("[!] start server_1");
	}
  etcd.set("server_1");
  exec('node ../sample-server/server_1', function(err, stdout, stderr) {
    console.log(err);
    etcd.del("server_1");
  });
}
