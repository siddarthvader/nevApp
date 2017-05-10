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
                    $state.go('landing');
                }
                else {
                    delete $localStorage.userData;
                    delete $localStorage.session;
                    $state.go('getin');
                }
            });
        }
        else {
            delete $localStorage.userData;
            delete $localStorage.session;
            $state.go('getin');
        }
    }

    return{
        validateToken:validateToken
    }
}])