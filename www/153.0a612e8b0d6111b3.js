"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[153],{153:(Z,P,s)=>{s.r(P),s.d(P,{CustomerProfilePageModule:()=>M});var g=s(3609),o=s(2436),p=s(5861),d=s(95),e=s(5678),h=s(6593),U=s(5565),_=s(185),y=s(6814),c=s(9004);function t(n,u){if(1&n&&e._UZ(0,"img",21),2&n){const i=e.oxw();let r;e.Q6J("src",null==(r=i.userDataForm.get("image"))?null:r.value,e.LSH)}}function f(n,u){if(1&n){const i=e.EpF();e.TgZ(0,"label",22)(1,"input",23),e.NdJ("change",function(a){e.CHM(i);const l=e.oxw();return e.KtG(l.onFileSelected(a))}),e.qZA(),e._uU(2," Choose Photo* "),e.qZA()}}function D(n,u){if(1&n){const i=e.EpF();e.TgZ(0,"label",24)(1,"input",23),e.NdJ("change",function(a){e.CHM(i);const l=e.oxw();return e.KtG(l.onFileSelected(a))}),e.qZA(),e._uU(2," Change Photo "),e.qZA()}}function v(n,u){if(1&n){const i=e.EpF();e.TgZ(0,"ion-row",25)(1,"ion-col",26)(2,"ion-toggle",27),e.NdJ("ngModelChange",function(a){e.CHM(i);const l=e.oxw();return e.KtG(l.isToggleChecked=a)})("ionChange",function(){e.CHM(i);const a=e.oxw();return e.KtG(a.toggleChanged())}),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"ion-text"),e._uU(5,"Switch to Maker"),e.qZA()()()}if(2&n){const i=e.oxw();e.xp6(2),e.Q6J("ngModel",i.isToggleChecked)}}function N(n,u){if(1&n){const i=e.EpF();e.TgZ(0,"ion-footer",28)(1,"ion-card",29)(2,"ion-row")(3,"ion-col",30),e.NdJ("click",function(){e.CHM(i);const a=e.oxw();return e.KtG(a.goToOrders())}),e._UZ(4,"ion-ripple-effect",31)(5,"ion-icon",32),e.TgZ(6,"ion-text",33),e._uU(7,"Orders"),e.qZA()(),e.TgZ(8,"ion-col",30),e.NdJ("click",function(){e.CHM(i);const a=e.oxw();return e.KtG(a.goToDashboard())}),e._UZ(9,"ion-ripple-effect",31)(10,"ion-icon",34),e.TgZ(11,"ion-text",33),e._uU(12,"Listings"),e.qZA()(),e.TgZ(13,"ion-col",35),e._UZ(14,"ion-ripple-effect",31)(15,"ion-icon",36),e.TgZ(16,"ion-text",33),e._uU(17,"Profile"),e.qZA()()()()()}}const C=[{path:"",component:(()=>{var n;class u{constructor(r,a,l,m,x){this.router=r,this.fb=a,this.sanitizer=l,this.adminService=m,this.authService=x,this.edit=!1,this.isToggleChecked=!1,this.userDataForm=this.fb.group({userName:["",d.kI.required],email:["",d.kI.required],mobile:[""],city:["",d.kI.required],image:["",d.kI.required],imageName:[""],imageId:""})}ngOnInit(){}ionViewWillEnter(){var r=this;return(0,p.Z)(function*(){let a=localStorage.getItem("userData");if(r.userData=JSON.parse(a)||{},r.isToggleChecked=!1,r.userData.profileId){var l;r.edit=!0;let m=yield r.authService.getLogoImageById({fileId:r.userData.profileId}),x=null==m||null===(l=m.data)||void 0===l?void 0:l.name,O="";m.success||(O=""),"svg+xml"==m.data.mimetype&&(O=yield r.sanitizer.bypassSecurityTrustResourceUrl(`data:image/svg+xml;base64,${m.data.data}`)),O=`data:image/jpg;base64,${m.data.data}`,r.userDataForm.patchValue({image:O,imageName:x,imageId:r.userData.profileId})}r.userData&&r.userDataForm.patchValue({userName:r.userData.userName,email:r.userData.email,mobile:r.userData.mobileNumber,city:r.userData.address})})()}toggleChanged(){this.adminService.toggleMakerStatus({value:!1}).subscribe(r=>{r.success&&r.userData&&(localStorage.setItem("userData",JSON.stringify(r.userData)),localStorage.removeItem("order"),this.router.navigate(["/makerDashboard"]))},r=>{console.log("error at updating role",r.message)})}onFileSelected(r){const l=r.target.files;l&&l.length>0&&this.uploadPhoto(l[0])}uploadPhoto(r){if(r&&this.userDataForm&&this.userDataForm.get("image")){const a=new FileReader;a.onload=l=>{this.userDataForm.patchValue({image:l.target.result,imageName:r.name,imageId:""})},a.readAsDataURL(r)}}saveProfile(){this.adminService.updateCustomerDetails(this.userDataForm.value).subscribe(a=>{a.success&&a.data&&(localStorage.setItem("userData",JSON.stringify(a.data)),this.router.navigate(["/customerListings"]))},a=>{console.log("userNot found , show error")})}goToOrders(){this.router.navigate(["/orders"])}goToDashboard(){this.router.navigate(["/customerListings"])}logOut(){var r=this;this.authService.logOut({}).subscribe(function(){var a=(0,p.Z)(function*(l){yield localStorage.clear(),r.router.navigate(["/customerListings"])});return function(l){return a.apply(this,arguments)}}(),a=>{console.log(a)})}}return(n=u).\u0275fac=function(r){return new(r||n)(e.Y36(o.F0),e.Y36(d.qu),e.Y36(h.H7),e.Y36(U.l),e.Y36(_.u))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-customer-profile"]],decls:38,vars:7,consts:[[3,"fullscreen"],[2,"height","100%","padding","20px"],[2,"border-bottom","none !important","width","100%","justify-content","end"],["name","log-out-outline",2,"height","30px","width","30px",3,"click"],[2,"border-bottom","none !important","width","100%"],[1,"kd_col_center_align",2,"flex-direction","column"],[1,"profile-photo-container"],[3,"src",4,"ngIf"],["class","upload-label",4,"ngIf"],["class","change-file-label",4,"ngIf"],["style","border-bottom: none !important; width: 100%;text-align: center;",4,"ngIf"],[3,"formGroup"],[1,"input_selection",2,"display","grid","align-items","center"],["position","stacked"],["formControlName","userName","aria-label","Name","placeholder","Enter Name"],["formControlName","email","aria-label","Email","placeholder","Enter Email"],["formControlName","mobile","aria-label","Mobile","placeholder","Enter Mobile"],["formControlName","city","aria-label","Location","placeholder","Enter Location"],[1,"kd_save_button",3,"click"],[2,"height","100px"],["style","bottom: 0px; position: absolute",4,"ngIf"],[3,"src"],[1,"upload-label"],["type","file","accept","image/*",3,"change"],[1,"change-file-label"],[2,"border-bottom","none !important","width","100%","text-align","center"],[1,"text_center",2,"margin-top","0px"],["aria-label","Dark toggle","color","success",2,"padding-top","15px",3,"ngModel","ngModelChange","ionChange"],[2,"bottom","0px","position","absolute"],[2,"margin","0px","border-radius","0px","padding","10px"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent",3,"click"],[1,"ripple_background"],["name","bag-handle-outline",1,"footer_icon_styles"],[1,"icon-text_styles"],["name","list-circle-outline",1,"footer_icon_styles"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent"],["name","person-circle-outline",1,"footer_icon_styles"]],template:function(r,a){if(1&r&&(e.TgZ(0,"ion-content",0)(1,"div",1)(2,"ion-row",2)(3,"ion-icon",3),e.NdJ("click",function(){return a.logOut()}),e.qZA()(),e.TgZ(4,"ion-row",4)(5,"ion-col")(6,"div",5)(7,"div",6),e.YNc(8,t,1,1,"img",7)(9,f,3,0,"label",8),e.qZA(),e.YNc(10,D,3,0,"label",9),e.qZA()()(),e.YNc(11,v,6,1,"ion-row",10),e.TgZ(12,"form",11)(13,"div")(14,"ion-card",12)(15,"ion-item")(16,"ion-label",13),e._uU(17,"Name*"),e.qZA(),e._UZ(18,"ion-input",14),e.qZA()(),e.TgZ(19,"ion-card",12)(20,"ion-item")(21,"ion-label",13),e._uU(22,"Email*"),e.qZA(),e._UZ(23,"ion-input",15),e.qZA()(),e.TgZ(24,"ion-card",12)(25,"ion-item")(26,"ion-label",13),e._uU(27,"Mobile*"),e.qZA(),e._UZ(28,"ion-input",16),e.qZA()(),e.TgZ(29,"ion-card",12)(30,"ion-item")(31,"ion-label",13),e._uU(32,"Location*"),e.qZA(),e._UZ(33,"ion-input",17),e.qZA()()()(),e.TgZ(34,"ion-button",18),e.NdJ("click",function(){return a.saveProfile()}),e._uU(35,"Save"),e.qZA(),e._UZ(36,"div",19),e.qZA()(),e.YNc(37,N,18,0,"ion-footer",20)),2&r){let l,m,x;e.Q6J("fullscreen",!0),e.xp6(8),e.Q6J("ngIf",null==a.userDataForm||null==(l=a.userDataForm.get("image"))?null:l.value),e.xp6(1),e.Q6J("ngIf",!(null!=(m=a.userDataForm.get("image"))&&m.value)),e.xp6(1),e.Q6J("ngIf",null==(x=a.userDataForm.get("image"))?null:x.value),e.xp6(1),e.Q6J("ngIf","maker"===(null==a.userData?null:a.userData.primaryRole)),e.xp6(1),e.Q6J("formGroup",a.userDataForm),e.xp6(25),e.Q6J("ngIf",a.edit)}},dependencies:[y.O5,c.YG,c.PM,c.wI,c.W2,c.fr,c.gu,c.pK,c.Ie,c.Q$,c.H$,c.Nd,c.yW,c.ho,c.w,c.j9,d._Y,d.JJ,d.JL,d.On,d.sg,d.u],styles:[".input_selection[_ngcontent-%COMP%]{border:solid 2px black;border-radius:14px;height:70px;margin:20px 0;padding:15px 10px 10px;box-shadow:none}.profile-photo-container[_ngcontent-%COMP%]{position:relative;width:150px;height:150px;overflow:hidden}.profile-photo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%}.upload-label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;width:100%;height:100%;cursor:pointer;border:2px dashed #ccc;border-radius:50%}.upload-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.change-file-label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:150px;height:40px;cursor:pointer;background-color:#f5f5f5;border:2px dashed #ccc;border-radius:4px;margin-top:10px}.change-file-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}"]}),u})()}];let I=(()=>{var n;class u{}return(n=u).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[o.Bz.forChild(C),o.Bz]}),u})(),M=(()=>{var n;class u{}return(n=u).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.m,I]}),u})()},5565:(Z,P,s)=>{s.d(P,{l:()=>U});var g=s(5861),o=s(553),p=s(5678),d=s(2436),e=s(9862),h=s(4414);let U=(()=>{var _;class y{constructor(t,f,D,v){this.route=t,this.http=f,this.alertController=D,this.loadingController=v}getUsersCount(t){return this.http.post(o.N.baseUrl+"/admin/getUsersCount",t)}getListingsCount(t){return this.http.post(o.N.baseUrl+"/admin/getListingsCount",t)}getAllListings(t){return this.http.post(o.N.baseUrl+"/admin/getAllListings",t)}getListingBasedOnId(t){return this.http.post(o.N.baseUrl+"/admin/getListingBasedOnId",t)}getAllUsersList(t){return this.http.post(o.N.baseUrl+"/admin/getAllUsersList",t)}getUserBasedOnId(t){return this.http.post(o.N.baseUrl+"/admin/getUserBasedOnId",t)}activeDeActiveListing(t){return this.http.post(o.N.baseUrl+"/admin/activeDeActiveListing",t)}createMaker(t){return this.http.post(o.N.baseUrl+"/admin/createMaker",t)}updateKitchenImages(t){return this.http.post(o.N.baseUrl+"/admin/updateKitchenImages",t)}updateBankDetails(t){return this.http.post(o.N.baseUrl+"/admin/updateBankDetails",t)}getUserOverView(t){return this.http.post(o.N.baseUrl+"/admin/getUserOverView",t)}activeDeActiveUser(t){return this.http.post(o.N.baseUrl+"/admin/activeDeActiveUser",t)}getMakerDashboardData(t){return this.http.post(o.N.baseUrl+"/maker/getMakerDashboardData",t)}addEditListing(t){return this.http.post(o.N.baseUrl+"/maker/addEditListing",t)}deleteListing(t){return this.http.post(o.N.baseUrl+"/maker/deleteListing",t)}changeOrderStatus(t){return this.http.post(o.N.baseUrl+"/maker/changeOrderStatus",t)}toggleMakerStatus(t){return this.http.post(o.N.baseUrl+"/maker/toggleMakerStatus",t)}updateCustomerDetails(t){return this.http.post(o.N.baseUrl+"/customer/updateCustomerDetails",t)}getCustomerOrders(t){return this.http.post(o.N.baseUrl+"/customer/getCustomerOrders",t)}getAllListingsForCustomer(t){return this.http.post(o.N.baseUrl+"/auth/getAllListingsForCustomer",t)}setFavItem(t){return this.http.post(o.N.baseUrl+"/customer/setFavItem",t)}setUnFavItem(t){return this.http.post(o.N.baseUrl+"/customer/setUnFavItem",t)}getListingForUser(t){return this.http.post(o.N.baseUrl+"/auth/getListingForUser",t)}getCustomerAddress(t){return this.http.post(o.N.baseUrl+"/customer/getCustomerAddress",t)}deleteTempOrder(t){return this.http.post(o.N.baseUrl+"/customer/deleteTempOrder",t)}addCustomerAddress(t){return this.http.post(o.N.baseUrl+"/customer/addCustomerAddress",t)}setDefaultAddress(t){return this.http.post(o.N.baseUrl+"/customer/setDefaultAddress",t)}deleteAddress(t){return this.http.post(o.N.baseUrl+"/customer/deleteAddress",t)}addToCart(t){return this.http.post(o.N.baseUrl+"/customer/addToCart",t)}getCustomerOrderSummary(t){return this.http.post(o.N.baseUrl+"/customer/getCustomerOrderSummary",t)}placeOrder(t){return this.http.post(o.N.baseUrl+"/customer/placeOrder",t)}createOrderInRazorPay(t){return this.http.post(o.N.baseUrl+"/customer/createOrderInRazorPay",t)}payWithRazorpay(t,f,D){var v=this;return(0,g.Z)(function*(){return new Promise(function(){var N=(0,g.Z)(function*(b,C){const I={key:o.N.razorpayKey,amount:100*f,currency:"INR",name:"Vdream Innovations (OPC) private limited",description:"Vdream Innovations",order_id:t,handler:(n=(0,g.Z)(function*(u){try{let r={...yield v.verifyPayment({verify:u}),...u};console.log({obj:r}),b(r)}catch(i){console.log({error:i}),C(i)}}),function(i){return n.apply(this,arguments)}),prefill:{name:"test",email:"test",contact:"test"},theme:{color:"#3399cc"},modal:{ondismiss:()=>{C({message:"Your payment has been cancelled."})}},retry:{enabled:!1}},M=new Razorpay(I);var n;yield M.on("payment.failed",function(){var n=(0,g.Z)(function*(u){let i=u.error||u||{};i.message=i.message||i.description,M.close(),console.log("closed"),C(i)});return function(u){return n.apply(this,arguments)}}()),yield M.open()});return function(b,C){return N.apply(this,arguments)}}())})()}verifyPayment(t){return this.http.post(o.N.baseUrl+"/customer/verifyPaymentDetails",t)}savePaymentFailedDetails(t){return this.http.post(o.N.baseUrl+"/customer/savePaymentFailedDetails",t)}presentDeleteConfirmation(t,f,D){var v=this;return(0,g.Z)(function*(){return new Promise(function(){var N=(0,g.Z)(function*(b){yield(yield v.alertController.create({header:t,message:f,cssClass:D,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{b(!1)}},{text:"OK",cssClass:"primary",handler:()=>{b(!0)}}]})).present()});return function(b){return N.apply(this,arguments)}}())})()}presentLoading(){var t=this;return(0,g.Z)(function*(){const f=yield t.loadingController.create({message:"Loading...",translucent:!0,backdropDismiss:!1});return yield f.present(),f})()}}return(_=y).\u0275fac=function(t){return new(t||_)(p.LFG(d.F0),p.LFG(e.eN),p.LFG(h.Br),p.LFG(h.HT))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),y})()},3609:(Z,P,s)=>{s.d(P,{m:()=>e});var g=s(9004),o=s(95),p=s(6814),d=s(5678);let e=(()=>{var h;class U{}return(h=U).\u0275fac=function(y){return new(y||h)},h.\u0275mod=d.oAB({type:h}),h.\u0275inj=d.cJS({imports:[p.ez,g.Pc,o.u5,o.UX,p.ez,g.Pc,o.u5,o.UX]}),U})()}}]);