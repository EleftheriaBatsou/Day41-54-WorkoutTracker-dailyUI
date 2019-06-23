
angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('AppCtrl', function($scope) {
     
    $scope.todos = [
      {
        num : 1,
        face : 'https://image.flaticon.com/icons/svg/145/145859.svg',
        what: 'Born: 12 August 1993',
        who: 'MacPie',
        nationality: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png',
        rank: "Rank: 5210"
      },
      {
        num : 2,
        face : 'https://image.flaticon.com/icons/svg/145/145867.svg',
        what: 'Born: 19 March 1990',
        who: 'Turbo Machine',
        nationality: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png',
        rank: "Rank: 4590"
      },
      {
        num : 3,
        face : 'https://image.flaticon.com/icons/svg/145/145866.svg',
        what: 'Born: 3 May 1987',
        who: 'Don Joe',
        nationality: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-france2x.png',
        rank: "Rank: 3870"
      },
      {
        num : 4,
        face : 'https://image.flaticon.com/icons/svg/145/145852.svg',
        what: 'Born: 12 December 2000',
        who: 'Maria K.',
        nationality: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-china2x.png',
        rank: "Rank: 3230"
      },
      {
        num : 5,
        face : 'https://image.flaticon.com/icons/svg/145/145864.svg',
        what: 'Born: 29 May 1979',
        who: 'Mr.Knowledge',
        nationality: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-the-netherlands2x.png',
        rank: "Rank: 2870"
      }
    ];
});

