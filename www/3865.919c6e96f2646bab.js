"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3865],{3865:(C,p,s)=>{s.r(p),s.d(p,{UserOverviewPageModule:()=>M});var m=s(3609),g=s(2436),e=s(5678),Z=s(5565),c=s(6814),r=s(9004),v=s(95),h=s(9172);function f(i,a){if(1&i&&(e._UZ(0,"img",27),e.ALo(1,"async"),e.ALo(2,"getLogo")),2&i){const n=e.oxw();e.Q6J("src",e.lcZ(1,1,e.lcZ(2,3,null==n.userData?null:n.userData.profileId)),e.LSH)}}function U(i,a){1&i&&e._UZ(0,"img",28)}function O(i,a){if(1&i&&(e.TgZ(0,"div",21)(1,"ion-row")(2,"ion-col")(3,"ion-text",20),e._uU(4),e.qZA(),e._UZ(5,"br"),e.TgZ(6,"div",22)(7,"ion-text"),e._uU(8,"Listings"),e.qZA()()(),e.TgZ(9,"ion-col")(10,"ion-text",20),e._uU(11),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"div",22)(14,"ion-text"),e._uU(15,"Money Earned"),e.qZA()()(),e.TgZ(16,"ion-col",29)(17,"ion-text",20),e._uU(18,"\u20b9 0"),e.qZA(),e._UZ(19,"br"),e.TgZ(20,"div",30)(21,"ion-text"),e._uU(22),e.qZA()()()()()),2&i){const n=e.oxw();e.xp6(4),e.Oqu(null==n.userData?null:n.userData.listingsCount),e.xp6(7),e.hij("\u20b9 ",null==n.userData?null:n.userData.totalAmount,""),e.xp6(11),e.hij("%",null==n.userData?null:n.userData.commission,"")}}function x(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"ion-row")(1,"ion-col")(2,"ion-button",31),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.openKitchenImages(!0))}),e._uU(3,"Images"),e.qZA()()()}}function T(i,a){if(1&i&&(e.TgZ(0,"div")(1,"ion-row")(2,"ion-col")(3,"ion-text"),e._uU(4),e.qZA()(),e.TgZ(5,"ion-col")(6,"ion-text"),e._uU(7),e.qZA()()()()),2&i){const n=a.$implicit;e.xp6(4),e.Oqu(n.label),e.xp6(3),e.Oqu(n.value)}}function b(i,a){if(1&i&&(e.TgZ(0,"div",21),e.YNc(1,T,8,2,"div",32),e.qZA()),2&i){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.getBankDetails())}}function k(i,a){if(1&i&&(e._UZ(0,"img",36),e.ALo(1,"async"),e.ALo(2,"getLogo")),2&i){const n=e.oxw().$implicit;e.Q6J("src",e.lcZ(1,1,e.lcZ(2,3,n)),e.LSH)}}function w(i,a){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,k,3,5,"img",35),e.qZA()),2&i){const n=a.$implicit;e.xp6(1),e.Q6J("ngIf",n)}}function D(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Kitchen Images Modal"),e.qZA(),e.TgZ(4,"ion-buttons",33)(5,"ion-button",34),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.isMakerImagesOpen=!1)}),e._uU(6,"Close"),e.qZA()()()(),e.TgZ(7,"ion-content",11),e.YNc(8,w,2,1,"div",32),e.qZA()}if(2&i){const n=e.oxw();e.xp6(8),e.Q6J("ngForOf",null==n.userData?null:n.userData.kitchenImages)}}function A(i,a){if(1&i){const n=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Document Modal"),e.qZA(),e.TgZ(4,"ion-buttons",33)(5,"ion-button",34),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.OpenDocuments(!1))}),e._uU(6,"Close"),e.qZA()()()(),e.TgZ(7,"ion-content",11)(8,"p"),e._uU(9," Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque, dicta. "),e.qZA()()}}const q=[{path:"",component:(()=>{var i;class a{constructor(o,t){this.router=o,this.adminService=t,this._id="",this.userData={},this.isDocumentsOpen=!1,this.isMakerImagesOpen=!1,this.isToggleChecked=!1}ngOnInit(){}ionViewWillEnter(){this._id=this.router.url.split("/")[2],this.adminService.getUserOverView({_id:this._id}).subscribe(o=>{o.success?(this.userData=o.data||{},this.isToggleChecked=!this.userData.activeUser,this.getBankDetails()):this.router.navigate(["/adminDashboard"])},o=>{console.log(o)})}getBankDetails(){var o,t,l,u,d,_;return[{label:"Bank Name",value:null===(o=this.userData)||void 0===o?void 0:o.bankName},{label:"Branch",value:null===(t=this.userData)||void 0===t?void 0:t.branch},{label:"Account Number",value:null===(l=this.userData)||void 0===l?void 0:l.accountNumber},{label:"Account Name",value:null===(u=this.userData)||void 0===u?void 0:u.accountName},{label:"Account Type",value:null===(d=this.userData)||void 0===d?void 0:d.accountType},{label:"IFSC Code",value:null===(_=this.userData)||void 0===_?void 0:_.ifscCode}]}toggleChanged(){this.adminService.activeDeActiveUser({_id:this._id,value:this.isToggleChecked}).subscribe(o=>{o.success||this.router.navigate(["/adminDashboard"])},o=>{console.log(o)})}openKitchenImages(o){this.isMakerImagesOpen=o}OpenDocuments(o){this.isDocumentsOpen=o}naviageteToProfilePage(){this.router.navigate(["/profile"])}navigateBackToMakersList(){this.router.navigate(["/allUsers"])}editMaker(o){this.router.navigateByUrl("/editprofile/"+o._id)}}return(i=a).\u0275fac=function(o){return new(o||i)(e.Y36(g.F0),e.Y36(Z.l))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-user-overview"]],decls:80,vars:17,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","10px"],["size","2",2,"display","flex","justify-content","start","align-items","center",3,"click"],["name","arrow-back-outline",1,"kd_back_button"],["size","5",2,"display","flex","align-items","center",3,"click"],["name","add-circle-outline",1,"kd_svg_size",2,"padding-right","5px"],[1,"header-text",2,"font-size","16px !important"],["size","5"],[1,"text_center",2,"margin-top","0px","display","flex","align-items","center"],["aria-label","Dark toggle","color","dark",2,"padding-right","5px",3,"ngModel","ngModelChange","ionChange"],[1,"kd_font_size_12"],[1,"ion-padding"],[1,"kd_center_align_items"],[1,"kd_flex","kd_end_align",3,"click"],["src","../../../assets/edit-icon-24.png","alt","",1,"kd_svg_size"],[1,"kd_center_align",2,"border-bottom","none !important","width","100%"],[1,"kd_round","round_new","kd_center_align","profile-photo"],["alt","LOGO","class","img_border",3,"src",4,"ngIf"],["src","assets/defaultProfilePic.svg","alt","LOGO","class","img_border",4,"ngIf"],[2,"margin","15px 0px"],[1,"kd_main_heading"],[1,"card-outline"],[1,"pad-top5"],[1,"kd_margin_bott_10"],["class","card-outline",4,"ngIf"],[4,"ngIf"],[3,"isOpen"],["alt","LOGO",1,"img_border",3,"src"],["src","assets/defaultProfilePic.svg","alt","LOGO",1,"img_border"],[1,"kd_flex","kd_end_align"],[1,"pad-top5",2,"position","absolute","margin-top","23px"],["expand","block",3,"click"],[4,"ngFor","ngForOf"],["slot","end"],[3,"click"],["alt","",3,"src",4,"ngIf"],["alt","",3,"src"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2),e.NdJ("click",function(){return t.navigateBackToMakersList()}),e._UZ(4,"ion-icon",3),e.qZA(),e.TgZ(5,"ion-col",4),e.NdJ("click",function(){return t.naviageteToProfilePage()}),e._UZ(6,"ion-icon",5),e.TgZ(7,"ion-text",6),e._uU(8,"New Maker"),e.qZA()(),e.TgZ(9,"ion-col",7)(10,"ion-row")(11,"ion-col",8)(12,"ion-toggle",9),e.NdJ("ngModelChange",function(u){return t.isToggleChecked=u})("ionChange",function(){return t.toggleChanged()}),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"ion-text",10),e._uU(15,"Inactive Profile"),e.qZA()()()()()()(),e.TgZ(16,"ion-content",11)(17,"ion-row",12)(18,"ion-col")(19,"ion-text"),e._uU(20),e.qZA()(),e.TgZ(21,"ion-col")(22,"ion-text"),e._uU(23),e.qZA()(),e.TgZ(24,"ion-col",13),e.NdJ("click",function(){return t.editMaker(t.userData)}),e._UZ(25,"img",14),e.qZA()(),e.TgZ(26,"ion-row",15)(27,"div",16),e.YNc(28,f,3,5,"img",17)(29,U,1,0,"img",18),e.qZA(),e.TgZ(30,"ion-col",19)(31,"ion-label"),e._uU(32),e.qZA(),e._UZ(33,"br"),e.TgZ(34,"ion-label"),e._uU(35),e.qZA()(),e.TgZ(36,"ion-col",19)(37,"ion-label",20),e._uU(38,"\u20b9 0"),e.qZA(),e._UZ(39,"br"),e.TgZ(40,"ion-label"),e._uU(41,"Money Spent"),e.qZA()()(),e.TgZ(42,"div",21)(43,"ion-row")(44,"ion-col")(45,"ion-text"),e._uU(46,"Name"),e.qZA(),e._UZ(47,"br"),e.TgZ(48,"div",22)(49,"ion-text"),e._uU(50),e.qZA()()(),e.TgZ(51,"ion-col")(52,"ion-text"),e._uU(53,"Email"),e.qZA(),e._UZ(54,"br"),e.TgZ(55,"div",22)(56,"ion-text"),e._uU(57),e.qZA()()()(),e.TgZ(58,"ion-row",23)(59,"ion-col")(60,"ion-text"),e._uU(61,"Mobile"),e.qZA(),e._UZ(62,"br"),e.TgZ(63,"div",22)(64,"ion-text"),e._uU(65),e.qZA()()(),e.TgZ(66,"ion-col")(67,"ion-text"),e._uU(68,"Location"),e.qZA(),e._UZ(69,"br"),e.TgZ(70,"div",22)(71,"ion-text"),e._uU(72),e.qZA()()()()(),e.YNc(73,O,23,3,"div",24)(74,x,4,0,"ion-row",25)(75,b,2,1,"div",24),e.TgZ(76,"ion-modal",26),e.YNc(77,D,9,1,"ng-template"),e.qZA(),e.TgZ(78,"ion-modal",26),e.YNc(79,A,10,0,"ng-template"),e.qZA()()),2&o&&(e.Q6J("translucent",!0),e.xp6(12),e.Q6J("ngModel",t.isToggleChecked),e.xp6(8),e.hij("User ID: ",t.userData.ID,""),e.xp6(3),e.Oqu(t.userData.role),e.xp6(5),e.Q6J("ngIf",null==t.userData?null:t.userData.profileId),e.xp6(1),e.Q6J("ngIf",!(null!=t.userData&&t.userData.profileId)),e.xp6(3),e.Oqu(t.userData.userName),e.xp6(3),e.Oqu(t.userData.address),e.xp6(15),e.Oqu(t.userData.userName),e.xp6(7),e.Oqu(t.userData.email),e.xp6(8),e.Oqu(t.userData.mobileNumber),e.xp6(7),e.Oqu(t.userData.address),e.xp6(1),e.Q6J("ngIf","maker"==(null==t.userData?null:t.userData.role)),e.xp6(1),e.Q6J("ngIf","maker"==(null==t.userData?null:t.userData.role)),e.xp6(1),e.Q6J("ngIf","maker"==(null==t.userData?null:t.userData.role)),e.xp6(1),e.Q6J("isOpen",t.isMakerImagesOpen),e.xp6(2),e.Q6J("isOpen",t.isDocumentsOpen))},dependencies:[c.sg,c.O5,r.YG,r.Sm,r.wI,r.W2,r.Gu,r.gu,r.Q$,r.Nd,r.yW,r.wd,r.ho,r.sr,r.ki,r.w,v.JJ,v.On,h.n,c.Ov],styles:["ion-toggle[_ngcontent-%COMP%]::part(track){height:25px;width:45px}ion-toggle[_ngcontent-%COMP%]{--handle-height: 21px;--handle-width: 21px;--handle-spacing: 2px;--handle-background: white;--track-background: #22242880;--ion-color-base: white !important;--border-radius: 40px}ion-toggle.ios[_ngcontent-%COMP%]{--ion-color-base: #22242880 !important}.profile-photo[_ngcontent-%COMP%]{height:60px;max-width:60px;margin:10px}.pad-top5[_ngcontent-%COMP%]{padding-top:5px}.card-outline[_ngcontent-%COMP%]{padding:15px;border:solid 1px black;margin:15px 5px;border-radius:14px}.img_border[_ngcontent-%COMP%]{border-radius:10px!important}"]}),a})()}];let P=(()=>{var i;class a{}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(q),g.Bz]}),a})(),M=(()=>{var i;class a{}return(i=a).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.m,P]}),a})()}}]);