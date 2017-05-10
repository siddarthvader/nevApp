nevApp.controller("pwdCtrl", function ($state, $scope, $httpshooter, $localStorage) {
    console.log('inside epwd controller')
    $scope.pwdVal = null;
    $scope.error={
        pwd:false
    }
    $scope.submitPwd = function () {
        $httpshooter.queue({
            method: 'POST',
            url: api.pwd,
            data: {
                email: $localStorage.userData.email,
                pwd: $scope.pwdVal
            }
        }).then(function (data) {
            if (data.message) {
                data = data.data;
                switch (data.state) {
                    case 'goToLanding': 
                        $localStorage.session = data.data;
                        $state.go('landing');
                        break;
                    case 'notFound':
                        $scope.error.pwd=true;
                    
                }

            }
        })
    };
});
