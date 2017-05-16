
nevApp.controller('preEarnCtrl', function ($state, $scope, $httpshooter, $localStorage, $sce, d3) {
    var preEarn = this;
    var tradingViewChartUrl;
    $scope.moment=moment;
    preEarn.prefix = "NASDAQ";
    preEarn.ticker = "AAPL"
    $scope.fetchPreEarn = function () {
        $scope.symbol = preEarn.searchKey;
        $scope.tradingViewChartUrl = 'https://s.tradingview.com/widgetembed/?symbol=' + encodeURIComponent(preEarn.prefix + ":" + $scope.symbol) + '&interval=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&calendar=1&hotlist=1&news=1&newsvendors=stocktwits&studies=1&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=' + encodeURIComponent($scope.symbol)
        console.log(preEarn.prefix);

        $scope.zacksChartUrl = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#chart_canvas';
        document.getElementById('tradingChart').setAttribute('src', $scope.tradingViewChartUrl);
        document.getElementById('zacksEPS').setAttribute('src', $scope.zacksChartUrl);
    };

    $httpshooter.queue({
        method: 'POST',
        url: api.getNote,
        headers: {
            token: $localStorage.session.token
        },
        data: {
            email: $localStorage.session.email
        }
    }).then(function (data) {
        $scope.notes = [];
        if (data.data.notes.length) {
            $scope.notes = data.data.notes;
        }
    });

    $scope.addNote = function () {
        $httpshooter.queue({
            method: 'POST',
            url: api.addNote,
            headers: {
                token: $localStorage.session.token
            },
            data: {
                email: $localStorage.session.email,
                noteText:preEarn.noteText
            }
        }).then(function (data) {
            preEarn.noteText=null;
            $scope.notes.push({
                text:preEarn.noteText,
                timestamp:moment().unix()
            })
        });
    }



    // d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
});

