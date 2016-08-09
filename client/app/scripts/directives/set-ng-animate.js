'use strict';

/**
 * @ngdoc function
 * @name app.directive:setNgAnimate
 * @description
 * # uiScroll
 * Directive of the app
 */
angular.module('app')
  .directive('setNgAnimate', ['$animate', function ($animate) {
  return {
      link: function ($scope, $element, $attrs) {
          $scope.$watch( function() {
              return $scope.$eval($attrs.setNgAnimate, $scope);
          }, function(valnew, valold){
              $animate.enabled(!!valnew, $element);
          });
      }
  };
}]);
