"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9041],{9041:(b,h,a)=>{a.r(h),a.d(h,{OrdersOverviewPageModule:()=>Z});var u=a(6814),n=a(95),d=a(9004),g=a(2436),e=a(5678),v=a(5565),f=a(6593);function c(o,l){if(1&o&&(e.TgZ(0,"ion-row",21)(1,"ion-col",42)(2,"ion-text",26),e._uU(3),e.qZA()(),e.TgZ(4,"ion-col",24)(5,"ion-text",43),e._uU(6),e._UZ(7,"ion-icon",44),e._uU(8),e.qZA()(),e.TgZ(9,"ion-col",45)(10,"ion-text",46),e._uU(11),e.qZA()()()),2&o){const i=l.$implicit;e.xp6(3),e.Oqu(i.name),e.xp6(3),e.hij("\u20b9 ",i.price," "),e.xp6(2),e.hij(" ",i.count,""),e.xp6(3),e.hij(" = $",i.individualItemCost,"")}}function x(o,l){1&o&&(e.TgZ(0,"ion-text",47),e._uU(1,"Delivery Location"),e.qZA())}function O(o,l){1&o&&(e.TgZ(0,"ion-text",47),e._uU(1,"Pickup Location"),e.qZA())}function t(o,l){if(1&o){const i=e.EpF();e.TgZ(0,"ion-content",7)(1,"div",8)(2,"ion-row")(3,"ion-col")(4,"ion-text"),e._uU(5),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"ion-text",9),e._uU(8),e.qZA()()(),e.TgZ(9,"ion-row",10)(10,"ion-col",11)(11,"div",12)(12,"ion-text",13),e._uU(13,"R"),e.qZA()(),e.TgZ(14,"ion-text",14)(15,"span",13),e._uU(16,"Maker"),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"span"),e._uU(19),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"span"),e._uU(22),e.qZA()()(),e.TgZ(23,"ion-col",15),e.NdJ("click",function(){e.CHM(i);const s=e.oxw();return e.KtG(s.callNumber(s.orderData.makerData.mobileNumber))}),e._UZ(24,"ion-icon",16),e.qZA()(),e.TgZ(25,"ion-row")(26,"ion-col",17)(27,"ion-text",13),e._uU(28),e.qZA()()(),e.TgZ(29,"ion-row")(30,"ion-col",18)(31,"div",19),e.YNc(32,c,12,4,"ion-row",20),e.TgZ(33,"ion-row",21)(34,"ion-col",22)(35,"ion-text",23),e._uU(36),e.qZA()(),e.TgZ(37,"ion-col",24)(38,"ion-text",25),e._uU(39),e.qZA()()(),e.TgZ(40,"ion-row",21)(41,"ion-col",22)(42,"ion-text",23),e._uU(43,"GST"),e.qZA()(),e.TgZ(44,"ion-col",24)(45,"ion-text",25),e._uU(46,"$0"),e.qZA()()(),e.TgZ(47,"ion-row",21)(48,"ion-col",22)(49,"ion-text",26),e._uU(50,"Total"),e.qZA()(),e.TgZ(51,"ion-col",24)(52,"ion-text",26),e._uU(53),e.qZA()()()()()(),e.TgZ(54,"ion-row")(55,"ion-col")(56,"ion-text",27),e._uU(57,"Delivery Details"),e.qZA()()(),e.TgZ(58,"ion-row",10)(59,"ion-col")(60,"div",28),e._UZ(61,"ion-icon",29),e.TgZ(62,"ion-text",30),e._uU(63,"Delivery Address"),e.qZA()()()(),e.TgZ(64,"ion-row")(65,"ion-col")(66,"ion-text",31),e._uU(67),e._UZ(68,"br"),e._uU(69),e._UZ(70,"br"),e._uU(71),e._UZ(72,"br")(73,"br")(74,"ion-text",32),e.qZA()()(),e.TgZ(75,"ion-row",33)(76,"ion-col")(77,"div",34),e._UZ(78,"ion-icon",35),e.YNc(79,x,2,0,"ion-text",36)(80,O,2,0,"ion-text",36),e.qZA(),e.TgZ(81,"ion-text")(82,"a",37),e._uU(83),e.qZA()()()(),e.TgZ(84,"ion-row")(85,"ion-col",38),e.NdJ("click",function(){e.CHM(i);const s=e.oxw();return e.KtG(s.redirectToGoogleMaps())}),e._UZ(86,"ion-icon",39),e.TgZ(87,"ion-text",40),e._uU(88,"Track Delivery"),e.qZA(),e._UZ(89,"img",41),e.qZA()()()()}if(2&o){const i=e.oxw();e.Q6J("fullscreen",!0),e.xp6(5),e.hij("Order ",i.orderData.ID,""),e.xp6(3),e.hij("Placed on: ",i.formatTimestamp(i.orderData.timeStamp),""),e.xp6(11),e.Oqu(i.orderData.makerData.userName),e.xp6(3),e.Oqu(i.orderData.makerData.address),e.xp6(6),e.Oqu(i.orderData.listingData.label),e.xp6(4),e.Q6J("ngForOf",null==i.orderData?null:i.orderData.orderedItems),e.xp6(4),e.hij("Delivery (",i.orderData.deliveryOption.type,")"),e.xp6(3),e.Oqu(i.orderData.deliveryOption.price),e.xp6(14),e.hij("$",i.orderData.totalPrice,""),e.xp6(14),e.hij(" ",i.orderData.deliveryAddress.name," "),e.xp6(2),e.hij(" ",i.orderData.deliveryAddress.email," "),e.xp6(2),e.hij(" ",i.orderData.deliveryAddress.mobile," "),e.xp6(3),e.Q6J("innerHTML",i.getSanitizedLocationUrl(),e.oJD),e.xp6(5),e.Q6J("ngIf","Pickup Available"!=i.orderData.deliveryOption.type),e.xp6(1),e.Q6J("ngIf","Pickup Available"==i.orderData.deliveryOption.type),e.xp6(3),e.Oqu(i.orderData.deliveryAddress.LocationUrl)}}const _=[{path:"",component:(()=>{var o;class l{constructor(r,s,U){this.router=r,this.adminService=s,this.sanitizer=U,this.orderData={}}ngOnInit(){}ionViewWillEnter(){this._id=this.router.url.split("/")[2],this.adminService.getCustomerOrders({_id:this._id}).subscribe(r=>{r.success&&r.data&&(this.orderData=r.data[0])},r=>{console.log(r)})}navigateToOrders(){this.router.navigate(["/orders"])}formatTimestamp(r){const s=new Date(r);return`${s.getDate()} ${s.toLocaleString("en-US",{month:"short"})} ${s.toLocaleString("en-US",{weekday:"short"})} ${s.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}`}callNumber(r){window.open(`tel:${r}`,"_system")}getSanitizedLocationUrl(){var r;let s=(null===(r=this.orderData)||void 0===r||null===(r=r.deliveryAddress)||void 0===r?void 0:r.LocationUrl)||"";return!s&&this.orderData&&this.orderData.deliveryAddress&&(s=this.orderData.deliveryAddress.LocationUrl||""),this.sanitizer.bypassSecurityTrustHtml(s.replace(/,/g,",<br>"))}redirectToGoogleMaps(){var r,s;null!==(r=this.orderData)&&void 0!==r&&null!==(r=r.deliveryAddress)&&void 0!==r&&r.LocationUrl&&window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(null===(s=this.orderData)||void 0===s||null===(s=s.deliveryAddress)||void 0===s?void 0:s.LocationUrl)}`,"_blank")}}return(o=l).\u0275fac=function(r){return new(r||o)(e.Y36(g.F0),e.Y36(v.l),e.Y36(f.H7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-orders-overview"]],decls:9,vars:2,consts:[[2,"box-shadow","none","padding","10px 20px","background","white",3,"translucent"],[1,"kd_center_align_items"],["name","bag-handle-outline",1,"kd_svg_size","padd_left"],[1,"kd_main_heading",2,"padding-left","15px"],[1,"kd_flex","kd_end_align",3,"click"],["name","close-outline",1,"kd_svg_size"],[3,"fullscreen",4,"ngIf"],[3,"fullscreen"],[2,"margin","15px"],[2,"font-size","12px"],[2,"margin-top","15px"],["size","10",1,"kd_col_center_align"],[1,"first_letter_styles"],[2,"font-weight","bold"],[2,"padding-left","20px","font-size","13px"],["size","2",1,"kd_flex","kd_end_align",3,"click"],["name","call-outline",1,"kd_svg_size"],[2,"margin-top","10px"],[1,"kd_flex_row_center",2,"margin","5px 0px"],[2,"border","solid 2px","border-radius","14px","padding","10px","background-color","#f7f7f7"],["class","kd_flex kd_center_align",4,"ngFor","ngForOf"],[1,"kd_flex","kd_center_align"],["size","8"],[2,"font-size","14px","color","#777"],["size","4",1,"kd_flex","kd_end_align"],[2,"font-size","14px","color","#555"],[2,"font-size","16px","font-weight","bold"],[2,"font-weight","bold","font-size","20px"],[1,"kd_flex"],["name","home-outline",1,"icon_style"],[2,"font-weight","bold","font-size","18px"],[2,"font-size","14px"],[2,"font-size","14px",3,"innerHTML"],[2,"margin","15px 0px"],[1,"kd_flex",2,"padding-bottom","5px"],["name","location-outline",1,"icon_style"],["style","font-size: 18px; font-weight: bold;",4,"ngIf"],["href","orderData.deliveryAddress.LocationUrl",2,"color","#007bff","text-decoration","none"],[1,"kd_center_align_items",2,"cursor","pointer",3,"click"],["name","navigate-circle-outline",2,"height","25px","width","25px"],[2,"padding","0px 10px"],["src","../../assets/right_arrow.png","alt","",2,"height","25px","width","25px"],["size"," 8"],[1,"kd_flex",2,"font-size","14px","color","black","font-weight","bold"],["name","close-outline",1,"icon_style",2,"padding-right","5px","padding-left","5px"],[1,"kd_flex","kd_end_align","ion-no-padding",2,"padding-right","5px"],[2,"font-weight","bold","font-size","14px"],[2,"font-size","18px","font-weight","bold"]],template:function(r,s){1&r&&(e.TgZ(0,"ion-header",0)(1,"ion-row")(2,"ion-col",1),e._UZ(3,"ion-icon",2),e.TgZ(4,"ion-text",3),e._uU(5,"Order Taken"),e.qZA()(),e.TgZ(6,"ion-col",4),e.NdJ("click",function(){return s.navigateToOrders()}),e._UZ(7,"ion-icon",5),e.qZA()()(),e.YNc(8,t,90,17,"ion-content",6)),2&r&&(e.Q6J("translucent",!0),e.xp6(8),e.Q6J("ngIf",null==s.orderData?null:s.orderData._id))},dependencies:[u.sg,u.O5,d.wI,d.W2,d.Gu,d.gu,d.Nd,d.yW],styles:["ion-textarea.custom-textarea[_ngcontent-%COMP%]{--color: black;padding:10px;border-radius:14px;--placeholder-color: black;--placeholder-opacity: .8;border:black;border-style:solid;border-width:1px}"]}),l})()}];let m=(()=>{var o;class l{}return(o=l).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(_),g.Bz]}),l})(),Z=(()=>{var o;class l{}return(o=l).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,n.u5,d.Pc,m]}),l})()},5565:(b,h,a)=>{a.d(h,{l:()=>f});var u=a(5861),n=a(553),d=a(5678),g=a(2436),e=a(9862),v=a(4414);let f=(()=>{var c;class x{constructor(t,p,_,m){this.route=t,this.http=p,this.alertController=_,this.loadingController=m}getUsersCount(t){return this.http.post(n.N.baseUrl+"/admin/getUsersCount",t)}getListingsCount(t){return this.http.post(n.N.baseUrl+"/admin/getListingsCount",t)}getAllListings(t){return this.http.post(n.N.baseUrl+"/admin/getAllListings",t)}getListingBasedOnId(t){return this.http.post(n.N.baseUrl+"/admin/getListingBasedOnId",t)}getAllUsersList(t){return this.http.post(n.N.baseUrl+"/admin/getAllUsersList",t)}getUserBasedOnId(t){return this.http.post(n.N.baseUrl+"/admin/getUserBasedOnId",t)}activeDeActiveListing(t){return this.http.post(n.N.baseUrl+"/admin/activeDeActiveListing",t)}createMaker(t){return this.http.post(n.N.baseUrl+"/admin/createMaker",t)}updateKitchenImages(t){return this.http.post(n.N.baseUrl+"/admin/updateKitchenImages",t)}updateBankDetails(t){return this.http.post(n.N.baseUrl+"/admin/updateBankDetails",t)}getUserOverView(t){return this.http.post(n.N.baseUrl+"/admin/getUserOverView",t)}activeDeActiveUser(t){return this.http.post(n.N.baseUrl+"/admin/activeDeActiveUser",t)}getMakerDashboardData(t){return this.http.post(n.N.baseUrl+"/maker/getMakerDashboardData",t)}addEditListing(t){return this.http.post(n.N.baseUrl+"/maker/addEditListing",t)}deleteListing(t){return this.http.post(n.N.baseUrl+"/maker/deleteListing",t)}changeOrderStatus(t){return this.http.post(n.N.baseUrl+"/maker/changeOrderStatus",t)}updateCustomerDetails(t){return this.http.post(n.N.baseUrl+"/customer/updateCustomerDetails",t)}getCustomerOrders(t){return this.http.post(n.N.baseUrl+"/customer/getCustomerOrders",t)}getAllListingsForCustomer(t){return this.http.post(n.N.baseUrl+"/auth/getAllListingsForCustomer",t)}setFavItem(t){return this.http.post(n.N.baseUrl+"/customer/setFavItem",t)}setUnFavItem(t){return this.http.post(n.N.baseUrl+"/customer/setUnFavItem",t)}getListingForUser(t){return this.http.post(n.N.baseUrl+"/auth/getListingForUser",t)}getCustomerAddress(t){return this.http.post(n.N.baseUrl+"/customer/getCustomerAddress",t)}deleteTempOrder(t){return this.http.post(n.N.baseUrl+"/customer/deleteTempOrder",t)}addCustomerAddress(t){return this.http.post(n.N.baseUrl+"/customer/addCustomerAddress",t)}setDefaultAddress(t){return this.http.post(n.N.baseUrl+"/customer/setDefaultAddress",t)}deleteAddress(t){return this.http.post(n.N.baseUrl+"/customer/deleteAddress",t)}addToCart(t){return this.http.post(n.N.baseUrl+"/customer/addToCart",t)}getCustomerOrderSummary(t){return this.http.post(n.N.baseUrl+"/customer/getCustomerOrderSummary",t)}placeOrder(t){return this.http.post(n.N.baseUrl+"/customer/placeOrder",t)}presentDeleteConfirmation(t,p,_){var m=this;return(0,u.Z)(function*(){return new Promise(function(){var Z=(0,u.Z)(function*(o){yield(yield m.alertController.create({header:t,message:p,cssClass:_,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{o(!1)}},{text:"OK",cssClass:"primary",handler:()=>{o(!0)}}]})).present()});return function(o){return Z.apply(this,arguments)}}())})()}presentLoading(){var t=this;return(0,u.Z)(function*(){const p=yield t.loadingController.create({message:"Loading...",translucent:!0,backdropDismiss:!1});return yield p.present(),p})()}}return(c=x).\u0275fac=function(t){return new(t||c)(d.LFG(g.F0),d.LFG(e.eN),d.LFG(v.Br),d.LFG(v.HT))},c.\u0275prov=d.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),x})()}}]);