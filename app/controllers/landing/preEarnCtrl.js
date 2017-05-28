
nevApp.controller('preEarnCtrl', function ($state, $scope, $httpshooter, $localStorage, $sce, d3, $http) {
    var preEarn = this;
    var tradingViewChartUrl;
    $scope.moment = moment;
    preEarn.prefix = "NASDAQ";
    preEarn.searchKey = "AAPL";


    $scope.fetchYahooNews = () => {
        var APP_ID = 'dj0yJmk9aVJUbGlZWUtEbEFlJmQ9WVdrOWNGcGFRek14TldrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03MQ--';

        var yahooUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20pm.finance.articles%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&diagnostics=true&callback=&appid=' + APP_ID;
        $sce.trustAsResourceUrl(yahooUrl);
        $httpshooter.queue({
            method: 'GET',
            url: yahooUrl
        }).then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err, "err")
        });


    };

    $scope.fetchPreEarn = function () {
        $scope.symbol = preEarn.searchKey;
        $scope.tradingViewChartUrl = 'https://s.tradingview.com/widgetembed/?symbol=' + encodeURIComponent(preEarn.prefix + ":" + $scope.symbol) + '&interval=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&calendar=1&hotlist=1&news=1&newsvendors=stocktwits&studies=1&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=' + encodeURIComponent($scope.symbol)
        console.log(preEarn.prefix);

        $scope.zacksChartUrl = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#chart_canvas';
        document.getElementById('tradingChart').setAttribute('src', $scope.tradingViewChartUrl);
        document.getElementById('zacksEPS').setAttribute('src', $scope.zacksChartUrl);

        $scope.fetchYahooNews();
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
                noteText: preEarn.noteText
            }
        }).then(function (data) {

            $scope.notes.push({
                text: preEarn.noteText,
                timestamp: moment().unix()
            });
            preEarn.noteText = null;
        });
    }



    // d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
});

