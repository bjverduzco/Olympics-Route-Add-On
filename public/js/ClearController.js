angular.module('olympicApp').controller('ClearController', function($scope, $http){
  $http.get('/').then(function(response){

  });
});
