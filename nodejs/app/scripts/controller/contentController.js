define(["app"], function(app){
    app.controller('contentController', function($scope, $stateParams, $resource, $state) {
        $scope.title = $stateParams.details.title;
        $scope.details = $stateParams.details.preview;
        console.log($stateParams, "stateParams")
    });
})