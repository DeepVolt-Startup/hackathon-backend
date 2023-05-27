"use strict";(self.webpackChunkDLIA_client=self.webpackChunkDLIA_client||[]).push([[451],{5451:(k,p,n)=>{n.r(p),n.d(p,{ForgetPWDComponent:()=>U});var d=n(6895),m=n(6257),l=n(9549),a=n(4006),_=n(4144),g=n(4859),f=n(7392),c=n(2510),h=n(7009),e=n(4650),P=n(789);const w=["stepper"];function C(t,s){1&t&&e._uU(0,"Email verification")}function Z(t,s){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Email is required"),e.qZA())}function v(t,s){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Please enter a valid work email address."),e.qZA())}function b(t,s){1&t&&e._uU(0,"Code confirmation")}function D(t,s){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"code is required"),e.qZA())}function T(t,s){1&t&&e._uU(0,"Password reset")}function y(t,s){1&t&&e._uU(0,"Done")}function A(t,s){return r=>{const o=r.get(t),i=r.get(s);return o.value!==i.value?{passwordMismatchError:!0}:null}}let U=(()=>{class t{constructor(r,o,i){this.authService=r,this.snackBar=o,this.router=i,this.hidePassword=!0,this.hideConfirmPassword=!0,this.email="",this.isLinkDisabled=!1,this.confirmErrorMatcher={isErrorState:(u,q)=>{const E=u.touched&&u.invalid,x=u.touched&&this.resetPassword.get("ConfirmPassword").touched&&this.resetPassword.errors?.passwordMismatchError;return E||x}}}ngOnInit(){this.ConfirmPasswordForm=new a.cw({email:new a.NI("",[a.kI.required,a.kI.email])}),this.codeForm=new a.cw({code:new a.NI("",[a.kI.required])}),this.resetPassword=new a.cw({Password:new a.NI("",[a.kI.required,a.kI.minLength(8)]),ConfirmPassword:new a.NI("",a.kI.required)},{validators:A("Password","ConfirmPassword")})}sendCode(){this.email=this.ConfirmPasswordForm.getRawValue().email.trim(),this.authService.forgetPassword(this.ConfirmPasswordForm.getRawValue().email.trim()).subscribe({next:r=>{r&&(this.stepper.next(),this.confirmationData=r,console.log("hello",r))},error:r=>{console.error(r),this.snackBar.open(r.error.msg?r.error.msg:"An error has occurred. Please try again later.","close",{duration:3e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["custom-style"]})}})}confirm(){this.authService.forgetPasswordConfirmCode(this.codeForm.getRawValue().code.trim(),this.confirmationData).subscribe({next:r=>{this.stepper.next(),console.log("here",r)},error:r=>{console.error(r),this.snackBar.open(r.error.msg?r.error.msg:"An error has occurred. Please try again later.","close",{duration:3e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["custom-style"]})}})}resentCode(){this.isLinkDisabled=!0,this.authService.resendCodeForgetPassword(this.confirmationData.email).subscribe({next:r=>{console.log(r),this.confirmationData=r},error:r=>{this.snackBar.open(r.error.msg?r.error.msg:"An error has occurred. Please try again later.","close",{duration:3e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["custom-style"]})}}),setTimeout(()=>{this.isLinkDisabled=!1},3e4)}ResetPassword(){console.log(this.resetPassword.getRawValue().Password),this.authService.resetPassword(this.resetPassword.getRawValue().Password,this.confirmationData.email).subscribe({next:r=>{console.log("here",r),this.userData=r,this.stepper.next()},error:r=>{this.snackBar.open(r.error.msg?r.error.msg:"An error has occurred. Please try again later.","close",{duration:3e3,horizontalPosition:"center",verticalPosition:"top",panelClass:["custom-style"]})}})}loginmagically(){this.authService.signInMagically(this.userData).subscribe({next:r=>{r&&this.router.navigate(["explore"])}})}getPasswordErrorMessage(r){return this.resetPassword.controls[r]?.hasError("required")?"Password is required":"Password length must be 8 characters or more"}getErrorMessage(r){return this.resetPassword.controls[r]?.hasError("required")?"Confirm Password is required":"Passwords do not match. Please try again"}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(P.e),e.Y36(h.ux),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-forget-pwd"]],viewQuery:function(r,o){if(1&r&&e.Gf(w,5),2&r){let i;e.iGM(i=e.CRH())&&(o.stepper=i.first)}},standalone:!0,features:[e.jDz],decls:107,vars:29,consts:[["linear",""],["stepper",""],[3,"stepControl","editable"],[1,"formContainer","mt-10","container","m-auto","md:w-3/4","lg:w-2/4","bg-white","rounded-xl","mx-auto","overflow-hidden","md:px-14","shadow-[0_0px_15px_rgba(0,0,0,0.15)]"],[1,"w-full","flex","flex-col","justify-center","items-center","my-5"],[1,"key",2,"color","#335579","font-size","80px","width","80px","height","80px","transform","rotate(30deg)"],[1,"text-xl","font-medium",2,"color","#335579"],[1,"paragraph"],[3,"formGroup","ngSubmit"],["matStepLabel",""],[1,"flex","justify-center","items-center"],["appearance","outline",1,"md:w-1/2"],["matInput","","formControlName","email","placeholder","Email","type","text"],[4,"ngIf"],[1,"relative","w-full","flex","flex-col","justify-center","items-center","py-3","space-y-5"],["type","submit","mat-raised-button","",1,"w-auto",3,"disabled"],["routerLink","/login",2,"color","#335579"],[1,"align-middle",2,"font-size","20px","width","20px","height","20px","color","#335579"],[3,"editable"],[1,"mt-10","container","m-auto","w-full","md:w-3/4","lg:w-2/4","bg-white","rounded-xl","mx-auto","overflow-hidden","px-14","shadow-[0_0px_15px_rgba(0,0,0,0.15)]"],[2,"color","#335579","font-size","80px","width","80px","height","80px"],[2,"color","#838997"],["appearance","outline"],["matInput","","formControlName","code","placeholder","code","type","text"],[1,"relative","w-full","flex","flex-col","justify-center","items-center","pb-3","space-y-5"],["type","submit","mat-raised-button","",3,"disabled"],[1,"cursor-pointer",3,"ngClass","click"],["type","email","name","username",1,"hidden"],[1,"flex","flex-col","justify-center","items-center"],["appearance","outline",1,"my-input"],["matInput","","formControlName","Password","placeholder","Password",3,"type"],["matSuffix","",3,"click"],["matInput","","formControlName","ConfirmPassword","placeholder","Confirm password",3,"errorStateMatcher","type"],[1,"relative","w-full","flex","justify-center","py-6"],["type","submit","mat-raised-button","",1,"my-input",3,"disabled"],[1,"mt-10","container","m-auto","w-2/4","bg-white","rounded-xl","mx-auto","overflow-hidden","px-14","shadow-[0_0px_15px_rgba(0,0,0,0.15)]"],["mat-raised-button","",1,"w-1/2","text-white",2,"background-color","#335579","margin","20px 0px",3,"click"]],template:function(r,o){1&r&&(e.TgZ(0,"mat-stepper",0,1)(2,"mat-step",2)(3,"div",3)(4,"div",4)(5,"mat-icon",5),e._uU(6,"key"),e.qZA(),e.TgZ(7,"p",6),e._uU(8," Forgot your password? "),e.qZA(),e.TgZ(9,"p",7),e._uU(10," No worries, we will help you reset your password. "),e.qZA()(),e.TgZ(11,"form",8),e.NdJ("ngSubmit",function(){return o.sendCode()}),e.YNc(12,C,1,0,"ng-template",9),e.TgZ(13,"div",10)(14,"mat-form-field",11)(15,"mat-label"),e._uU(16,"email"),e.qZA(),e._UZ(17,"input",12),e.YNc(18,Z,2,0,"mat-error",13),e.YNc(19,v,2,0,"mat-error",13),e.qZA()(),e.TgZ(20,"div",14)(21,"button",15),e._uU(22," Send code "),e.qZA(),e.TgZ(23,"a",16)(24,"mat-icon",17),e._uU(25,"arrow_back"),e.qZA(),e._uU(26," Back to login"),e.qZA()()()()(),e.TgZ(27,"mat-step",18)(28,"div",19)(29,"div",4)(30,"mat-icon",20),e._uU(31,"email"),e.qZA(),e.TgZ(32,"p",6),e._uU(33," Check your email "),e.qZA(),e.TgZ(34,"p",21),e._uU(35," We have sent a password reset code to the email address "),e.qZA(),e.TgZ(36,"p",21),e._uU(37),e.qZA()(),e.TgZ(38,"form",8),e.NdJ("ngSubmit",function(){return o.confirm()}),e.YNc(39,b,1,0,"ng-template",9),e.TgZ(40,"div",10)(41,"mat-form-field",22)(42,"mat-label"),e._uU(43,"code"),e.qZA(),e._UZ(44,"input",23),e.YNc(45,D,2,0,"mat-error",13),e.qZA()(),e.TgZ(46,"div",24)(47,"button",25),e._uU(48," confirm "),e.qZA(),e.TgZ(49,"p"),e._uU(50," Didn't receive the email? "),e.TgZ(51,"a",26),e.NdJ("click",function(){return o.resentCode()}),e._uU(52,"Click to resend"),e.qZA()(),e.TgZ(53,"a",16)(54,"mat-icon",17),e._uU(55,"arrow_back"),e.qZA(),e._uU(56," Back to login"),e.qZA()()()()(),e.TgZ(57,"mat-step",18)(58,"div",19)(59,"div",4)(60,"mat-icon",20),e._uU(61,"lock"),e.qZA(),e.TgZ(62,"p",6),e._uU(63," Set new password "),e.qZA(),e.TgZ(64,"p",21),e._uU(65," Please enter a strong password containing at least 8 characters. "),e.qZA()(),e.TgZ(66,"form",8),e.NdJ("ngSubmit",function(){return o.ResetPassword()}),e._UZ(67,"input",27),e.YNc(68,T,1,0,"ng-template",9),e.TgZ(69,"div",28)(70,"mat-form-field",29)(71,"mat-label"),e._uU(72,"Password"),e.qZA(),e._UZ(73,"input",30),e.TgZ(74,"mat-icon",31),e.NdJ("click",function(){return o.hidePassword=!o.hidePassword}),e._uU(75),e.qZA(),e.TgZ(76,"mat-error"),e._uU(77),e.qZA()(),e.TgZ(78,"mat-form-field",29)(79,"mat-label"),e._uU(80,"Confirm password"),e.qZA(),e._UZ(81,"input",32),e.TgZ(82,"mat-icon",31),e.NdJ("click",function(){return o.hideConfirmPassword=!o.hideConfirmPassword}),e._uU(83),e.qZA(),e.TgZ(84,"mat-error"),e._uU(85),e.qZA()()(),e.TgZ(86,"div",33)(87,"button",34),e._uU(88," Save changes "),e.qZA()()()()(),e.TgZ(89,"mat-step",18),e.YNc(90,y,1,0,"ng-template",9),e.TgZ(91,"div",35)(92,"div",4)(93,"mat-icon",20),e._uU(94,"check_circle"),e.qZA(),e.TgZ(95,"p",6),e._uU(96,"Password reset"),e.qZA(),e.TgZ(97,"p",21),e._uU(98,"Your password has been successfully reset."),e.qZA(),e.TgZ(99,"p",21),e._uU(100,"Click below to login"),e.qZA(),e.TgZ(101,"button",36),e.NdJ("click",function(){return o.loginmagically()}),e._uU(102," Continue "),e.qZA(),e.TgZ(103,"a",16)(104,"mat-icon",17),e._uU(105,"arrow_back"),e.qZA(),e._uU(106," Back to login"),e.qZA()()()()()),2&r&&(e.xp6(2),e.Q6J("stepControl",o.ConfirmPasswordForm)("editable",!1),e.xp6(9),e.Q6J("formGroup",o.ConfirmPasswordForm),e.xp6(7),e.Q6J("ngIf",null==o.ConfirmPasswordForm.get("email").errors?null:o.ConfirmPasswordForm.get("email").errors.required),e.xp6(1),e.Q6J("ngIf",null==o.ConfirmPasswordForm.get("email").errors?null:o.ConfirmPasswordForm.get("email").errors.email),e.xp6(2),e.Akn("background-color:"+(o.ConfirmPasswordForm.valid?"#335579;color:white;":"#E0E0E0;color:D1D1D1;")),e.Q6J("disabled",!o.ConfirmPasswordForm.valid),e.xp6(6),e.Q6J("editable",!1),e.xp6(10),e.Oqu(o.email),e.xp6(1),e.Q6J("formGroup",o.codeForm),e.xp6(7),e.Q6J("ngIf",null==o.codeForm.get("code").errors?null:o.codeForm.get("code").errors.required),e.xp6(2),e.Akn("background-color:"+(o.codeForm.valid?"#335579;color:white;":"#E0E0E0;color:D1D1D1;")),e.Q6J("disabled",!o.codeForm.valid),e.xp6(4),e.Q6J("ngClass",o.isLinkDisabled?"disabled-link":"normal-link"),e.xp6(6),e.Q6J("editable",!1),e.xp6(9),e.Q6J("formGroup",o.resetPassword),e.xp6(7),e.Q6J("type",o.hidePassword?"password":"text"),e.xp6(2),e.Oqu(o.hidePassword?"visibility_off":"visibility"),e.xp6(2),e.Oqu(o.getPasswordErrorMessage("Password")),e.xp6(4),e.Q6J("errorStateMatcher",o.confirmErrorMatcher)("type",o.hideConfirmPassword?"password":"text"),e.xp6(2),e.Oqu(o.hideConfirmPassword?"visibility_off":"visibility"),e.xp6(2),e.Oqu(o.getErrorMessage("ConfirmPassword")),e.xp6(2),e.Akn("background-color:"+(o.resetPassword.valid?"#335579;color:white;":"#E0E0E0;color:D1D1D1;")),e.Q6J("disabled",!o.resetPassword.valid),e.xp6(2),e.Q6J("editable",!1))},dependencies:[d.ez,d.mk,d.O5,m.T5,m.C0,m.VY,m.Vq,l.lN,l.TO,l.KE,l.hX,l.R9,a.UX,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,_.c,_.Nt,g.ot,g.lW,f.Ps,f.Hw,c.Bz,c.rH,h.ZX],styles:[".custom-style{background-color:#fe5157;color:#fff}  .mat-simple-snackbar-action>button{color:#fff}.disabled-link[_ngcontent-%COMP%]{pointer-events:none;color:#335579}.normal-link[_ngcontent-%COMP%]{color:#335579;font-weight:700;text-decoration:underline}.paragraph[_ngcontent-%COMP%]{color:#838997}.my-input[_ngcontent-%COMP%]{width:auto}@media (max-width: 768px){  .mat-horizontal-stepper-header-container.ng-tns-c12-0.ng-star-inserted{display:none!important}.my-input[_ngcontent-%COMP%]{width:61%}.formContainer[_ngcontent-%COMP%]{margin-top:5rem}}@media (min-width: 300px){.paragraph[_ngcontent-%COMP%]{padding-left:1.2rem;font-size:12px}.key[_ngcontent-%COMP%]{font-size:50px}}  .mat-horizontal-stepper-header-container{pointer-events:none!important}"]}),t})()}}]);