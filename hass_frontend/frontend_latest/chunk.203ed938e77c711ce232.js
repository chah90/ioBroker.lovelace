(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7282],{73589:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const i=e=>{const t=parseFloat(e);if(isNaN(t))throw new Error(`${e} is not a number`);return t};function n(e){if(!e)return null;try{if(e.endsWith("%"))return{w:100,h:i(e.substr(0,e.length-1))};const t=e.replace(":","x").split("x");return 0===t.length?null:1===t.length?{w:i(t[0]),h:1}:{w:i(t[0]),h:i(t[1])}}catch(e){}return null}},67250:(e,t,r)=>{"use strict";var i=r(15652),n=r(47181),a=r(91741),o=r(40095),s=r(7323),l=r(50538);r(319);function c(){c=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var a="static"===n?e:r;this.defineClassElement(a,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!u(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var a=this.decorateConstructor(r,t);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,a=n.length-1;a>=0;a--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[a])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){e=a.elements;for(var o=0;o<e.length-1;o++)for(var s=o+1;s<e.length;s++)if(e[o].key===e[s].key&&e[o].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=m(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:p(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=p(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function d(e){var t,r=m(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function h(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function u(e){return e.decorators&&e.decorators.length}function f(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function m(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}!function(e,t,r,i){var n=c();if(i)for(var a=0;a<i.length;a++)n=i[a](n);var o=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},i=0;i<e.length;i++){var n,a=e[i];if("method"===a.kind&&(n=t.find(r)))if(f(a.descriptor)||f(n.descriptor)){if(u(a)||u(n))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");n.descriptor=a.descriptor}else{if(u(a)){if(u(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");n.decorators=a.decorators}h(a,n)}else t.push(a)}return t}(o.d.map(d)),e);n.initializeClassElements(o.F,s.elements),n.runClassFinishers(o.F,s.finishers)}([(0,i.Mo)("ha-camera-stream")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"controls"})],key:"controls",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"muted"})],key:"muted",value:()=>!1},{kind:"field",decorators:[(0,i.Cb)({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value:()=>!1},{kind:"field",decorators:[(0,i.sz)()],key:"_forceMJPEG",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_url",value:void 0},{kind:"method",key:"render",value:function(){return this.stateObj?i.dy`
      ${this._shouldRenderMJPEG?i.dy`
            <img
              @load=${this._elementResized}
              .src=${(0,l.nk)(this.stateObj)}
              .alt=${`Preview of the ${(0,a.C)(this.stateObj)} camera.`}
            />
          `:this._url?i.dy`
            <ha-hls-player
              autoplay
              playsinline
              .allowExoPlayer=${this.allowExoPlayer}
              .muted=${this.muted}
              .controls=${this.controls}
              .hass=${this.hass}
              .url=${this._url}
            ></ha-hls-player>
          `:""}
    `:i.dy``}},{kind:"method",key:"updated",value:function(e){e.has("stateObj")&&!this._shouldRenderMJPEG&&(this._forceMJPEG=void 0,this._getStreamUrl())}},{kind:"get",key:"_shouldRenderMJPEG",value:function(){return this._forceMJPEG===this.stateObj.entity_id||!(0,s.p)(this.hass,"stream")||!(0,o.e)(this.stateObj,l.qW)}},{kind:"method",key:"_getStreamUrl",value:async function(){try{const{url:e}=await(0,l.Lr)(this.hass,this.stateObj.entity_id);this._url=e}catch(e){console.error(e),this._forceMJPEG=this.stateObj.entity_id}}},{kind:"method",key:"_elementResized",value:function(){(0,n.B)(this,"iron-resize")}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      :host,
      img {
        display: block;
      }

      img {
        width: 100%;
      }
    `}}]}}),i.oi)},50538:(e,t,r)=>{"use strict";r.d(t,{qW:()=>n,nk:()=>a,Xn:()=>c,Lr:()=>l,i4:()=>o,Mw:()=>d});var i=r(22814);const n=2,a=e=>`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`,o=(e,t)=>(async(e,t,r,i,n,...a)=>{let o=i[e];o||(o=i[e]={});const s=o[n];if(s)return s;const l=r(i,n,...a);return o[n]=l,l.then((()=>setTimeout((()=>{o[n]=void 0}),t)),(()=>{o[n]=void 0})),l})("_cameraTmbUrl",9e3,s,e,t),s=async(e,t)=>{const r=await(0,i.iI)(e,`/api/camera_proxy/${t}`);return e.hassUrl(r.path)},l=async(e,t,r)=>{const i={type:"camera/stream",entity_id:t};r&&(i.format=r);const n=await e.callWS(i);return n.url=e.hassUrl(n.url),n},c=(e,t)=>e.callWS({type:"camera/get_prefs",entity_id:t}),d=(e,t,r)=>e.callWS({type:"camera/update_prefs",entity_id:t,...r})},97282:(e,t,r)=>{"use strict";var i=r(15652),n=r(81471),a=r(79865),o=r(49706),s=r(73589),l=(r(67250),r(50538)),c=r(56007);function d(){d=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(i){t.forEach((function(t){var n=t.placement;if(t.kind===i&&("static"===n||"prototype"===n)){var a="static"===n?e:r;this.defineClassElement(a,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var i=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!f(e))return r.push(e);var t=this.decorateElement(e,n);r.push(t.element),r.push.apply(r,t.extras),i.push.apply(i,t.finishers)}),this),!t)return{elements:r,finishers:i};var a=this.decorateConstructor(r,t);return i.push.apply(i,a.finishers),a.finishers=i,a},addElementPlacement:function(e,t,r){var i=t[e.placement];if(!r&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)},decorateElement:function(e,t){for(var r=[],i=[],n=e.decorators,a=n.length-1;a>=0;a--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var s=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,n[a])(s)||s);e=l.element,this.addElementPlacement(e,t),l.finisher&&i.push(l.finisher);var c=l.extras;if(c){for(var d=0;d<c.length;d++)this.addElementPlacement(c[d],t);r.push.apply(r,c)}}return{element:e,finishers:i,extras:r}},decorateConstructor:function(e,t){for(var r=[],i=t.length-1;i>=0;i--){var n=this.fromClassDescriptor(e),a=this.toClassDescriptor((0,t[i])(n)||n);if(void 0!==a.finisher&&r.push(a.finisher),void 0!==a.elements){e=a.elements;for(var o=0;o<e.length-1;o++)for(var s=o+1;s<e.length;s++)if(e[o].key===e[s].key&&e[o].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=y(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var a={kind:t,key:r,placement:i,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),a.initializer=e.initializer),a},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:m(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=m(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var i=(0,t[r])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function h(e){var t,r=y(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function u(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function f(e){return e.decorators&&e.decorators.length}function p(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function m(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function y(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function k(e,t,r){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(i){var n=Object.getOwnPropertyDescriptor(i,t);return n.get?n.get.call(r):n.value}})(e,t,r||e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e,t,r,i){var n=d();if(i)for(var a=0;a<i.length;a++)n=i[a](n);var o=t((function(e){n.initializeInstanceElements(e,s.elements)}),r),s=n.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===a.key&&e.placement===a.placement},i=0;i<e.length;i++){var n,a=e[i];if("method"===a.kind&&(n=t.find(r)))if(p(a.descriptor)||p(n.descriptor)){if(f(a)||f(n))throw new ReferenceError("Duplicated methods ("+a.key+") can't be decorated.");n.descriptor=a.descriptor}else{if(f(a)){if(f(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+a.key+").");n.decorators=a.decorators}u(a,n)}else t.push(a)}return t}(o.d.map(h)),e);n.initializeClassElements(o.F,s.elements),n.runClassFinishers(o.F,s.finishers)}([(0,i.Mo)("hui-image")],(function(e,t){class r extends t{constructor(...t){super(...t),e(this)}}return{F:r,d:[{kind:"field",decorators:[(0,i.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"entity",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"image",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"stateImage",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"cameraImage",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"cameraView",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"aspectRatio",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"filter",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"stateFilter",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"darkModeImage",value:void 0},{kind:"field",decorators:[(0,i.Cb)()],key:"darkModeFilter",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_loadError",value:void 0},{kind:"field",decorators:[(0,i.sz)()],key:"_cameraImageSrc",value:void 0},{kind:"field",decorators:[(0,i.IO)("img")],key:"_image",value:void 0},{kind:"field",key:"_lastImageHeight",value:void 0},{kind:"field",key:"_cameraUpdater",value:void 0},{kind:"method",key:"connectedCallback",value:function(){k(g(r.prototype),"connectedCallback",this).call(this),this.cameraImage&&"live"!==this.cameraView&&this._startUpdateCameraInterval()}},{kind:"method",key:"disconnectedCallback",value:function(){k(g(r.prototype),"disconnectedCallback",this).call(this),this._stopUpdateCameraInterval()}},{kind:"method",key:"render",value:function(){if(!this.hass)return i.dy``;const e=this.aspectRatio?(0,s.Z)(this.aspectRatio):null,t=this.entity?this.hass.states[this.entity]:void 0,r=t?t.state:c.nZ;let l,d,h=!this.stateImage;if(this.cameraImage)"live"===this.cameraView?d=this.hass.states[this.cameraImage]:l=this._cameraImageSrc;else if(this.stateImage){const e=this.stateImage[r];e?l=e:(l=this.image,h=!0)}else l=this.darkModeImage&&this.hass.themes.darkMode?this.darkModeImage:this.image;l&&(l=this.hass.hassUrl(l));let u=this.filter||"";if(this.hass.themes.darkMode&&this.darkModeFilter&&(u+=this.darkModeFilter),this.stateFilter&&this.stateFilter[r]&&(u+=this.stateFilter[r]),!u&&this.entity){u=(!t||o.tj.includes(r))&&h?"grayscale(100%)":""}return i.dy`
      <div
        style=${(0,a.V)({paddingBottom:e&&e.w>0&&e.h>0?`${(100*e.h/e.w).toFixed(2)}%`:""})}
        class=${(0,n.$)({ratio:Boolean(e&&e.w>0&&e.h>0)})}
      >
        ${this.cameraImage&&"live"===this.cameraView?i.dy`
              <ha-camera-stream
                muted
                .hass=${this.hass}
                .stateObj=${d}
              ></ha-camera-stream>
            `:i.dy`
              <img
                id="image"
                src=${l}
                @error=${this._onImageError}
                @load=${this._onImageLoad}
                style=${(0,a.V)({filter:u,display:this._loadError?"none":"block"})}
              />
            `}
        ${this._loadError?i.dy`<div
              id="brokenImage"
              style=${(0,a.V)({height:`${this._lastImageHeight||"100"}px`})}
            ></div>`:""}
      </div>
    `}},{kind:"method",key:"updated",value:function(e){if(e.has("hass")){const t=e.get("hass");t&&t.connected===this.hass.connected||(this.hass.connected&&"live"!==this.cameraView?(this._updateCameraImageSrc(),this._startUpdateCameraInterval()):this.hass.connected||(this._stopUpdateCameraInterval(),this._cameraImageSrc=void 0,this._loadError=!0))}else e.has("cameraImage")&&"live"!==this.cameraView&&(this._updateCameraImageSrc(),this._startUpdateCameraInterval())}},{kind:"method",key:"_startUpdateCameraInterval",value:function(){this._stopUpdateCameraInterval(),this.cameraImage&&this.isConnected&&(this._cameraUpdater=window.setInterval((()=>this._updateCameraImageSrc()),1e4))}},{kind:"method",key:"_stopUpdateCameraInterval",value:function(){this._cameraUpdater&&(clearInterval(this._cameraUpdater),this._cameraUpdater=void 0)}},{kind:"method",key:"_onImageError",value:function(){this._loadError=!0}},{kind:"method",key:"_onImageLoad",value:async function(){this._loadError=!1,await this.updateComplete,this._lastImageHeight=this._image.offsetHeight}},{kind:"method",key:"_updateCameraImageSrc",value:async function(){if(!this.hass||!this.cameraImage)return;this.hass.states[this.cameraImage]?this._cameraImageSrc=await(0,l.i4)(this.hass,this.cameraImage):this._onImageError()}},{kind:"get",static:!0,key:"styles",value:function(){return i.iv`
      img {
        display: block;
        height: auto;
        transition: filter 0.2s linear;
        width: 100%;
      }

      .ratio {
        position: relative;
        width: 100%;
        height: 0;
      }

      .ratio img,
      .ratio div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #brokenImage {
        background: grey url("/static/images/image-broken.svg") center/36px
          no-repeat;
      }
    `}}]}}),i.oi)}}]);
//# sourceMappingURL=chunk.203ed938e77c711ce232.js.map