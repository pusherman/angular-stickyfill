# angular-stickyfill
Stickyfill (position sticky polyfill) directive for Angular


To Get Started
--------------
Install via Bower: 

  `$ bower install angular-stickyfill  --save`

1. Include `angular-stickyfill.js` (if not auto included from it's bower dependency by your build process)

   `<script src="bower_components/angular-stickyfill/src/angular-stickyfill.js"></script>`

2. Include [Stickyfill](https://github.com/wilddeer/stickyfill):
    `<script src="path/to/stickyfill.js"></script>`  

3. Bring in the module as a dependency

   `var myApp = angular.module('myApp', ['ec.stickyfill']);`

Usage
------

Add `ec-stickyfill` to the element you would like to be position:sticky

Example:
```
<div class="side-menu" ec-stickyfill>
  <ul>
   ...
  </ul>
</div>
```

CSS:
```
.side-menu {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.side-menu:before,
.side-menu:after {
  content: '';
  display: table;
}
```
    

