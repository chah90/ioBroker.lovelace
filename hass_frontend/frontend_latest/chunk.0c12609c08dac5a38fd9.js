(self.webpackJsonp=self.webpackJsonp||[]).push([[160],{778:function(t,e,s){"use strict";s.r(e);var n=s(90);let a;var i=s(504),r=s(449),o=s(503);function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}let h;s.d(e,"CastManager",function(){return u}),s.d(e,"getCastManager",function(){return d});class u{constructor(t){c(this,"auth",void 0),c(this,"status",void 0),c(this,"_eventListeners",{}),this.auth=t;const e=this.castContext;e.setOptions({receiverApplicationId:i.a,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED}),e.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,t=>this._sessionStateChanged(t)),e.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED,t=>this._castStateChanged(t))}addEventListener(t,e){return t in this._eventListeners||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),()=>{this._eventListeners[t].splice(this._eventListeners[t].indexOf(e))}}get castConnectedToOurHass(){return void 0!==this.status&&void 0!==this.auth&&this.status.connected&&(this.status.hassUrl===this.auth.data.hassUrl||i.b&&this.status.hassUrl===r.b)}sendMessage(t){this.castSession.sendMessage(i.c,t)}get castState(){return this.castContext.getCastState()}get castContext(){return cast.framework.CastContext.getInstance()}get castSession(){return this.castContext.getCurrentSession()}requestSession(){return this.castContext.requestSession()}_fireEvent(t){for(const e of this._eventListeners[t]||[])e()}_receiveMessage(t){"receiver_status"===t.type&&(this.status=t,this._fireEvent("connection-changed"))}_sessionStateChanged(t){"SESSION_STARTED"===t.sessionState||"SESSION_RESUMED"===t.sessionState?(this.auth?Object(o.a)(this,this.auth):this.sendMessage({type:"get_status"}),this._attachMessageListener()):"SESSION_ENDED"===t.sessionState&&(this.status=void 0,this._fireEvent("connection-changed"))}_castStateChanged(t){this._fireEvent("state-changed")}_attachMessageListener(){this.castSession.addMessageListener(i.c,(t,e)=>this._receiveMessage(JSON.parse(e)))}}const d=t=>(h||(h=(()=>{if(a)return a;a=new Promise(t=>{window.__onGCastApiAvailable=t});const t=document.createElement("div");return t.id="cast",document.body.append(t),Object(n.b)("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),a})().then(e=>{if(!e)throw new Error("No Cast API available");return new u(t)})),h)}}]);
//# sourceMappingURL=chunk.0c12609c08dac5a38fd9.js.map