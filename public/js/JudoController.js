angular.module('olympicApp').controller('JudoController', function($scope, $http){
  $http.get('/olympics/judo').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});
