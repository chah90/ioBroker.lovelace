(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6955],{26955:function(e,t,r){"use strict";r.r(t),r.d(t,{EntityRegistrySettingsHelper:function(){return de}});var n=r(15652),i=r(7323),o=r(55642),s=r(47181),a=r(74186),c=r(43180),l=r(11512),d=r(3300),u=r(74725),f=r(10575),p=r(56005),h=r(73734),y=r(26765),m=(r(45122),r(65580),r(88108),r(38707),r(39509),r(13345),r(48003),r(30879),r(58831));r(43709);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){var e=w(["\n      ha-switch {\n        margin-right: 16px;\n      }\n      .row {\n        margin-top: 8px;\n        color: var(--primary-text-color);\n        display: flex;\n        align-items: center;\n      }\n      .secondary {\n        color: var(--secondary-text-color);\n      }\n    "]);return b=function(){return e},e}function g(){var e=w(["\n      <paper-input\n        .value=","\n        @value-changed=","\n        .label=",'\n        error-message="Domain needs to stay the same"\n        .invalid=',"\n        .disabled=",'\n      ></paper-input>\n      <div class="row">\n        <ha-switch\n          .checked=',"\n          @change=","\n        >\n        </ha-switch>\n        <div>\n          <div>\n            ",'\n          </div>\n          <div class="secondary">\n            ',"\n            ","\n            <br />","\n          </div>\n        </div>\n      </div>\n    "]);return g=function(){return e},e}function k(){var e=w([""]);return k=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _(e,t,r,n,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,i)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=B(e);if(t){var i=B(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(){D=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!S(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=R(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:T(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=T(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function C(e){var t,r=R(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function j(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function S(e){return e.decorators&&e.decorators.length}function A(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function T(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function R(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===v(t)?t:String(t)}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e,t,r){return(F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,n){var i=D();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var s=t((function(e){i.initializeInstanceElements(e,a.elements)}),r),a=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(A(o.descriptor)||A(i.descriptor)){if(S(o)||S(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(S(o)){if(S(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}j(o,i)}else t.push(o)}return t}(s.d.map(C)),e);i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("ha-registry-basic-editor")],(function(e,t){var r,i,o=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(n,t);var r=P(n);function n(){var t;E(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),e(z(t)),t}return n}(t);return{F:o,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"entry",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_origEntityId",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_entityId",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_disabledBy",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_submitting",value:void 0},{kind:"method",key:"updateEntry",value:(r=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,t={new_entity_id:this._entityId.trim()},null!==this._disabledBy&&"user"!==this._disabledBy||(t.disabled_by=this._disabledBy),e.prev=3,e.next=6,(0,a.Nv)(this.hass,this._origEntityId,t);case 6:return e.prev=6,this._submitting=!1,e.finish(6);case 9:case"end":return e.stop()}}),e,this,[[3,,6,9]])})),i=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=r.apply(e,t);function s(e){_(o,n,i,s,a,"next",e)}function a(e){_(o,n,i,s,a,"throw",e)}s(void 0)}))},function(){return i.apply(this,arguments)})},{kind:"method",key:"updated",value:function(e){F(B(o.prototype),"updated",this).call(this,e),e.has("entry")&&this.entry&&(this._origEntityId=this.entry.entity_id,this._entityId=this.entry.entity_id,this._disabledBy=this.entry.disabled_by)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.entry||this.entry.entity_id!==this._origEntityId)return(0,n.dy)(k());var e=(0,m.M)(this._entityId.trim())!==(0,m.M)(this.entry.entity_id);return(0,n.dy)(g(),this._entityId,this._entityIdChanged,this.hass.localize("ui.dialogs.entity_registry.editor.entity_id"),e,this._submitting,!this._disabledBy,this._disabledByChanged,this.hass.localize("ui.dialogs.entity_registry.editor.enabled_label"),this._disabledBy&&"user"!==this._disabledBy?this.hass.localize("ui.dialogs.entity_registry.editor.enabled_cause","cause",this.hass.localize("config_entry.disabled_by.".concat(this._disabledBy))):"",this.hass.localize("ui.dialogs.entity_registry.editor.enabled_description"),this.hass.localize("ui.dialogs.entity_registry.editor.note"))}},{kind:"method",key:"_entityIdChanged",value:function(e){this._entityId=e.detail.value}},{kind:"method",key:"_disabledByChanged",value:function(e){this._disabledBy=e.target.checked?null:"user"}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(b())}}]}}),n.oi);var L=r(11654);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(){var e=q(["\n        :host {\n          display: block;\n          padding: 0 !important;\n        }\n        .form {\n          padding: 20px 24px;\n          margin-bottom: 53px;\n        }\n        .buttons {\n          position: absolute;\n          bottom: 0;\n          width: 100%;\n          box-sizing: border-box;\n          border-top: 1px solid\n            var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));\n          display: flex;\n          justify-content: space-between;\n          padding: 8px;\n          background-color: var(--mdc-theme-surface, #fff);\n        }\n        .error {\n          color: var(--error-color);\n        }\n        .row {\n          margin-top: 8px;\n          color: var(--primary-text-color);\n        }\n        .secondary {\n          color: var(--secondary-text-color);\n        }\n      "]);return N=function(){return e},e}function U(e,t,r,n,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void r(l)}a.done?t(c):Promise.resolve(c).then(n,i)}function H(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function s(e){U(o,n,i,s,a,"next",e)}function a(e){U(o,n,i,s,a,"throw",e)}s(void 0)}))}}function K(){var e=q(["\n              <span @value-changed=",">\n                ","\n              </span>\n            "]);return K=function(){return e},e}function W(){var e=q([' <div class="error">',"</div> "]);return W=function(){return e},e}function Y(){var e=q(["\n      ",'\n      <div class="form">\n        ',"\n        <ha-registry-basic-editor\n          .hass=","\n          .entry=",'\n        ></ha-registry-basic-editor>\n      </div>\n      <div class="buttons">\n        <mwc-button\n          class="warning"\n          @click=',"\n          .disabled=","\n        >\n          ","\n        </mwc-button>\n        <mwc-button\n          @click=","\n          .disabled=","\n        >\n          ","\n        </mwc-button>\n      </div>\n    "]);return Y=function(){return e},e}function $(){var e=q([""]);return $=function(){return e},e}function q(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ce(e);if(t){var i=ce(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return Z(this,r)}}function Z(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?J(e):t}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(){V=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!re(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return se(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?se(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=oe(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:ie(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=ie(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function ee(e){var t,r=oe(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function te(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function re(e){return e.decorators&&e.decorators.length}function ne(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function ie(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function oe(e){var t=function(e,t){if("object"!==M(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===M(t)?t:String(t)}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ae(e,t,r){return(ae="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ce(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var le={input_boolean:{fetch:c.Aj,update:c.Xr,delete:c.wO},input_text:{fetch:f.YL,update:f.jt,delete:f.KB},input_number:{fetch:d.K4,update:d.hb,delete:d.fH},input_datetime:{fetch:l.s2,update:l.FF,delete:l.Gi},input_select:{fetch:u.LN,update:u.ON,delete:u.H3},counter:{fetch:p.W2,update:p.Rm,delete:p.YL},timer:{fetch:h.aT,update:h.mZ,delete:h.WH}},de=function(e,t,r,n){var i=V();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var s=t((function(e){i.initializeInstanceElements(e,a.elements)}),r),a=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(ne(o.descriptor)||ne(i.descriptor)){if(re(o)||re(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(re(o)){if(re(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}te(o,i)}else t.push(o)}return t}(s.d.map(ee)),e);return i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([(0,n.Mo)("entity-settings-helper-tab")],(function(e,t){var r,c,l,d=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(n,t);var r=X(n);function n(){var t;G(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=r.call.apply(r,[this].concat(o)),e(J(t)),t}return n}(t);return{F:d,d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)()],key:"entry",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_item",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_submitting",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_componentLoaded",value:void 0},{kind:"field",decorators:[(0,n.IO)("ha-registry-basic-editor")],key:"_registryEditor",value:void 0},{kind:"method",key:"firstUpdated",value:function(e){ae(ce(d.prototype),"firstUpdated",this).call(this,e),this._componentLoaded=(0,i.p)(this.hass,this.entry.platform)}},{kind:"method",key:"updated",value:function(e){ae(ce(d.prototype),"updated",this).call(this,e),e.has("entry")&&(this._error=void 0,this._item=void 0,this._getItem())}},{kind:"method",key:"render",value:function(){if(void 0===this._item)return(0,n.dy)($());var e=this.hass.states[this.entry.entity_id];return(0,n.dy)(Y(),this._error?(0,n.dy)(W(),this._error):"",this._componentLoaded?null===this._item?this.hass.localize("ui.dialogs.helper_settings.yaml_not_editable"):(0,n.dy)(K(),this._valueChanged,(0,o.h)("ha-".concat(this.entry.platform,"-form"),{hass:this.hass,item:this._item,entry:this.entry})):this.hass.localize("ui.dialogs.helper_settings.platform_not_loaded","platform",this.entry.platform),this.hass,this.entry,this._confirmDeleteItem,this._submitting||!this._item&&!(null==e?void 0:e.attributes.restored),this.hass.localize("ui.dialogs.entity_registry.editor.delete"),this._updateItem,this._submitting||this._item&&!this._item.name,this.hass.localize("ui.dialogs.entity_registry.editor.update"))}},{kind:"method",key:"_valueChanged",value:function(e){this._error=void 0,this._item=e.detail.value}},{kind:"method",key:"_getItem",value:(l=H(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le[this.entry.platform].fetch(this.hass);case 2:t=e.sent,this._item=t.find((function(e){return e.id===r.entry.unique_id}))||null;case 4:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{kind:"method",key:"_updateItem",value:(c=H(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._submitting=!0,e.prev=1,!this._componentLoaded||!this._item){e.next=5;break}return e.next=5,le[this.entry.platform].update(this.hass,this._item.id,this._item);case 5:return e.next=7,null===(t=this._registryEditor)||void 0===t?void 0:t.updateEntry();case 7:(0,s.B)(this,"close-dialog"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),this._error=e.t0.message||"Unknown error";case 13:return e.prev=13,this._submitting=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[1,10,13,16]])}))),function(){return c.apply(this,arguments)})},{kind:"method",key:"_confirmDeleteItem",value:(r=H(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.g7)(this,{text:this.hass.localize("ui.dialogs.entity_registry.editor.confirm_delete")});case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:if(this._submitting=!0,e.prev=5,!this._componentLoaded||!this._item){e.next=11;break}return e.next=9,le[this.entry.platform].delete(this.hass,this._item.id);case 9:e.next=16;break;case 11:if(null==(t=this.hass.states[this.entry.entity_id])?void 0:t.attributes.restored){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,(0,a.z3)(this.hass,this.entry.entity_id);case 16:(0,s.B)(this,"close-dialog");case 17:return e.prev=17,this._submitting=!1,e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[5,,17,20]])}))),function(){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[L.Qx,(0,n.iv)(N())]}}]}}),n.oi)}}]);
//# sourceMappingURL=chunk.980059386cc53962d8f3.js.map