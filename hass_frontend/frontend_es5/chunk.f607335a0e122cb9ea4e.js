(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[586],{10586:function(e,t,r){"use strict";r.r(t);r(53918),r(8878),r(30879),r(53973),r(51095);var n=r(15652),i=r(47181),o=(r(68101),r(34821),r(57292)),a=r(11654);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){var e=f(["\n        .form {\n          padding-bottom: 24px;\n        }\n        mwc-button.warning {\n          margin-right: auto;\n        }\n        .error {\n          color: var(--error-color);\n        }\n        ha-switch {\n          margin-right: 16px;\n        }\n        .row {\n          margin-top: 8px;\n          color: var(--primary-text-color);\n          display: flex;\n          align-items: center;\n        }\n      "]);return c=function(){return e},e}function l(){var e=f([' <div class="error">',"</div> "]);return l=function(){return e},e}function d(){var e=f(["\n      <ha-dialog\n        open\n        @closed=","\n        .heading=","\n      >\n        <div>\n          ",'\n          <div class="form">\n            <paper-input\n              .value=',"\n              @value-changed=","\n              .label=","\n              .placeholder=","\n              .disabled=","\n            ></paper-input>\n            <ha-area-picker\n              .hass=","\n              .value=","\n              @value-changed=",'\n            ></ha-area-picker>\n            <div class="row">\n              <ha-switch\n                .checked=',"\n                @change=","\n              >\n              </ha-switch>\n              <div>\n                <div>\n                  ",'\n                </div>\n                <div class="secondary">\n                  ',"\n                  ",'\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <mwc-button\n          slot="secondaryAction"\n          @click=',"\n          .disabled=","\n        >\n          ",'\n        </mwc-button>\n        <mwc-button\n          slot="primaryAction"\n          @click="','"\n          .disabled=',"\n        >\n          ","\n        </mwc-button>\n      </ha-dialog>\n    "]);return d=function(){return e},e}function u(){var e=f([""]);return u=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function p(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){p(o,n,i,a,s,"next",e)}function s(e){p(o,n,i,a,s,"throw",e)}a(void 0)}))}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=k(e);if(t){var i=k(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(){w=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!P(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=x(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:D(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=D(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function _(e){var t,r=x(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function E(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function P(e){return e.decorators&&e.decorators.length}function z(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function D(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function x(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t,r,n){var i=w();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(z(o.descriptor)||z(i.descriptor)){if(P(o)||P(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(P(o)){if(P(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}E(o,i)}else t.push(o)}return t}(a.d.map(_)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("dialog-device-registry-detail")],(function(e,t){var r,s;return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,t);var r=v(n);function n(){var t;m(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(g(t)),t}return n}(t),d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_nameByUser",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_areaId",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_disabledBy",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_submitting",value:void 0},{kind:"method",key:"showDialog",value:(s=h(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._params=t,this._error=void 0,this._nameByUser=this._params.device.name_by_user||"",this._areaId=this._params.device.area_id,this._disabledBy=this._params.device.disabled_by,e.next=7,this.updateComplete;case 7:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._error="",this._params=void 0,(0,i.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){if(!this._params)return(0,n.dy)(u());var e=this._params.device;return(0,n.dy)(d(),this.closeDialog,(0,o.jL)(e,this.hass),this._error?(0,n.dy)(l(),this._error):"",this._nameByUser,this._nameChanged,this.hass.localize("ui.panel.config.devices.name"),e.name||"",this._submitting,this.hass,this._areaId,this._areaPicked,!this._disabledBy,this._disabledByChanged,this.hass.localize("ui.panel.config.devices.enabled_label"),this._disabledBy&&"user"!==this._disabledBy?this.hass.localize("ui.panel.config.devices.enabled_cause","cause",this.hass.localize("config_entry.disabled_by.".concat(this._disabledBy))):"",this.hass.localize("ui.panel.config.devices.enabled_description"),this.closeDialog,this._submitting,this.hass.localize("ui.common.cancel"),this._updateEntry,this._submitting,this.hass.localize("ui.panel.config.devices.update"))}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._nameByUser=e.detail.value}},{kind:"method",key:"_areaPicked",value:function(e){this._areaId=e.detail.value}},{kind:"method",key:"_disabledByChanged",value:function(e){this._disabledBy=e.target.checked?null:"user"}},{kind:"method",key:"_updateEntry",value:(r=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._submitting=!0,e.prev=1,e.next=4,this._params.updateEntry({name_by_user:this._nameByUser.trim()||null,area_id:this._areaId||null,disabled_by:this._disabledBy||null});case 4:this.closeDialog(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),this._error=e.t0.message||this.hass.localize("ui.panel.config.devices.unknown_error");case 10:return e.prev=10,this._submitting=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[1,7,10,13]])}))),function(){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[a.Qx,a.yu,(0,n.iv)(c())]}}]}}),n.oi)}}]);
//# sourceMappingURL=chunk.f607335a0e122cb9ea4e.js.map