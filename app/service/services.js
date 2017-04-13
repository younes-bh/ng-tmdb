angular.module("app")
  .service('serviceMovies', function($http){
    self = this;
    this.loadMovies = function(page, url){
      return $http.get(url+page).then(function(response){
        return  response.data.results;
      }, function myError(response) {
        console.log("erreur dans loadMovies get");;
    });
    };
    this.loadMovie = function(id){
      return $http.get("http://api.themoviedb.org/3/movie/"+id+"?api_key=5192eb6331a3db50b6b388ae8941edc6&language=fr-FR").then(function(response){
        return  response.data;
      }, function myError(response) {
        console.log("erreur dans loadMovie get");;
    });
    };

    //TODO : remove scope from service like whta I did in loadMovies

    this.search = function(query, page, scopeVar){
      return $http.get("http://api.themoviedb.org/3/search/movie?api_key=5192eb6331a3db50b6b388ae8941edc6&language=fr-FR&query="+ query +"&page=" + page).then(function(response){
        scopeVar.movies =  response.data.results;
        scopeVar.totalPages = response.data.total_pages;
      }, function myError(response) {
        console.log("erreur dans search movie get");;
    });
    };
    //TODO : remove scope from service like whta I did in loadMovies

    this.getTotalPages= function(url, scopeVar){
      $http.get(url+"1").then(function(response){
        scopeVar.totalPages = response.data.total_pages;
      }, function myError(response) {
        console.log("erreur dans getTotalPages get");;
    });
    };

    this.nextPage = function(url, scopeVar){
      if(scopeVar.currentPage<scopeVar.totalPages){
      scopeVar.currentPage = scopeVar.currentPage + 1;
      self.loadMovies(scopeVar.currentPage, url, scopeVar);
      }
    };

    this.previousPage = function(url, scopeVar){
      if(scopeVar.currentPage>1){
        scopeVar.currentPage = scopeVar.currentPage -1 ;
      }
      self.loadMovies(scopeVar.currentPage, url, scopeVar);
    };

    this.lastPage = function(url, scopeVar){
      scopeVar.currentPage = scopeVar.totalPages ;
      self.loadMovies(scopeVar.currentPage, url, scopeVar);
    };

    this.firstPage = function(url, scopeVar){
      scopeVar.currentPage = 1 ;
      self.loadMovies(scopeVar.currentPage, url, scopeVar);
    };

    // A supprimer this.showDetails = function(movie, scopeVar){
    //   scopeVar.currentMovie = movie;
    //
    // };

    this.hideDetails = function(movie, scopeVar){
      scopeVar.currentMovie = null;

    };


  });
