nevApp.controller('fundamentalCtrl', function ($state, $scope, $localStorage, $rootScope, $sessionStorage, $httpshooter, $timeout) {
    var funda = this;
    $scope.moment = moment;
    $scope.date=moment().format('DD-MMM-YYYY')

    $scope.toggleSubmenu = function (mode) {
        $scope.subMenuMode = mode;
        if (mode === 'etf') {

        }
        else {

        }
    };


    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (fromState.name === 'landing.fundamental') {
            delete $sessionStorage.fundamental;
        }
    });

    $scope.fetchFundaContent = function () {

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
            $scope.symbol = data.ticker;
            $scope.shortDesc=data.short_description;
            if (!$scope.marketPrefix) {
                $scope.marketPrefix = data.securities[0].stock_exchange;
            }
            $scope.zacksChartUrl = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#chart_canvas';
            $scope.zacksRankUrl = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#quote_ribbon_v2';

            if ($scope.subMenuMode === 'equities') {
                $timeout(function () {
                    document.getElementById('zacksEPS').setAttribute('src', $scope.zacksChartUrl);
                    document.getElementById('zacksRank').setAttribute('src', $scope.zacksRankUrl);
                })
            }
            else {

            }

            $scope.tradingViewChartUrl = 'https://s.tradingview.com/widgetembed/?symbol=' + encodeURIComponent($scope.marketPrefix + ":" + $scope.symbol) + '&interval=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&calendar=1&hotlist=1&news=1&newsvendors=stocktwits&studies=1&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=' + encodeURIComponent($scope.symbol);
            document.getElementById('tradingChart').setAttribute('src', $scope.tradingViewChartUrl);


        });

    }

    $scope.$on('$viewContentLoaded', function () {
        if (Object.size($sessionStorage.fundamental)) {
            $scope.subMenuMode = $sessionStorage.fundamental.mode;
            $scope.fundaData = $sessionStorage.fundamental.data;
            $scope.symbol = $sessionStorage.fundamental.data.ticker;
            $scope.fetchFundaContent();
        }
        else {
            $scope.subMenuMode = 'equities';
            $scope.marketPrefix = 'NASDAQ';
            $scope.symbol = 'AAPL';
            $scope.fetchFundaContent();
            // var iframe = document.createElement('iframe');
            // iframe.src = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#chart_canvas'
            // iframe.setAttribute('width', '100%');
            // iframe.setAttribute('height', '400px');
            // iframe.setAttribute('scrolling', 'no');

            // document.getElementById('zacksEPSParent').appendChild(iframe);
            // // $scope.zacksChartUrl = ;
            // $scope.zacksRankUrl = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#quote_ribbon_v2';
            // // document.getElementById('zacksEPS').setAttribute('src', $scope.zacksChartUrl);
            // document.getElementById('zacksRank').setAttribute('src', $scope.zacksRankUrl);


        }
    
    })

});
