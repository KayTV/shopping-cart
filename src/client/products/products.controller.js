angular.module('app')
.controller('ProductsController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Products!!';

  function activate() {
    httpFactory.getProducts()
      .then(function(response){
        console.log(response);
        $scope.products = response.data;
      });
  };
  activate();

}]);
