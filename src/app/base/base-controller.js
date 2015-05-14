(function() {
    'use strict';

    angular.module('fm')
        .controller('baseController', baseController);

    baseController.$inject = ['$scope'];

    function baseController($scope) {
        var vm = this; // use vm (ViewModel) istead $scope

        $scope.title = 'Home'

    };

})();
