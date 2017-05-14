nevApp.controller('settingCtrl', function ($state, $scope, $httpshooter, $localStorage, AuthFactory) {
    var setting = this;
    $scope.modalOpen = false;
    $scope.is_admin = $localStorage.session.is_admin;
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

    $scope.inviteUserModalOpen = function () {
        $scope.toggleModal();
        $scope.modalMode = 'userInvite';
        $scope.userExists = false;
        $scope.userAdded = false;
        setting.inviteEmailId = null;
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
                email: setting.inviteEmailId
            }
        }).then(function (data) {
            data = data.data;
            if (data.state === 'added') {
                $scope.userAdded = true
            }
            else if (data.state === 'exists') {
                $scope.userExists = true;
            }
            else {
                $scope.userError = true;
            }
        })
    };

    $scope.removeUserModalOpen = function () {
        $scope.usersList = [];
        $scope.userRemoved = false;
        $httpshooter.queue({
            method: 'GET',
            url: api.getUsers,
            headers: {
                token: $localStorage.session.token
            }
        }).then(function (data) {
            data = data.data;
            $scope.toggleModal();
            $scope.usersList = data;
            $scope.modalMode = 'removeUser';
        });


    };

    $scope.removeUserByEmail = function (email, index) {
        $scope.userRemoved = false;
        $httpshooter.queue({
            method: 'POST',
            url: api.removeUser,
            headers: {
                token: $localStorage.session.token
            },
            data: {
                email: email
            }
        }).then(function (data) {
            data = data.data;
            if (data.state = 'removed') {
                $scope.userRemoved = true;
                $scope.usersList.splice(index);
            }
        });
    };

    $scope.loginHistoryModalOpen = function () {
        $scope.loginHistory = [];
        $httpshooter.queue({
            method: 'POST',
            url: api.history,
            headers: {
                token: $localStorage.session.token
            },
            data: {
                email: $localStorage.session.email
            }
        }).then(function (data) {
            data = data.data;
            $scope.loginHistory = [];
            $scope.modalMode = 'history';
            $scope.toggleModal();
            $scope.loginHistory = data.history;
        });
    }

});
