(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8343],{3239:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){if(!e||"object"!=n(e))return e;if("[object Date]"==Object.prototype.toString.call(e))return new Date(e.getTime());if(Array.isArray(e))return e.map(i);var t={};return Object.keys(e).forEach((function(r){t[r]=i(e[r])})),t}r.d(t,{Z:function(){return i}})},25516:function(e,t,r){"use strict";r.d(t,{i:function(){return n}});var n=function(e){return function(t){return{kind:"method",placement:"prototype",key:t.key,descriptor:{set:function(e){this["__".concat(String(t.key))]=e},get:function(){return this["__".concat(String(t.key))]},enumerable:!0,configurable:!0},finisher:function(r){var n=r.prototype.connectedCallback;r.prototype.connectedCallback=function(){if(n.call(this),this[t.key]){var r=this.renderRoot.querySelector(e);if(!r)return;r.scrollTop=this[t.key]}}}}}}},54531:function(e,t,r){"use strict";function n(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{zJ:function(){return l},Xr:function(){return u},Qc:function(){return f}});var o=["zone","persistent_notification"],a=function(e,t){if("call-service"===t.action&&t.service_data&&t.service_data.entity_id){var r=t.service_data.entity_id;Array.isArray(r)||(r=[r]);var i,o=n(r);try{for(o.s();!(i=o.n()).done;){var a=i.value;e.add(a)}}catch(s){o.e(s)}finally{o.f()}}},s=function(e,t){"string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&a(e,t.tap_action),t.hold_action&&a(e,t.hold_action)):e.add(t)},c=function e(t,r){r.entity&&s(t,r.entity),r.entities&&Array.isArray(r.entities)&&r.entities.forEach((function(e){return s(t,e)})),r.card&&e(t,r.card),r.cards&&Array.isArray(r.cards)&&r.cards.forEach((function(r){return e(t,r)})),r.elements&&Array.isArray(r.elements)&&r.elements.forEach((function(r){return e(t,r)})),r.badges&&Array.isArray(r.badges)&&r.badges.forEach((function(e){return s(t,e)}))},l=function(e){var t=new Set;return e.views.forEach((function(e){return c(t,e)})),t},u=function(e,t){for(var r=new Set,n=0,i=Object.keys(e.states);n<i.length;n++){var a=i[n];t.has(a)||o.includes(a.split(".",1)[0])||r.add(a)}return r},f=function(e,t){var r=l(t);return u(e,r)}},59110:function(e,t,r){"use strict";var n=r(15652),i=r(14516),o=r(47181),a=r(87744);r(67065),r(3143),r(42952);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){var e=h(["\n      ha-data-table {\n        --data-table-border-width: 0;\n        height: 100%;\n      }\n    "]);return c=function(){return e},e}function l(){var e=h(["\n        <ha-relative-time\n          .hass=","\n          .datetime=","\n        ></ha-relative-time>\n      "]);return l=function(){return e},e}function u(){var e=h(['\n                  <div class="secondary">\n                    ',"\n                  </div>\n                "]);return u=function(){return e},e}function f(){var e=h(["\n          <div @click=",' style="cursor: pointer;">\n            ',"\n            ","\n          </div>\n        "]);return f=function(){return e},e}function d(){var e=h(["\n          <state-badge\n            @click=","\n            .hass=","\n            .stateObj=","\n          ></state-badge>\n        "]);return d=function(){return e},e}function p(){var e=h(["\n      <ha-data-table\n        selectable\n        .id=","\n        .columns=","\n        .data=","\n        .dir=","\n        .searchLabel=","\n        .noLabelFloat=","\n        .noDataText=","\n        @selection-changed=","\n      ></ha-data-table>\n    "]);return p=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=k(e);if(t){var i=k(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(){w=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!S(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=j(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:C(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=C(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function E(e){var t,r=j(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function _(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function S(e){return e.decorators&&e.decorators.length}function A(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function C(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function j(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t,r,n){var i=w();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(A(o.descriptor)||A(i.descriptor)){if(S(o)||S(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(S(o)){if(S(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}_(o,i)}else t.push(o)}return t}(a.d.map(E)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("hui-entity-picker-table")],(function(e,t){return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(n,t);var r=v(n);function n(){var t;y(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(g(t)),t}return n}(t),d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[(0,n.Cb)({type:Boolean,attribute:"no-label-float"})],key:"noLabelFloat",value:function(){return!1}},{kind:"field",decorators:[(0,n.Cb)({type:Array})],key:"entities",value:void 0},{kind:"method",key:"render",value:function(){return(0,n.dy)(p(),"entity_id",this._columns(this.narrow),this.entities,(0,a.Zu)(this.hass),this.hass.localize("ui.panel.lovelace.unused_entities.search"),this.noLabelFloat,this.hass.localize("ui.panel.lovelace.unused_entities.no_data"),this._handleSelectionChanged)}},{kind:"field",key:"_columns",value:function(){var e=this;return(0,i.Z)((function(t){var r={icon:{title:"",type:"icon",template:function(t,r){return(0,n.dy)(d(),e._handleEntityClicked,e.hass,r.stateObj)}},name:{title:e.hass.localize("ui.panel.lovelace.unused_entities.entity"),sortable:!0,filterable:!0,grows:!0,direction:"asc",template:function(r,i){return(0,n.dy)(f(),e._handleEntityClicked,r,t?(0,n.dy)(u(),i.stateObj.entity_id):"")}}};return r.entity_id={title:e.hass.localize("ui.panel.lovelace.unused_entities.entity_id"),sortable:!0,filterable:!0,width:"30%",hidden:t},r.domain={title:e.hass.localize("ui.panel.lovelace.unused_entities.domain"),sortable:!0,filterable:!0,width:"15%",hidden:t},r.last_changed={title:e.hass.localize("ui.panel.lovelace.unused_entities.last_changed"),type:"numeric",sortable:!0,width:"15%",hidden:t,template:function(t){return(0,n.dy)(l(),e.hass,t)}},r}))}},{kind:"method",key:"_handleSelectionChanged",value:function(e){var t=e.detail.value;(0,o.B)(this,"selected-changed",{selectedEntities:t})}},{kind:"method",key:"_handleEntityClicked",value:function(e){var t=e.target.closest(".mdc-data-table__row").rowId;(0,o.B)(this,"hass-more-info",{entityId:t})}},{kind:"get",static:!0,key:"styles",value:function(){return(0,n.iv)(c())}}]}}),n.oi)},47512:function(e,t,r){"use strict";r.d(t,{f:function(){return o}});var n=r(47181),i=function(){return Promise.all([r.e(5009),r.e(9033),r.e(3304),r.e(5230),r.e(6889),r.e(9697),r.e(2333),r.e(5714),r.e(613),r.e(5518),r.e(2339),r.e(3822),r.e(7305),r.e(9669),r.e(9123),r.e(591)]).then(r.bind(r,9444))},o=function(e,t){(0,n.B)(e,"show-dialog",{dialogTag:"hui-dialog-suggest-card",dialogImport:i,dialogParams:t})}}}]);
//# sourceMappingURL=chunk.6a97964bdfc4569cf321.js.map