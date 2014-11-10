'use strict';

window.caskCapsulesApp.directive('caskDropDown', function () {
    var OPENED_STATE = 'open';

    return {
        restrict: 'AE',
        templateUrl: 'components/dropdown/dropdown.html',
        transclude: true,
        replace: true,
        scope: {
            title: '@'
        },
        link: function link($scope, $element, $attrs) {
            $scope.onHeaderClick = function () {
                $element.toggleClass(OPENED_STATE);
            };
        }
    };
});
