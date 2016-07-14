angular.module('olympicApp').controller('CanoeKayakController', function($scope, $http){
  $http.get('/olympics/canoeKayak').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});
