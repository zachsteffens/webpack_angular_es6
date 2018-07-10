import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './notHome.routes';
import controller from './notHome.controller';
// import service from './list/list.service';

export default angular.module('app.notHome', [ uirouter ])
    .config(routes)
    .controller('notHomeController', controller)
    .name;
