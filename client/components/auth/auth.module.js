'use strict';

angular.module('daplacementApp.auth', [
  'daplacementApp.constants',
  'daplacementApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
