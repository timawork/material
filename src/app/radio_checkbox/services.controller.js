(function() { 
    'use strict';

    angular.module('fm')
        .controller('servicesCtrl', serviceCtrl);

    serviceCtrl.$inject = ['$scope']

    function serviceCtrl($scope) {
        var vm = this;

        //radio
         $scope.data = {
	      group1 : 'Banana',
	      group2 : '2',
	      group3 : 'avatar-1'
	    };
	    $scope.avatarData = [{
	        id: "avatars:svg-1",
	        title: 'avatar 1',
	        value: 'avatar-1'
	      },{
	        id: "avatars:svg-2",
	        title: 'avatar 2',
	        value: 'avatar-2'
	      },{
	        id: "avatars:svg-3",
	        title: 'avatar 3',
	        value: 'avatar-3'
	    }];
	    $scope.radioData = [
	      { label: '1', value: 1 },
	      { label: '2', value: 2 },
	      { label: '3', value: '3', isDisabled: true },
	      { label: '4', value: '4' }
	    ];
	    $scope.submit = function() {
	      alert('submit');
	    };
	    $scope.addItem = function() {
	      var r = Math.ceil(Math.random() * 1000);
	      $scope.radioData.push({ label: r, value: r });
	    };
	    $scope.removeItem = function() {
	      $scope.radioData.pop();
	    };


		//checkboxes
		  $scope.data = {};
		  $scope.data.cb1 = true;
		  $scope.data.cb2 = false;
		  $scope.data.cb3 = false;
		  $scope.data.cb4 = false;
		  $scope.data.cb5 = false;

	      $scope.items = [1,2,3,4,5];
	      $scope.selected = [];
	      $scope.toggle = function (item, list) {
	        var idx = list.indexOf(item);
	        if (idx > -1) list.splice(idx, 1);
	        else list.push(item);
	      };
	      $scope.exists = function (item, list) {
	        return list.indexOf(item) > -1;
	      };


      	//switches
		$scope.data = {
		    cb1: true,
		    cb4: true,
		    cb5: false
		  };
		  $scope.onChange = function(cbState) {
		  	$scope.message = "The switch is now: " + cbState;
		  };

    };

})();
