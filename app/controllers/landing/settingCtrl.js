nevApp.controller('settingCtrl', function ($state, $scope, $httpshooter, $localStorage) {
    $scope.logout = function () {
        $httpshooter.queue({
            method: 'POST',
            url: api.logout,
            headers: {
                token: $localStorage.session.token
            },
            data: {
                email: $localStorage.userData.email
            }
        }).then(function (data) {
            data = data.data;
            delete $localStorage.session;
            delete $localStorage.userData;
            $state.go('getin');

        })
    }
});
