define(['angular', './discussion/module', './announcement/module'],
  function(angular){
    'use strict';

    angular.module('apps.courseTaking', [
      'apps.courseTaking.announcement',
      'apps.courseTaking.discussion'
    ]);
  });
