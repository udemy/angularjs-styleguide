define([ 'angular', './student-learning-api', './course-learning-api'],
    function(angular, studentLearningApiModule, courseLearningApiModule) {
        "use strict";

        var module = angular
            .module('common.courseLearningGoal.learningGoal', [
                studentLearningApiModule.name,
                courseLearningApiModule.name
            ])
            .controller('LearningGoalController', LearningGoalController);

        LearningGoalController.$inject = ['$scope', 'CourseLearningGoal', 'StudentLearningGoal'];

        function LearningGoalController($scope, CourseLearningGoal, StudentLearningGoal){}

        return module;
    });