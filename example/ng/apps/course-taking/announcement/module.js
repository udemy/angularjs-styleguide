define(['angular', './announcement-creation', './announcement-form'], function(angular) {
  'use strict';
  angular
    .module('apps.courseTaking.announcement',[
      'apps.courseTaking.announcement.announcementForm',
      'apps.courseTaking.announcement.announcementCreation']);
});
