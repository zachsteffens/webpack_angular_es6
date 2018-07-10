import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';
import home from './home/home.module';
import notHome from './notHome/notHome.module';
import qprovider from './q.config';
import appconstants from './app.constants';
import apprun from './app.run';

// demonstrates how to include multiple configs (from the config.js)
// appconstants demonstrates how to include app wide constants.
// apprun demonstrates angular app run functionality
export const app = angular.module('app', [uirouter, home, notHome, appconstants])
    .config(routes)
    .config(qprovider)
    .run(apprun);

