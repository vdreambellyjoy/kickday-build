"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[153],{153:(A,f,n)=>{n.r(f),n.d(f,{CustomerProfilePageModule:()=>y});var _=n(3609),o=n(2436),p=n(5861),u=n(95),e=n(5678),g=n(6593),b=n(5565),h=n(185),v=n(6814),c=n(9004);function t(i,m){if(1&i&&e._UZ(0,"img",20),2&i){const d=e.oxw();let r;e.Q6J("src",null==(r=d.userDataForm.get("image"))?null:r.value,e.LSH)}}function C(i,m){if(1&i){const d=e.EpF();e.TgZ(0,"label",21)(1,"input",22),e.NdJ("change",function(a){e.CHM(d);const s=e.oxw();return e.KtG(s.onFileSelected(a))}),e.qZA(),e._uU(2," Choose Photo* "),e.qZA()}}function U(i,m){if(1&i){const d=e.EpF();e.TgZ(0,"label",23)(1,"input",22),e.NdJ("change",function(a){e.CHM(d);const s=e.oxw();return e.KtG(s.onFileSelected(a))}),e.qZA(),e._uU(2," Change Photo "),e.qZA()}}function O(i,m){if(1&i){const d=e.EpF();e.TgZ(0,"ion-footer",24)(1,"ion-card",25)(2,"ion-row")(3,"ion-col",26),e.NdJ("click",function(){e.CHM(d);const a=e.oxw();return e.KtG(a.goToOrders())}),e._UZ(4,"ion-ripple-effect",27)(5,"ion-icon",28),e.TgZ(6,"ion-text",29),e._uU(7,"Orders"),e.qZA()(),e.TgZ(8,"ion-col",26),e.NdJ("click",function(){e.CHM(d);const a=e.oxw();return e.KtG(a.goToDashboard())}),e._UZ(9,"ion-ripple-effect",27)(10,"ion-icon",30),e.TgZ(11,"ion-text",29),e._uU(12,"Listings"),e.qZA()(),e.TgZ(13,"ion-col",31),e._UZ(14,"ion-ripple-effect",27)(15,"ion-icon",32),e.TgZ(16,"ion-text",29),e._uU(17,"Profile"),e.qZA()()()()()}}const D=[{path:"",component:(()=>{var i;class m{constructor(r,a,s,l,P){this.router=r,this.fb=a,this.sanitizer=s,this.adminService=l,this.authService=P,this.edit=!1,this.userDataForm=this.fb.group({userName:["",u.kI.required],email:["",u.kI.required],mobile:[""],city:["",u.kI.required],image:["",u.kI.required],imageName:[""],imageId:""})}ngOnInit(){}ionViewWillEnter(){var r=this;return(0,p.Z)(function*(){let a=localStorage.getItem("userData");if(r.userData=JSON.parse(a)||{},r.userData.profileId){var s;r.edit=!0;let l=yield r.authService.getLogoImageById({fileId:r.userData.profileId}),P=null==l||null===(s=l.data)||void 0===s?void 0:s.name,N="";l.success||(N=""),"svg+xml"==l.data.mimetype&&(N=yield r.sanitizer.bypassSecurityTrustResourceUrl(`data:image/svg+xml;base64,${l.data.data}`)),N=`data:image/jpg;base64,${l.data.data}`,r.userDataForm.patchValue({image:N,imageName:P,imageId:r.userData.profileId})}r.userData&&r.userDataForm.patchValue({userName:r.userData.userName,email:r.userData.email,mobile:r.userData.mobileNumber,city:r.userData.address})})()}onFileSelected(r){const s=r.target.files;s&&s.length>0&&this.uploadPhoto(s[0])}uploadPhoto(r){if(r&&this.userDataForm&&this.userDataForm.get("image")){const a=new FileReader;a.onload=s=>{this.userDataForm.patchValue({image:s.target.result,imageName:r.name,imageId:""})},a.readAsDataURL(r)}}saveProfile(){this.adminService.updateCustomerDetails(this.userDataForm.value).subscribe(a=>{a.success&&a.data&&(localStorage.setItem("userData",JSON.stringify(a.data)),this.router.navigate(["/customerListings"]))},a=>{console.log("userNot found , show error")})}goToOrders(){this.router.navigate(["/orders"])}goToDashboard(){this.router.navigate(["/customerListings"])}logOut(){var r=this;this.authService.logOut({}).subscribe(function(){var a=(0,p.Z)(function*(s){yield localStorage.clear(),r.router.navigate(["/customerListings"])});return function(s){return a.apply(this,arguments)}}(),a=>{console.log(a)})}}return(i=m).\u0275fac=function(r){return new(r||i)(e.Y36(o.F0),e.Y36(u.qu),e.Y36(g.H7),e.Y36(b.l),e.Y36(h.u))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-customer-profile"]],decls:37,vars:6,consts:[[3,"fullscreen"],[2,"height","100%","padding","20px"],[2,"border-bottom","none !important","width","100%","justify-content","end"],["name","log-out-outline",2,"height","30px","width","30px",3,"click"],[2,"border-bottom","none !important","width","100%"],[1,"kd_col_center_align",2,"flex-direction","column"],[1,"profile-photo-container"],[3,"src",4,"ngIf"],["class","upload-label",4,"ngIf"],["class","change-file-label",4,"ngIf"],[3,"formGroup"],[1,"input_selection",2,"display","grid","align-items","center"],["position","stacked"],["formControlName","userName","aria-label","Name","placeholder","Enter Name"],["formControlName","email","aria-label","Email","placeholder","Enter Email"],["formControlName","mobile","aria-label","Mobile","placeholder","Enter Mobile"],["formControlName","city","aria-label","Location","placeholder","Enter Location"],[1,"kd_save_button",3,"click"],[2,"height","100px"],["style","bottom: 0px; position: absolute",4,"ngIf"],[3,"src"],[1,"upload-label"],["type","file","accept","image/*",3,"change"],[1,"change-file-label"],[2,"bottom","0px","position","absolute"],[2,"margin","0px","border-radius","0px","padding","10px"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent",3,"click"],[1,"ripple_background"],["name","bag-handle-outline",1,"footer_icon_styles"],[1,"icon-text_styles"],["name","list-circle-outline",1,"footer_icon_styles"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent"],["name","person-circle-outline",1,"footer_icon_styles"]],template:function(r,a){if(1&r&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"ion-row",2)(3,"ion-icon",3),e.NdJ("click",function(){return a.logOut()}),e.qZA()(),e.TgZ(4,"ion-row",4)(5,"ion-col")(6,"div",5)(7,"div",6),e.YNc(8,t,1,1,"img",7)(9,C,3,0,"label",8),e.qZA(),e.YNc(10,U,3,0,"label",9),e.qZA()()(),e.TgZ(11,"form",10)(12,"div")(13,"ion-card",11)(14,"ion-item")(15,"ion-label",12),e._uU(16,"Name*"),e.qZA(),e._UZ(17,"ion-input",13),e.qZA()(),e.TgZ(18,"ion-card",11)(19,"ion-item")(20,"ion-label",12),e._uU(21,"Email*"),e.qZA(),e._UZ(22,"ion-input",14),e.qZA()(),e.TgZ(23,"ion-card",11)(24,"ion-item")(25,"ion-label",12),e._uU(26,"Mobile*"),e.qZA(),e._UZ(27,"ion-input",15),e.qZA()(),e.TgZ(28,"ion-card",11)(29,"ion-item")(30,"ion-label",12),e._uU(31,"Location*"),e.qZA(),e._UZ(32,"ion-input",16),e.qZA()()()(),e.TgZ(33,"ion-button",17),e.NdJ("click",function(){return a.saveProfile()}),e._uU(34,"Save"),e.qZA(),e._UZ(35,"div",18),e.qZA()(),e.YNc(36,O,18,0,"ion-footer",19)),2&r){let s,l,P;e.Q6J("fullscreen",!0),e.xp6(8),e.Q6J("ngIf",null==a.userDataForm||null==(s=a.userDataForm.get("image"))?null:s.value),e.xp6(1),e.Q6J("ngIf",!(null!=(l=a.userDataForm.get("image"))&&l.value)),e.xp6(1),e.Q6J("ngIf",null==(P=a.userDataForm.get("image"))?null:P.value),e.xp6(1),e.Q6J("formGroup",a.userDataForm),e.xp6(25),e.Q6J("ngIf",a.edit)}},dependencies:[v.O5,c.YG,c.PM,c.wI,c.W2,c.fr,c.gu,c.pK,c.Ie,c.Q$,c.H$,c.Nd,c.yW,c.j9,u._Y,u.JJ,u.JL,u.sg,u.u],styles:[".input_selection[_ngcontent-%COMP%]{border:solid 2px black;border-radius:14px;height:70px;margin:20px 0;padding:15px 10px 10px;box-shadow:none}.profile-photo-container[_ngcontent-%COMP%]{position:relative;width:150px;height:150px;overflow:hidden}.profile-photo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%}.upload-label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;width:100%;height:100%;cursor:pointer;border:2px dashed #ccc;border-radius:50%}.upload-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.change-file-label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:150px;height:40px;cursor:pointer;background-color:#f5f5f5;border:2px dashed #ccc;border-radius:4px;margin-top:10px}.change-file-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}"]}),m})()}];let M=(()=>{var i;class m{}return(i=m).\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[o.Bz.forChild(D),o.Bz]}),m})(),y=(()=>{var i;class m{}return(i=m).\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.m,M]}),m})()},5565:(A,f,n)=>{n.d(f,{l:()=>b});var _=n(5861),o=n(553),p=n(5678),u=n(2436),e=n(9862),g=n(4414);let b=(()=>{var h;class v{constructor(t,C,U){this.route=t,this.http=C,this.alertController=U}getUsersCount(t){return this.http.post(o.N.baseUrl+"/admin/getUsersCount",t)}getListingsCount(t){return this.http.post(o.N.baseUrl+"/admin/getListingsCount",t)}getAllListings(t){return this.http.post(o.N.baseUrl+"/admin/getAllListings",t)}getListingBasedOnId(t){return this.http.post(o.N.baseUrl+"/admin/getListingBasedOnId",t)}getAllUsersList(t){return this.http.post(o.N.baseUrl+"/admin/getAllUsersList",t)}getUserBasedOnId(t){return this.http.post(o.N.baseUrl+"/admin/getUserBasedOnId",t)}activeDeActiveListing(t){return this.http.post(o.N.baseUrl+"/admin/activeDeActiveListing",t)}createMaker(t){return this.http.post(o.N.baseUrl+"/admin/createMaker",t)}updateKitchenImages(t){return this.http.post(o.N.baseUrl+"/admin/updateKitchenImages",t)}updateBankDetails(t){return this.http.post(o.N.baseUrl+"/admin/updateBankDetails",t)}getUserOverView(t){return this.http.post(o.N.baseUrl+"/admin/getUserOverView",t)}activeDeActiveUser(t){return this.http.post(o.N.baseUrl+"/admin/activeDeActiveUser",t)}getMakerDashboardData(t){return this.http.post(o.N.baseUrl+"/maker/getMakerDashboardData",t)}addEditListing(t){return this.http.post(o.N.baseUrl+"/maker/addEditListing",t)}deleteListing(t){return this.http.post(o.N.baseUrl+"/maker/deleteListing",t)}changeOrderStatus(t){return this.http.post(o.N.baseUrl+"/maker/changeOrderStatus",t)}updateCustomerDetails(t){return this.http.post(o.N.baseUrl+"/customer/updateCustomerDetails",t)}getCustomerOrders(t){return this.http.post(o.N.baseUrl+"/customer/getCustomerOrders",t)}getAllListingsForCustomer(t){return this.http.post(o.N.baseUrl+"/auth/getAllListingsForCustomer",t)}setFavItem(t){return this.http.post(o.N.baseUrl+"/customer/setFavItem",t)}setUnFavItem(t){return this.http.post(o.N.baseUrl+"/customer/setUnFavItem",t)}getListingForUser(t){return this.http.post(o.N.baseUrl+"/auth/getListingForUser",t)}getCustomerAddress(t){return this.http.post(o.N.baseUrl+"/customer/getCustomerAddress",t)}deleteTempOrder(t){return this.http.post(o.N.baseUrl+"/customer/deleteTempOrder",t)}addCustomerAddress(t){return this.http.post(o.N.baseUrl+"/customer/addCustomerAddress",t)}setDefaultAddress(t){return this.http.post(o.N.baseUrl+"/customer/setDefaultAddress",t)}deleteAddress(t){return this.http.post(o.N.baseUrl+"/customer/deleteAddress",t)}addToCart(t){return this.http.post(o.N.baseUrl+"/customer/addToCart",t)}getCustomerOrderSummary(t){return this.http.post(o.N.baseUrl+"/customer/getCustomerOrderSummary",t)}placeOrder(t){return this.http.post(o.N.baseUrl+"/customer/placeOrder",t)}presentDeleteConfirmation(t,C,U){var O=this;return(0,_.Z)(function*(){return new Promise(function(){var x=(0,_.Z)(function*(D){yield(yield O.alertController.create({header:t,message:C,cssClass:U,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{D(!1)}},{text:"OK",cssClass:"primary",handler:()=>{D(!0)}}]})).present()});return function(D){return x.apply(this,arguments)}}())})()}}return(h=v).\u0275fac=function(t){return new(t||h)(p.LFG(u.F0),p.LFG(e.eN),p.LFG(g.Br))},h.\u0275prov=p.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),v})()},3609:(A,f,n)=>{n.d(f,{m:()=>e});var _=n(9004),o=n(95),p=n(6814),u=n(5678);let e=(()=>{var g;class b{}return(g=b).\u0275fac=function(v){return new(v||g)},g.\u0275mod=u.oAB({type:g}),g.\u0275inj=u.cJS({imports:[p.ez,_.Pc,o.u5,o.UX,p.ez,_.Pc,o.u5,o.UX]}),b})()}}]);