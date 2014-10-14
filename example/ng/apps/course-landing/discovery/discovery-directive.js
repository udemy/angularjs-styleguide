define(['angular'], function(angular) {
    'use strict';
    var module = angular
        .module('apps.courseLanding.discovery.discoveryDirective', [])
        .directive('discovery', discoveryDirective);

    function discoveryDirective(){
        var directive = {
            link: link,
            templateUrl: './discovery.tpl.html',
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }
    }
    return module;
});