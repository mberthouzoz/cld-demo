'use strict';

/**
 * @ngdoc service
 * @name cldDemoApp.product
 * @description
 * # product
 * Factory in the cldDemoApp.
 */
angular.module('cldDemoApp')
  .factory('Product', function ($resource, APIConf) {
    return $resource(APIConf.url + '/products/:id', null,
      {
        'update': {method: 'PUT'}
      });
  });
