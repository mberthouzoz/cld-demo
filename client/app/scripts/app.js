'use strict';

/**
 * @ngdoc overview
 * @name cldDemoApp
 * @description
 * # cldDemoApp
 *
 * Main module of the application.
 */
angular
  .module('cldDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomerCtrl',
        controllerAs: 'customer'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrderCtrl',
        controllerAs: 'order'
      })
      .otherwise({
        redirectTo: '/customers'
      });
  });
