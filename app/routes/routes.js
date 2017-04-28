nevApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {


    console.log('eee');
    $locationProvider.html5Mode(true).hashPrefix('*');

    $stateProvider.state('getin',
        {
            views: {
                'root': {
                    controller: 'getinCtrl',
                    templateUrl:'app/views/getin/getin.html'
                }
            }

        }).state('getin.email',
        {
            views: {
                "root": {
                    templateUrl: 'app/views/getin/email.html',
                    controller: 'emailCtrl',
                    controllerAs: 'email'
                }
            }

        }).state('getin.pwd', {
            views: {
                'root': {
                    templateUrl: 'app/views/getin/pwd.html',
                    controller: 'pwdCtrl',
                    controllerAs: 'pwd'
                }
            }


        }).state('getin.no-found', {
            views: {
                'root': {
                    templateUrl: 'app/views/getin/no-found.html',
                    controller: 'notFoundCtrl',
                    controllerAs: 'notFound'
                }
            }

        })
}]);


