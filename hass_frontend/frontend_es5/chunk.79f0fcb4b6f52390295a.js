(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[2333],{32333:function(t,e,n){"use strict";var i=n(15652);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){var t=d(["\n      :host {\n        display: inline-block;\n        width: 100%;\n      }\n      svg {\n        overflow: visible;\n        display: block;\n      }\n      path {\n        transition: stroke 1s ease-out, stroke-width 200ms ease-out;\n      }\n      .slider {\n        fill: none;\n        stroke-width: var(--round-slider-path-width, 3);\n        stroke-linecap: var(--round-slider-linecap, round);\n      }\n      .path {\n        stroke: var(--round-slider-path-color, lightgray);\n      }\n      .bar {\n        stroke: var(--round-slider-bar-color, deepskyblue);\n      }\n      svg[disabled] .bar {\n        stroke: var(--round-slider-disabled-bar-color, darkgray);\n      }\n      g.handles {\n        stroke: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));\n        stroke-linecap: round;\n        cursor: var(--round-slider-handle-cursor, pointer);\n      }\n      g.low.handle {\n        stroke: var(--round-slider-low-handle-color);\n      }\n      g.high.handle {\n        stroke: var(--round-slider-high-handle-color);\n      }\n      svg[disabled] g.handles {\n        stroke: var(--round-slider-disabled-bar-color, darkgray);\n      }\n      .handle:focus {\n        outline: unset;\n      }\n    "]);return s=function(){return t},t}function a(){var t=d(["",""]);return a=function(){return t},t}function o(){var t=d([""," ",""]);return o=function(){return t},t}function h(){var t=d([""," ",""]);return h=function(){return t},t}function l(){var t=d(["\n      <svg\n        @mousedown=","\n        @touchstart=",'\n        xmln="http://www.w3.org/2000/svg"\n        viewBox="'," "," "," ",'"\n        style="margin: ','px;"\n        ?disabled=','\n        focusable="false"\n      >\n        <g class="slider">\n          <path\n            class="path"\n            d=','\n            vector-effect="non-scaling-stroke"\n          />\n          <path\n            class="bar"\n            vector-effect="non-scaling-stroke"\n            d=','\n          />\n          <path\n            class="shadowpath"\n            d=','\n            vector-effect="non-scaling-stroke"\n            stroke="rgba(0,0,0,0)"\n            stroke-width="','"\n            stroke-linecap="butt"\n          />\n\n        </g>\n\n        <g class="handles">\n        ',"\n        </g>\n      </svg>\n    "]);return l=function(){return t},t}function u(){var t=d(['\n      <g class="',' handle">\n        <path\n          id=','\n          class="overflow"\n          d="\n          M '," ","\n          L "," ",'\n          "\n          vector-effect="non-scaling-stroke"\n          stroke="rgba(0,0,0,0)"\n          stroke-width="','"\n          />\n        <path\n          id=','\n          class="handle"\n          d="\n          M '," ","\n          L "," ",'\n          "\n          vector-effect="non-scaling-stroke"\n          stroke-width="','"\n          tabindex="0"\n          @focus=',"\n          @blur=",'\n          role="slider"\n          aria-valuemin=',"\n          aria-valuemax=","\n          aria-valuenow=","\n          aria-disabled=","\n          aria-label=","\n          />\n        </g>\n      "]);return u=function(){return t},t}function d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=_(t);if(e){var r=_(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(n,t);var e=y(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(t=e.call(this)).min=0,t.max=100,t.step=1,t.startAngle=135,t.arcLength=270,t.handleSize=6,t.handleZoom=1.5,t.readonly=!1,t.disabled=!1,t.dragging=!1,t.rtl=!1,t._scale=1,t.attachedListeners=!1,t}return g(n,null,[{key:"properties",get:function(){return{value:{type:Number},high:{type:Number},low:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number},startAngle:{type:Number},arcLength:{type:Number},handleSize:{type:Number},handleZoom:{type:Number},readonly:{type:Boolean},disabled:{type:Boolean},dragging:{type:Boolean,reflect:!0},rtl:{type:Boolean},_scale:{type:Number},valueLabel:{type:String},lowLabel:{type:String},highLabel:{type:String}}}}]),g(n,[{key:"_angleInside",value:function(t){var e=(this.startAngle+this.arcLength/2-t+180+360)%360-180;return e<this.arcLength/2&&e>-this.arcLength/2}},{key:"_angle2xy",value:function(t){return this.rtl?{x:-Math.cos(t),y:Math.sin(t)}:{x:Math.cos(t),y:Math.sin(t)}}},{key:"_xy2angle",value:function(t,e){return this.rtl&&(t=-t),(Math.atan2(e,t)-this._start+2*Math.PI)%(2*Math.PI)}},{key:"_value2angle",value:function(t){var e=((t=Math.min(this.max,Math.max(this.min,t)))-this.min)/(this.max-this.min);return this._start+e*this._len}},{key:"_angle2value",value:function(t){return Math.round((t/this._len*(this.max-this.min)+this.min)/this.step)*this.step}},{key:"_mouse2value",value:function(t){var e=t.type.startsWith("touch")?t.touches[0].clientX:t.clientX,n=t.type.startsWith("touch")?t.touches[0].clientY:t.clientY,i=this.shadowRoot.querySelector("svg").getBoundingClientRect(),r=this._boundaries,s=e-(i.left+r.left*i.width/r.width),a=n-(i.top+r.up*i.height/r.height),o=this._xy2angle(s,a);return this._angle2value(o)}},{key:"dragStart",value:function(t){var e=this;if(this._showHandle&&!this.disabled){var n=t.target,i=void 0;if(!this._rotation||"focus"===this._rotation.type){if(n.classList.contains("shadowpath"))if("touchstart"===t.type&&(i=window.setTimeout((function(){e._rotation&&(e._rotation.cooldown=void 0)}),200)),null==this.low)n=this.shadowRoot.querySelector("#value");else{var r=this._mouse2value(t);n=Math.abs(r-this.low)<Math.abs(r-this.high)?this.shadowRoot.querySelector("#low"):this.shadowRoot.querySelector("#high")}if(n.classList.contains("overflow")&&(n=n.nextElementSibling),n.classList.contains("handle")){n.setAttribute("stroke-width",2*this.handleSize*this.handleZoom*this._scale);var s="high"===n.id?this.low:this.min,a="low"===n.id?this.high:this.max;this._rotation={handle:n,min:s,max:a,start:this[n.id],type:t.type,cooldown:i},this.dragging=!0}}}}},{key:"_cleanupRotation",value:function(){var t=this._rotation.handle;t.setAttribute("stroke-width",2*this.handleSize*this._scale),this._rotation=!1,this.dragging=!1,t.blur()}},{key:"dragEnd",value:function(t){if(this._showHandle&&!this.disabled&&this._rotation){var e=this._rotation.handle;this._cleanupRotation();var n=new CustomEvent("value-changed",{detail:c({},e.id,this[e.id]),bubbles:!0,composed:!0});this.dispatchEvent(n),this.low&&this.low>=.99*this.max?this._reverseOrder=!0:this._reverseOrder=!1}}},{key:"drag",value:function(t){if(this._showHandle&&!this.disabled&&this._rotation){if(this._rotation.cooldown)return window.clearTimeout(this._rotation.coldown),void this._cleanupRotation();if("focus"!==this._rotation.type){t.preventDefault();var e=this._mouse2value(t);this._dragpos(e)}}}},{key:"_dragpos",value:function(t){if(!(t<this._rotation.min||t>this._rotation.max)){var e=this._rotation.handle;this[e.id]=t;var n=new CustomEvent("value-changing",{detail:c({},e.id,t),bubbles:!0,composed:!0});this.dispatchEvent(n)}}},{key:"_keyStep",value:function(t){if(this._showHandle&&!this.disabled&&this._rotation){var e=this._rotation.handle;"ArrowLeft"!==t.key&&"ArrowDown"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]+this.step):this._dragpos(this[e.id]-this.step)),"ArrowRight"!==t.key&&"ArrowUp"!==t.key||(t.preventDefault(),this.rtl?this._dragpos(this[e.id]-this.step):this._dragpos(this[e.id]+this.step)),"Home"===t.key&&(t.preventDefault(),this._dragpos(this.min)),"End"===t.key&&(t.preventDefault(),this._dragpos(this.max))}}},{key:"firstUpdated",value:function(){document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),{passive:!1}),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("touchmove",this.drag.bind(this),{passive:!1}),document.addEventListener("keydown",this._keyStep.bind(this))}},{key:"updated",value:function(t){var e=this;if(this.shadowRoot.querySelector(".slider")){var n=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(n&&n.strokeWidth){var i=parseFloat(n.strokeWidth);if(i>this.handleSize*this.handleZoom){var r=this._boundaries,s="\n          ".concat(i/2*Math.abs(r.up),"px\n          ").concat(i/2*Math.abs(r.right),"px\n          ").concat(i/2*Math.abs(r.down),"px\n          ").concat(i/2*Math.abs(r.left),"px");this.shadowRoot.querySelector("svg").style.margin=s}}}if(this.shadowRoot.querySelector("svg")&&void 0===this.shadowRoot.querySelector("svg").style.vectorEffect){t.has("_scale")&&1!=this._scale&&this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach((function(t){if(!t.getAttribute("stroke-width")){var n=parseFloat(getComputedStyle(t).getPropertyValue("stroke-width"));t.style.strokeWidth="".concat(n*e._scale,"px")}}));var a=this.shadowRoot.querySelector("svg").getBoundingClientRect(),o=Math.max(a.width,a.height);this._scale=2/o}}},{key:"_renderArc",value:function(t,e){var n=e-t;return t=this._angle2xy(t),e=this._angle2xy(e+.001),"\n      M ".concat(t.x," ").concat(t.y,"\n      A 1 1,\n        0,\n        ").concat(n>Math.PI?"1":"0"," ").concat(this.rtl?"0":"1",",\n        ").concat(e.x," ").concat(e.y,"\n    ")}},{key:"_renderHandle",value:function(t){var e=this._value2angle(this[t]),n=this._angle2xy(e),r={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[t]||"";return(0,i.YP)(u(),t,t,n.x,n.y,n.x+.001,n.y+.001,4*this.handleSize*this._scale,t,n.x,n.y,n.x+.001,n.y+.001,2*this.handleSize*this._scale,this.dragStart,this.dragEnd,this.min,this.max,this[t],this.disabled,r||"")}},{key:"render",value:function(){var t=this._boundaries;return(0,i.dy)(l(),this.dragStart,this.dragStart,-t.left,-t.up,t.width,t.height,this.handleSize*this.handleZoom,this.disabled,this._renderArc(this._start,this._end),this._renderArc(this._value2angle(null!=this.low?this.low:this.min),this._value2angle(null!=this.high?this.high:this.value)),this._renderArc(this._start,this._end),3*this.handleSize*this._scale,this._showHandle?null!=this.low?this._reverseOrder?(0,i.dy)(h(),this._renderHandle("high"),this._renderHandle("low")):(0,i.dy)(o(),this._renderHandle("low"),this._renderHandle("high")):(0,i.dy)(a(),this._renderHandle("value")):"")}},{key:"_start",get:function(){return this.startAngle*Math.PI/180}},{key:"_len",get:function(){return Math.min(this.arcLength*Math.PI/180,2*Math.PI-.01)}},{key:"_end",get:function(){return this._start+this._len}},{key:"_showHandle",get:function(){return!this.readonly&&(null!=this.value||null!=this.high&&null!=this.low)}},{key:"_boundaries",get:function(){var t=this._angle2xy(this._start),e=this._angle2xy(this._end),n=1;this._angleInside(270)||(n=Math.max(-t.y,-e.y));var i=1;this._angleInside(90)||(i=Math.max(t.y,e.y));var r=1;this._angleInside(180)||(r=Math.max(-t.x,-e.x));var s=1;return this._angleInside(0)||(s=Math.max(t.x,e.x)),{up:n,down:i,left:r,right:s,height:n+i,width:r+s}}}],[{key:"styles",get:function(){return(0,i.iv)(s())}}]),n}(i.oi);customElements.define("round-slider",b)}}]);
//# sourceMappingURL=chunk.79f0fcb4b6f52390295a.js.map