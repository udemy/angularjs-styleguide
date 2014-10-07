define(['angular', './comment/module', './course-learning-goal/module'],
    function (angular){
        "use strict";
        angular.module('common', [
            'common.comment',
            'common.courseLearningGoal'
        ]);
    });