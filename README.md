# angular-stickyfill
Stickyfill (position sticky polyfill) directive for Angular


To Get Started
--------------
Install via Bower: 

  `$ bower install angular-stickyfill  --save`

1. Include `angular-stickyfill.js` and `angular-stickyfill.css` (if not auto included from it's bower dependency by your build process)

   `<link rel="stylesheet" href="bower_components/angular-stickyfill/src/angular-stickyfill.css" />`
   `<script src="bower_components/angular-stickyfill/src/angular-stickyfill.js"></script>`

2. Include [Stickyfill](https://github.com/wilddeer/stickyfill):
    `<script src="path/to/stickyfill.js"></script>`  

3. Bring in the module as a dependency

   `var myApp = angular.module('myApp', ['ec.stickyfill']);`

Usage
------

Add `ec-stickyfill` to the element you would like to be position:sticky

Example:
```html
<div class="side-menu" ec-stickyfill>
  <ul>
   ...
  </ul>
</div>
```

(Optional) By default the sticky `top` is set to 0, you can override
this in your local CSS by adding the following:

Example:
```css
[ec-stickyfill] {
  top: 10px;
}
```
