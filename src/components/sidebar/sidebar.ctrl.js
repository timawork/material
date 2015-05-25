(function() {
    'use strict';

    angular.module('fm')
        .controller('sidebarCtrl', sidebarCtrl);

    sidebarCtrl.$inject = ['$scope'];

    function sidebarCtrl($scope) {
        var vm = this; // use vm (ViewModel) istead $scope

        vm.links = [{
            icon: 'dot-circle-o',
            name: 'Buttons',
            link: '#/'
        }, {
            icon: 'truck',
            name: 'Form Elements',
            link: '#/form_elements'
        }, {
            icon: 'wrench',
            name: 'Radio, checkboxes, switches',
            link: '#/radio_checkbox'
        }, {
            icon: 'truck',
            name: 'Progress bars, circles',
            link: '#/progress_bars'
        }, {
            icon: 'truck',
            name: 'Chips',
            link: '#/chips'
        }, {
            icon: 'truck',
            name: 'modals, dialog',
            link: '#/modals'
        }, {
            icon: 'truck',
            name: 'Select, dropdown',
            link: '#/select'
        }, {
            icon: 'truck',
            name: 'Lists',
            link: '#/list'
        }, {
            icon: 'truck',
            name: 'Devider',
            link: '#/devider'
        }];
    };
})();
