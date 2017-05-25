nevApp.controller('fundamentalCtrl', function ($state, $scope, $localStorage, $rootScope, $sessionStorage, $httpshooter) {
    var funda = this;
    $scope.moment = moment;
    $scope.marketPrefix = 'NASDAQ';
    if (Object.size($sessionStorage.fundamental)) {
        $scope.subMenuMode = $sessionStorage.fundamental.mode;
        $scope.fundaData = $sessionStorage.fundamental.data;
    }
    else {
        $scope.subMenuMode = 'equities';
    }
    $scope.toggleSubmenu = function (mode) {
        $scope.subMenuMode = mode;
        if (mode === 'etf') {

        }
        else {

        }
    };

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (fromState === 'landing.fundamental') {
            delete $sessionStorage.fundamental;
        }
    });

    $scope.fetchFundaContent = function () {
        $scope.marketPrefix = 'NYSE';
        $scope.tradingViewChartUrl = 'https://s.tradingview.com/widgetembed/?symbol=' + encodeURIComponent($scope.marketPrefix + ":" + $scope.symbol) + '&interval=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&calendar=1&hotlist=1&news=1&newsvendors=stocktwits&studies=1&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=' + encodeURIComponent($scope.symbol)

        $scope.zacksChartUrl = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#chart_canvas';
        document.getElementById('tradingChart').setAttribute('src', $scope.tradingViewChartUrl);
        if ($scope.subMenuMode === 'equities') {

            document.getElementById('zacksEPS').setAttribute('src', $scope.zacksChartUrl);
        }
        else { }


        var url = "https://api.intrinio.com/companies?ticker=" + $scope.symbol
        $httpshooter.queue({
            method: 'GET',
            url: url,
            headers: {
                Authorization: "Basic MmJjYmNmMTE2YjZjNWUzMGFmNjlkYTczN2EyNjRkNTY6MDU5YjZhYmIzZWI1MGIxZGFmZDg4ZTAyNmRhOTU3Y2E="
            }
        }).then(function (data) {
            console.log(data);
            $scope.companyDesc = data.long_description;
        })

    }

});
