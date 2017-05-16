angular.module('myChart', [])

    // D3 Factory
    .factory('d3', function () {

        /* We could declare locals or other D3.js
             specific configurations here. */

        return d3;
    });