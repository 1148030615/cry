'use strict';

angular.module('myApp.reboot', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/reboot', {
            templateUrl: 'modular/reboot/reboot.html',
            controller: 'rebootCtrl'
        });
    }])

    .controller('rebootCtrl', [function() {

    }]);