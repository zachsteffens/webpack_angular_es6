
routes.$inject = [ '$stateProvider' ];

import notHomeController from './notHome.controller';
import notHomeHtml from './notHome.html';

export default function routes($stateProvider) {
    $stateProvider
        .state('notHome', {
            url: '/notHome',
            template: notHomeHtml,
            controller: notHomeController,
            controllerAs: 'notHomeCtrl'
        });
}
