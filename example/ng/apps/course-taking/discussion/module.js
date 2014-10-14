define(['angular', './discussion-creation', './discussion-form'],
    function(angular, discussionCreationModule, discussionFormModule) {
        'use strict';
        return angular
            .module('apps.courseTaking.discussion', [
                discussionCreationModule.name,
                discussionFormModule.name
            ]);
    });
