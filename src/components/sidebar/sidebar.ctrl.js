(function() {
    'use strict';

    angular.module('fm')
        .controller('sidebarCtrl', sidebarCtrl);

    sidebarCtrl.$inject = ["$scope"];

    function sidebarCtrl($scope) {
        var vm = this; // use vm (ViewModel) istead $scope

        vm.links = [{
            icon: "dashboard",
            name: "Dashboard",
            link: "#/"
        }, {
            icon: "truck",
            name: "Vehicles",
            link: "#/vehicles"
        }, {
            icon: "wrench",
            name: "Services",
            link: "#/services"
        }, {
            icon: "bomb",
            name: "Fuel",
            link: "#/fuel"
        }, {
            icon: "users",
            name: "Contacts",
            link: "#/contacts"
        }, ];
    };
})();
