define(['angular', './announcement-creation', './announcement-form'], function(angular) {
  'use strict';
  angular
    .module('courseTaking.announcement',[
      'courseTakingApp.announcement.announcementForm',
      'courseTakingApp.announcement.announcementCreation']);
});
