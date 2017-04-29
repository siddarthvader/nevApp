nevApp.controller("emailCtrl", function ($state, $scope, $httpshooter) {
    console.log('inside email controller');
    $scope.emailId = null;
    $scope.submitEmail = function(){
        $httpshooter.queue({
            method: 'POST',
        url: api.email,
            data: {
                email: $scope.email
            }
        }).then(function(data){
               if(data.message){
                   $state.go('getin.pwd');
               } 
        })
    }

});