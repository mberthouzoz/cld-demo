'use strict';

/**
 * @ngdoc function
 * @name cldDemoApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the cldDemoApp
 */
angular.module('cldDemoApp')
  .controller('ProductCtrl', function ($scope, Product) {

    $scope.find = function () {
      Product.query(function (data) {
        $scope.products = data;
        console.log(data);
      });
    }
  });
