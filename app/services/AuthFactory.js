nevApp.factory('AuthFactory', ['$httpshooter', '$localStorage', '$state', function ($httpshooter, $localStorage, $state) {

    var validateToken = function () {
        if ($localStorage.session.email === $localStorage.userData.email) {
            $httpshooter.queue({
                method: 'POST',
                url: api.validateToken,
                data: {
                    email: $localStorage.userData.email
                },
                headers: {
                    'Token': $localStorage.session.token
                }
            }).then(function (data) {
                if (data.data.state === 'goToLanding') {
                    if (!$localStorage.currentState) {
                        $state.go('landing.macros');
                    }
                    else {
                        $state.go($localStorage.currentState);
                    }
                }
                else {
                    destroyData();
                    $state.go('getin');
                }
            });
        }
        else {
           destroyData();
            $state.go('getin');
        }
    }

    var destroyData=function(){
        delete $localStorage.currentState;
        delete $localStorage.userData;
        delete $localStorage.session;
    }

    return {
        validateToken: validateToken,
        destroyData:destroyData

    }
}])