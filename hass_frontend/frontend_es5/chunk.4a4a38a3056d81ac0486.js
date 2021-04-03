/*! For license information please see chunk.4a4a38a3056d81ac0486.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2604],{49075:function(n,t,e){"use strict";e.d(t,{S:function(){return a},B:function(){return u}});e(65233);var r=e(51644),o=e(26110),i=e(84938),a={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(n){n&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=n)},_createRipple:function(){var n=i.o._createRipple();return n.id="ink",n.setAttribute("center",""),n.classList.add("circle"),n}},u=[r.P,o.a,i.o,a]},84938:function(n,t,e){"use strict";e.d(t,{o:function(){return i}});e(65233),e(60748);var r=e(51644),o=e(87156),i={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(n){r.$._downHandler.call(this,n),this.pressed&&this.ensureRipple(n)},ensureRipple:function(n){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&(0,o.vz)(t).appendChild(this._ripple),n){var e=(0,o.vz)(this._rippleContainer||this),r=(0,o.vz)(n).rootTarget;e.deepContains(r)&&this._ripple.uiDownAction(n)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(n){this.hasRipple()&&(this._ripple.noink=n)}}},25782:function(n,t,e){"use strict";e(65233),e(65660),e(47686),e(97968);var r=e(9672),o=e(50856),i=e(33760);function a(){var n=function(n,t){t||(t=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(['\n    <style include="paper-item-shared-styles"></style>\n    <style>\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n        @apply --paper-icon-item;\n      }\n\n      .content-icon {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n\n        width: var(--paper-item-icon-width, 56px);\n        @apply --paper-item-icon;\n      }\n    </style>\n\n    <div id="contentIcon" class="content-icon">\n      <slot name="item-icon"></slot>\n    </div>\n    <slot></slot>\n']);return a=function(){return n},n}(0,r.k)({_template:(0,o.d)(a()),is:"paper-icon-item",behaviors:[i.U]})},91107:function(n,t,e){"use strict";function r(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return e}(n,t)||s(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t,e){return(i=a()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function u(n,t){return(u=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function c(n){return function(n){if(Array.isArray(n))return l(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||s(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,t){if(n){if("string"==typeof n)return l(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(n,t):void 0}}function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function f(n){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}e.d(t,{Ud:function(){return w}});var p=Symbol("Comlink.proxy"),h=Symbol("Comlink.endpoint"),y=Symbol("Comlink.releaseProxy"),d=Symbol("Comlink.thrown"),v=function(n){return"object"===f(n)&&null!==n||"function"==typeof n},m=new Map([["proxy",{canHandle:function(n){return v(n)&&n[p]},serialize:function(n){var t=new MessageChannel,e=t.port1,r=t.port2;return b(n,e),[r,[r]]},deserialize:function(n){return n.start(),w(n)}}],["throw",{canHandle:function(n){return v(n)&&d in n},serialize:function(n){var t=n.value;return[t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[]]},deserialize:function(n){if(n.isError)throw Object.assign(new Error(n.value.message),n.value);throw n.value}}]]);function b(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;t.addEventListener("message",(function e(a){if(a&&a.data){var u,s=Object.assign({path:[]},a.data),l=s.id,f=s.type,p=s.path,h=(a.data.argumentList||[]).map(E);try{var y=p.slice(0,-1).reduce((function(n,t){return n[t]}),n),v=p.reduce((function(n,t){return n[t]}),n);switch(f){case 0:u=v;break;case 1:y[p.slice(-1)[0]]=E(a.data.value),u=!0;break;case 2:u=v.apply(y,h);break;case 3:var m;u=R(i(v,c(h)));break;case 4:var w=new MessageChannel,_=w.port1,S=w.port2;b(n,S),u=C(_,[_]);break;case 5:u=void 0}}catch(m){u=o({value:m},d,0)}Promise.resolve(u).catch((function(n){return o({value:n},d,0)})).then((function(n){var o=r(O(n),2),i=o[0],a=o[1];t.postMessage(Object.assign(Object.assign({},i),{id:l}),a),5===f&&(t.removeEventListener("message",e),g(t))}))}})),t.start&&t.start()}function g(n){(function(n){return"MessagePort"===n.constructor.name})(n)&&n.close()}function w(n,t){return S(n,[],t)}function _(n){if(n)throw new Error("Proxy has been released and is not useable")}function S(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=!1,i=new Proxy(e,{get:function(e,r){if(_(o),r===y)return function(){return A(n,{type:5,path:t.map((function(n){return n.toString()}))}).then((function(){g(n),o=!0}))};if("then"===r){if(0===t.length)return{then:function(){return i}};var a=A(n,{type:0,path:t.map((function(n){return n.toString()}))}).then(E);return a.then.bind(a)}return S(n,[].concat(c(t),[r]))},set:function(e,i,a){_(o);var u=r(O(a),2),s=u[0],l=u[1];return A(n,{type:1,path:[].concat(c(t),[i]).map((function(n){return n.toString()})),value:s},l).then(E)},apply:function(e,i,a){_(o);var u=t[t.length-1];if(u===h)return A(n,{type:4}).then(E);if("bind"===u)return S(n,t.slice(0,-1));var c=r(k(a),2),s=c[0],l=c[1];return A(n,{type:2,path:t.map((function(n){return n.toString()})),argumentList:s},l).then(E)},construct:function(e,i){_(o);var a=r(k(i),2),u=a[0],c=a[1];return A(n,{type:3,path:t.map((function(n){return n.toString()})),argumentList:u},c).then(E)}});return i}function k(n){var t,e=n.map(O);return[e.map((function(n){return n[0]})),(t=e.map((function(n){return n[1]})),Array.prototype.concat.apply([],t))]}var j=new WeakMap;function C(n,t){return j.set(n,t),n}function R(n){return Object.assign(n,o({},p,!0))}function O(n){var t,e=function(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=s(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){u=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}(m);try{for(e.s();!(t=e.n()).done;){var o=r(t.value,2),i=o[0],a=o[1];if(a.canHandle(n)){var u=r(a.serialize(n),2);return[{type:3,name:i,value:u[0]},u[1]]}}}catch(c){e.e(c)}finally{e.f()}return[{type:0,value:n},j.get(n)||[]]}function E(n){switch(n.type){case 3:return m.get(n.name).deserialize(n.value);case 0:return n.value}}function A(n,t,e){return new Promise((function(r){var o=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");n.addEventListener("message",(function t(e){e.data&&e.data.id&&e.data.id===o&&(n.removeEventListener("message",t),r(e.data))})),n.start&&n.start(),n.postMessage(Object.assign({id:o},t),e)}))}},58993:function(n,t,e){"use strict";function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}e.d(t,{yh:function(){return a},U2:function(){return c},t8:function(){return s},ZH:function(){return l}});var i,a=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"keyval-store",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"keyval";r(this,n),this.storeName=e,this._dbp=new Promise((function(n,r){var o=indexedDB.open(t,1);o.onerror=function(){return r(o.error)},o.onsuccess=function(){return n(o.result)},o.onupgradeneeded=function(){o.result.createObjectStore(e)}}))}var t,e,i;return t=n,(e=[{key:"_withIDBStore",value:function(n,t){var e=this;return this._dbp.then((function(r){return new Promise((function(o,i){var a=r.transaction(e.storeName,n);a.oncomplete=function(){return o()},a.onabort=a.onerror=function(){return i(a.error)},t(a.objectStore(e.storeName))}))}))}}])&&o(t.prototype,e),i&&o(t,i),n}();function u(){return i||(i=new a),i}function c(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u();return e._withIDBStore("readonly",(function(e){t=e.get(n)})).then((function(){return t.result}))}function s(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return e._withIDBStore("readwrite",(function(e){e.put(t,n)}))}function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u();return n._withIDBStore("readwrite",(function(n){n.clear()}))}}}]);
//# sourceMappingURL=chunk.4a4a38a3056d81ac0486.js.map