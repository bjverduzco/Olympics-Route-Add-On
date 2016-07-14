angular.module('olympicApp').controller('ArcheryController', function($scope, $http){
  $http.get('/olympics/archery').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});
