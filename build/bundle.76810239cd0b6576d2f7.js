(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}const r=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,n;return r=e,(n=[{key:"createImageTag",value:function(){var e=document.createElement("img");return e.alt="MY Image",e.classList.add("image"),e.src="images/111.jpg",e}},{key:"createTextTag",value:function(){var e=document.createElement("h2");return e.innerText="سلام دوست من ",e}},{key:"render",value:function(){var e=document.createElement("div");return e.classList.add("image-box"),e.appendChild(this.createTextTag()),e.appendChild(this.createImageTag()),e}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}());function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}const i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"createItem",value:function(e){var t=document.createElement("li");return t.innerText=e,t}},{key:"render",value:function(){var e=document.createElement("ul");return e.appendChild(this.createItem("Item 1")),e.appendChild(this.createItem("Item 2")),e.appendChild(this.createItem("Item 3")),e.appendChild(this.createItem("Item 4")),e}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}());var a=document.querySelector("#app");a.appendChild(r.render()),a.appendChild(i.render())})();