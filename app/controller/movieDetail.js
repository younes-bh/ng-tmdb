angular.module("app")
  .controller("movieDetailCtrl", function(serviceMovies, $routeParams){

      self = this;
      self.currentMovie = {};
      serviceMovies.loadMovie($routeParams.id).then(function(data){
            self.currentMovie = data;
      });


  });
