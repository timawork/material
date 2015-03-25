// This Is A Header
// ----------------
 
 
// This is a normal comment, that will become part of the
// annotations after running through the Docco tool. Use this
// space to describe the function or other code just below 
// this comment. For example: 
//
// The `DoSomething` method does something! It doesn't take any
// parameters... it just does something.

(function() {
    'use strict';
    angular.module('fm', [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ngResource',
            'ui.router',
            'ui.bootstrap'
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard', {
                    url: '/',
                    templateUrl: 'app/dashboard/dash.html',
                    controller: 'dashCtrl',
                    controllerAs: 'dash'
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
                });

            $urlRouterProvider.otherwise('/');
        });

})();
