(function() {  
    'use strict';

    angular.module('fm')
        .controller('ToastsCtrl', toastCtrl)
    	.controller('ToastCloseCtrl', function($scope, $mdToast) {
		  $scope.closeToast = function() {
		    $mdToast.hide();
		  };
		});

    toastCtrl.$inject = ['$scope', '$mdToast', '$animate']


    function toastCtrl($scope, $mdToast, $animate) {
        var vm = this;

		 $scope.toastPosition = {
		    bottom: false,
		    top: true,
		    left: false,
		    right: true
		  };

		  $scope.getToastPosition = function() {
		    return Object.keys($scope.toastPosition)
		      .filter(function(pos) { return $scope.toastPosition[pos]; })
		      .join(' ');
		  };
		  $scope.showCustomToast = function() {
		    $mdToast.show({
		      templateUrl: '/app/toasts/toast-template.html',
		      controller: 'ToastCloseCtrl',
		      hideDelay: 6000,
		      position: $scope.getToastPosition()
		    });
		  };		  
		  $scope.showSuccessToast = function() {
		    $mdToast.show({
		      templateUrl: '/app/toasts/toast-success-template.html',
		      controller: 'ToastCloseCtrl',
		      hideDelay: 6000,
		      position: $scope.getToastPosition()
		    });
		  };		  
		  $scope.showWarningToast = function() {
		    $mdToast.show({
		      templateUrl: '/app/toasts/toast-warn-template.html',
		      controller: 'ToastCloseCtrl',
		      hideDelay: 6000,
		      position: $scope.getToastPosition()
		    });
		  };
		  $scope.showSimpleToast = function() {
		    $mdToast.show(
		      $mdToast.simple()
		      	.content('Simple Toast!')
		        .position($scope.getToastPosition())
		        .hideDelay(3000)
		    );
		  };
		  $scope.showActionToast = function() {
		    var toast = $mdToast.simple()
		          .content('Action Toast!')
		          .action('OK')
		          .highlightAction(false)
		          .position($scope.getToastPosition());
		    $mdToast.show(toast).then(function() {
		      alert('You clicked \'OK\'.');
		    });
		  };

		  $scope.closeToast = function() {
		  	console.log("close")
		    $mdToast.hide();
		  };




    };

})();



