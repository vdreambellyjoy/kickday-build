"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2536],{2536:(b,d,a)=>{a.r(d),a.d(d,{AllUsersPageModule:()=>T});var f=a(3609),g=a(209),e=a(6242),_=a(4414),l=a(9004),p=a(5565),u=a(6814),m=a(95),h=a(9172);function v(n,o){if(1&n&&(e.TgZ(0,"ion-text",31),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.userName.charAt(0).toUpperCase())}}function x(n,o){if(1&n&&(e.TgZ(0,"ion-text",31),e._UZ(1,"img",32),e.ALo(2,"async"),e.ALo(3,"getLogo"),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("src",e.lcZ(2,1,e.lcZ(3,3,null==t?null:t.profileId)),e.LSH)}}function U(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",21),e.NdJ("click",function(){const r=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.navigateToUserOverview(r))}),e.TgZ(1,"ion-row")(2,"ion-col",22)(3,"ion-text"),e._uU(4),e.qZA()(),e.TgZ(5,"ion-col",23)(6,"ion-text"),e._uU(7),e.qZA()()(),e.TgZ(8,"ion-row",24)(9,"ion-col",25)(10,"div",26),e.YNc(11,v,2,1,"ion-text",27)(12,x,4,5,"ion-text",27),e.qZA(),e.TgZ(13,"ion-text",28)(14,"span"),e._uU(15),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"span"),e._uU(18),e.qZA()()(),e.TgZ(19,"ion-col",29),e._UZ(20,"ion-icon",30),e.qZA()()()}if(2&n){const t=o.$implicit;e.xp6(4),e.hij("user ID: ",null==t?null:t.ID,""),e.xp6(3),e.Oqu(null==t?null:t.role),e.xp6(4),e.Q6J("ngIf",!(null!=t&&t.profileId)),e.xp6(1),e.Q6J("ngIf",null==t?null:t.profileId),e.xp6(3),e.Oqu(null==t?null:t.userName),e.xp6(3),e.Oqu(null==t?null:t.address)}}const A=[{path:"",component:(()=>{var n;class o{constructor(s,i,r){this.router=s,this.navCtrl=i,this.adminService=r,this.selectedSegment="all",this.usersList=[],this.filteredUsersList=[]}ngOnInit(){}ionViewWillEnter(){this.adminService.getAllUsersList({selectedTab:this.selectedSegment}).subscribe(s=>{s.success&&(this.usersList=s.data||[],this.filteredUsersList=[...this.usersList])},s=>{console.log(s)})}changeSegment(s){this.selectedSegment=s.target.value,this.adminService.getAllUsersList({selectedTab:this.selectedSegment}).subscribe(i=>{i.success&&(this.usersList=i.data||[],this.filteredUsersList=[...this.usersList])},i=>{console.log(i)})}navigateToUserOverview(s){this.router.navigateByUrl("/userOverview/"+s._id)}naviageteToProfile(){this.router.navigate(["/profile"])}goToBack(){this.router.navigate(["/adminDashboard"])}handleRefresh(s){this.ionViewWillEnter(),s.target.complete()}onSearch(s){const i=s.target.value.trim().toLowerCase();this.filteredUsersList=!i||i.length<1?[...this.usersList]:this.usersList.filter(r=>{const c=r.userName.toLowerCase(),k=r.mobileNumber;return c.includes(i)||k.includes(i)})}}return(n=o).\u0275fac=function(s){return new(s||n)(e.Y36(g.F0),e.Y36(_.SH),e.Y36(p.l))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-all-users"]],decls:37,vars:4,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","10px"],["size","2",2,"display","flex","justify-content","start","align-items","center"],["name","arrow-back-outline",1,"kd_back_button",3,"click"],["size","8",1,"kd_flex","kd_flex_row_center",2,"display","grid",3,"click"],[1,"kd_flex","kd_flex_row_center"],["name","add-circle-outline",1,"kd_svg_size"],[1,"header-text",2,"font-size","18px !important"],["size","2"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[2,"padding","0px","--background","white","box-shadow","none","background-color","#dfd9f1","--box-shadow","none"],["mode","md",3,"ngModel","ionChange","ngModelChange"],["value","all"],["value","maker"],["value","draft"],["value","customer"],["value","inactive"],[2,"padding","15px"],["placeholder","Search by name",1,"searchbar-custom",3,"keyup"],["style","margin: 15px 0px;",3,"click",4,"ngFor","ngForOf"],[2,"margin","15px 0px",3,"click"],["size","5"],["size","3.5",1,"kd_flex","kd_flex_row_center","kd_font_size_12","flex_start"],[2,"margin-top","5px"],["size","10",1,"kd_flex"],[1,"first_letter_styles"],["style","font-weight: bold;",4,"ngIf"],[2,"padding-left","20px"],["size","2",1,"kd_flex","kd_end_align"],["name","arrow-forward-circle-outline",1,"kd_svg_size"],[2,"font-weight","bold"],[3,"src"]],template:function(s,i){1&s&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2)(4,"ion-icon",3),e.NdJ("click",function(){return i.goToBack()}),e.qZA()(),e.TgZ(5,"ion-col",4),e.NdJ("click",function(){return i.naviageteToProfile()}),e.TgZ(6,"ion-row")(7,"ion-col",5),e._UZ(8,"ion-icon",6),e.qZA()(),e.TgZ(9,"ion-row")(10,"ion-col")(11,"ion-text",7),e._uU(12,"New Maker"),e.qZA()()()(),e._UZ(13,"ion-col",8),e.qZA()()(),e.TgZ(14,"ion-content",9)(15,"ion-refresher",10),e.NdJ("ionRefresh",function(c){return i.handleRefresh(c)}),e._UZ(16,"ion-refresher-content"),e.qZA(),e.TgZ(17,"ion-toolbar",11)(18,"ion-segment",12),e.NdJ("ionChange",function(c){return i.changeSegment(c)})("ngModelChange",function(c){return i.selectedSegment=c}),e.TgZ(19,"ion-segment-button",13)(20,"ion-label"),e._uU(21,"All"),e.qZA()(),e.TgZ(22,"ion-segment-button",14)(23,"ion-label"),e._uU(24,"Makers"),e.qZA()(),e.TgZ(25,"ion-segment-button",15)(26,"ion-label"),e._uU(27,"Drafting"),e.qZA()(),e.TgZ(28,"ion-segment-button",16)(29,"ion-label"),e._uU(30,"Customers"),e.qZA()(),e.TgZ(31,"ion-segment-button",17)(32,"ion-label"),e._uU(33,"Inactive"),e.qZA()()()(),e.TgZ(34,"div",18)(35,"ion-searchbar",19),e.NdJ("keyup",function(c){return i.onSearch(c)}),e.qZA(),e.YNc(36,U,21,6,"div",20),e.qZA()()),2&s&&(e.Q6J("translucent",!0),e.xp6(14),e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("ngModel",i.selectedSegment),e.xp6(18),e.Q6J("ngForOf",i.filteredUsersList))},dependencies:[u.sg,u.O5,l.wI,l.W2,l.Gu,l.gu,l.Q$,l.nJ,l.Wo,l.Nd,l.VI,l.cJ,l.GO,l.yW,l.sr,l.QI,l.j9,m.JJ,m.On,h.n,u.Ov],styles:["ion-segment-button[_ngcontent-%COMP%]{--color-checked: #61399f;text-transform:none;font-size:12px;--padding-start: 0px;--padding-end: 0px;min-width:min-content}.flex_start[_ngcontent-%COMP%]{align-items:flex-start}"]}),o})()}];let Z=(()=>{var n;class o{}return(n=o).\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(A),g.Bz]}),o})(),T=(()=>{var n;class o{}return(n=o).\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.m,Z]}),o})()}}]);