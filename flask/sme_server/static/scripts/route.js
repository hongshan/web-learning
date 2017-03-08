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
                        templateUrl : 'static/views/home.html',
                        controller  : 'ngtController',
            }).when("/login", {
                redirectTo: "/login"
            }).when("/", {
                redirectTo: "/home"
            }).when("/content/:id", {
                templateUrl : 'static/views/content.html',
                controller: "ngtController",
            }).when("/editor", {
                templateUrl: 'static/views/editor.html',
                controller: 'editorController',
            }).when("/md", {
                templateUrl: 'static/views/md/mdHome.html',
                controller: 'mdController',
            }).when("/cssLearning", {
                templateUrl: 'static/views/CSSLearning/example1.html',
                controller: 'contentListController',
            })
        })
        app.config(function($stateProvider){
            $stateProvider.state("contents", {
                views:{
                    "contents.tag":{
                        templateUrl: 'static/views/tags.html',
                        controller: 'tagController',
                    },
                    "contents" : {
                        templateUrl : 'static/views/contents.html',
                        controller: "contentListController",
                    },
                    "create" : {
                        templateUrl : 'static/views/create.html',
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
                        templateUrl: 'static/views/tags.html',
                        controller: 'tagController',
                    },
                    "contentDetails" : {
                        templateUrl: 'static/views/contentDetails.html',
                        controller: "contentController",
                    }
                }
            }).state('CSSLearning',{
                url: '/cssLearning'
            })
        })

    }
);