define(['angular', './announcement-creation', './announcement-form'],
    function(angular, announcementCreationModule, announcementFormModule) {
        'use strict';
       return angular
            .module('apps.courseTaking.announcement', [
                announcementCreationModule.name,
                announcementFormModule.name]);
    });
