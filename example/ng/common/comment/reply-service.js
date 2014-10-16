define(['angular'], function (angular) {
    'use strict';
   var module = angular.module('common.comment.replyService')
        .factory('ReplyService', ReplyService);

    function ReplyService() {
        return {
            doesSomething: doesSomething
        };

        function doesSomething(){}
    }
    return module;
});