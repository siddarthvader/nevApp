nevApp.controller('headerCtrl', function ($state, $scope, $rootScope) {
    var header = this;
    $scope.getStateName = function () {
        return $state.current.name;
    };

    $scope.isMenuOpen = false;
    $scope.toggleMenu = function () {
        if ($rootScope.isMobile()) {
            $scope.isMenuOpen = !$scope.isMenuOpen;
        }
    }
});
