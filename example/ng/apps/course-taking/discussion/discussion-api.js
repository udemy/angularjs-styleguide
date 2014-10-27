define(['angular'], function(angular) {
    "use strict";

    // StudentLearningGoalApi factory
    var module = angular.module('apps.courseTaking.discussion.discussionApi')
        .factory('Discussion', DiscussionApi);

    DiscussionApi.$inject = ['$http'];

    function DiscussionApi($http) {

        return {
            getDiscussions: getDiscussions
        };

        function getDiscussions(id) {
            return $http.get('/api/' + id + '/discussions')
                .then(getDiscussionsComplete)
                .catch(getFailed);
        }

        function getDiscussionsComplete(response) {
            return response.data.results;
        }

        function getFailed(error) {
        }
    }

    return module;
});
