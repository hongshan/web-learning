define([
    "app",
    "ngtController",
    "loginController",
    "tagController",
    "contentController",
    "contentListController",
    "editorController",
    "mdController",
    "cssLearningController",
    ], function(app) {
        app.config(function ($routeProvider, $locationProvider) {
            console.log($locationProvider.html5Mode)
            $locationProvider.html5Mode({enabled:true, requireBase:false, rewriteLinks:true})
            $routeProvider.when('/home', {
                        templateUrl : 'views/home.html',
                        controller  : 'ngtController',
            }).when("/login", {
                redirectTo: "/login"
            }).when("/", {
                redirectTo: "/home"
            }).when("/home/content/:id", {
                templateUrl : 'views/content.html',
                controller: "ngtController",
            }).when("/home/editor", {
                templateUrl: 'views/editor.html',
                controller: 'editorController',
            }).when("/home/md", {
                templateUrl: 'views/md/mdHome.html',
                controller: 'mdController',
            }).when("/home/cssLearning", {
                templateUrl: 'views/CSSLearning/examplehome.html',
                controller: 'cssLearningController',
            }).when("/home/cssexample/:name", {
                templateUrl: function(params){console.log('hello');return 'views/CSSLearning/' + params.name + '.html'},
                controller: 'cssLearningController',
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
                url: "/home/md"
            });
            $stateProvider.state("content", {
                url: "/home/content/:id",
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
                url: '/home/cssLearning'
            }).state('cssexample',{
                params: {name: "@name"},
                url: '/home/cssexample/:name',
            })
        })

    }
);