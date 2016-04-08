angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getProducts = function() {
    return $http({
      method: 'GET',
      url: '/products'
    });
  };

  return factory;

}]);
