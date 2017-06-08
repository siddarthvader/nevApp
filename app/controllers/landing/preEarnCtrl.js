
nevApp.controller('preEarnCtrl', function ($state, $scope, $httpshooter, $localStorage, $sce, $http, $timeout) {
    var preEarn = this;
    var tradingViewChartUrl;
    $scope.moment = moment;
    preEarn.searchKey = "AAPL";
    $scope.newDate = new Date();

    $scope.getExchangeName = function () {

    };

    $scope.drawCharts = function () {
        $scope.tradingViewChartUrl = 'https://s.tradingview.com/widgetembed/?symbol=' + encodeURIComponent($scope.marketPrefix + ":" + $scope.symbol) + '&interval=daily&symboledit=1&saveimage=1&toolbarbg=f1f3f6&calendar=1&hotlist=1&news=1&newsvendors=stocktwits&studies=1&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=' + encodeURIComponent($scope.symbol)
        $scope.zacksChartUrl = 'https://www.zacks.com/stock/chart/' + $scope.symbol + '/price-consensus-eps-surprise-chart#chart_canvas';
        document.getElementById('tradingChart').setAttribute('src', $scope.tradingViewChartUrl);
        document.getElementById('zacksEPS').setAttribute('src', $scope.zacksChartUrl);

    }

    $scope.rankarray = [1, 2, 3, 4, 5];
    $scope.fetchZacksRank = function () {
        $httpshooter.queue({
            url: "https://quote-feed.zacks.com/index?t=" + preEarn.searchKey,
            method: 'GET'
        }).then(function (data) {
            // data = data.data;
            if (data[preEarn.searchKey]) {
                $scope.zacksData = data[preEarn.searchKey];
                $scope.zacksData.zacks_rank = parseInt($scope.zacksData.zacks_rank);
                if ($scope.isETF) {
                    $scope.marketPrefix = data[preEarn.searchKey].SUNGARD_EXCHANGE;
                }
                $scope.drawCharts();
            }

        })
    };

    $scope.fetchPreEarn = function () {

        var url = "https://api.intrinio.com/securities?ticker=" + preEarn.searchKey
        $httpshooter.queue({
            method: 'GET',
            url: url,
            headers: {
                Authorization: "Basic MmJjYmNmMTE2YjZjNWUzMGFmNjlkYTczN2EyNjRkNTY6MDU5YjZhYmIzZWI1MGIxZGFmZDg4ZTAyNmRhOTU3Y2E="
            }
        }).then(function (data) {
            // data = data.data;
            $scope.marketPrefix = data.stock_exchange;
            $scope.isETF = data.etf;
            $scope.fetchZacksRank();
            $scope.symbol = preEarn.searchKey.toUpperCase();
            $scope.fetchNews();
        });
    };

    $scope.fetchNews = function () {
        var url = "https://api.intrinio.com/news?ticker=" + preEarn.searchKey.toUpperCase() + "&page_number=1&page_size=26";
        $http({
            method: 'GET',
            url: url,
            headers: {
                Authorization: "Basic MmJjYmNmMTE2YjZjNWUzMGFmNjlkYTczN2EyNjRkNTY6MDU5YjZhYmIzZWI1MGIxZGFmZDg4ZTAyNmRhOTU3Y2E="
            }
        }).then(function (data) {
            data = data.data;
            $scope.news = data.data;
        });
    }

    $scope.getNote = function () {
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
    }



    $scope.addNote = function () {
        if (preEarn.noteText) {
            $httpshooter.queue({
                method: 'POST',
                url: api.addNote,
                headers: {
                    token: $localStorage.session.token
                },
                data: {
                    email: $localStorage.session.email,
                    noteText: preEarn.noteText,
                    timestamp: moment($scope.addNoteTimestamp, 'DD-MMM-YYYY').unix()
                }
            }).then(function (data) {

                $scope.notes.push({
                    text: preEarn.noteText,
                    timestamp: moment($scope.addNoteTimestamp, 'DD-MMM-YYYY').unix()
                });
                preEarn.noteText = null;
                preEarn.noteText = null;
            });
        }

    };

    $scope.editNoteMode = false;
    $scope.editIndex = -1;
    $scope.editNote = function (note, index) {
        preEarn.editNoteMode = true;
        $scope.editIndex = index;
        preEarn.editNoteText = note.text.toString();
        $scope.oldNoteTimeStamp = new Date(note.timestamp * 1000);
    };

    $scope.canceledit = function () {
        $scope.editNoteMode = false;
        $scope.editIndex = -1;
        delete $scope.editNoteText;
        delete $scope.editTimeStamp;
    }

    $scope.deleteNote = function (note, index) {
        $httpshooter.queue({
            url: api.deleteNote,
            method: "POST",
            headers: {
                token: $localStorage.session.token
            },
            data: {
                email: $localStorage.session.email,
                timestamp: note.timestamp
            }

        }).then(function (data) {
            if (data.data.message) {
                $scope.notes.splice(index, 1);
            }
        });
    };

    $scope.editNoteSub = function (index) {
        if (preEarn.editNoteText) {
            $httpshooter.queue({
                url: api.editNote,
                method: "POST",
                headers: {
                    token: $localStorage.session.token
                },
                data: {
                    email: $localStorage.session.email,
                    text: preEarn.editNoteText,
                    oldTimestamp: moment($scope.oldNoteTimeStamp).unix(),
                    timestamp: moment(preEarn.newNoteTimestamp, 'DD-MMM-YYYY').unix()
                }

            }).then(function (data) {
                if (data.data.message) {
                    $scope.notes.splice(index, 1);
                    $scope.editIndex = -1;
                    $scope.notes[index] = {
                        text: preEarn.editNoteText,
                        timestamp: moment(preEarn.newNoteTimestamp, 'DD-MMM-YYYY').unix()
                    }
                }
            });
        }

    }


    $scope.$on('$viewContentLoaded', function () {
        $scope.getNote();
        $scope.fetchNews();

    });



    // d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
});

