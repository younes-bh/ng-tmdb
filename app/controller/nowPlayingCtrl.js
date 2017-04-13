angular.module("app")
  .controller("nowPlayingCtrl", function(serviceMovies){
    var self = this;
    var url = "http://api.themoviedb.org/3/movie/now_playing?api_key=5192eb6331a3db50b6b388ae8941edc6&language=fr-FR&page=";
    self.currentPage = 1;
    serviceMovies.loadMovies(self.currentPage, url, self);
    serviceMovies.getTotalPages(url, self);

    self.nextPage = function(){
        serviceMovies.nextPage(url, self);
    };

    self.previousPage = function(){
      serviceMovies.previousPage(url, self);
    };

    self.lastPage = function(){
        serviceMovies.lastPage(url, self);
    };

    self.firstPage = function(){
        serviceMovies.firstPage(url, self);
    };

    self.showDetails = function(movie){
        serviceMovies.showDetails(movie, self);
    };

    self.hideDetails = function(movie){
        serviceMovies.hideDetails(movie, self);
    };

    self.search = function(query){
        serviceMovies.search(query, self.currentPage, self);
    };

    self.query = "";
    self.searchAction = function(){
        self.currentPage = 1;
        self.search(self.query);

    };


  });
