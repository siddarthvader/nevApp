nevApp.controller('seasonCtrl', function ($state, $scope, $httpshooter, $localStorage, $rootScope, $sessionStorage) {
    var season = this;
    $scope.searchProductType = 'CUR';
    $scope.Object=Object;
    $scope.currencyData;
    $scope.currentYear = moment().year() - 1;
    $scope.currentWeek=moment().isoWeek();
    $scope.years = [];
    $scope.types = ['long', 'short'];

    //form vars
    $scope.conWeeks = true

    for (i = 1; i <= 6; i++) {
        $scope.years.push($scope.currentYear - i * 5);
    }
    $scope.toggleModal = function () {
        $scope.modalOpen = !$scope.modalOpen;
        document.getElementsByTagName('html')[0].classList.toggle('is-clipped');
    };

    $scope.showResOverlay = function () {
        // var BASE_URL = 'https://query.yahooapis.com/v1/yql?q=';
        // var APP_ID = 'dj0yJmk9aVJUbGlZWUtEbEFlJmQ9WVdrOWNGcGFRek14TldrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03MQ--';
        // var API_QUERY = 'select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2009-09-11" and endDate = "2010-03-10"';
        var symbols = $scope.searchSymbol.toUpperCase().split(',');
        var payload = {};

        if ($scope.searchProductType === 'CUR') {
            payload = {
                symbols: symbols,
                minProb: parseFloat($scope.searchMinProbChange),
                minValChange: parseFloat($scope.searchMinValChange),
                minPer: parseFloat($scope.searchMinPerChange)
            };
        }

        $scope.toggleModal();
        $httpshooter.queue({
            // url: BASE_URL + encodeURIComponent(API_QUERY) + '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&appid=' + APP_ID,
            url: api.currencyData,
            method: "POST",
            headers: {
                'Token': $localStorage.session.token
            },
            data: payload
        }).then(function (data) {
            $scope.currencyData = data.data;
            console.log($scope.currencyData, "yes");
        });
    }
});
