angular.module("app",["ngRoute", "ui.bootstrap"]);
angular.module("app")
  .config(function($routeProvider){
      $routeProvider
          .when('/popular', {templateUrl:'app/view/popular.html', controller:'homeCtrl', controllerAs:'$ctrl'})
          .when('/nowPlaying', {templateUrl:'app/view/nowPlaying.html'})
          .when('/topRated', {templateUrl:'app/view/topRated.html'})
          .when('/search/:query', {templateUrl:'app/view/popular.html'})
          .when('/movie/details/:id', {templateUrl:'app/view/movieDetail.html', controller:'movieDetailCtrl', controllerAs:'$ctrl'})
          .otherwise({
            redirectTo: '/popular'
          });
  });
