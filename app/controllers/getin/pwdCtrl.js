nevApp.controller("pwdCtrl",function($state,$scope,$httpshooter,$localstorage){
    console.log('inside epwd controller')
    $scope.pwdVal=null;
    $scope.submitPwd = function(){
        $httpshooter.queue({
            method: 'POST',
            url: api.pwd,
            data: {
                email:$localstorage.userData.
                pwd: $scope.pwd
            }
        }).then(function(data){
               if(data.message){
                   $state.go('getin.pwdVal');
               }
        })
    };
});
