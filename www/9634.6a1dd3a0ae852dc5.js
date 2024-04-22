"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9634],{1273:(E,f,a)=>{a.d(f,{z:()=>x});var m=a(5861),s=a(95),e=a(5678),p=a(4414),d=a(9004),c=a(5565),g=a(6814);function _(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"My Addresses"),e.qZA(),e.TgZ(4,"ion-buttons",1)(5,"ion-icon",2),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.dismiss())}),e.qZA()()()()}}function A(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"a",12),e.NdJ("click",function(n){e.CHM(r);const u=e.oxw().$implicit;return e.oxw(2).makeDefaultAddresses(u._id),e.KtG(n.stopPropagation())}),e._uU(1," Set as Default "),e.qZA()}}function O(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"ion-icon",13),e.NdJ("click",function(n){e.CHM(r);const u=e.oxw().$implicit;return e.oxw(2).deleteAddress(u._id),e.KtG(n.stopPropagation())}),e.qZA()}}function t(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"ion-item",6),e.NdJ("click",function(){const u=e.CHM(r).$implicit,h=e.oxw(2);return e.KtG(h.selectAddress(u))}),e.TgZ(1,"div",7)(2,"ion-avatar",8),e._UZ(3,"ion-icon",9),e.qZA(),e.TgZ(4,"ion-label")(5,"h2"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.TgZ(9,"p"),e._uU(10),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.qZA(),e.TgZ(13,"p"),e._uU(14),e.qZA(),e.YNc(15,A,2,0,"a",10),e.qZA(),e.YNc(16,O,1,0,"ion-icon",11),e.qZA()()}if(2&i){const r=l.$implicit;e.xp6(3),e.Udp("color",r.default?"blue":"grey"),e.xp6(3),e.Oqu(r.name),e.xp6(2),e.Oqu(r.address),e.xp6(2),e.Oqu(r.LocationUrl),e.xp6(2),e.Oqu(r.email),e.xp6(2),e.Oqu(r.mobile),e.xp6(1),e.Q6J("ngIf",!r.default),e.xp6(1),e.Q6J("ngIf",!r.default)}}function C(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"ion-content")(1,"ion-list")(2,"ion-button",3),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.showAddressForm=!0)}),e._UZ(3,"ion-icon",4),e._uU(4," Add Address "),e.qZA(),e.YNc(5,t,17,9,"ion-item",5),e.qZA()()}if(2&i){const r=e.oxw();e.xp6(5),e.Q6J("ngForOf",r.addressList)}}function U(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Add Address"),e.qZA(),e.TgZ(4,"ion-buttons",1)(5,"ion-icon",2),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.showAddressForm=!1)}),e.qZA()()()()}}function b(i,l){if(1&i){const r=e.EpF();e.TgZ(0,"ion-content")(1,"form",14)(2,"ion-card",15)(3,"ion-item")(4,"ion-label",16),e._uU(5,"Name*"),e.qZA(),e._UZ(6,"ion-input",17),e.qZA()(),e.TgZ(7,"ion-card",18)(8,"ion-item")(9,"ion-label",16),e._uU(10,"Email*"),e.qZA(),e._UZ(11,"ion-input",19),e.qZA()(),e.TgZ(12,"ion-card",18)(13,"ion-item")(14,"ion-label",16),e._uU(15,"Mobile*"),e.qZA(),e._UZ(16,"ion-input",20),e.qZA()(),e.TgZ(17,"ion-card",18)(18,"ion-item")(19,"ion-label",16),e._uU(20,"Address*"),e.qZA(),e._UZ(21,"ion-input",21),e.qZA()(),e.TgZ(22,"ion-card",18)(23,"ion-item")(24,"ion-label",16),e._uU(25,"Googgle Location URL*"),e.qZA(),e._UZ(26,"ion-input",22),e.qZA()(),e.TgZ(27,"ion-row")(28,"ion-col",23)(29,"ion-button",24),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.saveDetails())}),e._uU(30,"SAVE"),e.qZA()()()()()}if(2&i){const r=e.oxw();e.xp6(1),e.Q6J("formGroup",r.deliveryDataForm)}}let x=(()=>{var i;class l{constructor(o,n,u,h){this.fb=o,this.modalCtrl=n,this.adminService=u,this.alertController=h,this.addressList=[],this.showAddressForm=!1,this.deliveryDataForm=this.fb.group({name:["",s.kI.required],email:["",s.kI.required],mobile:["",s.kI.required],address:["",s.kI.required],LocationUrl:[""]})}ngOnInit(){}ngAfterViewInit(){this.deliveryDataForm=this.fb.group({name:["",s.kI.required],email:["",s.kI.required],mobile:["",s.kI.required],address:["",s.kI.required],LocationUrl:[""]}),this.showAddressForm=!1,this.adminService.getCustomerAddress({}).subscribe(o=>{this.addressList=o.data||[]},o=>{this.addressList=[]})}dismiss(){this.modalCtrl.dismiss()}saveDetails(){this.deliveryDataForm.valid?this.adminService.addCustomerAddress(this.deliveryDataForm.value).subscribe(o=>{o.success?this.ngAfterViewInit():this.openAlert("ERROR","something went wrong please try again",["close"])},o=>{this.openAlert("ERROR","something went wrong please try again",["close"])}):this.openAlert("Warning","please fill all mandatory fields image",["close"])}openAlert(o,n,u){var h=this;return(0,m.Z)(function*(){yield(yield h.alertController.create({header:o,message:n,buttons:u,mode:"ios"})).present()})()}makeDefaultAddresses(o){this.adminService.setDefaultAddress({_id:o}).subscribe(n=>{n.success?this.addressList=n.data||[]:this.openAlert("ERROR","something went wrong please try again",["close"])},n=>{this.openAlert("ERROR","something went wrong please try again",["close"])})}deleteAddress(o){this.adminService.deleteAddress({_id:o}).subscribe(n=>{n.success?this.addressList=n.data||[]:this.openAlert("ERROR","something went wrong please try again",["close"])},n=>{this.openAlert("ERROR","something went wrong please try again",["close"])})}selectAddress(o){console.log(o),this.modalCtrl.dismiss(o)}}return(i=l).\u0275fac=function(o){return new(o||i)(e.Y36(s.qu),e.Y36(p.IN),e.Y36(c.l),e.Y36(p.Br))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-customer-address-list"]],decls:4,vars:4,consts:[[4,"ngIf"],["slot","end"],["name","close-circle-outline",2,"font-size","25px","color","#777",3,"click"],["lines","none",3,"click"],["name","add",2,"color","#3880ff"],["lines","none","style","padding: 16px; padding-right: 0px",3,"click",4,"ngFor","ngForOf"],["lines","none",2,"padding","16px","padding-right","0px",3,"click"],[1,"address-card"],["slot","start"],["name","location-outline",2,"padding-right","10px"],[3,"click",4,"ngIf"],["class","delete-icon","name","trash-outline",3,"click",4,"ngIf"],[3,"click"],["name","trash-outline",1,"delete-icon",3,"click"],[2,"padding","15px",3,"formGroup"],[1,"input_selection",2,"margin-top","15px"],["position","stacked"],["formControlName","name","placeholder","Enter Name"],[1,"input_selection"],["formControlName","email","aria-label","Email","placeholder","Enter Email"],["formControlName","mobile","aria-label","Mobile","placeholder","Enter Mobile"],["formControlName","address","aria-label","Location","placeholder","Enter Address"],["formControlName","LocationUrl","aria-label","Location","placeholder","Location URL"],[1,"kd_flex","kd_flex_col_center","kd_no_padding"],["expand","full","shape","round","color","primary",2,"width","100%","margin","0px",3,"click"]],template:function(o,n){1&o&&e.YNc(0,_,6,0,"ion-header",0)(1,C,6,1,"ion-content",0)(2,U,6,0,"ion-header",0)(3,b,31,1,"ion-content",0),2&o&&(e.Q6J("ngIf",!n.showAddressForm),e.xp6(1),e.Q6J("ngIf",!n.showAddressForm),e.xp6(1),e.Q6J("ngIf",n.showAddressForm),e.xp6(1),e.Q6J("ngIf",n.showAddressForm))},dependencies:[g.sg,g.O5,d.BJ,d.YG,d.Sm,d.PM,d.wI,d.W2,d.Gu,d.gu,d.pK,d.Ie,d.Q$,d.q_,d.Nd,d.wd,d.sr,d.j9,s._Y,s.JJ,s.JL,s.sg,s.u],styles:[".address-card[_ngcontent-%COMP%]{border:2px solid #ddd;border-radius:15px;padding:15px;box-shadow:0 4px 8px #0000001a;background-color:#fff;width:100%;display:flex;align-items:center}.input_selection[_ngcontent-%COMP%]{border:solid 2px black;border-radius:8px;height:70px;margin:25px 0;padding:10px;box-shadow:none}ion-label[_ngcontent-%COMP%]{font-size:16px!important}ion-item[_ngcontent-%COMP%]{--border-style: none}.address-card[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-weight:700;font-size:18px}.address-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}.address-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3880ff;cursor:pointer}.address-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:40px;width:40px}.delete-icon[_ngcontent-%COMP%]{color:red;padding-left:10px}.add-address-icon[_ngcontent-%COMP%]{color:#3880ff}ion-button[_ngcontent-%COMP%]{margin:20px;width:180px;color:#3880ff;--background: seashell}"]}),l})()},5565:(E,f,a)=>{a.d(f,{l:()=>g});var m=a(5861),s=a(553),e=a(5678),p=a(2436),d=a(9862),c=a(4414);let g=(()=>{var _;class A{constructor(t,C,U){this.route=t,this.http=C,this.alertController=U}getUsersCount(t){return this.http.post(s.N.baseUrl+"/admin/getUsersCount",t)}getListingsCount(t){return this.http.post(s.N.baseUrl+"/admin/getListingsCount",t)}getAllListings(t){return this.http.post(s.N.baseUrl+"/admin/getAllListings",t)}getListingBasedOnId(t){return this.http.post(s.N.baseUrl+"/admin/getListingBasedOnId",t)}getAllUsersList(t){return this.http.post(s.N.baseUrl+"/admin/getAllUsersList",t)}getUserBasedOnId(t){return this.http.post(s.N.baseUrl+"/admin/getUserBasedOnId",t)}activeDeActiveListing(t){return this.http.post(s.N.baseUrl+"/admin/activeDeActiveListing",t)}createMaker(t){return this.http.post(s.N.baseUrl+"/admin/createMaker",t)}updateKitchenImages(t){return this.http.post(s.N.baseUrl+"/admin/updateKitchenImages",t)}updateBankDetails(t){return this.http.post(s.N.baseUrl+"/admin/updateBankDetails",t)}getUserOverView(t){return this.http.post(s.N.baseUrl+"/admin/getUserOverView",t)}activeDeActiveUser(t){return this.http.post(s.N.baseUrl+"/admin/activeDeActiveUser",t)}getMakerDashboardData(t){return this.http.post(s.N.baseUrl+"/maker/getMakerDashboardData",t)}addEditListing(t){return this.http.post(s.N.baseUrl+"/maker/addEditListing",t)}deleteListing(t){return this.http.post(s.N.baseUrl+"/maker/deleteListing",t)}changeOrderStatus(t){return this.http.post(s.N.baseUrl+"/maker/changeOrderStatus",t)}updateCustomerDetails(t){return this.http.post(s.N.baseUrl+"/customer/updateCustomerDetails",t)}getCustomerOrders(t){return this.http.post(s.N.baseUrl+"/customer/getCustomerOrders",t)}getAllListingsForCustomer(t){return this.http.post(s.N.baseUrl+"/auth/getAllListingsForCustomer",t)}setFavItem(t){return this.http.post(s.N.baseUrl+"/customer/setFavItem",t)}setUnFavItem(t){return this.http.post(s.N.baseUrl+"/customer/setUnFavItem",t)}getListingForUser(t){return this.http.post(s.N.baseUrl+"/auth/getListingForUser",t)}getCustomerAddress(t){return this.http.post(s.N.baseUrl+"/customer/getCustomerAddress",t)}deleteTempOrder(t){return this.http.post(s.N.baseUrl+"/customer/deleteTempOrder",t)}addCustomerAddress(t){return this.http.post(s.N.baseUrl+"/customer/addCustomerAddress",t)}setDefaultAddress(t){return this.http.post(s.N.baseUrl+"/customer/setDefaultAddress",t)}deleteAddress(t){return this.http.post(s.N.baseUrl+"/customer/deleteAddress",t)}addToCart(t){return this.http.post(s.N.baseUrl+"/customer/addToCart",t)}getCustomerOrderSummary(t){return this.http.post(s.N.baseUrl+"/customer/getCustomerOrderSummary",t)}placeOrder(t){return this.http.post(s.N.baseUrl+"/customer/placeOrder",t)}presentDeleteConfirmation(t,C,U){var b=this;return(0,m.Z)(function*(){return new Promise(function(){var x=(0,m.Z)(function*(i){yield(yield b.alertController.create({header:t,message:C,cssClass:U,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{i(!1)}},{text:"OK",cssClass:"primary",handler:()=>{i(!0)}}]})).present()});return function(i){return x.apply(this,arguments)}}())})()}}return(_=A).\u0275fac=function(t){return new(t||_)(e.LFG(p.F0),e.LFG(d.eN),e.LFG(c.Br))},_.\u0275prov=e.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),A})()},3609:(E,f,a)=>{a.d(f,{m:()=>d});var m=a(9004),s=a(95),e=a(6814),p=a(5678);let d=(()=>{var c;class g{}return(c=g).\u0275fac=function(A){return new(A||c)},c.\u0275mod=p.oAB({type:c}),c.\u0275inj=p.cJS({imports:[e.ez,m.Pc,s.u5,s.UX,e.ez,m.Pc,s.u5,s.UX]}),g})()}}]);