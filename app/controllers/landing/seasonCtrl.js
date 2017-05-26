nevApp.controller('seasonCtrl', function ($state, $scope, $httpshooter, $localStorage, $rootScope, $sessionStorage) {
    var season = this;
    $scope.searchProductType = 'CUR';
    $scope.Object = Object;
    $scope.currencyData;
    $scope.currentYear = moment().year() - 1;
    $scope.currentWeek = moment().isoWeek();
    $scope.years = [];
    $scope.types = ['long', 'short'];
    $scope.searchCap=0;
    $scope.searchVolume=0;
    $scope.searchIndustry;
    $scope.searchSector;

    //form vars
    $scope.conWeeks = true

    for (i = 1; i <= 6; i++) {
        $scope.years.push($scope.currentYear - i * 5);
    }
    $scope.toggleModal = function () {
        $scope.modalOpen = !$scope.modalOpen;
        document.getElementsByTagName('html')[0].classList.toggle('is-clipped');
        $scope.currencyData = {};
    };

    $scope.showResOverlay = function () {
        // var BASE_URL = 'https://query.yahooapis.com/v1/yql?q=';
        // var APP_ID = 'dj0yJmk9aVJUbGlZWUtEbEFlJmQ9WVdrOWNGcGFRek14TldrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03MQ--';
        // var API_QUERY = 'select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2009-09-11" and endDate = "2010-03-10"';
        var symbols = $scope.searchSymbol.toUpperCase().split(',');
        var payload = {};
        var url;
        if ($scope.searchProductType === 'CUR') {
            payload = {
                symbols: symbols,
                minProb: parseFloat($scope.searchMinProbChange),
                minValChange: parseFloat($scope.searchMinValChange),
                minPer: parseFloat($scope.searchMinPerChange)
            };
            url = api.currencyData;
        }
        else if ($scope.searchProductType === 'EQU') {
            payload = {
                symbols: symbols,
                minProb: parseFloat($scope.searchMinProbChange),
                minValChange: parseFloat($scope.searchMinValChange),
                minPer: parseFloat($scope.searchMinPerChange),
                sector:$scope.searchSector,
                industry:$scope.searchIndustry,
                cap:$scope.searchCap,
                volume:$scope.searchVolume
            };
            url = api.getEquitiesData;
        }
        else if ($scope.searchProductType === 'FUT') {
            payload = {
                symbols: symbols,
                minProb: parseFloat($scope.searchMinProbChange),
                minValChange: parseFloat($scope.searchMinValChange),
                minPer: parseFloat($scope.searchMinPerChange),
                sector:$scope.searchSector,
                industry:$scope.searchIndustry,
                cap:$scope.cap,
                volume:$scope.volume
            };
            url = api.getFuturesData;
        }

        $scope.toggleModal();
        $httpshooter.queue({
            url: url,
            method: "POST",
            headers: {
                'Token': $localStorage.session.token
            },
            data: payload
        }).then(function (data) {
            if ($scope.searchProductType === 'CUR') {
                $scope.currencyData = data.data;
                console.log($scope.currencyData, "yes");
            }
            else if ($scope.searchProductType === 'EQU') {
                $scope.currencyData = data.data;
            } else {

            }

        });
    };

    $scope.goToFunda = function (mode, data) {
        $sessionStorage.fundamental = {};
        $sessionStorage.fundamental.mode = mode;
        $sessionStorage.fundamental.data = data;
        $state.go('landing.fundamental')
    };
});
