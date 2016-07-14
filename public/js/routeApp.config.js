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
