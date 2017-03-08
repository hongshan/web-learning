define(["app"], function(app){
    app.factory('userResource', function($resource) {

        var content = $resource("/user", {userID: "@userID"},
            {
            });

        return content;
    });
})

