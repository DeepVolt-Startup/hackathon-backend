"use strict";(self.webpackChunkDLIA_client=self.webpackChunkDLIA_client||[]).push([[937],{7277:(b,v,n)=>{n.d(v,{o:()=>c});const c=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Democratic Republic of the Congo","Republic of the Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City (Holy See)","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"]},8563:(b,v,n)=>{n.d(v,{_:()=>i,g:()=>p});var c=n(4650),O=n(6895);let i=(()=>{class r{constructor(u,h){this.el=u,this.platformId=h,this.ng2TelInputOptions={},this.hasError=new c.vpe,this.ng2TelOutput=new c.vpe,this.countryChange=new c.vpe,this.intlTelInputObject=new c.vpe}ngOnInit(){(0,O.NF)(this.platformId)&&(this.ng2TelInputOptions=Object.assign({},this.ng2TelInputOptions,{utilsScript:this.getUtilsScript(this.ng2TelInputOptions)}),this.ngTelInput=window.intlTelInput(this.el.nativeElement,Object.assign({},this.ng2TelInputOptions)),this.el.nativeElement.addEventListener("countrychange",()=>{this.countryChange.emit(this.ngTelInput.getSelectedCountryData())}),this.intlTelInputObject.emit(this.ngTelInput))}onBlur(){let u=this.isInputValid();if(u){let h=this.ngTelInput.getNumber();this.hasError.emit(u),this.ng2TelOutput.emit(h)}else this.hasError.emit(u)}isInputValid(){return this.ngTelInput.isValidNumber()}setCountry(u){this.ngTelInput.setCountry(u)}getUtilsScript(u){return u.utilsScript||"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.1/js/utils.js"}}return r.\u0275fac=function(u){return new(u||r)(c.Y36(c.SBq),c.Y36(c.Lbi))},r.\u0275dir=c.lG2({type:r,selectors:[["","ng2TelInput",""]],hostBindings:function(u,h){1&u&&c.NdJ("blur",function(){return h.onBlur()})},inputs:{ng2TelInputOptions:"ng2TelInputOptions"},outputs:{hasError:"hasError",ng2TelOutput:"ng2TelOutput",countryChange:"countryChange",intlTelInputObject:"intlTelInputObject"}}),r})(),p=(()=>{class r{static forRoot(){return{ngModule:r,providers:[]}}}return r.\u0275fac=function(u){return new(u||r)},r.\u0275mod=c.oAB({type:r}),r.\u0275inj=c.cJS({}),r})()},1005:(b,v,n)=>{n.d(v,{g:()=>T});var c=n(4986),O=n(7272),y=n(5698),i=n(4482),p=n(5403),r=n(5032),u=n(9718),h=n(5577);function M(_,m){return m?f=>(0,O.z)(m.pipe((0,y.q)(1),function A(){return(0,i.e)((_,m)=>{_.subscribe((0,p.x)(m,r.Z))})}()),f.pipe(M(_))):(0,h.z)((f,d)=>_(f,d).pipe((0,y.q)(1),(0,u.h)(f)))}var E=n(5963);function T(_,m=c.z){const f=(0,E.H)(_,m);return M(()=>f)}},7957:(b,v,n)=>{n.d(v,{Bb:()=>$,XC:()=>z,ZL:()=>B});var c=n(2687),O=n(1281),y=n(3353),i=n(4650),p=n(3238),r=n(727),A=n(7579),u=n(9770),h=n(6451),M=n(9646),E=n(4968),T=n(6895),_=n(8184),m=n(4098),f=n(445),d=n(9521),R=n(4080),w=n(4006),F=n(9549),C=n(5698),I=n(3900),P=n(9300),U=n(4004),K=n(8505),W=n(1005);const N=["panel"];function V(a,s){if(1&a&&(i.TgZ(0,"div",0,1),i.Hsn(2),i.qZA()),2&a){const t=s.id,e=i.oxw();i.Q6J("id",e.id)("ngClass",e._classList),i.uIk("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby(t))}}const Y=["*"];let x=0;class H{constructor(s,t){this.source=s,this.option=t}}const j=(0,p.Kr)(class{}),S=new i.OlP("mat-autocomplete-default-options",{providedIn:"root",factory:function G(){return{autoActiveFirstOption:!1}}});let k=(()=>{class a extends j{constructor(t,e,o,l){super(),this._changeDetectorRef=t,this._elementRef=e,this._activeOptionChanges=r.w0.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this.optionSelected=new i.vpe,this.opened=new i.vpe,this.closed=new i.vpe,this.optionActivated=new i.vpe,this._classList={},this.id="mat-autocomplete-"+x++,this.inertGroups=l?.SAFARI||!1,this._autoActiveFirstOption=!!o.autoActiveFirstOption}get isOpen(){return this._isOpen&&this.showPanel}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(t){this._autoActiveFirstOption=(0,O.Ig)(t)}set classList(t){this._classList=t&&t.length?(0,O.du)(t).reduce((e,o)=>(e[o]=!0,e),{}):{},this._setVisibilityClasses(this._classList),this._elementRef.nativeElement.className=""}ngAfterContentInit(){this._keyManager=new c.s1(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(t=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[t]||null})}),this._setVisibility()}ngOnDestroy(){this._activeOptionChanges.unsubscribe()}_setScrollTop(t){this.panel&&(this.panel.nativeElement.scrollTop=t)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(t){const e=new H(this,t);this.optionSelected.emit(e)}_getPanelAriaLabelledby(t){return this.ariaLabel?null:this.ariaLabelledby?(t?t+" ":"")+this.ariaLabelledby:t}_setVisibilityClasses(t){t[this._visibleClass]=this.showPanel,t[this._hiddenClass]=!this.showPanel}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(i.sBO),i.Y36(i.SBq),i.Y36(S),i.Y36(y.t4))},a.\u0275dir=i.lG2({type:a,viewQuery:function(t,e){if(1&t&&(i.Gf(i.Rgc,7),i.Gf(N,5)),2&t){let o;i.iGM(o=i.CRH())&&(e.template=o.first),i.iGM(o=i.CRH())&&(e.panel=o.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",panelWidth:"panelWidth",classList:["class","classList"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[i.qOj]}),a})(),z=(()=>{class a extends k{constructor(){super(...arguments),this._visibleClass="mat-autocomplete-visible",this._hiddenClass="mat-autocomplete-hidden"}}return a.\u0275fac=function(){let s;return function(e){return(s||(s=i.n5z(a)))(e||a)}}(),a.\u0275cmp=i.Xpm({type:a,selectors:[["mat-autocomplete"]],contentQueries:function(t,e,o){if(1&t&&(i.Suo(o,p.K7,5),i.Suo(o,p.ey,5)),2&t){let l;i.iGM(l=i.CRH())&&(e.optionGroups=l),i.iGM(l=i.CRH())&&(e.options=l)}},hostAttrs:[1,"mat-autocomplete"],inputs:{disableRipple:"disableRipple"},exportAs:["matAutocomplete"],features:[i._Bn([{provide:p.HF,useExisting:a}]),i.qOj],ngContentSelectors:Y,decls:1,vars:0,consts:[["role","listbox",1,"mat-autocomplete-panel",3,"id","ngClass"],["panel",""]],template:function(t,e){1&t&&(i.F$t(),i.YNc(0,V,3,4,"ng-template"))},dependencies:[T.mk],styles:[".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}mat-autocomplete{display:none}\n"],encapsulation:2,changeDetection:0}),a})();const L=new i.OlP("mat-autocomplete-scroll-strategy"),X={provide:L,deps:[_.aV],useFactory:function J(a){return()=>a.scrollStrategies.reposition()}},Q={provide:w.JU,useExisting:(0,i.Gpc)(()=>B),multi:!0};let Z=(()=>{class a{constructor(t,e,o,l,g,D,q,tt,et,it,ot){this._element=t,this._overlay=e,this._viewContainerRef=o,this._zone=l,this._changeDetectorRef=g,this._dir=q,this._formField=tt,this._document=et,this._viewportRuler=it,this._defaults=ot,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=r.w0.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new A.x,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,u.P)(()=>this.autocomplete&&this.autocomplete.options?(0,h.T)(...this.autocomplete.options.map(nt=>nt.onSelectionChange)):this._zone.onStable.pipe((0,C.q)(1),(0,I.w)(()=>this.optionSelections))),this._scrollStrategy=D}get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(t){this._autocompleteDisabled=(0,O.Ig)(t)}ngAfterViewInit(){const t=this._getWindow();typeof t<"u"&&this._zone.runOutsideAngular(()=>t.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(t){t.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const t=this._getWindow();typeof t<"u"&&t.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this.autocomplete.closed.emit(),this.autocomplete._isOpen=this._overlayAttached=!1,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return(0,h.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,P.h)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,P.h)(()=>this._overlayAttached)):(0,M.of)()).pipe((0,U.U)(t=>t instanceof p.rN?t:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return(0,h.T)((0,E.R)(this._document,"click"),(0,E.R)(this._document,"auxclick"),(0,E.R)(this._document,"touchend")).pipe((0,P.h)(t=>{const e=(0,y.sA)(t),o=this._formField?this._formField._elementRef.nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&e!==this._element.nativeElement&&(!o||!o.contains(e))&&(!l||!l.contains(e))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(e)}))}writeValue(t){Promise.resolve(null).then(()=>this._setTriggerValue(t))}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this._element.nativeElement.disabled=t}_handleKeydown(t){const e=t.keyCode;if(e===d.hY&&!(0,d.Vb)(t)&&t.preventDefault(),this.activeOption&&e===d.K5&&this.panelOpen)this.activeOption._selectViaInteraction(),this._resetActiveItem(),t.preventDefault();else if(this.autocomplete){const o=this.autocomplete._keyManager.activeItem,l=e===d.LH||e===d.JH;this.panelOpen||e===d.Mf?this.autocomplete._keyManager.onKeydown(t):l&&this._canOpen()&&this.openPanel(),(l||this.autocomplete._keyManager.activeItem!==o)&&this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0)}}_handleInput(t){let e=t.target,o=e.value;"number"===e.type&&(o=""==o?null:parseFloat(o)),this._previousValue!==o&&(this._previousValue=o,this._onChange(o),this._canOpen()&&this._document.activeElement===t.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_floatLabel(t=!1){this._formField&&"auto"===this._formField.floatLabel&&(t?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField.floatLabel="auto",this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const t=this._zone.onStable.pipe((0,C.q)(1)),e=this.autocomplete.options.changes.pipe((0,K.b)(()=>this._positionStrategy.reapplyLastPosition()),(0,W.g)(0));return(0,h.T)(t,e).pipe((0,I.w)(()=>{const o=this.panelOpen;return this._resetActiveItem(),this.autocomplete._setVisibility(),this.panelOpen&&(this._overlayRef.updatePosition(),o!==this.panelOpen&&this.autocomplete.opened.emit()),this.panelClosingActions}),(0,C.q)(1)).subscribe(o=>this._setValueAndClose(o))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_setTriggerValue(t){const o=(this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(t):t)??"";this._formField?this._formField._control.value=o:this._element.nativeElement.value=o,this._previousValue=o}_setValueAndClose(t){t&&t.source&&(this._clearPreviousSelectedOption(t.source),this._setTriggerValue(t.source.value),this._onChange(t.source.value),this._element.nativeElement.focus(),this.autocomplete._emitSelectEvent(t.source)),this.closePanel()}_clearPreviousSelectedOption(t){this.autocomplete.options.forEach(e=>{e!==t&&e.selected&&e.deselect()})}_attachOverlay(){let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new R.UE(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,t.keydownEvents().subscribe(o=>{(o.keyCode===d.hY&&!(0,d.Vb)(o)||o.keyCode===d.LH&&(0,d.Vb)(o,"altKey"))&&(this._closeKeyEventStream.next(),this._resetActiveItem(),o.stopPropagation(),o.preventDefault())}),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})})),t&&!t.hasAttached()&&(t.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const e=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.panelOpen&&e!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new _.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){const t=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(t),this._positionStrategy=t,t}_setStrategyPositions(t){const e=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],o=this._aboveClass,l=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:o},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:o}];let g;g="above"===this.position?l:"below"===this.position?e:[...e,...l],t.withPositions(g)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){const t=this.autocomplete;t.autoActiveFirstOption?t._keyManager.setFirstItemActive():t._keyManager.setActiveItem(-1)}_canOpen(){const t=this._element.nativeElement;return!t.readOnly&&!t.disabled&&!this._autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(t){const e=this.autocomplete,o=(0,p.CB)(t,e.options,e.optionGroups);if(0===t&&1===o)e._setScrollTop(0);else if(e.panel){const l=e.options.toArray()[t];if(l){const g=l._getHostElement(),D=(0,p.jH)(g.offsetTop,g.offsetHeight,e._getScrollTop(),e.panel.nativeElement.offsetHeight);e._setScrollTop(D)}}}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(i.SBq),i.Y36(_.aV),i.Y36(i.s_b),i.Y36(i.R0b),i.Y36(i.sBO),i.Y36(L),i.Y36(f.Is,8),i.Y36(F.G_,9),i.Y36(T.K0,8),i.Y36(m.rL),i.Y36(S,8))},a.\u0275dir=i.lG2({type:a,inputs:{autocomplete:["matAutocomplete","autocomplete"],position:["matAutocompletePosition","position"],connectedTo:["matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"]},features:[i.TTD]}),a})(),B=(()=>{class a extends Z{constructor(){super(...arguments),this._aboveClass="mat-autocomplete-panel-above"}}return a.\u0275fac=function(){let s;return function(e){return(s||(s=i.n5z(a)))(e||a)}}(),a.\u0275dir=i.lG2({type:a,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-autocomplete-trigger"],hostVars:7,hostBindings:function(t,e){1&t&&i.NdJ("focusin",function(){return e._handleFocus()})("blur",function(){return e._onTouched()})("input",function(l){return e._handleInput(l)})("keydown",function(l){return e._handleKeydown(l)}),2&t&&i.uIk("autocomplete",e.autocompleteAttribute)("role",e.autocompleteDisabled?null:"combobox")("aria-autocomplete",e.autocompleteDisabled?null:"list")("aria-activedescendant",e.panelOpen&&e.activeOption?e.activeOption.id:null)("aria-expanded",e.autocompleteDisabled?null:e.panelOpen.toString())("aria-owns",e.autocompleteDisabled||!e.panelOpen||null==e.autocomplete?null:e.autocomplete.id)("aria-haspopup",!e.autocompleteDisabled)},exportAs:["matAutocompleteTrigger"],features:[i._Bn([Q]),i.qOj]}),a})(),$=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({providers:[X],imports:[[_.U8,p.Ng,p.BQ,T.ez],m.ZD,p.Ng,p.BQ]}),a})()}}]);