(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7250],{67250:function(e,t,r){"use strict";var n=r(15652),i=r(47181),o=r(91741),a=r(40095),s=r(50538);r(319);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){var e=m(["\n      :host,\n      img {\n        display: block;\n      }\n\n      img {\n        width: 100%;\n      }\n    "]);return u=function(){return e},e}function l(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function f(){var e=m(["\n            <ha-hls-player\n              autoplay\n              playsinline\n              .allowExoPlayer=","\n              .muted=","\n              .controls=","\n              .hass=","\n              .url=","\n            ></ha-hls-player>\n          "]);return f=function(){return e},e}function d(){var e=m(["\n            <img\n              @load=","\n              .src=","\n              .alt=","\n            />\n          "]);return d=function(){return e},e}function p(){var e=m(["\n      ","\n    "]);return p=function(){return e},e}function h(){var e=m([""]);return h=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var i=g(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(){E=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!x(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var u=c.extras;if(u){for(var l=0;l<u.length;l++)this.addElementPlacement(u[l],t);r.push.apply(r,u)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=S(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:j(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=j(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function P(e){var t,r=S(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function _(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function x(e){return e.decorators&&e.decorators.length}function O(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function j(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function S(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t,r,n){var i=E();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(O(o.descriptor)||O(i.descriptor)){if(x(o)||x(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(x(o)){if(x(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}_(o,i)}else t.push(o)}return t}(a.d.map(P)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("ha-camera-stream")],(function(e,t){var r,c;return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(n,t);var r=b(n);function n(){var t;y(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(k(t)),t}return n}(t),d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"controls"})],key:"controls",value:function(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"muted"})],key:"muted",value:function(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value:function(){return!1}},{kind:"field",decorators:[(0,n.sz)()],key:"_forceMJPEG",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_url",value:void 0},{kind:"method",key:"render",value:function(){return this.stateObj?(0,n.dy)(p(),this._shouldRenderMJPEG?(0,n.dy)(d(),this._elementResized,(0,s.nk)(this.stateObj),"Preview of the ".concat((0,o.C)(this.stateObj)," camera.")):this._url?(0,n.dy)(f(),this.allowExoPlayer,this.muted,this.controls,this.hass,this._url):""):(0,n.dy)(h())}},{kind:"method",key:"updated",value:function(e){e.has("stateObj")&&!this._shouldRenderMJPEG&&(this._forceMJPEG=void 0,this._getStreamUrl())}},{kind:"get",key:"_shouldRenderMJPEG",value:function(){return this._forceMJPEG===this.stateObj.entity_id||!this.hass.config.components.includes("stream")||!(0,a.e)(this.stateObj,s.qW)}},{kind:"method",key:"_getStreamUrl",value:(r=regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Lr)(this.hass,this.stateObj.entity_id);case 3:t=e.sent,r=t.url,this._url=r,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),this._forceMJPEG=this.stateObj.entity_id;case 12:case"end":return e.stop()}}),e,this,[[0,8]])})),c=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=r.apply(e,t);function a(e){l(o,n,i,a,s,"next",e)}function s(e){l(o,n,i,a,s,"throw",e)}a(void 0)}))},function(){return c.apply(this,arguments)})},{kind:"method",key:"_elementResized",value:function(){(0,i.B)(this,"iron-resize")}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(u())}}]}}),n.oi)},50538:function(e,t,r){"use strict";function n(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}r.d(t,{qW:function(){return c},nk:function(){return u},Xn:function(){return p},Lr:function(){return d},i4:function(){return l},Mw:function(){return h}});var i=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r,n,i,o){var a,s,c,u,l,f,d=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=d.length,s=new Array(a>5?a-5:0),c=5;c<a;c++)s[c-5]=d[c];if((u=i[t])||(u=i[t]={}),!(l=u[o])){e.next=6;break}return e.abrupt("return",l);case 6:return f=n.apply(void 0,[i,o].concat(s)),u[o]=f,f.then((function(){return setTimeout((function(){u[o]=void 0}),r)}),(function(){u[o]=void 0})),e.abrupt("return",f);case 10:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,c,"next",e)}function c(e){n(a,i,o,s,c,"throw",e)}s(void 0)}))});return function(e,r,n,i,o){return t.apply(this,arguments)}}(),o=r(22814);function a(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,i)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(e){a(o,n,i,s,c,"next",e)}function c(e){a(o,n,i,s,c,"throw",e)}s(void 0)}))}}var c=2,u=function(e){return"/api/camera_proxy_stream/".concat(e.entity_id,"?token=").concat(e.attributes.access_token)},l=function(e,t){return i("_cameraTmbUrl",9e3,f,e,t)},f=function(){var e=s(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.iI)(t,"/api/camera_proxy/".concat(r));case 2:return n=e.sent,e.abrupt("return",t.hassUrl(n.path));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=s(regeneratorRuntime.mark((function e(t,r,n){var i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={type:"camera/stream",entity_id:r},n&&(i.format=n),e.next=4,t.callWS(i);case 4:return(o=e.sent).url=t.hassUrl(o.url),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),p=function(e,t){return e.callWS({type:"camera/get_prefs",entity_id:t})},h=function(e,t,r){return e.callWS(Object.assign({type:"camera/update_prefs",entity_id:t},r))}}}]);
//# sourceMappingURL=chunk.84165dd440b65a7452e6.js.map