import angular from 'angular'
export const someEnum = {
    value0: 0,
    value1: 1
}
export default angular.module('constantDefs', []).constant('someEnum', someEnum).name
