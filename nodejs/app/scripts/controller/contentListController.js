define(["app"], function(app){
    app.controller('contentListController', function($scope, $state, $resource, $view, $stateParams, dataService) {
        $scope.name = "content";
        $scope.currentTag = "hello"
        console.log($stateParams)
        $scope.contents = dataService.getAllContents();
    });
})