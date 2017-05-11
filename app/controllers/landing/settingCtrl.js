nevApp.controller('settingCtrl', function ($state, $scope, $httpshooter, $localStorage, AuthFactory) {
    $scope.modalOpen = false;
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
            AuthFactory.destroyData();
            $state.go('getin');

        })
    };

    $scope.toggleModal = function () {
        $scope.modalOpen = !$scope.modalOpen;
        document.getElementsByTagName('html')[0].classList.toggle('is-clipped');

    }

    $scope.pwdChangeOverlayOpen = function () {
        $scope.toggleModal();
    };



});
