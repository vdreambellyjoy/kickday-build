"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6209],{6209:(f,_,s)=>{s.r(_),s.d(_,{ListingOverViewPageModule:()=>v});var d=s(6814),c=s(95),o=s(9004),u=s(209),e=s(6242),p=s(4414),h=s(5565);function m(t,r){if(1&t){const a=e.EpF();e.TgZ(0,"ion-card",36),e.NdJ("click",function(){const l=e.CHM(a).$implicit,g=e.oxw();return e.KtG(g.openOrderDetails(l))}),e.TgZ(1,"ion-row")(2,"ion-col",37)(3,"ion-text",5),e._uU(4),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"ion-text"),e._uU(7),e.ALo(8,"date"),e.qZA()(),e.TgZ(9,"ion-col",38)(10,"ion-text"),e._uU(11),e.qZA(),e._UZ(12,"br"),e.qZA(),e.TgZ(13,"ion-col",39),e._UZ(14,"ion-icon",40),e.qZA()(),e.TgZ(15,"ion-row")(16,"ion-col",41),e._UZ(17,"ion-icon",42),e.TgZ(18,"ion-text",43),e._uU(19),e.qZA()(),e.TgZ(20,"ion-col")(21,"ion-text"),e._uU(22),e.qZA()()()()}if(2&t){const a=r.$implicit,i=e.oxw();e.xp6(4),e.hij("Order ",a.ID,""),e.xp6(3),e.hij("Received on ",e.xi3(8,5,i.listingData.orderEndsOn,"d MMMM EEE h:mma"),""),e.xp6(4),e.hij("$ ",a.finalPrice,""),e.xp6(8),e.Oqu(a.deliveryOption.type),e.xp6(3),e.Oqu(a.status)}}const x=[{path:"",component:(()=>{var t;class r{constructor(i,n,l){this.router=i,this.navCtrl=n,this.adminService=l,this._id="",this.userData={},this.listingData={},this.selectedSegment="All",this.isToggleChecked=!1}ngOnInit(){}ionViewWillEnter(){this._id=this.router.url.split("/")[2];let i=localStorage.getItem("userData");this.userData=JSON.parse(i),this.adminService.getListingBasedOnId({_id:this._id}).subscribe(n=>{var l;n.success&&n.data?(this.listingData=n.data||{},this.isToggleChecked=!(null!==(l=this.listingData.makerData)&&void 0!==l&&l.activeUser)):this.goToBack()},n=>{this.goToBack()})}goToBack(){this.router.navigate(["/listings"])}openOrderDetails(i){this.router.navigateByUrl("/customerOrderDetails/"+i._id)}editListing(){this.listingData&&this.router.navigateByUrl("/editListing/"+this.listingData._id)}toggleChanged(){this.adminService.activeDeActiveUser({_id:this.listingData.refMakerId,value:this.isToggleChecked}).subscribe(i=>{i.success?this.userData=i.data||{}:this.router.navigate(["/adminDashboard"])},i=>{console.log(i)})}deleteListing(){var i;null!==(i=this.listingData.customerOrders)&&void 0!==i&&i.length||this.adminService.deleteListing({_id:this.listingData._id}).subscribe(n=>{this.navCtrl.back()},n=>{console.log(n)})}}return(t=r).\u0275fac=function(i){return new(i||t)(e.Y36(u.F0),e.Y36(p.SH),e.Y36(h.l))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-listing-over-view"]],decls:80,vars:15,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","10px"],["size","2",2,"display","flex","justify-content","start","align-items","center",3,"click"],["name","arrow-back-outline",1,"kd_back_button"],["size","8",1,"kd_center_align_items"],[1,"kd_bold_font"],["size","2",1,"kd_flex","kd_end_align"],["name","trash-outline",1,"kd_back_button",3,"click"],[3,"fullscreen"],[2,"margin","15px"],[1,"text_center",2,"margin-top","0px","display","flex","align-items","center"],[1,"kd_font_size_12",2,"margin-right","10px"],["aria-label","Dark toggle","color","dark",2,"padding-right","5px",3,"ngModel","ngModelChange","ionChange"],[1,"text_center",2,"margin-top","0px","display","flex","align-items","center",3,"click"],["src","../../../assets/edit-text.png","alt","",1,"kd_back_button"],[1,"kd_font_size_12",2,"margin-left","10px"],[2,"margin","10px 0px"],[2,"font-weight","bold"],[1,"ion-no-padding"],[2,"font-size","14px","font-weight","bold"],[1,"kd_flex"],["name","calendar-outline",1,"icon_style",2,"height","30px","width","30px"],[1,"kd_flex",2,"padding-top","5px"],[2,"margin-top","10px"],["size","2.5"],["size","7",1,"kd_center_align"],[2,"padding-right","10px"],[2,"padding-left","10px","padding-right","10px"],[1,"toolbar_styles"],["mode","md",3,"ngModel","ngModelChange"],["value","All"],["value","orderTaken"],["value","dispached"],["value","pickupDelivered"],["value","cancelled"],["class","kd_orders_card","style","margin-bottom: 15px;",3,"click",4,"ngFor","ngForOf"],[1,"kd_orders_card",2,"margin-bottom","15px",3,"click"],["size","6"],["size","4.5"],["size","1.5",1,"kd_flex","kd_end_align"],["name","arrow-forward-circle-outline",1,"icon_style",2,"height","32px","width","32px","padding-right","0px"],[1,"kd_center_align_items"],["name","home-outline",1,"kd_back_button"],[2,"padding-left","10px"]],template:function(i,n){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2),e.NdJ("click",function(){return n.goToBack()}),e._UZ(4,"ion-icon",3),e.qZA(),e.TgZ(5,"ion-col",4)(6,"div")(7,"ion-text",5),e._uU(8),e.qZA()()(),e.TgZ(9,"ion-col",6)(10,"ion-icon",7),e.NdJ("click",function(){return n.deleteListing()}),e.qZA()()()()(),e.TgZ(11,"ion-content",8)(12,"div",9)(13,"ion-row")(14,"ion-col",10)(15,"ion-text",11),e._uU(16,"Inactive Profile"),e.qZA(),e.TgZ(17,"ion-toggle",12),e.NdJ("ngModelChange",function(g){return n.isToggleChecked=g})("ionChange",function(){return n.toggleChanged()}),e.qZA()(),e.TgZ(18,"ion-col",13),e.NdJ("click",function(){return n.editListing()}),e._UZ(19,"img",14),e.TgZ(20,"ion-text",15),e._uU(21,"Edit Listing"),e.qZA()()(),e.TgZ(22,"ion-row")(23,"ion-col",16)(24,"ion-text",17),e._uU(25),e.qZA()()(),e.TgZ(26,"ion-row")(27,"ion-col",18)(28,"ion-text",19),e._uU(29,"Order will end on"),e.qZA()(),e.TgZ(30,"ion-col",18)(31,"ion-text",19),e._uU(32,"Order will delivered on"),e.qZA()()(),e.TgZ(33,"ion-row")(34,"ion-col",20),e._UZ(35,"ion-icon",21),e.TgZ(36,"div",22)(37,"ion-text"),e._uU(38),e.ALo(39,"date"),e.qZA()()(),e.TgZ(40,"ion-col",20),e._UZ(41,"ion-icon",21),e.TgZ(42,"div",22)(43,"ion-text"),e._uU(44),e.ALo(45,"date"),e.qZA()()()(),e.TgZ(46,"ion-row",23)(47,"ion-col",24)(48,"ion-text"),e._uU(49,"Amount"),e.qZA()(),e.TgZ(50,"ion-col",25)(51,"ion-text")(52,"span",26),e._uU(53,"$ 320"),e.qZA(),e._uU(54," - "),e.TgZ(55,"span",27),e._uU(56,"$112(12%)"),e.qZA(),e._uU(57," ="),e.qZA()(),e.TgZ(58,"ion-col",24)(59,"ion-text"),e._uU(60,"$ 3088"),e.qZA()()()(),e.TgZ(61,"ion-toolbar",28)(62,"ion-segment",29),e.NdJ("ngModelChange",function(g){return n.selectedSegment=g}),e.TgZ(63,"ion-segment-button",30)(64,"ion-label"),e._uU(65,"All"),e.qZA()(),e.TgZ(66,"ion-segment-button",31)(67,"ion-label"),e._uU(68,"Confirmed"),e.qZA()(),e.TgZ(69,"ion-segment-button",32)(70,"ion-label"),e._uU(71,"Dispached"),e.qZA()(),e.TgZ(72,"ion-segment-button",33)(73,"ion-label"),e._uU(74,"Delivered"),e.qZA()(),e.TgZ(75,"ion-segment-button",34)(76,"ion-label"),e._uU(77,"Cancelled"),e.qZA()()()(),e.TgZ(78,"div",9),e.YNc(79,m,23,8,"ion-card",35),e.qZA()()),2&i&&(e.Q6J("translucent",!0),e.xp6(8),e.hij("Listing ID: ",n.listingData.ID,""),e.xp6(3),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",n.isToggleChecked),e.xp6(8),e.Oqu(n.listingData.label),e.xp6(13),e.Oqu(e.xi3(39,9,n.listingData.orderDeliveredOn,"d MMMM EEE h:mma")),e.xp6(6),e.Oqu(e.xi3(45,12,n.listingData.orderEndsOn,"d MMMM EEE h:mma")),e.xp6(18),e.Q6J("ngModel",n.selectedSegment),e.xp6(17),e.Q6J("ngForOf",null==n.listingData?null:n.listingData.customerOrders))},dependencies:[d.sg,c.JJ,c.On,o.PM,o.wI,o.W2,o.Gu,o.gu,o.Q$,o.Nd,o.cJ,o.GO,o.yW,o.ho,o.sr,o.w,o.QI,d.uU],styles:["ion-toggle[_ngcontent-%COMP%]::part(track){height:25px;width:45px}ion-toggle[_ngcontent-%COMP%]{--handle-height: 21px;--handle-width: 21px;--handle-spacing: 2px;--handle-background: white;--track-background: #22242880;--ion-color-base: white !important;--border-radius: 40px}ion-toggle.ios[_ngcontent-%COMP%]{--ion-color-base: #22242880 !important}ion-segment-button[_ngcontent-%COMP%]{--color-checked: #61399f;text-transform:none;font-size:12px;--padding-start: 0px;--padding-end: 0px;min-width:min-content}.toolbar_styles[_ngcontent-%COMP%]{padding:0;--background: white;box-shadow:none;background-color:#dfd9f1;--box-shadow: none;margin-top:20px}"]}),r})()}];let Z=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(x),u.Bz]}),r})(),v=(()=>{var t;class r{}return(t=r).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,c.u5,o.Pc,Z]}),r})()}}]);