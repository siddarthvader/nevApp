nevApp.run(function ($state, $timeout, $rootScope,$window,$localStorage) {
    console.info('iadhr');
    $state.go('getin');
    $rootScope.$state=$state;
    $window.$ls=$localStorage;
    $window.$state=$state;
});
