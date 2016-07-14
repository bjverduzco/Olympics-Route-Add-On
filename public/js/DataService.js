angular.module('olympicApp').factory('DataService', function ($http) {

  var data = {};

  var configObject = {
    method: "GET",
    url: 'olympics/all'
  };

    var randObject = {
      method: "GET",
      url: 'olympics/randomAthletes'
    };

  function handleSuccess(response){
    data.athletes = response.data;
    console.log('Success!!!', response);
  };

  function handleFailure(response){
    console.log('Failure', response);
  };

  // function to show all
  function showAll(){
    $http(configObject).then(handleSuccess, handleFailure);
  };

  //function to show random athletes
    function showRand(){
      $http(randObject).then(handleSuccess, handleFailure);
    };

  return {
    data: data,
    showAll: showAll,
    showRand: showRand
  }

})
