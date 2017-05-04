nevApp.controller("pwdCtrl",function($state,$scope,$httpshooter,$localStorage){
    console.log('inside epwd controller')
    $scope.pwdVal=null;
    $scope.submitPwd = function(){
        $httpshooter.queue({
            method: 'POST',
            url: api.pwd,
            data: {
                email:$localStorage.userData.email,
                pwd: $scope.pwdVal
            }
        }).then(function(data){
               if(data.message){
                   $state.go('landing');
               }
        })
    };
});
