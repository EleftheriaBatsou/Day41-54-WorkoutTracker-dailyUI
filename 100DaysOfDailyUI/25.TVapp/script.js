
angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('AppCtrl', function($scope) {
     
    $scope.todos = [
      {
        cover : 'https://images-na.ssl-images-amazon.com/images/I/71VwAGJmXrL._SY606_.jpg',
        what: '2017 | Action, Sci-fi',
        who: 'Captain America Civil War',
        duration: '2h 27min',
        rank: 'Rating: 4/5'
      },
      {
        cover : 'https://images-na.ssl-images-amazon.com/images/I/91qmrdkBViL._SY550_.jpg',
        what: '2016 | Action, Adventure',
        who: 'Deadpool',
        duration: '1h 48min',
        rank: 'Rating: 4/5'
      },
      {
        cover : 'https://images-na.ssl-images-amazon.com/images/I/81nEtdN0f9L._SY606_.jpg',
        what: '2016 | Animation, Adventure',
        who: 'Zootopia',
        duration: '1h 34min',
        rank: 'Rating: 4.5/5'
      },
      {
        cover : 'https://m.media-amazon.com/images/M/MV5BMjcwNDA5MDYyNl5BMl5BanBnXkFtZTgwNjg0NDkzNzE@._V1_.jpg',
        what: '2016 | Action, Comedy, Crime',
        who: 'The nice guys',
        duration: '1h 52min',
        rank: 'Rating: 3/5'
      },
      {
        cover : 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/the-jungle-book-2016-poster.jpg?itok=YXMaO1u0',
        what: '2016 | Adventure, Drama, Family',
        who: 'The jungle book',
        duration: '1h 46min',
        rank: 'Rating: 3.4/5'
      },
      {
        cover : 'https://cdn.cinematerial.com/p/500x/xdi76m4f/love-friendship-swedish-movie-poster.jpg',
        what: '2015 | Comedy, Drama, Romance',
        who: 'Love and Friendship',
        duration: '1h 32min',
        rank: 'Rating: 4.5/5'
      }
    ];
});