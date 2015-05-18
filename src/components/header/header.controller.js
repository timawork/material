(function() {
    'use strict';

    angular.module('fm')
        .controller('headerCtrl', headerCtrl);

    headerCtrl.$inject = ['$scope']

    function headerCtrl($scope) {
        var vm = this; // Use vm instead of $scope

        vm.collapse = '';

        vm.collapseToggle = function() {
            vm.collapse = vm.collapse === '' ? 'in' : '';
        };

        vm.status = {
            isopen: false
        };

        vm.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.status.isopen = !vm.status.isopen;
        };
    };

})();
