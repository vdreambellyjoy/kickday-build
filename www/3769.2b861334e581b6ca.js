"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3769],{3769:(D,h,l)=>{l.r(h),l.d(h,{CustomerListingOverviewPageModule:()=>I});var m=l(3609),r=l(2436),g=l(5861),t=l(5678),v=l(4414),u=l(9004),f=l(5565),p=l(185),_=l(6814),w=l(95),i=l(9172);const C=["swiper"];function O(s,d){if(1&s){const o=t.EpF();t.TgZ(0,"ion-icon",33),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.favItem())}),t.qZA()}}function b(s,d){if(1&s){const o=t.EpF();t.TgZ(0,"ion-icon",34),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.unFavItem())}),t.qZA()}}function T(s,d){if(1&s&&(t.TgZ(0,"swiper-slide"),t._UZ(1,"img",35),t.ALo(2,"async"),t.ALo(3,"getLogo"),t.qZA()),2&s){const o=d.$implicit;t.xp6(1),t.Q6J("src",t.lcZ(2,1,t.lcZ(3,3,o)),t.LSH)}}function x(s,d){if(1&s&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t._UZ(3,"br"),t.BQk()),2&s){const o=t.oxw();t.xp6(2),t.Oqu(o.listingData.makerData.userName)}}function Z(s,d){if(1&s&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&s){const o=t.oxw();t.xp6(2),t.Oqu(o.listingData.makerData.address)}}function L(s,d){if(1&s){const o=t.EpF();t.TgZ(0,"ion-row",27)(1,"ion-col",36)(2,"ion-text"),t._uU(3),t.qZA(),t._UZ(4,"br"),t.TgZ(5,"div",37)(6,"ion-text"),t._uU(7),t.qZA()()(),t.TgZ(8,"ion-col",38)(9,"ion-text"),t._uU(10),t.qZA()(),t.TgZ(11,"ion-col",39)(12,"ion-button",40)(13,"ion-button",41),t.NdJ("click",function(){const a=t.CHM(o).$implicit,c=t.oxw();return t.KtG(c.decrementCount(a))}),t._UZ(14,"ion-icon",42),t.qZA(),t.TgZ(15,"span",43),t._uU(16),t.qZA(),t.TgZ(17,"ion-button",44),t.NdJ("click",function(){const a=t.CHM(o).$implicit,c=t.oxw();return t.KtG(c.incrementCount(a))}),t._UZ(18,"ion-icon",45),t.qZA()()(),t.TgZ(19,"ion-col",46)(20,"ion-text"),t._uU(21),t.qZA()()()}if(2&s){const o=d.$implicit;t.xp6(3),t.Oqu(o.name),t.xp6(4),t.hij("",o.quantity-o.count," Left"),t.xp6(3),t.hij("\u20b9 ",o.price,""),t.xp6(6),t.Oqu(o.count),t.xp6(1),t.Q6J("disabled",o.count>=o.quantity),t.xp6(4),t.hij("Individual Item Cost: \u20b9 ",o.individualItemCost,"")}}const A=s=>({"selected-button":s});function k(s,d){if(1&s){const o=t.EpF();t.TgZ(0,"button",47),t.NdJ("click",function(){const a=t.CHM(o).$implicit,c=t.oxw();return t.KtG(c.selectDeliveryType(a.type))}),t.TgZ(1,"ion-row")(2,"ion-col",48),t._UZ(3,"ion-icon",49),t.TgZ(4,"ion-text",50),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-row")(7,"ion-col",51)(8,"ion-text",52),t._uU(9,"Delivered on "),t._UZ(10,"br"),t._uU(11," 24th May 2:30PM"),t.qZA()()()()}if(2&s){const o=d.$implicit,e=t.oxw();t.ekj("selected",e.selectedDeliveryType===o.type),t.Q6J("ngClass",t.VKq(4,A,e.selectedDeliveryType===o.type)),t.xp6(5),t.Oqu(o.type)}}const P=[{path:"",component:(()=>{var s;class d{constructor(e,n,a,c,y){this.router=e,this.model=n,this.alert=a,this.adminService=c,this.authService=y,this._id="",this.listingData={},this.totalCost=0,this.note="",this.swiperHeight="240px",this.selectedDeliveryType=null}ngOnInIt(){}swiperReady(){var e;this.swiper=null===(e=this.swiperRef)||void 0===e?void 0:e.nativeElement.swiper}ionViewWillEnter(){this._id=this.router.url.split("/")[2],this.listingData={},this.totalCost=0,this.selectedDeliveryType="",this.note="",this.adminService.getListingForUser({_id:this._id}).subscribe(n=>{n.success&&n.data?(this.listingData=n.data||{},this.swiperHeight="241px",this.listingData.listingOrders.forEach(a=>{a.count=void 0!==a.quantity?0:a.quantity,a.individualItemCost=a.price*a.count||0}),this.calculateTotalCost()):this.navigateToListings()},n=>{this.navigateToListings()});let e=localStorage.getItem("order");if(e){let n=JSON.parse(e);localStorage.removeItem("order"),this.continueProcess(n)}}selectDeliveryType(e){this.selectedDeliveryType=e}swiperSlideChanged(e){console.log("changed: ",e)}favItem(){this.adminService.setFavItem({_id:this._id}).subscribe(e=>{e.success&&(this.listingData.favourite=!0)},e=>{console.log(e)})}unFavItem(){this.adminService.setUnFavItem({_id:this._id}).subscribe(e=>{e.success&&(this.listingData.favourite=!1)},e=>{console.log(e)})}incrementCount(e){e&&"count"in e&&"quantity"in e?e.count<e.quantity&&(e.count=(e.count||0)+1,e.individualItemCost=e.price*e.count||0,this.calculateTotalCost()):console.warn("Order object or its properties are undefined or missing.")}decrementCount(e){e.count&&e.count>0&&(e.count--,e.individualItemCost=e.price*e.count||0,this.calculateTotalCost())}calculateTotalCost(){this.totalCost=this.listingData.listingOrders.reduce((e,n)=>e+n.individualItemCost||0,0)}addToCart(){let e=this.listingData.listingOrders.filter(c=>c.count),n=this.listingData.deliveryOptions.find(c=>c.type==this.selectedDeliveryType),a={refListingId:this.listingData._id,refMakerId:this.listingData.refMakerId,deliveryOption:n,note:this.note,finalCostWithOutDeliveryOption:this.totalCost,orderedItems:e};if(this.totalCost&&this.selectedDeliveryType)if(localStorage.getItem("token")&&localStorage.getItem("userData")){let c=localStorage.getItem("token"),y=JSON.parse(c);this.authService.checkUserToken({token:y}).subscribe(U=>{U.data&&U.success?(localStorage.setItem("userData",JSON.stringify(U.data)),this.continueProcess(a)):(localStorage.setItem("order",JSON.stringify(a)),this.router.navigate(["/login"]))},U=>{localStorage.clear(),localStorage.setItem("order",JSON.stringify(a)),this.router.navigate(["/login"])})}else localStorage.clear(),localStorage.setItem("order",JSON.stringify(a)),this.router.navigate(["/login"]);else console.log("Please select")}continueProcess(e){this.adminService.addToCart(e).subscribe(n=>{n.success&&n._id?this.router.navigateByUrl("/orderSummary/"+n._id):this.openAlert("ERROR","something went wrong please try again later",["close"])},n=>{this.openAlert("ERROR","something went wrong please try again later",["close"])})}navigateToListings(){this.router.navigate(["/customerListings"])}openAlert(e,n,a){var c=this;return(0,g.Z)(function*(){yield(yield c.alert.create({header:e,message:n,buttons:a,mode:"ios"})).present()})()}goBack(){var e=this;return(0,g.Z)(function*(){var n;if((null===(n=e.listingData)||void 0===n||null===(n=n.listingOrders)||void 0===n?void 0:n.filter(c=>c.count)).length){const c=yield e.adminService.presentDeleteConfirmation("Confirm","Sure you want to cancel the order?","");console.log({confirmed:c}),c&&e.router.navigate(["/customerListings"])}else e.router.navigate(["/customerListings"])})()}}return(s=d).\u0275fac=function(e){return new(e||s)(t.Y36(r.F0),t.Y36(v.IN),t.Y36(v.Br),t.Y36(f.l),t.Y36(p.u))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customer-listing-overview"]],viewQuery:function(e,n){if(1&e&&t.Gf(C,5),2&e){let a;t.iGM(a=t.CRH())&&(n.swiperRef=a.first)}},decls:67,vars:27,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","10px"],[2,"display","flex","justify-content","start","align-items","center"],["name","arrow-back-outline",1,"kd_svg_size",3,"click"],[2,"display","flex","justify-content","center","align-items","center"],["name","star-outline","class","kd_svg_size",3,"click",4,"ngIf"],["name","star","class","kd_svg_size","style","color:blue",3,"click",4,"ngIf"],["name","share-social-outline",1,"kd_svg_size"],[2,"display","flex","justify-content","end","align-items","center"],["name","bag-handle-outline",1,"kd_svg_size"],[3,"fullscreen"],[2,"margin","15px"],[2,"border","solid 1px lightgray","border-radius","14px"],[2,"overflow","hidden",3,"loop","pagination","slidesPerView","slidesPerGroup","afterinit","change"],["swiper",""],[4,"ngFor","ngForOf"],["size","5",1,"kd_center_align_items"],["name","bag-handle-outline",1,"icon_style",2,"padding-bottom","6px"],[2,"margin-top","3px"],["name","calendar-outline",1,"icon_style"],[1,"kd_flex"],[1,"first_letter_styles"],[2,"font-weight","bold"],[2,"padding-left","20px","font-size","13px"],[4,"ngIf"],[2,"font-size","22px","font-weight","600"],["style","padding-top: 15px;",4,"ngFor","ngForOf"],[2,"padding-top","15px"],["placeholder","Note",1,"custom-textarea",3,"ngModel","ngModelChange"],[1,"scroll_width"],[2,"overflow-x","auto","white-space","nowrap","display","flex","margin","5px"],["style","border: solid 2px; border-radius: 14px; padding: 10px 0px; margin-right: 15px;",3,"selected","ngClass","click",4,"ngFor","ngForOf"],[3,"click"],["name","star-outline",1,"kd_svg_size",3,"click"],["name","star",1,"kd_svg_size",2,"color","blue",3,"click"],[3,"src"],["size","7"],[2,"padding-top","5px"],["size","2",1,"kd_flex","kd_center_align"],["size","3",1,"kd_flex","kd_end_align"],[1,"count_button"],[1,"count_button",2,"--border-radius","0px","--background","white","--background-activated","#bcc4e8",3,"click"],["name","remove-outline"],[1,"count",2,"padding","0px 8px"],[1,"count_button",2,"--border-radius","0px","--background","white","--background-activated","#bcc4e8",3,"disabled","click"],["name","add-outline"],["size","12",1,"kd_flex","kd_end_align"],[2,"border","solid 2px","border-radius","14px","padding","10px 0px","margin-right","15px",3,"ngClass","click"],[1,"kd_flex","kd_center_align"],["name","home-outline",1,"icon_style",2,"padding-right","5px"],[2,"font-size","12px","font-weight","bold"],[2,"text-align","center"],[1,"kd_font_size_12"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2)(4,"ion-icon",3),t.NdJ("click",function(){return n.goBack()}),t.qZA()(),t.TgZ(5,"ion-col",4),t.YNc(6,O,1,0,"ion-icon",5)(7,b,1,0,"ion-icon",6),t.qZA(),t.TgZ(8,"ion-col",4),t._UZ(9,"ion-icon",7),t.qZA(),t.TgZ(10,"ion-col",8),t._UZ(11,"ion-icon",9),t.qZA()()()(),t.TgZ(12,"ion-content",10)(13,"div",11)(14,"div",12)(15,"swiper-container",13,14),t.NdJ("afterinit",function(){return n.swiperReady()})("change",function(c){return n.swiperSlideChanged(c)}),t.YNc(17,T,4,5,"swiper-slide",15),t.qZA()(),t.TgZ(18,"ion-row")(19,"ion-col",16),t._UZ(20,"ion-icon",17),t.TgZ(21,"ion-text"),t._uU(22),t.qZA()()(),t.TgZ(23,"ion-row")(24,"ion-col")(25,"ion-text"),t._uU(26,"Order Delivered On"),t.qZA(),t.TgZ(27,"div",18),t._UZ(28,"ion-icon",19),t.TgZ(29,"ion-text"),t._uU(30),t.ALo(31,"date"),t.qZA()()(),t.TgZ(32,"ion-col",20)(33,"div",21)(34,"ion-text",22),t._uU(35,"R"),t.qZA()(),t.TgZ(36,"ion-text",23)(37,"span",22),t._uU(38),t.qZA(),t._UZ(39,"br"),t.YNc(40,x,4,1,"ng-container",24)(41,Z,3,1,"ng-container",24),t.qZA()()(),t.TgZ(42,"ion-row")(43,"ion-col")(44,"ion-text",25),t._uU(45),t.qZA()()(),t.TgZ(46,"ion-row")(47,"ion-col")(48,"ion-text"),t._uU(49,"Order Ends On"),t.qZA(),t.TgZ(50,"div",18),t._UZ(51,"ion-icon",19),t.TgZ(52,"ion-text"),t._uU(53),t.ALo(54,"date"),t.qZA()()()(),t.YNc(55,L,22,6,"ion-row",26),t.TgZ(56,"ion-row")(57,"ion-col",27)(58,"ion-textarea",28),t.NdJ("ngModelChange",function(c){return n.note=c}),t.qZA()()(),t.TgZ(59,"ion-row")(60,"ion-toolbar",29)(61,"div",30),t.YNc(62,k,12,6,"button",31),t.qZA()()(),t.TgZ(63,"ion-row")(64,"ion-col")(65,"ion-button",32),t.NdJ("click",function(){return n.addToCart()}),t._uU(66,"ADD TO CART"),t.qZA()()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("ngIf",!n.listingData.favourite),t.xp6(1),t.Q6J("ngIf",n.listingData.favourite),t.xp6(5),t.Q6J("fullscreen",!0),t.xp6(3),t.Udp("height",n.swiperHeight),t.Q6J("loop",!0)("pagination",!0)("slidesPerView",1)("slidesPerGroup",1),t.xp6(2),t.Q6J("ngForOf",n.listingData.imageArray),t.xp6(5),t.Oqu(n.listingData.category),t.xp6(8),t.Oqu(t.xi3(31,21,n.listingData.orderDeliveredOn,"d MMMM EEE")),t.xp6(8),t.hij("Maker (",n.listingData.ID,")"),t.xp6(2),t.Q6J("ngIf",n.listingData.makerData),t.xp6(1),t.Q6J("ngIf",n.listingData.makerData),t.xp6(4),t.Oqu(n.listingData.label),t.xp6(8),t.Oqu(t.xi3(54,24,n.listingData.orderEndsOn,"dd MMMM EEE hh:mm a")),t.xp6(2),t.Q6J("ngForOf",n.listingData.listingOrders),t.xp6(3),t.Q6J("ngModel",n.note),t.xp6(4),t.Q6J("ngForOf",n.listingData.deliveryOptions))},dependencies:[_.mk,_.sg,_.O5,u.YG,u.wI,u.W2,u.Gu,u.gu,u.Nd,u.yW,u.g2,u.sr,u.j9,w.JJ,w.On,i.n,_.Ov,_.uU],styles:["ion-textarea.custom-textarea[_ngcontent-%COMP%]{--color: black;padding:10px;border-radius:14px;--placeholder-color: black;--placeholder-opacity: .8;border:black;border-style:solid;border-width:1px}.location_type_div[_ngcontent-%COMP%]{--background: white;text-align:left;font-size:12px;border:solid 1px;border-radius:14px;min-height:75.2px;min-width:150px;padding:8px;font-weight:700}.ripple-parent[_ngcontent-%COMP%]{position:relative;overflow:hidden}swiper-container[_ngcontent-%COMP%]{--swiper-pagination-bullet-inactive-color: var(--ion-color-step-500, white);--swiper-theme-color: #0aa26d}.selected-button[_ngcontent-%COMP%]{background-color:#add8e6;color:#00008b}"]}),d})()}];let M=(()=>{var s;class d{}return(s=d).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[r.Bz.forChild(P),r.Bz]}),d})(),I=(()=>{var s;class d{}return(s=d).\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[m.m,M]}),d})()},5565:(D,h,l)=>{l.d(h,{l:()=>f});var m=l(5861),r=l(553),g=l(5678),t=l(2436),v=l(9862),u=l(4414);let f=(()=>{var p;class _{constructor(i,C,O){this.route=i,this.http=C,this.alertController=O}getUsersCount(i){return this.http.post(r.N.baseUrl+"/admin/getUsersCount",i)}getListingsCount(i){return this.http.post(r.N.baseUrl+"/admin/getListingsCount",i)}getAllListings(i){return this.http.post(r.N.baseUrl+"/admin/getAllListings",i)}getListingBasedOnId(i){return this.http.post(r.N.baseUrl+"/admin/getListingBasedOnId",i)}getAllUsersList(i){return this.http.post(r.N.baseUrl+"/admin/getAllUsersList",i)}getUserBasedOnId(i){return this.http.post(r.N.baseUrl+"/admin/getUserBasedOnId",i)}activeDeActiveListing(i){return this.http.post(r.N.baseUrl+"/admin/activeDeActiveListing",i)}createMaker(i){return this.http.post(r.N.baseUrl+"/admin/createMaker",i)}updateKitchenImages(i){return this.http.post(r.N.baseUrl+"/admin/updateKitchenImages",i)}updateBankDetails(i){return this.http.post(r.N.baseUrl+"/admin/updateBankDetails",i)}getUserOverView(i){return this.http.post(r.N.baseUrl+"/admin/getUserOverView",i)}activeDeActiveUser(i){return this.http.post(r.N.baseUrl+"/admin/activeDeActiveUser",i)}getMakerDashboardData(i){return this.http.post(r.N.baseUrl+"/maker/getMakerDashboardData",i)}addEditListing(i){return this.http.post(r.N.baseUrl+"/maker/addEditListing",i)}deleteListing(i){return this.http.post(r.N.baseUrl+"/maker/deleteListing",i)}changeOrderStatus(i){return this.http.post(r.N.baseUrl+"/maker/changeOrderStatus",i)}updateCustomerDetails(i){return this.http.post(r.N.baseUrl+"/customer/updateCustomerDetails",i)}getCustomerOrders(i){return this.http.post(r.N.baseUrl+"/customer/getCustomerOrders",i)}getAllListingsForCustomer(i){return this.http.post(r.N.baseUrl+"/auth/getAllListingsForCustomer",i)}setFavItem(i){return this.http.post(r.N.baseUrl+"/customer/setFavItem",i)}setUnFavItem(i){return this.http.post(r.N.baseUrl+"/customer/setUnFavItem",i)}getListingForUser(i){return this.http.post(r.N.baseUrl+"/auth/getListingForUser",i)}getCustomerAddress(i){return this.http.post(r.N.baseUrl+"/customer/getCustomerAddress",i)}deleteTempOrder(i){return this.http.post(r.N.baseUrl+"/customer/deleteTempOrder",i)}addCustomerAddress(i){return this.http.post(r.N.baseUrl+"/customer/addCustomerAddress",i)}setDefaultAddress(i){return this.http.post(r.N.baseUrl+"/customer/setDefaultAddress",i)}deleteAddress(i){return this.http.post(r.N.baseUrl+"/customer/deleteAddress",i)}addToCart(i){return this.http.post(r.N.baseUrl+"/customer/addToCart",i)}getCustomerOrderSummary(i){return this.http.post(r.N.baseUrl+"/customer/getCustomerOrderSummary",i)}placeOrder(i){return this.http.post(r.N.baseUrl+"/customer/placeOrder",i)}presentDeleteConfirmation(i,C,O){var b=this;return(0,m.Z)(function*(){return new Promise(function(){var T=(0,m.Z)(function*(x){yield(yield b.alertController.create({header:i,message:C,cssClass:O,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{x(!1)}},{text:"OK",cssClass:"primary",handler:()=>{x(!0)}}]})).present()});return function(x){return T.apply(this,arguments)}}())})()}}return(p=_).\u0275fac=function(i){return new(i||p)(g.LFG(t.F0),g.LFG(v.eN),g.LFG(u.Br))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),_})()},3609:(D,h,l)=>{l.d(h,{m:()=>v});var m=l(9004),r=l(95),g=l(6814),t=l(5678);let v=(()=>{var u;class f{}return(u=f).\u0275fac=function(_){return new(_||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[g.ez,m.Pc,r.u5,r.UX,g.ez,m.Pc,r.u5,r.UX]}),f})()}}]);