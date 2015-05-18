(function() {
    'use strict';

    angular.module('fm')
        .controller('baseController', baseController);

    baseController.$inject = ['$scope', '$mdSidenav'];

    function baseController($scope, $mdSidenav) {
        var vm = this; // use vm (ViewModel) istead $scope

        $scope.title = 'Home'

        $scope.sideNavToggle = function (navId) {
        	$mdSidenav(navId).toggle()
        };
    };

})();
