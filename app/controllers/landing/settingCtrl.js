nevApp.controller('settingCtrl', function ($state, $scope, $httpshooter, $localStorage, AuthFactory) {
    var setting=this;
    $scope.modalOpen = false;
    $scope.emailId=null;
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
        $scope.modalMode = 'pwd';
    };

    $scope.userInviteModalOpen = function () {
        $scope.toggleModal();
        $scope.modalMode = 'userInvite';
        $scope.userExists = false;
        $scope.userAdded = false;
    }

    $scope.inviteUser = function () {
        $scope.userExists = false;
        $scope.userAdded = false;
        $httpshooter.queue({
            method: 'POST',
            url: api.invite,
            headers: {
                token: $localStorage.session.token
            },
            data: {
                email: setting.emailId
            }
        }).then(function (data) {
            data = data.data;
            if (data.state === 'added') {
                $scope.userAdded = true
            }
            else if (data.state === 'exists') {
                $scope.userExists = true;
            }
            else{
                $scope.userError=true;
            }
        })
    }

});
