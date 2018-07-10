
routes.$inject = [ '$stateProvider' ];

import homeController from './home.controller';
import homeHtml from './home.html';

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: homeHtml,
            controller: homeController,
            controllerAs: 'homeCtrl'
        });
}
