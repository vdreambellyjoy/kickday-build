"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7724],{7724:(Z,x,l)=>{l.r(x),l.d(x,{ListingsPageModule:()=>m});var c=l(6814),n=l(95),o=l(9004),p=l(2436),t=l(5678),U=l(4414),L=l(5565);function g(i,d){if(1&i){const s=t.EpF();t.TgZ(0,"ion-col",16)(1,"ion-icon",17),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.goToBack())}),t.qZA()()}}function v(i,d){if(1&i){const s=t.EpF();t.TgZ(0,"ion-card",18),t.NdJ("click",function(){const h=t.CHM(s).$implicit,f=t.oxw();return t.KtG(f.openListing(h))}),t.TgZ(1,"ion-row")(2,"ion-col")(3,"ion-text"),t._uU(4),t.ALo(5,"date"),t.qZA()()(),t.TgZ(6,"ion-row")(7,"ion-col")(8,"ion-text"),t._uU(9,"Listing ID"),t.qZA()(),t.TgZ(10,"ion-col")(11,"ion-text"),t._uU(12),t.qZA()(),t.TgZ(13,"ion-col")(14,"ion-text"),t._uU(15),t.qZA()(),t.TgZ(16,"ion-col")(17,"ion-text"),t._uU(18),t.qZA()()(),t.TgZ(19,"ion-row",19)(20,"ion-col",20)(21,"ion-text",21),t._uU(22),t.qZA()(),t.TgZ(23,"ion-col",22),t._UZ(24,"ion-icon",23),t.qZA()(),t.TgZ(25,"ion-row")(26,"ion-col",24)(27,"ion-text",25),t._uU(28,"Order will end on"),t.qZA()(),t.TgZ(29,"ion-col",24)(30,"ion-text",25),t._uU(31,"Order will delivered on"),t.qZA()()(),t.TgZ(32,"ion-row")(33,"ion-col",26),t._UZ(34,"ion-icon",27),t.TgZ(35,"div",28)(36,"ion-text"),t._uU(37),t.ALo(38,"date"),t.qZA()()(),t.TgZ(39,"ion-col",26),t._UZ(40,"ion-icon",27),t.TgZ(41,"div",28)(42,"ion-text"),t._uU(43),t.ALo(44,"date"),t.qZA()()()()()}if(2&i){const s=d.$implicit;t.xp6(4),t.hij(" Created on ",t.xi3(5,7,s.createdAt,"dd MMMM EEE")," "),t.xp6(8),t.Oqu(s.ID),t.xp6(3),t.Oqu((null==s?null:s.status)||"Active"),t.xp6(3),t.hij("",s.customerOrdersCount," Orders"),t.xp6(4),t.Oqu(s.label),t.xp6(15),t.Oqu(t.xi3(38,10,s.orderEndsOn,"dd MMMM EEE hh:mm a")),t.xp6(6),t.Oqu(t.xi3(44,13,s.orderDeliveredOn,"dd MMMM EEE"))}}function b(i,d){if(1&i){const s=t.EpF();t.TgZ(0,"ion-footer",29)(1,"ion-card",30)(2,"ion-row")(3,"ion-col",31),t._UZ(4,"ion-ripple-effect",32)(5,"ion-icon",33),t.TgZ(6,"ion-text",34),t._uU(7,"Listings"),t.qZA()(),t.TgZ(8,"ion-col",35),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.navigateToCreateListing())}),t._UZ(9,"ion-ripple-effect",32)(10,"ion-icon",36),t.TgZ(11,"ion-text",34),t._uU(12,"Create Listing"),t.qZA()(),t.TgZ(13,"ion-col",35),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.navigateToDashboard())}),t._UZ(14,"ion-ripple-effect",32)(15,"ion-icon",37),t.TgZ(16,"ion-text",34),t._uU(17,"Profile"),t.qZA()()()()()}}const u=[{path:"",component:(()=>{var i;class d{constructor(a,r,h){this.router=a,this.navCtrl=r,this.adminService=h,this.userData={},this.listings=[],this.selectedSegment="Live"}ngOnInit(){}ionViewWillEnter(){let a=localStorage.getItem("userData");this.userData=JSON.parse(a),this.changeSegment(this.selectedSegment)}openListing(a){this.router.navigateByUrl("/listingOverView/"+a._id)}goToBack(){this.router.navigate(["/adminDashboard"])}navigateToDashboard(){this.router.navigate(["/makerDashboard"])}navigateToCreateListing(){this.router.navigate(["/createListing"])}changeSegment(a="Live"){this.selectedSegment=a,this.adminService.getAllListings({selectedValue:this.selectedSegment}).subscribe(r=>{r.success&&(this.listings=r.list.length?r.list:[])},r=>{console.log(r)})}}return(i=d).\u0275fac=function(a){return new(a||i)(t.Y36(p.F0),t.Y36(U.SH),t.Y36(L.l))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-listings"]],decls:24,vars:6,consts:[[2,"box-shadow","none",3,"translucent"],[2,"padding","5px 10px 0px 10px"],["size","2","style","display: flex; justify-content: start; align-items: center;",4,"ngIf"],[1,"kd_center_align_items"],["name","bag-handle-outline",1,"kd_svg_size"],[2,"padding-left","10px","font-size","18px"],[2,"padding","0px","--background","white","box-shadow","none","background-color","#dfd9f1","--box-shadow","none"],["mode","md",3,"ngModel","ionChange","ngModelChange"],["value","Live"],["value","Completed"],["value","InActive"],[3,"fullscreen"],[2,"margin","15px"],["class","kd_orders_card",3,"click",4,"ngFor","ngForOf"],[2,"height","100px"],["style","bottom: 0px; position: absolute",4,"ngIf"],["size","2",2,"display","flex","justify-content","start","align-items","center"],["name","arrow-back-outline",1,"kd_back_button",3,"click"],[1,"kd_orders_card",3,"click"],[2,"margin-bottom","10px"],["size","10"],[2,"font-weight","bold"],["size","2",1,"kd_flex","kd_end_align"],["name","arrow-forward-circle-outline",1,"icon_style",2,"height","32px","width","32px","padding-right","0px"],[1,"ion-no-padding"],[2,"font-size","14px","font-weight","bold"],[1,"kd_flex"],["name","calendar-outline",1,"icon_style",2,"height","30px","width","30px"],[1,"kd_flex",2,"padding-top","5px"],[2,"bottom","0px","position","absolute"],[2,"margin","0px","border-radius","0px","padding","10px"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent"],[1,"ripple_background"],["name","bag-handle-outline",1,"footer_icon_styles"],[1,"icon-text_styles"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent",3,"click"],["name","add-circle-outline",1,"footer_icon_styles"],["name","person-circle-outline",1,"footer_icon_styles"]],template:function(a,r){1&a&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1),t.YNc(3,g,2,0,"ion-col",2),t.TgZ(4,"ion-col",3),t._UZ(5,"ion-icon",4),t.TgZ(6,"ion-text",5),t._uU(7,"Listings"),t.qZA()()()()(),t.TgZ(8,"ion-toolbar",6)(9,"ion-segment",7),t.NdJ("ionChange",function(f){return r.changeSegment(f.target.value)})("ngModelChange",function(f){return r.selectedSegment=f}),t.TgZ(10,"ion-segment-button",8)(11,"ion-label"),t._uU(12,"Live"),t.qZA()(),t.TgZ(13,"ion-segment-button",9)(14,"ion-label"),t._uU(15,"Completed"),t.qZA()(),t.TgZ(16,"ion-segment-button",10)(17,"ion-label"),t._uU(18,"InActive"),t.qZA()()()(),t.TgZ(19,"ion-content",11)(20,"div",12),t.YNc(21,v,45,16,"ion-card",13),t.qZA(),t._UZ(22,"div",14),t.qZA(),t.YNc(23,b,18,0,"ion-footer",15)),2&a&&(t.Q6J("translucent",!0),t.xp6(3),t.Q6J("ngIf","admin"==r.userData.role),t.xp6(6),t.Q6J("ngModel",r.selectedSegment),t.xp6(10),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngForOf",r.listings),t.xp6(2),t.Q6J("ngIf","maker"==r.userData.role))},dependencies:[c.sg,c.O5,n.JJ,n.On,o.PM,o.wI,o.W2,o.fr,o.Gu,o.gu,o.Q$,o.H$,o.Nd,o.cJ,o.GO,o.yW,o.sr,o.QI,c.uU],styles:[".kd_orders_card[_ngcontent-%COMP%]{margin:15px 0 20px!important;padding:10px}ion-segment-button[_ngcontent-%COMP%]{--color-checked: #61399f;text-transform:none;font-size:12px;--padding-start: 0px;--padding-end: 0px;min-width:min-content}.flex_start[_ngcontent-%COMP%]{align-items:flex-start}"]}),d})()}];let _=(()=>{var i;class d{}return(i=d).\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(u),p.Bz]}),d})(),m=(()=>{var i;class d{}return(i=d).\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.ez,n.u5,o.Pc,_]}),d})()},5565:(Z,x,l)=>{l.d(x,{l:()=>L});var c=l(5861),n=l(553),o=l(5678),p=l(2436),t=l(9862),U=l(4414);let L=(()=>{var g;class v{constructor(e,u,_,m){this.route=e,this.http=u,this.alertController=_,this.loadingController=m}getUsersCount(e){return this.http.post(n.N.baseUrl+"/admin/getUsersCount",e)}getListingsCount(e){return this.http.post(n.N.baseUrl+"/admin/getListingsCount",e)}getAllListings(e){return this.http.post(n.N.baseUrl+"/admin/getAllListings",e)}getListingBasedOnId(e){return this.http.post(n.N.baseUrl+"/admin/getListingBasedOnId",e)}getAllUsersList(e){return this.http.post(n.N.baseUrl+"/admin/getAllUsersList",e)}getUserBasedOnId(e){return this.http.post(n.N.baseUrl+"/admin/getUserBasedOnId",e)}activeDeActiveListing(e){return this.http.post(n.N.baseUrl+"/admin/activeDeActiveListing",e)}createMaker(e){return this.http.post(n.N.baseUrl+"/admin/createMaker",e)}updateKitchenImages(e){return this.http.post(n.N.baseUrl+"/admin/updateKitchenImages",e)}updateBankDetails(e){return this.http.post(n.N.baseUrl+"/admin/updateBankDetails",e)}getUserOverView(e){return this.http.post(n.N.baseUrl+"/admin/getUserOverView",e)}activeDeActiveUser(e){return this.http.post(n.N.baseUrl+"/admin/activeDeActiveUser",e)}getMakerDashboardData(e){return this.http.post(n.N.baseUrl+"/maker/getMakerDashboardData",e)}addEditListing(e){return this.http.post(n.N.baseUrl+"/maker/addEditListing",e)}deleteListing(e){return this.http.post(n.N.baseUrl+"/maker/deleteListing",e)}changeOrderStatus(e){return this.http.post(n.N.baseUrl+"/maker/changeOrderStatus",e)}updateCustomerDetails(e){return this.http.post(n.N.baseUrl+"/customer/updateCustomerDetails",e)}getCustomerOrders(e){return this.http.post(n.N.baseUrl+"/customer/getCustomerOrders",e)}getAllListingsForCustomer(e){return this.http.post(n.N.baseUrl+"/auth/getAllListingsForCustomer",e)}setFavItem(e){return this.http.post(n.N.baseUrl+"/customer/setFavItem",e)}setUnFavItem(e){return this.http.post(n.N.baseUrl+"/customer/setUnFavItem",e)}getListingForUser(e){return this.http.post(n.N.baseUrl+"/auth/getListingForUser",e)}getCustomerAddress(e){return this.http.post(n.N.baseUrl+"/customer/getCustomerAddress",e)}deleteTempOrder(e){return this.http.post(n.N.baseUrl+"/customer/deleteTempOrder",e)}addCustomerAddress(e){return this.http.post(n.N.baseUrl+"/customer/addCustomerAddress",e)}setDefaultAddress(e){return this.http.post(n.N.baseUrl+"/customer/setDefaultAddress",e)}deleteAddress(e){return this.http.post(n.N.baseUrl+"/customer/deleteAddress",e)}addToCart(e){return this.http.post(n.N.baseUrl+"/customer/addToCart",e)}getCustomerOrderSummary(e){return this.http.post(n.N.baseUrl+"/customer/getCustomerOrderSummary",e)}placeOrder(e){return this.http.post(n.N.baseUrl+"/customer/placeOrder",e)}presentDeleteConfirmation(e,u,_){var m=this;return(0,c.Z)(function*(){return new Promise(function(){var i=(0,c.Z)(function*(d){yield(yield m.alertController.create({header:e,message:u,cssClass:_,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{d(!1)}},{text:"OK",cssClass:"primary",handler:()=>{d(!0)}}]})).present()});return function(d){return i.apply(this,arguments)}}())})()}presentLoading(){var e=this;return(0,c.Z)(function*(){const u=yield e.loadingController.create({message:"Loading...",translucent:!0,backdropDismiss:!1});return yield u.present(),u})()}}return(g=v).\u0275fac=function(e){return new(e||g)(o.LFG(p.F0),o.LFG(t.eN),o.LFG(U.Br),o.LFG(U.HT))},g.\u0275prov=o.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),v})()}}]);