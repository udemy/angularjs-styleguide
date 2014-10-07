define(['angular'], ['./discussion-api'], function(angular) {
    'use strict';

    angular.module('apps.courseTaking.discussion.discussionForm',['courseTakingApp.discussion.discussionApi'])
        .controller('DiscussionController',DiscussionController)
        .directive('discussionPane',discussionPaneDirective);

    DiscussionController.$inject = ['$scope', 'Discussion'];

    function DiscussionController($scope, Discussion) {
        $scope.discussions = Discussion.getDiscussions(this.id);
    }

    function discussionPaneDirective() {
        var directive = {
            template: '<div ng-repeat="items in discussions"></div>',
            restrict: 'EA'
        };

        return directive;
    }
});
