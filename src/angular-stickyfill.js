/**
 * An Angular directive for stickyfill (position sticky polyfill)
 *
 * @version v0.1.0 - 2016-08-31
 * @author Corey Wilson <corey@eastcodes.com>
 * @license Unlicense, http://unlicense.org/
 */
(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['angular', 'stickyfill'], factory);

  } else if (typeof module !== 'undefined' && typeof module.exports === 'object') {
    module.exports = factory(require('angular'), require('stickyfill'));

  } else {
    return factory(root.angular, root.Stickyfill);
  }

}(window, function (angular, stickyfill) {
  'use strict';

  if (typeof stickyfill === 'function') {
    var stickyfill = stickyfill();
  }

  var moduleName = 'ec.stickyfill';

  angular.module(moduleName, [])
    .directive('ecStickyfill', stickyfillDirective);

  function stickyfillDirective() {
    var directive = {
      link: link,
      restrict: 'A'
    };

    return directive;

    function link(scope, element, attrs) {
      if (typeof stickyfill !== 'object') {
        throw new Error('stickyfill.js not loaded')
      }

      stickyfill.add(element[0]);

      scope.$on('$destroy', function() {
        stickyfill.remove(element[0]);
      });
    }
  }

  return moduleName;
}));
