(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1482],{51482:function(e,t,r){"use strict";var i=r(15652),n=r(47181),o=r(52003),a=r(96151),s=r(45841);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){var e=p(["\n      :host {\n        display: block;\n        height: 300px;\n      }\n      #map {\n        height: 100%;\n        background: inherit;\n      }\n      .leaflet-edit-move {\n        border-radius: 50%;\n        cursor: move !important;\n      }\n      .leaflet-edit-resize {\n        border-radius: 50%;\n        cursor: nesw-resize !important;\n      }\n    "]);return c=function(){return e},e}function d(e,t){return T(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],i=!0,n=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(l){n=!0,o=l}finally{try{i||null==s.return||s.return()}finally{if(n)throw o}}return r}(e,t)||O(e,t)||S()}function u(e,t,r,i,n,o,a){try{var s=e[o](a),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(i,n)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function a(e){u(o,i,n,a,s,"next",e)}function s(e){u(o,i,n,a,s,"throw",e)}a(void 0)}))}}function h(){var e=p([' <div id="map"></div> ']);return h=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=D(e);if(t){var n=D(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return k(this,r)}}function k(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(){_=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var o="static"===n?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!M(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var o=this.decorateConstructor(r,t);return i.push.apply(i,o.finishers),o.finishers=i,o},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[o])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,T(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||O(t)||S()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=P(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:C(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=C(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function g(e){var t,r=P(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function w(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function M(e){return e.decorators&&e.decorators.length}function E(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function C(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function P(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}function S(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(e,t){if(e){if("string"==typeof e)return L(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function T(e){if(Array.isArray(e))return e}function x(e,t,r){return(x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=_();if(i)for(var o=0;o<i.length;o++)n=i[o](n);var a=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=t.find(r)))if(E(o.descriptor)||E(n.descriptor)){if(M(o)||M(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(M(o)){if(M(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}w(o,n)}else t.push(o)}return t}(a.d.map(g)),e);n.initializeClassElements(a.F,s.elements),n.runClassFinishers(a.F,s.finishers)}([(0,i.Mo)("ha-location-editor")],(function(e,t){var r,l,u=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,t);var r=y(i);function i(){var t;v(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(b(t)),t}return i}(t);return{F:u,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Array})],key:"location",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Number})],key:"radius",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"radiusColor",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"icon",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",key:"fitZoom",value:function(){return 16}},{kind:"field",key:"_iconEl",value:void 0},{kind:"field",key:"_ignoreFitToMap",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"field",key:"_leafletMap",value:void 0},{kind:"field",key:"_tileLayer",value:void 0},{kind:"field",key:"_locationMarker",value:void 0},{kind:"method",key:"fitMap",value:function(){this._leafletMap&&this.location&&(this._locationMarker&&"getBounds"in this._locationMarker?this._leafletMap.fitBounds(this._locationMarker.getBounds()):this._leafletMap.setView(this.location,this.fitZoom),this._ignoreFitToMap=this.location)}},{kind:"method",key:"render",value:function(){return(0,i.dy)(h())}},{kind:"method",key:"firstUpdated",value:function(e){x(D(u.prototype),"firstUpdated",this).call(this,e),this._initMap()}},{kind:"method",key:"updated",value:function(e){if(x(D(u.prototype),"updated",this).call(this,e),this.Leaflet&&(e.has("location")&&(this._updateMarker(),!this.location||this._ignoreFitToMap&&this._ignoreFitToMap[0]===this.location[0]&&this._ignoreFitToMap[1]===this.location[1]||this.fitMap()),e.has("radius")&&this._updateRadius(),e.has("radiusColor")&&this._updateRadiusColor(),e.has("icon")&&this._updateIcon(),e.has("hass"))){var t,r,i,n=e.get("hass");if(!n||(null===(t=n.themes)||void 0===t?void 0:t.darkMode)===(null===(r=this.hass.themes)||void 0===r?void 0:r.darkMode))return;if(!this._leafletMap||!this._tileLayer)return;this._tileLayer=(0,o.C)(this.Leaflet,this._leafletMap,this._tileLayer,null===(i=this.hass.themes)||void 0===i?void 0:i.darkMode)}}},{kind:"get",key:"_mapEl",value:function(){return this.shadowRoot.querySelector("div")}},{kind:"method",key:"_initMap",value:(l=f(regeneratorRuntime.mark((function e(){var t,r,i,n,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.F)(this._mapEl,null!==(t=this.darkMode)&&void 0!==t?t:null===(r=this.hass.themes)||void 0===r?void 0:r.darkMode,Boolean(this.radius));case 2:i=e.sent,n=d(i,3),this._leafletMap=n[0],this.Leaflet=n[1],this._tileLayer=n[2],this._leafletMap.addEventListener("click",(function(e){return a._locationUpdated(e.latlng)})),this._updateIcon(),this._updateMarker(),this.fitMap(),this._leafletMap.invalidateSize();case 12:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{kind:"method",key:"_locationUpdated",value:function(e){var t=e.lng;Math.abs(t)>180&&(t=(t%360+540)%360-180),this.location=this._ignoreFitToMap=[e.lat,t],(0,n.B)(this,"change",void 0,{bubbles:!1})}},{kind:"method",key:"_radiusUpdated",value:function(){this._ignoreFitToMap=this.location,this.radius=this._locationMarker.getRadius(),(0,n.B)(this,"change",void 0,{bubbles:!1})}},{kind:"method",key:"_updateIcon",value:function(){if(this.icon){var e,t=document.createElement("ha-icon");t.setAttribute("icon",this.icon),e=t.outerHTML,this._iconEl=this.Leaflet.divIcon({html:e,iconSize:[24,24],className:"light leaflet-edit-move"}),this._setIcon()}else this._iconEl=void 0}},{kind:"method",key:"_setIcon",value:function(){this._locationMarker&&this._iconEl&&(this.radius?this._locationMarker.editing._moveMarker.setIcon(this._iconEl):this._locationMarker.setIcon(this._iconEl))}},{kind:"method",key:"_setupEdit",value:function(){var e=this;this._locationMarker.editing.enable();var t=this._locationMarker.editing._moveMarker,r=this._locationMarker.editing._resizeMarkers[0];this._setIcon(),t.addEventListener("dragend",(function(t){return e._locationUpdated(t.target.getLatLng())})),r.addEventListener("dragend",(function(t){return e._radiusUpdated(t)}))}},{kind:"method",key:"_updateMarker",value:(r=f(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.location){e.next=3;break}return this._locationMarker&&(this._locationMarker.remove(),this._locationMarker=void 0),e.abrupt("return");case 3:if(!this._locationMarker){e.next=11;break}if(this._locationMarker.setLatLng(this.location),!this.radius){e.next=10;break}return this._locationMarker.editing.disable(),e.next=9,(0,a.y)();case 9:this._setupEdit();case 10:return e.abrupt("return");case 11:this.radius?(this._locationMarker=this.Leaflet.circle(this.location,{color:this.radiusColor||s.V3,radius:this.radius}),this._leafletMap.addLayer(this._locationMarker),this._setupEdit()):(this._locationMarker=this.Leaflet.marker(this.location,{draggable:!0}),this._setIcon(),this._locationMarker.addEventListener("dragend",(function(e){return t._locationUpdated(e.target.getLatLng())})),this._leafletMap.addLayer(this._locationMarker));case 12:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{kind:"method",key:"_updateRadius",value:function(){this._locationMarker&&this.radius&&this._locationMarker.setRadius(this.radius)}},{kind:"method",key:"_updateRadiusColor",value:function(){this._locationMarker&&this.radius&&this._locationMarker.setStyle({color:this.radiusColor})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,i.iv)(c())}}]}}),i.oi)}}]);
//# sourceMappingURL=chunk.6d98453b9c2b56a5ae05.js.map