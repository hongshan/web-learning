define(["app"], function(app){
    app.service("dataService", function(tag, content){
        this.data = 0;
        this.getAllTags = function() {
            this.data = this.data + 1;
            console.log(this.data)
            return tag.getAll();
        }

        this.createTag = function() {

        }

        this.createContent = function() {

        }

        this.getContentsByTag = function() {

        }

        this.getAllContents = function() {
            return content.getAll()
        }

        this.createProject = function() {

        }

        this.cloneContent = function() {

        }

        this.cloneProject = function() {

        }

    })
    app.factory("tag", function(){
        
        var data = {};
        data.tags = [];
        data.getAll = function(){
            if (data.tags.length !== 0) {
                console.log("not first time")
                return data.tags;
            }
            else {
                console.log("first time")
                data.tags = [{name:"food"},{name:"food1"},{name:"food2"},{name:"food3"},{name:"hello ketty"},
                        {name:"我叫MT"},{name:"中文也是棒棒哒"},{name:"food3"},{name:"hello ketty"},{name:"hello ketty"},
                        {name:"hello ketty"},
                        {name:"hello ketty"},
                        {name:"hello ketty"},
                        {name:"hello ketty"},
                        {name:"hello ketty"},
                        {name:"hello ketty"},
                        {name:"hello ketty"},
                        
                        ];
            }
            console.log("i am tag factory");
            return data.tags;
        };
        data.ok = function(){
            console.log("i am ok function")
        }
        return data;
    })

    app.factory("content", function(){
        
        var data = {};
        data.contents = [];
        data.getAll = function(){
            if (data.contents.length !== 0) {
                console.log("content not first time")
                return data.contents;
            }
            else {
                console.log("content first time")
                data.contents = [{id: "1", preview:"food", title: "how to use bootstrap "},
                            {id: "12", preview:"food1", title: "what is bootstrap "},
                            {id: "13", preview:"food2", title: "how to start with angular "},
                            {id: "145", preview:"food3", title: "bootstrap "},
                            {id: "16", preview:"hello ketty", title: "bootstrap "},
                            {id: "56", preview:"我叫MT", title: "bootstrap "},
                            {id: "61", preview:"中文也是棒棒哒", title: "bootstrap "},
                            {id: "17", preview:"food3", title: "bootstrap "},
                            {id: "177", preview:"hello ketty", title: "bootstrap "},
                        ];
            }
            console.log("i am tag factory");
            return data.contents;
        };
        data.ok = function(){
            console.log("i am ok function")
        }
        return data;
    })
})