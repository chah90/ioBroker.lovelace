/*! For license information please see chunk.56442c080c107c374ea3.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[44],{118:function(e,n,t){"use strict";t(3);var i={properties:{animationConfig:{type:Object},entryAnimation:{observer:"_entryAnimationChanged",type:String},exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function(){this.animationConfig=this.animationConfig||{},this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function(e,n){for(var t in n)e[t]=n[t]},_cloneConfig:function(e){var n={isClone:!0};return this._copyProperties(n,e),n},_getAnimationConfigRecursive:function(e,n,t){var i;if(this.animationConfig)if(this.animationConfig.value&&"function"==typeof this.animationConfig.value)this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));else if(i=e?this.animationConfig[e]:this.animationConfig,Array.isArray(i)||(i=[i]),i)for(var o,a=0;o=i[a];a++)if(o.animatable)o.animatable._getAnimationConfigRecursive(o.type||e,n,t);else if(o.id){var r=n[o.id];r?(r.isClone||(n[o.id]=this._cloneConfig(r),r=n[o.id]),this._copyProperties(r,o)):n[o.id]=o}else t.push(o)},getAnimationConfig:function(e){var n={},t=[];for(var i in this._getAnimationConfigRecursive(e,n,t),n)t.push(n[i]);return t}};t.d(n,"a",function(){return o});var o=[i,{_configureAnimations:function(e){var n=[],t=[];if(e.length>0)for(var i,o=0;i=e[o];o++){var a=document.createElement(i.name);if(a.isNeonAnimation){var r;a.configure||(a.configure=function(e){return null}),r=a.configure(i),t.push({result:r,config:i,neonAnimation:a})}else console.warn(this.is+":",i.name,"not found!")}for(var s=0;s<t.length;s++){var l=t[s].result,c=t[s].config,u=t[s].neonAnimation;try{"function"!=typeof l.cancel&&(l=document.timeline.play(l))}catch(p){l=null,console.warn("Couldnt play","(",c.name,").",p)}l&&n.push({neonAnimation:u,config:c,animation:l})}return n},_shouldComplete:function(e){for(var n=!0,t=0;t<e.length;t++)if("finished"!=e[t].animation.playState){n=!1;break}return n},_complete:function(e){for(var n=0;n<e.length;n++)e[n].neonAnimation.complete(e[n].config);for(n=0;n<e.length;n++)e[n].animation.cancel()},playAnimation:function(e,n){var t=this.getAnimationConfig(e);if(t){this._active=this._active||{},this._active[e]&&(this._complete(this._active[e]),delete this._active[e]);var i=this._configureAnimations(t);if(0!=i.length){this._active[e]=i;for(var o=0;o<i.length;o++)i[o].animation.onfinish=function(){this._shouldComplete(i)&&(this._complete(i),delete this._active[e],this.fire("neon-animation-finish",n,{bubbles:!1}))}.bind(this)}else this.fire("neon-animation-finish",n,{bubbles:!1})}},cancelAnimation:function(){for(var e in this._active){var n=this._active[e];for(var t in n)n[t].animation.cancel()}this._active={}}}]},184:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return r});t(3);var i=t(85),o=t(2),a={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,n){n&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var n=Object(o.a)(e).path,t=0,i=n.indexOf(this);t<i;t++){var a=n[t];if(a.hasAttribute&&(a.hasAttribute("dialog-dismiss")||a.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(a.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},r=[i.a,a]},185:function(e,n,t){"use strict";t(3),t(66),t(148);var i=t(5),o=t(4),a=t(121);function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n  <style include="paper-spinner-styles"></style>\n\n  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">\n    <div class="spinner-layer layer-1">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-2">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-3">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n\n    <div class="spinner-layer layer-4">\n      <div class="circle-clipper left">\n        <div class="circle"></div>\n      </div>\n      <div class="circle-clipper right">\n        <div class="circle"></div>\n      </div>\n    </div>\n  </div>\n']);return r=function(){return e},e}var s=Object(o.a)(r());s.setAttribute("strip-whitespace",""),Object(i.a)({_template:s,is:"paper-spinner",behaviors:[a.a]})},192:function(e,n,t){"use strict";t(3),t(45),t(42),t(53),t(84);var i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},193:function(e,n,t){"use strict";t(3),t(192);var i=t(118),o=t(184),a=t(5),r=t(4);function s(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n    <style include="paper-dialog-shared-styles"></style>\n    <slot></slot>\n']);return s=function(){return e},e}Object(a.a)({_template:Object(r.a)(s()),is:"paper-dialog",behaviors:[o.a,i.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},195:function(e,n,t){"use strict";t(193);var i=t(71),o=t(2),a=t(122),r={getTabbableNodes:function(e){var n=[];return this._collectTabbableNodes(e,n)?a.a._sortByTabIndex(n):n},_collectTabbableNodes:function(e,n){if(e.nodeType!==Node.ELEMENT_NODE||!a.a._isVisible(e))return!1;var t,i=e,r=a.a._normalizedTabIndex(i),s=r>0;r>=0&&n.push(i),t="content"===i.localName||"slot"===i.localName?Object(o.a)(i).getDistributedNodes():Object(o.a)(i.shadowRoot||i.root||i).children;for(var l=0;l<t.length;l++)s=this._collectTabbableNodes(t[l],n)||s;return s}};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var p=customElements.get("paper-dialog"),d={get _focusableNodes(){return r.getTabbableNodes(this)}},f=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,c(n).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,Object(i["b"])([d],p)),n}();customElements.define("ha-paper-dialog",f)},736:function(e,n,t){"use strict";t.r(n);t(83),t(185);var i=t(4),o=t(30),a=(t(195),t(92),t(173));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <style include="ha-style-dialog">\n        .error {\n          color: red;\n        }\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        .username {\n          margin-top: -8px;\n        }\n      </style>\n      <ha-paper-dialog\n        id="dialog"\n        with-backdrop\n        opened="{{_opened}}"\n        on-opened-changed="_openedChanged"\n      >\n        <h2>[[localize(\'ui.panel.config.users.add_user.caption\')]]</h2>\n        <div>\n          <template is="dom-if" if="[[_errorMsg]]">\n            <div class="error">[[_errorMsg]]</div>\n          </template>\n          <paper-input\n            class="name"\n            label="[[localize(\'ui.panel.config.users.add_user.name\')]]"\n            value="{{_name}}"\n            required\n            auto-validate\n            autocapitalize="on"\n            error-message="Required"\n            on-blur="_maybePopulateUsername"\n          ></paper-input>\n          <paper-input\n            class="username"\n            label="[[localize(\'ui.panel.config.users.add_user.username\')]]"\n            value="{{_username}}"\n            required\n            auto-validate\n            autocapitalize="none"\n            error-message="Required"\n          ></paper-input>\n          <paper-input\n            label="[[localize(\'ui.panel.config.users.add_user.password\')]]"\n            type="password"\n            value="{{_password}}"\n            required\n            auto-validate\n            error-message="Required"\n          ></paper-input>\n        </div>\n        <div class="buttons">\n          <template is="dom-if" if="[[_loading]]">\n            <div class="submit-spinner">\n              <paper-spinner active></paper-spinner>\n            </div>\n          </template>\n          <template is="dom-if" if="[[!_loading]]">\n            <mwc-button on-click="_createUser"\n              >[[localize(\'ui.panel.config.users.add_user.create\')]]</mwc-button\n            >\n          </template>\n        </div>\n      </ha-paper-dialog>\n    ']);return s=function(){return e},e}function l(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,n){return!n||"object"!==r(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e,n,t){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=p(e)););return e}(e,n);if(i){var o=Object.getOwnPropertyDescriptor(i,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,p(n).apply(this,arguments))}var t,r,f;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,Object(a["a"])(o["a"])),t=n,f=[{key:"template",get:function(){return Object(i.a)(s())}},{key:"properties",get:function(){return{_hass:Object,_dialogClosedCallback:Function,_loading:{type:Boolean,value:!1},_errorMsg:String,_opened:{type:Boolean,value:!1},_name:String,_username:String,_password:String}}}],(r=[{key:"ready",value:function(){var e=this;u(p(n.prototype),"ready",this).call(this),this.addEventListener("keypress",function(n){13===n.keyCode&&e._createUser(n)})}},{key:"showDialog",value:function(e){var n=this,t=e.hass,i=e.dialogClosedCallback;this.hass=t,this._dialogClosedCallback=i,this._loading=!1,this._opened=!0,setTimeout(function(){return n.shadowRoot.querySelector("paper-input").focus()},0)}},{key:"_maybePopulateUsername",value:function(){if(!this._username){var e=this._name.split(" ");e.length&&(this._username=e[0].toLowerCase())}}},{key:"_createUser",value:function(e){var n,t;return regeneratorRuntime.async(function(i){for(;;)switch(i.prev=i.next){case 0:if(e.preventDefault(),this._name&&this._username&&this._password){i.next=3;break}return i.abrupt("return");case 3:return this._loading=!0,this._errorMsg=null,i.prev=5,i.next=8,regeneratorRuntime.awrap(this.hass.callWS({type:"config/auth/create",name:this._name}));case 8:t=i.sent,n=t.user.id,i.next=17;break;case 12:return i.prev=12,i.t0=i.catch(5),this._loading=!1,this._errorMsg=i.t0.code,i.abrupt("return");case 17:return i.prev=17,i.next=20,regeneratorRuntime.awrap(this.hass.callWS({type:"config/auth_provider/homeassistant/create",user_id:n,username:this._username,password:this._password}));case 20:i.next=29;break;case 22:return i.prev=22,i.t1=i.catch(17),this._loading=!1,this._errorMsg=i.t1.code,i.next=28,regeneratorRuntime.awrap(this.hass.callWS({type:"config/auth/delete",user_id:n}));case 28:return i.abrupt("return");case 29:this._dialogDone(n);case 30:case"end":return i.stop()}},null,this,[[5,12],[17,22]])}},{key:"_dialogDone",value:function(e){this._dialogClosedCallback({userId:e}),this.setProperties({_errorMsg:null,_username:"",_password:"",_dialogClosedCallback:null,_opened:!1})}},{key:"_equals",value:function(e,n){return e===n}},{key:"_openedChanged",value:function(e){this._dialogClosedCallback&&!e.detail.value&&this._dialogDone()}}])&&l(t.prototype,r),f&&l(t,f),n}();customElements.define("ha-dialog-add-user",f)}}]);
//# sourceMappingURL=chunk.56442c080c107c374ea3.js.map