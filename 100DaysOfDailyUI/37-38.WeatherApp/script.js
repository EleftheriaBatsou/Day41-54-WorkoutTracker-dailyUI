angular.module('weatherApp', ['ngMaterial', 'ngMessages'])

.controller('WeatherController', function($scope, $http, $interval) {
  $scope.unit = "c";
  $scope.condition = "Requires location tracking to load";
  $scope.currentC = 0;
  $scope.currentF = 0;
  $scope.loadedTemp = false;
  
  $scope.getLocation = function() {
    $scope.loadedTemp = false;
      if (navigator.geolocation) {
        const options = {
          enableHighAccuracy: false,
          timeout: 8000,
          maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition($scope.getWeather, handleErrors, options); 
      } else { 
        console.log("Geolocation is not supported by this browser.");
        $scope.condition = "Geolocation is not supported by this browser.";
      }
  }
  
  $scope.getWeather = function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    $http({
      method : "GET",
      url : "https://api.apixu.com/v1/current.json?key=7a30e71728c84f77b6c152439172608&q=" + lat + ", " + lon
    }).then(function success(response) {
      setTemp(response.data);
      setLocation(response.data);
    });
  }

  function setLocation(data) {
    $scope.condition = data.current.condition.text;
    $scope.date = Date.now();
    $scope.location = data.location.name;
  }

  function setTemp(data) {
    $scope.loadedTemp = true;
    setF(data);
    setC(data);
  }

  function setC(data) {
    const resultC = Math.round(data.current.temp_c,2);
    $scope.temp = resultC;
    $scope.currentC = resultC;
  }

  function setF(data) {
    const resultF = Math.round(data.current.temp_f,2);
    $scope.temp = resultF;
    $scope.currentF = resultF;
  }

  $scope.changeUnit = function() {
    $scope.temp = " ";
    if($scope.unit === "c") {
      $scope.unit = "f";
      $scope.temp = $scope.currentF;
    } else {
      $scope.unit = "c";
      $scope.temp = $scope.currentC;
    }
  }

  $interval($scope.getLocation, 20000);

  function showError(error) {
    console.log(error);
    $scope.condition = error;
  }

  function handleErrors(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        showError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        showError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        showError("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        showError("An unknown error occurred.");
        break;
    }
  }
});

// PLease note that the Javascript code is NOT written by me, 
//but it can be found here: https://codepen.io/danhearn/pen/RVVbQv?editors=0100