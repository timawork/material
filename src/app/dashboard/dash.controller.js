/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
(function() {
    'use strict';

    angular.module('fm')
        .controller('dashCtrl', dashCtrl);

    dashCtrl.$inject = ['$scope']

    function dashCtrl($scope) {
        var vm = this;
    };

})();
