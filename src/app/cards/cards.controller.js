(function() {  
    'use strict';

    angular.module('fm')
        .controller('CardsCtrl', cardsCtrl);

    cardsCtrl.$inject = ['$scope']

    function cardsCtrl($scope) {
        var vm = this;


        $scope.imagePath = 'assets/images/washedout.png';



    };

})();
