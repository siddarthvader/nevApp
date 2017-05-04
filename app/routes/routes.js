nevApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {


    console.log('eee');
    $locationProvider.html5Mode(true).hashPrefix('*');

    $stateProvider.state('getin',
        {
            views: {
                'root': {
                    controller: 'getinCtrl',
                    templateUrl: 'app/views/getin/getin.html'
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
        }).state('landing', {
            views: {
                'header': {
                    templateUrl: 'app/views/static/header.html',
                    controller: 'headerCtrl',
                    controllerAs: 'header'
                },
                'root': {
                    templateUrl: 'app/views/landing/landing.html',
                    controller: 'landingCtrl',
                    controllerAs: 'landing'
                }
            }
        }).state('landing.macros', {
            views: {
                'root': {
                    templateUrl: 'app/views/landing/macros.html',
                    controller: "macrosCtrl",
                    controllerAs: "macros"
                }
            }
        }).state('landing.setting', {
            views: {
                'root': {
                    templateUrl: 'app/views/landing/setting.html',
                    controller: "settingCtrl",
                    controllerAs: "setting"
                }
            }
        }).state('landing.monitor', {
            views: {
                'root': {
                    templateUrl: 'app/views/landing/monitor.html',
                    controller: "monitorCtrl",
                    controllerAs: "monitor"
                }
            }
        }).state('landing.season', {
            views: {
                'root': {
                    templateUrl: 'app/views/landing/season.html',
                    controller: "seasonCtrl",
                    controllerAs: "season"
                }
            }
        }).state('landing.fundamental', {
            views: {
                'root': {
                    templateUrl: 'app/views/landing/fundamental.html',
                    controller: "fundamentalCtrl",
                    controllerAs: "fundamental"
                }
            }
        }).state('landing.preEarn', {
            views: {
                'root': {
                    templateUrl: 'app/views/landing/pre-earn.html',
                    controller: "preEarnCtrl",
                    controllerAs: "preEarn"
                }
            }
        });
}]);
