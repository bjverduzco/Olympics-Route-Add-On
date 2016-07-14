app.controller('MainController', function($scope, $http, DataService){
  $scope.athletes = [];
  $scope.data = DataService.data;

//this grabs the random athlete
  $scope.randomAthletes = function(){
    var randSport = '';
    $http.get('/olympics/randomAthletes').then(function(request, response){
      console.log(response);
      DataService.showRand();
      $scope.showError = false;
    }, function(response){
      $scope.showError = true;
      console.log(response);
    })
  };

  //this grabs all the athletes
    $scope.all = function(){
      $http.get('/olympics/all').then(function(request, response){
        console.log(response);
        DataService.showAll();
        $scope.showError = false;
      }, function(response){
        $scope.showError = true;
        console.log(response);
      })
    };

  DataService.showAll();
});
