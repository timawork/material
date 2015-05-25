(function() {  
    'use strict';

    angular.module('fm')
        .controller('selectsCtrl', selectCtrl);

    selectCtrl.$inject = ['$scope', '$timeout']

    function selectCtrl($scope, $timeout) {
        var vm = this;



	  $scope.toppings = [
	    { category: 'meat', name: 'Pepperoni' },
	    { category: 'meat', name: 'Sausage' },
	    { category: 'meat', name: 'Ground Beef' },
	    { category: 'meat', name: 'Bacon' },
	    { category: 'veg', name: 'Mushrooms' },
	    { category: 'veg', name: 'Onion' },
	    { category: 'veg', name: 'Green Pepper' },
	    { category: 'veg', name: 'Green Olives' },
	  ];
	  
 		$scope.clearValue = function() {
	    	console.log($scope.myModel)
		    $scope.myModel = undefined;
	    };

	    $scope.save = function() {
		    alert('Form was valid!');
	    };

		$scope.users = [];
    	return $timeout(function() {
	      $scope.users = [
	        { id: 1, name: 'Scooby Doo' },
	        { id: 2, name: 'Shaggy Rodgers' },
	        { id: 3, name: 'Fred Jones' },
	        { id: 4, name: 'Daphne Blake' },
	        { id: 5, name: 'Velma Dinkley' },
	      ];
	    }, 650);

	   



    };

})();
