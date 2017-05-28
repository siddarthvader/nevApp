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
            $scope.allTickers = [
                {
                    "Name": "A",
                    "Maker": "Agilent Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AA",
                    "Maker": "Alcoa Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AAME",
                    "Maker": "Atlantic American Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AAN",
                    "Maker": "Aaron's, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AAON",
                    "Maker": "AAON Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AAP",
                    "Maker": "Advance Auto Parts Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AAT",
                    "Maker": "American Assets Trust, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AAPL",
                    "Maker": "Apple Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AAWW",
                    "Maker": "Atlas Air Worldwide Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ABAX",
                    "Maker": "Abaxis, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ABC",
                    "Maker": "AmerisourceBergen Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ABCB",
                    "Maker": "Ameris Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "ABCD",
                    "Maker": "Cambium Learning Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ABCO",
                    "Maker": "The Advisory Board Company",
                    "Ticked": false
                },
                {
                    "Name": "AB",
                    "Maker": "AllianceBernstein Holding L.P.",
                    "Ticked": false
                },
                {
                    "Name": "ABFS",
                    "Maker": "Arkansas Best Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ABG",
                    "Maker": "Asbury Automotive Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ABIO",
                    "Maker": "ARCA biopharma, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ABM",
                    "Maker": "ABM Industries Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "ABMC",
                    "Maker": "American Bio Medica Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ABMD",
                    "Maker": "ABIOMED, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ABPI",
                    "Maker": "Accentia Biopharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ABT",
                    "Maker": "Abbott Laboratories",
                    "Ticked": false
                },
                {
                    "Name": "ABTL",
                    "Maker": "Autobytel Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACAD",
                    "Maker": "ACADIA Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACAT",
                    "Maker": "Arctic Cat Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ABR",
                    "Maker": "Arbor Realty Trust Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACC",
                    "Maker": "American Campus Communities, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACCL",
                    "Maker": "Accelrys Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACE",
                    "Maker": "ACE Limited",
                    "Ticked": false
                },
                {
                    "Name": "ACEL",
                    "Maker": "Tamir Biotechnology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACET",
                    "Maker": "Aceto Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ACFC",
                    "Maker": "Atlantic Coast Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ACFN",
                    "Maker": "Acorn Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACCO",
                    "Maker": "ACCO Brands Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ACGL",
                    "Maker": "Arch Capital Group Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "ACHC",
                    "Maker": "Acadia Healthcare Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACHN",
                    "Maker": "Achillion Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACI",
                    "Maker": "Arch Coal Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACIW",
                    "Maker": "ACI Worldwide, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACM",
                    "Maker": "AECOM Technology Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ACLS",
                    "Maker": "Axcelis Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACMP",
                    "Maker": "Access Midstream Partners, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "ACN",
                    "Maker": "Accenture plc",
                    "Ticked": false
                },
                {
                    "Name": "ACNB",
                    "Maker": "ACNB Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ACO",
                    "Maker": "AMCOL International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ACOR",
                    "Maker": "Acorda Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACPW",
                    "Maker": "Active Power Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACRE",
                    "Maker": "Ares Commercial Real Estate Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ACRX",
                    "Maker": "AcelRx Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACTG",
                    "Maker": "Acacia Research Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ACU",
                    "Maker": "Acme United Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ACUR",
                    "Maker": "Acura Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ACW",
                    "Maker": "Accuride Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ACXM",
                    "Maker": "Acxiom Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ACY",
                    "Maker": "AeroCentury Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ADAT",
                    "Maker": "Authentidate Holding Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ADBE",
                    "Maker": "Adobe Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ADC",
                    "Maker": "Agree Realty Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ADEP",
                    "Maker": "Adept Technology Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ADES",
                    "Maker": "Advanced Emissions Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ADI",
                    "Maker": "Analog Devices, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ADK",
                    "Maker": "AdCare Health Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ADM",
                    "Maker": "Archer Daniels Midland Company",
                    "Ticked": false
                },
                {
                    "Name": "ADNC",
                    "Maker": "Audience, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ADP",
                    "Maker": "Automatic Data Processing, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ADS",
                    "Maker": "Alliance Data Systems Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ADSK",
                    "Maker": "Autodesk, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ADT",
                    "Maker": "The ADT Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ADUS",
                    "Maker": "Addus HomeCare Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ADTN",
                    "Maker": "ADTRAN Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ADVS",
                    "Maker": "Advent Software, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AE",
                    "Maker": "Adams Resources & Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AEC",
                    "Maker": "Associated Estates Realty Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AEE",
                    "Maker": "Ameren Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AEGN",
                    "Maker": "Aegion Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AEGR",
                    "Maker": "Aegerion Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AEHR",
                    "Maker": "Aehr Test Systems",
                    "Ticked": false
                },
                {
                    "Name": "AEIS",
                    "Maker": "Advanced Energy Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AEL",
                    "Maker": "American Equity Investment Life Holding Co.",
                    "Ticked": false
                },
                {
                    "Name": "AEO",
                    "Maker": "American Eagle Outfitters, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AEP",
                    "Maker": "American Electric Power Co., Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AEPI",
                    "Maker": "AEP Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AERG",
                    "Maker": "Applied Energetics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AES",
                    "Maker": "The AES Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AET",
                    "Maker": "Aetna Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AERT",
                    "Maker": "Advanced Environmental Recycling Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AETI",
                    "Maker": "American Electric Technologies, Inc",
                    "Ticked": false
                },
                {
                    "Name": "AF",
                    "Maker": "Astoria Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AEY",
                    "Maker": "ADDvantage Technologies Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFA",
                    "Maker": "American Financial Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFAM",
                    "Maker": "Almost Family Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFCB",
                    "Maker": "Athens Bancshares Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AFCE",
                    "Maker": "AFC Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFFM",
                    "Maker": "Affirmative Insurance Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFFX",
                    "Maker": "Affymetrix Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFFY",
                    "Maker": "Affymax, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFH",
                    "Maker": "Atlas Financial Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFG",
                    "Maker": "American Financial Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFL",
                    "Maker": "AFLAC Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFM",
                    "Maker": "Affiliated Managers Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFOP",
                    "Maker": "Alliance Fiber Optic Products Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AFSI",
                    "Maker": "AmTrust Financial Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AGCO",
                    "Maker": "AGCO Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AGEN",
                    "Maker": "Agenus Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AGII",
                    "Maker": "Argo Group International Holdings, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "AGIIL",
                    "Maker": "Argo Group International Holdin",
                    "Ticked": false
                },
                {
                    "Name": "AGM",
                    "Maker": "Federal Agricultural Mortgage Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AGN",
                    "Maker": "Allergan Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AGNC",
                    "Maker": "American Capital Agency Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AGO",
                    "Maker": "Assured Guaranty Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "AGNCP",
                    "Maker": "American Capital Agency Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AGX",
                    "Maker": "Argan, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AGYS",
                    "Maker": "Agilysys Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AHC",
                    "Maker": "A. H. Belo Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AHGP",
                    "Maker": "Alliance Holdings GP, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "AHL",
                    "Maker": "Aspen Insurance Holdings Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "AHPI",
                    "Maker": "Allied Healthcare Products Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AHS",
                    "Maker": "AMN Healthcare Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AHT",
                    "Maker": "Ashford Hospitality Trust, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AI",
                    "Maker": "Arlington Asset Investment Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AIG",
                    "Maker": "American International Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AIMC",
                    "Maker": "Altra Industrial Motion Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AIQ",
                    "Maker": "Alliance Healthcare Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AIR",
                    "Maker": "AAR Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AIRM",
                    "Maker": "Air Methods Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AIRT",
                    "Maker": "Air T Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AIT",
                    "Maker": "Applied Industrial Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AIV",
                    "Maker": "Apartment Investment and Management Company",
                    "Ticked": false
                },
                {
                    "Name": "AIZ",
                    "Maker": "Assurant Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AJG",
                    "Maker": "Arthur J Gallagher & Co.",
                    "Ticked": false
                },
                {
                    "Name": "AKR",
                    "Maker": "Acadia Realty Trust",
                    "Ticked": false
                },
                {
                    "Name": "AKAM",
                    "Maker": "Akamai Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AKRX",
                    "Maker": "Akorn, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AKS",
                    "Maker": "AK Steel Holding Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ALB",
                    "Maker": "Albemarle Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ALCO",
                    "Maker": "Alico Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALCS",
                    "Maker": "ALCO Stores, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALE",
                    "Maker": "ALLETE, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALGT",
                    "Maker": "Allegiant Travel Company",
                    "Ticked": false
                },
                {
                    "Name": "ALIM",
                    "Maker": "Alimera Sciences, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALGN",
                    "Maker": "Align Technology Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALJ",
                    "Maker": "Alon USA Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALK",
                    "Maker": "Alaska Air Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALKS",
                    "Maker": "Alkermes plc",
                    "Ticked": false
                },
                {
                    "Name": "ALL",
                    "Maker": "The Allstate Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ALG",
                    "Maker": "Alamo Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALEX",
                    "Maker": "Alexander & Baldwin, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALLB",
                    "Maker": "Alliance Bancorp Inc of Pennsylvania",
                    "Ticked": false
                },
                {
                    "Name": "ALOG",
                    "Maker": "Analogic Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ALNY",
                    "Maker": "Alnylam Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALR",
                    "Maker": "Alere Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALOT",
                    "Maker": "Astro-Med, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALSE",
                    "Maker": "Alseres Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALSK",
                    "Maker": "Alaska Communications Systems Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALSN",
                    "Maker": "Allison Transmission Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALTI",
                    "Maker": "Altair Nanotechnologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALV",
                    "Maker": "Autoliv, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALTR",
                    "Maker": "Altera Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ALXA",
                    "Maker": "Alexza Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALXN",
                    "Maker": "Alexion Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMAG",
                    "Maker": "AMAG Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMAT",
                    "Maker": "Applied Materials, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ALX",
                    "Maker": "Alexander's Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMBA",
                    "Maker": "Ambarella, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMBT",
                    "Maker": "Ambient Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AMCC",
                    "Maker": "Applied Micro Circuits Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AMCF",
                    "Maker": "Andatee China Marine Fuel Services Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AMCX",
                    "Maker": "AMC Networks Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMD",
                    "Maker": "Advanced Micro Devices, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AME",
                    "Maker": "Ametek Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMED",
                    "Maker": "Amedisys Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMG",
                    "Maker": "Affiliated Managers Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMGN",
                    "Maker": "Amgen Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMIC",
                    "Maker": "American Independence Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AMID",
                    "Maker": "American Midstream Partners, LP",
                    "Ticked": false
                },
                {
                    "Name": "AMIN",
                    "Maker": "American International Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMKR",
                    "Maker": "Amkor Technology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMNB",
                    "Maker": "American National Bankshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMOT",
                    "Maker": "Allied Motion Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMP",
                    "Maker": "Ameriprise Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMPE",
                    "Maker": "Ampio Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMRB",
                    "Maker": "American River Bankshares",
                    "Ticked": false
                },
                {
                    "Name": "AMRC",
                    "Maker": "Ameresco, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMRE",
                    "Maker": "AmREIT, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMRI",
                    "Maker": "Albany Molecular Research Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMRS",
                    "Maker": "Amyris, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMSC",
                    "Maker": "American Superconductor Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AMSF",
                    "Maker": "Amerisafe, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMS",
                    "Maker": "American Shared Hospital Services",
                    "Ticked": false
                },
                {
                    "Name": "AMSG",
                    "Maker": "AmSurg Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AMSWA",
                    "Maker": "American Software, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMT",
                    "Maker": "American Tower Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AMTD",
                    "Maker": "TD Ameritrade Holding Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AMTG",
                    "Maker": "Apollo Residential Mortgage, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMTY",
                    "Maker": "Amerityre Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AMWD",
                    "Maker": "American Woodmark Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AN",
                    "Maker": "AutoNation Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANAC",
                    "Maker": "Anacor Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AMZN",
                    "Maker": "Amazon.com Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANAD",
                    "Maker": "Anadigics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANAT",
                    "Maker": "American National Insurance Co.",
                    "Ticked": false
                },
                {
                    "Name": "ANCB",
                    "Maker": "Anchor Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "ANCX",
                    "Maker": "Access National Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ANDA",
                    "Maker": "Tecnoglass, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANDAU",
                    "Maker": "Andina Acquisition Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ANDAW",
                    "Maker": "Andina Acquisition Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ANEN",
                    "Maker": "Anaren, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANGI",
                    "Maker": "Angie's List, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANF",
                    "Maker": "Abercrombie & Fitch Co.",
                    "Ticked": false
                },
                {
                    "Name": "ANGO",
                    "Maker": "AngioDynamics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANIK",
                    "Maker": "Anika Therapeutics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANLY",
                    "Maker": "Analysts International Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ANDE",
                    "Maker": "The Andersons, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANN",
                    "Maker": "ANN INC.",
                    "Ticked": false
                },
                {
                    "Name": "ANH",
                    "Maker": "Anworth Mortgage Asset Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ANR",
                    "Maker": "Alpha Natural Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANSS",
                    "Maker": "Ansys, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANTH",
                    "Maker": "Anthera Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANTP",
                    "Maker": "PHAZAR CORP",
                    "Ticked": false
                },
                {
                    "Name": "ANV",
                    "Maker": "Allied Nevada Gold Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AOL",
                    "Maker": "AOL Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AOS",
                    "Maker": "AO Smith Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AOSL",
                    "Maker": "Alpha & Omega Semiconductor, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "AP",
                    "Maker": "Ampco-Pittsburgh Corp.",
                    "Ticked": false
                },
                {
                    "Name": "APA",
                    "Maker": "Apache Corp.",
                    "Ticked": false
                },
                {
                    "Name": "APAGF",
                    "Maker": "Apco Oil & Gas International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APAM",
                    "Maker": "Artisan Partners Asset Management Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APC",
                    "Maker": "Anadarko Petroleum Corporation",
                    "Ticked": false
                },
                {
                    "Name": "APD",
                    "Maker": "Air Products & Chemicals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APEI",
                    "Maker": "American Public Education, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APFC",
                    "Maker": "American Pacific Corporation",
                    "Ticked": false
                },
                {
                    "Name": "APH",
                    "Maker": "Amphenol Corporation",
                    "Ticked": false
                },
                {
                    "Name": "API",
                    "Maker": "Advanced Photonix Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APO",
                    "Maker": "Apollo Global Management, LLC",
                    "Ticked": false
                },
                {
                    "Name": "APOG",
                    "Maker": "Apogee Enterprises, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APL",
                    "Maker": "Atlas Pipeline Partners, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "APP",
                    "Maker": "American Apparel, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APOL",
                    "Maker": "Apollo Education Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APPY",
                    "Maker": "Venaxis, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APRI",
                    "Maker": "Apricus Biosciences, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "APU",
                    "Maker": "AmeriGas Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "APT",
                    "Maker": "Alpha Pro Tech Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "ARAY",
                    "Maker": "Accuray Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "ARCI",
                    "Maker": "Appliance Recycling Centers of America Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AOI",
                    "Maker": "Alliance One International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ANCI",
                    "Maker": "American Caresource Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARCP",
                    "Maker": "American Realty Capital Properties, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARCW",
                    "Maker": "ARC Group Worldwide, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARDM",
                    "Maker": "Aradigm Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ARDNA",
                    "Maker": "Arden Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AREX",
                    "Maker": "Approach Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARI",
                    "Maker": "Apollo Commercial Real Estate Finance, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARII",
                    "Maker": "American Railcar Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARKR",
                    "Maker": "Ark Restaurants Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ARL",
                    "Maker": "American Realty Investors Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARLP",
                    "Maker": "Alliance Resource Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "ARNA",
                    "Maker": "Arena Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AQQ",
                    "Maker": "American Spectrum Realty Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AROW",
                    "Maker": "Arrow Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ARP",
                    "Maker": "Atlas Resource Partners, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "ARQL",
                    "Maker": "ArQule Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARR",
                    "Maker": "ARMOUR Residential REIT, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARRS",
                    "Maker": "ARRIS Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARRY",
                    "Maker": "Array BioPharma, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARTC",
                    "Maker": "ArthroCare Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ARTNA",
                    "Maker": "Artesian Resources Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ARTW",
                    "Maker": "Art's-Way Manufacturing Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARE",
                    "Maker": "Alexandria Real Estate Equities, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARTX",
                    "Maker": "Arotech Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ARUN",
                    "Maker": "Aruba Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARW",
                    "Maker": "Arrow Electronics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARWR",
                    "Maker": "Arrowhead Research Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ASBB",
                    "Maker": "ASB Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASBC",
                    "Maker": "Associated Banc-Corp",
                    "Ticked": false
                },
                {
                    "Name": "ASBCW",
                    "Maker": "Associated Banc-Corp",
                    "Ticked": false
                },
                {
                    "Name": "ARSD",
                    "Maker": "Arabian American Development Company",
                    "Ticked": false
                },
                {
                    "Name": "ASBI",
                    "Maker": "Ameriana Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "ASCA",
                    "Maker": "Ameristar Casinos Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASCMA",
                    "Maker": "Ascent Capital Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASEI",
                    "Maker": "American Science & Engineering Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARG",
                    "Maker": "Airgas, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARX",
                    "Maker": "Aeroflex Holding Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ASH",
                    "Maker": "Ashland Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASIA",
                    "Maker": "AsiaInfo-Linkage, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASNA",
                    "Maker": "Ascena Retail Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASPS",
                    "Maker": "Altisource Portfolio Solutions S.A.",
                    "Ticked": false
                },
                {
                    "Name": "ASTC",
                    "Maker": "Astrotech Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ASTE",
                    "Maker": "Astec Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASTI",
                    "Maker": "Ascent Solar Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASRV",
                    "Maker": "AmeriServ Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASUR",
                    "Maker": "Asure Software, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASYS",
                    "Maker": "Amtech Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATEA",
                    "Maker": "Astea International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATEC",
                    "Maker": "Alphatec Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATHN",
                    "Maker": "athenahealth, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATHX",
                    "Maker": "Athersys, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATK",
                    "Maker": "Alliant Techsystems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATI",
                    "Maker": "Allegheny Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATLC",
                    "Maker": "Atlanticus Holdings Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ATMI",
                    "Maker": "ATMI Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATML",
                    "Maker": "Atmel Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ATNI",
                    "Maker": "Atlantic Tele-Network, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ASTM",
                    "Maker": "Aastrom Biosciences, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATNY",
                    "Maker": "API Technologies Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ATO",
                    "Maker": "Atmos Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ATOS",
                    "Maker": "Atossa Genetics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATR",
                    "Maker": "AptarGroup, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATLO",
                    "Maker": "Ames National Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ATRM",
                    "Maker": "Aetrium Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATRO",
                    "Maker": "Astronics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ATRS",
                    "Maker": "Antares Pharma Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATRC",
                    "Maker": "AtriCure, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATU",
                    "Maker": "Actuant Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ATRI",
                    "Maker": "ATRION Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ARO",
                    "Maker": "A",
                    "Ticked": false
                },
                {
                    "Name": "ASFI",
                    "Maker": "Asta Funding Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATVI",
                    "Maker": "Activision Blizzard, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATW",
                    "Maker": "Atwood Oceanics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ARIA",
                    "Maker": "Ariad Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ATX",
                    "Maker": "Costa Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AUBN",
                    "Maker": "Auburn National Bancorporation, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AUXL",
                    "Maker": "Auxilium Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVA",
                    "Maker": "Avista Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AVAV",
                    "Maker": "AeroVironment, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVB",
                    "Maker": "Avalonbay Communities Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVEO",
                    "Maker": "AVEO Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVHI",
                    "Maker": "AV Homes, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVNR",
                    "Maker": "Avanir Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVID",
                    "Maker": "Avid Technology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVGO",
                    "Maker": "Avago Technologies Limited",
                    "Ticked": false
                },
                {
                    "Name": "AVNW",
                    "Maker": "Aviat Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVP",
                    "Maker": "Avon Products Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVSR",
                    "Maker": "Avistar Communications Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AVT",
                    "Maker": "Avnet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AVX",
                    "Maker": "AVX Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AVY",
                    "Maker": "Avery Dennison Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AWAY",
                    "Maker": "HomeAway, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AWH",
                    "Maker": "Allied World Assurance Company Holdings, AG",
                    "Ticked": false
                },
                {
                    "Name": "AWI",
                    "Maker": "Armstrong World Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AWK",
                    "Maker": "American Water Works Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AWRE",
                    "Maker": "Aware, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AWX",
                    "Maker": "Avalon Holdings Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AXAS",
                    "Maker": "Abraxas Petroleum Corp.",
                    "Ticked": false
                },
                {
                    "Name": "AXDX",
                    "Maker": "Accelerate Diagnostics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AXE",
                    "Maker": "Anixter International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AXL",
                    "Maker": "American Axle & Manufacturing Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AXLL",
                    "Maker": "Axiall Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AXN",
                    "Maker": "Aoxing Pharmaceutical Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AXP",
                    "Maker": "American Express Company",
                    "Ticked": false
                },
                {
                    "Name": "AXR",
                    "Maker": "AMREP Corporation",
                    "Ticked": false
                },
                {
                    "Name": "AXS",
                    "Maker": "AXIS Capital Holdings Limited",
                    "Ticked": false
                },
                {
                    "Name": "AXTI",
                    "Maker": "AXT Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AYI",
                    "Maker": "Acuity Brands, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AZO",
                    "Maker": "AutoZone, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AZPN",
                    "Maker": "Aspen Technology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "B",
                    "Maker": "Barnes Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "AZZ",
                    "Maker": "AZZ incorporated",
                    "Ticked": false
                },
                {
                    "Name": "BA",
                    "Maker": "The Boeing Company",
                    "Ticked": false
                },
                {
                    "Name": "BABY",
                    "Maker": "Natus Medical Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BAC",
                    "Maker": "Bank of America Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BAGL",
                    "Maker": "Einstein Noah Restaurant Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BAGR",
                    "Maker": "Diversified Restaurant Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BAH",
                    "Maker": "Booz Allen Hamilton Holding Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BAMM",
                    "Maker": "Books-A-Million Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BANF",
                    "Maker": "BancFirst Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BANC",
                    "Maker": "Banc of California, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BANR",
                    "Maker": "Banner Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BAS",
                    "Maker": "Basic Energy Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BASI",
                    "Maker": "Bioanalytical Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BAX",
                    "Maker": "Baxter International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BBBY",
                    "Maker": "Bed Bath & Beyond Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BBG",
                    "Maker": "Bill Barrett Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BBGI",
                    "Maker": "Beasley Broadcast Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BBNK",
                    "Maker": "Bridge Capital Holdings",
                    "Ticked": false
                },
                {
                    "Name": "BBOX",
                    "Maker": "Black Box Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BBRG",
                    "Maker": "Bravo Brio Restaurant Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BBSI",
                    "Maker": "Barrett Business Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BBX",
                    "Maker": "BBX Capital Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BC",
                    "Maker": "Brunswick Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BCC",
                    "Maker": "Boise Cascade Company",
                    "Ticked": false
                },
                {
                    "Name": "BCEI",
                    "Maker": "Bonanza Creek Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BCO",
                    "Maker": "The Brink's Company",
                    "Ticked": false
                },
                {
                    "Name": "BCOR",
                    "Maker": "Blucora, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BCOV",
                    "Maker": "Brightcove, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BCPC",
                    "Maker": "Balchem Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BCR",
                    "Maker": "CR Bard Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BCRX",
                    "Maker": "BioCryst Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BDCO",
                    "Maker": "Blue Dolphin Energy Company",
                    "Ticked": false
                },
                {
                    "Name": "BDE",
                    "Maker": "Black Diamond, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BDGE",
                    "Maker": "Bridge Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BDL",
                    "Maker": "Flanigan's Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BDN",
                    "Maker": "Brandywine Realty Trust",
                    "Ticked": false
                },
                {
                    "Name": "BDMS",
                    "Maker": "Birner Dental Management Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BDR",
                    "Maker": "Blonder Tongue Laboratories Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BDSI",
                    "Maker": "BioDelivery Sciences International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BEAV",
                    "Maker": "B/E Aerospace Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BEBE",
                    "Maker": "Bebe Stores, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BDX",
                    "Maker": "Becton, Dickinson and Company",
                    "Ticked": false
                },
                {
                    "Name": "BECN",
                    "Maker": "Beacon Roofing Supply, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BELFA",
                    "Maker": "Bel Fuse Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BELFB",
                    "Maker": "Bel Fuse Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BEN",
                    "Maker": "Franklin Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BERK",
                    "Maker": "Berkshire Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BERY",
                    "Maker": "Berry Plastics Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BFAM",
                    "Maker": "Bright Horizons Family Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BFB",
                    "Maker": "Brown-Forman Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BFIN",
                    "Maker": "BankFinancial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BG",
                    "Maker": "Bunge Limited",
                    "Ticked": false
                },
                {
                    "Name": "BGC",
                    "Maker": "General Cable Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BGCP",
                    "Maker": "BGC Partners, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BGFV",
                    "Maker": "Big 5 Sporting Goods Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BGG",
                    "Maker": "Briggs & Stratton Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BGMD",
                    "Maker": "BG Medicine, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BGS",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "BH",
                    "Maker": "Biglari Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BHB",
                    "Maker": "Bar Harbor Bankshares",
                    "Ticked": false
                },
                {
                    "Name": "BHE",
                    "Maker": "Benchmark Electronics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BHI",
                    "Maker": "Baker Hughes Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "BHRT",
                    "Maker": "Bioheart, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BIG",
                    "Maker": "Big Lots Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BIIB",
                    "Maker": "Biogen Idec Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BIOC",
                    "Maker": "Biocept, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BIOD",
                    "Maker": "Biodel Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BIOF",
                    "Maker": "BioFuel Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BIOL",
                    "Maker": "BIOLASE, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BIRT",
                    "Maker": "Actuate Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BJRI",
                    "Maker": "BJ's Restaurants, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BKBK",
                    "Maker": "Britton & Koontz Capital Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BKD",
                    "Maker": "Brookdale Senior Living Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BKE",
                    "Maker": "The Buckle, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BKH",
                    "Maker": "Black Hills Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BKJ",
                    "Maker": "Bancorp Of New Jersey, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BKMU",
                    "Maker": "Bank Mutual Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BKOR",
                    "Maker": "Oak Ridge Financial Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BKS",
                    "Maker": "Barnes & Noble, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BKU",
                    "Maker": "BankUnited, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BKW",
                    "Maker": "Burger King Worldwide, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BKYF",
                    "Maker": "Bank of Kentucky Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BLDR",
                    "Maker": "Builders FirstSource, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BLIN",
                    "Maker": "Bridgeline Digital, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BLKB",
                    "Maker": "Blackbaud Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BLL",
                    "Maker": "Ball Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BLK",
                    "Maker": "BlackRock, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BLMN",
                    "Maker": "Bloomin' Brands, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BLMT",
                    "Maker": "BSB Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BLOX",
                    "Maker": "Infoblox Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BMC",
                    "Maker": "BMC Software Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BMI",
                    "Maker": "Badger Meter Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BMS",
                    "Maker": "Bemis Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BMTC",
                    "Maker": "Bryn Mawr Bank Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BMY",
                    "Maker": "Bristol-Myers Squibb Company",
                    "Ticked": false
                },
                {
                    "Name": "BNCL",
                    "Maker": "Beneficial Mutual Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BNCN",
                    "Maker": "BNC Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "BOBE",
                    "Maker": "Bob Evans Farms, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BOCH",
                    "Maker": "Bank of Commerce Holdings",
                    "Ticked": false
                },
                {
                    "Name": "BODY",
                    "Maker": "Body Central Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BOFI",
                    "Maker": "BofI Holding, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BOH",
                    "Maker": "Bank of Hawaii Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BOKF",
                    "Maker": "BOK Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BOLT",
                    "Maker": "Bolt Technology Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BONE",
                    "Maker": "Bacterin International Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BONT",
                    "Maker": "Bon-Ton Stores Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BOTA",
                    "Maker": "Biota Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BOOM",
                    "Maker": "Dynamic Materials Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BPFH",
                    "Maker": "Boston Private Financial Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BOX",
                    "Maker": "Box Ships Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BOTJ",
                    "Maker": "Bank of the James Financial Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BPL",
                    "Maker": "Buckeye Partners, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "BPOP",
                    "Maker": "Popular, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BPI",
                    "Maker": "Bridgepoint Education, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BPZ",
                    "Maker": "BPZ Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BR",
                    "Maker": "Broadridge Financial Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRC",
                    "Maker": "Brady Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BRCD",
                    "Maker": "Brocade Communications Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BREW",
                    "Maker": "Craft Brew Alliance, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRKA",
                    "Maker": "Berkshire Hathaway Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRID",
                    "Maker": "Bridgford Foods Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BRKL",
                    "Maker": "Brookline Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRCM",
                    "Maker": "Broadcom Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BRKR",
                    "Maker": "Bruker Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BRKS",
                    "Maker": "Brooks Automation, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRLI",
                    "Maker": "Bio-Reference Laboratories Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRN",
                    "Maker": "Barnwell Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRO",
                    "Maker": "Brown & Brown Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRS",
                    "Maker": "Bristow Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRSS",
                    "Maker": "Global Brass and Copper Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BRT",
                    "Maker": "BRT Realty Trust",
                    "Ticked": false
                },
                {
                    "Name": "BSDM",
                    "Maker": "BSD Medical Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BSET",
                    "Maker": "Bassett Furniture Industries, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "BSPM",
                    "Maker": "Biostar Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BSQR",
                    "Maker": "BSQUARE Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BSRR",
                    "Maker": "Sierra Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "BTH",
                    "Maker": "Blyth, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BSX",
                    "Maker": "Boston Scientific Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BTN",
                    "Maker": "Ballantyne Strong, Inc",
                    "Ticked": false
                },
                {
                    "Name": "BTU",
                    "Maker": "Peabody Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BTUI",
                    "Maker": "BTU International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BTX",
                    "Maker": "BioTime, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BUSE",
                    "Maker": "First Busey Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BV",
                    "Maker": "Bazaarvoice, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BVSN",
                    "Maker": "BroadVision, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BVX",
                    "Maker": "Bovie Medical Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BWA",
                    "Maker": "BorgWarner Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BWC",
                    "Maker": "The Babcock & Wilcox Company",
                    "Ticked": false
                },
                {
                    "Name": "BWLD",
                    "Maker": "Buffalo Wild Wings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BWP",
                    "Maker": "Boardwalk Pipeline Partners, LP",
                    "Ticked": false
                },
                {
                    "Name": "BWS",
                    "Maker": "Brown Shoe Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BXC",
                    "Maker": "Bluelinx Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BXP",
                    "Maker": "Boston Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BXS",
                    "Maker": "BancorpSouth, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BYD",
                    "Maker": "Boyd Gaming Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BYFC",
                    "Maker": "Broadway Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BYI",
                    "Maker": "Bally Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "BYLK",
                    "Maker": "Baylake Corp.",
                    "Ticked": false
                },
                {
                    "Name": "BZC",
                    "Maker": "Breeze-Eastern Corporation",
                    "Ticked": false
                },
                {
                    "Name": "BZH",
                    "Maker": "Beazer Homes USA Inc.",
                    "Ticked": false
                },
                {
                    "Name": "C",
                    "Maker": "Citigroup Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CA",
                    "Maker": "CA Technologies",
                    "Ticked": false
                },
                {
                    "Name": "CAAS",
                    "Maker": "China Automotive Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAB",
                    "Maker": "Cabela's Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "CAC",
                    "Maker": "Camden National Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CACB",
                    "Maker": "Cascade Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "CACC",
                    "Maker": "Credit Acceptance Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CACG",
                    "Maker": "Chart Acquisition Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CACGU",
                    "Maker": "Chart Acquisition Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CACGW",
                    "Maker": "Chart Acquisition Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CACI",
                    "Maker": "CACI International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CADC",
                    "Maker": "China Advanced Construction Materials Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CACH",
                    "Maker": "Cache Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CADX",
                    "Maker": "Cadence Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAG",
                    "Maker": "ConAgra Foods, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAH",
                    "Maker": "Cardinal Health, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAFI",
                    "Maker": "Camco Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CAK",
                    "Maker": "CAMAC Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAKE",
                    "Maker": "The Cheesecake Factory Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "CALD",
                    "Maker": "Callidus Software Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CALI",
                    "Maker": "China Auto Logistic Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CALL",
                    "Maker": "magicJack VocalTec Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "CALM",
                    "Maker": "Cal-Maine Foods, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CALX",
                    "Maker": "Calix Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAM",
                    "Maker": "Cameron International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CAMP",
                    "Maker": "CalAmp Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CAP",
                    "Maker": "CAI International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAR",
                    "Maker": "Avis Budget Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CARB",
                    "Maker": "Carbonite, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CARV",
                    "Maker": "Carver Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAS",
                    "Maker": "A. M. Castle & Co.",
                    "Ticked": false
                },
                {
                    "Name": "CASH",
                    "Maker": "Meta Financial Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CASM",
                    "Maker": "CAS Medical Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CASS",
                    "Maker": "Cass Information Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CASY",
                    "Maker": "Casey's General Stores, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAT",
                    "Maker": "Caterpillar Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CATM",
                    "Maker": "Cardtronics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CATO",
                    "Maker": "The Cato Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CATY",
                    "Maker": "Cathay General Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "CAVM",
                    "Maker": "Cavium, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CAW",
                    "Maker": "CCA Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CB",
                    "Maker": "The Chubb Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CBAK",
                    "Maker": "China BAK Battery, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBAN",
                    "Maker": "Colony Bankcorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBB",
                    "Maker": "Cincinnati Bell Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBEY",
                    "Maker": "Cbeyond, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBF",
                    "Maker": "Capital Bank Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CBG",
                    "Maker": "CBRE Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBI",
                    "Maker": "Chicago Bridge & Iron Company N.V.",
                    "Ticked": false
                },
                {
                    "Name": "CBIN",
                    "Maker": "Community Bank Shares of Indiana Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBK",
                    "Maker": "Christopher & Banks Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CBLI",
                    "Maker": "Cleveland BioLabs, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBL",
                    "Maker": "CBL & Associates Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBM",
                    "Maker": "Cambrex Corporation.",
                    "Ticked": false
                },
                {
                    "Name": "CBMX",
                    "Maker": "CombiMatrix Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CBMXW",
                    "Maker": "CombiMatrix Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CBNJ",
                    "Maker": "Cape Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBNK",
                    "Maker": "Chicopee Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBOE",
                    "Maker": "CBOE Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBPO",
                    "Maker": "China Biologic Products, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBR",
                    "Maker": "Ciber, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBRL",
                    "Maker": "Cracker Barrel Old Country Store, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBRX",
                    "Maker": "Columbia Laboratories Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBS",
                    "Maker": "CBS Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CBSH",
                    "Maker": "Commerce Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBST",
                    "Maker": "Cubist Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBT",
                    "Maker": "Cabot Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CBU",
                    "Maker": "Community Bank System Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CBZ",
                    "Maker": "CBIZ, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CCBG",
                    "Maker": "Capital City Bank Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CCF",
                    "Maker": "Chase Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CCC",
                    "Maker": "Calgon Carbon Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CCE",
                    "Maker": "Coca-Cola Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CCG",
                    "Maker": "Campus Crest Communities, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CCI",
                    "Maker": "Crown Castle International Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CCIX",
                    "Maker": "Coleman Cable, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CCK",
                    "Maker": "Crown Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CCL",
                    "Maker": "Carnival Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CCMP",
                    "Maker": "Cabot Microelectronics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CCNE",
                    "Maker": "CNB Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CCO",
                    "Maker": "Clear Channel Outdoor Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CCOI",
                    "Maker": "Cogent Communications Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CCRN",
                    "Maker": "Cross Country Healthcare, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CCUR",
                    "Maker": "Concurrent Computer Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CDI",
                    "Maker": "CDI Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CDE",
                    "Maker": "Coeur Mining, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CDII",
                    "Maker": "CD International Enterprises, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CDR",
                    "Maker": "Cedar Realty Trust, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CDXS",
                    "Maker": "Codexis, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CDNS",
                    "Maker": "Cadence Design Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CDZI",
                    "Maker": "Cadiz Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CEB",
                    "Maker": "Corporate Executive Board Co.",
                    "Ticked": false
                },
                {
                    "Name": "CECE",
                    "Maker": "CECO Environmental Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CDTI",
                    "Maker": "Clean Diesel Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CECO",
                    "Maker": "Career Education Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CELG",
                    "Maker": "Celgene Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CELGZ",
                    "Maker": "Celgene Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CEMP",
                    "Maker": "Cempra, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CENT",
                    "Maker": "Central Garden & Pet Company",
                    "Ticked": false
                },
                {
                    "Name": "CENTA",
                    "Maker": "Central Garden & Pet Company",
                    "Ticked": false
                },
                {
                    "Name": "CEMI",
                    "Maker": "Chembio Diagnostics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CENX",
                    "Maker": "Century Aluminum Co.",
                    "Ticked": false
                },
                {
                    "Name": "CEP",
                    "Maker": "Constellation Energy Partners LLC",
                    "Ticked": false
                },
                {
                    "Name": "CERN",
                    "Maker": "Cerner Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CERS",
                    "Maker": "Cerus Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CETV",
                    "Maker": "Central European Media Enterprises Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "CEVA",
                    "Maker": "CEVA Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CF",
                    "Maker": "CF Industries Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CFBK",
                    "Maker": "Central Federal Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CERE",
                    "Maker": "Ceres, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CFFN",
                    "Maker": "Capitol Federal Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CFFI",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "CFI",
                    "Maker": "Culp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CFNL",
                    "Maker": "Cardinal Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CFNB",
                    "Maker": "California First National Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "CFN",
                    "Maker": "CareFusion Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CFR",
                    "Maker": "Cullen/Frost Bankers, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CFX",
                    "Maker": "Colfax Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CG",
                    "Maker": "The Carlyle Group LP",
                    "Ticked": false
                },
                {
                    "Name": "CGA",
                    "Maker": "China Green Agriculture, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CGNX",
                    "Maker": "Cognex Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CGI",
                    "Maker": "Celadon Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHD",
                    "Maker": "Church & Dwight Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHDX",
                    "Maker": "Chindex International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHBT",
                    "Maker": "China-Biotics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHE",
                    "Maker": "Chemed Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CHEF",
                    "Maker": "The Chefs' Warehouse, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHCI",
                    "Maker": "Comstock Holding Companies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHEV",
                    "Maker": "Cheviot Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CHFC",
                    "Maker": "Chemical Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CHCO",
                    "Maker": "City Holding Co.",
                    "Ticked": false
                },
                {
                    "Name": "CHFN",
                    "Maker": "Charter Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CHGS",
                    "Maker": "China Gengsheng Minerals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHH",
                    "Maker": "Choice Hotels International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHK",
                    "Maker": "Chesapeake Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CHKE",
                    "Maker": "Cherokee Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHLN",
                    "Maker": "China Housing and Land Development, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHMG",
                    "Maker": "Chemung Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CHMP",
                    "Maker": "Champion Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHMT",
                    "Maker": "Chemtura Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CHRW",
                    "Maker": "CH Robinson Worldwide Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHS",
                    "Maker": "Chico's FAS Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHSCP",
                    "Maker": "CHS, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHTP",
                    "Maker": "Chelsea Therapeutics International Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "CHSP",
                    "Maker": "Chesapeake Lodging Trust",
                    "Ticked": false
                },
                {
                    "Name": "CHUY",
                    "Maker": "Chuy's Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CHYR",
                    "Maker": "ChyronHego Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CI",
                    "Maker": "Cigna Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CIDM",
                    "Maker": "Cinedigm Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CIEN",
                    "Maker": "Ciena Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CIFC",
                    "Maker": "CIFC Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CIM",
                    "Maker": "Chimera Investment Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CINF",
                    "Maker": "Cincinnati Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CIR",
                    "Maker": "CIRCOR International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CIT",
                    "Maker": "CIT Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CITZ",
                    "Maker": "CFS Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CIX",
                    "Maker": "CompX International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CIZN",
                    "Maker": "Citizens Holding Company",
                    "Ticked": false
                },
                {
                    "Name": "CJJD",
                    "Maker": "China Jo-Jo Drugstores, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CKP",
                    "Maker": "Checkpoint Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CL",
                    "Maker": "Colgate-Palmolive Co.",
                    "Ticked": false
                },
                {
                    "Name": "CLB",
                    "Maker": "Core Laboratories NV",
                    "Ticked": false
                },
                {
                    "Name": "CLBH",
                    "Maker": "Carolina Bank Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLC",
                    "Maker": "CLARCOR Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLCT",
                    "Maker": "Collectors Universe Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLD",
                    "Maker": "Cloud Peak Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLDT",
                    "Maker": "Chatham Lodging Trust",
                    "Ticked": false
                },
                {
                    "Name": "CKX",
                    "Maker": "CKX Lands Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLDX",
                    "Maker": "Celldex Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLF",
                    "Maker": "Cliffs Natural Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLFD",
                    "Maker": "Clearfield, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLIR",
                    "Maker": "Clearsign Combustion Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CLMS",
                    "Maker": "Calamos Asset Management Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLNE",
                    "Maker": "Clean Energy Fuels Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CLNT",
                    "Maker": "Cleantech Solutions International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLNY",
                    "Maker": "Colony Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLR",
                    "Maker": "Continental Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLRO",
                    "Maker": "ClearOne, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLRX",
                    "Maker": "CollabRx, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLSN",
                    "Maker": "Celsion Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CLW",
                    "Maker": "Clearwater Paper Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CLVS",
                    "Maker": "Clovis Oncology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CLX",
                    "Maker": "The Clorox Company",
                    "Ticked": false
                },
                {
                    "Name": "CLUB",
                    "Maker": "Town Sports International Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CMC",
                    "Maker": "Commercial Metals Company",
                    "Ticked": false
                },
                {
                    "Name": "CMA",
                    "Maker": "Comerica Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "CMCO",
                    "Maker": "Columbus McKinnon Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CMCSK",
                    "Maker": "Comcast Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CME",
                    "Maker": "CME Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CMCSA",
                    "Maker": "Comcast Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CMFO",
                    "Maker": "China Marine Food Group Limited",
                    "Ticked": false
                },
                {
                    "Name": "CMG",
                    "Maker": "Chipotle Mexican Grill, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CMI",
                    "Maker": "Cummins Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CMKG",
                    "Maker": "mktg, inc.",
                    "Ticked": false
                },
                {
                    "Name": "CMLP",
                    "Maker": "Crestwood Midstream Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "CMLS",
                    "Maker": "Cumulus Media Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CMP",
                    "Maker": "Compass Minerals International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CMRO",
                    "Maker": "Comarco, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CMN",
                    "Maker": "Cantel Medical Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CMRX",
                    "Maker": "Chimerix, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CMTL",
                    "Maker": "Comtech Telecommunications Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CNBKA",
                    "Maker": "Century Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNC",
                    "Maker": "Centene Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CNDO",
                    "Maker": "Coronado Biosciences, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNK",
                    "Maker": "Cinemark Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNL",
                    "Maker": "Cleco Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CNA",
                    "Maker": "CNA Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CNBC",
                    "Maker": "Center Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNO",
                    "Maker": "CNO Financial Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNMD",
                    "Maker": "CONMED Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CNOB",
                    "Maker": "ConnectOne Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNQR",
                    "Maker": "Concur Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNS",
                    "Maker": "Cohen & Steers Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNSI",
                    "Maker": "Comverse, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNSL",
                    "Maker": "Consolidated Communications Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNW",
                    "Maker": "Con-way Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNX",
                    "Maker": "CONSOL Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CNYD",
                    "Maker": "China Yida Holding, Co.",
                    "Ticked": false
                },
                {
                    "Name": "COBK",
                    "Maker": "Colonial Financial Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COBZ",
                    "Maker": "CoBiz Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COCO",
                    "Maker": "Corinthian Colleges Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CODI",
                    "Maker": "Compass Diversified Holdings",
                    "Ticked": false
                },
                {
                    "Name": "COF",
                    "Maker": "Capital One Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "COG",
                    "Maker": "Cabot Oil & Gas Corporation",
                    "Ticked": false
                },
                {
                    "Name": "COH",
                    "Maker": "Coach, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COHR",
                    "Maker": "Coherent Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COKE",
                    "Maker": "Coca-Cola Bottling Co. Consolidated",
                    "Ticked": false
                },
                {
                    "Name": "COL",
                    "Maker": "Rockwell Collins Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COHU",
                    "Maker": "Cohu, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COLB",
                    "Maker": "Columbia Banking System Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COLM",
                    "Maker": "Columbia Sportswear Company",
                    "Ticked": false
                },
                {
                    "Name": "CONN",
                    "Maker": "Conns Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COO",
                    "Maker": "The Cooper Companies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COOL",
                    "Maker": "Majesco Entertainment Co.",
                    "Ticked": false
                },
                {
                    "Name": "COP",
                    "Maker": "ConocoPhillips",
                    "Ticked": false
                },
                {
                    "Name": "COR",
                    "Maker": "CoreSite Realty Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CORT",
                    "Maker": "Corcept Therapeutics Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "CORX",
                    "Maker": "Cortex Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COSI",
                    "Maker": "Cosi Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COST",
                    "Maker": "Costco Wholesale Corporation",
                    "Ticked": false
                },
                {
                    "Name": "COT",
                    "Maker": "Cott Corporation",
                    "Ticked": false
                },
                {
                    "Name": "COV",
                    "Maker": "Covidien plc",
                    "Ticked": false
                },
                {
                    "Name": "COVR",
                    "Maker": "Cover-All Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "COWN",
                    "Maker": "Cowen Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CPAH",
                    "Maker": "CounterPath Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CPB",
                    "Maker": "Campbell Soup Company",
                    "Ticked": false
                },
                {
                    "Name": "CPE",
                    "Maker": "Callon Petroleum Company",
                    "Ticked": false
                },
                {
                    "Name": "CPF",
                    "Maker": "Central Pacific Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CPGI",
                    "Maker": "China Shengda Packaging Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CPHD",
                    "Maker": "Cepheid",
                    "Ticked": false
                },
                {
                    "Name": "CPIX",
                    "Maker": "Cumberland Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CPHC",
                    "Maker": "Canterbury Park Holding Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CPN",
                    "Maker": "Calpine Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CPRT",
                    "Maker": "Copart, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CPLA",
                    "Maker": "Capella Education Co.",
                    "Ticked": false
                },
                {
                    "Name": "CPRX",
                    "Maker": "Catalyst Pharmaceutical Partners Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CPSI",
                    "Maker": "Computer Programs & Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CPSL",
                    "Maker": "China Precision Steel, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CPST",
                    "Maker": "Capstone Turbine Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CPT",
                    "Maker": "Camden Property Trust",
                    "Ticked": false
                },
                {
                    "Name": "CRAI",
                    "Maker": "CRA International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CPWR",
                    "Maker": "Compuware Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CRAY",
                    "Maker": "Cray Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRDC",
                    "Maker": "Cardica Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CREE",
                    "Maker": "Cree, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRIS",
                    "Maker": "Curis, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRK",
                    "Maker": "Comstock Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRL",
                    "Maker": "Charles River Laboratories International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRMD",
                    "Maker": "CorMedix, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRMT",
                    "Maker": "America's Car-Mart Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CROX",
                    "Maker": "Crocs, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRMB",
                    "Maker": "Crumbs Bake Shop, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRR",
                    "Maker": "CARBO Ceramics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRRC",
                    "Maker": "Courier Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CRRS",
                    "Maker": "Corporate Resource Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRS",
                    "Maker": "Carpenter Technology Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CRTX",
                    "Maker": "Cornerstone Therapeutics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRUS",
                    "Maker": "Cirrus Logic Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRV",
                    "Maker": "Coast Distribution System Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRVL",
                    "Maker": "CorVel Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CRVP",
                    "Maker": "Crystal Rock Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRWS",
                    "Maker": "Crown Crafts, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CRY",
                    "Maker": "CryoLife Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSBK",
                    "Maker": "Clifton Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSCD",
                    "Maker": "Cascade Microtech Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSC",
                    "Maker": "Computer Sciences Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CSCO",
                    "Maker": "Cisco Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSFL",
                    "Maker": "CenterState Banks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSGP",
                    "Maker": "CoStar Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSGS",
                    "Maker": "CSG Systems International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSH",
                    "Maker": "Cash America International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSHB",
                    "Maker": "Community Shores Bank Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CSII",
                    "Maker": "Cardiovascular Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSL",
                    "Maker": "Carlisle Companies Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "CSOD",
                    "Maker": "Cornerstone OnDemand, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSPI",
                    "Maker": "CSP Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSS",
                    "Maker": "CSS Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CST",
                    "Maker": "CST Brands, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSV",
                    "Maker": "Carriage Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CSWC",
                    "Maker": "Capital Southwest Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CSX",
                    "Maker": "CSX Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CTAS",
                    "Maker": "Cintas Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CTB",
                    "Maker": "Cooper Tire & Rubber Co.",
                    "Ticked": false
                },
                {
                    "Name": "CTBI",
                    "Maker": "Community Trust Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CTCT",
                    "Maker": "Constant Contact, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CTG",
                    "Maker": "Computer Task Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CTHR",
                    "Maker": "Charles & Colvard Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "CTIB",
                    "Maker": "CTI Industries Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CTL",
                    "Maker": "CenturyLink, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CTO",
                    "Maker": "Consolidated Tomoka Land Co.",
                    "Ticked": false
                },
                {
                    "Name": "CTRN",
                    "Maker": "Citi Trends, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CTS",
                    "Maker": "CTS Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CTSH",
                    "Maker": "Cognizant Technology Solutions Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CTWS",
                    "Maker": "Connecticut Water Service Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CTXS",
                    "Maker": "Citrix Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CUB",
                    "Maker": "Cubic Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CUBI",
                    "Maker": "Customers Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CUI",
                    "Maker": "CUI Global, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CUNB",
                    "Maker": "CU Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "CUO",
                    "Maker": "Continental Materials Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CUTR",
                    "Maker": "Cutera, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CUZ",
                    "Maker": "Cousins Properties Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "CVA",
                    "Maker": "Covanta Holding Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CVBF",
                    "Maker": "CVB Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CVC",
                    "Maker": "Cablevision Systems Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CVBK",
                    "Maker": "Central Virginia Bankshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVCO",
                    "Maker": "Cavco Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVCY",
                    "Maker": "Central Valley Community Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "CVD",
                    "Maker": "Covance Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVG",
                    "Maker": "Convergys Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CVGI",
                    "Maker": "Commercial Vehicle Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVI",
                    "Maker": "CVR Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVGW",
                    "Maker": "Calavo Growers Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVLT",
                    "Maker": "CommVault Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVLY",
                    "Maker": "Codorus Valley Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVM",
                    "Maker": "CEL-SCI Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CVO",
                    "Maker": "Cenveo Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVR",
                    "Maker": "Chicago Rivet & Machine Co.",
                    "Ticked": false
                },
                {
                    "Name": "CVTI",
                    "Maker": "Covenant Transportation Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVS",
                    "Maker": "CVS Caremark Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CVU",
                    "Maker": "CPI Aerostructures Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVV",
                    "Maker": "CVD Equipment Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CVVT",
                    "Maker": "China Valves Technology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CVX",
                    "Maker": "Chevron Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CW",
                    "Maker": "Curtiss-Wright Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CWBC",
                    "Maker": "Community West Bancshares",
                    "Ticked": false
                },
                {
                    "Name": "CWCO",
                    "Maker": "Consolidated Water Co. Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "CWEI",
                    "Maker": "Clayton Williams Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CWH",
                    "Maker": "CommonWealth REIT",
                    "Ticked": false
                },
                {
                    "Name": "CWHN",
                    "Maker": "CommonWealth REIT",
                    "Ticked": false
                },
                {
                    "Name": "CWST",
                    "Maker": "Casella Waste Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CWT",
                    "Maker": "California Water Service Group",
                    "Ticked": false
                },
                {
                    "Name": "CWTR",
                    "Maker": "Coldwater Creek Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CXDC",
                    "Maker": "China XD Plastics Company Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "CXO",
                    "Maker": "Concho Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CXP",
                    "Maker": "Columbia Property Trust, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CXPO",
                    "Maker": "Crimson Exploration Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CXW",
                    "Maker": "Corrections Corporation of America",
                    "Ticked": false
                },
                {
                    "Name": "CY",
                    "Maker": "Cypress Semiconductor Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CYAN",
                    "Maker": "Cyanotech Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CYB",
                    "Maker": "WisdomTree Chinese Yuan Strategy",
                    "Ticked": false
                },
                {
                    "Name": "CYBE",
                    "Maker": "CyberOptics Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CYBX",
                    "Maker": "Cyberonics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CYCC",
                    "Maker": "Cyclacel Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CYCCP",
                    "Maker": "Cyclacel Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CYH",
                    "Maker": "Community Health Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CYN",
                    "Maker": "City National Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CYNI",
                    "Maker": "Cyan, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CYNO",
                    "Maker": "Cynosure, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CYS",
                    "Maker": "CYS Investments, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CYT",
                    "Maker": "Cytec Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CYTK",
                    "Maker": "Cytokinetics, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "CYTR",
                    "Maker": "CytRx Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CYTX",
                    "Maker": "Cytori Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CYTXW",
                    "Maker": "Cytori Therapeutics Inc",
                    "Ticked": false
                },
                {
                    "Name": "CZFC",
                    "Maker": "Citizens First Corporation",
                    "Ticked": false
                },
                {
                    "Name": "CZNC",
                    "Maker": "Citizens & Northern Corp.",
                    "Ticked": false
                },
                {
                    "Name": "CZWI",
                    "Maker": "Citizens Community Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "D",
                    "Maker": "Dominion Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DAEG",
                    "Maker": "Daegis Inc.",
                    "Ticked": false
                },
                {
                    "Name": "CZR",
                    "Maker": "Caesars Entertainment Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DAIO",
                    "Maker": "Data I/O Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DAL",
                    "Maker": "Delta Air Lines Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DAKT",
                    "Maker": "Daktronics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DAN",
                    "Maker": "Dana Holding Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DAR",
                    "Maker": "Darling International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DARA",
                    "Maker": "DARA BioSciences, Inc",
                    "Ticked": false
                },
                {
                    "Name": "DATA",
                    "Maker": "Tableau Software, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DAVE",
                    "Maker": "Famous Dave's of America Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DBD",
                    "Maker": "Diebold, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "DBLE",
                    "Maker": "Double Eagle Petroleum Co.",
                    "Ticked": false
                },
                {
                    "Name": "DBLEP",
                    "Maker": "Double Eagle Petroleum Co.",
                    "Ticked": false
                },
                {
                    "Name": "DCI",
                    "Maker": "Donaldson Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DCO",
                    "Maker": "Ducommun Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DCOM",
                    "Maker": "Dime Community Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DCT",
                    "Maker": "DCT Industrial Trust Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DCTH",
                    "Maker": "Delcath Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DD",
                    "Maker": "E. I. du Pont de Nemours and Company",
                    "Ticked": false
                },
                {
                    "Name": "DDD",
                    "Maker": "3D Systems Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DDDC",
                    "Maker": "deltathree, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DDE",
                    "Maker": "Dover Downs Gaming & Entertainment Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DDR",
                    "Maker": "DDR Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DDS",
                    "Maker": "Dillard's Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DE",
                    "Maker": "Deere & Company",
                    "Ticked": false
                },
                {
                    "Name": "DECK",
                    "Maker": "Deckers Outdoor Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DEER",
                    "Maker": "Deer Consumer Products, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DEI",
                    "Maker": "Douglas Emmett Inc",
                    "Ticked": false
                },
                {
                    "Name": "DEL",
                    "Maker": "Deltic Timber Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DENN",
                    "Maker": "Denny's Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DEPO",
                    "Maker": "DepoMed Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DEST",
                    "Maker": "Destination Maternity Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DF",
                    "Maker": "Dean Foods Company",
                    "Ticked": false
                },
                {
                    "Name": "DFS",
                    "Maker": "Discover Financial Services",
                    "Ticked": false
                },
                {
                    "Name": "DFT",
                    "Maker": "DuPont Fabros Technology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DFZ",
                    "Maker": "R.G. Barry Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DG",
                    "Maker": "Dollar General Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DGI",
                    "Maker": "DigitalGlobe, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DGAS",
                    "Maker": "Delta Natural Gas Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DGICA",
                    "Maker": "Donegal Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DGICB",
                    "Maker": "Donegal Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DGII",
                    "Maker": "Digi International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DGIT",
                    "Maker": "Digital Generation, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DGLY",
                    "Maker": "Digital Ally Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DGSE",
                    "Maker": "DGSE Companies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DGX",
                    "Maker": "Quest Diagnostics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DHI",
                    "Maker": "DR Horton Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DHIL",
                    "Maker": "Diamond Hill Investment Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DHR",
                    "Maker": "Danaher Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DHX",
                    "Maker": "Dice Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DHRM",
                    "Maker": "Dehaier Medical Systems Limited",
                    "Ticked": false
                },
                {
                    "Name": "DIET",
                    "Maker": "Ediets.com Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DIN",
                    "Maker": "DineEquity, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DIOD",
                    "Maker": "Diodes Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "DISCA",
                    "Maker": "Discovery Communications, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DISCB",
                    "Maker": "Discovery Communications, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DISCK",
                    "Maker": "Discovery Communications, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DISH",
                    "Maker": "Dish Network Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DIS",
                    "Maker": "The Walt Disney Company",
                    "Ticked": false
                },
                {
                    "Name": "DJCO",
                    "Maker": "Daily Journal Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DIT",
                    "Maker": "AMCON Distributing Co.",
                    "Ticked": false
                },
                {
                    "Name": "DK",
                    "Maker": "Delek US Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DKL",
                    "Maker": "Delek Logistics Partners, LP",
                    "Ticked": false
                },
                {
                    "Name": "DKS",
                    "Maker": "Dick's Sporting Goods Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DLB",
                    "Maker": "Dolby Laboratories, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DLA",
                    "Maker": "Delta Apparel Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DLGC",
                    "Maker": "Dialogic, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DLLR",
                    "Maker": "DFC Global Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DLIA",
                    "Maker": "dELiA*s, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DLHC",
                    "Maker": "DLH Holdings Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DLPH",
                    "Maker": "Delphi Automotive PLC",
                    "Ticked": false
                },
                {
                    "Name": "DLR",
                    "Maker": "Digital Realty Trust Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DLTR",
                    "Maker": "Dollar Tree, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DLX",
                    "Maker": "Deluxe Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DMD",
                    "Maker": "Demand Media, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DMLP",
                    "Maker": "Dorchester Minerals LP",
                    "Ticked": false
                },
                {
                    "Name": "DMRC",
                    "Maker": "Digimarc Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DMND",
                    "Maker": "Diamond Foods, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DNB",
                    "Maker": "Dun & Bradstreet Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DNDN",
                    "Maker": "Dendreon Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DNKN",
                    "Maker": "Dunkin' Brands Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DNR",
                    "Maker": "Denbury Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DO",
                    "Maker": "Diamond Offshore Drilling, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DNBF",
                    "Maker": "DNB Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DORM",
                    "Maker": "Dorman Products, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DOV",
                    "Maker": "Dover Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DOW",
                    "Maker": "The Dow Chemical Company",
                    "Ticked": false
                },
                {
                    "Name": "DPS",
                    "Maker": "Dr Pepper Snapple Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DPM",
                    "Maker": "DCP Midstream Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "DPW",
                    "Maker": "Digital Power Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DRAD",
                    "Maker": "Digirad Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DRAM",
                    "Maker": "Dataram Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DRC",
                    "Maker": "Dresser-Rand Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DRCO",
                    "Maker": "Dynamics Research Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DRE",
                    "Maker": "Duke Realty Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DPZ",
                    "Maker": "Domino's Pizza, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DRIV",
                    "Maker": "Digital River Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DRH",
                    "Maker": "Diamondrock Hospitality Co.",
                    "Ticked": false
                },
                {
                    "Name": "DRI",
                    "Maker": "Darden Restaurants, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DRL",
                    "Maker": "Doral Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DRQ",
                    "Maker": "Dril-Quip, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DRRX",
                    "Maker": "DURECT Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DRTX",
                    "Maker": "Durata Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DSCI",
                    "Maker": "Derma Sciences Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DSCO",
                    "Maker": "Discovery Laboratories Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DSPG",
                    "Maker": "DSP Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DSKX",
                    "Maker": "DS Healthcare Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DSS",
                    "Maker": "Document Security Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DSTI",
                    "Maker": "DayStar Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DSW",
                    "Maker": "DSW Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DTE",
                    "Maker": "DTE Energy Company",
                    "Ticked": false
                },
                {
                    "Name": "DTLK",
                    "Maker": "Datalink Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DTSI",
                    "Maker": "DTS Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DTV",
                    "Maker": "DIRECTV",
                    "Ticked": false
                },
                {
                    "Name": "DUK",
                    "Maker": "Duke Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DVA",
                    "Maker": "DaVita HealthCare Partners Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DV",
                    "Maker": "DeVry Education Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DVAX",
                    "Maker": "Dynavax Technologies Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DVCR",
                    "Maker": "Diversicare Healthcare Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DVD",
                    "Maker": "Dover Motorsports Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DVN",
                    "Maker": "Devon Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DVR",
                    "Maker": "Cal Dive International Inc",
                    "Ticked": false
                },
                {
                    "Name": "DWA",
                    "Maker": "DreamWorks Animation SKG Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DW",
                    "Maker": "Drew Industries Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "DWCH",
                    "Maker": "Datawatch Corporation",
                    "Ticked": false
                },
                {
                    "Name": "DWRE",
                    "Maker": "Demandware, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DWSN",
                    "Maker": "Dawson Geophysical Company",
                    "Ticked": false
                },
                {
                    "Name": "DX",
                    "Maker": "Dynex Capital Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DXCM",
                    "Maker": "DexCom, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DXLG",
                    "Maker": "Destination XL Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DXM",
                    "Maker": "Dex Media, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DXPE",
                    "Maker": "DXP Enterprises, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DXR",
                    "Maker": "Daxor Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DY",
                    "Maker": "Dycom Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DYAX",
                    "Maker": "Dyax Corp.",
                    "Ticked": false
                },
                {
                    "Name": "DYII",
                    "Maker": "Dynacq Healthcare Inc.",
                    "Ticked": false
                },
                {
                    "Name": "DYNIQ",
                    "Maker": "DYNEGY INC NEW",
                    "Ticked": false
                },
                {
                    "Name": "DYSL",
                    "Maker": "Dynasil Corporation of America",
                    "Ticked": false
                },
                {
                    "Name": "EAC",
                    "Maker": "Erickson Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "EA",
                    "Maker": "Electronic Arts Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EBF",
                    "Maker": "Ennis Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EAT",
                    "Maker": "Brinker International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EBIX",
                    "Maker": "Ebix Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EBAY",
                    "Maker": "eBay Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EBMT",
                    "Maker": "Eagle Bancorp Montana, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EBSB",
                    "Maker": "Meridian Interstate Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EBTC",
                    "Maker": "Enterprise Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EBS",
                    "Maker": "Emergent BioSolutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ECHO",
                    "Maker": "Echo Global Logistics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ECL",
                    "Maker": "Ecolab Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ECOL",
                    "Maker": "US Ecology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ECOM",
                    "Maker": "ChannelAdvisor Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ECTE",
                    "Maker": "Echo Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ECTY",
                    "Maker": "ECOtality, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ECYT",
                    "Maker": "Endocyte, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ED",
                    "Maker": "Consolidated Edison, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EDGW",
                    "Maker": "Edgewater Technology Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EDMC",
                    "Maker": "Education Management Corporation",
                    "Ticked": false
                },
                {
                    "Name": "EDE",
                    "Maker": "The Empire District Electric Company",
                    "Ticked": false
                },
                {
                    "Name": "EDR",
                    "Maker": "Education Realty Trust, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EDUC",
                    "Maker": "Educational Development Corporation",
                    "Ticked": false
                },
                {
                    "Name": "EEI",
                    "Maker": "Ecology & Environment, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EFC",
                    "Maker": "Ellington Financial LLC",
                    "Ticked": false
                },
                {
                    "Name": "EEFT",
                    "Maker": "Euronet Worldwide Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EFII",
                    "Maker": "Electronics for Imaging, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EFOI",
                    "Maker": "Energy Focus, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EFSC",
                    "Maker": "Enterprise Financial Services Corp.",
                    "Ticked": false
                },
                {
                    "Name": "EFX",
                    "Maker": "Equifax Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EGAN",
                    "Maker": "eGain Corporation",
                    "Ticked": false
                },
                {
                    "Name": "EGHT",
                    "Maker": "8x8 Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EGL",
                    "Maker": "Engility Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EGN",
                    "Maker": "Energen Corp.",
                    "Ticked": false
                },
                {
                    "Name": "EGOV",
                    "Maker": "NIC Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EGY",
                    "Maker": "Vaalco Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EHTH",
                    "Maker": "eHealth, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EIG",
                    "Maker": "Employers Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ELGX",
                    "Maker": "Endologix Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ELLI",
                    "Maker": "Ellie Mae, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ELNK",
                    "Maker": "EarthLink Holdings Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ELRC",
                    "Maker": "Electro Rent Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ELX",
                    "Maker": "Emulex Corporation",
                    "Ticked": false
                },
                {
                    "Name": "EMCI",
                    "Maker": "EMC Insurance Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ELY",
                    "Maker": "Callaway Golf Co.",
                    "Ticked": false
                },
                {
                    "Name": "EME",
                    "Maker": "EMCOR Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "END",
                    "Maker": "Endeavour International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ENDP",
                    "Maker": "Endo International plc",
                    "Ticked": false
                },
                {
                    "Name": "ENH",
                    "Maker": "Endurance Specialty Holdings Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "ENR",
                    "Maker": "Energizer Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ENS",
                    "Maker": "EnerSys",
                    "Ticked": false
                },
                {
                    "Name": "ENPH",
                    "Maker": "Enphase Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ENSG",
                    "Maker": "The Ensign Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ENTG",
                    "Maker": "Entegris, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ENTA",
                    "Maker": "Enanta Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ENTR",
                    "Maker": "Entropic Communications, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ENV",
                    "Maker": "Envestnet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ENZN",
                    "Maker": "Enzon Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EOPN",
                    "Maker": "E2open, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EPAM",
                    "Maker": "EPAM Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EPAY",
                    "Maker": "Bottomline Technologies",
                    "Ticked": false
                },
                {
                    "Name": "EPIQ",
                    "Maker": "Epiq Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EPM",
                    "Maker": "Evolution Petroleum Corp.",
                    "Ticked": false
                },
                {
                    "Name": "EPL",
                    "Maker": "EPL Oil & Gas, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EPZM",
                    "Maker": "Epizyme, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EQIX",
                    "Maker": "Equinix, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EQU",
                    "Maker": "Equal Energy Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "ERA",
                    "Maker": "Era Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ERII",
                    "Maker": "Energy Recovery, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ERIE",
                    "Maker": "Erie Indemnity Company",
                    "Ticked": false
                },
                {
                    "Name": "ESBF",
                    "Maker": "ESB Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ESGR",
                    "Maker": "Enstar Group Limited",
                    "Ticked": false
                },
                {
                    "Name": "ESE",
                    "Maker": "ESCO Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ESIO",
                    "Maker": "Electro Scientific Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ESSA",
                    "Maker": "ESSA Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ETH",
                    "Maker": "Ethan Allen Interiors Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ETM",
                    "Maker": "Entercom Communications Corp.",
                    "Ticked": false
                },
                {
                    "Name": "EVC",
                    "Maker": "Entravision Communications Corporation",
                    "Ticked": false
                },
                {
                    "Name": "EVTC",
                    "Maker": "EVERTEC, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ESL",
                    "Maker": "Esterline Technologies Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ESC",
                    "Maker": "Emeritus Corp.",
                    "Ticked": false
                },
                {
                    "Name": "EVR",
                    "Maker": "Evercore Partners Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EWBC",
                    "Maker": "East West Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EV",
                    "Maker": "Eaton Vance Corp.",
                    "Ticked": false
                },
                {
                    "Name": "EXAC",
                    "Maker": "Exactech Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EXAS",
                    "Maker": "Exact Sciences Corporation",
                    "Ticked": false
                },
                {
                    "Name": "EXAR",
                    "Maker": "Exar Corp.",
                    "Ticked": false
                },
                {
                    "Name": "EXAM",
                    "Maker": "ExamWorks Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EXEL",
                    "Maker": "Exelixis, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EXH",
                    "Maker": "Exterran Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EXLS",
                    "Maker": "Exlservice Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EXPO",
                    "Maker": "Exponent Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EXPR",
                    "Maker": "Express Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EXP",
                    "Maker": "Eagle Materials Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EXTR",
                    "Maker": "Extreme Networks Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EXXI",
                    "Maker": "Energy XXI",
                    "Ticked": false
                },
                {
                    "Name": "EXR",
                    "Maker": "Extra Space Storage Inc.",
                    "Ticked": false
                },
                {
                    "Name": "EZPW",
                    "Maker": "EZCORP, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "F",
                    "Maker": "Ford Motor Co.",
                    "Ticked": false
                },
                {
                    "Name": "FABK",
                    "Maker": "First Advantage Bancorp.",
                    "Ticked": false
                },
                {
                    "Name": "FAC",
                    "Maker": "First Acceptance Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FAF",
                    "Maker": "First American Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FALC",
                    "Maker": "Falconstor Software Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FANG",
                    "Maker": "Diamondback Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FARM",
                    "Maker": "Farmer Brothers Co.",
                    "Ticked": false
                },
                {
                    "Name": "FARO",
                    "Maker": "FARO Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FAST",
                    "Maker": "Fastenal Company",
                    "Ticked": false
                },
                {
                    "Name": "FB",
                    "Maker": "Facebook, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FBC",
                    "Maker": "Flagstar Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FBHS",
                    "Maker": "Fortune Brands Home & Security, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FBIZ",
                    "Maker": "First Business Financial Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FBMI",
                    "Maker": "Firstbank Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FBMS",
                    "Maker": "First Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FBNC",
                    "Maker": "First Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "FBNK",
                    "Maker": "First Connecticut Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FBP",
                    "Maker": "First Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "FBRC",
                    "Maker": "FBR & Co.",
                    "Ticked": false
                },
                {
                    "Name": "FBSS",
                    "Maker": "Fauquier Bankshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FC",
                    "Maker": "Franklin Covey Co.",
                    "Ticked": false
                },
                {
                    "Name": "FCAP",
                    "Maker": "First Capital Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FCCY",
                    "Maker": "1st Constitution Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "FCBC",
                    "Maker": "First Community Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FCCO",
                    "Maker": "First Community Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FCEL",
                    "Maker": "FuelCell Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FCF",
                    "Maker": "First Commonwealth Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FCFS",
                    "Maker": "First Cash Financial Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FCH",
                    "Maker": "FelCor Lodging Trust Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "FCLF",
                    "Maker": "First Clover Leaf Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FCN",
                    "Maker": "FTI Consulting, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FCNCA",
                    "Maker": "First Citizens Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FCTY",
                    "Maker": "1st Century Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FCX",
                    "Maker": "Freeport-McMoRan Copper & Gold Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FCZA",
                    "Maker": "First Citizens Banc Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FDEF",
                    "Maker": "First Defiance Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FDO",
                    "Maker": "Family Dollar Stores Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FDP",
                    "Maker": "Fresh Del Monte Produce Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FDS",
                    "Maker": "FactSet Research Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FCS",
                    "Maker": "Fairchild Semiconductor International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FDML",
                    "Maker": "Federal-Mogul Holdings Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FDX",
                    "Maker": "FedEx Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FE",
                    "Maker": "FirstEnergy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FEIC",
                    "Maker": "FEI Company",
                    "Ticked": false
                },
                {
                    "Name": "FEIM",
                    "Maker": "Frequency Electronics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FES",
                    "Maker": "Forbes Energy Services Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "FELE",
                    "Maker": "Franklin Electric Co., Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FET",
                    "Maker": "Forum Energy Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FFBC",
                    "Maker": "First Financial Bancorp.",
                    "Ticked": false
                },
                {
                    "Name": "FFBCW",
                    "Maker": "First Financial Bancorp.",
                    "Ticked": false
                },
                {
                    "Name": "FF",
                    "Maker": "FutureFuel Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FFBH",
                    "Maker": "First Federal Bancshares of Arkansas Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FFEX",
                    "Maker": "Frozen Food Express Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FFG",
                    "Maker": "FBL Financial Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FFIC",
                    "Maker": "Flushing Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FFIN",
                    "Maker": "First Financial Bankshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FFIV",
                    "Maker": "F5 Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FFKT",
                    "Maker": "Farmers Capital Bank Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FFKY",
                    "Maker": "First Financial Service Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FFNM",
                    "Maker": "First Federal of Northern Michigan Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FFNW",
                    "Maker": "First Financial Northwest, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FGP",
                    "Maker": "Ferrellgas Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "FHCO",
                    "Maker": "The Female Health Company",
                    "Ticked": false
                },
                {
                    "Name": "FHN",
                    "Maker": "First Horizon National Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FIBK",
                    "Maker": "First Interstate Bancsystem Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FICO",
                    "Maker": "Fair Isaac Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FIG",
                    "Maker": "Fortress Investment Group LLC",
                    "Ticked": false
                },
                {
                    "Name": "FII",
                    "Maker": "Federated Investors, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FINL",
                    "Maker": "Finish Line Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FIO",
                    "Maker": "Fusion-io, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FIRE",
                    "Maker": "Sourcefire, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FIS",
                    "Maker": "Fidelity National Information Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FISI",
                    "Maker": "Financial Institutions Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FITB",
                    "Maker": "Fifth Third Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "FISV",
                    "Maker": "Fiserv, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FIVE",
                    "Maker": "Five Below, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FIX",
                    "Maker": "Comfort Systems USA Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FIZZ",
                    "Maker": "National Beverage Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FL",
                    "Maker": "Foot Locker, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FLDM",
                    "Maker": "Fluidigm Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FLIC",
                    "Maker": "The First of Long Island Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FLEX",
                    "Maker": "Flextronics International Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "FLIR",
                    "Maker": "FLIR Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FLL",
                    "Maker": "Full House Resorts Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FLO",
                    "Maker": "Flowers Foods, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FLOW",
                    "Maker": "Flow International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FLR",
                    "Maker": "Fluor Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FLT",
                    "Maker": "FleetCor Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FLTX",
                    "Maker": "Fleetmatics Group PLC",
                    "Ticked": false
                },
                {
                    "Name": "FLS",
                    "Maker": "Flowserve Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FLWS",
                    "Maker": "1-800-Flowers.com Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FLXS",
                    "Maker": "Flexsteel Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FMBI",
                    "Maker": "First Midwest Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FMC",
                    "Maker": "FMC Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FMCC",
                    "Maker": "Federal Home Loan Mortgage Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FMD",
                    "Maker": "The First Marblehead Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FMER",
                    "Maker": "FirstMerit Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FMNB",
                    "Maker": "Farmers National Banc Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FN",
                    "Maker": "Fabrinet",
                    "Ticked": false
                },
                {
                    "Name": "FNB",
                    "Maker": "F.N.B. Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FNF",
                    "Maker": "Fidelity National Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FNFG",
                    "Maker": "First Niagara Financial Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FNGN",
                    "Maker": "Financial Engines, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FNHC",
                    "Maker": "Federated National Holding Company",
                    "Ticked": false
                },
                {
                    "Name": "FNLC",
                    "Maker": "The First Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FNSR",
                    "Maker": "Finisar Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FNMA",
                    "Maker": "Federal National Mortgage Association",
                    "Ticked": false
                },
                {
                    "Name": "FOE",
                    "Maker": "Ferro Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FOLD",
                    "Maker": "Amicus Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FONR",
                    "Maker": "Fonar Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FOR",
                    "Maker": "Forestar Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FORM",
                    "Maker": "FormFactor Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FORR",
                    "Maker": "Forrester Research Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FORD",
                    "Maker": "Forward Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FOSL",
                    "Maker": "Fossil Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FOX",
                    "Maker": "Twenty-First Century Fox, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FOXA",
                    "Maker": "Twenty-First Century Fox, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FPO",
                    "Maker": "First Potomac Realty Trust",
                    "Ticked": false
                },
                {
                    "Name": "FPP",
                    "Maker": "Fieldpoint Petroleum Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FR",
                    "Maker": "First Industrial Realty Trust Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FRAN",
                    "Maker": "Francesca's Holdings Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FRBK",
                    "Maker": "Republic First Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FRED",
                    "Maker": "Fred's, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FRF",
                    "Maker": "Fortegra Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FRGI",
                    "Maker": "Fiesta Restaurant Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FRM",
                    "Maker": "Furmanite Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FRD",
                    "Maker": "Friedman Industries, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "FRME",
                    "Maker": "First Merchants Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FRNK",
                    "Maker": "Franklin Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FRP",
                    "Maker": "Fairpoint Communications, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FRT",
                    "Maker": "Federal Realty Investment Trust",
                    "Ticked": false
                },
                {
                    "Name": "FSBK",
                    "Maker": "First South Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FRX",
                    "Maker": "Forest Laboratories Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FRS",
                    "Maker": "Frisch's Restaurants, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FSBW",
                    "Maker": "FS Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FSCI",
                    "Maker": "Fisher Communications, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FSFG",
                    "Maker": "First Savings Financial Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FSGI",
                    "Maker": "First Security Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FSI",
                    "Maker": "Flexible Solutions International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FSL",
                    "Maker": "Freescale Semiconductor, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "FSLR",
                    "Maker": "First Solar, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FSP",
                    "Maker": "Franklin Street Properties Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FST",
                    "Maker": "Forest Oil Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FSTR",
                    "Maker": "LB Foster Co.",
                    "Ticked": false
                },
                {
                    "Name": "FSYS",
                    "Maker": "Fuel Systems Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FTEK",
                    "Maker": "Fuel-Tech, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FTI",
                    "Maker": "FMC Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FTK",
                    "Maker": "Flotek Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FTNT",
                    "Maker": "Fortinet Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FU",
                    "Maker": "FAB Universal Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FTR",
                    "Maker": "Frontier Communications Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FUBC",
                    "Maker": "1st United Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FULT",
                    "Maker": "Fulton Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FUN",
                    "Maker": "Cedar Fair, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "FUNC",
                    "Maker": "First United Corporation",
                    "Ticked": false
                },
                {
                    "Name": "FUR",
                    "Maker": "Winthrop Realty Trust",
                    "Ticked": false
                },
                {
                    "Name": "FUL",
                    "Maker": "HB Fuller Co.",
                    "Ticked": false
                },
                {
                    "Name": "FURX",
                    "Maker": "Furiex Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FWLT",
                    "Maker": "Foster Wheeler AG",
                    "Ticked": false
                },
                {
                    "Name": "FVE",
                    "Maker": "Five Star Quality Care Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FWRD",
                    "Maker": "Forward Air Corp.",
                    "Ticked": false
                },
                {
                    "Name": "FXCM",
                    "Maker": "FXCM Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FWV",
                    "Maker": "First West Virginia Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "FXEN",
                    "Maker": "FX Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "G",
                    "Maker": "Genpact Limited",
                    "Ticked": false
                },
                {
                    "Name": "GABC",
                    "Maker": "German American Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GALE",
                    "Maker": "Galena Biopharma, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GAIA",
                    "Maker": "Gaiam Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GALT",
                    "Maker": "Galectin Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GALTU",
                    "Maker": "Galectin Therapeutics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GAS",
                    "Maker": "AGL Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GB",
                    "Maker": "Greatbatch, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GBCI",
                    "Maker": "Glacier Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GBL",
                    "Maker": "GAMCO Investors, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GBLI",
                    "Maker": "Global Indemnity plc",
                    "Ticked": false
                },
                {
                    "Name": "GBNK",
                    "Maker": "Guaranty Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "GBR",
                    "Maker": "New Concept Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GBX",
                    "Maker": "The Greenbrier Companies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GCA",
                    "Maker": "Global Cash Access Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GCAP",
                    "Maker": "GAIN Capital Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GCBC",
                    "Maker": "Greene County Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GALTW",
                    "Maker": "Galectin Therapeutics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GCFB",
                    "Maker": "Granite City Food & Brewery Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "GCI",
                    "Maker": "Gannett Co., Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GCO",
                    "Maker": "Genesco Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GCOM",
                    "Maker": "Globecomm Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GD",
                    "Maker": "General Dynamics Corp.",
                    "Ticked": false
                },
                {
                    "Name": "GDOT",
                    "Maker": "Green Dot Corporation",
                    "Ticked": false
                },
                {
                    "Name": "GE",
                    "Maker": "General Electric Company",
                    "Ticked": false
                },
                {
                    "Name": "GEF",
                    "Maker": "Greif, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GENC",
                    "Maker": "Gencor Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GEO",
                    "Maker": "The GEO Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GEOS",
                    "Maker": "Geospace Technologies Corporation",
                    "Ticked": false
                },
                {
                    "Name": "GERN",
                    "Maker": "Geron Corporation",
                    "Ticked": false
                },
                {
                    "Name": "GES",
                    "Maker": "Guess' Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GFF",
                    "Maker": "Griffon Corporation",
                    "Ticked": false
                },
                {
                    "Name": "GEVO",
                    "Maker": "Gevo, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GFIG",
                    "Maker": "GFI Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GFED",
                    "Maker": "Guaranty Federal Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GFN",
                    "Maker": "General Finance Corporation",
                    "Ticked": false
                },
                {
                    "Name": "GGG",
                    "Maker": "Graco Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GHDX",
                    "Maker": "Genomic Health Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GHM",
                    "Maker": "Graham Corporation",
                    "Ticked": false
                },
                {
                    "Name": "GIG",
                    "Maker": "GigOptix, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GIFI",
                    "Maker": "Gulf Island Fabrication Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GIII",
                    "Maker": "G-III Apparel Group, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "GIGA",
                    "Maker": "Giga-tronics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GILD",
                    "Maker": "Gilead Sciences Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GIS",
                    "Maker": "General Mills, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GKNT",
                    "Maker": "Geeknet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GLBZ",
                    "Maker": "Glen Burnie Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "GLCH",
                    "Maker": "Gleacher & Company, Inc",
                    "Ticked": false
                },
                {
                    "Name": "GK",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "GLDC",
                    "Maker": "Golden Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GLOW",
                    "Maker": "Glowpoint, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GLP",
                    "Maker": "Global Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "GLPW",
                    "Maker": "Global Power Equipment Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GLRE",
                    "Maker": "Greenlight Capital Re, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "GLT",
                    "Maker": "PH Glatfelter Co.",
                    "Ticked": false
                },
                {
                    "Name": "GLF",
                    "Maker": "Gulfmark Offshore, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GLW",
                    "Maker": "Corning Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GLUU",
                    "Maker": "Glu Mobile, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GM",
                    "Maker": "General Motors Company",
                    "Ticked": false
                },
                {
                    "Name": "GMAN",
                    "Maker": "Gordmans Stores, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GMCR",
                    "Maker": "Keurig Green Mountain, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GME",
                    "Maker": "GameStop Corp.",
                    "Ticked": false
                },
                {
                    "Name": "GMED",
                    "Maker": "Globus Medical, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GMET",
                    "Maker": "Geomet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GMETP",
                    "Maker": "GeoMet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GMO",
                    "Maker": "General Moly, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GNBT",
                    "Maker": "Generex Biotechnology Corp.",
                    "Ticked": false
                },
                {
                    "Name": "GMT",
                    "Maker": "GATX Corp.",
                    "Ticked": false
                },
                {
                    "Name": "GNC",
                    "Maker": "GNC Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GNCMA",
                    "Maker": "General Communication Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GNE",
                    "Maker": "Genie Energy Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "GNI",
                    "Maker": "Great Northern Iron Ore Properties",
                    "Ticked": false
                },
                {
                    "Name": "GNRC",
                    "Maker": "Generac Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GNTX",
                    "Maker": "Gentex Corp.",
                    "Ticked": false
                },
                {
                    "Name": "GNVC",
                    "Maker": "GenVec, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GNW",
                    "Maker": "Genworth Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GOM",
                    "Maker": "Ally Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GOOD",
                    "Maker": "Gladstone Commercial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "GORO",
                    "Maker": "Gold Resource Corp",
                    "Ticked": false
                },
                {
                    "Name": "GOV",
                    "Maker": "Government Properties Income Trust",
                    "Ticked": false
                },
                {
                    "Name": "GPC",
                    "Maker": "Genuine Parts Company",
                    "Ticked": false
                },
                {
                    "Name": "GPI",
                    "Maker": "Group 1 Automotive Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GOOG",
                    "Maker": "Google Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GPIC",
                    "Maker": "Gaming Partners International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "GPN",
                    "Maker": "Global Payments Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GPOR",
                    "Maker": "Gulfport Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "GPRE",
                    "Maker": "Green Plains Renewable Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GPX",
                    "Maker": "GP Strategies Corp.",
                    "Ticked": false
                },
                {
                    "Name": "GRA",
                    "Maker": "W.R. Grace & Co.",
                    "Ticked": false
                },
                {
                    "Name": "GRC",
                    "Maker": "Gorman-Rupp Co.",
                    "Ticked": false
                },
                {
                    "Name": "GRPN",
                    "Maker": "Groupon, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GRIF",
                    "Maker": "Griffin Land & Nurseries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GSBC",
                    "Maker": "Great Southern Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GSE",
                    "Maker": "GSE Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GSIG",
                    "Maker": "GSI Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GSIT",
                    "Maker": "GSI Technology Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GSM",
                    "Maker": "Globe Specialty Metals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GTI",
                    "Maker": "GrafTech International Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "GTAT",
                    "Maker": "GT Advanced Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GTIV",
                    "Maker": "Gentiva Health Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GTLS",
                    "Maker": "Chart Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GTS",
                    "Maker": "Triple-S Management Corporation",
                    "Ticked": false
                },
                {
                    "Name": "GTN",
                    "Maker": "Gray Television Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GUID",
                    "Maker": "Guidance Software, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GVA",
                    "Maker": "Granite Construction Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "GWR",
                    "Maker": "Genesee & Wyoming Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GXP",
                    "Maker": "Great Plains Energy Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "GY",
                    "Maker": "GenCorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "GWRE",
                    "Maker": "Guidewire Software, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "H",
                    "Maker": "Hyatt Hotels Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HA",
                    "Maker": "Hawaiian Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HAE",
                    "Maker": "Haemonetics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HAFC",
                    "Maker": "Hanmi Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "GTXI",
                    "Maker": "GTX Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HAIN",
                    "Maker": "The Hain Celestial Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HALL",
                    "Maker": "Hallmark Financial Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HALO",
                    "Maker": "Halozyme Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HASI",
                    "Maker": "Hannon Armstrong Sustainable Infrastructure Capital, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HAWK",
                    "Maker": "Blackhawk Network Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HAYN",
                    "Maker": "Haynes International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HBCP",
                    "Maker": "Home Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HBHC",
                    "Maker": "Hancock Holding Company",
                    "Ticked": false
                },
                {
                    "Name": "HBI",
                    "Maker": "Hanesbrands Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HBIO",
                    "Maker": "Harvard Bioscience Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HBNC",
                    "Maker": "Horizon Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "HCA",
                    "Maker": "HCA Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HCCI",
                    "Maker": "Heritage-Crystal Clean, Inc",
                    "Ticked": false
                },
                {
                    "Name": "HCI",
                    "Maker": "HCI Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HCKT",
                    "Maker": "The Hackett Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HCOM",
                    "Maker": "Hawaiian Telcom Holdco, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HCSG",
                    "Maker": "Healthcare Services Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HDNG",
                    "Maker": "Hardinge Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HCC",
                    "Maker": "HCC Insurance Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HE",
                    "Maker": "Hawaiian Electric Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HEES",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "HEB",
                    "Maker": "Hemispherx Biopharma, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HEI",
                    "Maker": "HEICO Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HEOP",
                    "Maker": "Heritage Oaks Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "HFBC",
                    "Maker": "HopFed Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HF",
                    "Maker": "HFF, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HFC",
                    "Maker": "HollyFrontier Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HES",
                    "Maker": "Hess Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HFFC",
                    "Maker": "HF Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HFWA",
                    "Maker": "Heritage Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HGG",
                    "Maker": "hhgregg, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HGR",
                    "Maker": "Hanger, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HH",
                    "Maker": "Hooper Holmes Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HHC",
                    "Maker": "The Howard Hughes Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HHS",
                    "Maker": "Harte-Hanks Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HI",
                    "Maker": "Hillenbrand, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HIBB",
                    "Maker": "Hibbett Sports, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HIG",
                    "Maker": "The Hartford Financial Services Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HII",
                    "Maker": "Huntington Ingalls Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HIIQ",
                    "Maker": "Health Insurance Innovations, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HGSH",
                    "Maker": "China HGS Real Estate Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HILL",
                    "Maker": "Dot Hill Systems Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HITT",
                    "Maker": "Hittite Microwave Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HITK",
                    "Maker": "Hi-Tech Pharmacal Co., Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HIL",
                    "Maker": "Hill International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HIW",
                    "Maker": "Highwoods Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HK",
                    "Maker": "Halc",
                    "Ticked": false
                },
                {
                    "Name": "HL",
                    "Maker": "Hecla Mining Co.",
                    "Ticked": false
                },
                {
                    "Name": "HLIT",
                    "Maker": "Harmonic Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HLF",
                    "Maker": "Herbalife Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "HLS",
                    "Maker": "HEALTHSOUTH Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HLSS",
                    "Maker": "Home Loan Servicing Solutions, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "HME",
                    "Maker": "Home Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HMG",
                    "Maker": "HMG/Courtland Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HMN",
                    "Maker": "Horace Mann Educators Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HMNF",
                    "Maker": "HMN Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HMPR",
                    "Maker": "Hampton Roads Bankshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HMSY",
                    "Maker": "HMS Holdings Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HMTV",
                    "Maker": "Hemisphere Media Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HNH",
                    "Maker": "Handy & Harman Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "HNR",
                    "Maker": "Harvest Natural Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HNI",
                    "Maker": "HNI Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HNRG",
                    "Maker": "Hallador Energy Company",
                    "Ticked": false
                },
                {
                    "Name": "HNSN",
                    "Maker": "Hansen Medical, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HNT",
                    "Maker": "Health Net, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HOFT",
                    "Maker": "Hooker Furniture Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HOG",
                    "Maker": "Harley-Davidson, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HOLX",
                    "Maker": "Hologic Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HOMB",
                    "Maker": "Home Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HMST",
                    "Maker": "HomeStreet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HOLL",
                    "Maker": "Hollywood Media Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HOME",
                    "Maker": "Home Federal Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HON",
                    "Maker": "Honeywell International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HOS",
                    "Maker": "Hornbeck Offshore Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HOT",
                    "Maker": "Starwood Hotels & Resorts Worldwide Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HOTR",
                    "Maker": "Chanticleer Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HPAC",
                    "Maker": "Hyde Park Acquisition Corp. II",
                    "Ticked": false
                },
                {
                    "Name": "HPCCP",
                    "Maker": "Huntington Preferred Capital Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HOV",
                    "Maker": "Hovnanian Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HPOL",
                    "Maker": "Harris Interactive Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HPP",
                    "Maker": "Hudson Pacific Properties, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HPQ",
                    "Maker": "Hewlett-Packard Company",
                    "Ticked": false
                },
                {
                    "Name": "HPT",
                    "Maker": "Hospitality Properties Trust",
                    "Ticked": false
                },
                {
                    "Name": "HPTX",
                    "Maker": "Hyperion Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HPY",
                    "Maker": "Heartland Payment Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HRC",
                    "Maker": "Hill-Rom Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HRB",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "HRG",
                    "Maker": "Harbinger Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HR",
                    "Maker": "Healthcare Realty Trust Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "HRL",
                    "Maker": "Hormel Foods Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HRS",
                    "Maker": "Harris Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HRT",
                    "Maker": "Arrhythmia Research Technology Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HSC",
                    "Maker": "Harsco Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HSH",
                    "Maker": "The Hillshire Brands Company",
                    "Ticked": false
                },
                {
                    "Name": "HSIC",
                    "Maker": "Henry Schein, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HSII",
                    "Maker": "Heidrick & Struggles International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HSKA",
                    "Maker": "Heska Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HSON",
                    "Maker": "Hudson Global, Inc",
                    "Ticked": false
                },
                {
                    "Name": "HSNI",
                    "Maker": "HSN, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HSP",
                    "Maker": "Hospira Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HST",
                    "Maker": "Host Hotels & Resorts, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HSTM",
                    "Maker": "Healthstream Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HSY",
                    "Maker": "The Hershey Company",
                    "Ticked": false
                },
                {
                    "Name": "HT",
                    "Maker": "Hersha Hospitality Trust",
                    "Ticked": false
                },
                {
                    "Name": "HTA",
                    "Maker": "Healthcare Trust of America, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HTBI",
                    "Maker": "HomeTrust Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HTBK",
                    "Maker": "Heritage Commerce Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HTCH",
                    "Maker": "Hutchinson Technology Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HTCO",
                    "Maker": "Hickory Tech Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HTH",
                    "Maker": "Hilltop Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HTLD",
                    "Maker": "Heartland Express, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HTLF",
                    "Maker": "Heartland Financial USA, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HTM",
                    "Maker": "U.S. Geothermal Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HTS",
                    "Maker": "Hatteras Financial Corp",
                    "Ticked": false
                },
                {
                    "Name": "HTWR",
                    "Maker": "Heartware International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HTZ",
                    "Maker": "Hertz Global Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HUBB",
                    "Maker": "Hubbell Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HUBG",
                    "Maker": "Hub Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HUM",
                    "Maker": "Humana Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HUN",
                    "Maker": "Huntsman Corporation",
                    "Ticked": false
                },
                {
                    "Name": "HURC",
                    "Maker": "Hurco Companies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HURN",
                    "Maker": "Huron Consulting Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HUSA",
                    "Maker": "Houston American Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HVB",
                    "Maker": "Hudson Valley Holding Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HVT",
                    "Maker": "Haverty Furniture Companies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HW",
                    "Maker": "Headwaters Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "HWAY",
                    "Maker": "Healthways Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HWBK",
                    "Maker": "Hawthorn Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HWG",
                    "Maker": "The Hallwood Group Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "HWCC",
                    "Maker": "Houston Wire & Cable Company",
                    "Ticked": false
                },
                {
                    "Name": "HWKN",
                    "Maker": "Hawkins Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HXL",
                    "Maker": "Hexcel Corp.",
                    "Ticked": false
                },
                {
                    "Name": "HY",
                    "Maker": "Hyster-Yale Materials Handling, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HZNP",
                    "Maker": "Horizon Pharma, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "HZO",
                    "Maker": "Marinemax Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IACI",
                    "Maker": "IAC/InterActiveCorp",
                    "Ticked": false
                },
                {
                    "Name": "IART",
                    "Maker": "Integra LifeSciences Holdings Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IBCA",
                    "Maker": "Intervest Bancshares Corp.",
                    "Ticked": false
                },
                {
                    "Name": "IBCP",
                    "Maker": "Independent Bank Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IBIO",
                    "Maker": "iBio, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IBKC",
                    "Maker": "IberiaBank Corp.",
                    "Ticked": false
                },
                {
                    "Name": "IBKR",
                    "Maker": "Interactive Brokers Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IBM",
                    "Maker": "International Business Machines Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IBOC",
                    "Maker": "International Bancshares Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ICAD",
                    "Maker": "iCAD, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IBTX",
                    "Maker": "Independent Bank Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ICCC",
                    "Maker": "ImmuCell Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ICE",
                    "Maker": "IntercontinentalExchange Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ICFI",
                    "Maker": "ICF International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ICGE",
                    "Maker": "ICG Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ICH",
                    "Maker": "Investors Capital Holdings, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "ICON",
                    "Maker": "Iconix Brand Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ICUI",
                    "Maker": "ICU Medical, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ICPT",
                    "Maker": "Intercept Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IDA",
                    "Maker": "IdaCorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IDCC",
                    "Maker": "InterDigital, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IDIX",
                    "Maker": "Idenix Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IDN",
                    "Maker": "Intellicheck Mobilisa, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IDRA",
                    "Maker": "Idera Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IDSA",
                    "Maker": "Industrial Services of America, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IDSY",
                    "Maker": "ID Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IDT",
                    "Maker": "IDT Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IDTI",
                    "Maker": "Integrated Device Technology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IDXX",
                    "Maker": "IDEXX Laboratories, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IEC",
                    "Maker": "IEC Electronics Corp.",
                    "Ticked": false
                },
                {
                    "Name": "IEP",
                    "Maker": "Icahn Enterprises, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "IESC",
                    "Maker": "Integrated Electrical Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IEX",
                    "Maker": "IDEX Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IFMI",
                    "Maker": "Institutional Financial Markets, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IFNY",
                    "Maker": "Infinity Energy Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IFT",
                    "Maker": "Imperial Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IFF",
                    "Maker": "International Flavors & Fragrances Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IG",
                    "Maker": "IGI, Laboratories, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IFON",
                    "Maker": "Infosonics Corp.",
                    "Ticked": false
                },
                {
                    "Name": "IGC",
                    "Maker": "India Globalization Capital, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IGOI",
                    "Maker": "iGo, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IGTE",
                    "Maker": "iGATE Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IHC",
                    "Maker": "Independence Holding Co.",
                    "Ticked": false
                },
                {
                    "Name": "IHT",
                    "Maker": "Innsuites Hospitality Trust",
                    "Ticked": false
                },
                {
                    "Name": "III",
                    "Maker": "Information Services Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IILG",
                    "Maker": "Interval Leisure Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IIN",
                    "Maker": "Intricon Corp.",
                    "Ticked": false
                },
                {
                    "Name": "IIIN",
                    "Maker": "Insteel Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IKAN",
                    "Maker": "Ikanos Communications, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IKNX",
                    "Maker": "Ikonics Corp.",
                    "Ticked": false
                },
                {
                    "Name": "IIVI",
                    "Maker": "II-VI Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "IL",
                    "Maker": "IntraLinks Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ILMN",
                    "Maker": "Illumina Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IM",
                    "Maker": "Ingram Micro Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IMAX",
                    "Maker": "IMAX Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IMGN",
                    "Maker": "ImmunoGen, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IMH",
                    "Maker": "Impac Mortgage Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IMCB",
                    "Maker": "Intermountain Community Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "IMI",
                    "Maker": "Intermolecular, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IMKTA",
                    "Maker": "Ingles Markets, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "IMMR",
                    "Maker": "Immersion Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IMMU",
                    "Maker": "Immunomedics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IMMY",
                    "Maker": "Imprimis Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IMN",
                    "Maker": "Imation Corp.",
                    "Ticked": false
                },
                {
                    "Name": "INAP",
                    "Maker": "Internap Network Services Corp.",
                    "Ticked": false
                },
                {
                    "Name": "IMO",
                    "Maker": "Imperial Oil Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "INB",
                    "Maker": "Cohen & Steers Global Income Bu",
                    "Ticked": false
                },
                {
                    "Name": "INCY",
                    "Maker": "Incyte Corporation",
                    "Ticked": false
                },
                {
                    "Name": "INDB",
                    "Maker": "Independent Bank Corp.",
                    "Ticked": false
                },
                {
                    "Name": "INFA",
                    "Maker": "Informatica Corporation",
                    "Ticked": false
                },
                {
                    "Name": "INFI",
                    "Maker": "Infinity Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INFN",
                    "Maker": "Infinera Corporation",
                    "Ticked": false
                },
                {
                    "Name": "INFU",
                    "Maker": "InfuSystem Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INGR",
                    "Maker": "Ingredion Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "ININ",
                    "Maker": "Interactive Intelligence Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INN",
                    "Maker": "Summit Hotel Properties, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INO",
                    "Maker": "Inovio Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INOC",
                    "Maker": "Innotrac Corp.",
                    "Ticked": false
                },
                {
                    "Name": "INPH",
                    "Maker": "Interphase Corp.",
                    "Ticked": false
                },
                {
                    "Name": "INS",
                    "Maker": "Intelligent Systems Corporation",
                    "Ticked": false
                },
                {
                    "Name": "INSM",
                    "Maker": "Insmed Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "INSY",
                    "Maker": "INSYS Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INT",
                    "Maker": "World Fuel Services Corp.",
                    "Ticked": false
                },
                {
                    "Name": "INTC",
                    "Maker": "Intel Corporation",
                    "Ticked": false
                },
                {
                    "Name": "INTT",
                    "Maker": "inTEST Corp.",
                    "Ticked": false
                },
                {
                    "Name": "INTL",
                    "Maker": "INTL FCStone Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INTU",
                    "Maker": "Intuit Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INTX",
                    "Maker": "Intersections Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INTG",
                    "Maker": "The InterGroup Corporation",
                    "Ticked": false
                },
                {
                    "Name": "INTZ",
                    "Maker": "Intrusion Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INVE",
                    "Maker": "Identive Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INUV",
                    "Maker": "Inuvo, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INVN",
                    "Maker": "InvenSense, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "INWK",
                    "Maker": "InnerWorkings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IO",
                    "Maker": "ION Geophysical Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IOSP",
                    "Maker": "Innospec Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IOT",
                    "Maker": "Income Opportunity Realty Investors Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IP",
                    "Maker": "International Paper Company",
                    "Ticked": false
                },
                {
                    "Name": "IPG",
                    "Maker": "The Interpublic Group of Companies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IPGP",
                    "Maker": "IPG Photonics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IPHI",
                    "Maker": "Inphi Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IPI",
                    "Maker": "Intrepid Potash, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IR",
                    "Maker": "Ingersoll-Rand Plc",
                    "Ticked": false
                },
                {
                    "Name": "IRBT",
                    "Maker": "iRobot Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IPXL",
                    "Maker": "Impax Laboratories Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IRC",
                    "Maker": "Inland Real Estate Corp.",
                    "Ticked": false
                },
                {
                    "Name": "IRDM",
                    "Maker": "Iridium Communications Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IRET",
                    "Maker": "Investors Real Estate Trust",
                    "Ticked": false
                },
                {
                    "Name": "IRG",
                    "Maker": "Ignite Restaurant Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IRM",
                    "Maker": "Iron Mountain Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IRIX",
                    "Maker": "IRIDEX Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IROQ",
                    "Maker": "IF Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IRWD",
                    "Maker": "Ironwood Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISBC",
                    "Maker": "Investors Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISCA",
                    "Maker": "International Speedway Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ISH",
                    "Maker": "International Shipholding Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ISIG",
                    "Maker": "Insignia Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISIL",
                    "Maker": "Intersil Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ISIS",
                    "Maker": "Isis Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISLE",
                    "Maker": "Isle of Capri Casinos, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISNS",
                    "Maker": "Image Sensing Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISR",
                    "Maker": "IsoRay, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISRG",
                    "Maker": "Intuitive Surgical, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISRL",
                    "Maker": "Isramco Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISSC",
                    "Maker": "Innovative Solutions & Support Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ISSI",
                    "Maker": "Integrated Silicon Solution Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IT",
                    "Maker": "Gartner Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ITG",
                    "Maker": "Investment Technology Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ITI",
                    "Maker": "Iteris, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ITIC",
                    "Maker": "Investors Title Co.",
                    "Ticked": false
                },
                {
                    "Name": "ITMN",
                    "Maker": "InterMune, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ITRI",
                    "Maker": "Itron, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ITT",
                    "Maker": "ITT Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ITW",
                    "Maker": "Illinois Tool Works Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IVAC",
                    "Maker": "Intevac Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IVC",
                    "Maker": "Invacare Corporation",
                    "Ticked": false
                },
                {
                    "Name": "IVR",
                    "Maker": "Invesco Mortgage Capital Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IVZ",
                    "Maker": "Invesco Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "IXYS",
                    "Maker": "IXYS Corp.",
                    "Ticked": false
                },
                {
                    "Name": "JACK",
                    "Maker": "Jack in the Box Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JAH",
                    "Maker": "Jarden Corp.",
                    "Ticked": false
                },
                {
                    "Name": "JAKK",
                    "Maker": "JAKKS Pacific, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JBHT",
                    "Maker": "JB Hunt Transport Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JBL",
                    "Maker": "Jabil Circuit Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JBLU",
                    "Maker": "JetBlue Airways Corporation",
                    "Ticked": false
                },
                {
                    "Name": "JBSS",
                    "Maker": "John B Sanfilippo & Son Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JBT",
                    "Maker": "John Bean Technologies Corporation",
                    "Ticked": false
                },
                {
                    "Name": "JCI",
                    "Maker": "Johnson Controls Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JCP",
                    "Maker": "J. C. Penney Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JAXB",
                    "Maker": "Jacksonville Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JCS",
                    "Maker": "Communications Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JCTCF",
                    "Maker": "Jewett-Cameron Trading Company Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "JDSU",
                    "Maker": "JDS Uniphase Corporation",
                    "Ticked": false
                },
                {
                    "Name": "JEC",
                    "Maker": "Jacobs Engineering Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JFBC",
                    "Maker": "Jeffersonville Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "JFBI",
                    "Maker": "Jefferson Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JKHY",
                    "Maker": "Jack Henry & Associates Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JJSF",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "JMP",
                    "Maker": "JMP Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JNGW",
                    "Maker": "Jingwei International Limited",
                    "Ticked": false
                },
                {
                    "Name": "JNJ",
                    "Maker": "Johnson & Johnson",
                    "Ticked": false
                },
                {
                    "Name": "JNPR",
                    "Maker": "Juniper Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JNS",
                    "Maker": "Janus Capital Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JOB",
                    "Maker": "General Employment Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JOE",
                    "Maker": "The St. Joe Company",
                    "Ticked": false
                },
                {
                    "Name": "JOEZ",
                    "Maker": "Joe's Jeans Inc.",
                    "Ticked": false
                },
                {
                    "Name": "JOSB",
                    "Maker": "Jos. A Bank Clothiers Inc.",
                    "Ticked": false
                },
                {
                    "Name": "KFY",
                    "Maker": "Korn/Ferry International",
                    "Ticked": false
                },
                {
                    "Name": "KKD",
                    "Maker": "Krispy Kreme Doughnuts, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "KOP",
                    "Maker": "Koppers Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "KOS",
                    "Maker": "Kosmos Energy Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "KRO",
                    "Maker": "Kronos Worldwide, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "KTOS",
                    "Maker": "Kratos Defense & Security Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "KRA",
                    "Maker": "Kraton Performance Polymers Inc.",
                    "Ticked": false
                },
                {
                    "Name": "KVHI",
                    "Maker": "KVH Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "KWK",
                    "Maker": "Quicksilver Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "KWR",
                    "Maker": "Quaker Chemical Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LABL",
                    "Maker": "Multi-Color Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LAD",
                    "Maker": "Lithia Motors Inc.",
                    "Ticked": false
                },
                {
                    "Name": "KYTH",
                    "Maker": "Kythera Biopharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LAMR",
                    "Maker": "Lamar Advertising Co.",
                    "Ticked": false
                },
                {
                    "Name": "LANC",
                    "Maker": "Lancaster Colony Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LAYN",
                    "Maker": "Layne Christensen Company",
                    "Ticked": false
                },
                {
                    "Name": "LBAI",
                    "Maker": "Lakeland Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LBY",
                    "Maker": "Libbey Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LCI",
                    "Maker": "Lannett Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LCNB",
                    "Maker": "LCNB Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LCUT",
                    "Maker": "Lifetime Brands, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "IRF",
                    "Maker": "International Rectifier Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LDL",
                    "Maker": "Lydall Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LDR",
                    "Maker": "Landauer Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LEA",
                    "Maker": "Lear Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LEAP",
                    "Maker": "Leap Wireless International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LEDS",
                    "Maker": "SemiLEDs Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LECO",
                    "Maker": "Lincoln Electric Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LEE",
                    "Maker": "Lee Enterprises, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "LEG",
                    "Maker": "Leggett & Platt, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "LEI",
                    "Maker": "Lucas Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LF",
                    "Maker": "LeapFrog Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LFUS",
                    "Maker": "Littelfuse Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LEN",
                    "Maker": "Lennar Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LFVN",
                    "Maker": "Lifevantage Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LG",
                    "Maker": "The Laclede Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LGCY",
                    "Maker": "Legacy Reserves LP",
                    "Ticked": false
                },
                {
                    "Name": "LGF",
                    "Maker": "Lions Gate Entertainment Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LGL",
                    "Maker": "The LGL Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LGND",
                    "Maker": "Ligand Pharmaceuticals Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "LGP",
                    "Maker": "Lehigh Gas Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "LHCG",
                    "Maker": "LHC Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LH",
                    "Maker": "Laboratory Corp. of America Holdings",
                    "Ticked": false
                },
                {
                    "Name": "LHO",
                    "Maker": "LaSalle Hotel Properties",
                    "Ticked": false
                },
                {
                    "Name": "LIFE",
                    "Maker": "Life Technologies Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LII",
                    "Maker": "Lennox International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LIME",
                    "Maker": "Lime Energy Co.",
                    "Ticked": false
                },
                {
                    "Name": "LINC",
                    "Maker": "Lincoln Educational Services Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LINE",
                    "Maker": "Linn Energy, LLC",
                    "Ticked": false
                },
                {
                    "Name": "LINTA",
                    "Maker": "Liberty Interactive Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LION",
                    "Maker": "Fidelity Southern Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LIOX",
                    "Maker": "Lionbridge Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LIVE",
                    "Maker": "LiveDeal, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LIWA",
                    "Maker": "Lihua International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LKFN",
                    "Maker": "Lakeland Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LKQ",
                    "Maker": "LKQ Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LL",
                    "Maker": "Lumber Liquidators Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LLEN",
                    "Maker": "L & L Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LLL",
                    "Maker": "L-3 Communications Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LLNW",
                    "Maker": "Limelight Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LLTC",
                    "Maker": "Linear Technology Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LLY",
                    "Maker": "Eli Lilly and Company",
                    "Ticked": false
                },
                {
                    "Name": "LMAT",
                    "Maker": "LeMaitre Vascular, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LMIA",
                    "Maker": "LMI Aerospace Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LMCA",
                    "Maker": "Liberty Media Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LMNR",
                    "Maker": "Limoneira Company",
                    "Ticked": false
                },
                {
                    "Name": "LMNX",
                    "Maker": "Luminex Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LMOS",
                    "Maker": "Lumos Networks Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LMT",
                    "Maker": "Lockheed Martin Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LNBB",
                    "Maker": "LNB Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LNC",
                    "Maker": "Lincoln National Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LNCE",
                    "Maker": "Snyder's-Lance, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LNCO",
                    "Maker": "Linn Co, LLC",
                    "Ticked": false
                },
                {
                    "Name": "LNDC",
                    "Maker": "Landec Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LNKD",
                    "Maker": "LinkedIn Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LNN",
                    "Maker": "Lindsay Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LNT",
                    "Maker": "Alliant Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LO",
                    "Maker": "Lorillard, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LOCK",
                    "Maker": "LifeLock, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LOAN",
                    "Maker": "Manhattan Bridge Capital, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LOCM",
                    "Maker": "Local Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LODE",
                    "Maker": "Comstock Mining, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LOGM",
                    "Maker": "LogMeIn, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LOJN",
                    "Maker": "LoJack Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LOGC",
                    "Maker": "LOGIC Devices Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "LOOK",
                    "Maker": "LookSmart, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "LOGI",
                    "Maker": "Logitech International SA",
                    "Ticked": false
                },
                {
                    "Name": "LORL",
                    "Maker": "Loral Space & Communications, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LOPE",
                    "Maker": "Grand Canyon Education, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LOV",
                    "Maker": "Spark Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LOW",
                    "Maker": "Lowe's Companies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LPHI",
                    "Maker": "Life Partners Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LPI",
                    "Maker": "Laredo Petroleum, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LPLA",
                    "Maker": "LPL Financial Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LPNT",
                    "Maker": "Lifepoint Hospitals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LPSN",
                    "Maker": "LivePerson Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LPTN",
                    "Maker": "Lpath Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LPX",
                    "Maker": "Louisiana-Pacific Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LQDT",
                    "Maker": "Liquidity Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LRAD",
                    "Maker": "LRAD Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LRCX",
                    "Maker": "Lam Research Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LRN",
                    "Maker": "K12, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LRY",
                    "Maker": "Liberty Property Trust",
                    "Ticked": false
                },
                {
                    "Name": "LSBI",
                    "Maker": "LSB Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LSBK",
                    "Maker": "Lake Shore Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LSCC",
                    "Maker": "Lattice Semiconductor Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LSI",
                    "Maker": "LSI Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LSTR",
                    "Maker": "Landstar System Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LTBR",
                    "Maker": "Lightbridge Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LTC",
                    "Maker": "LTC Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LTM",
                    "Maker": "Life Time Fitness Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LTRE",
                    "Maker": "Learning Tree International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LTRX",
                    "Maker": "Lantronix, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LTS",
                    "Maker": "Ladenburg Thalmann Financial Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LTXC",
                    "Maker": "LTX-Credence Corporation",
                    "Ticked": false
                },
                {
                    "Name": "LUB",
                    "Maker": "Luby's, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LULU",
                    "Maker": "Lululemon Athletica Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LUNA",
                    "Maker": "Luna Innovations Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "LUV",
                    "Maker": "Southwest Airlines Co.",
                    "Ticked": false
                },
                {
                    "Name": "LVS",
                    "Maker": "Las Vegas Sands Corp.",
                    "Ticked": false
                },
                {
                    "Name": "LWAY",
                    "Maker": "Lifeway Foods Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LXK",
                    "Maker": "Lexmark International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LXP",
                    "Maker": "Lexington Realty Trust",
                    "Ticked": false
                },
                {
                    "Name": "LXRX",
                    "Maker": "Lexicon Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LYB",
                    "Maker": "LyondellBasell Industries NV",
                    "Ticked": false
                },
                {
                    "Name": "LYTS",
                    "Maker": "LSI Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LYV",
                    "Maker": "Live Nation Entertainment, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "LZB",
                    "Maker": "La-Z-Boy Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "M",
                    "Maker": "Macy's, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MA",
                    "Maker": "MasterCard Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "MAA",
                    "Maker": "Mid-America Apartment Communities Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MAC",
                    "Maker": "The Macerich Company",
                    "Ticked": false
                },
                {
                    "Name": "MACE",
                    "Maker": "Mace Security International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MACK",
                    "Maker": "Merrimack Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MAG",
                    "Maker": "Magnetek Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MAKO",
                    "Maker": "MAKO Surgical Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MAMS",
                    "Maker": "MAM Software Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MAN",
                    "Maker": "ManpowerGroup Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MANH",
                    "Maker": "Manhattan Associates, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MAR",
                    "Maker": "Marriott International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MARK",
                    "Maker": "Remark Media, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MAS",
                    "Maker": "Masco Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MASC",
                    "Maker": "Material Sciences Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MASI",
                    "Maker": "Masimo Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MAT",
                    "Maker": "Mattel, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MATW",
                    "Maker": "Matthews International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MAXY",
                    "Maker": "Maxygen, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MAYS",
                    "Maker": "JW Mays Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MBFI",
                    "Maker": "MB Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MBLX",
                    "Maker": "Metabolix, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MBND",
                    "Maker": "Multiband Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MBRG",
                    "Maker": "Middleburg Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MBTF",
                    "Maker": "MBT Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MBWM",
                    "Maker": "Mercantile Bank Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MCBC",
                    "Maker": "Macatawa Bank Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MCBF",
                    "Maker": "Monarch Community Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MCBI",
                    "Maker": "Metrocorp Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MCBK",
                    "Maker": "Madison County Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MCD",
                    "Maker": "McDonald's Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MCF",
                    "Maker": "Contango Oil & Gas Company",
                    "Ticked": false
                },
                {
                    "Name": "MCHP",
                    "Maker": "Microchip Technology Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MCHX",
                    "Maker": "Marchex, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MCK",
                    "Maker": "McKesson Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MCO",
                    "Maker": "Moody's Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MCRI",
                    "Maker": "Monarch Casino & Resort Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MCRS",
                    "Maker": "MICROS Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MCS",
                    "Maker": "The Marcus Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MCP",
                    "Maker": "Molycorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MCY",
                    "Maker": "Mercury General Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MD",
                    "Maker": "MEDNAX, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MCZ",
                    "Maker": "Mad Catz Interactive Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MDC",
                    "Maker": "MDC Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MDCI",
                    "Maker": "Medical Action Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MDCO",
                    "Maker": "The Medicines Company",
                    "Ticked": false
                },
                {
                    "Name": "MDLZ",
                    "Maker": "Mondelez International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MDP",
                    "Maker": "Meredith Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MDSO",
                    "Maker": "Medidata Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MDT",
                    "Maker": "Medtronic, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MDU",
                    "Maker": "MDU Resources Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MDW",
                    "Maker": "Midway Gold Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MDVN",
                    "Maker": "Medivation, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MDXG",
                    "Maker": "MiMedx Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MEAD",
                    "Maker": "Meade Instruments Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MEAS",
                    "Maker": "Measurement Specialties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MED",
                    "Maker": "Medifast Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MEET",
                    "Maker": "MeetMe, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MEIP",
                    "Maker": "MEI Pharma, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MELA",
                    "Maker": "MELA Sciences, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MELI",
                    "Maker": "Mercadolibre, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MEI",
                    "Maker": "Methode Electronics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MEMP",
                    "Maker": "Memorial Production Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "MEMS",
                    "Maker": "MEMSIC, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MENT",
                    "Maker": "Mentor Graphics Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MERR",
                    "Maker": "Merriman Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MET",
                    "Maker": "MetLife, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MFA",
                    "Maker": "MFA Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "METR",
                    "Maker": "Metro Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MFCO",
                    "Maker": "Microwave Filter Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MFI",
                    "Maker": "MicroFinancial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MFLR",
                    "Maker": "Mayflower Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MFLX",
                    "Maker": "Multi-Fineline Electronix, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MFNC",
                    "Maker": "Mackinac Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MFRI",
                    "Maker": "MFRI, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MFRM",
                    "Maker": "Mattress Firm Holding Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MFSF",
                    "Maker": "Mutualfirst Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MG",
                    "Maker": "Mistras Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MGAM",
                    "Maker": "Multimedia Games Holding Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MGCD",
                    "Maker": "MGC Diagnostics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MGLN",
                    "Maker": "Magellan Health Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MGM",
                    "Maker": "MGM Resorts International",
                    "Ticked": false
                },
                {
                    "Name": "MGPI",
                    "Maker": "MGP Ingredients Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MGT",
                    "Maker": "MGT Capital Investments, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MGYR",
                    "Maker": "Magyar Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MHFI",
                    "Maker": "McGraw Hill Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MHGC",
                    "Maker": "Morgans Hotel Group Co.",
                    "Ticked": false
                },
                {
                    "Name": "MHO",
                    "Maker": "M/I Homes, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MGN",
                    "Maker": "Mines Management, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MHH",
                    "Maker": "Mastech Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MIDD",
                    "Maker": "Middleby Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MIG",
                    "Maker": "Meadowbrook Insurance Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MILL",
                    "Maker": "Miller Energy Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MIND",
                    "Maker": "Mitcham Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MINI",
                    "Maker": "Mobile Mini, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MHK",
                    "Maker": "Mohawk Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MITK",
                    "Maker": "Mitek Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MITL",
                    "Maker": "Mitel Networks Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MJN",
                    "Maker": "Mead Johnson Nutrition Company",
                    "Ticked": false
                },
                {
                    "Name": "MKC",
                    "Maker": "McCormick & Company, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "MKL",
                    "Maker": "Markel Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MKSI",
                    "Maker": "MKS Instruments, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MKTG",
                    "Maker": "Responsys, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MKTO",
                    "Maker": "Marketo, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MKTX",
                    "Maker": "MarketAxess Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MKTY",
                    "Maker": "Mechanical Technology, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "MLAB",
                    "Maker": "Mesa Laboratories Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MLM",
                    "Maker": "Martin Marietta Materials Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MLHR",
                    "Maker": "Herman Miller Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MLP",
                    "Maker": "Maui Land & Pineapple Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MLNK",
                    "Maker": "ModusLink Global Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MLNX",
                    "Maker": "Mellanox Technologies, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "MMC",
                    "Maker": "Marsh & McLennan Companies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MMP",
                    "Maker": "Magellan Midstream Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "MMM",
                    "Maker": "3M Company",
                    "Ticked": false
                },
                {
                    "Name": "MMS",
                    "Maker": "MAXIMUS, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MMSI",
                    "Maker": "Merit Medical Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MNDL",
                    "Maker": "Mandalay Digital Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MNGA",
                    "Maker": "Magnegas Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MN",
                    "Maker": "Manning & Napier, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MNKD",
                    "Maker": "MannKind Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MNOV",
                    "Maker": "MediciNova Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MNR",
                    "Maker": "Monmouth Real Estate Investment Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MNRK",
                    "Maker": "Monarch Financial Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MNRO",
                    "Maker": "Monro Muffler Brake Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MNST",
                    "Maker": "Monster Beverage Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MNTA",
                    "Maker": "Momenta Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MNTG",
                    "Maker": "MTR Gaming Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MNTX",
                    "Maker": "Manitex International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MO",
                    "Maker": "Altria Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MOC",
                    "Maker": "Command Security Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MOCO",
                    "Maker": "MOCON Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MOD",
                    "Maker": "Modine Manufacturing Company",
                    "Ticked": false
                },
                {
                    "Name": "MODN",
                    "Maker": "Model N, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MOFG",
                    "Maker": "MidWest One Financial Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MOGA",
                    "Maker": "Moog Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MOH",
                    "Maker": "Molina Healthcare, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MOLX",
                    "Maker": "Molex Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "MOLXA",
                    "Maker": "Molex Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "MON",
                    "Maker": "Monsanto Company",
                    "Ticked": false
                },
                {
                    "Name": "MORN",
                    "Maker": "Morningstar Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MOS",
                    "Maker": "The Mosaic Company",
                    "Ticked": false
                },
                {
                    "Name": "MOSY",
                    "Maker": "MoSys, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MOV",
                    "Maker": "Movado Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MOVE",
                    "Maker": "Move, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MPAA",
                    "Maker": "Motorcar Parts of America Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MPAC",
                    "Maker": "MOD-PAC Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MPB",
                    "Maker": "Mid Penn Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MPET",
                    "Maker": "Magellan Petroleum Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MPC",
                    "Maker": "Marathon Petroleum Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MPO",
                    "Maker": "Midstates Petroleum Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MPW",
                    "Maker": "Medical Properties Trust Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MPWR",
                    "Maker": "Monolithic Power Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MPX",
                    "Maker": "Marine Products Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MRC",
                    "Maker": "MRC Global Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MRCY",
                    "Maker": "Mercury Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MRGE",
                    "Maker": "Merge Healthcare Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "MRH",
                    "Maker": "Montpelier Re Holdings Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "MRIN",
                    "Maker": "Marin Software Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "MRLN",
                    "Maker": "Marlin Business Services Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MRTN",
                    "Maker": "Marten Transport Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "MRK",
                    "Maker": "Merck & Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MSCC",
                    "Maker": "Microsemi Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MRVL",
                    "Maker": "Marvell Technology Group Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "MSCI",
                    "Maker": "MSCI Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MSEX",
                    "Maker": "Middlesex Water Co.",
                    "Ticked": false
                },
                {
                    "Name": "MSFG",
                    "Maker": "Mainsource Financial Group",
                    "Ticked": false
                },
                {
                    "Name": "MSFT",
                    "Maker": "Microsoft Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MSG",
                    "Maker": "The Madison Square Garden Company",
                    "Ticked": false
                },
                {
                    "Name": "MSL",
                    "Maker": "Midsouth Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MSM",
                    "Maker": "MSC Industrial Direct Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MSO",
                    "Maker": "Martha Stewart Living Omnimedia Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MSTR",
                    "Maker": "MicroStrategy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MTD",
                    "Maker": "Mettler-Toledo International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MTDR",
                    "Maker": "Matador Resources Company",
                    "Ticked": false
                },
                {
                    "Name": "MTG",
                    "Maker": "MGIC Investment Corp.",
                    "Ticked": false
                },
                {
                    "Name": "MTH",
                    "Maker": "Meritage Homes Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MTN",
                    "Maker": "Vail Resorts Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MTOR",
                    "Maker": "Meritor, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MTRN",
                    "Maker": "Materion Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MTRX",
                    "Maker": "Matrix Service Company",
                    "Ticked": false
                },
                {
                    "Name": "MTSC",
                    "Maker": "MTS Systems Corporation",
                    "Ticked": false
                },
                {
                    "Name": "MTSI",
                    "Maker": "M/A-Com Technology Solutions Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MTW",
                    "Maker": "The Manitowoc Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MTX",
                    "Maker": "Minerals Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MTZ",
                    "Maker": "MasTec, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MW",
                    "Maker": "The Men's Wearhouse, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MWA",
                    "Maker": "Mueller Water Products, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MWIV",
                    "Maker": "MWI Veterinary Supply, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MWW",
                    "Maker": "Monster Worldwide, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MXL",
                    "Maker": "MaxLinear, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MXIM",
                    "Maker": "Maxim Integrated Products, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MXWL",
                    "Maker": "Maxwell Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MYE",
                    "Maker": "Myers Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MYGN",
                    "Maker": "Myriad Genetics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "MYRG",
                    "Maker": "MYR Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "N",
                    "Maker": "NetSuite Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NANO",
                    "Maker": "Nanometrics Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "NASB",
                    "Maker": "NASB Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NATI",
                    "Maker": "National Instruments Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NATL",
                    "Maker": "National Interstate Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NATH",
                    "Maker": "Nathan's Famous Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NATR",
                    "Maker": "Nature's Sunshine Products Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NAV",
                    "Maker": "Navistar International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NAVB",
                    "Maker": "Navidea Biopharmaceuticals, Inc",
                    "Ticked": false
                },
                {
                    "Name": "NAVG",
                    "Maker": "Navigators Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NBBC",
                    "Maker": "NewBridge Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "NBIX",
                    "Maker": "Neurocrine Biosciences Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NBTB",
                    "Maker": "NBT Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NC",
                    "Maker": "Nacco Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NBTF",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "NCBC",
                    "Maker": "New Century Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NCI",
                    "Maker": "Navigant Consulting Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NBCB",
                    "Maker": "First NBC Bank Holding Company",
                    "Ticked": false
                },
                {
                    "Name": "NCIT",
                    "Maker": "NCI, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NCLH",
                    "Maker": "Norwegian Cruise Line Holdings Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "NCMI",
                    "Maker": "National CineMedia, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NCQ",
                    "Maker": "NovaCopper Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NCR",
                    "Maker": "NCR Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NCT",
                    "Maker": "Newcastle Investment Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NCS",
                    "Maker": "NCI Building Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NDAQ",
                    "Maker": "The Nasdaq OMX Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NDSN",
                    "Maker": "Nordson Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NE",
                    "Maker": "Noble Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NECB",
                    "Maker": "Northeast Community Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NEE",
                    "Maker": "NextEra Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NEM",
                    "Maker": "Newmont Mining Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NEN",
                    "Maker": "New England Realty Associates LP",
                    "Ticked": false
                },
                {
                    "Name": "NEO",
                    "Maker": "Neogenomics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NEOG",
                    "Maker": "Neogen Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NEON",
                    "Maker": "Neonode, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NES",
                    "Maker": "Nuverra Environmental Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NEU",
                    "Maker": "NewMarket Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NEWN",
                    "Maker": "New Energy Systems Group",
                    "Ticked": false
                },
                {
                    "Name": "NEWP",
                    "Maker": "Newport Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NEWS",
                    "Maker": "NewStar Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NEWT",
                    "Maker": "Newtek Business Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NFEC",
                    "Maker": "NF Energy Saving Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NFG",
                    "Maker": "National Fuel Gas Company",
                    "Ticked": false
                },
                {
                    "Name": "NFLX",
                    "Maker": "Netflix, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NFSB",
                    "Maker": "Newport Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NFX",
                    "Maker": "Newfield Exploration Co.",
                    "Ticked": false
                },
                {
                    "Name": "NGL",
                    "Maker": "NGL Energy Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "NGLS",
                    "Maker": "Targa Resources Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "NGS",
                    "Maker": "Natural Gas Services Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NGSX",
                    "Maker": "NeurogesX, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NHC",
                    "Maker": "National Healthcare Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NGVC",
                    "Maker": "Natural Grocers by Vitamin Cottage, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NHTB",
                    "Maker": "New Hampshire Thrift Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NHI",
                    "Maker": "National Health Investors Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NICK",
                    "Maker": "Nicholas Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NIHD",
                    "Maker": "NII Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NI",
                    "Maker": "NiSource Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NILE",
                    "Maker": "Blue Nile Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NJR",
                    "Maker": "New Jersey Resources Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NKA",
                    "Maker": "Niska Gas Storage Partners LLC",
                    "Ticked": false
                },
                {
                    "Name": "NKE",
                    "Maker": "Nike, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NKSH",
                    "Maker": "National Bankshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NKTR",
                    "Maker": "Nektar Therapeutics",
                    "Ticked": false
                },
                {
                    "Name": "NL",
                    "Maker": "NL Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NLP",
                    "Maker": "NTS Realty Holdings LP",
                    "Ticked": false
                },
                {
                    "Name": "NLS",
                    "Maker": "Nautilus Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NLNK",
                    "Maker": "NewLink Genetics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NLSN",
                    "Maker": "Nielsen Holdings N.V.",
                    "Ticked": false
                },
                {
                    "Name": "NLST",
                    "Maker": "Netlist Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NLY",
                    "Maker": "Annaly Capital Management, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NMRX",
                    "Maker": "Numerex Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NNBR",
                    "Maker": "NN Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NNI",
                    "Maker": "Nelnet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NNN",
                    "Maker": "National Retail Properties, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NOBH",
                    "Maker": "Nobility Homes Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NOR",
                    "Maker": "Noranda Aluminum Holding Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NOC",
                    "Maker": "Northrop Grumman Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NOV",
                    "Maker": "National Oilwell Varco, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NOVB",
                    "Maker": "North Valley Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "NOW",
                    "Maker": "ServiceNow, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NP",
                    "Maker": "Neenah Paper, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NPBC",
                    "Maker": "National Penn Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NPK",
                    "Maker": "National Presto Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NPO",
                    "Maker": "EnPro Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NPSP",
                    "Maker": "NPS Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NPTN",
                    "Maker": "NeoPhotonics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NR",
                    "Maker": "Newpark Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NRF",
                    "Maker": "NorthStar Realty Finance Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NRG",
                    "Maker": "NRG Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NRIM",
                    "Maker": "Northrim Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NRP",
                    "Maker": "Natural Resource Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "NRTLQ",
                    "Maker": "Nortel Networks Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NS",
                    "Maker": "NuStar Energy L.P.",
                    "Ticked": false
                },
                {
                    "Name": "NSC",
                    "Maker": "Norfolk Southern Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NSEC",
                    "Maker": "National Security Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NSH",
                    "Maker": "NuStar GP Holdings, LLC",
                    "Ticked": false
                },
                {
                    "Name": "NSFC",
                    "Maker": "Northern States Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NSIT",
                    "Maker": "Insight Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NSLP",
                    "Maker": "New Source Energy Partners L.P.",
                    "Ticked": false
                },
                {
                    "Name": "NSM",
                    "Maker": "Nationstar Mortgage Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NSP",
                    "Maker": "Insperity, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NSPH",
                    "Maker": "Nanosphere, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NSR",
                    "Maker": "NeuStar, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NSSC",
                    "Maker": "Napco Security Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NSYS",
                    "Maker": "Nortech Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NTAP",
                    "Maker": "NetApp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NTCT",
                    "Maker": "NetScout Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NTGR",
                    "Maker": "Netgear Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NTI",
                    "Maker": "Northern Tier Energy LP",
                    "Ticked": false
                },
                {
                    "Name": "NTIC",
                    "Maker": "Northern Technologies International Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NTN",
                    "Maker": "NTN Buzztime Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NTRS",
                    "Maker": "Northern Trust Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NTS",
                    "Maker": "NTS, Inc",
                    "Ticked": false
                },
                {
                    "Name": "NTSC",
                    "Maker": "National Technical Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NTWK",
                    "Maker": "NetSol Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NU",
                    "Maker": "Northeast Utilities",
                    "Ticked": false
                },
                {
                    "Name": "NUE",
                    "Maker": "Nucor Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NURO",
                    "Maker": "NeuroMetrix Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NUS",
                    "Maker": "Nu Skin Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NUTR",
                    "Maker": "Nutraceutical International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NVDA",
                    "Maker": "NVIDIA Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NVE",
                    "Maker": "NVE Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NVEC",
                    "Maker": "NVE Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NVR",
                    "Maker": "NVR, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NWBI",
                    "Maker": "Northwest Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NWBO",
                    "Maker": "Northwest Biotherapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NWE",
                    "Maker": "Northwestern Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NWFL",
                    "Maker": "Norwood Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "NWLI",
                    "Maker": "National Western Life Insurance Company",
                    "Ticked": false
                },
                {
                    "Name": "NWPX",
                    "Maker": "Northwest Pipe Co.",
                    "Ticked": false
                },
                {
                    "Name": "NWY",
                    "Maker": "New York & Company Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NX",
                    "Maker": "Quanex Building Products Corporation",
                    "Ticked": false
                },
                {
                    "Name": "NXST",
                    "Maker": "Nexstar Broadcasting Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NYCB",
                    "Maker": "New York Community Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NYMT",
                    "Maker": "New York Mortgage Trust Inc.",
                    "Ticked": false
                },
                {
                    "Name": "NYNY",
                    "Maker": "Empire Resorts Inc.",
                    "Ticked": false
                },
                {
                    "Name": "O",
                    "Maker": "Realty Income Corporation",
                    "Ticked": false
                },
                {
                    "Name": "OABC",
                    "Maker": "Omniamerican Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OAK",
                    "Maker": "Oaktree Capital Group, LLC",
                    "Ticked": false
                },
                {
                    "Name": "OAS",
                    "Maker": "Oasis Petroleum Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OB",
                    "Maker": "OneBeacon Insurance Group, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "OBAF",
                    "Maker": "OBA Financial Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OBCI",
                    "Maker": "Ocean Bio-Chem Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OC",
                    "Maker": "Owens Corning",
                    "Ticked": false
                },
                {
                    "Name": "OCC",
                    "Maker": "Optical Cable Corp.",
                    "Ticked": false
                },
                {
                    "Name": "OCFC",
                    "Maker": "OceanFirst Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "OCLR",
                    "Maker": "Oclaro, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OCLS",
                    "Maker": "Oculus Innovative Sciences, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OCR",
                    "Maker": "Omnicare Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OCZ",
                    "Maker": "OCZ Technology Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ODFL",
                    "Maker": "Old Dominion Freight Line Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ODP",
                    "Maker": "Office Depot, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OESX",
                    "Maker": "Orion Energy Systems, Inc",
                    "Ticked": false
                },
                {
                    "Name": "OFED",
                    "Maker": "Oconee Federal Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "OFG",
                    "Maker": "OFG Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "OFIX",
                    "Maker": "Orthofix International N.V.",
                    "Ticked": false
                },
                {
                    "Name": "OFLX",
                    "Maker": "OmegaFlex, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ODC",
                    "Maker": "Oil-Dri Corp. of America",
                    "Ticked": false
                },
                {
                    "Name": "ORB",
                    "Maker": "Orbital Sciences Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ORBC",
                    "Maker": "ORBCOMM, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ORBT",
                    "Maker": "Orbit International Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ORCL",
                    "Maker": "Oracle Corporation",
                    "Ticked": false
                },
                {
                    "Name": "OREX",
                    "Maker": "Orexigen Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ORI",
                    "Maker": "Old Republic International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ORLY",
                    "Maker": "O'Reilly Automotive Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ORN",
                    "Maker": "Orion Marine Group, Inc",
                    "Ticked": false
                },
                {
                    "Name": "ORRF",
                    "Maker": "Orrstown Financial Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ORMP",
                    "Maker": "Oramed Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OSBC",
                    "Maker": "Old Second Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OSIS",
                    "Maker": "OSI Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OSIR",
                    "Maker": "Osiris Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OSK",
                    "Maker": "Oshkosh Corporation",
                    "Ticked": false
                },
                {
                    "Name": "OSTK",
                    "Maker": "Overstock.com Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OSUR",
                    "Maker": "OraSure Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OTEX",
                    "Maker": "Open Text Corporation",
                    "Ticked": false
                },
                {
                    "Name": "OTTR",
                    "Maker": "Otter Tail Corporation",
                    "Ticked": false
                },
                {
                    "Name": "OVAS",
                    "Maker": "OvaScience, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OVBC",
                    "Maker": "Ohio Valley Banc Corp.",
                    "Ticked": false
                },
                {
                    "Name": "OVLY",
                    "Maker": "Oak Valley Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "OVRL",
                    "Maker": "Overland Storage Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OVTI",
                    "Maker": "OmniVision Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OWW",
                    "Maker": "Orbitz Worldwide, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OXBT",
                    "Maker": "Oxygen Biotherapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OXGN",
                    "Maker": "OXiGENE, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OXF",
                    "Maker": "Oxford Resource Partners, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "OXM",
                    "Maker": "Oxford Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "OXY",
                    "Maker": "Occidental Petroleum Corporation",
                    "Ticked": false
                },
                {
                    "Name": "OZM",
                    "Maker": "Och-Ziff Capital Management Group LLC",
                    "Ticked": false
                },
                {
                    "Name": "PAA",
                    "Maker": "Plains All American Pipeline, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "PACB",
                    "Maker": "Pacific Biosciences of California, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PACW",
                    "Maker": "PacWest Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "PAG",
                    "Maker": "Penske Automotive Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PAMT",
                    "Maker": "Parametric Sound Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PANW",
                    "Maker": "Palo Alto Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PAR",
                    "Maker": "PAR Technology Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PARS",
                    "Maker": "Pharmos Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PATH",
                    "Maker": "NuPathe, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PATR",
                    "Maker": "Patriot Transportation Holding, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PATK",
                    "Maker": "Patrick Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PAY",
                    "Maker": "VeriFone Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PAYX",
                    "Maker": "Paychex, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PB",
                    "Maker": "Prosperity Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBCT",
                    "Maker": "People's United Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBF",
                    "Maker": "PBF Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBH",
                    "Maker": "Prestige Brands Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBHC",
                    "Maker": "Pathfinder Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBIB",
                    "Maker": "Porter Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBI",
                    "Maker": "Pitney Bowes Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBIO",
                    "Maker": "Pressure BioSciences, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBIP",
                    "Maker": "Prudential Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBSK",
                    "Maker": "Poage Bankshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PBY",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "PBYI",
                    "Maker": "Puma Biotechnology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PCAR",
                    "Maker": "PACCAR Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PCBK",
                    "Maker": "Pacific Continental Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PCBS",
                    "Maker": "Provident Community Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PCCC",
                    "Maker": "PC Connection, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PCG",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "PCL",
                    "Maker": "Plum Creek Timber Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PCLN",
                    "Maker": "The Priceline Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PCMI",
                    "Maker": "PCM, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PCP",
                    "Maker": "Precision Castparts Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PCTI",
                    "Maker": "PCTEL, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PCYG",
                    "Maker": "Park City Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PCYO",
                    "Maker": "Pure Cycle Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PDCE",
                    "Maker": "PDC Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PDCO",
                    "Maker": "Patterson Companies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PDEX",
                    "Maker": "Pro-Dex Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PDFS",
                    "Maker": "PDF Solutions Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PDLI",
                    "Maker": "PDL BioPharma, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PDII",
                    "Maker": "PDI, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PDO",
                    "Maker": "Pyramid Oil Company",
                    "Ticked": false
                },
                {
                    "Name": "PDH",
                    "Maker": "PetroLogistics LP",
                    "Ticked": false
                },
                {
                    "Name": "PEBK",
                    "Maker": "Peoples Bancorp of North Carolina, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PEBO",
                    "Maker": "Peoples Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PEB",
                    "Maker": "Pebblebrook Hotel Trust",
                    "Ticked": false
                },
                {
                    "Name": "PEDH",
                    "Maker": "Peoples Educational Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PEG",
                    "Maker": "Public Service Enterprise Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PEGA",
                    "Maker": "Pegasystems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PEI",
                    "Maker": "Pennsylvania Real Estate Investment Trust",
                    "Ticked": false
                },
                {
                    "Name": "PEIX",
                    "Maker": "Pacific Ethanol, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PENN",
                    "Maker": "Penn National Gaming Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PENX",
                    "Maker": "Penford Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PEP",
                    "Maker": "Pepsico, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PERF",
                    "Maker": "Perfumania Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PERY",
                    "Maker": "Perry Ellis International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PES",
                    "Maker": "Pioneer Energy Services Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PESI",
                    "Maker": "Perma-Fix Environmental Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PETM",
                    "Maker": "PetSmart, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PETS",
                    "Maker": "PetMed Express, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PEOP",
                    "Maker": "Peoples Federal Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PF",
                    "Maker": "Pinnacle Foods Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PFBI",
                    "Maker": "Premier Financial Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PFBX",
                    "Maker": "Peoples Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PFE",
                    "Maker": "Pfizer Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PFG",
                    "Maker": "Principal Financial Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PFIN",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "PFIS",
                    "Maker": "Peoples Financial Services Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PFMT",
                    "Maker": "Performant Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PFPT",
                    "Maker": "Proofpoint, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PFS",
                    "Maker": "Provident Financial Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PFSI",
                    "Maker": "PennyMac Financial Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PFSW",
                    "Maker": "PFSweb Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PG",
                    "Maker": "The Procter & Gamble Company",
                    "Ticked": false
                },
                {
                    "Name": "PGC",
                    "Maker": "Peapack-Gladstone Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PGEM",
                    "Maker": "Ply Gem Holdings, Inc",
                    "Ticked": false
                },
                {
                    "Name": "PGI",
                    "Maker": "Premiere Global Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PGNX",
                    "Maker": "Progenics Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PGTI",
                    "Maker": "PGT, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PHH",
                    "Maker": "PHH Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PHIIK",
                    "Maker": "PHI Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PHMD",
                    "Maker": "PhotoMedex, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PHX",
                    "Maker": "Panhandle Oil and Gas Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PICO",
                    "Maker": "PICO Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PIKE",
                    "Maker": "Pike Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PII",
                    "Maker": "Polaris Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PIR",
                    "Maker": "Pier 1 Imports, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PJC",
                    "Maker": "Piper Jaffray Companies",
                    "Ticked": false
                },
                {
                    "Name": "PKD",
                    "Maker": "Parker Drilling Co.",
                    "Ticked": false
                },
                {
                    "Name": "PKE",
                    "Maker": "Park Electrochemical Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PKG",
                    "Maker": "Packaging Corporation of America",
                    "Ticked": false
                },
                {
                    "Name": "PKOH",
                    "Maker": "Park-Ohio Holdings Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PKT",
                    "Maker": "Procera Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PL",
                    "Maker": "Protective Life Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PLAB",
                    "Maker": "Photronics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PLCE",
                    "Maker": "The Children",
                    "Ticked": false
                },
                {
                    "Name": "PLCM",
                    "Maker": "Polycom, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PLMT",
                    "Maker": "Palmetto Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PLPC",
                    "Maker": "Preformed Line Products Company",
                    "Ticked": false
                },
                {
                    "Name": "PLOW",
                    "Maker": "Douglas Dynamics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PLXS",
                    "Maker": "Plexus Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PLT",
                    "Maker": "Plantronics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PLUS",
                    "Maker": "ePlus inc.",
                    "Ticked": false
                },
                {
                    "Name": "PLXT",
                    "Maker": "PLX Technology Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PMC",
                    "Maker": "PharMerica Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PMCS",
                    "Maker": "PMC-Sierra Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PNBC",
                    "Maker": "Princeton National Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PMFG",
                    "Maker": "PMFG, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PNBK",
                    "Maker": "Patriot National Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PNC",
                    "Maker": "The PNC Financial Services Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PNFP",
                    "Maker": "Pinnacle Financial Partners Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PNK",
                    "Maker": "Pinnacle Entertainment Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PNM",
                    "Maker": "PNM Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PNRA",
                    "Maker": "Panera Bread Company",
                    "Ticked": false
                },
                {
                    "Name": "PNRG",
                    "Maker": "PrimeEnergy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PNW",
                    "Maker": "Pinnacle West Capital Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PNX",
                    "Maker": "The Phoenix Companies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PNY",
                    "Maker": "Piedmont Natural Gas Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PODD",
                    "Maker": "Insulet Corporation",
                    "Ticked": false
                },
                {
                    "Name": "POL",
                    "Maker": "PolyOne Corporation",
                    "Ticked": false
                },
                {
                    "Name": "POM",
                    "Maker": "Pepco Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "POOL",
                    "Maker": "Pool Corp.",
                    "Ticked": false
                },
                {
                    "Name": "POPE",
                    "Maker": "Pope Resources, A Delaware Limited Partnership",
                    "Ticked": false
                },
                {
                    "Name": "POST",
                    "Maker": "Post Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "POR",
                    "Maker": "Portland General Electric Company",
                    "Ticked": false
                },
                {
                    "Name": "POWI",
                    "Maker": "Power Integrations Inc.",
                    "Ticked": false
                },
                {
                    "Name": "POWL",
                    "Maker": "Powell Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "POWR",
                    "Maker": "PowerSecure International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "POZN",
                    "Maker": "POZEN Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PPBI",
                    "Maker": "Pacific Premier Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PPC",
                    "Maker": "Pilgrim's Pride Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PPG",
                    "Maker": "PPG Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PPHM",
                    "Maker": "Peregrine Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PPL",
                    "Maker": "PPL Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PPO",
                    "Maker": "Polypore International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PPS",
                    "Maker": "Post Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PQ",
                    "Maker": "PetroQuest Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRA",
                    "Maker": "ProAssurance Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PRAA",
                    "Maker": "Portfolio Recovery Associates Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRCP",
                    "Maker": "Perceptron, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRE",
                    "Maker": "PartnerRe Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "PRFT",
                    "Maker": "Perficient Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRGO",
                    "Maker": "Perrigo Company Public Limited Company",
                    "Ticked": false
                },
                {
                    "Name": "PRGS",
                    "Maker": "Progress Software Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PRGX",
                    "Maker": "PRGX Global, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRI",
                    "Maker": "Primerica, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRIM",
                    "Maker": "Primoris Services Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PRK",
                    "Maker": "Park National Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PRKR",
                    "Maker": "Parkervision Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRLS",
                    "Maker": "Peerless Systems Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PRMW",
                    "Maker": "Primo Water Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PRO",
                    "Maker": "PROS Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PROV",
                    "Maker": "Provident Financial Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRPH",
                    "Maker": "ProPhase Labs, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRSC",
                    "Maker": "Providence Service Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PRLB",
                    "Maker": "Proto Labs, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRTA",
                    "Maker": "Prothena Corporation plc",
                    "Ticked": false
                },
                {
                    "Name": "PRTS",
                    "Maker": "U.S. Auto Parts Network, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRU",
                    "Maker": "Prudential Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRXI",
                    "Maker": "Premier Exhibitions Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRSS",
                    "Maker": "CafePress Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PSA",
                    "Maker": "Public Storage",
                    "Ticked": false
                },
                {
                    "Name": "PSB",
                    "Maker": "PS Business Parks Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PSBH",
                    "Maker": "PSB Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PSDV",
                    "Maker": "pSivida Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PSEM",
                    "Maker": "Pericom Semiconductor Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PSIX",
                    "Maker": "Power Solutions International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PSMI",
                    "Maker": "Peregrine Semiconductor Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PSMT",
                    "Maker": "PriceSmart Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PRXL",
                    "Maker": "PAREXEL International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PSTB",
                    "Maker": "Park Sterling Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PSTI",
                    "Maker": "Pluristem Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PSTR",
                    "Maker": "PostRock Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PSUN",
                    "Maker": "Pacific Sunwear of California Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PSX",
                    "Maker": "Phillips 66",
                    "Ticked": false
                },
                {
                    "Name": "PTEK",
                    "Maker": "PokerTek, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PTGI",
                    "Maker": "PTGi Holding, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PTIE",
                    "Maker": "Pain Therapeutics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PTEN",
                    "Maker": "Patterson-UTI Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PTIX",
                    "Maker": "Performance Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PTLA",
                    "Maker": "Portola Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PTNT",
                    "Maker": "Internet Patents Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PTP",
                    "Maker": "Platinum Underwriters Holdings Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "PTRY",
                    "Maker": "The Pantry, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PTSI",
                    "Maker": "P.A.M. Transportation Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PULB",
                    "Maker": "Pulaski Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PULS",
                    "Maker": "Pulse Electronics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PTX",
                    "Maker": "Pernix Therapeutics Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PVA",
                    "Maker": "Penn Virginia Corporation",
                    "Ticked": false
                },
                {
                    "Name": "PVFC",
                    "Maker": "PVF Capital Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PVH",
                    "Maker": "PVH Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PW",
                    "Maker": "Power REIT",
                    "Ticked": false
                },
                {
                    "Name": "PWOD",
                    "Maker": "Penns Woods Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PX",
                    "Maker": "Praxair Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PVTB",
                    "Maker": "PrivateBancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PXLW",
                    "Maker": "Pixelworks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "PXD",
                    "Maker": "Pioneer Natural Resources Co.",
                    "Ticked": false
                },
                {
                    "Name": "PWX",
                    "Maker": "Providence and Worcester Railroad Company",
                    "Ticked": false
                },
                {
                    "Name": "PZG",
                    "Maker": "Paramount Gold and Silver Corp.",
                    "Ticked": false
                },
                {
                    "Name": "PZZI",
                    "Maker": "Pizza Inn Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "Q",
                    "Maker": "Quintiles Transnational Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QADA",
                    "Maker": "QAD Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QADB",
                    "Maker": "QAD Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QCCO",
                    "Maker": "QC Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QBAK",
                    "Maker": "Qualstar Corp.",
                    "Ticked": false
                },
                {
                    "Name": "QCOM",
                    "Maker": "QUALCOMM Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "QCOR",
                    "Maker": "Questcor Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QDEL",
                    "Maker": "Quidel Corp.",
                    "Ticked": false
                },
                {
                    "Name": "QCRH",
                    "Maker": "QCR Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QKLS",
                    "Maker": "QKL Stores Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QLGC",
                    "Maker": "QLogic Corp.",
                    "Ticked": false
                },
                {
                    "Name": "QLIK",
                    "Maker": "Qlik Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QLTI",
                    "Maker": "QLT Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QLTY",
                    "Maker": "Quality Distribution Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QLYS",
                    "Maker": "Qualys, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QNST",
                    "Maker": "QuinStreet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QRE",
                    "Maker": "QR Energy, LP",
                    "Ticked": false
                },
                {
                    "Name": "QSII",
                    "Maker": "Quality Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QTM",
                    "Maker": "Quantum Corporation",
                    "Ticked": false
                },
                {
                    "Name": "QTWW",
                    "Maker": "Quantum Fuel Systems Technologies Worldwide Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QUAD",
                    "Maker": "Quad/Graphics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "QUIK",
                    "Maker": "QuickLogic Corporation",
                    "Ticked": false
                },
                {
                    "Name": "R",
                    "Maker": "Ryder System, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RAD",
                    "Maker": "Rite Aid Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RAI",
                    "Maker": "Reynolds American Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RALY",
                    "Maker": "Rally Software Development Corp.",
                    "Ticked": false
                },
                {
                    "Name": "RAS",
                    "Maker": "RAIT Financial Trust",
                    "Ticked": false
                },
                {
                    "Name": "RATE",
                    "Maker": "Bankrate, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RAVN",
                    "Maker": "Raven Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RAX",
                    "Maker": "Rackspace Hosting, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RBCAA",
                    "Maker": "Republic Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RBCN",
                    "Maker": "Rubicon Technology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RBPAA",
                    "Maker": "Royal Bancshares of Pennsylvania Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RCII",
                    "Maker": "Rent-A-Center, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RCKB",
                    "Maker": "Rockville Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RCKY",
                    "Maker": "Rocky Brands, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RCL",
                    "Maker": "Royal Caribbean Cruises Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "RCON",
                    "Maker": "Recon Technology, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "RCPT",
                    "Maker": "Receptos, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RDC",
                    "Maker": "Rowan Companies plc",
                    "Ticked": false
                },
                {
                    "Name": "RDI",
                    "Maker": "Reading International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RDEN",
                    "Maker": "Elizabeth Arden, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RDIB",
                    "Maker": "Reading International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RDNT",
                    "Maker": "RadNet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RE",
                    "Maker": "Everest Re Group Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "RECN",
                    "Maker": "Resources Connection Inc.",
                    "Ticked": false
                },
                {
                    "Name": "REED",
                    "Maker": "REEDS, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "REFR",
                    "Maker": "Research Frontiers Inc.",
                    "Ticked": false
                },
                {
                    "Name": "REG",
                    "Maker": "Regency Centers Corporation",
                    "Ticked": false
                },
                {
                    "Name": "REGN",
                    "Maker": "Regeneron Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "REIS",
                    "Maker": "Reis, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RELL",
                    "Maker": "Richardson Electronics Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "RELV",
                    "Maker": "Reliv International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "REMY",
                    "Maker": "Remy International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "REN",
                    "Maker": "Resolute Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RENT",
                    "Maker": "Rentrak Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RES",
                    "Maker": "RPC Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RESI",
                    "Maker": "Altisource Residential Corporation",
                    "Ticked": false
                },
                {
                    "Name": "REX",
                    "Maker": "REX American Resources Corporation",
                    "Ticked": false
                },
                {
                    "Name": "REXI",
                    "Maker": "Resource America, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "REXX",
                    "Maker": "Rex Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RF",
                    "Maker": "Regions Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RFIL",
                    "Maker": "RF Industries, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "RFMD",
                    "Maker": "RF Micro Devices Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RFP",
                    "Maker": "Resolute Forest Products Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RGA",
                    "Maker": "Reinsurance Group of America Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RGC",
                    "Maker": "Regal Entertainment Group",
                    "Ticked": false
                },
                {
                    "Name": "RGCO",
                    "Maker": "RGC Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RGDX",
                    "Maker": "Response Genetics, Inc",
                    "Ticked": false
                },
                {
                    "Name": "RGEN",
                    "Maker": "Repligen Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RGLS",
                    "Maker": "Regulus Therapeutics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RGLD",
                    "Maker": "Royal Gold, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RGP",
                    "Maker": "Regency Energy Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "RGR",
                    "Maker": "Sturm, Ruger & Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RGS",
                    "Maker": "Regis Corp.",
                    "Ticked": false
                },
                {
                    "Name": "RH",
                    "Maker": "Restoration Hardware Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RHI",
                    "Maker": "Robert Half International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RHT",
                    "Maker": "Red Hat, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RICK",
                    "Maker": "Rick's Cabaret International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RIGL",
                    "Maker": "Rigel Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RIMG",
                    "Maker": "Rimage Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RIVR",
                    "Maker": "River Valley Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "RJF",
                    "Maker": "Raymond James Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RKT",
                    "Maker": "Rock-Tenn Company",
                    "Ticked": false
                },
                {
                    "Name": "RKUS",
                    "Maker": "Ruckus Wireless, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RL",
                    "Maker": "Ralph Lauren Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RLD",
                    "Maker": "RealD Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RLGT",
                    "Maker": "Radiant Logistics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RLGY",
                    "Maker": "Realogy Holdings Corp.",
                    "Ticked": false
                },
                {
                    "Name": "RLH",
                    "Maker": "Red Lion Hotels Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RLI",
                    "Maker": "RLI Corp.",
                    "Ticked": false
                },
                {
                    "Name": "RLJE",
                    "Maker": "RLJ Entertainment, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RLOG",
                    "Maker": "Rand Logistics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RM",
                    "Maker": "Regional Management Corp.",
                    "Ticked": false
                },
                {
                    "Name": "RMBS",
                    "Maker": "Rambus Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RMCF",
                    "Maker": "Rocky Mountain Chocolate Factory Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RMD",
                    "Maker": "ResMed Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RMKR",
                    "Maker": "Rainmaker Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RNDY",
                    "Maker": "Roundy's, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RNF",
                    "Maker": "Rentech Nitrogen Partners, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "RNIN",
                    "Maker": "Wireless Ronin Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RNN",
                    "Maker": "Rexahn Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RNO",
                    "Maker": "Rhino Resource Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "RNR",
                    "Maker": "RenaissanceRe Holdings Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "RNST",
                    "Maker": "Renasant Corp.",
                    "Ticked": false
                },
                {
                    "Name": "RNWK",
                    "Maker": "RealNetworks Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROC",
                    "Maker": "Rockwood Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROCM",
                    "Maker": "Rochester Medical Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ROG",
                    "Maker": "Rogers Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ROIA",
                    "Maker": "Radio One Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROIAK",
                    "Maker": "Radio One Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROIC",
                    "Maker": "Retail Opportunity Investments Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ROK",
                    "Maker": "Rockwell Automation Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROL",
                    "Maker": "Rollins Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROLL",
                    "Maker": "RBC Bearings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROMA",
                    "Maker": "Roma Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ROP",
                    "Maker": "Roper Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROSE",
                    "Maker": "Rosetta Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROST",
                    "Maker": "Ross Stores Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ROVI",
                    "Maker": "Rovi Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ROX",
                    "Maker": "Castle Brands Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RP",
                    "Maker": "RealPage, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RPAI",
                    "Maker": "Retail Properties of America, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RPM",
                    "Maker": "RPM International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RPRX",
                    "Maker": "Repros Therapeutics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RPT",
                    "Maker": "Ramco-Gershenson Properties Trust",
                    "Ticked": false
                },
                {
                    "Name": "RPTP",
                    "Maker": "Raptor Pharmaceuticals Corp.",
                    "Ticked": false
                },
                {
                    "Name": "RPXC",
                    "Maker": "RPX Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RRD",
                    "Maker": "R.R. Donnelley & Sons Company",
                    "Ticked": false
                },
                {
                    "Name": "RRC",
                    "Maker": "Range Resources Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RRGB",
                    "Maker": "Red Robin Gourmet Burgers Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RRTS",
                    "Maker": "Roadrunner Transportation Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RSE",
                    "Maker": "Rouse Properties, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RSG",
                    "Maker": "Republic Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RSH",
                    "Maker": "RadioShack Corp.",
                    "Ticked": false
                },
                {
                    "Name": "RSOL",
                    "Maker": "Real Goods Solar, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RSYS",
                    "Maker": "RadiSys Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RTI",
                    "Maker": "RTI International Metals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RTIX",
                    "Maker": "RTI Surgical Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RTK",
                    "Maker": "Rentech, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RTN",
                    "Maker": "Raytheon Co.",
                    "Ticked": false
                },
                {
                    "Name": "RUE",
                    "Maker": "rue21, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RUSHA",
                    "Maker": "Rush Enterprises, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RUSHB",
                    "Maker": "Rush Enterprises, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RVLT",
                    "Maker": "Revolution Lighting Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RVP",
                    "Maker": "Retractable Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RVM",
                    "Maker": "Revett Mining Company, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RVSB",
                    "Maker": "Riverview Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RVBD",
                    "Maker": "Riverbed Technology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RXN",
                    "Maker": "Rexnord Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RYL",
                    "Maker": "Ryland Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "RYN",
                    "Maker": "Rayonier Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SAAS",
                    "Maker": "inContact, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SAH",
                    "Maker": "Sonic Automotive Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SAFM",
                    "Maker": "Sanderson Farms, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SAL",
                    "Maker": "Salisbury Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SAM",
                    "Maker": "Boston Beer Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SANM",
                    "Maker": "Sanmina Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SANW",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "RJET",
                    "Maker": "Republic Airways Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SAPE",
                    "Maker": "Sapient Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SASR",
                    "Maker": "Sandy Spring Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SALM",
                    "Maker": "Salem Communications Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SATS",
                    "Maker": "EchoStar Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SAVE",
                    "Maker": "Spirit Airlines, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SBAC",
                    "Maker": "SBA Communications Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SBCF",
                    "Maker": "Seacoast Banking Corp. of Florida",
                    "Ticked": false
                },
                {
                    "Name": "SBGI",
                    "Maker": "Sinclair Broadcast Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SBH",
                    "Maker": "Sally Beauty Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SBSA",
                    "Maker": "Spanish Broadcasting System Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SBSI",
                    "Maker": "Southside Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SBUX",
                    "Maker": "Starbucks Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SCCO",
                    "Maker": "Southern Copper Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SCEI",
                    "Maker": "Sino Clean Energy Inc",
                    "Ticked": false
                },
                {
                    "Name": "SCG",
                    "Maker": "SCANA Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SCHL",
                    "Maker": "Scholastic Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SCHW",
                    "Maker": "The Charles Schwab Corporation",
                    "Ticked": false
                },
                {
                    "Name": "RSTI",
                    "Maker": "Rofin-Sinar Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCI",
                    "Maker": "Service Corporation International",
                    "Ticked": false
                },
                {
                    "Name": "SCHN",
                    "Maker": "Schnitzer Steel Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCIL",
                    "Maker": "Scientific Learning Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SCKT",
                    "Maker": "Socket Mobile, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCL",
                    "Maker": "Stepan Company",
                    "Ticked": false
                },
                {
                    "Name": "SCLN",
                    "Maker": "SciClone Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCMR",
                    "Maker": "Sycamore Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCON",
                    "Maker": "Superconductor Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCOR",
                    "Maker": "comScore, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCS",
                    "Maker": "Steelcase Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCSC",
                    "Maker": "ScanSource, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCSS",
                    "Maker": "Select Comfort Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SCTY",
                    "Maker": "SolarCity Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SCU",
                    "Maker": "Scana Corporation SCANA CORPORA",
                    "Ticked": false
                },
                {
                    "Name": "SCX",
                    "Maker": "The L.S. Starrett Company",
                    "Ticked": false
                },
                {
                    "Name": "SD",
                    "Maker": "SandRidge Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SCVL",
                    "Maker": "Shoe Carnival Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SE",
                    "Maker": "Spectra Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SEAC",
                    "Maker": "SeaChange International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SBBX",
                    "Maker": "Sussex Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "SEB",
                    "Maker": "Seaboard Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SEAS",
                    "Maker": "SeaWorld Entertainment, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SEE",
                    "Maker": "Sealed Air Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SEIC",
                    "Maker": "SEI Investments Co.",
                    "Ticked": false
                },
                {
                    "Name": "SEM",
                    "Maker": "Select Medical Holdings Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SEMG",
                    "Maker": "SemGroup Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SENEA",
                    "Maker": "Seneca Foods Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SENEB",
                    "Maker": "Seneca Foods Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SEV",
                    "Maker": "Sevcon, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SF",
                    "Maker": "Stifel Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SFE",
                    "Maker": "Safeguard Scientifics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SFG",
                    "Maker": "StanCorp Financial Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SFLY",
                    "Maker": "Shutterfly, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SFNC",
                    "Maker": "Simmons First National Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SGA",
                    "Maker": "Saga Communications Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SGB",
                    "Maker": "Southwest Georgia Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SGC",
                    "Maker": "Superior Uniform Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SGI",
                    "Maker": "Silicon Graphics International Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SGEN",
                    "Maker": "Seattle Genetics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SGMA",
                    "Maker": "SigmaTron International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SGMO",
                    "Maker": "Sangamo Biosciences Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SGNT",
                    "Maker": "Sagent Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SGMS",
                    "Maker": "Scientific Games Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SGY",
                    "Maker": "Stone Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SGYP",
                    "Maker": "Synergy Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SHLD",
                    "Maker": "Sears Holdings Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SHEN",
                    "Maker": "Shenandoah Telecommunications Co.",
                    "Ticked": false
                },
                {
                    "Name": "SHLM",
                    "Maker": "A. Schulman, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SHLO",
                    "Maker": "Shiloh Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SHOO",
                    "Maker": "Steven Madden, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "SHOR",
                    "Maker": "ShoreTel, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SIG",
                    "Maker": "Signet Jewelers Limited",
                    "Ticked": false
                },
                {
                    "Name": "SHOS",
                    "Maker": "Sears Hometown and Outlet Stores, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SIGA",
                    "Maker": "SIGA Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SIGM",
                    "Maker": "Sigma Designs, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SIMG",
                    "Maker": "Silicon Image, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SIRO",
                    "Maker": "Sirona Dental Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SIVB",
                    "Maker": "SVB Financial Group",
                    "Ticked": false
                },
                {
                    "Name": "SIX",
                    "Maker": "Six Flags Entertainment Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SJI",
                    "Maker": "South Jersey Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SJW",
                    "Maker": "SJW Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SKH",
                    "Maker": "Skilled Healthcare Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SKT",
                    "Maker": "Tanger Factory Outlet Centers Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SKUL",
                    "Maker": "Skullcandy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SKX",
                    "Maker": "Skechers USA Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SKY",
                    "Maker": "Skyline Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SKYW",
                    "Maker": "SkyWest Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SLAB",
                    "Maker": "Silicon Laboratories Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SLB",
                    "Maker": "Schlumberger Limited",
                    "Ticked": false
                },
                {
                    "Name": "SLCA",
                    "Maker": "U.S. Silica Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SLG",
                    "Maker": "SL Green Realty Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SLGN",
                    "Maker": "Silgan Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SLH",
                    "Maker": "Solera Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SLI",
                    "Maker": "SL Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SLM",
                    "Maker": "SLM Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SLMAP",
                    "Maker": "SLM Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SLP",
                    "Maker": "Simulations Plus, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SLTC",
                    "Maker": "Selectica, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SLTM",
                    "Maker": "Solta Medical, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SLXP",
                    "Maker": "Salix Pharmaceuticals Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "SM",
                    "Maker": "SM Energy Company",
                    "Ticked": false
                },
                {
                    "Name": "SMA",
                    "Maker": "Symmetry Medical, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SMED",
                    "Maker": "Sharps Compliance Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SMCI",
                    "Maker": "Super Micro Computer, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SMG",
                    "Maker": "The Scotts Miracle-Gro Company",
                    "Ticked": false
                },
                {
                    "Name": "SMIT",
                    "Maker": "Schmitt Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SMLP",
                    "Maker": "Summit Midstream Partners, LP",
                    "Ticked": false
                },
                {
                    "Name": "SMMF",
                    "Maker": "Summit Financial Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SMP",
                    "Maker": "Standard Motor Products Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SMPL",
                    "Maker": "Simplicity Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SMRT",
                    "Maker": "Stein Mart Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SMSI",
                    "Maker": "Smith Micro Software Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SMTC",
                    "Maker": "Semtech Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SMTX",
                    "Maker": "SMTC Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SN",
                    "Maker": "Sanchez Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SNA",
                    "Maker": "Snap-on Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SNAK",
                    "Maker": "Inventure Foods, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SNBC",
                    "Maker": "Sun Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SNCR",
                    "Maker": "Synchronoss Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SNDK",
                    "Maker": "SanDisk Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SNFCA",
                    "Maker": "Security National Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SNH",
                    "Maker": "Senior Housing Properties Trust",
                    "Ticked": false
                },
                {
                    "Name": "SNI",
                    "Maker": "Scripps Networks Interactive, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SNMX",
                    "Maker": "Senomyx Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SNPS",
                    "Maker": "Synopsys Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SNTA",
                    "Maker": "Synta Pharmaceuticals Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SNTS",
                    "Maker": "Santarus, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SNSS",
                    "Maker": "Sunesis Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SNV",
                    "Maker": "Synovus Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SNX",
                    "Maker": "SYNNEX Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SO",
                    "Maker": "Southern Company",
                    "Ticked": false
                },
                {
                    "Name": "SOCB",
                    "Maker": "Southcoast Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SOFO",
                    "Maker": "Sonic Foundry, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SOHU",
                    "Maker": "Sohu.com Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SON",
                    "Maker": "Sonoco Products Co.",
                    "Ticked": false
                },
                {
                    "Name": "SONA",
                    "Maker": "Southern National Bancorp of Virginia Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SONC",
                    "Maker": "Sonic Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SONS",
                    "Maker": "Sonus Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SONT",
                    "Maker": "Seen On Screen TV, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SORL",
                    "Maker": "SORL Auto Parts, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPA",
                    "Maker": "Sparton Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SPAN",
                    "Maker": "Span-America Medical Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPAR",
                    "Maker": "Spartan Motors Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPB",
                    "Maker": "Spectrum Brands Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPBC",
                    "Maker": "SP Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPCHA",
                    "Maker": "Sport Chalet Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPCHB",
                    "Maker": "Sport Chalet Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPEX",
                    "Maker": "Spherix Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "SPF",
                    "Maker": "Standard Pacific Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SPG",
                    "Maker": "Simon Property Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPH",
                    "Maker": "Suburban Propane Partners, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "SPLK",
                    "Maker": "Splunk, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPIR",
                    "Maker": "Spire Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SPLP",
                    "Maker": "Steel Partners Holdings L.P",
                    "Ticked": false
                },
                {
                    "Name": "SPLS",
                    "Maker": "Staples, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPN",
                    "Maker": "Superior Energy Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPNC",
                    "Maker": "The Spectranetics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SPPI",
                    "Maker": "Spectrum Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPR",
                    "Maker": "Spirit AeroSystems Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPRO",
                    "Maker": "SmartPros Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "SPRT",
                    "Maker": "Support.com, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPSC",
                    "Maker": "SPS Commerce, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPU",
                    "Maker": "SkyPeople Fruit Juice, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPTN",
                    "Maker": "Spartan Stores Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SPW",
                    "Maker": "SPX Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SPWR",
                    "Maker": "SunPower Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SQI",
                    "Maker": "SciQuest, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SQNM",
                    "Maker": "Sequenom Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SR",
                    "Maker": "The Standard Register Company",
                    "Ticked": false
                },
                {
                    "Name": "SRCE",
                    "Maker": "1st Source Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SRDX",
                    "Maker": "SurModics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SRCL",
                    "Maker": "Stericycle, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SREV",
                    "Maker": "ServiceSource International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SRE",
                    "Maker": "Sempra Energy",
                    "Ticked": false
                },
                {
                    "Name": "SRI",
                    "Maker": "Stoneridge Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SRPT",
                    "Maker": "Sarepta Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SRT",
                    "Maker": "StarTek, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SSD",
                    "Maker": "Simpson Manufacturing Co., Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SSI",
                    "Maker": "Stage Stores Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SSFN",
                    "Maker": "Stewardship Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SSN",
                    "Maker": "Samson Oil & Gas Limited",
                    "Ticked": false
                },
                {
                    "Name": "SSNC",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "SSNI",
                    "Maker": "Silver Spring Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SSP",
                    "Maker": "The E. W. Scripps Company",
                    "Ticked": false
                },
                {
                    "Name": "SSS",
                    "Maker": "Sovran Self Storage Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SSTK",
                    "Maker": "Shutterstock, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SSY",
                    "Maker": "SunLink Health Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ST",
                    "Maker": "Sensata Technologies Holding NV",
                    "Ticked": false
                },
                {
                    "Name": "STAA",
                    "Maker": "STAAR Surgical Company",
                    "Ticked": false
                },
                {
                    "Name": "STAG",
                    "Maker": "STAG Industrial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STBA",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "STBZ",
                    "Maker": "State Bank Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "STC",
                    "Maker": "Stewart Information Services Corporation",
                    "Ticked": false
                },
                {
                    "Name": "STE",
                    "Maker": "Steris Corp.",
                    "Ticked": false
                },
                {
                    "Name": "STEC",
                    "Maker": "STEC, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STEI",
                    "Maker": "Stewart Enterprises Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STEL",
                    "Maker": "StellarOne Corporation",
                    "Ticked": false
                },
                {
                    "Name": "STEM",
                    "Maker": "StemCells Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STFC",
                    "Maker": "State Auto Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "STI",
                    "Maker": "SunTrust Banks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STJ",
                    "Maker": "St. Jude Medical Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STL",
                    "Maker": "Sterling Bancorp.",
                    "Ticked": false
                },
                {
                    "Name": "SNHY",
                    "Maker": "Sun Hydraulics Corp.",
                    "Ticked": false
                },
                {
                    "Name": "STLD",
                    "Maker": "Steel Dynamics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STLY",
                    "Maker": "Stanley Furniture Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STML",
                    "Maker": "Stemline Therapeutics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STND",
                    "Maker": "Standard Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "STMP",
                    "Maker": "Stamps.com Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STNR",
                    "Maker": "Steiner Leisure Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "STR",
                    "Maker": "Questar Corporation",
                    "Ticked": false
                },
                {
                    "Name": "STON",
                    "Maker": "Stonemor Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "STRA",
                    "Maker": "Strayer Education Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STRI",
                    "Maker": "STR Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STRL",
                    "Maker": "Sterling Construction Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STRM",
                    "Maker": "Streamline Health Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STRN",
                    "Maker": "Sutron Corporation",
                    "Ticked": false
                },
                {
                    "Name": "STRS",
                    "Maker": "Stratus Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STRT",
                    "Maker": "STRATTEC Security Corporation",
                    "Ticked": false
                },
                {
                    "Name": "STRZA",
                    "Maker": "Starz",
                    "Ticked": false
                },
                {
                    "Name": "STSA",
                    "Maker": "Sterling Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "STS",
                    "Maker": "Supreme Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STRZB",
                    "Maker": "Starz",
                    "Ticked": false
                },
                {
                    "Name": "STSI",
                    "Maker": "Star Scientific, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STX",
                    "Maker": "Seagate Technology Public Limited Company",
                    "Ticked": false
                },
                {
                    "Name": "STXS",
                    "Maker": "Stereotaxis Inc.",
                    "Ticked": false
                },
                {
                    "Name": "STZ",
                    "Maker": "Constellation Brands Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SUBK",
                    "Maker": "Suffolk Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "SUI",
                    "Maker": "Sun Communities Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SUMR",
                    "Maker": "Summer Infant, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SUNE",
                    "Maker": "SunEdison, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SUP",
                    "Maker": "Superior Industries International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SUPX",
                    "Maker": "Supertex Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SURG",
                    "Maker": "Synergetics USA, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SUPN",
                    "Maker": "Supernus Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SUSP",
                    "Maker": "Susser Petroleum Partners LP",
                    "Ticked": false
                },
                {
                    "Name": "SUSQ",
                    "Maker": "Susquehanna Bancshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SUTR",
                    "Maker": "Sutor Technology Group Limited",
                    "Ticked": false
                },
                {
                    "Name": "SVBL",
                    "Maker": "Silver Bull Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SVBI",
                    "Maker": "Severn Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SVT",
                    "Maker": "Servotronics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SVU",
                    "Maker": "SUPERVALU Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SWC",
                    "Maker": "Stillwater Mining Co.",
                    "Ticked": false
                },
                {
                    "Name": "SWFT",
                    "Maker": "Swift Transportation Company",
                    "Ticked": false
                },
                {
                    "Name": "SWHC",
                    "Maker": "Smith & Wesson Holding Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SWI",
                    "Maker": "SolarWinds, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SWK",
                    "Maker": "Stanley Black & Decker, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SWKS",
                    "Maker": "Skyworks Solutions Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SWM",
                    "Maker": "Schweitzer-Mauduit International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SWN",
                    "Maker": "Southwestern Energy Co.",
                    "Ticked": false
                },
                {
                    "Name": "SWS",
                    "Maker": "SWS Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SWX",
                    "Maker": "Southwest Gas Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SWY",
                    "Maker": "Safeway Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SXC",
                    "Maker": "SunCoke Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SXE",
                    "Maker": "Southcross Energy Partners, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "SXI",
                    "Maker": "Standex International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SXL",
                    "Maker": "Sunoco Logistics Partners L.P.",
                    "Ticked": false
                },
                {
                    "Name": "SXT",
                    "Maker": "Sensient Technologies Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SYA",
                    "Maker": "Symetra Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SYBT",
                    "Maker": "Stock Yards Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SYK",
                    "Maker": "Stryker Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SYKE",
                    "Maker": "Sykes Enterprises, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "SYMC",
                    "Maker": "Symantec Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SYMM",
                    "Maker": "Symmetricom Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SYMX",
                    "Maker": "Synthesis Energy Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SYN",
                    "Maker": "Synthetic Biologics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SYNA",
                    "Maker": "Synaptics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SYNC",
                    "Maker": "Synacor, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SYNM",
                    "Maker": "Syntroleum Corp.",
                    "Ticked": false
                },
                {
                    "Name": "SYPR",
                    "Maker": "Sypris Solutions Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SYRG",
                    "Maker": "Synergy Resources Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SYUT",
                    "Maker": "Synutra International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "SYY",
                    "Maker": "Sysco Corporation",
                    "Ticked": false
                },
                {
                    "Name": "SZYM",
                    "Maker": "Solazyme, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "T",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "TA",
                    "Maker": "TravelCenters of America LLC",
                    "Ticked": false
                },
                {
                    "Name": "TACT",
                    "Maker": "TransAct Technologies Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "TAIT",
                    "Maker": "Taitron Components Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TAL",
                    "Maker": "TAL International Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TAP",
                    "Maker": "Molson Coors Brewing Company",
                    "Ticked": false
                },
                {
                    "Name": "TASR",
                    "Maker": "TASER International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TAST",
                    "Maker": "Carrols Restaurant Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TAT",
                    "Maker": "TransAtlantic Petroleum Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "TAX",
                    "Maker": "JTH Holding, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TAYC",
                    "Maker": "Taylor Capital Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TAYCP",
                    "Maker": "Taylor Capital Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TAYD",
                    "Maker": "Taylor Devices Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TBAC",
                    "Maker": "Tandy Brands Accessories, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TBI",
                    "Maker": "TrueBlue, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TBNK",
                    "Maker": "Territorial Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TBOW",
                    "Maker": "Trunkbow International Holdings, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "TBIO",
                    "Maker": "Transgenomic Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TC",
                    "Maker": "Thompson Creek Metals Company Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TCB",
                    "Maker": "TCF Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TCBI",
                    "Maker": "Texas Capital BancShares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TCBK",
                    "Maker": "TriCo Bancshares",
                    "Ticked": false
                },
                {
                    "Name": "TCCO",
                    "Maker": "Technical Communications Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TCI",
                    "Maker": "Transcontinental Realty Investors Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TCO",
                    "Maker": "Taubman Centers, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TCP",
                    "Maker": "TC PipeLines, LP",
                    "Ticked": false
                },
                {
                    "Name": "TDC",
                    "Maker": "Teradata Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TDW",
                    "Maker": "Tidewater Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TDG",
                    "Maker": "TransDigm Group Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "TDY",
                    "Maker": "Teledyne Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TE",
                    "Maker": "TECO Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TECD",
                    "Maker": "Tech Data Corp.",
                    "Ticked": false
                },
                {
                    "Name": "TECH",
                    "Maker": "Techne Corp.",
                    "Ticked": false
                },
                {
                    "Name": "TEAR",
                    "Maker": "TearLab Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TECUA",
                    "Maker": "Tecumseh Products Company",
                    "Ticked": false
                },
                {
                    "Name": "TECUB",
                    "Maker": "Tecumseh Products Company",
                    "Ticked": false
                },
                {
                    "Name": "TEG",
                    "Maker": "Integrys Energy Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TEL",
                    "Maker": "TE Connectivity Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "TELK",
                    "Maker": "Telik Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TER",
                    "Maker": "Teradyne Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TEN",
                    "Maker": "Tenneco Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TESS",
                    "Maker": "TESSCO Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TESO",
                    "Maker": "Tesco Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TEX",
                    "Maker": "Terex Corp.",
                    "Ticked": false
                },
                {
                    "Name": "TFCO",
                    "Maker": "Tufco Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TFM",
                    "Maker": "The Fresh Market, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TFSL",
                    "Maker": "TFS Financial Corp",
                    "Ticked": false
                },
                {
                    "Name": "TGC",
                    "Maker": "Tengasco Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TFX",
                    "Maker": "Teleflex Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "TG",
                    "Maker": "Tredegar Corp.",
                    "Ticked": false
                },
                {
                    "Name": "TGE",
                    "Maker": "TGC Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TGI",
                    "Maker": "Triumph Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TGT",
                    "Maker": "Target Corp.",
                    "Ticked": false
                },
                {
                    "Name": "THC",
                    "Maker": "Tenet Healthcare Corp.",
                    "Ticked": false
                },
                {
                    "Name": "THFF",
                    "Maker": "First Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "THG",
                    "Maker": "The Hanover Insurance Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "THLD",
                    "Maker": "Threshold Pharmaceuticals Inc.",
                    "Ticked": false
                },
                {
                    "Name": "THO",
                    "Maker": "Thor Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "THI",
                    "Maker": "Tim Hortons Inc.",
                    "Ticked": false
                },
                {
                    "Name": "THOR",
                    "Maker": "Thoratec Corp.",
                    "Ticked": false
                },
                {
                    "Name": "THR",
                    "Maker": "Thermon Group Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "THRD",
                    "Maker": "TF Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "THRM",
                    "Maker": "Gentherm Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "THRX",
                    "Maker": "Theravance Inc.",
                    "Ticked": false
                },
                {
                    "Name": "THS",
                    "Maker": "Treehouse Foods, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "THTI",
                    "Maker": "THT Heat Transfer Technology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TIBX",
                    "Maker": "TIBCO Software Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TIF",
                    "Maker": "Tiffany & Co.",
                    "Ticked": false
                },
                {
                    "Name": "TIGR",
                    "Maker": "TigerLogic Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TIK",
                    "Maker": "Tel-Instrument Electronics Corp.",
                    "Ticked": false
                },
                {
                    "Name": "TIS",
                    "Maker": "Orchids Paper Products Company",
                    "Ticked": false
                },
                {
                    "Name": "TISI",
                    "Maker": "Team, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TITN",
                    "Maker": "Titan Machinery, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TIVO",
                    "Maker": "TiVo Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TJX",
                    "Maker": "The TJX Companies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TKOI",
                    "Maker": "Telkonet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TKR",
                    "Maker": "Timken Co.",
                    "Ticked": false
                },
                {
                    "Name": "TLAB",
                    "Maker": "Tellabs Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TLF",
                    "Maker": "Tandy Leather Factory, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TLLP",
                    "Maker": "Tesoro Logistics LP",
                    "Ticked": false
                },
                {
                    "Name": "TLR",
                    "Maker": "Timberline Resources Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TLYS",
                    "Maker": "Tilly's, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TMH",
                    "Maker": "Team Health Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TMHC",
                    "Maker": "Taylor Morrison Home Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TAM",
                    "Maker": "Taminco Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TMNG",
                    "Maker": "The Management Network Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TMO",
                    "Maker": "Thermo Fisher Scientific, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TMP",
                    "Maker": "Tompkins Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TNAV",
                    "Maker": "Telenav, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TNC",
                    "Maker": "Tennant Company",
                    "Ticked": false
                },
                {
                    "Name": "TNGN",
                    "Maker": "Tengion, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TNGO",
                    "Maker": "Tangoe, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TNH",
                    "Maker": "Terra Nitrogen Company, L.P.",
                    "Ticked": false
                },
                {
                    "Name": "TOF",
                    "Maker": "Tofutti Brands Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TOFC",
                    "Maker": "Tower Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TOL",
                    "Maker": "Toll Brothers Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TORM",
                    "Maker": "TOR Minerals International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TOWR",
                    "Maker": "Tower International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TPC",
                    "Maker": "Tutor Perini Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TPH",
                    "Maker": "TRI Pointe Homes, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TPL",
                    "Maker": "Texas Pacific Land Trust",
                    "Ticked": false
                },
                {
                    "Name": "TPLM",
                    "Maker": "Triangle Petroleum Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TPX",
                    "Maker": "Tempur Sealy International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TQNT",
                    "Maker": "TriQuint Semiconductor, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TR",
                    "Maker": "Tootsie Roll Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRAK",
                    "Maker": "Dealertrack Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TREE",
                    "Maker": "Tree.Com, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TREX",
                    "Maker": "Trex Co. Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRC",
                    "Maker": "Tejon Ranch Co.",
                    "Ticked": false
                },
                {
                    "Name": "TRGT",
                    "Maker": "Targacept, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRIP",
                    "Maker": "TripAdvisor Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRIT",
                    "Maker": "Tri-Tech Holding, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRLA",
                    "Maker": "Trulia, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRLG",
                    "Maker": "True Religion Apparel, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRMB",
                    "Maker": "Trimble Navigation Limited",
                    "Ticked": false
                },
                {
                    "Name": "TRMK",
                    "Maker": "Trustmark Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TRNO",
                    "Maker": "Terreno Realty Corp.",
                    "Ticked": false
                },
                {
                    "Name": "TRNS",
                    "Maker": "Transcat Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TROV",
                    "Maker": "TrovaGene, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRNX",
                    "Maker": "Tornier N.V.",
                    "Ticked": false
                },
                {
                    "Name": "TROVU",
                    "Maker": "TrovaGene, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TROW",
                    "Maker": "T. Rowe Price Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRR",
                    "Maker": "TRC Companies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRST",
                    "Maker": "TrustCo Bank Corp. NY",
                    "Ticked": false
                },
                {
                    "Name": "TRT",
                    "Maker": "Trio-Tech International",
                    "Ticked": false
                },
                {
                    "Name": "TRV",
                    "Maker": "The Travelers Companies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRXI",
                    "Maker": "TRX, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TRW",
                    "Maker": "TRW Automotive Holdings Corp.",
                    "Ticked": false
                },
                {
                    "Name": "TSBK",
                    "Maker": "Timberland Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TSC",
                    "Maker": "Tristate Capital Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TSCO",
                    "Maker": "Tractor Supply Company",
                    "Ticked": false
                },
                {
                    "Name": "TSH",
                    "Maker": "Teche Holding Company",
                    "Ticked": false
                },
                {
                    "Name": "TSO",
                    "Maker": "Tesoro Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TSLA",
                    "Maker": "Tesla Motors, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TSPT",
                    "Maker": "Transcept Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TSRA",
                    "Maker": "Tessera Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TSN",
                    "Maker": "Tyson Foods, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TSRO",
                    "Maker": "Tesaro, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TSYS",
                    "Maker": "TeleCommunication Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TTC",
                    "Maker": "Toro Co.",
                    "Ticked": false
                },
                {
                    "Name": "TTEC",
                    "Maker": "TeleTech Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TTEK",
                    "Maker": "Tetra Tech Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TTGT",
                    "Maker": "TechTarget, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TTI",
                    "Maker": "TETRA Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TTMI",
                    "Maker": "TTM Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TTPH",
                    "Maker": "Tetraphase Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TTWO",
                    "Maker": "Take-Two Interactive Software Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TUES",
                    "Maker": "Tuesday Morning Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TUMI",
                    "Maker": "Tumi Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TUP",
                    "Maker": "Tupperware Brands Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TW",
                    "Maker": "Towers Watson & Co.",
                    "Ticked": false
                },
                {
                    "Name": "TWC",
                    "Maker": "Time Warner Cable Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TWER",
                    "Maker": "Towerstream Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TWIN",
                    "Maker": "Twin Disc, Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "TWMC",
                    "Maker": "Trans World Entertainment Corporation",
                    "Ticked": false
                },
                {
                    "Name": "TWI",
                    "Maker": "Titan International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TWO",
                    "Maker": "Two Harbors Investment Corp.",
                    "Ticked": false
                },
                {
                    "Name": "TWTC",
                    "Maker": "TW Telecom Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TWX",
                    "Maker": "Time Warner Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TXI",
                    "Maker": "Texas Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TXN",
                    "Maker": "Texas Instruments Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TXRH",
                    "Maker": "Texas Roadhouse, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TXT",
                    "Maker": "Textron Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TYC",
                    "Maker": "Tyco International Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "TYL",
                    "Maker": "Tyler Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TYPE",
                    "Maker": "Monotype Imaging Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "TZOO",
                    "Maker": "Travelzoo Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UACL",
                    "Maker": "Universal Truckload Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UAHC",
                    "Maker": "United American Healthcare Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UA",
                    "Maker": "Under Armour, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UAL",
                    "Maker": "United Continental Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UAM",
                    "Maker": "Universal American Corp",
                    "Ticked": false
                },
                {
                    "Name": "UAMY",
                    "Maker": "United States Antimony Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UAN",
                    "Maker": "CVR Partners, LP",
                    "Ticked": false
                },
                {
                    "Name": "UBA",
                    "Maker": "Urstadt Biddle Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UBCP",
                    "Maker": "United Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UBFO",
                    "Maker": "United Security Bancshares",
                    "Ticked": false
                },
                {
                    "Name": "UBNK",
                    "Maker": "United Financial Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UBNT",
                    "Maker": "Ubiquiti Networks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UBOH",
                    "Maker": "United Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UBP",
                    "Maker": "Urstadt Biddle Properties Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UBSH",
                    "Maker": "Union Bankshares Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UBSI",
                    "Maker": "United Bankshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UCFC",
                    "Maker": "United Community Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UCI",
                    "Maker": "UBS E-TRACS CMCI TR ETN",
                    "Ticked": false
                },
                {
                    "Name": "UCTT",
                    "Maker": "Ultra Clean Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UDR",
                    "Maker": "UDR, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UEC",
                    "Maker": "Uranium Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UEIC",
                    "Maker": "Universal Electronics Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UEPS",
                    "Maker": "Net 1 Ueps Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UFCS",
                    "Maker": "United Fire Group, Inc",
                    "Ticked": false
                },
                {
                    "Name": "UFI",
                    "Maker": "Unifi Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UFPI",
                    "Maker": "Universal Forest Products Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UFPT",
                    "Maker": "UFP Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UFS",
                    "Maker": "Domtar Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UG",
                    "Maker": "United-Guardian Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UHAL",
                    "Maker": "AMERCO",
                    "Ticked": false
                },
                {
                    "Name": "UGI",
                    "Maker": "UGI Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UHT",
                    "Maker": "Universal Health Realty Income Trust",
                    "Ticked": false
                },
                {
                    "Name": "UIHC",
                    "Maker": "United Insurance Holdings Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UIL",
                    "Maker": "UIL Holdings Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UIS",
                    "Maker": "Unisys Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UHS",
                    "Maker": "Universal Health Services Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ULBI",
                    "Maker": "Ultralife Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ULGX",
                    "Maker": "Urologix, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ULTA",
                    "Maker": "ULTA Salon, Cosmetics & Fragrance, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ULTI",
                    "Maker": "The Ultimate Software Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UMPQ",
                    "Maker": "Umpqua Holdings Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UNAM",
                    "Maker": "Unico American Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UNB",
                    "Maker": "Union Bankshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UNF",
                    "Maker": "UniFirst Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UNFI",
                    "Maker": "United Natural Foods, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UNH",
                    "Maker": "UnitedHealth Group Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "UNIS",
                    "Maker": "Unilife Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UNM",
                    "Maker": "Unum Group",
                    "Ticked": false
                },
                {
                    "Name": "UNP",
                    "Maker": "Union Pacific Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UNS",
                    "Maker": "UNS Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UNTD",
                    "Maker": "United Online, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UNTK",
                    "Maker": "UniTek Global Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UNTY",
                    "Maker": "Unity Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UPI",
                    "Maker": "Uroplasty, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UPIP",
                    "Maker": "Unwired Planet, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UPL",
                    "Maker": "Ultra Petroleum Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UPS",
                    "Maker": "United Parcel Service, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UQM",
                    "Maker": "UQM Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "URBN",
                    "Maker": "Urban Outfitters Inc.",
                    "Ticked": false
                },
                {
                    "Name": "URG",
                    "Maker": "UR-Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "URI",
                    "Maker": "United Rentals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "URRE",
                    "Maker": "Uranium Resources, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "URS",
                    "Maker": "URS Corporation",
                    "Ticked": false
                },
                {
                    "Name": "URZ",
                    "Maker": "Uranerz Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "USAK",
                    "Maker": "USA Truck Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USAP",
                    "Maker": "Universal Stainless & Alloy Products Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USAT",
                    "Maker": "USA Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USATP",
                    "Maker": "USA Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USB",
                    "Maker": "U.S. Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "USBI",
                    "Maker": "United Security Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USEG",
                    "Maker": "US Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "USG",
                    "Maker": "USG Corporation",
                    "Ticked": false
                },
                {
                    "Name": "USLM",
                    "Maker": "United States Lime & Minerals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USMD",
                    "Maker": "USMD Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USMO",
                    "Maker": "USA Mobility, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USNA",
                    "Maker": "USANA Health Sciences Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USTR",
                    "Maker": "United Stationers Inc.",
                    "Ticked": false
                },
                {
                    "Name": "USU",
                    "Maker": "USEC Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UTEK",
                    "Maker": "Ultratech, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UTI",
                    "Maker": "Universal Technical Institute, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UTHR",
                    "Maker": "United Therapeutics Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UTIW",
                    "Maker": "UTi Worldwide Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UTL",
                    "Maker": "Unitil Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UTX",
                    "Maker": "United Technologies Corp.",
                    "Ticked": false
                },
                {
                    "Name": "UUU",
                    "Maker": "Universal Security Instruments Inc.",
                    "Ticked": false
                },
                {
                    "Name": "UVSP",
                    "Maker": "Univest Corporation of Pennsylvania",
                    "Ticked": false
                },
                {
                    "Name": "UVV",
                    "Maker": "Universal Corporation",
                    "Ticked": false
                },
                {
                    "Name": "UWN",
                    "Maker": "Nevada Gold & Casinos Inc.",
                    "Ticked": false
                },
                {
                    "Name": "V",
                    "Maker": "Visa Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VAC",
                    "Maker": "Marriott Vacations Worldwide Corp.",
                    "Ticked": false
                },
                {
                    "Name": "VAL",
                    "Maker": "The Valspar Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VALU",
                    "Maker": "Value Line, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VALV",
                    "Maker": "Shengkai Innovations, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VAR",
                    "Maker": "Varian Medical Systems, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VASC",
                    "Maker": "Vascular Solutions Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VASO",
                    "Maker": "Vasomedical Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VBFC",
                    "Maker": "Village Bank & Trust Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "VC",
                    "Maker": "Visteon Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VCBI",
                    "Maker": "Virginia Commerce Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VCLK",
                    "Maker": "Conversant, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VCRA",
                    "Maker": "Vocera Communications, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VDSI",
                    "Maker": "VASCO Data Security International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VECO",
                    "Maker": "Veeco Instruments Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VG",
                    "Maker": "Vonage Holdings Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VGZ",
                    "Maker": "Vista Gold Corp.",
                    "Ticked": false
                },
                {
                    "Name": "VHC",
                    "Maker": "VirnetX Holding Corp",
                    "Ticked": false
                },
                {
                    "Name": "VHI",
                    "Maker": "Valhi, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VIA",
                    "Maker": "Viacom, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VIAB",
                    "Maker": "Viacom, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VIAS",
                    "Maker": "Viasystems Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VICL",
                    "Maker": "Vical Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "VICR",
                    "Maker": "Vicor Corp.",
                    "Ticked": false
                },
                {
                    "Name": "VIDE",
                    "Maker": "Video Display Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VIFL",
                    "Maker": "Food Technology Service Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VII",
                    "Maker": "Vicon Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VIRC",
                    "Maker": "Virco Mfg. Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VIVO",
                    "Maker": "Meridian Bioscience, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VLGEA",
                    "Maker": "Village Super Market Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VITC",
                    "Maker": "Vitacost.com, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VLO",
                    "Maker": "Valero Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VLTR",
                    "Maker": "Volterra Semiconductor Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VLY",
                    "Maker": "Valley National Bancorp",
                    "Ticked": false
                },
                {
                    "Name": "VMC",
                    "Maker": "Vulcan Materials Company",
                    "Ticked": false
                },
                {
                    "Name": "VMI",
                    "Maker": "Valmont Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VNDA",
                    "Maker": "Vanda Pharmaceuticals, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VNO",
                    "Maker": "Vornado Realty Trust",
                    "Ticked": false
                },
                {
                    "Name": "VNTV",
                    "Maker": "Vantiv, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VOCS",
                    "Maker": "Vocus Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VOLC",
                    "Maker": "Volcano Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VOXX",
                    "Maker": "VOXX International Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VOYA",
                    "Maker": "Voya Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VPG",
                    "Maker": "Vishay Precision Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VPHM",
                    "Maker": "ViroPharma Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VPRT",
                    "Maker": "Vistaprint N.V.",
                    "Ticked": false
                },
                {
                    "Name": "VRA",
                    "Maker": "Vera Bradley, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VRML",
                    "Maker": "Vermillion, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VRNM",
                    "Maker": "Verenium Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VRNT",
                    "Maker": "Verint Systems Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VRS",
                    "Maker": "Verso Paper Corp.",
                    "Ticked": false
                },
                {
                    "Name": "VRSK",
                    "Maker": "Verisk Analytics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VRSN",
                    "Maker": "VeriSign, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VRTA",
                    "Maker": "Vestin Realty Mortgage I, Inc",
                    "Ticked": false
                },
                {
                    "Name": "VRTB",
                    "Maker": "Vestin Realty Mortgage II, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VRTS",
                    "Maker": "Virtus Investment Partners, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VRTU",
                    "Maker": "Virtusa Corp.",
                    "Ticked": false
                },
                {
                    "Name": "VRTX",
                    "Maker": "Vertex Pharmaceuticals Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "VSAT",
                    "Maker": "ViaSat Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VSBN",
                    "Maker": "VSB Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VSCI",
                    "Maker": "Vision-Sciences Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VSEC",
                    "Maker": "VSE Corp.",
                    "Ticked": false
                },
                {
                    "Name": "VSH",
                    "Maker": "Vishay Intertechnology Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VSR",
                    "Maker": "Versar Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VSTM",
                    "Maker": "Verastem, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VTNC",
                    "Maker": "Vitran Corp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VTNR",
                    "Maker": "Vertex Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VTR",
                    "Maker": "Ventas, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VTSS",
                    "Maker": "Vitesse Semiconductor Corp.",
                    "Ticked": false
                },
                {
                    "Name": "VTUS",
                    "Maker": "Ventrus Biosciences Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VVUS",
                    "Maker": "VIVUS Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VVTV",
                    "Maker": "ValueVision Media Inc.",
                    "Ticked": false
                },
                {
                    "Name": "VVC",
                    "Maker": "Vectren Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VYFC",
                    "Maker": "Valley Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "VZ",
                    "Maker": "Verizon Communications Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WAB",
                    "Maker": "Westinghouse Air Brake Technologies Corporation",
                    "Ticked": false
                },
                {
                    "Name": "WABC",
                    "Maker": "Westamerica Bancorp.",
                    "Ticked": false
                },
                {
                    "Name": "WAFD",
                    "Maker": "Washington Federal Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WAG",
                    "Maker": "Walgreen Co.",
                    "Ticked": false
                },
                {
                    "Name": "WAGE",
                    "Maker": "WageWorks, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WAIR",
                    "Maker": "Wesco Aircraft Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WAL",
                    "Maker": "Western Alliance Bancorporation",
                    "Ticked": false
                },
                {
                    "Name": "WAT",
                    "Maker": "Waters Corporation",
                    "Ticked": false
                },
                {
                    "Name": "WAVE",
                    "Maker": "NEXTWAVE WIRLESS",
                    "Ticked": false
                },
                {
                    "Name": "WAVX",
                    "Maker": "Wave Systems Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WAYN",
                    "Maker": "Wayne Savings Bancshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WBCO",
                    "Maker": "Washington Banking Co.",
                    "Ticked": false
                },
                {
                    "Name": "WBMD",
                    "Maker": "WebMD Health Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WBS",
                    "Maker": "Webster Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WCC",
                    "Maker": "WESCO International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WCG",
                    "Maker": "WellCare Health Plans, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WCN",
                    "Maker": "Waste Connections Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WCRX",
                    "Maker": "Warner Chilcott plc",
                    "Ticked": false
                },
                {
                    "Name": "WD",
                    "Maker": "Walker & Dunlop, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WDAY",
                    "Maker": "Workday, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WDC",
                    "Maker": "Western Digital Corporation",
                    "Ticked": false
                },
                {
                    "Name": "WDFC",
                    "Maker": "WD-40 Company",
                    "Ticked": false
                },
                {
                    "Name": "WDR",
                    "Maker": "Waddell & Reed Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WEC",
                    "Maker": "Wisconsin Energy Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WEN",
                    "Maker": "The Wendy's Company",
                    "Ticked": false
                },
                {
                    "Name": "WEST",
                    "Maker": "Andalay Solar, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WEBK",
                    "Maker": "Wellesley Bancorp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WETF",
                    "Maker": "WisdomTree Investments, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WFBI",
                    "Maker": "WashingtonFirst Bankshares Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WEYS",
                    "Maker": "Weyco Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WFD",
                    "Maker": "Westfield Financial Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WFM",
                    "Maker": "Whole Foods Market, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WFC",
                    "Maker": "Wells Fargo & Company",
                    "Ticked": false
                },
                {
                    "Name": "WFT",
                    "Maker": "Weatherford International Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "WG",
                    "Maker": "Willbros Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WGA",
                    "Maker": "Wells-Gardner Electronics Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WGL",
                    "Maker": "WGL Holdings Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WGO",
                    "Maker": "Winnebago Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WHG",
                    "Maker": "Westwood Holdings Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WHLR",
                    "Maker": "Wheeler Real Estate Investment Trust, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WHR",
                    "Maker": "Whirlpool Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WIBC",
                    "Maker": "Wilshire Bancorp Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WIFI",
                    "Maker": "Boingo Wireless, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WINA",
                    "Maker": "Winmark Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WIRE",
                    "Maker": "Encore Wire Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WLB",
                    "Maker": "Westmoreland Coal Co.",
                    "Ticked": false
                },
                {
                    "Name": "WLBPZ",
                    "Maker": "Westmoreland Coal Co.",
                    "Ticked": false
                },
                {
                    "Name": "WLDN",
                    "Maker": "Willdan Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WLH",
                    "Maker": "William Lyon Homes",
                    "Ticked": false
                },
                {
                    "Name": "WLFC",
                    "Maker": "Willis Lease Finance Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WLL",
                    "Maker": "Whiting Petroleum Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WLP",
                    "Maker": "WellPoint Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WLT",
                    "Maker": "Walter Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WM",
                    "Maker": "Waste Management, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WMAR",
                    "Maker": "West Marine Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WLK",
                    "Maker": "Westlake Chemical Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WMB",
                    "Maker": "Williams Companies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WMGI",
                    "Maker": "Wright Medical Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WMK",
                    "Maker": "Weis Markets, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WMT",
                    "Maker": "Wal-Mart Stores Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WOR",
                    "Maker": "Worthington Industries, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WPCS",
                    "Maker": "WPCS International Incorporated",
                    "Ticked": false
                },
                {
                    "Name": "WPX",
                    "Maker": "WPX Energy, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WPZ",
                    "Maker": "Williams Partners L.P.",
                    "Ticked": false
                },
                {
                    "Name": "WRD",
                    "Maker": "Weingarten Realty Investors",
                    "Ticked": false
                },
                {
                    "Name": "WRE",
                    "Maker": "Washington Real Estate Investment Trust",
                    "Ticked": false
                },
                {
                    "Name": "WRES",
                    "Maker": "Warren Resources Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WRI",
                    "Maker": "Weingarten Realty Investors",
                    "Ticked": false
                },
                {
                    "Name": "WRLD",
                    "Maker": "World Acceptance Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WSBC",
                    "Maker": "WesBanco Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WSBF",
                    "Maker": "Waterstone Financial, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WSCI",
                    "Maker": "WSI Industries Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WSM",
                    "Maker": "Williams-Sonoma Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WSFS",
                    "Maker": "WSFS Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WSO",
                    "Maker": "Watsco Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WST",
                    "Maker": "West Pharmaceutical Services, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WSTC",
                    "Maker": "West Corporation",
                    "Ticked": false
                },
                {
                    "Name": "WSTL",
                    "Maker": "Westell Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WTBA",
                    "Maker": "West Bancorp., Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WSTG",
                    "Maker": "Wayside Technology Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WTFC",
                    "Maker": "Wintrust Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "WTI",
                    "Maker": "",
                    "Ticked": false
                },
                {
                    "Name": "WTM",
                    "Maker": "White Mountains Insurance Group, Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "WTR",
                    "Maker": "Aqua America Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WTS",
                    "Maker": "Watts Water Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WTSL",
                    "Maker": "The Wet Seal, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WTT",
                    "Maker": "Wireless Telecom Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WU",
                    "Maker": "The Western Union Company",
                    "Ticked": false
                },
                {
                    "Name": "WUHN",
                    "Maker": "Wuhan General Group",
                    "Ticked": false
                },
                {
                    "Name": "WVFC",
                    "Maker": "WVS Financial Corp.",
                    "Ticked": false
                },
                {
                    "Name": "WVVI",
                    "Maker": "Willamette Valley Vineyards Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WWAV",
                    "Maker": "The WhiteWave Foods Company",
                    "Ticked": false
                },
                {
                    "Name": "WWD",
                    "Maker": "Woodward, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WWE",
                    "Maker": "World Wrestling Entertainment Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WWW",
                    "Maker": "Wolverine World Wide Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WWWW",
                    "Maker": "Web.com Group, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "WY",
                    "Maker": "Weyerhaeuser Co.",
                    "Ticked": false
                },
                {
                    "Name": "WYN",
                    "Maker": "Wyndham Worldwide Corporation",
                    "Ticked": false
                },
                {
                    "Name": "WYNN",
                    "Maker": "Wynn Resorts Ltd.",
                    "Ticked": false
                },
                {
                    "Name": "WYY",
                    "Maker": "WidePoint Corp.",
                    "Ticked": false
                },
                {
                    "Name": "X",
                    "Maker": "United States Steel Corp.",
                    "Ticked": false
                },
                {
                    "Name": "XBKS",
                    "Maker": "Xenith Bankshares, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "XEC",
                    "Maker": "Cimarex Energy Co.",
                    "Ticked": false
                },
                {
                    "Name": "XEL",
                    "Maker": "Xcel Energy Inc.",
                    "Ticked": false
                },
                {
                    "Name": "XL",
                    "Maker": "XL Group plc",
                    "Ticked": false
                },
                {
                    "Name": "XLNX",
                    "Maker": "Xilinx Inc.",
                    "Ticked": false
                },
                {
                    "Name": "XNPT",
                    "Maker": "Xenoport, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "XOM",
                    "Maker": "Exxon Mobil Corporation",
                    "Ticked": false
                },
                {
                    "Name": "XOMA",
                    "Maker": "XOMA Corporation",
                    "Ticked": false
                },
                {
                    "Name": "XONE",
                    "Maker": "The ExOne Company",
                    "Ticked": false
                },
                {
                    "Name": "XOOM",
                    "Maker": "Xoom Corporation",
                    "Ticked": false
                },
                {
                    "Name": "XOXO",
                    "Maker": "XO Group Inc.",
                    "Ticked": false
                },
                {
                    "Name": "XPLR",
                    "Maker": "Xplore Technologies Corp.",
                    "Ticked": false
                },
                {
                    "Name": "XPO",
                    "Maker": "XPO Logistics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "XRAY",
                    "Maker": "DENTSPLY International Inc.",
                    "Ticked": false
                },
                {
                    "Name": "XRM",
                    "Maker": "Xerium Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "XRSC",
                    "Maker": "XRS Corporation",
                    "Ticked": false
                },
                {
                    "Name": "XRX",
                    "Maker": "Xerox Corporation",
                    "Ticked": false
                },
                {
                    "Name": "XWES",
                    "Maker": "World Energy Solutions, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "XXIA",
                    "Maker": "Ixia",
                    "Ticked": false
                },
                {
                    "Name": "XYL",
                    "Maker": "Xylem Inc.",
                    "Ticked": false
                },
                {
                    "Name": "Y",
                    "Maker": "Alleghany Corporation",
                    "Ticked": false
                },
                {
                    "Name": "YDKN",
                    "Maker": "Yadkin Financial Corporation",
                    "Ticked": false
                },
                {
                    "Name": "YELP",
                    "Maker": "Yelp, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "YHOO",
                    "Maker": "Yahoo! Inc.",
                    "Ticked": false
                },
                {
                    "Name": "YOD",
                    "Maker": "YOU On Demand Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "YONG",
                    "Maker": "Yongye International, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "YUM",
                    "Maker": "Yum! Brands, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "Z",
                    "Maker": "Zillow, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZAGG",
                    "Maker": "ZAGG Inc",
                    "Ticked": false
                },
                {
                    "Name": "ZAZA",
                    "Maker": "ZaZa Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ZBB",
                    "Maker": "ZBB Energy Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ZBRA",
                    "Maker": "Zebra Technologies Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ZEP",
                    "Maker": "Zep, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZEUS",
                    "Maker": "Olympic Steel Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZHNE",
                    "Maker": "Zhone Technologies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZIGO",
                    "Maker": "Zygo Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ZINC",
                    "Maker": "Horsehead Holding Corp.",
                    "Ticked": false
                },
                {
                    "Name": "ZION",
                    "Maker": "Zions Bancorporation",
                    "Ticked": false
                },
                {
                    "Name": "ZIPR",
                    "Maker": "zipRealty Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZIOP",
                    "Maker": "ZIOPHARM Oncology, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZIXI",
                    "Maker": "Zix Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ZLC",
                    "Maker": "Zale Corporation",
                    "Ticked": false
                },
                {
                    "Name": "ZLCS",
                    "Maker": "Zalicus Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZLTQ",
                    "Maker": "ZELTIQ Aesthetics, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZMH",
                    "Maker": "Zimmer Holdings, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZN",
                    "Maker": "Zion Oil & Gas, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZNGA",
                    "Maker": "Zynga, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZOLT",
                    "Maker": "Zoltek Companies Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZOOM",
                    "Maker": "ZOOM Technologies, Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZQK",
                    "Maker": "Quiksilver Inc.",
                    "Ticked": false
                },
                {
                    "Name": "ZUMZ",
                    "Maker": "Zumiez, Inc.",
                    "Ticked": false
                }
            ]
        }
        else {
            $scope.allTickers = [
                {
                    "Name": "B",
                    "Maker": "Brent Crude Futures",
                    "Ticked": false
                },
                {
                    "Name": "T",
                    "Maker": "WTI Crude Futures",
                    "Ticked": false
                },
                {
                    "Name": "G",
                    "Maker": "Gas Oil Futures",
                    "Ticked": false
                },
                {
                    "Name": "ULS",
                    "Maker": "Low Sulphur Gasoil Futures",
                    "Ticked": false
                },
                {
                    "Name": "N",
                    "Maker": "NYH RBOB Gasoline",
                    "Ticked": false
                },
                {
                    "Name": "O",
                    "Maker": "Heating Oil Futures",
                    "Ticked": false
                },
                {
                    "Name": "M",
                    "Maker": "UK Natural Gas Futures",
                    "Ticked": false
                },
                {
                    "Name": "ATW",
                    "Maker": "Rotterdam Coal Futures",
                    "Ticked": false
                },
                {
                    "Name": "AFR",
                    "Maker": "Richards Bay Coal Futures",
                    "Ticked": false
                },
                {
                    "Name": "NCF",
                    "Maker": "Newcastle Coal Futures",
                    "Ticked": false
                },
                {
                    "Name": "C",
                    "Maker": "ECX EUA Futures",
                    "Ticked": false
                },
                {
                    "Name": "CEU",
                    "Maker": "ECX EUAA Futures",
                    "Ticked": false
                },
                {
                    "Name": "CER",
                    "Maker": "ECX CER Emission Futures",
                    "Ticked": false
                },
                {
                    "Name": "ERU",
                    "Maker": "ECX ERU Emission Futures",
                    "Ticked": false
                },
                {
                    "Name": "TIB",
                    "Maker": "WTI vs Brent Spread Option",
                    "Ticked": false
                },
                {
                    "Name": "BPB",
                    "Maker": "Endex Belgian Power Base Load Futures",
                    "Ticked": false
                },
                {
                    "Name": "DPB",
                    "Maker": "Endex Dutch Power Base Load Futures",
                    "Ticked": false
                },
                {
                    "Name": "DPA",
                    "Maker": "Endex Dutch Power Peak Load (8-20) Futures",
                    "Ticked": false
                },
                {
                    "Name": "TFM",
                    "Maker": "Endex Dutch TTF Gas Base Load Futures",
                    "Ticked": false
                },
                {
                    "Name": "GNM",
                    "Maker": "Endex German NCG Futures",
                    "Ticked": false
                },
                {
                    "Name": "GER",
                    "Maker": "Endex German GASPOOL Futures",
                    "Ticked": false
                },
                {
                    "Name": "CC",
                    "Maker": "Cocoa Futures",
                    "Ticked": false
                },
                {
                    "Name": "KC",
                    "Maker": "Coffee C Futures",
                    "Ticked": false
                },
                {
                    "Name": "CT",
                    "Maker": "Cotton No. 2 Futures",
                    "Ticked": false
                },
                {
                    "Name": "OJ",
                    "Maker": "Orange Juice Futures",
                    "Ticked": false
                },
                {
                    "Name": "SB",
                    "Maker": "Sugar No. 11 Futures",
                    "Ticked": false
                },
                {
                    "Name": "SF",
                    "Maker": "Sugar No. 16 Futures",
                    "Ticked": false
                },
                {
                    "Name": "ICN",
                    "Maker": "Corn Futures",
                    "Ticked": false
                },
                {
                    "Name": "IS",
                    "Maker": "Soybean Futures",
                    "Ticked": false
                },
                {
                    "Name": "ISM",
                    "Maker": "Soybean Meal futures",
                    "Ticked": false
                },
                {
                    "Name": "IBO",
                    "Maker": "Soybean Oil Futures",
                    "Ticked": false
                },
                {
                    "Name": "IW",
                    "Maker": "Wheat Futures",
                    "Ticked": false
                },
                {
                    "Name": "RS",
                    "Maker": "Canola Futures",
                    "Ticked": false
                },
                {
                    "Name": "BW",
                    "Maker": "Barley Futures",
                    "Ticked": false
                },
                {
                    "Name": "DW",
                    "Maker": "Durum Wheat Futures",
                    "Ticked": false
                },
                {
                    "Name": "WA",
                    "Maker": "Milling Wheat Futures",
                    "Ticked": false
                },
                {
                    "Name": "RF",
                    "Maker": "Russell 1000 Index Mini Futures",
                    "Ticked": false
                },
                {
                    "Name": "TF",
                    "Maker": "Russell 2000 Index Mini Futures",
                    "Ticked": false
                },
                {
                    "Name": "DX",
                    "Maker": "US Dollar Index Futures",
                    "Ticked": false
                },
                {
                    "Name": "SS",
                    "Maker": "GBP/CHF Futures",
                    "Ticked": false
                },
                {
                    "Name": "SY",
                    "Maker": "GBP/JPY Futures",
                    "Ticked": false
                },
                {
                    "Name": "MP",
                    "Maker": "Sm GBP/USD Futures",
                    "Ticked": false
                },
                {
                    "Name": "RV",
                    "Maker": "Russell 1000 Value Index Futures",
                    "Ticked": false
                },
                {
                    "Name": "RG",
                    "Maker": "Russell 1000 Growth Index Futures",
                    "Ticked": false
                },
                {
                    "Name": "P",
                    "Maker": "UK Peak Electricity Futures",
                    "Ticked": false
                },
                {
                    "Name": "Y",
                    "Maker": "UK Base Electricity Futures",
                    "Ticked": false
                },
                {
                    "Name": "AR",
                    "Maker": "AUSTRALIAN DOLLAR/NEW ZEALAND DOLLAR FUTURES",
                    "Ticked": false
                },
                {
                    "Name": "ZJ",
                    "Maker": "New Zealand Dollar/Japanese Yen Futures",
                    "Ticked": false
                },
                {
                    "Name": "NJ",
                    "Maker": " Norwegian Krone/Swedish Krona Futures",
                    "Ticked": false
                },
                {
                    "Name": "KRU",
                    "Maker": "Russian Ruble/US Dollar Futures",
                    "Ticked": false
                },
                {
                    "Name": "ZR",
                    "Maker": "US Dollar/South African Rand Futures",
                    "Ticked": false
                },
                {
                    "Name": "NT",
                    "Maker": "US Dollar/Norwegian Krone Futures",
                    "Ticked": false
                }
            ]
        }
    };

    $scope.showResOverlay = function () {
        // var BASE_URL = 'https://query.yahooapis.com/v1/yql?q=';
        // var APP_ID = 'dj0yJmk9aVJUbGlZWUtEbEFlJmQ9WVdrOWNGcGFRek14TldrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03MQ--';
        // var API_QUERY = 'select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2009-09-11" and endDate = "2010-03-10"';
        var symbols = [];
        $scope.searchSymbol.forEach(function (element) {
            symbols.push(element.Name);
        }, this);
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

    $scope.toInt = function (str) {
        return parseInt(str);
    }
});
