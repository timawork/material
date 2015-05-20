(function() {
    'use strict';

    angular.module('fm')
        .controller('contactCtrl', conCtrl);

	conCtrl.$inject = ['$scope', '$interval',];

    function conCtrl($scope, $interval) {
		var vm = this;

		  $scope.mode = 'query';
	      $scope.determinateValue = 10;
	      $interval(function() {
	        $scope.determinateValue += 1;
	        if ($scope.determinateValue > 100) {
	          $scope.determinateValue = 10;
	        }
	      }, 100, 0, true);
	    };

})();

