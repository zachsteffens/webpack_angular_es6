
routes.$inject = [ '$stateProvider' ];

import homeController from './home.controller';
import homeHtml from './home.html';

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: homeHtml,
            controller: homeController,
            controllerAs: 'homeCtrl'
        });
}
