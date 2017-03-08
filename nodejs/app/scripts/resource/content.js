define(["app"], function(app){
    app.factory('contentResource', function($resource) {

        var content = $resource("/content/:contentID", {contentID: "@contentID"},
            {
            });

        return content;
    });
})