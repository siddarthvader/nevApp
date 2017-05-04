nevApp.controller("emailCtrl", function($state, $scope, $httpshooter,$localstorage) {
  console.log('inside email controller');
  $scope.emailId = null;
  $scope.submitEmail = function() {
    $httpshooter.queue({
      method: 'POST',
      url: api.email,
      data: {
        email: $scope.emailId
      }
    }).then(function(data) {
      if (data.message) {
        data=data.data;
        if (data.state == 'goToPwd') {
          $localstorage.userData=data;
          $state.go('getin.pwd');
        }
      }
    })
  }
});
