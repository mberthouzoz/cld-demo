'use strict';

/**
 * @ngdoc service
 * @name cldDemoApp.order
 * @description
 * # order
 * Factory in the cldDemoApp.
 */
angular.module('cldDemoApp')
  .factory('Order', function ($resource, APIConf) {
    return $resource(APIConf.url + '/orders/:id', null,
      {
        'update': {method: 'PUT'}
      });
  });
