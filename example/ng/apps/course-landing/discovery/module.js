define(['angular', './discovery-directive', './discovery-service'],
    function(angular, discoveryDirectiveModule, discoveryServiceModule) {
        'use strict';

        return angular
            .module('courseLanding.discovery', [
                discoveryDirectiveModule.name,
                discoveryServiceModule.name
            ]);
    }
);