"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6209],{6209:(x,U,g)=>{g.r(U),g.d(U,{ListingOverViewPageModule:()=>_});var u=g(6814),i=g(95),l=g(9004),f=g(2436),Z=g(5861),e=g(5678),D=g(4414),m=g(5565);function O(s,c){if(1&s){const a=e.EpF();e.TgZ(0,"ion-col",36)(1,"ion-icon",37),e.NdJ("click",function(){e.CHM(a);const n=e.oxw();return e.KtG(n.deleteListing())}),e.qZA()()}}function C(s,c){if(1&s){const a=e.EpF();e.TgZ(0,"ion-card",38),e.NdJ("click",function(){const o=e.CHM(a).$implicit,d=e.oxw();return e.KtG(d.openOrderDetails(o))}),e.TgZ(1,"ion-row")(2,"ion-col",39)(3,"ion-text",5),e._uU(4),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"ion-text"),e._uU(7),e.qZA()(),e.TgZ(8,"ion-col",40)(9,"ion-text",5),e._uU(10),e.qZA(),e._UZ(11,"br"),e.qZA(),e.TgZ(12,"ion-col",41),e._UZ(13,"ion-icon",42),e.qZA()(),e.TgZ(14,"ion-row")(15,"ion-col",4),e._UZ(16,"ion-icon",43),e.TgZ(17,"ion-text",44),e._uU(18),e.qZA()(),e.TgZ(19,"ion-col",45)(20,"ion-text"),e._uU(21),e.qZA()()()()}if(2&s){const a=c.$implicit,r=e.oxw();e.xp6(4),e.hij("Order ",a.ID,""),e.xp6(3),e.hij("Received on ",r.formatTimestamp(a.timeStamp),""),e.xp6(3),e.hij("\u20b9 ",a.itemsCostIncludingCharges,""),e.xp6(8),e.Oqu(a.deliveryOption.type),e.xp6(3),e.Oqu(a.status)}}const h=[{path:"",component:(()=>{var s;class c{constructor(r,n,o){this.router=r,this.navCtrl=n,this.adminService=o,this._id="",this.userData={},this.listingData={},this.selectedSegment="All",this.isToggleChecked=!1,this.orderData=[]}ngOnInit(){}ionViewWillEnter(){this._id=this.router.url.split("/")[2];let r=localStorage.getItem("userData");this.userData=JSON.parse(r),this.adminService.getListingBasedOnId({_id:this._id}).subscribe(n=>{var o,d;n.success&&n.data?(this.listingData=n.data||{},this.orderData=null!==(o=this.listingData)&&void 0!==o&&null!==(o=o.customerOrders)&&void 0!==o&&o.length?[...null===(d=this.listingData)||void 0===d?void 0:d.customerOrders]:[],this.isToggleChecked=this.listingData.deActive,this.selectedSegment="All",this.changeSegment({target:{value:this.selectedSegment}})):this.goToBack()},n=>{this.goToBack()})}changeSegment(r){this.selectedSegment=r.target.value,this.listingData.customerOrders="pickUp"==this.selectedSegment?this.orderData.filter(n=>{var o;return"Pickup Available"==(null===(o=n.deliveryOption)||void 0===o?void 0:o.type)}):"All"==this.selectedSegment?this.orderData:this.orderData.filter(n=>n.status==this.selectedSegment)}goToBack(){this.selectedSegment="All",this.router.navigate(["/listings"])}openOrderDetails(r){this.router.navigateByUrl("/customerOrderDetails/"+r._id)}editListing(){this.listingData&&this.router.navigateByUrl("/editListing/"+this.listingData._id)}toggleChanged(){this.adminService.activeDeActiveListing({_id:this.listingData._id,value:this.isToggleChecked}).subscribe(r=>{r.success||this.router.navigate(["/adminDashboard"])},r=>{console.log(r)})}deleteListing(){var r=this;return(0,Z.Z)(function*(){const n=yield r.adminService.presentDeleteConfirmation("Confirm","Are you sure you want to delete?","");console.log({confirmed:n}),n&&r.adminService.deleteListing({_id:r.listingData._id}).subscribe(o=>{r.navCtrl.back()},o=>{console.log(o)})})()}formatTimestamp(r){const n=new Date(r);return`${n.getDate()} ${n.toLocaleString("en-US",{month:"short"})} ${n.toLocaleString("en-US",{weekday:"short"})} ${n.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}`}}return(s=c).\u0275fac=function(r){return new(r||s)(e.Y36(f.F0),e.Y36(D.SH),e.Y36(m.l))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-listing-over-view"]],decls:88,vars:20,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","10px"],["size","2",2,"display","flex","justify-content","start","align-items","center",3,"click"],["name","arrow-back-outline",1,"kd_back_button"],["size","8",1,"kd_center_align_items"],[1,"kd_bold_font"],["size","2","class","kd_flex kd_end_align",4,"ngIf"],[3,"fullscreen"],[2,"margin","15px"],[1,"text_center",2,"margin-top","0px","display","flex","align-items","center"],[1,"kd_font_size_12",2,"margin-right","10px"],["aria-label","Dark toggle","color","dark",2,"padding-right","5px",3,"ngModel","ngModelChange","ionChange"],[1,"text_center",2,"margin-top","0px","display","flex","align-items","center",3,"click"],["src","../../../assets/edit-text.png","alt","",1,"kd_back_button"],[1,"kd_font_size_12",2,"margin-left","10px"],[2,"margin","10px 0px"],[2,"font-weight","bold"],[1,"ion-no-padding"],[2,"font-size","14px","font-weight","bold"],[1,"kd_flex"],["name","calendar-outline",1,"icon_style",2,"height","30px","width","30px"],[1,"kd_flex",2,"padding-top","5px"],[1,"kd_orders_card",2,"margin-top","10px"],["size","6"],[2,"color","green","font-weight","bold"],["size","4",1,"kd_center_align"],[2,"color","red","font-weight","bold"],[1,"toolbar_styles"],["mode","md",3,"ngModel","ngModelChange","ionChange"],["value","All"],["value","confirmed"],["value","Dispatched"],["value","Delivered"],["value","Cancelled"],["value","pickUp"],["class","kd_orders_card",3,"click",4,"ngFor","ngForOf"],["size","2",1,"kd_flex","kd_end_align"],["name","trash-outline",1,"kd_back_button",2,"color","red",3,"click"],[1,"kd_orders_card",3,"click"],["size","8"],["size","2.5"],["size","1.5",1,"kd_flex","kd_end_align"],["name","arrow-forward-circle-outline",1,"icon_style",2,"height","32px","width","32px","padding-right","0px"],["name","home-outline",1,"kd_back_button"],[2,"padding-left","10px"],["size","4"]],template:function(r,n){1&r&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2),e.NdJ("click",function(){return n.goToBack()}),e._UZ(4,"ion-icon",3),e.qZA(),e.TgZ(5,"ion-col",4)(6,"div")(7,"ion-text",5),e._uU(8),e.qZA()()(),e.YNc(9,O,2,0,"ion-col",6),e.qZA()()(),e.TgZ(10,"ion-content",7)(11,"div",8)(12,"ion-row")(13,"ion-col",9)(14,"ion-text",10),e._uU(15," inactive listing"),e.qZA(),e.TgZ(16,"ion-toggle",11),e.NdJ("ngModelChange",function(d){return n.isToggleChecked=d})("ionChange",function(){return n.toggleChanged()}),e.qZA()(),e.TgZ(17,"ion-col",12),e.NdJ("click",function(){return n.editListing()}),e._UZ(18,"img",13),e.TgZ(19,"ion-text",14),e._uU(20,"Edit Listing"),e.qZA()()(),e.TgZ(21,"ion-row")(22,"ion-col",15)(23,"ion-text",16),e._uU(24),e.qZA()()(),e.TgZ(25,"ion-row")(26,"ion-col",17)(27,"ion-text",18),e._uU(28,"Order will end on"),e.qZA()(),e.TgZ(29,"ion-col",17)(30,"ion-text",18),e._uU(31,"Order will delivered on"),e.qZA()()(),e.TgZ(32,"ion-row")(33,"ion-col",19),e._UZ(34,"ion-icon",20),e.TgZ(35,"div",21)(36,"ion-text"),e._uU(37),e.ALo(38,"date"),e.qZA()()(),e.TgZ(39,"ion-col",19),e._UZ(40,"ion-icon",20),e.TgZ(41,"div",21)(42,"ion-text"),e._uU(43),e.ALo(44,"date"),e.qZA()()()(),e.TgZ(45,"ion-row",22)(46,"ion-col",23)(47,"ion-text"),e._uU(48,"Total Earned : "),e.TgZ(49,"span",24),e._uU(50),e.qZA()()(),e.TgZ(51,"ion-col",25)(52,"ion-text"),e._uU(53,"Kickday : "),e.TgZ(54,"span",26),e._uU(55),e.qZA()()(),e.TgZ(56,"ion-col",23)(57,"ion-text"),e._uU(58,"Delivery : "),e.TgZ(59,"span",26),e._uU(60),e.qZA()()(),e.TgZ(61,"ion-col",23)(62,"ion-text"),e._uU(63,"GST : "),e.TgZ(64,"span",26),e._uU(65),e.qZA()()()()(),e.TgZ(66,"ion-toolbar",27)(67,"ion-segment",28),e.NdJ("ngModelChange",function(d){return n.selectedSegment=d})("ionChange",function(d){return n.changeSegment(d)}),e.TgZ(68,"ion-segment-button",29)(69,"ion-label"),e._uU(70,"All"),e.qZA()(),e.TgZ(71,"ion-segment-button",30)(72,"ion-label"),e._uU(73,"Confirmed"),e.qZA()(),e.TgZ(74,"ion-segment-button",31)(75,"ion-label"),e._uU(76,"Dispached"),e.qZA()(),e.TgZ(77,"ion-segment-button",32)(78,"ion-label"),e._uU(79,"Delivered"),e.qZA()(),e.TgZ(80,"ion-segment-button",33)(81,"ion-label"),e._uU(82,"Cancelled"),e.qZA()(),e.TgZ(83,"ion-segment-button",34)(84,"ion-label"),e._uU(85,"PickUp"),e.qZA()()()(),e.TgZ(86,"div",8),e.YNc(87,C,22,5,"ion-card",35),e.qZA()()),2&r&&(e.Q6J("translucent",!0),e.xp6(8),e.hij("Listing ID: ",n.listingData.ID,""),e.xp6(1),e.Q6J("ngIf","admin"!=n.userData.role),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",n.isToggleChecked),e.xp6(8),e.Oqu(n.listingData.label),e.xp6(13),e.Oqu(e.xi3(38,14,n.listingData.orderEndsOn,"dd MMMM EEE hh:mm a")),e.xp6(6),e.Oqu(e.xi3(44,17,n.listingData.orderDeliveredOn,"dd MMMM EEE")),e.xp6(7),e.hij("\u20b9 ",null==n.listingData?null:n.listingData.totalEarnings,""),e.xp6(5),e.hij("\u20b9 ",null==n.listingData?null:n.listingData.totalCommisionAmount,""),e.xp6(5),e.hij("\u20b9 ",null==n.listingData?null:n.listingData.totalDeliveryCost,""),e.xp6(5),e.hij("\u20b9 ",null==n.listingData?null:n.listingData.totalGstAmount,""),e.xp6(2),e.Q6J("ngModel",n.selectedSegment),e.xp6(20),e.Q6J("ngForOf",null==n.listingData?null:n.listingData.customerOrders))},dependencies:[u.sg,u.O5,i.JJ,i.On,l.PM,l.wI,l.W2,l.Gu,l.gu,l.Q$,l.Nd,l.cJ,l.GO,l.yW,l.ho,l.sr,l.w,l.QI,u.uU],styles:["ion-toggle[_ngcontent-%COMP%]::part(track){height:25px;width:45px}ion-toggle[_ngcontent-%COMP%]{--handle-height: 21px;--handle-width: 21px;--handle-spacing: 2px;--handle-background: white;--track-background: #22242880;--ion-color-base: white !important;--border-radius: 40px}ion-toggle.ios[_ngcontent-%COMP%]{--ion-color-base: #22242880 !important}ion-segment-button[_ngcontent-%COMP%]{--color-checked: #61399f;text-transform:none;font-size:12px;--padding-start: 0px;--padding-end: 0px;min-width:min-content}.toolbar_styles[_ngcontent-%COMP%]{padding:0;--background: white;box-shadow:none;background-color:#dfd9f1;--box-shadow: none;margin-top:20px}.kd_orders_card[_ngcontent-%COMP%]{margin:15px 0 20px!important;padding:10px}"]}),c})()}];let v=(()=>{var s;class c{}return(s=c).\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[f.Bz.forChild(h),f.Bz]}),c})(),_=(()=>{var s;class c{}return(s=c).\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.ez,i.u5,l.Pc,v]}),c})()},5565:(x,U,g)=>{g.d(U,{l:()=>D});var u=g(5861),i=g(553),l=g(5678),f=g(2436),Z=g(9862),e=g(4414);let D=(()=>{var m;class O{constructor(t,h,v,_){this.route=t,this.http=h,this.alertController=v,this.loadingController=_}getUsersCount(t){return this.http.post(i.N.baseUrl+"/admin/getUsersCount",t)}getListingsCount(t){return this.http.post(i.N.baseUrl+"/admin/getListingsCount",t)}getAllListings(t){return this.http.post(i.N.baseUrl+"/admin/getAllListings",t)}getListingBasedOnId(t){return this.http.post(i.N.baseUrl+"/admin/getListingBasedOnId",t)}getAllUsersList(t){return this.http.post(i.N.baseUrl+"/admin/getAllUsersList",t)}getUserBasedOnId(t){return this.http.post(i.N.baseUrl+"/admin/getUserBasedOnId",t)}activeDeActiveListing(t){return this.http.post(i.N.baseUrl+"/admin/activeDeActiveListing",t)}createMaker(t){return this.http.post(i.N.baseUrl+"/admin/createMaker",t)}updateKitchenImages(t){return this.http.post(i.N.baseUrl+"/admin/updateKitchenImages",t)}updateBankDetails(t){return this.http.post(i.N.baseUrl+"/admin/updateBankDetails",t)}getUserOverView(t){return this.http.post(i.N.baseUrl+"/admin/getUserOverView",t)}activeDeActiveUser(t){return this.http.post(i.N.baseUrl+"/admin/activeDeActiveUser",t)}getMakerDashboardData(t){return this.http.post(i.N.baseUrl+"/maker/getMakerDashboardData",t)}addEditListing(t){return this.http.post(i.N.baseUrl+"/maker/addEditListing",t)}deleteListing(t){return this.http.post(i.N.baseUrl+"/maker/deleteListing",t)}changeOrderStatus(t){return this.http.post(i.N.baseUrl+"/maker/changeOrderStatus",t)}toggleMakerStatus(t){return this.http.post(i.N.baseUrl+"/maker/toggleMakerStatus",t)}updateCustomerDetails(t){return this.http.post(i.N.baseUrl+"/customer/updateCustomerDetails",t)}getCustomerOrders(t){return this.http.post(i.N.baseUrl+"/customer/getCustomerOrders",t)}getAllListingsForCustomer(t){return this.http.post(i.N.baseUrl+"/auth/getAllListingsForCustomer",t)}setFavItem(t){return this.http.post(i.N.baseUrl+"/customer/setFavItem",t)}setUnFavItem(t){return this.http.post(i.N.baseUrl+"/customer/setUnFavItem",t)}getListingForUser(t){return this.http.post(i.N.baseUrl+"/auth/getListingForUser",t)}getCustomerAddress(t){return this.http.post(i.N.baseUrl+"/customer/getCustomerAddress",t)}deleteTempOrder(t){return this.http.post(i.N.baseUrl+"/customer/deleteTempOrder",t)}addCustomerAddress(t){return this.http.post(i.N.baseUrl+"/customer/addCustomerAddress",t)}setDefaultAddress(t){return this.http.post(i.N.baseUrl+"/customer/setDefaultAddress",t)}deleteAddress(t){return this.http.post(i.N.baseUrl+"/customer/deleteAddress",t)}addToCart(t){return this.http.post(i.N.baseUrl+"/customer/addToCart",t)}getCustomerOrderSummary(t){return this.http.post(i.N.baseUrl+"/customer/getCustomerOrderSummary",t)}placeOrder(t){return this.http.post(i.N.baseUrl+"/customer/placeOrder",t)}createOrderInRazorPay(t){return this.http.post(i.N.baseUrl+"/customer/createOrderInRazorPay",t)}payWithRazorpay(t,h,v){var _=this;return(0,u.Z)(function*(){return new Promise(function(){var s=(0,u.Z)(function*(c,a){const r={key:i.N.razorpayKey,amount:100*h,currency:"INR",name:"Vdream Innovations (OPC) private limited",description:"Vdream Innovations",order_id:t,handler:(o=(0,u.Z)(function*(d){try{let b={...yield _.verifyPayment({verify:d}),...d};console.log({obj:b}),c(b)}catch(p){console.log({error:p}),a(p)}}),function(p){return o.apply(this,arguments)}),prefill:{name:"test",email:"test",contact:"test"},theme:{color:"#3399cc"},modal:{ondismiss:()=>{a({message:"Your payment has been cancelled."})}},retry:{enabled:!1}},n=new Razorpay(r);var o;yield n.on("payment.failed",function(){var o=(0,u.Z)(function*(d){let p=d.error||d||{};p.message=p.message||p.description,n.close(),console.log("closed"),a(p)});return function(d){return o.apply(this,arguments)}}()),yield n.open()});return function(c,a){return s.apply(this,arguments)}}())})()}verifyPayment(t){return this.http.post(i.N.baseUrl+"/customer/verifyPaymentDetails",t)}savePaymentFailedDetails(t){return this.http.post(i.N.baseUrl+"/customer/savePaymentFailedDetails",t)}presentDeleteConfirmation(t,h,v){var _=this;return(0,u.Z)(function*(){return new Promise(function(){var s=(0,u.Z)(function*(c){yield(yield _.alertController.create({header:t,message:h,cssClass:v,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{c(!1)}},{text:"OK",cssClass:"primary",handler:()=>{c(!0)}}]})).present()});return function(c){return s.apply(this,arguments)}}())})()}presentLoading(){var t=this;return(0,u.Z)(function*(){const h=yield t.loadingController.create({message:"Loading...",translucent:!0,backdropDismiss:!1});return yield h.present(),h})()}}return(m=O).\u0275fac=function(t){return new(t||m)(l.LFG(f.F0),l.LFG(Z.eN),l.LFG(e.Br),l.LFG(e.HT))},m.\u0275prov=l.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),O})()}}]);