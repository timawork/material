(function() {  
    'use strict';

    angular.module('fm')
        .controller('ToolBarsCtrl', toolbarCtrl);

    toolbarCtrl.$inject = ['$scope']

    function toolbarCtrl($scope) {
        var vm = this;

		var imagePath = 'assets/images/60.jpeg';
		  vm.todos = [];
		  for (var i = 0; i < 15; i++) {
		    vm.todos.push({
		      face: imagePath,
		      what: "Brunch this weekend?",
		      who: "Min Li Chan",
		      notes: "I'll be in your neighborhood doing errands."
		    });

	  		}
    };

})();




