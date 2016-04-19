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
       
        
        
        
        
    
    
    