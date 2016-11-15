'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'modular/view1/view1.html',
        controller: 'View1Ctrl'
      });
    }])

    .controller('View1Ctrl', ['$scope',function($scope,$document,$emit) {
            var that=this;

        var data=[{
            index:1,
            patient_name:"上的发达打发打发啊大法师大法是大法师大法上帝发誓地方阿呆发生大幅"
        }];


        // $('[type="checkbox"]').bootstrapSwitch();

        // $('.dropdown-toggle').dropdown();
        // $('[data-toggle="select"]').select2();
        angular.element(document.querySelector('.select')).select2();

        angular.element(document.querySelector('#select2')).select2();

     function operateFormatter(value, row, index) {
        return [
          '<a class="like" href="javascript:void(0)" title="Like">',
          '明细',
          '</a>  ',
          '<a class="remove" href="javascript:void(0)" title="Remove">',
          '删除',
          '</a>'
        ].join('');
      }
      function titie(value, row, index){
          return [
              '<span   title="'+value+'">'+value+'</span>  ',
          ].join('');
      }

        var table=angular.element(document.querySelector('#text'));
        table.bootstrapTable({
        columns: [
          {field: "index", title: "序号"},
          {field: 'patient_name', title: '姓名',formatter:titie},
          {field: 'patient_sex', title: '性别'},
          {field: 'patient_birth', title: '年龄'},
          {
            field: "operate", title: "操作",formatter:operateFormatter,
            events: {
              "click .like": function (e, value, row, index) {

                console.log(row)

              }
            }
          },
        ],

        data: data,

      });

    }])

    //‘第4个个modal
    .controller('modal3',['$scope',function ($scope,$document) {
        var model4 = angular.element(document.querySelector('#myModal4'));
        $scope.modeladd3 = function () {
            model4.modal('show');

            model4.draggable({
                handle: ".modal-header",
                cursor: "crosshair",

            });
        }



    }])



    //‘第3个个modal
    .controller('modal2',['$scope',function ($scope,$document) {
        var model3 = angular.element(document.querySelector('#myModal3'));
        $scope.modeladd2 = function () {
            model3.modal('show');

            model3.draggable({
                handle: ".modal-header",
                cursor: "crosshair",

            });
        }



    }])

    //第2个个modal
    .controller('Modal1', ['$scope', function ($scope, $document) {

        var model2 = angular.element(document.querySelector('#myModal2'));
        $scope.$on = function () {
            $scope.modeladd = function () {
                model2.modal('show');

                model2.draggable({
                    handle: ".modal-header",
                    cursor: "crosshair",

                });
            }
        }
    }])

    //弹出model1
    .controller('ModalDemoCtrl', function ($scope, $uibModal, $log, $document) {
        var $ctrl = this;
        // $ctrl.items = ['item1', 'item2', 'item3'];

        // $ctrl.animationsEnabled = true;
        var model = angular.element($document[0].querySelector('#myModal'));
        this.open = function () {

            model.modal('show');

            model.draggable({
                handle: ".modal-header",
                cursor: "crosshair",

            });
        };


    })


    //时间控件=====================================================
    .controller('DatepickerPopupDemoCtrl', function ($scope,$document) {


        // angular.element($document[0].querySelector('.datetimepicker')).valueAsDate = new Date();


           var datepk=angular.element($document[0].querySelector('.datetimepicker'));
            datepk.daterangepicker({
                // timePicker: true,
                timePickerIncrement: 30,
                separator : ' -- ',
                format: 'YYYY/DD/MM'
                // format: 'MM/DD/YYYY h:mm A'
            }, function(start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });



    })

