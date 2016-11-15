'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ui.bootstrap',
  'myApp.view1',
  'myApp.view2',
  'myApp.setting',
  'myApp.reboot',
  'myApp.version'
]);
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  angular.element(document.querySelector('[type="checkbox"]')).radiocheck();





  $locationProvider.hashPrefix('!');

  //显示默认页面
  $routeProvider.otherwise({redirectTo: '/setting'});
}])
//自定义指令-点击事件
    .directive('native',['$rootScope',function($rootScope,$cookies){
  return{
    restrict:'A',
    link:function(scope,element,attrs){


      $(element).click(function(){

        scope.$apply(function(){
          $rootScope.nativeId = attrs.href;

        });
      });
    }
  }
}]);
app.controller('AccordionDemoCtrl', function ($scope) {


  $scope.oneAtATime = true;




  $scope.groups = [
    {
      title: '城市交通业务',
      content: '城内交通间隔管理',
      abbreviated:'view1',
    },
    {
      title: '设置',
      content: '系统设置',
      abbreviated:'view2',
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
