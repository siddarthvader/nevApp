nevApp.controller('headerCtrl',function($state,$scope){
    var header=this;
    $scope.getStateName=function(){
        return $state.current.name;
    };
});
