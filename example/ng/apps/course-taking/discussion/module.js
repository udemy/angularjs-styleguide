define(['angular', './discussion-creation', './discussion-form'], function(angular) /*invoke*/ {
  'use strict';
  angular
    .module('apps.courseTaking.discussion',[
      'apps.courseTaking.discussion.discussionForm',
      'apps.courseTaking.discussion.discussionCreation']);
});
