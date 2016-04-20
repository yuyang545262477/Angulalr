#Make Own Angular
---

#  1.创建Angular核心:$watch $digest 简单模型.

### Scope函数
        function Scope() {
           this.$$watcher = [];
        }
### $watcher方法
        Scope.prototype.$watch = function(watcherFn,listenerFn){
        
            var watcher = {
                watcherFn:watcherFn,
                listenerFn:listenerFn
            };
            
            this.$$watcher.push(watcher);
        }
### $digest方法
        Scope.prototype.$digest = function( ){
            _.forEach(this.$$watcher,function(watch){
                watch.listenerFn();
            }
        }

       
#   2.脏值检查
#   3.在Digest的时候,获得提示
#   4.但数据脏时,持续Digest
#   5.放弃不稳定的digest
#   6.基于值的脏检查
#   7.非数字(NaN)
#   8.$eval 在作用域的上下文执行代码.
#   9.$apply    集成外部代码与digest循环
#   10.$evalAsync    延迟执行.
#   11.作用域阶段.
#   12.在digest之后执行代码    $$postDigest.
#   13.异常处理.
#   14.销毁一个监听器


        
        
        
        
    
    
    