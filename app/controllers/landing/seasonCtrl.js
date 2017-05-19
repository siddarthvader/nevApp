nevApp.controller('seasonCtrl', function ($state, $scope, $httpshooter) {
    var season = this;
    season.productType = 'CUR';
    $scope.toggleModal = function () {
        $scope.modalOpen = !$scope.modalOpen;
        document.getElementsByTagName('html')[0].classList.toggle('is-clipped');
    };

    $scope.showResOverlay = function () {
        var BASE_URL = 'https://query.yahooapis.com/v1/yql?q=';
        var APP_ID = 'dj0yJmk9aVJUbGlZWUtEbEFlJmQ9WVdrOWNGcGFRek14TldrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03MQ--';
        var API_QUERY = 'select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2009-09-11" and endDate = "2010-03-10"';
        $scope.toggleModal();
        $httpshooter.queue({
            // url: BASE_URL + encodeURIComponent(API_QUERY) + '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&appid=' + APP_ID,
            url:'https://api.ofx.com/PublicSite.ApiService/SpotRateHistory/USD/EUR/536437800/1495045800000?DecimalPlaces=6&ReportingInterval=daily',
            method: "GET"
        }).then(function (data) {
            console.log(data);
        });
    }
});
