var nevApp=angular.module('nevApp', ['ui.router', 'ngResource','ngAnimate' ,'ngCookies','angular-httpshooter','ngStorage','isteven-multi-select','720kb.datepicker','angular.filter']);

nevApp.filter('orderObject', function () {
    return function (object, reverse) {
        var keys = Object.keys(object || {}).sort();
        if (reverse) keys.reverse();
        for (var ordered = {}, i = 0; keys[i]; i++) {
            ordered[keys[i]] = object[keys[i]];
        }
        return ordered;
    }
})
