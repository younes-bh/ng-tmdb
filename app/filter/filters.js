angular.module("app")
.filter('rating', function() {
  return function (score, caract="★") {
    var stars = "";
    for(i=0;i<score;i++){
      stars = stars + caract;
    }
    return stars;
  };
});
