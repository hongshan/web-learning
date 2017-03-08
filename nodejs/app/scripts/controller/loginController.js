define(["app"], function(app){
    app.controller('loginController', function($scope, $location, $resource) {
        $scope.hasLogin = false;

        $scope.login = function(){
            var loginResource = $resource("/login", {name:"@name", password: "@password"},
                {
                    // login: {
                    //     method : "POST",
                    // }
                });
            loginResource.get({name:"hongshan", password:"hongshan"}).$promise.then(function(data){
                $scope.hasLogin = true;
                console.log(data, "login success")
            }, function(data){
                console.log(data, "login falied");
            })
        }
    });
})