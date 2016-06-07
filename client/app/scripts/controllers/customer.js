'use strict';

/**
 * @ngdoc function
 * @name cldDemoApp.controller:CustomerCtrl
 * @description
 * # CustomerCtrl
 * Controller of the cldDemoApp
 */
angular.module('cldDemoApp')
  .controller('CustomerCtrl', function ($scope, Customer) {

    $scope.find = function () {
      Customer.query(function(data) {
        $scope.customers = data;
        console.log(data);
      });
    }
  });
