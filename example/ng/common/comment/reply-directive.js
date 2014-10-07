define(['angular'], function (angular) {
    "use strict";
    angular
        .module('common.comment.replyDirective', [])
        .directive('reply', replyDirective);

    function replyDirective() {
        var directive = {
            link: link,
            templateUrl: './reply-directive.tpl.html',
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }
    }
});