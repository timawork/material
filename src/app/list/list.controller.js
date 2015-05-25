(function() { 
    'use strict';

    angular.module('fm')
        .controller('listsCtrl', selectCtrl);

    selectCtrl.$inject = ['$scope', '$mdDialog' ]


    function selectCtrl($scope, $mdDialog) {
        var vm = this;



	   var imagePath = 'assets/images/60.jpeg';
	    $scope.phones = [
	      { type: 'Home', number: '(555) 251-1234' },
	      { type: 'Cell', number: '(555) 786-9841' },
	    ];
	    $scope.todos = [
	      {
	        face : imagePath,
	        what: 'Brunch this weekend?',
	        who: 'Min Li Chan',
	        when: '3:08PM',
	        notes: " I'll be in your neighborhood doing errands"
	      },
	      {
	        face : imagePath,
	        what: 'Brunch this weekend?',
	        who: 'Min Li Chan',
	        when: '3:08PM',
	        notes: " I'll be in your neighborhood doing errands"
	      },
	      {
	        face : imagePath,
	        what: 'Brunch this weekend?',
	        who: 'Min Li Chan',
	        when: '3:08PM',
	        notes: " I'll be in your neighborhood doing errands"
	      },
	      {
	        face : imagePath,
	        what: 'Brunch this weekend?',
	        who: 'Min Li Chan',
	        when: '3:08PM',
	        notes: " I'll be in your neighborhood doing errands"
	      },
	      {
	        face : imagePath,
	        what: 'Brunch this weekend?',
	        who: 'Min Li Chan',
	        when: '3:08PM',
	        notes: " I'll be in your neighborhood doing errands"
	      },
	    ];


	    //lists with checkboxes

	      $scope.toppings = [
		    { name: 'Pepperoni', wanted: true },
		    { name: 'Sausage', wanted: false },
		    { name: 'Black Olives', wanted: true },
		    { name: 'Green Peppers', wanted: false }
		  ];
		  $scope.settings = [
		    { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'fa fa-wifi', enabled: true },
		    { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'fa fa-forumbee', enabled: false },
		  ];
		  $scope.messages = [
		    {id: 1, title: "Message A", selected: false},
		    {id: 2, title: "Message B", selected: true},
		    {id: 3, title: "Message C", selected: true},
		  ];
		  $scope.people = [
		    { name: 'Janet Perkins', img: 'assets/images/100-1.jpeg', newMessage: true },
		    { name: 'Mary Johnson', img: 'assets/images/100-1.jpeg', newMessage: false },
		    { name: 'Peter Carlsson', img: 'assets/images/100-1.jpeg', newMessage: false }
		  ];
		  $scope.goToPerson = function(person, event) {
		    $mdDialog.show(
		      $mdDialog.alert()
		        .title('Navigating')
		        .content('Inspect ' + person)
		        .ariaLabel('Person inspect demo')
		        .ok('Neat!')
		        .targetEvent(event)
		    );
		  };
		  $scope.navigateTo = function(to, event) {
		    $mdDialog.show(
		      $mdDialog.alert()
		        .title('Navigating')
		        .content('Imagine being taken to ' + to)
		        .ariaLabel('Navigation demo')
		        .ok('Neat!')
		        .targetEvent(event)
		    );
		  };
		  $scope.doSecondaryAction = function(event) {
		    $mdDialog.show(
		      $mdDialog.alert()
		        .title('Secondary Action')
		        .content('Secondary actions can be used for one click actions')
		        .ariaLabel('Secondary click demo')
		        .ok('Neat!')
		        .targetEvent(event)
		    );
		  };



};

})();
