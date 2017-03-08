require.config({
	baseUrl: "../bower_components",
	paths: {
        "fontawesome-webfont": 'fonts/fontawesome-webfont',
		"jquery": "jquery/dist/jquery.min",
		"ng": "angular/angular.min",
        "bootstrap": "bootstrap/dist/bootstrap.min",
        "ng-route": "angular-route/angular-route.min",
        "app": "../scripts/app",
        "route": "../scripts/route",
        "ngtController": "../scripts/controller/ngtController",
        "loginController": "../scripts/controller/loginController",
        "tagController": "../scripts/controller/tagController",
        "contentController": "../scripts/controller/contentController",
        "contentListController": "../scripts/controller/contentListController",
        "editorController": "../scripts/controller/editorController",
        "mdController": "../scripts/controller/mdController",
        "dataService": "../scripts/service/dataService",
        "user": "../scripts/resource/user",
        "content": "../scripts/resource/content",
        "ng-resource": "angular-resource/angular-resource",
        "ng-ui-router": "angular-ui-router/angular-ui-router",
        "createjs": "engine/createjs-2015.11.26.min",
        "easeljs": "engine/easeljs-0.8.2.min",
        "preloadjs": "engine/preloadjs-0.6.2.min",
        "soundjs": "engine/soundjs-0.6.2.min",

        "marked"          : "md/lib/marked.min",
        "prettify"        : "md/lib/prettify.min",
        "raphael"         : "md/lib/raphael.min",
        "underscore"      : "md/lib/underscore.min",
        "flowchart"       : "md/lib/flowchart.min", 
        "jqueryflowchart" : "md/lib/jquery.flowchart.min", 
        "sequenceDiagram" : "md/lib/sequence-diagram.min",
        "katex"           : "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.1.1/katex.min",

        "editormd"     :"md/js/editormd.amd.min",
        "en"           :"md/js/languages/en", 
        "link-dialog"  :"md/js/plugins/link-dialog/link-dialog",
        "reference-link-dialog"    :"md/js/plugins/reference-link-dialog/reference-link-dialog",
        "image-dialog"    :"md/js/plugins/image-dialog/image-dialog",
        "code-block-dialog"    :"md/js/plugins/code-block-dialog/code-block-dialog",
        "table-dialog"    :"md/js/plugins/table-dialog/table-dialog",
        "emoji-dialog"    :"md/js/plugins/emoji-dialog/emoji-dialog",
        "goto-line-dialog"    :"md/js/plugins/goto-line-dialog/goto-line-dialog",
        "help-dialog"    :"md/js/plugins/help-dialog/help-dialog",
        "html-entities-dialog"    :"md/js/plugins/html-entities-dialog/html-entities-dialog", 
        "preformatted-text-dialog"    :"md/js/plugins/preformatted-text-dialog/preformatted-text-dialog"
	},
    shim: {
        "ng": {
            deps: ["jquery"],
            exports: "angular"
        },
        "bootstrap": ["jquery"],
        "ng-route": ["ng"],
        "ng-resource": ["ng"],
        "ng-ui-router": ["ng"],
        "createjs": {
            exports: "createjs"
        },

        "marked": {
            exports: "marked"
        }




    }
});
require([ "app", "route"], function(app){
    "use strict";
    angular.element().ready(function() {
        console.log("app name ", app["name"])
        angular.bootstrap(document, [app["name"]]);
    });
})

// require(["ng", "ng-route"], function(angular) {
//     "use strict";

//     require(["app", "route"], function(app) {
//             console.log(app)
//         angular.element().ready(function() {
//             angular.bootstrap(document, [app["name"]]);
//         });
//     });
// });