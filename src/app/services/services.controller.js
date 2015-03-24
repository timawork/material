(function() {
    'use strict';

    angular.module('fm')
        .controller('servicesCtrl', serviceCtrl);

    serviceCtrl.$inject = ['$scope']

    function serviceCtrl($scope) {
	var vm = this;
    };

})();
