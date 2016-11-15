/**
 * Created by 007-leo on 2016/10/15.
 */
'use strict';

angular.module('myApp.setting', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/setting', {
            templateUrl: 'modular/setting/setting.html',
            controller: 'settingCtrl'
        });
    }])

    .controller('settingCtrl', [function() {

    }]);