var scope = new Scope();

scope.$watch(
    function () {
        console.log('watchFn');
    },
    function () {
        console.log('Listener');
    }
);


