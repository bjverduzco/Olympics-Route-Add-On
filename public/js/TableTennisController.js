angular.module('olympicApp').controller('TableTennisController', function($scope, $http){
  $http.get('/olympics/tableTennis').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});
