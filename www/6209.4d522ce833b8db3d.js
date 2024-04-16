"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6209],{6209:(T,_,s)=>{s.r(_),s.d(_,{ListingOverViewPageModule:()=>k});var d=s(6814),c=s(95),o=s(9004),u=s(2436),p=s(5861),e=s(5678),h=s(4414),m=s(5565);function x(t,l){if(1&t){const a=e.EpF();e.TgZ(0,"ion-col",35)(1,"ion-icon",36),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.deleteListing())}),e.qZA()()}}function Z(t,l){if(1&t){const a=e.EpF();e.TgZ(0,"ion-card",37),e.NdJ("click",function(){const r=e.CHM(a).$implicit,g=e.oxw();return e.KtG(g.openOrderDetails(r))}),e.TgZ(1,"ion-row")(2,"ion-col",38)(3,"ion-text",5),e._uU(4),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"ion-text"),e._uU(7),e.ALo(8,"date"),e.qZA()(),e.TgZ(9,"ion-col",39)(10,"ion-text"),e._uU(11),e.qZA(),e._UZ(12,"br"),e.qZA(),e.TgZ(13,"ion-col",40),e._UZ(14,"ion-icon",41),e.qZA()(),e.TgZ(15,"ion-row")(16,"ion-col",42),e._UZ(17,"ion-icon",43),e.TgZ(18,"ion-text",44),e._uU(19),e.qZA()(),e.TgZ(20,"ion-col")(21,"ion-text"),e._uU(22),e.qZA()()()()}if(2&t){const a=l.$implicit,n=e.oxw();e.xp6(4),e.hij("Order ",a.ID,""),e.xp6(3),e.hij("Received on ",e.xi3(8,5,n.listingData.orderEndsOn,"dd MMMM EEE hh:mm a"),""),e.xp6(4),e.hij("\u20b9 ",a.finalPrice,""),e.xp6(8),e.Oqu(a.deliveryOption.type),e.xp6(3),e.Oqu(a.status)}}const v=[{path:"",component:(()=>{var t;class l{constructor(n,i,r){this.router=n,this.navCtrl=i,this.adminService=r,this._id="",this.userData={},this.listingData={},this.selectedSegment="All",this.isToggleChecked=!1}ngOnInit(){}ionViewWillEnter(){this._id=this.router.url.split("/")[2];let n=localStorage.getItem("userData");this.userData=JSON.parse(n),this.adminService.getListingBasedOnId({_id:this._id}).subscribe(i=>{i.success&&i.data?(this.listingData=i.data||{},this.isToggleChecked=this.listingData.deActive):this.goToBack()},i=>{this.goToBack()})}goToBack(){this.router.navigate(["/listings"])}openOrderDetails(n){this.router.navigateByUrl("/customerOrderDetails/"+n._id)}editListing(){this.listingData&&this.router.navigateByUrl("/editListing/"+this.listingData._id)}toggleChanged(){this.adminService.activeDeActiveListing({_id:this.listingData._id,value:this.isToggleChecked}).subscribe(n=>{n.success||this.router.navigate(["/adminDashboard"])},n=>{console.log(n)})}deleteListing(){var n=this;return(0,p.Z)(function*(){const i=yield n.adminService.presentDeleteConfirmation("Confirm","Are you sure you want to delete?","");console.log({confirmed:i}),i&&n.adminService.deleteListing({_id:n.listingData._id}).subscribe(r=>{n.navCtrl.back()},r=>{console.log(r)})})()}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(u.F0),e.Y36(h.SH),e.Y36(m.l))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-listing-over-view"]],decls:79,vars:17,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","10px"],["size","2",2,"display","flex","justify-content","start","align-items","center",3,"click"],["name","arrow-back-outline",1,"kd_back_button"],["size","8",1,"kd_center_align_items"],[1,"kd_bold_font"],["size","2","class","kd_flex kd_end_align",4,"ngIf"],[3,"fullscreen"],[2,"margin","15px"],[1,"text_center",2,"margin-top","0px","display","flex","align-items","center"],[1,"kd_font_size_12",2,"margin-right","10px"],["aria-label","Dark toggle","color","dark",2,"padding-right","5px",3,"ngModel","ngModelChange","ionChange"],[1,"text_center",2,"margin-top","0px","display","flex","align-items","center",3,"click"],["src","../../../assets/edit-text.png","alt","",1,"kd_back_button"],[1,"kd_font_size_12",2,"margin-left","10px"],[2,"margin","10px 0px"],[2,"font-weight","bold"],[1,"ion-no-padding"],[2,"font-size","14px","font-weight","bold"],[1,"kd_flex"],["name","calendar-outline",1,"icon_style",2,"height","30px","width","30px"],[1,"kd_flex",2,"padding-top","5px"],[2,"margin-top","10px"],["size","2.5"],["size","7",1,"kd_center_align"],[2,"padding-right","10px"],[2,"padding-left","10px","padding-right","10px"],[1,"toolbar_styles"],["mode","md",3,"ngModel","ngModelChange"],["value","All"],["value","orderTaken"],["value","dispached"],["value","pickupDelivered"],["value","cancelled"],["class","kd_orders_card","style","margin-bottom: 15px;",3,"click",4,"ngFor","ngForOf"],["size","2",1,"kd_flex","kd_end_align"],["name","trash-outline",1,"kd_back_button",2,"color","red",3,"click"],[1,"kd_orders_card",2,"margin-bottom","15px",3,"click"],["size","6"],["size","4.5"],["size","1.5",1,"kd_flex","kd_end_align"],["name","arrow-forward-circle-outline",1,"icon_style",2,"height","32px","width","32px","padding-right","0px"],[1,"kd_center_align_items"],["name","home-outline",1,"kd_back_button"],[2,"padding-left","10px"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2),e.NdJ("click",function(){return i.goToBack()}),e._UZ(4,"ion-icon",3),e.qZA(),e.TgZ(5,"ion-col",4)(6,"div")(7,"ion-text",5),e._uU(8),e.qZA()()(),e.YNc(9,x,2,0,"ion-col",6),e.qZA()()(),e.TgZ(10,"ion-content",7)(11,"div",8)(12,"ion-row")(13,"ion-col",9)(14,"ion-text",10),e._uU(15," inactive listing"),e.qZA(),e.TgZ(16,"ion-toggle",11),e.NdJ("ngModelChange",function(g){return i.isToggleChecked=g})("ionChange",function(){return i.toggleChanged()}),e.qZA()(),e.TgZ(17,"ion-col",12),e.NdJ("click",function(){return i.editListing()}),e._UZ(18,"img",13),e.TgZ(19,"ion-text",14),e._uU(20,"Edit Listing"),e.qZA()()(),e.TgZ(21,"ion-row")(22,"ion-col",15)(23,"ion-text",16),e._uU(24),e.qZA()()(),e.TgZ(25,"ion-row")(26,"ion-col",17)(27,"ion-text",18),e._uU(28,"Order will end on"),e.qZA()(),e.TgZ(29,"ion-col",17)(30,"ion-text",18),e._uU(31,"Order will delivered on"),e.qZA()()(),e.TgZ(32,"ion-row")(33,"ion-col",19),e._UZ(34,"ion-icon",20),e.TgZ(35,"div",21)(36,"ion-text"),e._uU(37),e.ALo(38,"date"),e.qZA()()(),e.TgZ(39,"ion-col",19),e._UZ(40,"ion-icon",20),e.TgZ(41,"div",21)(42,"ion-text"),e._uU(43),e.ALo(44,"date"),e.qZA()()()(),e.TgZ(45,"ion-row",22)(46,"ion-col",23)(47,"ion-text"),e._uU(48,"Amount"),e.qZA()(),e.TgZ(49,"ion-col",24)(50,"ion-text")(51,"span",25),e._uU(52,"\u20b9 0"),e.qZA(),e._uU(53," - "),e.TgZ(54,"span",26),e._uU(55),e.qZA(),e._uU(56," ="),e.qZA()(),e.TgZ(57,"ion-col",23)(58,"ion-text"),e._uU(59,"\u20b9 0"),e.qZA()()()(),e.TgZ(60,"ion-toolbar",27)(61,"ion-segment",28),e.NdJ("ngModelChange",function(g){return i.selectedSegment=g}),e.TgZ(62,"ion-segment-button",29)(63,"ion-label"),e._uU(64,"All"),e.qZA()(),e.TgZ(65,"ion-segment-button",30)(66,"ion-label"),e._uU(67,"Confirmed"),e.qZA()(),e.TgZ(68,"ion-segment-button",31)(69,"ion-label"),e._uU(70,"Dispached"),e.qZA()(),e.TgZ(71,"ion-segment-button",32)(72,"ion-label"),e._uU(73,"Delivered"),e.qZA()(),e.TgZ(74,"ion-segment-button",33)(75,"ion-label"),e._uU(76,"Cancelled"),e.qZA()()()(),e.TgZ(77,"div",8),e.YNc(78,Z,23,8,"ion-card",34),e.qZA()()),2&n&&(e.Q6J("translucent",!0),e.xp6(8),e.hij("Listing ID: ",i.listingData.ID,""),e.xp6(1),e.Q6J("ngIf","admin"!=i.userData.role),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",i.isToggleChecked),e.xp6(8),e.Oqu(i.listingData.label),e.xp6(13),e.Oqu(e.xi3(38,11,i.listingData.orderEndsOn,"dd MMMM EEE hh:mm a")),e.xp6(6),e.Oqu(e.xi3(44,14,i.listingData.orderDeliveredOn,"dd MMMM EEE")),e.xp6(12),e.hij("\u20b9 0(",(null==i.listingData||null==i.listingData.makerData?null:i.listingData.makerData.commission)||0,"%)"),e.xp6(6),e.Q6J("ngModel",i.selectedSegment),e.xp6(17),e.Q6J("ngForOf",null==i.listingData?null:i.listingData.customerOrders))},dependencies:[d.sg,d.O5,c.JJ,c.On,o.PM,o.wI,o.W2,o.Gu,o.gu,o.Q$,o.Nd,o.cJ,o.GO,o.yW,o.ho,o.sr,o.w,o.QI,d.uU],styles:["ion-toggle[_ngcontent-%COMP%]::part(track){height:25px;width:45px}ion-toggle[_ngcontent-%COMP%]{--handle-height: 21px;--handle-width: 21px;--handle-spacing: 2px;--handle-background: white;--track-background: #22242880;--ion-color-base: white !important;--border-radius: 40px}ion-toggle.ios[_ngcontent-%COMP%]{--ion-color-base: #22242880 !important}ion-segment-button[_ngcontent-%COMP%]{--color-checked: #61399f;text-transform:none;font-size:12px;--padding-start: 0px;--padding-end: 0px;min-width:min-content}.toolbar_styles[_ngcontent-%COMP%]{padding:0;--background: white;box-shadow:none;background-color:#dfd9f1;--box-shadow: none;margin-top:20px}"]}),l})()}];let f=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(v),u.Bz]}),l})(),k=(()=>{var t;class l{}return(t=l).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,c.u5,o.Pc,f]}),l})()}}]);