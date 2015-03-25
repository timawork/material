'use strict';

describe('components', function() {
    var scope = {};

    beforeEach(module('fm'));

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should define array', inject(function($controller) {

        expect(scope.links).toBeUndefined();

        var controller = $controller('sidebarCtrl', {
            $scope: scope
        });

        expect(angular.isArray(controller.links)).toBeTruthy();
    }));

});
