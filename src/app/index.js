// MaxTrack UI-KIT
// ---------------- 
 
// UI Kit for using it in a Maxtrack projects

(function() {
    'use strict';

    angular.module('fm', [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ngResource',
            'ui.router',
            'ui.ace',
            'ngMaterial',
            'ngMessages',
        ])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('buttons', {
                    url: '/',
                    templateUrl: 'app/button/btn.html',
                    controller: 'buttonCtrl',
                    controllerAs: 'btn'
                }).state('vehicles', {
                    url: '/vehicles',
                    templateUrl: 'app/vehicles/vehicles.html',
                    controller: 'vehiclesCtrl',
                    controllerAs: 'vehicles'
                }).state('services', {
                    url: '/services',
                    templateUrl: 'app/services/services.html',
                    controller: 'servicesCtrl',
                    controllerAs: 'services'
                }).state('fuel', {
                    url: '/fuel',
                    templateUrl: 'app/fuel/fuel.html',
                    controller: 'fuelCtrl',
                    controllerAs: 'fuel'
                }).state('contacts', {
                    url: '/contacts',
                    templateUrl: 'app/contacts/contacts.html',
                    controller: 'contactCtrl',
                    controllerAs: 'contacts'
                });

            $urlRouterProvider.otherwise('/');
        });

})();
