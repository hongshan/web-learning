define(["app", "dataService"], function(app){
    app.controller('tagController', function($scope, $location, $resource, $state, dataService) {
        $scope.name="tag"
        $scope.tags = dataService.getAllTags();
        $scope.editMode = false;

        $scope.currentTag = $scope.tags[0];
        
        $scope.selectTag = function(tag){
            $scope.currentTag = tag;
            $location.path("/home");
            $state.go("contents", tag);
        }

        $scope.mouseDown = function(){
            console.log("mouseDown");
            var showDeleteIcon = function(){
                console.log("show delete icon")
                $scope.editMode = true;
                $scope.$apply()
            }
            $scope.editTimer = setTimeout(showDeleteIcon, 1000)
        }

        $scope.mouseUp = function()
        {
            clearTimeout($scope.editTimer);
            console.log("mouseUp");
        }
    });
})