"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2138],{2138:(O,L,a)=>{a.r(L),a.d(L,{CustomerListingsPageModule:()=>J});var u=a(3609),o=a(2436),p=a(5861),U=a(8650),e=a(5678),_=a(4414),d=a(9004),h=a(5565),Z=a(185),P=a(6814),i=a(9172);const f=["swiper"];function k(r,c){if(1&r){const s=e.EpF();e.TgZ(0,"ion-button",14),e.NdJ("click",function(){e.CHM(s);const n=e.oxw();return e.KtG(n.goToLogin())}),e._uU(1,"Login"),e.qZA()}}function y(r,c){if(1&r){const s=e.EpF();e.TgZ(0,"ion-icon",15),e.NdJ("click",function(){e.CHM(s);const n=e.oxw();return e.KtG(n.openSearchModel())}),e.qZA()}}function w(r,c){if(1&r){const s=e.EpF();e.TgZ(0,"ion-icon",16),e.NdJ("click",function(){e.CHM(s);const n=e.oxw();return e.KtG(n.openSearchModel())}),e.qZA()}}function x(r,c){if(1&r){const s=e.EpF();e.TgZ(0,"ion-icon",17),e.NdJ("click",function(){e.CHM(s);const n=e.oxw();return e.KtG(n.clearFilter())}),e.qZA()}}function T(r,c){1&r&&(e.TgZ(0,"ion-card",22),e._UZ(1,"ion-skeleton-text",23),e.TgZ(2,"ion-row",24)(3,"ion-col",25)(4,"div",26),e._UZ(5,"ion-skeleton-text",27),e.qZA(),e.TgZ(6,"ion-text",28),e._UZ(7,"ion-skeleton-text",29)(8,"br")(9,"ion-skeleton-text",30),e.qZA()(),e.TgZ(10,"ion-col",31)(11,"div"),e._UZ(12,"ion-skeleton-text",29),e.TgZ(13,"div",32),e._UZ(14,"ion-skeleton-text",33)(15,"ion-skeleton-text",34),e.qZA()()()()())}function b(r,c){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,T,16,0,"ion-card",21),e.qZA()),2&r){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.filteredItems)}}function D(r,c){if(1&r){const s=e.EpF();e.TgZ(0,"swiper-slide")(1,"img",44),e.NdJ("load",function(){e.CHM(s);const n=e.oxw(4);return e.KtG(n.onImageLoad())}),e.ALo(2,"async"),e.ALo(3,"getLogo"),e.qZA()()}if(2&r){const s=c.$implicit;e.xp6(1),e.Q6J("src",e.lcZ(2,1,e.lcZ(3,3,s)),e.LSH)}}function A(r,c){if(1&r){const s=e.EpF();e.TgZ(0,"ion-card",36),e.NdJ("click",function(){const l=e.CHM(s).$implicit,g=e.oxw(3);return e.KtG(g.goToListingOverview(l))}),e.TgZ(1,"swiper-container",37,38),e.NdJ("afterinit",function(){e.CHM(s);const n=e.oxw(3);return e.KtG(n.swiperReady())})("slidechange",function(n){e.CHM(s);const l=e.oxw(3);return e.KtG(l.swiperSlideChanged(n))}),e.YNc(3,D,4,5,"swiper-slide",39),e.qZA(),e.TgZ(4,"ion-row",24)(5,"ion-col",25)(6,"div",26)(7,"ion-text",40),e._uU(8),e.qZA()(),e.TgZ(9,"ion-text",28)(10,"span",40),e._uU(11,"Maker"),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"span",41),e._uU(14),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"span",41),e._uU(17),e.qZA()()(),e.TgZ(18,"ion-col",31)(19,"div")(20,"ion-text",40),e._uU(21,"Order Ends on"),e.qZA(),e.TgZ(22,"div",32),e._UZ(23,"ion-icon",42),e.TgZ(24,"ion-text",43),e._uU(25),e.ALo(26,"date"),e.qZA()()()()()()}if(2&r){const s=c.$implicit;e.xp6(1),e.Q6J("loop",!0)("pagination",!0)("slidesPerView",1)("slidesPerGroup",1),e.xp6(2),e.Q6J("ngForOf",s.imageArray),e.xp6(5),e.Oqu(null==s||null==s.makerData||null==s.makerData.userName?null:s.makerData.userName.charAt(0)),e.xp6(6),e.Oqu(s.makerData.userName),e.xp6(3),e.Oqu(s.makerData.address),e.xp6(8),e.Oqu(e.xi3(26,9,s.orderEndsOn,"dd MMMM EEE hh:mm a"))}}function v(r,c){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,A,27,12,"ion-card",35),e.qZA()),2&r){const s=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",s.filteredItems)}}function m(r,c){1&r&&e._UZ(0,"div",45)}function I(r,c){if(1&r){const s=e.EpF();e.TgZ(0,"ion-content",18)(1,"ion-refresher",19),e.NdJ("ionRefresh",function(n){e.CHM(s);const l=e.oxw();return e.KtG(l.handleRefresh(n))}),e._UZ(2,"ion-refresher-content"),e.qZA(),e.YNc(3,b,2,1,"div",12)(4,v,2,1,"div",12)(5,m,1,0,"div",20),e.qZA()}if(2&r){const s=e.oxw();e.Q6J("fullscreen",!0),e.xp6(3),e.Q6J("ngIf",s.isLoading||!s.imagesLoaded),e.xp6(1),e.Q6J("ngIf",!s.isLoading||s.imagesLoaded),e.xp6(1),e.Q6J("ngIf",s.showMenu)}}function N(r,c){1&r&&(e.TgZ(0,"ion-content")(1,"div",46)(2,"ion-text",47),e._uU(3,"WhatsApp what you're looking for to "),e.TgZ(4,"a",48),e._uU(5,"9652177277"),e.qZA(),e._uU(6,"."),e.qZA(),e._UZ(7,"img",49)(8,"div",50),e.qZA()())}function E(r,c){if(1&r){const s=e.EpF();e.TgZ(0,"ion-footer",51)(1,"ion-card",52)(2,"ion-row")(3,"ion-col",53),e.NdJ("click",function(){e.CHM(s);const n=e.oxw();return e.KtG(n.goToOrders())}),e._UZ(4,"ion-ripple-effect",54)(5,"ion-icon",55),e.TgZ(6,"ion-text",56),e._uU(7,"Orders"),e.qZA()(),e.TgZ(8,"ion-col",57),e._UZ(9,"ion-ripple-effect",54)(10,"ion-icon",58),e.TgZ(11,"ion-text",56),e._uU(12,"Listings"),e.qZA()(),e.TgZ(13,"ion-col",53),e.NdJ("click",function(){e.CHM(s);const n=e.oxw();return e.KtG(n.goToProfile())}),e._UZ(14,"ion-ripple-effect",54)(15,"ion-icon",59),e.TgZ(16,"ion-text",56),e._uU(17,"Profile"),e.qZA()()()()()}}const S=[{path:"",component:(()=>{var r;class c{constructor(t,n,l,g,C){this.router=t,this.model=n,this.alert=l,this.adminService=g,this.authService=C,this.selectedSegment="All",this.listings=[],this.filteredItems=[],this.isLoading=!0,this.imagesLoaded=!1,this.loadedImagesCount=0,this.filterSearchTerm="",this.filterDeliveryType="",this.filterDeliveryDate="",this.showMenu=!1,this.filteredItems=this.listings}ngOnInit(){}ionViewWillEnter(){var t=this;return(0,p.Z)(function*(){t.isLoading=!0;const n=yield t.adminService.presentLoading();if(t.filterSearchTerm="",t.filterDeliveryType="",t.filterDeliveryDate="",t.adminService.getAllListingsForCustomer({}).subscribe(l=>{t.listings=l.data||[],t.filteredItems=t.listings,t.isLoading=!1,n.dismiss()},l=>{console.log(l),t.isLoading=!1,n.dismiss()}),localStorage.getItem("token")&&localStorage.getItem("userData")){let l=localStorage.getItem("token"),g=JSON.parse(l);t.authService.checkUserToken({token:g}).subscribe(C=>{C.data&&C.success?(localStorage.setItem("userData",JSON.stringify(C.data)),t.showMenu=!0):t.showMenu=!1},C=>{localStorage.clear(),t.showMenu=!1})}else localStorage.clear(),t.showMenu=!1;t.swiperReady()})()}onImageLoad(){this.loadedImagesCount++,console.log(`Image loaded. Count: ${this.loadedImagesCount}`),this.loadedImagesCount===this.getTotalImageCount()&&(this.imagesLoaded=!0,console.log("All images loaded."))}getTotalImageCount(){let t=0;return this.filteredItems.forEach(n=>{t+=n.imageArray&&n.imageArray.length?n.imageArray.length:0}),0===t&&(this.imagesLoaded=!0),console.log(`Total image count: ${t}`),t}handlePress(t){t.stopPropagation()}swiperSlideChanged(t){console.log("changed: ",t)}swiperReady(){var t;this.swiper=null===(t=this.swiperRef)||void 0===t?void 0:t.nativeElement.swiper}goNext(){(!this.swiper||this.swiper.destroyed)&&this.swiperReady(),this.swiper&&!this.swiper.destroyed&&this.swiper.slideNext()}goPrev(){(!this.swiper||this.swiper.destroyed)&&this.swiperReady(),this.swiper&&!this.swiper.destroyed&&this.swiper.slidePrev()}goToListingOverview(t){this.router.navigateByUrl("/customerListings/"+t._id)}goToOrders(){this.router.navigate(["/orders"])}goToProfile(){this.router.navigate(["/customerProfile"])}goToLogin(){this.router.navigate(["/login"])}onSearch(t){const n=t.target.value.trim().toLowerCase();this.filteredItems=!n||n.length<1?[...this.listings]:this.listings.filter(l=>{const g=l&&l.category?l.category.toLowerCase():"";return console.log(g,"searchhhh"),g.includes(n)})}openSearchModel(){var t=this;return(0,p.Z)(function*(){let n={search:t.filterSearchTerm||"",selectedDeliveryType:t.filterDeliveryType||"",selectedOption:t.filterDeliveryDate||""};const l=yield t.model.create({component:U.Z,componentProps:n});l.present();const{data:g}=yield l.onWillDismiss();g&&(t.filterSearchTerm=g.searchTerm,t.filterDeliveryType=g.deliveryType,t.filterDeliveryDate=g.deliveryDate,t.adminService.getAllListingsForCustomer({search:t.filterSearchTerm||"",deliveryType:t.filterDeliveryType||"",deliveryDate:t.filterDeliveryDate||""}).subscribe(M=>{t.listings=M.data||[],t.filteredItems=t.listings},M=>{console.log(M)}))})()}clearFilter(){this.filterSearchTerm="",this.filterDeliveryType="",this.filterDeliveryDate="",this.adminService.getAllListingsForCustomer({}).subscribe(t=>{this.listings=t.data||[],this.filteredItems=this.listings},t=>{console.log(t)})}handleRefresh(t){this.ionViewWillEnter(),setTimeout(()=>{t.target.complete()},500)}}return(r=c).\u0275fac=function(t){return new(t||r)(e.Y36(o.F0),e.Y36(_.IN),e.Y36(_.Br),e.Y36(h.l),e.Y36(Z.u))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-customer-listings"]],viewQuery:function(t,n){if(1&t&&e.Gf(f,5),2&t){let l;e.iGM(l=e.CRH())&&(n.swiperRef=l.first)}},decls:15,vars:8,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","22px 15px"],["size","9",2,"display","flex","justify-content","start","align-items","center"],["src","../../../assets/icons/Kickday-logo-removebg-preview.png","alt","",2,"position","absolute","height","120px","width","120px"],["size","3",1,"kd_flex","kd_end_align"],["style","margin: 0px; min-height: 30px",3,"click",4,"ngIf"],[2,"display","flex","align-items","center"],["placeholder","Search by Category",1,"searchbar-custom",2,"padding","20px",3,"keyup"],["name","filter-circle-outline","class","kd_svg_size","style","padding-right: 20px;",3,"click",4,"ngIf"],["name","filter-circle-outline","class","kd_svg_size","style","padding-right: 20px;color:blue",3,"click",4,"ngIf"],["name","rocket-outline","style","padding-right: 20px;color:blue;font-size: 30px;",3,"click",4,"ngIf"],[3,"fullscreen",4,"ngIf"],[4,"ngIf"],["style","bottom: 0px; position: absolute",4,"ngIf"],[2,"margin","0px","min-height","30px",3,"click"],["name","filter-circle-outline",1,"kd_svg_size",2,"padding-right","20px",3,"click"],["name","filter-circle-outline",1,"kd_svg_size",2,"padding-right","20px","color","blue",3,"click"],["name","rocket-outline",2,"padding-right","20px","color","blue","font-size","30px",3,"click"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["style","height: 100px;",4,"ngIf"],["class","kd_orders_card","style","margin: 20px",4,"ngFor","ngForOf"],[1,"kd_orders_card",2,"margin","20px"],["animated","",2,"width","100%","height","240px"],[2,"padding","10px"],[1,"kd_flex"],[1,"first_letter_styles"],["animated","",2,"width","40px","height","40px","border-radius","50%"],[2,"padding-left","10px"],["animated","",2,"width","100px"],["animated","",2,"width","150px"],[1,"kd_flex","kd_end_align"],[1,"kd_flex",2,"padding-top","5px"],["animated","",2,"width","20px","height","20px","border-radius","50%"],["animated","",2,"width","150px","margin-left","10px"],["class","kd_orders_card","style","margin: 20px",3,"click",4,"ngFor","ngForOf"],[1,"kd_orders_card",2,"margin","20px",3,"click"],[2,"height","240px",3,"loop","pagination","slidesPerView","slidesPerGroup","afterinit","slidechange"],["swiper",""],[4,"ngFor","ngForOf"],[2,"font-weight","bold"],[1,"kd_font_size_14"],["name","calendar-outline",1,"icon_style",2,"height","20px","width","20px"],[2,"font-size","14px !important"],[3,"src","load"],[2,"height","100px"],[2,"height","100%","display","flex","flex-direction","column","align-items","center","justify-content","center"],[2,"padding","0px 10px","text-align","center","z-index","10"],["href","tel:9652177277"],["src","../../../assets/Untitled design.svg",2,"height","500px","width","500px"],[2,"height","80px"],[2,"bottom","0px","position","absolute"],[2,"margin","0px","border-radius","0px","padding","10px"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent",3,"click"],[1,"ripple_background"],["name","bag-handle-outline",1,"footer_icon_styles"],[1,"icon-text_styles"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent"],["name","list-circle-outline",1,"footer_icon_styles"],["name","person-circle-outline",1,"footer_icon_styles"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2),e._UZ(4,"img",3),e.qZA(),e.TgZ(5,"ion-col",4),e.YNc(6,k,2,0,"ion-button",5),e.qZA()(),e.TgZ(7,"div",6)(8,"ion-searchbar",7),e.NdJ("keyup",function(g){return n.onSearch(g)}),e.qZA(),e.YNc(9,y,1,0,"ion-icon",8)(10,w,1,0,"ion-icon",9)(11,x,1,0,"ion-icon",10),e.qZA()()(),e.YNc(12,I,6,4,"ion-content",11)(13,N,9,0,"ion-content",12)(14,E,18,0,"ion-footer",13)),2&t&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("ngIf",!n.showMenu),e.xp6(3),e.Q6J("ngIf",!n.filterSearchTerm&&!n.filterDeliveryType&&!n.filterDeliveryDate),e.xp6(1),e.Q6J("ngIf",n.filterSearchTerm||n.filterDeliveryType||n.filterDeliveryDate),e.xp6(1),e.Q6J("ngIf",n.filterSearchTerm||n.filterDeliveryType||n.filterDeliveryDate),e.xp6(1),e.Q6J("ngIf",null==n.filteredItems?null:n.filteredItems.length),e.xp6(1),e.Q6J("ngIf",!(null!=n.filteredItems&&n.filteredItems.length)),e.xp6(1),e.Q6J("ngIf",n.showMenu))},dependencies:[P.sg,P.O5,d.YG,d.PM,d.wI,d.W2,d.fr,d.Gu,d.gu,d.nJ,d.Wo,d.H$,d.Nd,d.VI,d.CK,d.yW,d.sr,d.j9,i.n,P.Ov,P.uU],styles:["ion-segment-button[_ngcontent-%COMP%]{--color-checked: #61399f;text-transform:none;font-size:12px;--padding-start: 0px;--padding-end: 0px;min-width:min-content}swiper-container[_ngcontent-%COMP%]{--swiper-pagination-bullet-inactive-color: var(--ion-color-step-500, white);--swiper-theme-color: #0aa26d}"]}),c})()}];let F=(()=>{var r;class c{}return(r=c).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[o.Bz.forChild(S),o.Bz]}),c})(),J=(()=>{var r;class c{}return(r=c).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[u.m,F]}),c})()},5565:(O,L,a)=>{a.d(L,{l:()=>d});var u=a(5861),o=a(553),p=a(5678),U=a(2436),e=a(9862),_=a(4414);let d=(()=>{var h;class Z{constructor(i,f,k,y){this.route=i,this.http=f,this.alertController=k,this.loadingController=y}getUsersCount(i){return this.http.post(o.N.baseUrl+"/admin/getUsersCount",i)}getListingsCount(i){return this.http.post(o.N.baseUrl+"/admin/getListingsCount",i)}getAllListings(i){return this.http.post(o.N.baseUrl+"/admin/getAllListings",i)}getListingBasedOnId(i){return this.http.post(o.N.baseUrl+"/admin/getListingBasedOnId",i)}getAllUsersList(i){return this.http.post(o.N.baseUrl+"/admin/getAllUsersList",i)}getUserBasedOnId(i){return this.http.post(o.N.baseUrl+"/admin/getUserBasedOnId",i)}activeDeActiveListing(i){return this.http.post(o.N.baseUrl+"/admin/activeDeActiveListing",i)}createMaker(i){return this.http.post(o.N.baseUrl+"/admin/createMaker",i)}updateKitchenImages(i){return this.http.post(o.N.baseUrl+"/admin/updateKitchenImages",i)}updateBankDetails(i){return this.http.post(o.N.baseUrl+"/admin/updateBankDetails",i)}getUserOverView(i){return this.http.post(o.N.baseUrl+"/admin/getUserOverView",i)}activeDeActiveUser(i){return this.http.post(o.N.baseUrl+"/admin/activeDeActiveUser",i)}getMakerDashboardData(i){return this.http.post(o.N.baseUrl+"/maker/getMakerDashboardData",i)}addEditListing(i){return this.http.post(o.N.baseUrl+"/maker/addEditListing",i)}deleteListing(i){return this.http.post(o.N.baseUrl+"/maker/deleteListing",i)}changeOrderStatus(i){return this.http.post(o.N.baseUrl+"/maker/changeOrderStatus",i)}toggleMakerStatus(i){return this.http.post(o.N.baseUrl+"/maker/toggleMakerStatus",i)}updateCustomerDetails(i){return this.http.post(o.N.baseUrl+"/customer/updateCustomerDetails",i)}getCustomerOrders(i){return this.http.post(o.N.baseUrl+"/customer/getCustomerOrders",i)}getAllListingsForCustomer(i){return this.http.post(o.N.baseUrl+"/auth/getAllListingsForCustomer",i)}setFavItem(i){return this.http.post(o.N.baseUrl+"/customer/setFavItem",i)}setUnFavItem(i){return this.http.post(o.N.baseUrl+"/customer/setUnFavItem",i)}getListingForUser(i){return this.http.post(o.N.baseUrl+"/auth/getListingForUser",i)}getCustomerAddress(i){return this.http.post(o.N.baseUrl+"/customer/getCustomerAddress",i)}deleteTempOrder(i){return this.http.post(o.N.baseUrl+"/customer/deleteTempOrder",i)}addCustomerAddress(i){return this.http.post(o.N.baseUrl+"/customer/addCustomerAddress",i)}setDefaultAddress(i){return this.http.post(o.N.baseUrl+"/customer/setDefaultAddress",i)}deleteAddress(i){return this.http.post(o.N.baseUrl+"/customer/deleteAddress",i)}addToCart(i){return this.http.post(o.N.baseUrl+"/customer/addToCart",i)}getCustomerOrderSummary(i){return this.http.post(o.N.baseUrl+"/customer/getCustomerOrderSummary",i)}placeOrder(i){return this.http.post(o.N.baseUrl+"/customer/placeOrder",i)}createOrderInRazorPay(i){return this.http.post(o.N.baseUrl+"/customer/createOrderInRazorPay",i)}payWithRazorpay(i,f,k){var y=this;return(0,u.Z)(function*(){return new Promise(function(){var w=(0,u.Z)(function*(x,T){const b={key:o.N.razorpayKey,amount:100*f,currency:"INR",name:"Vdream Innovations (OPC) private limited",description:"Vdream Innovations",order_id:i,handler:(A=(0,u.Z)(function*(v){try{let I={...yield y.verifyPayment({verify:v}),...v};console.log({obj:I}),x(I)}catch(m){console.log({error:m}),T(m)}}),function(m){return A.apply(this,arguments)}),prefill:{name:"test",email:"test",contact:"test"},theme:{color:"#3399cc"},modal:{ondismiss:()=>{T({message:"Your payment has been cancelled."})}},retry:{enabled:!1}},D=new Razorpay(b);var A;yield D.on("payment.failed",function(){var A=(0,u.Z)(function*(v){let m=v.error||v||{};m.message=m.message||m.description,D.close(),console.log("closed"),T(m)});return function(v){return A.apply(this,arguments)}}()),yield D.open()});return function(x,T){return w.apply(this,arguments)}}())})()}verifyPayment(i){return this.http.post(o.N.baseUrl+"/customer/verifyPaymentDetails",i)}savePaymentFailedDetails(i){return this.http.post(o.N.baseUrl+"/customer/savePaymentFailedDetails",i)}presentDeleteConfirmation(i,f,k){var y=this;return(0,u.Z)(function*(){return new Promise(function(){var w=(0,u.Z)(function*(x){yield(yield y.alertController.create({header:i,message:f,cssClass:k,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{x(!1)}},{text:"OK",cssClass:"primary",handler:()=>{x(!0)}}]})).present()});return function(x){return w.apply(this,arguments)}}())})()}presentLoading(){var i=this;return(0,u.Z)(function*(){const f=yield i.loadingController.create({message:"Loading...",translucent:!0,backdropDismiss:!1});return yield f.present(),f})()}}return(h=Z).\u0275fac=function(i){return new(i||h)(p.LFG(U.F0),p.LFG(e.eN),p.LFG(_.Br),p.LFG(_.HT))},h.\u0275prov=p.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),Z})()},3609:(O,L,a)=>{a.d(L,{m:()=>e});var u=a(9004),o=a(95),p=a(6814),U=a(5678);let e=(()=>{var _;class d{}return(_=d).\u0275fac=function(Z){return new(Z||_)},_.\u0275mod=U.oAB({type:_}),_.\u0275inj=U.cJS({imports:[p.ez,u.Pc,o.u5,o.UX,p.ez,u.Pc,o.u5,o.UX]}),d})()}}]);