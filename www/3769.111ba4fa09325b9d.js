"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3769],{3769:(L,O,c)=>{c.r(O),c.d(O,{CustomerListingOverviewPageModule:()=>E});var v=c(3609),o=c(2436),p=c(5861),t=c(5678),C=c(4414),d=c(9004),x=c(5565),_=c(185),h=c(6814),T=c(95),i=c(9172);const f=["swiper"];function D(r,u){if(1&r){const s=t.EpF();t.TgZ(0,"ion-icon",35),t.NdJ("click",function(){t.CHM(s);const n=t.oxw();return t.KtG(n.favItem())}),t.qZA()}}function y(r,u){if(1&r){const s=t.EpF();t.TgZ(0,"ion-icon",36),t.NdJ("click",function(){t.CHM(s);const n=t.oxw();return t.KtG(n.unFavItem())}),t.qZA()}}function b(r,u){if(1&r&&(t.TgZ(0,"swiper-slide"),t._UZ(1,"img",37),t.ALo(2,"async"),t.ALo(3,"getLogo"),t.qZA()),2&r){const s=u.$implicit;t.xp6(1),t.Q6J("src",t.lcZ(2,1,t.lcZ(3,3,s)),t.LSH)}}function w(r,u){if(1&r&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t._UZ(3,"br"),t.BQk()),2&r){const s=t.oxw();t.xp6(2),t.Oqu(s.listingData.makerData.userName)}}function Z(r,u){if(1&r&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&r){const s=t.oxw();t.xp6(2),t.Oqu(s.listingData.makerData.address)}}function k(r,u){if(1&r){const s=t.EpF();t.TgZ(0,"ion-row",38)(1,"ion-col")(2,"ion-text"),t._uU(3),t.qZA(),t._UZ(4,"br"),t.TgZ(5,"div",39)(6,"ion-text"),t._uU(7),t.qZA()()(),t.TgZ(8,"ion-col",40)(9,"ion-text"),t._uU(10),t.qZA()(),t.TgZ(11,"ion-col",41)(12,"ion-button",42)(13,"ion-button",43),t.NdJ("click",function(){const l=t.CHM(s).$implicit,a=t.oxw();return t.KtG(a.decrementCount(l))}),t._UZ(14,"ion-icon",44),t.qZA(),t.TgZ(15,"span",45),t._uU(16),t.qZA(),t.TgZ(17,"ion-button",46),t.NdJ("click",function(){const l=t.CHM(s).$implicit,a=t.oxw();return t.KtG(a.incrementCount(l))}),t._UZ(18,"ion-icon",47),t.qZA()()(),t.TgZ(19,"ion-col",48)(20,"ion-text"),t._uU(21),t.qZA()()()}if(2&r){const s=u.$implicit;t.xp6(3),t.Oqu(s.name),t.xp6(4),t.hij("",s.quantity-s.count," Left"),t.xp6(3),t.hij("\u20b9 ",s.price,""),t.xp6(6),t.Oqu(s.count),t.xp6(1),t.Q6J("disabled",s.count>=s.quantity),t.xp6(4),t.hij("Individual Item Cost: \u20b9 ",s.individualItemCost,"")}}const A=r=>({"selected-button":r});function P(r,u){if(1&r){const s=t.EpF();t.TgZ(0,"button",49),t.NdJ("click",function(){const l=t.CHM(s).$implicit,a=t.oxw();return t.KtG(a.selectDeliveryType(l.type))}),t.TgZ(1,"ion-row")(2,"ion-col",40),t._UZ(3,"ion-icon",50),t.TgZ(4,"ion-text",51),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-row")(7,"ion-col",52)(8,"ion-text",53),t._uU(9,"Delivery Available"),t.qZA()()()()}if(2&r){const s=u.$implicit,e=t.oxw();t.ekj("selected",e.selectedDeliveryType===s.type),t.Q6J("ngClass",t.VKq(4,A,e.selectedDeliveryType===s.type)),t.xp6(5),t.Oqu(s.type)}}const I=[{path:"",component:(()=>{var r;class u{constructor(e,n,l,a,g){this.router=e,this.model=n,this.alert=l,this.adminService=a,this.authService=g,this._id="",this.listingData={},this.totalCost=0,this.note="",this.swiperHeight="240px",this.selectedDeliveryType=null}ngOnInIt(){}swiperReady(){var e;this.swiper=null===(e=this.swiperRef)||void 0===e?void 0:e.nativeElement.swiper}ionViewWillEnter(){var e=this;return(0,p.Z)(function*(){e._id=e.router.url.split("/")[2],e.listingData={},e.totalCost=0,e.selectedDeliveryType="",e.note="";const n=yield e.adminService.presentLoading();e.adminService.getListingForUser({_id:e._id}).subscribe(a=>{a.success&&a.data?(e.listingData=a.data||{},e.swiperHeight="241px",e.listingData.listingOrders.forEach(g=>{g.count=void 0!==g.quantity?0:g.quantity,g.individualItemCost=g.price*g.count||0}),e.calculateTotalCost()):e.navigateToListings(),n.dismiss()},a=>{e.navigateToListings(),n.dismiss()});let l=localStorage.getItem("order");if(l){let a=JSON.parse(l);localStorage.removeItem("order"),e.continueProcess(a)}})()}selectDeliveryType(e){this.selectedDeliveryType=e}swiperSlideChanged(e){console.log("changed: ",e)}favItem(){this.adminService.setFavItem({_id:this._id}).subscribe(e=>{e.success&&(this.listingData.favourite=!0)},e=>{console.log(e)})}unFavItem(){this.adminService.setUnFavItem({_id:this._id}).subscribe(e=>{e.success&&(this.listingData.favourite=!1)},e=>{console.log(e)})}incrementCount(e){e&&"count"in e&&"quantity"in e?e.count<e.quantity&&(e.count=(e.count||0)+1,e.individualItemCost=e.price*e.count||0,this.calculateTotalCost()):console.warn("Order object or its properties are undefined or missing.")}decrementCount(e){e.count&&e.count>0&&(e.count--,e.individualItemCost=e.price*e.count||0,this.calculateTotalCost())}calculateTotalCost(){this.totalCost=this.listingData.listingOrders.reduce((e,n)=>e+n.individualItemCost||0,0)}addToCart(){let e=this.listingData.listingOrders.filter(a=>a.count),n=this.listingData.deliveryOptions.find(a=>a.type==this.selectedDeliveryType),l={refListingId:this.listingData._id,refMakerId:this.listingData.refMakerId,deliveryOption:n,note:this.note,finalCostWithOutDeliveryOption:this.totalCost,orderedItems:e};if(this.totalCost&&this.selectedDeliveryType)if(localStorage.getItem("token")&&localStorage.getItem("userData")){let a=localStorage.getItem("token"),g=JSON.parse(a);this.authService.checkUserToken({token:g}).subscribe(m=>{m.data&&m.success?(localStorage.setItem("userData",JSON.stringify(m.data)),this.continueProcess(l)):(localStorage.setItem("order",JSON.stringify(l)),this.router.navigate(["/login"]))},m=>{localStorage.clear(),localStorage.setItem("order",JSON.stringify(l)),this.router.navigate(["/login"])})}else localStorage.clear(),localStorage.setItem("order",JSON.stringify(l)),this.router.navigate(["/login"]);else console.log("Please select")}continueProcess(e){this.adminService.addToCart(e).subscribe(n=>{n.success&&n._id?this.router.navigateByUrl("/orderSummary/"+n._id):this.openAlert("ERROR","something went wrong please try again later",["close"])},n=>{this.openAlert("ERROR","something went wrong please try again later",["close"])})}navigateToListings(){this.router.navigate(["/customerListings"])}openAlert(e,n,l){var a=this;return(0,p.Z)(function*(){yield(yield a.alert.create({header:e,message:n,buttons:l,mode:"ios"})).present()})()}goBack(){var e=this;return(0,p.Z)(function*(){var n;if((null===(n=e.listingData)||void 0===n||null===(n=n.listingOrders)||void 0===n?void 0:n.filter(a=>a.count)).length){const a=yield e.adminService.presentDeleteConfirmation("Confirm","Sure you want to cancel the order?","");console.log({confirmed:a}),a&&e.router.navigate(["/customerListings"])}else e.router.navigate(["/customerListings"])})()}formatDate(e){const n=new Date(e);return`${n.getDate()} ${n.toLocaleString("en-US",{month:"short"})} ${n.toLocaleString("en-US",{weekday:"short"})} ${n.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}`}shareLink(){if(navigator.share){var e;let m="Listing Details\n";m+=`Title: ${this.listingData.label||"Title not available"}\n`,m+=`Order Ends On: ${this.listingData.orderEndsOn?this.formatDate(this.listingData.orderEndsOn):"End date not available"}\n`,m+=`Order Delivered On: ${this.listingData.orderDeliveredOn?this.formatDate(this.listingData.orderDeliveredOn):"Delivered date not available"}\n`,m+=`Location: ${(null===(e=this.listingData.makerData)||void 0===e?void 0:e.address)||"Location not available"}\n`,navigator.share({text:m,url:location.href}).then(()=>console.log("Successful share")).catch(U=>{console.log("Error sharing:",U),alert("Error sharing content. Please try again.")})}else console.log("Web Share API not supported."),alert("Web Share API not supported.")}}return(r=u).\u0275fac=function(e){return new(e||r)(t.Y36(o.F0),t.Y36(C.IN),t.Y36(C.Br),t.Y36(x.l),t.Y36(_.u))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-customer-listing-overview"]],viewQuery:function(e,n){if(1&e&&t.Gf(f,5),2&e){let l;t.iGM(l=t.CRH())&&(n.swiperRef=l.first)}},decls:67,vars:26,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","10px"],[2,"display","flex","justify-content","start","align-items","center"],["name","arrow-back-outline",1,"kd_svg_size",3,"click"],[2,"display","flex","justify-content","center","align-items","center"],["name","star-outline","class","kd_svg_size",3,"click",4,"ngIf"],["name","star","class","kd_svg_size","style","color:blue",3,"click",4,"ngIf"],[2,"display","flex","justify-content","center","align-items","center",3,"click"],["name","share-social-outline",1,"kd_svg_size"],[2,"display","flex","justify-content","end","align-items","center"],["name","bag-handle-outline",1,"kd_svg_size"],[3,"fullscreen"],[2,"margin","15px"],[1,"kd_orders_card",2,"margin","0px"],[2,"overflow","hidden",3,"loop","pagination","slidesPerView","slidesPerGroup","afterinit","change"],["swiper",""],[4,"ngFor","ngForOf"],["size","5",1,"kd_center_align_items",2,"margin","10px 0px","font-weight","bold"],["name","bag-handle-outline",1,"icon_style",2,"padding-right","6px"],["size","6"],[2,"margin-top","3px"],["name","calendar-outline",1,"icon_style"],[2,"font-weight","bold"],[1,"kd_flex",2,"margin-top","3px"],[1,"first_letter_styles"],[2,"padding-left","10px","font-size","13px"],[4,"ngIf"],[2,"font-size","22px","font-weight","600"],["style","padding-top: 15px;",4,"ngFor","ngForOf"],[2,"padding","15px 5px"],["placeholder","Note",1,"custom-textarea",3,"ngModel","ngModelChange"],[1,"scroll_width"],[2,"overflow-x","auto","white-space","nowrap","display","flex","margin","5px"],["style","border: solid 2px; border-radius: 14px; padding: 10px 0px; margin-right: 15px;",3,"selected","ngClass","click",4,"ngFor","ngForOf"],[3,"click"],["name","star-outline",1,"kd_svg_size",3,"click"],["name","star",1,"kd_svg_size",2,"color","blue",3,"click"],[3,"src"],[2,"padding-top","15px"],[2,"padding-top","5px"],[1,"kd_flex","kd_center_align"],[1,"kd_flex","kd_end_align"],[1,"count_button"],[1,"count_button",2,"--border-radius","0px","--background","white !important","--background-activated","#bcc4e8",3,"click"],["name","remove-outline"],[1,"count",2,"padding","0px 8px"],[1,"count_button",2,"--border-radius","0px","--background","white !important","--background-activated","#bcc4e8",3,"disabled","click"],["name","add-outline"],["size","12",1,"kd_flex","kd_end_align"],[2,"border","solid 2px","border-radius","14px","padding","10px 0px","margin-right","15px",3,"ngClass","click"],["name","home-outline",1,"icon_style",2,"padding-right","5px"],[2,"font-size","12px","font-weight","bold"],[2,"text-align","center"],[1,"kd_font_size_12"]],template:function(e,n){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2)(4,"ion-icon",3),t.NdJ("click",function(){return n.goBack()}),t.qZA()(),t.TgZ(5,"ion-col",4),t.YNc(6,D,1,0,"ion-icon",5)(7,y,1,0,"ion-icon",6),t.qZA(),t.TgZ(8,"ion-col",7),t.NdJ("click",function(){return n.shareLink()}),t._UZ(9,"ion-icon",8),t.qZA(),t.TgZ(10,"ion-col",9),t._UZ(11,"ion-icon",10),t.qZA()()()(),t.TgZ(12,"ion-content",11)(13,"div",12)(14,"ion-card",13)(15,"swiper-container",14,15),t.NdJ("afterinit",function(){return n.swiperReady()})("change",function(a){return n.swiperSlideChanged(a)}),t.YNc(17,b,4,5,"swiper-slide",16),t.qZA()(),t.TgZ(18,"ion-row")(19,"ion-col",17),t._UZ(20,"ion-icon",18),t.TgZ(21,"ion-text"),t._uU(22),t.qZA()()(),t.TgZ(23,"ion-row")(24,"ion-col",19)(25,"ion-text"),t._uU(26,"Order Delivered On"),t.qZA(),t.TgZ(27,"div",20),t._UZ(28,"ion-icon",21),t.TgZ(29,"ion-text"),t._uU(30),t.ALo(31,"date"),t.qZA()()(),t.TgZ(32,"ion-col",19)(33,"ion-text",22),t._uU(34,"Maker Details"),t.qZA(),t.TgZ(35,"div",23)(36,"div",24)(37,"ion-text",22),t._uU(38,"R"),t.qZA()(),t.TgZ(39,"ion-text",25),t.YNc(40,w,4,1,"ng-container",26)(41,Z,3,1,"ng-container",26),t.qZA()()()(),t.TgZ(42,"ion-row")(43,"ion-col")(44,"ion-text",27),t._uU(45),t.qZA()()(),t.TgZ(46,"ion-row")(47,"ion-col")(48,"ion-text"),t._uU(49,"Order Ends On"),t.qZA(),t.TgZ(50,"div",20),t._UZ(51,"ion-icon",21),t.TgZ(52,"ion-text"),t._uU(53),t.ALo(54,"date"),t.qZA()()()(),t.YNc(55,k,22,6,"ion-row",28),t.TgZ(56,"ion-row")(57,"ion-col",29)(58,"ion-textarea",30),t.NdJ("ngModelChange",function(a){return n.note=a}),t.qZA()()(),t.TgZ(59,"ion-row")(60,"ion-toolbar",31)(61,"div",32),t.YNc(62,P,10,6,"button",33),t.qZA()()(),t.TgZ(63,"ion-row")(64,"ion-col")(65,"ion-button",34),t.NdJ("click",function(){return n.addToCart()}),t._uU(66,"ADD TO CART"),t.qZA()()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("ngIf",!n.listingData.favourite),t.xp6(1),t.Q6J("ngIf",n.listingData.favourite),t.xp6(5),t.Q6J("fullscreen",!0),t.xp6(3),t.Udp("height",n.swiperHeight),t.Q6J("loop",!0)("pagination",!0)("slidesPerView",1)("slidesPerGroup",1),t.xp6(2),t.Q6J("ngForOf",n.listingData.imageArray),t.xp6(5),t.Oqu(null==n.listingData||null==n.listingData.listingOrders||null==n.listingData.listingOrders[0]?null:n.listingData.listingOrders[0].name),t.xp6(8),t.Oqu(t.xi3(31,20,n.listingData.orderDeliveredOn,"d MMMM EEE")),t.xp6(10),t.Q6J("ngIf",n.listingData.makerData),t.xp6(1),t.Q6J("ngIf",n.listingData.makerData),t.xp6(4),t.Oqu(n.listingData.label),t.xp6(8),t.Oqu(t.xi3(54,23,n.listingData.orderEndsOn,"dd MMMM EEE hh:mm a")),t.xp6(2),t.Q6J("ngForOf",n.listingData.listingOrders),t.xp6(3),t.Q6J("ngModel",n.note),t.xp6(4),t.Q6J("ngForOf",n.listingData.deliveryOptions))},dependencies:[h.mk,h.sg,h.O5,d.YG,d.PM,d.wI,d.W2,d.Gu,d.gu,d.Nd,d.yW,d.g2,d.sr,d.j9,T.JJ,T.On,i.n,h.Ov,h.uU],styles:["ion-textarea.custom-textarea[_ngcontent-%COMP%]{--color: black;padding:10px;border-radius:14px;--placeholder-color: black;--placeholder-opacity: .8;border:black;border-style:solid;border-width:1px}.location_type_div[_ngcontent-%COMP%]{--background: white;text-align:left;font-size:12px;border:solid 1px;border-radius:14px;min-height:75.2px;min-width:150px;padding:8px;font-weight:700}.ripple-parent[_ngcontent-%COMP%]{position:relative;overflow:hidden}swiper-container[_ngcontent-%COMP%]{--swiper-pagination-bullet-inactive-color: var(--ion-color-step-500, white);--swiper-theme-color: #0aa26d}.selected-button[_ngcontent-%COMP%]{background-color:#e4ac89;color:#946142}"]}),u})()}];let M=(()=>{var r;class u{}return(r=u).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[o.Bz.forChild(I),o.Bz]}),u})(),E=(()=>{var r;class u{}return(r=u).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[v.m,M]}),u})()},5565:(L,O,c)=>{c.d(O,{l:()=>x});var v=c(5861),o=c(553),p=c(5678),t=c(2436),C=c(9862),d=c(4414);let x=(()=>{var _;class h{constructor(i,f,D,y){this.route=i,this.http=f,this.alertController=D,this.loadingController=y}getUsersCount(i){return this.http.post(o.N.baseUrl+"/admin/getUsersCount",i)}getListingsCount(i){return this.http.post(o.N.baseUrl+"/admin/getListingsCount",i)}getAllListings(i){return this.http.post(o.N.baseUrl+"/admin/getAllListings",i)}getListingBasedOnId(i){return this.http.post(o.N.baseUrl+"/admin/getListingBasedOnId",i)}getAllUsersList(i){return this.http.post(o.N.baseUrl+"/admin/getAllUsersList",i)}getUserBasedOnId(i){return this.http.post(o.N.baseUrl+"/admin/getUserBasedOnId",i)}activeDeActiveListing(i){return this.http.post(o.N.baseUrl+"/admin/activeDeActiveListing",i)}createMaker(i){return this.http.post(o.N.baseUrl+"/admin/createMaker",i)}updateKitchenImages(i){return this.http.post(o.N.baseUrl+"/admin/updateKitchenImages",i)}updateBankDetails(i){return this.http.post(o.N.baseUrl+"/admin/updateBankDetails",i)}getUserOverView(i){return this.http.post(o.N.baseUrl+"/admin/getUserOverView",i)}activeDeActiveUser(i){return this.http.post(o.N.baseUrl+"/admin/activeDeActiveUser",i)}getMakerDashboardData(i){return this.http.post(o.N.baseUrl+"/maker/getMakerDashboardData",i)}addEditListing(i){return this.http.post(o.N.baseUrl+"/maker/addEditListing",i)}deleteListing(i){return this.http.post(o.N.baseUrl+"/maker/deleteListing",i)}changeOrderStatus(i){return this.http.post(o.N.baseUrl+"/maker/changeOrderStatus",i)}updateCustomerDetails(i){return this.http.post(o.N.baseUrl+"/customer/updateCustomerDetails",i)}getCustomerOrders(i){return this.http.post(o.N.baseUrl+"/customer/getCustomerOrders",i)}getAllListingsForCustomer(i){return this.http.post(o.N.baseUrl+"/auth/getAllListingsForCustomer",i)}setFavItem(i){return this.http.post(o.N.baseUrl+"/customer/setFavItem",i)}setUnFavItem(i){return this.http.post(o.N.baseUrl+"/customer/setUnFavItem",i)}getListingForUser(i){return this.http.post(o.N.baseUrl+"/auth/getListingForUser",i)}getCustomerAddress(i){return this.http.post(o.N.baseUrl+"/customer/getCustomerAddress",i)}deleteTempOrder(i){return this.http.post(o.N.baseUrl+"/customer/deleteTempOrder",i)}addCustomerAddress(i){return this.http.post(o.N.baseUrl+"/customer/addCustomerAddress",i)}setDefaultAddress(i){return this.http.post(o.N.baseUrl+"/customer/setDefaultAddress",i)}deleteAddress(i){return this.http.post(o.N.baseUrl+"/customer/deleteAddress",i)}addToCart(i){return this.http.post(o.N.baseUrl+"/customer/addToCart",i)}getCustomerOrderSummary(i){return this.http.post(o.N.baseUrl+"/customer/getCustomerOrderSummary",i)}placeOrder(i){return this.http.post(o.N.baseUrl+"/customer/placeOrder",i)}presentDeleteConfirmation(i,f,D){var y=this;return(0,v.Z)(function*(){return new Promise(function(){var b=(0,v.Z)(function*(w){yield(yield y.alertController.create({header:i,message:f,cssClass:D,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{w(!1)}},{text:"OK",cssClass:"primary",handler:()=>{w(!0)}}]})).present()});return function(w){return b.apply(this,arguments)}}())})()}presentLoading(){var i=this;return(0,v.Z)(function*(){const f=yield i.loadingController.create({message:"Loading...",translucent:!0,backdropDismiss:!1});return yield f.present(),f})()}}return(_=h).\u0275fac=function(i){return new(i||_)(p.LFG(t.F0),p.LFG(C.eN),p.LFG(d.Br),p.LFG(d.HT))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),h})()},3609:(L,O,c)=>{c.d(O,{m:()=>C});var v=c(9004),o=c(95),p=c(6814),t=c(5678);let C=(()=>{var d;class x{}return(d=x).\u0275fac=function(h){return new(h||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[p.ez,v.Pc,o.u5,o.UX,p.ez,v.Pc,o.u5,o.UX]}),x})()}}]);