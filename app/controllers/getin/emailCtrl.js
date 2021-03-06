nevApp.controller("emailCtrl", function ($state, $scope, $httpshooter, $localStorage) {
  console.log('inside email controller');
  $scope.emailId = null;
  $scope.error = {
    emailNotExists: false,
    emailNotValid: false
  }
  $scope.submitEmail = function () {
    if ($scope.emailId) {
      $httpshooter.queue({
        method: 'POST',
        url: api.email,
        data: {
          email: $scope.emailId
        }
      }).then(function (data) {
        if (data.message) {
          data = data.data;
          if (data.state == 'goToPwd') {
            $localStorage.userData = data.userData;
            $state.go('getin.pwd');
          }
          else if (data.state == 'notFound') {
            $scope.error.emailNotExists = true;
          }
        }
      })
    }
  }
});
