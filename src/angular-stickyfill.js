/**
 * An Angular directive for stickyfill (position sticky polyfill)
 * @version v0.0.3 - 2016-03-04
 * @author Corey Wilson <corey@eastcodes.com>
 * @license Unlicense, http://unlicense.org/
 */
(function (window, angular) {
  'use strict';

  angular.module('ec.stickyfill', [])
    .directive('ecStickyfill', stickyFill);

  function stickyFill() {
    var directive = {
      link: link,
      restrict: 'A'
    };

    return directive;

    function link(scope, element, attrs) {
      if (typeof window.Stickyfill !== 'object') {
        throw new Error('stickyfill.js not loaded')
      }

      window.Stickyfill.add(element[0]);

      scope.$on('$destroy', function() {
        window.Stickyfill.remove(element[0]);
      });
    }
  }
})(window, window.angular);
