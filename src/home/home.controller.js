export default class homeController {
    constructor($q) {
        'ngInject';
        this.controllerName = 'home controller';
    }

    getName() {
        return this.controllerName;
    }
}

// homeController.$inject[ '$q' ];

