nevApp.controller('fundamentalCtrl', function ($state, $scope, $localStorage, $rootScope, $sessionStorage, $httpshooter, $timeout, $http) {
    var funda = this;
    $scope.moment = moment;
    $scope.date = moment().format('DD-MMM-YYYY')

    $scope.toggleSubmenu = function (mode) {
        $scope.subMenuMode = mode;
        if (mode === 'etf') {

        }
        else {
            

        }
    };

    $scope.drawCharts = function () {

        $scope.zacksChartUrl = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#chart_canvas';
        $scope.zacksRankUrl = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#quote_ribbon_v2';

        if ($scope.subMenuMode === 'equities') {
            $timeout(function () {
                document.getElementById('zacksEPS').setAttribute('src', $scope.zacksChartUrl);
                // document.getElementById('zacksRank').setAttribute('src', $scope.zacksRankUrl);
            })
        }
        else {

        }

        $scope.tradingViewChartUrl = 'https://s.tradingview.com/widgetembed/?symbol=' + encodeURIComponent($scope.marketPrefix + ":" + $scope.symbol) + '&interval=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&calendar=1&hotlist=1&news=1&newsvendors=stocktwits&studies=1&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=' + encodeURIComponent($scope.symbol);
        document.getElementById('tradingChart').setAttribute('src', $scope.tradingViewChartUrl);


    };

    $scope.rankarray = [1, 2, 3, 4, 5];
    $scope.fetchZacksRank = function () {
        $http({
            url: "https://quote-feed.zacks.com/index?t=" + $scope.symbol,
            method: 'GET'
        }).then(function (data) {
            data = data.data;
            if (data[$scope.symbol]) {
                $scope.zacksData = data[$scope.symbol];
                $scope.zacksData.zacks_rank = parseInt($scope.zacksData.zacks_rank);
                if ($scope.isETF) {
                    $scope.marketPrefix = data[$scope.symbol].SUNGARD_EXCHANGE;
                }
                $scope.drawCharts();
            }

        })
    };

    $scope.getZacksClass = function (index) {
        return "rankrect_" + index;
    }

    $scope.getExchangeName = function () {
        var url = "https://api.intrinio.com/securities?ticker=" + $scope.symbol
        $http({
            method: 'GET',
            url: url,
            headers: {
                Authorization: "Basic MmJjYmNmMTE2YjZjNWUzMGFmNjlkYTczN2EyNjRkNTY6MDU5YjZhYmIzZWI1MGIxZGFmZDg4ZTAyNmRhOTU3Y2E="
            }
        }).then(function (data) {
            data = data.data;
            console.log(data);
            $scope.isETF = data.etf;
            if($scope.isETF){
                $scope.fetchYahooWeightage();
            }
            $scope.marketPrefix = data.stock_exchange;
            $scope.fetchZacksRank();
        });
    };

    $scope.fetchFundaContent = function () {

        $scope.getExchangeName();

        $httpshooter.queue({
            url: api.getQuotes,
            method: "POST",
            headers: {
                'Token': $localStorage.session.token
            },
            data: {
                symbol: $scope.symbol
            }
        }).then(function (data) {
            data = data.data;
            $scope.quotes = data.summaryDetail;
            $scope.fdata = data.financialData;
            $scope.stats = data.defaultKeyStatistics;
            $scope.calender = data.calendarEvents;
            $scope.earnings = data.earnings;
            $scope.history = data.upgradeDowngradeHistory
            $scope.summary = data.summaryProfile;
            $scope.price = data.price
            $scope.ticker = data.price.symbol;
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

            //

        }

    });


    $scope.fetchYahooWeightage = function () {
        $http({
            url: api.fetchYahooWeightage,
            method: 'POST',
            headers: {
                token: $localStorage.session.token
            },
            data: {
                email: $localStorage.session.email,
                ticker: $scope.symbol
            }

        }).then(function (data) {
            console.log(data);
            data=data.data;
            var div = document.createElement('div');
            div.innerHTML = data.data.html;
            if (document.getElementById('weightage').childNodes[1]) {
                document.getElementById('weightage').replaceChild(div.firstChild, document.getElementById('weightage').childNodes[1]);
            }
            else {
                document.getElementById('weightage').appendChild(div.firstChild);
            }
        });
    }

    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (fromState.name === 'landing.fundamental') {
            delete $sessionStorage.fundamental;
        }
    });

});
