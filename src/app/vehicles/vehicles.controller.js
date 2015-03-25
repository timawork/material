(function() {
    'use strict';

    angular.module('fm')
        .controller('vehiclesCtrl', vehicleCtrl);

    vehicleCtrl.$inject = ['$scope']

    function vehicleCtrl($scope) {
        var vm = this;
    };

})();
