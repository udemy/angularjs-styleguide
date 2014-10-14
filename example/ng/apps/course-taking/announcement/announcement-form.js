define(['angular'], ['./announcement-api'], function(angular, announcementApiModule) {
    'use strict';

    var module = angular.module('apps.courseTaking.announcement.announcementForm',
        [announcementApiModule.name])
        .controller('AnnouncementController', AnnouncementController)
        .directive('announcementPane', announcementPaneDirective);

    AnnouncementController.$inject = ['$scope', 'Announcement'];

    function AnnouncementController($scope, Announcement) {
        $scope.announcements = Announcement.getAnnouncements();
    }

    function announcementPaneDirective() {
        var directive = {
            template: '<div ng-repeat="items in announcements"></div>',
            restrict: 'EA'
        };

        return directive;
    }

    return module;
});
