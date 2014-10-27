define(['angular'], function(angular){
    "use strict";

    // StudentLearningGoalApi factory
    var module = angular.module('common.courseLearningGoal.StudentLearningGoalApi', [])
      .factory('StudentLearningGoal', StudentLearningGoalApi);

    StudentLearningGoalApi.$inject = ['$http'];

    function StudentLearningGoalApi($http) {
      return {
        getGoals: getGoals
      };

      function getGoals() {
        return $http.get('/api/goals')
          .then(getGoalsComplete)
          .catch(getFailed);
      }

      function getGoalsComplete(response) {
        return response.data.results;
      }

      function getFailed(error) {
      }
    }

    return module;
});