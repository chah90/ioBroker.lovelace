/*! For license information please see chunk.8effecba10502aa92104.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[4618],{45253:function(t,e,n){"use strict";n.d(e,{UX:function(){return r},j2:function(){return s},KT:function(){return a},HX:function(){return o},Ns:function(){return i}});var o,i,r={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},s={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},a={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(o||(o={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(i||(i={}))},6945:function(t,e,n){"use strict";n.d(e,{k:function(){return s}});var o=n(87480),i=n(72774),r=n(45253),s=function(t){function e(n){var i=t.call(this,(0,o.pi)((0,o.pi)({},e.defaultAdapter),n))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=r.Ns.TOP_START,i.originCorner=r.Ns.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return(0,o.ZT)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return r.UX},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return r.j2},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return r.KT},enumerable:!0,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return r.Ns},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,n=t.ROOT,o=t.OPEN;if(!this.adapter.hasClass(n))throw new Error(n+" class required in root element.");this.adapter.hasClass(o)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^r.HX.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.adapter.addClass(e.cssClasses.OPEN),t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),r.KT.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var n=this;void 0===t&&(t=!1),this.isSurfaceOpen&&(this.isQuickOpen?(this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose()):(this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){n.adapter.removeClass(e.cssClasses.OPEN),n.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),n.closeAnimationEndTimerId=setTimeout((function(){n.closeAnimationEndTimerId=0,n.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),n.adapter.notifyClose()}),r.KT.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()))},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var n=this.getoriginCorner(),o=this.getMenuSurfaceMaxHeight(n),i=this.hasBit(n,r.HX.BOTTOM)?"bottom":"top",s=this.hasBit(n,r.HX.RIGHT)?"right":"left",a=this.getHorizontalOriginOffset(n),c=this.getVerticalOriginOffset(n),u=this.measurements,h=u.anchorSize,f=u.surfaceSize,l=((t={})[s]=a,t[i]=c,t);h.width/f.width>r.KT.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(l),this.adapter.setTransformOrigin(s+" "+i),this.adapter.setPosition(l),this.adapter.setMaxHeight(o?o+"px":""),this.hasBit(n,r.HX.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),n=this.adapter.getWindowDimensions(),o=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:n.width-t.right,bottom:n.height-t.bottom,left:t.left},viewportSize:n,windowScroll:o}},e.prototype.getoriginCorner=function(){var t,n,o=this.originCorner,i=this.measurements,s=i.viewportDistance,a=i.anchorSize,c=i.surfaceSize,u=e.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,r.HX.BOTTOM)?(t=s.top-u+a.height+this.anchorMargin.bottom,n=s.bottom-u-this.anchorMargin.bottom):(t=s.top-u+this.anchorMargin.top,n=s.bottom-u+a.height-this.anchorMargin.top),!(n-c.height>0)&&t>=n&&(o=this.setBit(o,r.HX.BOTTOM));var h,f,l=this.adapter.isRtl(),d=this.hasBit(this.anchorCorner,r.HX.FLIP_RTL),p=this.hasBit(this.anchorCorner,r.HX.RIGHT)||this.hasBit(o,r.HX.RIGHT),m=!1;(m=l&&d?!p:p)?(h=s.left+a.width+this.anchorMargin.right,f=s.right-this.anchorMargin.right):(h=s.left+this.anchorMargin.left,f=s.right+a.width-this.anchorMargin.left);var y=h-c.width>0,g=f-c.width>0,T=this.hasBit(o,r.HX.FLIP_RTL)&&this.hasBit(o,r.HX.RIGHT);return g&&T&&l||!y&&T?o=this.unsetBit(o,r.HX.RIGHT):(y&&m&&l||y&&!m&&p||!g&&h>=f)&&(o=this.setBit(o,r.HX.RIGHT)),o},e.prototype.getMenuSurfaceMaxHeight=function(t){var n=this.measurements.viewportDistance,o=0,i=this.hasBit(t,r.HX.BOTTOM),s=this.hasBit(this.anchorCorner,r.HX.BOTTOM),a=e.numbers.MARGIN_TO_EDGE;return i?(o=n.top+this.anchorMargin.top-a,s||(o+=this.measurements.anchorSize.height)):(o=n.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-a,s&&(o-=this.measurements.anchorSize.height)),o},e.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,r.HX.RIGHT),o=this.hasBit(this.anchorCorner,r.HX.RIGHT);if(n){var i=o?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?i-(this.measurements.viewportSize.width-this.measurements.bodySize.width):i}return o?e.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,n=this.hasBit(t,r.HX.BOTTOM),o=this.hasBit(this.anchorCorner,r.HX.BOTTOM);return n?o?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:o?e.height+this.anchorMargin.bottom:this.anchorMargin.top},e.prototype.adjustPositionForHoistedElement=function(t){var e,n,i=this.measurements,r=i.windowScroll,s=i.viewportDistance,a=Object.keys(t);try{for(var c=(0,o.XA)(a),u=c.next();!u.done;u=c.next()){var h=u.value,f=t[h]||0;f+=s[h],this.isFixedPosition||("top"===h?f+=r.y:"bottom"===h?f-=r.y:"left"===h?f+=r.x:f-=r.x),t[h]=f}}catch(l){e={error:l}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus=function(){var t=this.adapter.isFocused(),e=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(t||e)&&this.adapter.restoreFocus()},e.prototype.hasBit=function(t,e){return Boolean(t&e)},e.prototype.setBit=function(t,e){return t|e},e.prototype.unsetBit=function(t,e){return t^e},e.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},e}(i.K);e.Z=s},24618:function(t,e,n){"use strict";var o=n(99525),i=n(15652),r=n(45253),s=n(6945),a=n(78220),c=n(14114),u=n(82612),h=n(81471),f=n(79865);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e,n,o,i,r,s){try{var a=t[r](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(o,i)}function p(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(['\n      <div\n          class="mdc-menu-surface ','"\n          style="','"\n          @keydown=',"\n          @opened=","\n          @closed=",">\n        <slot></slot>\n      </div>"]);return p=function(){return t},t}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=b(t);if(e){var i=b(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v={TOP_LEFT:r.Ns.TOP_LEFT,TOP_RIGHT:r.Ns.TOP_RIGHT,BOTTOM_LEFT:r.Ns.BOTTOM_LEFT,BOTTOM_RIGHT:r.Ns.BOTTOM_RIGHT,TOP_START:r.Ns.TOP_START,TOP_END:r.Ns.TOP_END,BOTTOM_START:r.Ns.BOTTOM_START,BOTTOM_END:r.Ns.BOTTOM_END},C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(l,t);var e,n,o,c=T(l);function l(){var t;return m(this,l),(t=c.apply(this,arguments)).mdcFoundationClass=s.Z,t.absolute=!1,t.fullwidth=!1,t.fixed=!1,t.x=null,t.y=null,t.quick=!1,t.open=!1,t.bitwiseCorner=r.Ns.TOP_START,t.previousMenuCorner=null,t.menuCorner="START",t.corner="TOP_START",t.styleTop="",t.styleLeft="",t.styleRight="",t.styleBottom="",t.styleMaxHeight="",t.styleTransformOrigin="",t.anchor=null,t.previouslyFocused=null,t.previousAnchor=null,t.onBodyClickBound=function(){},t}return e=l,(n=[{key:"render",value:function(){var t={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth},e={top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin};return(0,i.dy)(p(),(0,h.$)(t),(0,f.V)(e),this.onKeydown,this.registerBodyClick,this.deregisterBodyClick)}},{key:"createAdapter",value:function(){var t,e,n=this;return Object.assign(Object.assign({},(0,a.q)(this.mdcRoot)),{hasAnchor:function(){return!!n.anchor},notifyClose:function(){var t=new CustomEvent("closed",{bubbles:!0,composed:!0});n.open=!1,n.mdcRoot.dispatchEvent(t)},notifyOpen:function(){var t=new CustomEvent("opened",{bubbles:!0,composed:!0});n.open=!0,n.mdcRoot.dispatchEvent(t)},isElementInContainer:function(){return!1},isRtl:function(){return!!n.mdcRoot&&"rtl"===getComputedStyle(n.mdcRoot).direction},setTransformOrigin:function(t){n.mdcRoot&&(n.styleTransformOrigin=t)},isFocused:function(){return(0,u.WU)(n)},saveFocus:function(){var t=(0,u.Mh)(),e=t.length;e||(n.previouslyFocused=null),n.previouslyFocused=t[e-1]},restoreFocus:function(){n.previouslyFocused&&"focus"in n.previouslyFocused&&n.previouslyFocused.focus()},getInnerDimensions:function(){var t=n.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:function(){var t=n.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(t){n.mdcRoot&&(n.styleLeft="left"in t?"".concat(t.left,"px"):"",n.styleRight="right"in t?"".concat(t.right,"px"):"",n.styleTop="top"in t?"".concat(t.top,"px"):"",n.styleBottom="bottom"in t?"".concat(t.bottom,"px"):"")},setMaxHeight:(t=regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.mdcRoot){t.next=3;break}return t.abrupt("return");case 3:return n.styleMaxHeight=e,t.next=6,n.updateComplete;case 6:n.styleMaxHeight="var(--mdc-menu-max-height, ".concat(e,")");case 7:case"end":return t.stop()}}),t)})),e=function(){var e=this,n=arguments;return new Promise((function(o,i){var r=t.apply(e,n);function s(t){d(r,o,i,s,a,"next",t)}function a(t){d(r,o,i,s,a,"throw",t)}s(void 0)}))},function(t){return e.apply(this,arguments)})})}},{key:"onKeydown",value:function(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}},{key:"onBodyClick",value:function(t){-1===t.composedPath().indexOf(this)&&this.close()}},{key:"registerBodyClick",value:function(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}},{key:"deregisterBodyClick",value:function(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}},{key:"close",value:function(){this.open=!1}},{key:"show",value:function(){this.open=!0}}])&&y(e.prototype,n),o&&y(e,o),l}(a.H);function E(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}([".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px))}"]);return E=function(){return t},t}(0,o.gn)([(0,i.IO)(".mdc-menu-surface")],C.prototype,"mdcRoot",void 0),(0,o.gn)([(0,i.IO)("slot")],C.prototype,"slotElement",void 0),(0,o.gn)([(0,i.Cb)({type:Boolean}),(0,c.P)((function(t){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(t)}))],C.prototype,"absolute",void 0),(0,o.gn)([(0,i.Cb)({type:Boolean})],C.prototype,"fullwidth",void 0),(0,o.gn)([(0,i.Cb)({type:Boolean}),(0,c.P)((function(t){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setIsHoisted(t)}))],C.prototype,"fixed",void 0),(0,o.gn)([(0,i.Cb)({type:Number}),(0,c.P)((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y,right:-t,bottom:this.y}))}))],C.prototype,"x",void 0),(0,o.gn)([(0,i.Cb)({type:Number}),(0,c.P)((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t,right:-this.x,bottom:t}))}))],C.prototype,"y",void 0),(0,o.gn)([(0,i.Cb)({type:Boolean}),(0,c.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],C.prototype,"quick",void 0),(0,o.gn)([(0,i.Cb)({type:Boolean,reflect:!0}),(0,c.P)((function(t,e){this.mdcFoundation&&(t?this.mdcFoundation.open():void 0!==e&&this.mdcFoundation.close())}))],C.prototype,"open",void 0),(0,o.gn)([(0,i.sz)(),(0,c.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(t)}))],C.prototype,"bitwiseCorner",void 0),(0,o.gn)([(0,i.Cb)({type:String}),(0,c.P)((function(t){if(this.mdcFoundation){var e="START"===t||"END"===t,n=null===this.previousMenuCorner,o=!n&&t!==this.previousMenuCorner;e&&(o||n&&"END"===t)&&(this.bitwiseCorner=this.bitwiseCorner^r.HX.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=t)}}))],C.prototype,"menuCorner",void 0),(0,o.gn)([(0,i.Cb)({type:String}),(0,c.P)((function(t){if(this.mdcFoundation&&t){var e=v[t];"END"===this.menuCorner&&(e^=r.HX.RIGHT),this.bitwiseCorner=e}}))],C.prototype,"corner",void 0),(0,o.gn)([(0,i.sz)()],C.prototype,"styleTop",void 0),(0,o.gn)([(0,i.sz)()],C.prototype,"styleLeft",void 0),(0,o.gn)([(0,i.sz)()],C.prototype,"styleRight",void 0),(0,o.gn)([(0,i.sz)()],C.prototype,"styleBottom",void 0),(0,o.gn)([(0,i.sz)()],C.prototype,"styleMaxHeight",void 0),(0,o.gn)([(0,i.sz)()],C.prototype,"styleTransformOrigin",void 0);var R=(0,i.iv)(E());function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=P(t);if(e){var i=P(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return M(this,n)}}function M(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(n,t);var e=S(n);function n(){return w(this,n),e.apply(this,arguments)}return n}(C);I.styles=R,I=(0,o.gn)([(0,i.Mo)("mwc-menu-surface")],I)},99525:function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,{gn:function(){return i}});function i(t,e,n,i){var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"==typeof Reflect?"undefined":o(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a}Object.create;Object.create}}]);
//# sourceMappingURL=chunk.8effecba10502aa92104.js.map