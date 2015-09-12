# etcd-watcher

## requirements
* etcd
* node.js

## install / run
* `instance.json`의 `server` Object 안에 죽지 않고 돌아가길 원하는 프로세스들을 등록한다.

```
npm install
node app
```

## 원리
* `instance.json`에 등록된 프로세스를 실행시킨다.
	*  프로세스를 실행시킬 때, etcd에 `key`를 등록하고, 실행시킨 프로세스에서 에러가 발생하는 경우, 해당 `key`를 삭제한다.
		* `key`가 삭제될 때 발생하는 이벤트를 감시하는 Watcher를 등록해서 `key`가 삭제될 때 프로세스를 다시 시작시키고,  `key`를 다시 등록한다.
			* 무한 반복

## 문제점
* etcd-watcher가 죽어버리면 답이 없다.

## todo
* error가 발생하면 관리자에게 이메일로 알려주기
* etcd-watcher끼리 감시하게 코드를 짜서 절대 죽지 않게 하기 