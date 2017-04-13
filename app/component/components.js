angular.module("app")
.component('movieComponent', {
    // isolated scope binding
    bindings: {
        movie: '<'
    },

    // Inline template which is binded to message variable
    // in the component controller
    templateUrl:'app/template/movie.html',
    //template : "<div > coccccco </div>",

    // The controller that handles our component logic
    controller: function () {
    }
});
