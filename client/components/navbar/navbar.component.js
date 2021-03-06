'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [/*{
    'title': 'Home',
    'state': 'main'
  },*/{
    'title': 'Projects',
    'state': 'project'
  },{
    'title': 'Designer',
    'state': 'designer.inventory'
  },{
    'title': 'Runs',
    'state': 'runs'
  },{
    'title': 'Modules',
    'state': 'custom_modules'
  }];

  isCollapsed = true;

  constructor(Auth, appConfig) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.appVersion = appConfig.version;
  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
