(function() {
    'use strict';

    angular.module('fm')
        .controller('buttonCtrl', buttonCtrl);

    buttonCtrl.$inject = ['$scope'];

    function buttonCtrl($scope) {
        var vm = this;

        $scope.$parent.title = 'Buttons';

        $scope.showSource = false;

        $scope.title1 = 'Button';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';

    };

})();
