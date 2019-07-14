angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  
  .controller('AppCtrl', function ($scope) {

    $scope.disabled3 = 70;

    $scope.isDisabled = true;
  });