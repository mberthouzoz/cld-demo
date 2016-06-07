'use strict';

/**
 * @ngdoc service
 * @name cldDemoApp.customer
 * @description
 * # customer
 * Factory in the cldDemoApp.
 */
angular.module('cldDemoApp')
  .factory('Customer', function ($resource, APIConf) {
    return $resource(APIConf.url + '/customers/:id', null,
      {
        'update': {method: 'PUT'}
      });
  });
