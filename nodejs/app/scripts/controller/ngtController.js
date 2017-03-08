define(["app"], function(app){
    app.controller('ngtController', function($scope, $location, $state) {
        $scope.name = 'World';
        $scope.backHome = function(){
            $location.path("/");
        }
        console.log("ssss",$location.path())
        var path = $location.path();
        var pathStrs = path.split("/");
        console.log(pathStrs)
        if (pathStrs[1] == "home") {
            $state.go("contents");
        }
        else if (pathStrs[1] == "content") {
            $state.go("content", {id: pathStrs[2]});
        }
    });
})