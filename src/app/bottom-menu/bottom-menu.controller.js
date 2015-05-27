(function() {   
    'use strict';

    angular.module('fm')
        .controller('BottomMCtrl', bottomenuCtrl)

        .controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
			  $scope.alert = '';
			  $scope.showListBottomSheet = function($event) {
			    $scope.alert = '';
			    $mdBottomSheet.show({
			      templateUrl: 'app/bottom-menu/bottom-sheet-list-template.html',
			      controller: 'ListBottomSheetCtrl',
			      targetEvent: $event
			    }).then(function(clickedItem) {
			      $scope.alert = clickedItem.name + ' clicked!';
			    });
			  };
			  $scope.showGridBottomSheet = function($event) {
			    $scope.alert = '';
			    $mdBottomSheet.show({
			      templateUrl: 'app/bottom-menu/bottom-sheet-grid-template.html',
			      controller: 'GridBottomSheetCtrl',
			      targetEvent: $event
			    }).then(function(clickedItem) {
			      $scope.alert = clickedItem.name + ' clicked!';
			    });
			  };
			})
			.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
			  $scope.items = [
			    { name: 'Share', icon: 'fa fa-paint-brush' },
			    { name: 'Upload', icon: 'fa fa-print' },
			    { name: 'Copy', icon: 'fa fa-thumbs-up' },
			    { name: 'Print this page', icon: 'fa fa-file-text' },
			  ];
			  $scope.listItemClick = function($index) {
			    var clickedItem = $scope.items[$index];
			    $mdBottomSheet.hide(clickedItem);
			  };
			})
			.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
			  $scope.items = [
			    { name: 'Hangout', icon: 'fa fa-cogs' },
			    { name: 'Mail', icon: 'fa fa-floppy-o' },
			    { name: 'Message', icon: 'fa fa-hand-o-up' },
			    { name: 'Copy', icon: 'fa fa-cc-paypal' },
			    { name: 'Facebook', icon: 'fa fa-codepen' },
			    { name: 'Twitter', icon: 'fa fa-dribbble' },
			  ];
			  $scope.listItemClick = function($index) {
			    var clickedItem = $scope.items[$index];
			    $mdBottomSheet.hide(clickedItem);
			  };
			});

   			bottomenuCtrl.$inject = ['$scope']

		    function bottomenuCtrl($scope) {
		        var vm = this;




		   };

})();




