define(['angular',
        './reply-directive',
        './comment-directive',
        './reply-service'
    ],
    function(angular, replyDirectiveModule, commentDirectiveModule, replyServiceModule) /*invoke*/ {
        "use strict";

        angular
            .module('common.comment', [
                replyDirectiveModule.name,
                commentDirectiveModule.name,
                replyServiceModule.name
            ]);
    });