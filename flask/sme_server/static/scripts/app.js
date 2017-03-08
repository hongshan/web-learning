define([
    "ng",
    "ng-route",
    "ng-resource",
    "ng-ui-router",
    ], function(angular) {
        var app = angular.module("ngt", ['ngRoute', 'ngResource', 'ui.router']);
        return app;
    }
);