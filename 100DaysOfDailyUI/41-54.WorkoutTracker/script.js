angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
})
.controller('SubheaderAppCtrl', function($scope, $mdDialog) {
    var imagePath = 'img/list/60.jpeg';
    $scope.messages = [
      {
        face : imagePath,
        what: 'Workout - 1',
        who: 'Duration - 90min',
        when: '3:08PM',
        notes: "Calories: 360Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 2',
        who: 'Duration - 80min',
        when: '3:08PM',
        notes: "Calories: 380Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 3',
        who: 'Duration - 60min',
        when: '3:08PM',
        notes: "Calories: 300Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 4',
        who: 'Duration - 65min',
        when: '3:08PM',
        notes: "Calories: 500Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 5',
        who: 'Duration - 30min',
        when: '3:08PM',
        notes: "Calories: 520Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 6',
        who: 'Duration - 20min',
        when: '3:08PM',
        notes: "Calories: 60Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 7',
        who: 'Duration - 10min',
        when: '3:08PM',
        notes: "Calories: 80Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 8',
        who: 'Duration - 25min',
        when: '3:08PM',
        notes: "Calories: 90Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 9',
        who: 'Duration - 15min',
        when: '3:08PM',
        notes: "Calories: 160Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 10',
        who: 'Duration - 35min',
        when: '3:08PM',
        notes: "Calories: 360Kcal"
      },
      {
        face : imagePath,
        what: 'Workout - 11',
        who: 'Duration - 45min',
        when: '3:08PM',
        notes: "Calories: 560Kcal"
      },
    ];
  
    // Info Card
    $scope.showInfo = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
    };
  
    // Invoice for paid workouts
    $scope.showInvoice = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialogInvoice.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
    };

    function DialogController($scope, $mdDialog) {
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
    }
  
  
    // Confirm Reservation for paid workouts
    $scope.showReservation = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Book Reservation')
          .textContent('You are about to book an online real time workout')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Yes, book it')
          .cancel('No, I regret it');

    $mdDialog.show(confirm).then(function() {
     
    }, function() {
     
    });
  };
  
    // Activity Feed and Food
    $scope.showFeed = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialogFeedAndFood.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
    };
  
    // Notification Settings
    $scope.showNotifications = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialogNotifications.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
    };
    
  
  
});