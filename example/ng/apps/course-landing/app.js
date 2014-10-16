define(['angular', './discovery/module'],
    function(angular, discoveryModule) {
        'use strict';

        return module = angular.module('apps.courseLanding', [
            discoveryModule.name
        ]);
    });
