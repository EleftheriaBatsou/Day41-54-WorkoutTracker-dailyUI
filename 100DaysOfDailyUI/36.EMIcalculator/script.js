angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

  .controller('AppCtrl', function ($scope) {
    $scope.rating1 = 3200;
    $scope.rating2 = 4;
    $scope.rating3 = 12;
  });