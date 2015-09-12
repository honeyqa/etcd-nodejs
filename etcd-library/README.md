
## 설치

```sh
$ npm install etcd
```

## 설정.

```js
var etcd = require('etcd');

etcd.configure({
  host: '127.0.0.1',
  port: 40001
});
```
## Commands

### .set(string, mixed, [options], [callback])

```js
etcd.set('hello', 'world', function (err) {
  if (err) throw err;
});
```

TTL 설정:

```js
etcd.set('hello', 'world', { ttl: 5 }, function (err) {
  if (err) throw err;
});
```

"setAndTest":

```js
etcd.set('hello', 'world', { prev: 'world' }, function (err) {
  if (err) throw err;
});
```

### .get(string, [callback])

```js
etcd.get('hello', function (err, result) {
  if (err) throw err;
  assert(result.value);
});
```

### .del(string, [callback])

```js
etcd.del('hello', function (err) {
  if (err) throw err;
});
```

### .list(string, [callback])

```js
etcd.list('prefix', function (err, items) {
  if (err) throw err;
});
```

### .watch(string, [callback])

```js
etcd.watch('prefix', function (err) {
  if (err) throw err;
});
```

### .machines(callback)

```js
etcd.machines(function (err, list) {
  if (err) throw err;
});
```

### .leader(callback)

```js
etcd.leader(function (err, host) {
  if (err) throw err;
});
```
