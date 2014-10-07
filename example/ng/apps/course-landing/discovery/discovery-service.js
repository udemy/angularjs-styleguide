define(['angular'], function (angular) {
    'use strict';
    angular.module('apps.courseLanding.discovery.DiscoveryService')
        .factory('DiscoveryService', DiscoveryService);

    function DiscoveryService() {
        return {
            doesSomething: doesSomething
        };

        function doesSomething() {

        }
    }
});