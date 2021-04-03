/*! For license information please see chunk.269210703788359244f3.js.LICENSE.txt */
(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[3300],{33300:(t,e,n)=>{"use strict";var i,o=n(99525),s=n(15652),r=(n(36051),n(24618),{MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"}),l={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},d={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(i||(i={}));var a=n(87480),c=n(72774),u=n(74015),m=n(6945);const p=function(t){function e(n){var o=t.call(this,(0,a.pi)((0,a.pi)({},e.defaultAdapter),n))||this;return o.closeAnimationEndTimerId_=0,o.defaultFocusState_=i.LIST_ROOT,o}return(0,a.ZT)(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return r},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var e=t.key,n=t.keyCode;("Tab"===e||9===n)&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var e=this,n=this.adapter.getElementIndex(t);n<0||(this.adapter.notifySelected({index:n}),this.adapter.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var n=e.adapter.getElementIndex(t);n>=0&&e.adapter.isSelectableItemAtIndex(n)&&e.setSelectedIndex(n)}),m.k.numbers.TRANSITION_CLOSE_DURATION))},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case i.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case i.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case i.NONE:break;default:this.adapter.focusListRoot()}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter.removeAttributeFromElementAtIndex(e,l.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(e,r.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,r.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,l.ARIA_CHECKED_ATTR,"true")},e.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter.removeClassFromElementAtIndex(t,u.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,l.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,u.UX.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,l.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex_=function(t){var e=this.adapter.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(c.K);var h=n(78220),f=n(14114);class I extends h.H{constructor(){super(...arguments),this.mdcFoundationClass=p,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.menuCorner="START",this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){const t="menu"===this.innerRole?"menuitem":"option";return s.dy`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-list"
          .itemRoles=${t}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const n=this.listElement;if(!n)return;const i=n.items[t];i&&("mdc-menu-item--selected"===e?this.forceGroupSelection&&!i.selected&&n.toggle(t,!0):i.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const n=this.listElement;if(!n)return;const i=n.items[t];i&&("mdc-menu-item--selected"===e?i.selected&&n.toggle(t,!1):i.classList.remove(e))},addAttributeToElementAtIndex:(t,e,n)=>{const i=this.listElement;if(!i)return;const o=i.items[t];o&&o.setAttribute(e,n)},removeAttributeFromElementAtIndex:(t,e)=>{const n=this.listElement;if(!n)return;const i=n.items[t];i&&i.removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const n=e.items[t];n&&n.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const n=e.items[t];if(!n||!n.group)return-1;for(let i=0;i<e.items.length;i++){if(i===t)continue;const o=e.items[i];if(o.selected&&o.group===n.group)return i}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const n=e.items[t];return!!n&&n.hasAttribute("group")}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const n=t.detail.index,i=e.items[n];i&&this.mdcFoundation.handleItemAction(i)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async _getUpdateComplete(){await this._listUpdateComplete,await super._getUpdateComplete()}async firstUpdated(){super.firstUpdated();const t=this.listElement;t&&(this._listUpdateComplete=t.updateComplete,await this._listUpdateComplete)}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}getFocusedItemIndex(){const t=this.listElement;return t?t.getFocusedItemIndex():-1}focusItemAtIndex(t){const e=this.listElement;e&&e.focusItemAtIndex(t)}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}(0,o.gn)([(0,s.IO)(".mdc-menu")],I.prototype,"mdcRoot",void 0),(0,o.gn)([(0,s.IO)("slot")],I.prototype,"slotElement",void 0),(0,o.gn)([(0,s.Cb)({type:Object})],I.prototype,"anchor",void 0),(0,o.gn)([(0,s.Cb)({type:Boolean,reflect:!0})],I.prototype,"open",void 0),(0,o.gn)([(0,s.Cb)({type:Boolean})],I.prototype,"quick",void 0),(0,o.gn)([(0,s.Cb)({type:Boolean})],I.prototype,"wrapFocus",void 0),(0,o.gn)([(0,s.Cb)({type:String})],I.prototype,"innerRole",void 0),(0,o.gn)([(0,s.Cb)({type:String})],I.prototype,"corner",void 0),(0,o.gn)([(0,s.Cb)({type:Number})],I.prototype,"x",void 0),(0,o.gn)([(0,s.Cb)({type:Number})],I.prototype,"y",void 0),(0,o.gn)([(0,s.Cb)({type:Boolean})],I.prototype,"absolute",void 0),(0,o.gn)([(0,s.Cb)({type:Boolean})],I.prototype,"multi",void 0),(0,o.gn)([(0,s.Cb)({type:Boolean})],I.prototype,"activatable",void 0),(0,o.gn)([(0,s.Cb)({type:Boolean})],I.prototype,"fixed",void 0),(0,o.gn)([(0,s.Cb)({type:Boolean})],I.prototype,"forceGroupSelection",void 0),(0,o.gn)([(0,s.Cb)({type:Boolean})],I.prototype,"fullwidth",void 0),(0,o.gn)([(0,s.Cb)({type:String})],I.prototype,"menuCorner",void 0),(0,o.gn)([(0,s.Cb)({type:String}),(0,f.P)((function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(i[t])}))],I.prototype,"defaultFocus",void 0);const E=s.iv`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`;let A=class extends I{};A.styles=E,A=(0,o.gn)([(0,s.Mo)("mwc-menu")],A)}}]);
//# sourceMappingURL=chunk.269210703788359244f3.js.map