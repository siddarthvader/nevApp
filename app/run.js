nevApp.run(function ($state, $timeout, $rootScope,$window,$localStorage) {
    console.info('iadhr');
    $state.go('landing');
    $rootScope.$state=$state;
    $window.$ls=$localStorage;
    $window.$state=$state;
});
