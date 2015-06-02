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
            'ngMessages'
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
                    url: '/scroll-content',
                    templateUrl: 'app/scroll-content/scroll-content.html',
                    controller: 'ScrollContCtrl',
                    controllerAs: 'scroll-content'                
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
                }).state('subheader', {
                    url: '/subheader',
                    templateUrl: 'app/subheader/subheader.html',
                    controller: 'SubheadersCtrl',
                    controllerAs: 'subheader'
                }).state('toolbar', {
                    url: '/toolbar',
                    templateUrl: 'app/toolbars/toolbar.html',
                    controller: 'ToolBarsCtrl',
                    controllerAs: 'toolbar'                
                }).state('tooltip', {
                    url: '/tooltips',
                    templateUrl: 'app/tooltips/tooltips.html',
                    controller: 'TooltipsCtrl',
                    controllerAs: 'tooltips'   
                }).state('whiteframes', {
                    url: '/whiteframes',
                    templateUrl: 'app/whiteframes/whiteframes.html',
                    controller: 'WhiteframesCtrl',
                    controllerAs: 'whiteframes'                
                }).state('toasts', {
                    url: '/toasts',
                    templateUrl: 'app/toasts/toasts.html',
                    controller: 'ToastsCtrl',
                    controllerAs: 'toasts'
                }).state('sidenav', {
                    url: '/sidenav',
                    templateUrl: 'app/sidenav/sidenav.html',
                    controller: 'SidenavsCtrl',
                    controllerAs: 'sidenav'
                }).state('autocomplete', {
                    url: '/autocomplete',
                    templateUrl: 'app/autocomplete/autocomplete.html',
                    controller: 'PageCtrl',
                    controllerAs: 'autocomplete'
                }).state('pagination', {
                    url: '/pagination',
                    templateUrl: 'app/pagination/pagination.html',
                    controller: 'DemoCtrl',
                    controllerAs: 'pagination'                
                }).state('line-charts', {
                    url: '/line-charts',
                    templateUrl: 'app/line-charts/line-charts.html',
                    controller: 'ChartBaselineCtrl',
                    controllerAs: 'line-charts' 
                }).state('area-charts', {
                    url: '/area-charts',
                    templateUrl: 'app/area-charts/area-charts.html',
                    controller: 'AreaChartCtrl',
                    controllerAs: 'area-charts'
                }).state('column-bar-charts', {
                    url: '/column-bar-charts',
                    templateUrl: 'app/column-bar-charts/column-bar-charts.html',
                    controller: 'ColBarCtrl',
                    controllerAs: 'column-bar-charts'
                });

            $urlRouterProvider.otherwise('/');
        });

})();
