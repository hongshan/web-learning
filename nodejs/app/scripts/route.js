define([
    "app",
    "ngtController",
    "loginController",
    "tagController",
    "contentController",
    "contentListController",
    "editorController",
    "mdController",
    "contentListController",
    ], function(app) {
        app.config(function ($routeProvider) {
            $routeProvider.when('/home', {
                        templateUrl : 'views/home.html',
                        controller  : 'ngtController',
            }).when("/login", {
                redirectTo: "/login"
            }).when("/", {
                redirectTo: "/home"
            }).when("/content/:id", {
                templateUrl : 'views/content.html',
                controller: "ngtController",
            }).when("/editor", {
                templateUrl: 'views/editor.html',
                controller: 'editorController',
            }).when("/md", {
                templateUrl: 'views/md/mdHome.html',
                controller: 'mdController',
            }).when("/cssLearning", {
                templateUrl: 'views/CSSLearning/example1.html',
                controller: 'contentListController',
            })
        })
        app.config(function($stateProvider){
            $stateProvider.state("contents", {
                views:{
                    "contents.tag":{
                        templateUrl: 'views/tags.html',
                        controller: 'tagController',
                    },
                    "contents" : {
                        templateUrl : 'views/contents.html',
                        controller: "contentListController",
                    },
                    "create" : {
                        templateUrl : 'views/create.html',
                    },
                }
            })
            $stateProvider.state("md",{
                url: "/md"
            });
            $stateProvider.state("content", {
                url: "content/:id",
                params: {id:"@id", details:{}},
                views: {
                    "content.tag": {
                        templateUrl: 'views/tags.html',
                        controller: 'tagController',
                    },
                    "contentDetails" : {
                        templateUrl: 'views/contentDetails.html',
                        controller: "contentController",
                    }
                }
            }).state('CSSLearning',{
                url: '/cssLearning'
            })
        })

    }
);