(function() {
    'use strict';

    angular.module('fm')
        .controller('vehiclesCtrl', vehicleCtrl);

    vehicleCtrl.$inject = ['$scope']

    function vehicleCtrl($scope) {
        var vm = this;

        $scope.user = {
	      title: 'Developer',
	      email: 'ipsum@lorem.com',
	      firstName: '',
	      lastName: '' ,
	      company: 'Google' ,
	      address: 'London 484 str., England' ,
	      city: 'Mountain View' ,
	      state: 'CA' ,
	      biography: 'Textarea',
	      postalCode : '94043'
	    };

		$scope.project = {
		  description: 'Nuclear Missile Defense System',
		  rate: 500
		};

	    $scope.user = {
	      name: 'John Doe',
	      email: '',
	      phone: '',
	      address: 'Mountain View, CA'
	    };

    };


})();
