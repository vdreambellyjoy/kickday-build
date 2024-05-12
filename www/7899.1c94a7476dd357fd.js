"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7899],{7899:(S,_,a)=>{a.r(_),a.d(_,{CustomerOrderSummaryPageModule:()=>P});var c=a(6814),f=a(95),l=a(9004),u=a(2436),m=a(5861),x=a(1273),e=a(5678),p=a(4414),h=a(5565),y=a(6593);function v(n,i){if(1&n&&(e.TgZ(0,"ion-row",16)(1,"ion-col",17)(2,"ion-text",21),e._uU(3),e.qZA()(),e.TgZ(4,"ion-col",19)(5,"ion-text",35),e._uU(6),e._UZ(7,"ion-icon",36),e._uU(8),e.qZA()(),e.TgZ(9,"ion-col",37)(10,"ion-text",38),e._uU(11),e.qZA()()()),2&n){const o=i.$implicit;e.xp6(3),e.Oqu(o.name),e.xp6(3),e.hij("\u20b9 ",o.price," "),e.xp6(2),e.Oqu(o.count),e.xp6(3),e.hij(" = \u20b9",o.individualItemCost,"")}}function Z(n,i){1&n&&(e.TgZ(0,"ion-text",39),e._uU(1,"Delivery Location"),e.qZA())}function O(n,i){1&n&&(e.TgZ(0,"ion-text",39),e._uU(1,"Pickup Location"),e.qZA())}function D(n,i){if(1&n){const o=e.EpF();e.TgZ(0,"ion-content",6)(1,"div",7)(2,"ion-row")(3,"ion-col",8)(4,"div",9)(5,"ion-text",10),e._uU(6,"R"),e.qZA()(),e.TgZ(7,"ion-text",11)(8,"span",10),e._uU(9),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"span"),e._uU(12),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"span"),e._uU(15),e.qZA()()()(),e.TgZ(16,"ion-row")(17,"ion-col",12)(18,"ion-text",10),e._uU(19),e.qZA()()(),e.TgZ(20,"ion-row")(21,"ion-col",13)(22,"div",14),e.YNc(23,v,12,4,"ion-row",15),e.TgZ(24,"ion-row",16)(25,"ion-col",17)(26,"ion-text",18),e._uU(27),e.qZA()(),e.TgZ(28,"ion-col",19)(29,"ion-text",20),e._uU(30),e.qZA()()(),e.TgZ(31,"ion-row",16)(32,"ion-col",17)(33,"ion-text",18),e._uU(34,"GST"),e.qZA()(),e.TgZ(35,"ion-col",19)(36,"ion-text",20),e._uU(37,"$0"),e.qZA()()(),e.TgZ(38,"ion-row",16)(39,"ion-col",17)(40,"ion-text",21),e._uU(41,"Total"),e.qZA()(),e.TgZ(42,"ion-col",19)(43,"ion-text",21),e._uU(44),e.qZA()()()()()(),e.TgZ(45,"ion-row",22)(46,"ion-col")(47,"div",8),e._UZ(48,"ion-icon",23),e.YNc(49,Z,2,0,"ion-text",24)(50,O,2,0,"ion-text",24),e.qZA()(),e.TgZ(51,"ion-col",25),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.openAddressList())}),e.TgZ(52,"ion-button",26),e._uU(53,"Change Address"),e.qZA()()(),e.TgZ(54,"ion-row")(55,"ion-col"),e._UZ(56,"ion-text",27),e.qZA()(),e.TgZ(57,"ion-row",28)(58,"ion-col",29)(59,"div",30),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.copyLocationUrl())}),e._UZ(60,"ion-icon",31),e.TgZ(61,"ion-text",32),e._uU(62,"Copy"),e.qZA()(),e.TgZ(63,"ion-button",33),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.redirectToGoogleMaps())}),e._uU(64,"Get Directions"),e.qZA()()(),e.TgZ(65,"ion-button",34),e.NdJ("click",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.placeOrder())}),e._uU(66,"PAY NOW"),e.qZA()()()}if(2&n){const o=e.oxw();e.Q6J("fullscreen",!0),e.xp6(9),e.hij("Maker ",null==o.orderData||null==o.orderData.makerData?null:o.orderData.makerData.ID,""),e.xp6(3),e.Oqu(null==o.orderData||null==o.orderData.makerData?null:o.orderData.makerData.userName),e.xp6(3),e.Oqu(null==o.orderData||null==o.orderData.makerData?null:o.orderData.makerData.address),e.xp6(4),e.Oqu(null==o.orderData||null==o.orderData.listingData?null:o.orderData.listingData.label),e.xp6(4),e.Q6J("ngForOf",null==o.orderData?null:o.orderData.orderedItems),e.xp6(4),e.hij("Delivery (",null==o.orderData||null==o.orderData.deliveryOption?null:o.orderData.deliveryOption.type,")"),e.xp6(3),e.hij("\u20b9 ",null==o.orderData||null==o.orderData.deliveryOption?null:o.orderData.deliveryOption.price,""),e.xp6(14),e.hij(" \u20b9",o.parsePrice(null==o.orderData?null:o.orderData.finalCostWithOutDeliveryOption)+o.parsePrice(null==o.orderData?null:o.orderData.deliveryOption.price)," "),e.xp6(5),e.Q6J("ngIf","Pickup Available"!=o.orderData.deliveryOption.type),e.xp6(1),e.Q6J("ngIf","Pickup Available"==o.orderData.deliveryOption.type),e.xp6(6),e.Q6J("innerHTML",o.getSanitizedLocationUrl(),e.oJD)}}function T(n,i){1&n&&(e.TgZ(0,"ion-content",40)(1,"div",41),e._UZ(2,"ion-icon",42),e.TgZ(3,"p",43),e._uU(4,"Data not found. Please try again."),e.qZA()()()),2&n&&(e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("@fadeInOut",void 0))}let A=(()=>{var n;class i{constructor(t,r,s,d,g,w){this.router=t,this.model=r,this.alert=s,this.adminService=d,this.sanitizer=g,this.alertController=w,this._id="",this.addressList=[]}ngOnInit(){}ngAfterViewInit(){this._id=this.router.url.split("/")[2],this.adminService.getCustomerAddress({}).subscribe(t=>{var r;this.addressList=t.data||[],this.selectedAddress=null===(r=this.addressList)||void 0===r?void 0:r.find(s=>s.default)},t=>{this.addressList=[]}),this.adminService.getCustomerOrderSummary({_id:this._id}).subscribe(t=>{this.orderData=!(!t.success||!t.data)&&t.data},t=>{this.orderData=!1,this.openAlert("ERROR","something went wrong please try again later",["close"])})}parsePrice(t){return parseFloat(t||"0")}openAddressList(){var t=this;return(0,m.Z)(function*(){const r=yield t.model.create({component:x.z});r.present();const{data:s}=yield r.onWillDismiss();s&&s._id&&(t.selectedAddress=s)})()}goBack(){this.adminService.deleteTempOrder({_id:this._id}).subscribe(t=>{this.orderData.refListingId?this.router.navigateByUrl("/customerListings/"+this.orderData.refListingId):this.router.navigate(["/customerListings"])},t=>{console.log(t)})}placeOrder(){var t;null!==(t=this.selectedAddress)&&void 0!==t&&t._id?this.adminService.placeOrder({_id:this._id,deliveryAddress:this.selectedAddress}).subscribe(r=>{r.success&&this.router.navigate(["/orders"])},r=>{410==r.status?this.openAlert("OUT OF STOCK","We're sorry, but some items in your order are currently out of stock. We're working to restock our inventory soon. Please remove the out-of-stock items or adjust the quantities, or contact our support team for further assistance. Thank you for your understanding.",["close"]):this.openAlert("ERROR","something went wrong please try again later",["close"])}):console.log("address not found")}openAlert(t,r,s){var d=this;return(0,m.Z)(function*(){yield(yield d.alert.create({header:t,message:r,buttons:s,mode:"ios"})).present()})()}getSanitizedLocationUrl(){var t;let r=(null===(t=this.selectedAddress)||void 0===t?void 0:t.LocationUrl)||"";return!r&&this.orderData&&this.orderData.deliveryAddress&&(r=this.orderData.deliveryAddress.LocationUrl||""),this.sanitizer.bypassSecurityTrustHtml(r.replace(/,/g,",<br>"))}copyLocationUrl(){var t=this;return(0,m.Z)(function*(){var r;const s=null===(r=t.selectedAddress)||void 0===r?void 0:r.LocationUrl;if(s){const d=document.createElement("input");d.value=s,document.body.appendChild(d),d.select(),document.execCommand("copy"),document.body.removeChild(d),yield(yield t.alertController.create({header:"Copied!",message:"Location URL copied successfully",buttons:["OK"]})).present()}})()}redirectToGoogleMaps(){var t,r;null!==(t=this.selectedAddress)&&void 0!==t&&t.LocationUrl&&window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(null===(r=this.selectedAddress)||void 0===r?void 0:r.LocationUrl)}`,"_blank")}}return(n=i).\u0275fac=function(t){return new(t||n)(e.Y36(u.F0),e.Y36(p.IN),e.Y36(p.Br),e.Y36(h.l),e.Y36(y.H7),e.Y36(p.Br))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-customer-order-summary"]],decls:8,vars:3,consts:[[2,"box-shadow","none",3,"translucent"],[2,"padding","5px 10px 0px 10px"],[1,"kd_flex","kd_end_align",3,"click"],["name","close-outline",1,"kd_svg_size"],[3,"fullscreen",4,"ngIf"],["class","ion-padding",3,"fullscreen",4,"ngIf"],[3,"fullscreen"],[2,"margin","15px"],[1,"kd_flex"],[1,"first_letter_styles"],[2,"font-weight","bold"],[2,"padding-left","20px","font-size","13px"],[2,"margin-top","10px"],[1,"kd_flex_row_center",2,"margin","5px 0px"],[2,"border","solid 2px","border-radius","14px","padding","10px","background-color","#f7f7f7"],["class","kd_flex kd_center_align",4,"ngFor","ngForOf"],[1,"kd_flex","kd_center_align"],["size","8"],[2,"font-size","14px","color","#777"],["size","4",1,"kd_flex","kd_end_align"],[2,"font-size","14px","color","#555"],[2,"font-size","16px","font-weight","bold"],[2,"margin-top","15px","display","flex","align-items","center"],["name","home-outline",1,"icon_style"],["style","font-weight: bold; font-size: 18px;",4,"ngIf"],[1,"ion-no-padding",3,"click"],[2,"margin","0px"],[2,"font-size","14px",3,"innerHTML"],[2,"margin","20px 0px"],[1,"kd_center_align_items"],[1,"kd_center_align_items",3,"click"],["name","copy-outline",2,"height","30px","width","30px"],[2,"margin-left","5px"],[2,"margin-left","35px","width","fit-content",3,"click"],[2,"width","100%","margin-top","10%",3,"click"],[1,"kd_flex",2,"font-size","14px","color","black","font-weight","bold"],["name","close-outline",1,"icon_style",2,"padding-right","5px","padding-left","5px"],[1,"kd_flex","kd_end_align","ion-no-padding",2,"padding-right","5px","padding-bottom","10px"],[2,"font-weight","bold","font-size","14px"],[2,"font-weight","bold","font-size","18px"],[1,"ion-padding",3,"fullscreen"],[1,"error-container"],["name","alert-circle",1,"error-icon"],[1,"error-message"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1),e._UZ(3,"ion-col"),e.TgZ(4,"ion-col",2),e.NdJ("click",function(){return r.goBack()}),e._UZ(5,"ion-icon",3),e.qZA()()()(),e.YNc(6,D,67,12,"ion-content",4)(7,T,5,2,"ion-content",5)),2&t&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("ngIf",r.orderData),e.xp6(1),e.Q6J("ngIf",!1===r.orderData))},dependencies:[c.sg,c.O5,l.YG,l.wI,l.W2,l.Gu,l.gu,l.Nd,l.yW,l.sr],styles:[".error-container[_ngcontent-%COMP%]{text-align:center}.error-icon[_ngcontent-%COMP%]{font-size:4em;color:#f44336}.error-message[_ngcontent-%COMP%]{font-size:1.2em;color:#f44336}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadeOut{0%{opacity:1}to{opacity:0}}.fadeInOut[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .5s ease-in-out forwards,fadeOut .5s ease-in-out forwards}"]}),i})();var C=a(3609);const U=[{path:"",component:A}];let k=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[C.m,u.Bz.forChild(U),u.Bz]}),i})(),P=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,f.u5,l.Pc,k]}),i})()}}]);