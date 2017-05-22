nevApp.controller('fundamentalCtrl',function($state,$scope,$localStorage,$rootScope,$sessionStorage){
    var funda=this;
    $scope.moment=moment;
    if(Object.size($sessionStorage.fundamental)){
        $scope.subMenuMode=$sessionStorage.fundamental.mode;
        $scope.fundaData=$sessionStorage.fundamental.data;
    }
    else{
        $scope.subMenuMode='equities';
    }
    $scope.toggleSubmenu=function(mode){
        $scope.subMenuMode=mode;
        if(mode==='etf'){

        }
        else{
            
        }
    };

    $scope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
        if(fromState==='landing.fundamental'){
            delete $sessionStorage.fundamental;
        }
    })

});
