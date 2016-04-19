/*
 * 1.建立 scope    原型
 * 2.建立 $watch   方法
 * 3.建立 $digest  方法
 * */

//scope原型

function Scope() {
    this.$$watchers = [];//私有属性.
}

//$watch方法,接受两个函数,作为参数,放在$$watchFn中.


Scope.prototype.$watch = function (watchFn, listenerFn) {
    var watcher = {
        watchFn: watchFn,
        listenerFn: listenerFn
    };

    this.$$watchers.push(watcher);
};


//$Digest函数,遍历监听器,执行监听函数

Scope.prototype.$digest = function () {
    _.forEach(this.$$watchers, function (watch) {
        watch.listenerFn();
    });
};



