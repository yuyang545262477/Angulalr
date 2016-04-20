var  scope = new Scope();

scope.firstName = 'yu';
scope.lastName = 'yang';

    //initial $watch
scope.$watch(
    function (scope) {
        return scope.firstName;
    },
    function (newValue, oldValue, self) {
        if (oldValue == undefined){
            console.log('we has new value' + newValue);
        }else{
            console.log('value has changed :::::'+newValue);
        }
        
    }
);
    

scope.$digest();
scope.firstName = 'yuxiaoyansg';
scope.$digest();
