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
                    url: '/form_elements',
                    templateUrl: 'app/form_elements/vehicles.html',
                    controller: 'vehiclesCtrl',
                    controllerAs: 'vehicles'
                }).state('services', {
                    url: '/radio_checkbox',
                    templateUrl: 'app/radio_checkbox/services.html',
                    controller: 'servicesCtrl',
                    controllerAs: 'services'
                }).state('fuel', {
                    url: '/fuel',
                    templateUrl: 'app/fuel/fuel.html',
                    controller: 'fuelCtrl',
                    controllerAs: 'fuel'
                }).state('contacts', {
                    url: '/progress_bars',
                    templateUrl: 'app/progress_bars/contacts.html',
                    controller: 'contactCtrl',
                    controllerAs: 'contacts'
                }).state('chips', {
                    url: '/chips',
                    templateUrl: 'app/chips/chips.html',
                    controller: 'chipsesCtrl',
                    controllerAs: 'chips'
                }).state('select', {
                    url: '/select',
                    templateUrl: 'app/select-dropdown/select.html',
                    controller: 'selectsCtrl',
                    controllerAs: 'select'
                }).state('modals', {
                    url: '/modals',
                    templateUrl: 'app/modals/modals.html',
                    controller: 'modalsCtrl',
                    controllerAs: 'modals'
                 }).state('list', {
                    url: '/list',
                    templateUrl: 'app/list/list.html',
                    controller: 'listsCtrl',
                    controllerAs: 'list'
                }).state('devider', {
                    url: '/devider',
                    templateUrl: 'app/deviders/devider.html',
                    controller: 'devidersCtrl',
                    controllerAs: 'devider'
                }).state('cards', {
                    url: '/cards',
                    templateUrl: 'app/cards/cards.html',
                    controller: 'CardsCtrl',
                    controllerAs: 'cards'                
                }).state('toolbars', {
                    url: '/toolbars',
                    templateUrl: 'app/toolbars/toolbar.html',
                    controller: 'ToolbarCtrl',
                    controllerAs: 'toolbars'                
                }).state('tabs', {
                    url: '/tabs',
                    templateUrl: 'app/tabs/tabs.html',
                    controller: 'TabsCtrl',
                    controllerAs: 'tabs'
                }).state('bottom-menu', {
                    url: '/bottom-menu',
                    templateUrl: 'app/bottom-menu/bottom-menu.html',
                    controller: 'BottomMCtrl',
                    controllerAs: 'bottom-menu'                
                }).state('slider', {
                    url: '/slider',
                    templateUrl: 'app/slider/slider.html',
                    controller: 'SlidersCtrl',
                    controllerAs: 'slider'
                });

            $urlRouterProvider.otherwise('/');
        });

})();
