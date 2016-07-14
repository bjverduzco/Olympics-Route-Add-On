angular.module('olympicApp').controller('BadmintonController', function($scope, $http){
  $http.get('/olympics/badminton').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});
