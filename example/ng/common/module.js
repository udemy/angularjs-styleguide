define(['angular', './comment/module', './course-learning-goal/module'],
    function(angular, commentModule, courseLearningModule) {

        "use strict";
        return angular.module('common', [
            commentModule.name,
            courseLearningModule.name
        ]);
    });