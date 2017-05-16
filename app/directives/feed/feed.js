nevApp.directive('feed', function ($http) {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/feed/feed.html',
        link: function (scope, elem, attrs) {
            
                
            attrs.$observe('ticker', function (value) {
                $http({
                    method: 'get',
                    url: 'https://feeds.finance.yahoo.com/rss/2.0/headline?s=' + value+'&region=US&lang=en-US'
                }).then(function (data) {
                    console.log(data);
                });
            });

        }
    }
});