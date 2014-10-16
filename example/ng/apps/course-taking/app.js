define(['angular', './../common/module', './discussion/module', './announcement/module'],
    function(angular, commonModule, discussionModule, announcementModule) {
        'use strict';

        angular.module('apps.courseTaking', [
            commonModule.name,
            discussionModule.name,
            announcementModule.name
        ]);
    }
);
