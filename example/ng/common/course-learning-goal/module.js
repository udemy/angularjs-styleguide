define(['angular', './learning-goal', './student-learning-api', './course-learning-api'],

    function(angular, learningGoalModule, studentLearningApiModule, courseLearningApiModule) {
        'use strict';

        return angular
            .module('common.courseLearningGoal', [
                learningGoalModule.name,
                studentLearningApiModule.name,
                courseLearningApiModule.name
            ]);
    });