nevApp.controller("pwdCtrl",function($state,$scope,$httpshooter){
    console.log('inside epwd controller')
    $scope.pwd=null;
    $scope.submitPwd = function(){
        $httpshooter.queue({
            method: 'POST',
            url: api.pwd,
            data: {
                pwd: $scope.pwd
            }
        }).then(function(data){
               if(data.message){
                   $state.go('getin.pwd');
               } 
        })
    };
});