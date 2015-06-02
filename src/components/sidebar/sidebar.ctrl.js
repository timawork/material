(function() {
    'use strict';

    angular.module('fm')
        .controller('sidebarCtrl', sidebarCtrl);

    sidebarCtrl.$inject = ['$scope'];     

    function sidebarCtrl($scope) {
        var vm = this; // use vm (ViewModel) istead $scope

        vm.links = [
            {
                name: 'All elements',
                items: [{
                        icon: 'truck',
                        name: 'Autocomplete',
                        link: '#/autocomplete'        
                    },  {
                        icon: 'dot-circle-o',
                        name: 'Buttons',
                        link: '#/'
                    },  {
                        icon: 'truck',
                        name: 'Bottom Menu',
                        link: '#/bottom-menu'        
                    },  {
                        icon: 'truck',
                        name: 'Chips',
                        link: '#/chips'
                    },  {
                        icon: 'truck',
                        name: 'Cards',
                        link: '#/cards'
                    },  {
                        icon: 'truck',
                        name: 'Devider',
                        link: '#/devider'        
                    },  {
                        icon: 'truck',
                        name: 'Form Elements',
                        link: '#/form_elements'
                    },  {
                        icon: 'truck',
                        name: 'Lists',
                        link: '#/list'
                    },  {
                        icon: 'truck',
                        name: 'Modals, dialog',
                        link: '#/modals'
                    },  {
                        icon: 'truck',
                        name: 'Pagination',
                        link: '#/pagination'  
                    },  {
                        icon: 'truck',
                        name: 'Progress bars, circles',
                        link: '#/progress_bars'
                    }, {
                        icon: 'wrench',
                        name: 'Radio, checkboxes, switches',
                        link: '#/radio_checkbox'
                    },   {
                        icon: 'truck',
                        name: 'Select, dropdown',
                        link: '#/select'
                    },  {
                        icon: 'truck',
                        name: 'Scroll content',
                        link: '#/scroll-content'
                    },  {
                        icon: 'truck',
                        name: 'Sidenav',
                        link: '#/sidenav'
                    },  {
                        icon: 'truck',
                        name: 'Slider',
                        link: '#/slider'        
                    }, {
                        icon: 'truck',
                        name: 'Subheader, Fixed subheaders',
                        link: '#/subheader'
                    },  {
                        icon: 'truck',
                        name: 'Tabs',
                        link: '#/tabs'  
                    },  {
                        icon: 'truck',
                        name: 'Toolbars',
                        link: '#/toolbar'         
                    },  {
                        icon: 'truck',
                        name: 'Tooltips',
                        link: '#/tooltips'  
                    },  {
                        icon: 'truck',
                        name: 'Toasts',
                        link: '#/toasts'  
                    },  {
                        icon: 'truck',
                        name: 'Whiteframes',
                        link: '#/whiteframes' 
                    }]
            },
            {
                name: 'All Charts',
                items:  [{
                        icon: 'truck',
                        name: 'Basic Line',
                        link: '#/chart-baseline'        
                    }]
            }
        ];       
    };
})();
