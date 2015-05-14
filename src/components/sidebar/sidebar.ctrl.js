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
            name: 'Vehicles',
            link: '#/vehicles'
        }, {
            icon: 'wrench',
            name: 'Services',
            link: '#/services'
        }, {
            icon: 'bomb',
            name: 'Fuel',
            link: '#/fuel'
        }];
    };
})();
