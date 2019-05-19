
angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('AppCtrl', function($scope) {
     
    $scope.todos = [
      {
        face : 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '10:10PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png',
        what: 'Let s do some diggiing',
        who: 'Chan Choo Ki',
        when: '08:08AM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'http://www.engageninja.com/img/ninjalogo.png',
        what: 'Brunch this weekend?',
        who: 'Holly Friend',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'https://cdn3.iconfinder.com/data/icons/miniman-vol-1/65/_Asian_Ninja-512.png',
        what: 'Shall we go to the gym',
        who: 'The body builder',
        when: '13:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : 'https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png',
        what: 'I told you I know everything',
        who: 'Mr.Knowledge',
        when: '13:28PM',
        notes: " I'll be in your neighborhood doing errands"
      }
    ];
});