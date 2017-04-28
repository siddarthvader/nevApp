nevApp.run(function ($state, $timeout, $rootScope,$window) {
    console.info('iadhr');
    $state.go('getin');
    $rootScope.$state=$state;
    $window.$state=$state;
});
