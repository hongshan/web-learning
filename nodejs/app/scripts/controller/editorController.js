define(["app",  "createjs"], function(app){

    app.controller('editorController', function($scope, $location, $state) {

        function loadHandler() {
      
         var instance = createjs.Sound.play("sound");  // play using id.  Could also use full sourcepath or event.src.
         instance.on("complete", function(){
            console.log("play over")
         }, this);
         instance.volume = 0.5;
        }

        console.log("createjs", createjs)
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.on("fileload", loadHandler, this);

        createjs.Sound.registerSound("sounds/1.mp3", "sound");
        
        $scope.play = function(){
            createjs.Sound.play("sound");
        }

        $scope.paintPlayer = function(){
            console.log("hello init")
            var stage = new createjs.Stage("playerCanvas");
            stage.mouseMoveOutside = true; 
            for (var i = $scope.objs.length - 1; i >= 0; i--) {                
                var circle = new createjs.Shape();
                circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, i * 10, 50);
                $scope.objs[i].content = circle;
                var dragger = new createjs.Container();
                dragger.x = dragger.y = 50;
                dragger.addChild(circle);
                stage.addChild(dragger);
                dragger.on("pressmove", function(evt) {
                    evt.currentTarget.x = evt.stageX;
                    evt.currentTarget.y = evt.stageY;
                    stage.update();
                });
                dragger.on("pressup", function(evt) { console.log("up"); });
            };
            
            stage.update();
        }
        $scope.name = "editor controller"
        $scope.objs= [];
        $scope.paintPlayer();
        $scope.addNewObj = function(){
            obj = {name: "new one", content: {}}
            $scope.objs.push(obj)  
            $scope.paintPlayer();
        };
    });
})