var app = angular.module('olympicApp', ['ngRoute']);

app.controller('MainController', function($scope, $http){
  $scope.athletes = [];

  var configObject = {
    method: "GET",
    url: 'olympics/all'
  };

  var randObject = {
    method: "GET",
    url: 'olympics/randomAthletes'
  };

  function handleSuccess(response){
    $scope.athletes = response.data;
    console.log('Success!!!', response);
  };

  function handleFailure(response){
    console.log('Failure', response);
  };

  function showAll(){
    $http(configObject).then(handleSuccess, handleFailure);
  };

  function showRand(){
    $http(randObject).then(handleSuccess, handleFailure);
  };

  $scope.randomAthletes = function(){
    var randSport = '';
    $http.get('/olympics/randomAthletes').then(function(request, response){
      console.log(response);
      showRand();
      $scope.showError = false;
    }, function(response){
      $scope.showError = true;
      console.log(response);
    })
  };

  showAll();
});


angular.module('olympicApp').config(function($routeProvider, $locationProvider){
$routeProvider
.when('/archery', {
  templateUrl: 'views/archery.html',
  controller:'ArcheryController'
}).when('/badminton', {
  templateUrl: 'views/badminton.html',
  controller: 'BadmintonController'
}).when('/canoeKayak', {
  templateUrl: 'views/canoe-kayak.html',
  controller: 'CanoeKayakController'
}).when('/judo', {
  templateUrl: 'views/judo.html',
  controller: 'JudoController'
}).when('/tableTennis', {
  templateUrl: 'views/table-tennis.html',
  controller: 'TableTennisController'
});

$locationProvider.html5Mode(true);

});

angular.module('olympicApp').controller('ArcheryController', function($scope, $http){
  $http.get('/olympics/archery').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});

angular.module('olympicApp').controller('BadmintonController', function($scope, $http){
  $http.get('/olympics/badminton').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});

angular.module('olympicApp').controller('CanoeKayakController', function($scope, $http){
  $http.get('/olympics/canoeKayak').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});

angular.module('olympicApp').controller('JudoController', function($scope, $http){
  $http.get('/olympics/judo').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});

angular.module('olympicApp').controller('TableTennisController', function($scope, $http){
  $http.get('/olympics/tableTennis').then(function(response){
    console.log(response.data);
    $scope.athlete = response.data;
  });
});
