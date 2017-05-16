nevApp.controller('settingCtrl', function ($state, $scope, $httpshooter, $localStorage, AuthFactory, $timeout) {
    var setting = this;
    $scope.moment = moment;
    $scope.modalOpen = false;
    $scope.is_admin = $localStorage.session.is_admin;

    $scope.pwdError = {
        noMatch: false,
        wrongOldPwd: false,
        successPwdChange: false
    }

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

    };

    $scope.pwdChangeOverlayOpen = function () {
        $scope.toggleModal();
        $scope.modalMode = 'pwdChange';
    };

    $scope.inviteUserModalOpen = function () {
        $scope.toggleModal();
        $scope.modalMode = 'userInvite';
        $scope.userExists = false;
        $scope.userAdded = false;
        setting.inviteEmailId = null;
    };

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
    };

    $scope.deleteTokenTrigger = function () {
        $httpshooter.queue({
            method: "POST",
            url: api.deleteTokens,
            headers: {
                token: $localStorage.session.token
            },
            data: {
                email: $localStorage.session.email
            }
        }).then(function (data) {
            AuthFactory.destroyData();
            $state.go('getin');
        });
    };

    $scope.changePwd = function () {
        if (setting.newPwd === setting.newPwdRepeat) {
            $scope.pwdError = {
                noMatch: false,
                wrongOldPwd: false,
                successPwdChange: false
            }
            $httpshooter.queue({
                method: 'POST',
                url: api.changePwd,
                headers: {
                    token: $localStorage.session.token
                },
                data: {
                    email: $localStorage.session.email,
                    oldPwd:setting.oldPwd,
                    newPwd:setting.newPwd
                }
            }).then(function (data) {
                data = data.data;
                if (data.state === 'success') {
                    $scope.pwdError.successPwdChange = true;
                    $timeout(function () {
                        $state.go('getin');
                    }, 5000)
                    AuthFactory.destroyData();
                    $state.go('getin');
                }
                else if (data.state === 'wrongPwd') {
                    $scope.pwdError.wrongOldPwd = true;
                }
            });
        }
        else {
            $scope.pwdError.noMatch = true;
        }

    };


});
