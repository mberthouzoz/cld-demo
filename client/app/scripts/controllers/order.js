'use strict';

/**
 * @ngdoc function
 * @name cldDemoApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the cldDemoApp
 */
angular.module('cldDemoApp')
  .controller('OrderCtrl', function ($scope, Order, Customer, Product) {

    $scope.addOrder = function (order) {
      console.log(order);
      var order2 = new Order();
      order2.productId = order.product;
      order2.customerId = order.customer;
      order2.qty = order.qty;

      Order.save(order2, function () {
        Order.query(function (data) {
          $scope.orders = data;
        });
      });
    };

    $scope.find = function () {

      Customer.query(function(data) {
        $scope.customers = data;
      });

      Product.query(function (data) {
        $scope.products = data;
      });

      Order.query(function (data) {
        $scope.orders = data;
      });
    };
  });
