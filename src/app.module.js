import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';
import home from './home/home.module';

export const app = angular.module('app', [uirouter, home])
    .config(routes);
