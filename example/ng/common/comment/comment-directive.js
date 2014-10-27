define(['angular'], function(angular) {
    'use strict';
    var module = angular
        .module('common.comment.commentDirective', [])
        .directive('comment', commentDirective);

    function commentDirective() {
        var directive = {
            link: link,
            templateUrl: './comment-directive.tpl.html',
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }
    }

    return module;
});