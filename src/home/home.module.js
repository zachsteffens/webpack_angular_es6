import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './home.routes';
import homeController from './home.controller';
// import service from './list/list.service';

export default angular.module('app.home', [ uirouter ])
    .config(routes)
    .controller('homeController', homeController)
    .name;
