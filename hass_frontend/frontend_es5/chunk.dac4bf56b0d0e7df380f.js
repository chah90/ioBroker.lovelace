(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4682],{7323:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});var r=function(e,t){return e&&-1!==e.config.components.indexOf(t)}},83270:function(e,t,n){"use strict";n.d(t,{LI:function(){return r},AV:function(){return o},Mc:function(){return i},dn:function(){return a},H9:function(){return c},De:function(){return s},Wz:function(){return l},LV:function(){return u},QD:function(){return d},A$:function(){return f},tW:function(){return p}});var r=function(e){return e.callWS({type:"cloud/status"})},o=function(e,t){return e.callWS({type:"cloud/cloudhook/create",webhook_id:t})},i=function(e,t){return e.callWS({type:"cloud/cloudhook/delete",webhook_id:t})},a=function(e){return e.callWS({type:"cloud/remote/connect"})},c=function(e){return e.callWS({type:"cloud/remote/disconnect"})},s=function(e){return e.callWS({type:"cloud/subscription"})},l=function(e,t){return e.callWS({type:"cloud/thingtalk/convert",query:t})},u=function(e,t){return e.callWS(Object.assign({type:"cloud/update_prefs"},t))},d=function(e,t,n){return e.callWS(Object.assign({type:"cloud/google_assistant/entities/update",entity_id:t},n))},f=function(e){return e.callApi("POST","cloud/google_actions/sync")},p=function(e,t,n){return e.callWS(Object.assign({type:"cloud/alexa/entities/update",entity_id:t},n))}},29311:function(e,t,n){"use strict";n.r(t),n.d(t,{configSections:function(){return z}});n(53973),n(89194);var r=n(15652),o=n(7323),i=n(59708),a=n(83270),c=(n(15291),n(18199)),s=n(55317);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,o)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){y=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var o=t.placement;if(t.kind===r&&("static"===o||"prototype"===o)){var i="static"===o?e:n;this.defineClassElement(i,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,o)}),this),e.forEach((function(e){if(!b(e))return n.push(e);var t=this.decorateElement(e,o);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var i=this.decorateConstructor(n,t);return r.push.apply(r,i.finishers),i.finishers=r,i},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],o=e.decorators,i=o.length-1;i>=0;i--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var c=this.fromElementDescriptor(e),s=this.toElementFinisherExtras((0,o[i])(c)||c);e=s.element,this.addElementPlacement(e,t),s.finisher&&r.push(s.finisher);var l=s.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),i=this.toClassDescriptor((0,t[r])(o)||o);if(void 0!==i.finisher&&n.push(i.finisher),void 0!==i.elements){e=i.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=P(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var i={kind:t,key:n,placement:r,descriptor:Object.assign({},o)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),i.initializer=e.initializer),i},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function g(e){var t,n=P(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function v(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function b(e){return e.decorators&&e.decorators.length}function w(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function P(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z={integrations:[{component:"integrations",path:"/config/integrations",translationKey:"ui.panel.config.integrations.caption",iconPath:s.$Z0,core:!0},{component:"devices",path:"/config/devices",translationKey:"ui.panel.config.devices.caption",iconPath:s.p0g,core:!0},{component:"entities",path:"/config/entities",translationKey:"ui.panel.config.entities.caption",iconPath:s.RIj,core:!0},{component:"areas",path:"/config/areas",translationKey:"ui.panel.config.areas.caption",iconPath:s.yvc,core:!0}],automation:[{component:"automation",path:"/config/automation",translationKey:"ui.panel.config.automation.caption",iconPath:s.$Th},{component:"scene",path:"/config/scene",translationKey:"ui.panel.config.scene.caption",iconPath:s.sc6},{component:"script",path:"/config/script",translationKey:"ui.panel.config.script.caption",iconPath:s.EQk},{component:"helpers",path:"/config/helpers",translationKey:"ui.panel.config.helpers.caption",iconPath:s.cl8,core:!0}],experimental:[{component:"tags",path:"/config/tags",translationKey:"ui.panel.config.tags.caption",iconPath:s.AIu,core:!0}],lovelace:[{component:"lovelace",path:"/config/lovelace/dashboards",translationKey:"ui.panel.config.lovelace.caption",iconPath:s.Ccq}],persons:[{component:"person",path:"/config/person",translationKey:"ui.panel.config.person.caption",iconPath:s.rI3},{component:"zone",path:"/config/zone",translationKey:"ui.panel.config.zone.caption",iconPath:s.OBx},{component:"users",path:"/config/users",translationKey:"ui.panel.config.users.caption",iconPath:s.EjC,core:!0,advancedOnly:!0}],general:[{component:"core",path:"/config/core",translationKey:"ui.panel.config.core.caption",iconPath:s.T__,core:!0},{component:"server_control",path:"/config/server_control",translationKey:"ui.panel.config.server_control.caption",iconPath:s.K12,core:!0},{component:"logs",path:"/config/logs",translationKey:"ui.panel.config.logs.caption",iconPath:s.ofU,core:!0},{component:"info",path:"/config/info",translationKey:"ui.panel.config.info.caption",iconPath:s.geb,core:!0}],advanced:[{component:"customize",path:"/config/customize",translationKey:"ui.panel.config.customize.caption",iconPath:s.r9,core:!0,advancedOnly:!0}]};!function(e,t,n,r){var o=y();if(r)for(var i=0;i<r.length;i++)o=r[i](o);var a=t((function(e){o.initializeInstanceElements(e,c.elements)}),n),c=o.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===i.key&&e.placement===i.placement},r=0;r<e.length;r++){var o,i=e[r];if("method"===i.kind&&(o=t.find(n)))if(w(i.descriptor)||w(o.descriptor)){if(b(i)||b(o))throw new ReferenceError("Duplicated methods ("+i.key+") can't be decorated.");o.descriptor=i.descriptor}else{if(b(i)){if(b(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+i.key+").");o.decorators=i.decorators}v(i,o)}else t.push(i)}return t}(a.d.map(g)),e);o.initializeClassElements(a.F,c.elements),o.runClassFinishers(a.F,c.finishers)}([(0,r.Mo)("ha-panel-config")],(function(e,t){var c,s,l=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(r,t);var n=p(r);function r(){var t;d(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n.call.apply(n,[this].concat(i)),e(m(t)),t}return r}(t);return{F:l,d:[{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"narrow",value:void 0},{kind:"field",decorators:[(0,r.Cb)()],key:"route",value:void 0},{kind:"field",key:"routerOptions",value:function(){return{defaultPage:"dashboard",routes:{areas:{tag:"ha-config-areas",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(4444),n.e(9119),n.e(5755),n.e(9494),n.e(782),n.e(6509),n.e(1359),n.e(7164),n.e(2899),n.e(2519),n.e(1486),n.e(4122)]).then(n.bind(n,83567))}},automation:{tag:"ha-config-automation",load:function(){return Promise.all([n.e(5009),n.e(4358),n.e(6755),n.e(8200),n.e(879),n.e(1041),n.e(8374),n.e(4268),n.e(3641),n.e(4444),n.e(9119),n.e(5755),n.e(9494),n.e(6547),n.e(9033),n.e(3268),n.e(1572),n.e(2296),n.e(2174),n.e(782),n.e(3238),n.e(486),n.e(5062),n.e(6002),n.e(4438),n.e(4408),n.e(6509),n.e(4535),n.e(1359),n.e(2899),n.e(5548),n.e(8331),n.e(5020),n.e(6176),n.e(2289),n.e(1254)]).then(n.bind(n,44030))}},tags:{tag:"ha-config-tags",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(4444),n.e(9119),n.e(5755),n.e(9494),n.e(782),n.e(6509),n.e(1359),n.e(7164),n.e(2899),n.e(2519),n.e(2683)]).then(n.bind(n,22130))}},cloud:{tag:"ha-config-cloud",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(6547),n.e(8367),n.e(6509),n.e(3936),n.e(5597),n.e(5126)]).then(n.bind(n,92310))}},core:{tag:"ha-config-core",load:function(){return Promise.all([n.e(6755),n.e(8200),n.e(879),n.e(3268),n.e(1895),n.e(8202),n.e(6509),n.e(1359),n.e(4909),n.e(1482),n.e(9220),n.e(4527)]).then(n.bind(n,32728))}},devices:{tag:"ha-config-devices",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(4444),n.e(5755),n.e(9494),n.e(6547),n.e(782),n.e(486),n.e(5062),n.e(6509),n.e(1359),n.e(7164),n.e(2899),n.e(1927),n.e(2519),n.e(1486),n.e(5548),n.e(3998),n.e(2834),n.e(9966)]).then(n.bind(n,53490))}},server_control:{tag:"ha-config-server-control",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(3268),n.e(6509),n.e(1359),n.e(4909),n.e(9220),n.e(3018)]).then(n.bind(n,77980))}},logs:{tag:"ha-config-logs",load:function(){return Promise.all([n.e(9555),n.e(6509),n.e(1359),n.e(4909),n.e(4066),n.e(8445)]).then(n.bind(n,56795))}},info:{tag:"ha-config-info",load:function(){return Promise.all([n.e(4444),n.e(6509),n.e(1359),n.e(9032)]).then(n.bind(n,74685))}},customize:{tag:"ha-config-customize",load:function(){return Promise.all([n.e(5009),n.e(4358),n.e(6755),n.e(8200),n.e(879),n.e(2296),n.e(6951),n.e(6509),n.e(1359),n.e(8387)]).then(n.bind(n,93585))}},dashboard:{tag:"ha-config-dashboard",load:function(){return Promise.all([n.e(3268),n.e(2772)]).then(n.bind(n,74222))}},entities:{tag:"ha-config-entities",load:function(){return Promise.all([n.e(5009),n.e(4358),n.e(6755),n.e(8200),n.e(879),n.e(4444),n.e(5755),n.e(9494),n.e(2296),n.e(2174),n.e(782),n.e(3238),n.e(5143),n.e(6509),n.e(1359),n.e(7164),n.e(2899),n.e(2519),n.e(8207)]).then(n.bind(n,94009))}},integrations:{tag:"ha-config-integrations",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(9119),n.e(2174),n.e(3238),n.e(1480),n.e(8988),n.e(6509),n.e(1359),n.e(7164),n.e(1486),n.e(8052),n.e(6999)]).then(n.bind(n,72019))}},lovelace:{tag:"ha-config-lovelace",load:function(){return n.e(1944).then(n.bind(n,52730))}},person:{tag:"ha-config-person",load:function(){return Promise.all([n.e(9119),n.e(6509),n.e(1359),n.e(3141),n.e(3071)]).then(n.bind(n,32503))}},script:{tag:"ha-config-script",load:function(){return Promise.all([n.e(5009),n.e(4358),n.e(6755),n.e(8200),n.e(879),n.e(1041),n.e(8374),n.e(4268),n.e(3641),n.e(4444),n.e(9119),n.e(5755),n.e(9494),n.e(9033),n.e(3268),n.e(1572),n.e(2296),n.e(2174),n.e(782),n.e(3238),n.e(486),n.e(6002),n.e(4438),n.e(4408),n.e(5469),n.e(6509),n.e(4535),n.e(1359),n.e(7164),n.e(2899),n.e(8331),n.e(5020),n.e(6176),n.e(2289),n.e(884)]).then(n.bind(n,29813))}},scene:{tag:"ha-config-scene",load:function(){return Promise.all([n.e(6755),n.e(8200),n.e(879),n.e(1041),n.e(8374),n.e(4444),n.e(9119),n.e(5755),n.e(9494),n.e(782),n.e(6054),n.e(6509),n.e(4535),n.e(1359),n.e(7164),n.e(2899),n.e(1927),n.e(2519),n.e(1486),n.e(5020),n.e(5703),n.e(9226)]).then(n.bind(n,38562))}},helpers:{tag:"ha-config-helpers",load:function(){return Promise.all([n.e(5009),n.e(4358),n.e(6755),n.e(8200),n.e(879),n.e(4444),n.e(9119),n.e(5755),n.e(9494),n.e(2296),n.e(782),n.e(4407),n.e(6509),n.e(1359),n.e(7164),n.e(2899),n.e(2519),n.e(4820)]).then(n.bind(n,18690))}},users:{tag:"ha-config-users",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(4444),n.e(9119),n.e(5755),n.e(9494),n.e(782),n.e(6509),n.e(1359),n.e(7164),n.e(2899),n.e(2519),n.e(3465)]).then(n.bind(n,9914))}},zone:{tag:"ha-config-zone",load:function(){return Promise.all([n.e(6755),n.e(4444),n.e(9119),n.e(5628),n.e(6509),n.e(1359),n.e(9220),n.e(981)]).then(n.bind(n,19180))}},zha:{tag:"zha-config-dashboard-router",load:function(){return n.e(1875).then(n.bind(n,86094))}},zwave:{tag:"ha-config-zwave",load:function(){return Promise.all([n.e(5009),n.e(4358),n.e(6755),n.e(8200),n.e(879),n.e(3268),n.e(2296),n.e(6951),n.e(6509),n.e(4909),n.e(3936),n.e(9343)]).then(n.bind(n,62127))}},mqtt:{tag:"mqtt-config-panel",load:function(){return Promise.all([n.e(8200),n.e(879),n.e(3822),n.e(8052),n.e(7260)]).then(n.bind(n,42660))}},ozw:{tag:"ozw-config-router",load:function(){return n.e(5464).then(n.bind(n,37904))}}}}}},{kind:"field",decorators:[(0,r.sz)()],key:"_wideSidebar",value:function(){return!1}},{kind:"field",decorators:[(0,r.sz)()],key:"_wide",value:function(){return!1}},{kind:"field",decorators:[(0,r.sz)()],key:"_cloudStatus",value:void 0},{kind:"field",key:"_listeners",value:function(){return[]}},{kind:"method",key:"connectedCallback",value:function(){var e=this;S(_(l.prototype),"connectedCallback",this).call(this),this._listeners.push((0,i.K)("(min-width: 1040px)",(function(t){e._wide=t}))),this._listeners.push((0,i.K)("(min-width: 1296px)",(function(t){e._wideSidebar=t})))}},{kind:"method",key:"disconnectedCallback",value:function(){for(S(_(l.prototype),"disconnectedCallback",this).call(this);this._listeners.length;)this._listeners.pop()()}},{kind:"method",key:"firstUpdated",value:function(e){var t=this;S(_(l.prototype),"firstUpdated",this).call(this,e),this.hass.loadBackendTranslation("title"),(0,o.p)(this.hass,"cloud")&&this._updateCloudStatus(),this.addEventListener("ha-refresh-cloud-status",(function(){return t._updateCloudStatus()})),this.style.setProperty("--app-header-background-color","var(--sidebar-background-color)"),this.style.setProperty("--app-header-text-color","var(--sidebar-text-color)"),this.style.setProperty("--app-header-border-bottom","1px solid var(--divider-color)")}},{kind:"method",key:"updatePageEl",value:function(e){var t,n,r="docked"===this.hass.dockedSidebar?this._wideSidebar:this._wide;"setProperties"in e?e.setProperties({route:this.routeTail,hass:this.hass,showAdvanced:Boolean(null===(t=this.hass.userData)||void 0===t?void 0:t.showAdvanced),isWide:r,narrow:this.narrow,cloudStatus:this._cloudStatus}):(e.route=this.routeTail,e.hass=this.hass,e.showAdvanced=Boolean(null===(n=this.hass.userData)||void 0===n?void 0:n.showAdvanced),e.isWide=r,e.narrow=this.narrow,e.cloudStatus=this._cloudStatus)}},{kind:"method",key:"_updateCloudStatus",value:(c=regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.LI)(this.hass);case 2:this._cloudStatus=e.sent,"connecting"===this._cloudStatus.cloud&&setTimeout((function(){return t._updateCloudStatus()}),5e3);case 4:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=c.apply(e,t);function i(e){u(o,n,r,i,a,"next",e)}function a(e){u(o,n,r,i,a,"throw",e)}i(void 0)}))},function(){return s.apply(this,arguments)})}]}}),c.n)}}]);
//# sourceMappingURL=chunk.dac4bf56b0d0e7df380f.js.map