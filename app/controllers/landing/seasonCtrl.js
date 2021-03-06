nevApp.controller('seasonCtrl', function ($state, $scope, $httpshooter, $localStorage, $rootScope, $sessionStorage) {
    var season = this;
    $scope.searchProductType = 'CUR';
    $scope.Object = Object;
    $scope.currencyData;
    $scope.currentYear = moment().year() - 1;
    $scope.currentWeek = moment().isoWeek();
    $scope.years = [];
    $scope.types = ['long', 'short'];
    $scope.searchCap = 0;
    $scope.searchVolume = 0;
    $scope.searchIndustry;
    $scope.searchSector;
    $scope.dates = {};
    $scope.moment=moment;
    $scope.subMenuMode = 'criteria';
    $scope.toggleSubmenu = function (mode) {
        $scope.subMenuMode = mode;
        if (mode === 'criteria') {

        }
        else {

        }

    };

    //since default is currency

    $scope.getFreq = function (key, freq) {
        if (freq === 'monthly') {
            return moment().month(key - 1).format('MMM')
        }
        else if(freq==='weekly'){
            return "Week" + key;
        }
        else{
            return "Day" + key
        }
    };

    $scope.allTickers = [
        { Name: "AUD", Maker: "Australian Dollar", ticked: false },
        { Name: "EUR", Maker: "Euro", ticked: false },
        { Name: "GBP", Maker: "Great British Pound", ticked: false },
        { Name: "JPY", Maker: "Japanese Yen", ticked: false },
        { Name: "CAD", Maker: "Canadian Dollar", ticked: false },
        { Name: "CHF", Maker: "Swiss Franc", ticked: false },
        { Name: "NZD", Maker: "New Zealand Dollar", ticked: false }
    ];

    //form vars
    $scope.conWeeks = true

    for (i = 1; i <= 6; i++) {
        $scope.years.push($scope.currentYear - i * 5);
    }
    $scope.toggleModal = function () {
        $scope.modalOpen = !$scope.modalOpen;
        document.getElementsByTagName('html')[0].classList.toggle('is-clipped');
        $scope.currencyData = {};
        $scope.dates = {};
    };

    $scope.changeProductType = function () {
        console.log($scope.searchProductType);
        if ($scope.searchProductType === 'CUR') {
            //since default is currency
            $scope.allTickers = [
                { Name: "AUD", Maker: "Australian Dollar", ticked: false },
                { Name: "EUR", Maker: "Euro", ticked: false },
                { Name: "GBP", Maker: "Great British Pound", ticked: false },
                { Name: "JPY", Maker: "Japanese Yen", ticked: false },
                { Name: "CAD", Maker: "Canadian Dollar", ticked: false },
                { Name: "CHF", Maker: "Swiss Franc", ticked: false },
                { Name: "NZD", Maker: "New Zealand Dollar", ticked: false }
            ];
        }
        else if ($scope.searchProductType === 'EQU') {

            $httpshooter.queue({
                url: 'app/static/json/equitiesTicker.json',
                method: 'get'
            }).then(function (data) {
                console.log(data);
                $scope.allTickers = data.data;
            });

            $httpshooter.queue({
                url: 'app/static/json/sectorData.json',
                method: 'get'
            }).then(function (data) {
                console.log(data);
                $scope.allSectors = data.data;
            });

            $httpshooter.queue({
                url: 'app/static/json/industryData.json',
                method: 'get'
            }).then(function (data) {
                console.log(data);
                $scope.allIndustries = data.data;
            });
        }
        else {
            $httpshooter.queue({
                url: 'app/static/json/futuresTicker.json',
                method: 'get'
            }).then(function (data) {
                console.log(data);
                $scope.allTickers = data.data;
            });
        }
    };

    $scope.showResOverlay = function () {
        // var BASE_URL = 'https://query.yahooapis.com/v1/yql?q=';
        // var APP_ID = 'dj0yJmk9aVJUbGlZWUtEbEFlJmQ9WVdrOWNGcGFRek14TldrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03MQ--';
        // var API_QUERY = 'select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2009-09-11" and endDate = "2010-03-10"';
        var symbols = [];
        var code = [];
        $scope.tickerMappedToDetails = {};
        if ($scope.searchSymbol.length) {
            $scope.searchSymbol.forEach(function (element) {
                symbols.push(element.Name);
                if ($scope.searchProductType === 'EQU') {
                    $scope.tickerMappedToDetails[element.Name] = element;
                }

                if ($scope.searchProductType === 'FUT') {
                    code.push(element.Code);
                }

            }, this);
        }
        else {
            symbols = $scope.searchSymbols?$scope.searchSymbols:[];
        }

        if (symbols.length) {
            symbols = symbols.removeDuplicate();
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
                    sector: $scope.searchSector,
                    industry: $scope.searchIndustry,
                    cap: $scope.searchCap,
                    volume: $scope.searchVolume
                };
                url = api.getEquitiesData;
            }
            else if ($scope.searchProductType === 'FUT') {
                payload = {
                    symbols: symbols,
                    code: code,
                    minProb: parseFloat($scope.searchMinProbChange),
                    minValChange: parseFloat($scope.searchMinValChange),
                    minPer: parseFloat($scope.searchMinPerChange),
                    sector: $scope.searchSector,
                    industry: $scope.searchIndustry,
                    cap: $scope.cap,
                    volume: $scope.volume
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
                    $scope.dates = data.dates;
                } else {
                    $scope.currencyData = data.data;
                    $scope.dates = data.dates;

                }

            });
        }
    };

    $scope.goToFunda = function (mode, data) {

        $sessionStorage.fundamental = {};
        $sessionStorage.fundamental.mode = mode;
        $sessionStorage.fundamental.data = data;

        if ($scope.searchProductType === 'EQU') {
            $sessionStorage.fundamental.details = $scope.tickerMappedToDetails[data.ticker];
        }

        console.log($scope.tickerMappedToDetails);
        $scope.toggleModal();
        $state.go('landing.fundamental')
    };

    $scope.toInt = function (str) {
        return parseInt(str);
    };

    $scope.updateTickerList = function (mode, action) {

        if (action === 'reset') {
            if (mode === 'sector') {
                $scope.searchSector.forEach(function (ele, i) {
                    $scope.searchSector[i].Ticked = false;
                });
            }
            else {
                $scope.searchIndustry.forEach(function (ele, i) {
                    $scope.searchIndustry[i].Ticked = false;
                });
            }
        }


        var sectors = [];
        var industry = [];

        if ($scope.searchSector.length) {

            $scope.searchSector.forEach(function (ind, i) {
                if (ind.Ticked) {
                    ind.TickerData.forEach(function (element) {
                        sectors.push(element.Name);
                    });
                }
            });
        }

        if ($scope.searchIndustry.length) {
            $scope.searchIndustry.forEach(function (ind, i) {
                if (ind.Ticked) {
                    ind.TickerData.forEach(function (element) {
                        industry.push(element.Name);
                    });
                }
            });

        }

        if (sectors.length && industry.length) {
            $scope.searchSymbols = sectors.concat(industry);
            $scope.searchSymbols = $scope.searchSymbols.getDuplicateValues();
        }
        else {
            if (sectors.length) {
                $scope.searchSymbols = sectors;
            }
            else {
                $scope.searchSymbols = industry;
            }
        }

    };

    $scope.fReset = function () {
        $scope.searchSymbols = [];
    };

});
