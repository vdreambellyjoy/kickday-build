"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2138],{2138:(A,u,c)=>{c.r(u),c.d(u,{CustomerListingsPageModule:()=>D});var m=c(3609),d=c(2436),_=c(5861),h=c(8650),e=c(5678),f=c(4414),a=c(9004),y=c(5565),g=c(6814),v=c(9172);const x=["swiper"];function T(r,o){if(1&r){const n=e.EpF();e.TgZ(0,"ion-icon",25),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.openSearchModel())}),e.qZA()}}function w(r,o){if(1&r){const n=e.EpF();e.TgZ(0,"ion-icon",26),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.openSearchModel())}),e.qZA()}}function Z(r,o){if(1&r){const n=e.EpF();e.TgZ(0,"ion-icon",27),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.clearFilter())}),e.qZA()}}function C(r,o){if(1&r&&(e.TgZ(0,"swiper-slide"),e._UZ(1,"img",43),e.ALo(2,"async"),e.ALo(3,"getLogo"),e.qZA()),2&r){const n=o.$implicit;e.xp6(1),e.Q6J("src",e.lcZ(2,1,e.lcZ(3,3,n)),e.LSH)}}function P(r,o){if(1&r){const n=e.EpF();e.TgZ(0,"div",28),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.oxw();return e.KtG(l.goToListingOverview(s))}),e.TgZ(1,"swiper-container",29,30),e.NdJ("afterinit",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.swiperReady())})("slidechange",function(t){e.CHM(n);const s=e.oxw();return e.KtG(s.swiperSlideChanged(t))}),e.YNc(3,C,4,5,"swiper-slide",31),e.TgZ(4,"swiper-slide")(5,"iframe",32),e.NdJ("press",function(t){e.CHM(n);const s=e.oxw();return e.KtG(s.handlePress(t))}),e.qZA()()(),e.TgZ(6,"ion-row",33)(7,"ion-col",34),e._uU(8),e.qZA()(),e.TgZ(9,"ion-row",35)(10,"ion-col",34)(11,"div",36)(12,"ion-text",33),e._uU(13),e.qZA()(),e.TgZ(14,"ion-text",37)(15,"span",33),e._uU(16,"Maker"),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"span"),e._uU(19),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"span"),e._uU(22),e.qZA()()(),e.TgZ(23,"ion-col",38)(24,"div")(25,"ion-text",39),e._uU(26,"Order will end on"),e.qZA(),e.TgZ(27,"div",40),e._UZ(28,"ion-icon",41),e.TgZ(29,"ion-text",42),e._uU(30),e.ALo(31,"date"),e.qZA()()()()()()}if(2&r){const n=o.$implicit;e.xp6(1),e.Q6J("loop",!0)("pagination",!0)("slidesPerView",1)("slidesPerGroup",1),e.xp6(2),e.Q6J("ngForOf",n.imageArray),e.xp6(5),e.Oqu(n.label),e.xp6(5),e.Oqu(null==n||null==n.makerData||null==n.makerData.userName?null:n.makerData.userName.charAt(0)),e.xp6(6),e.Oqu(n.makerData.userName),e.xp6(3),e.Oqu(n.makerData.address),e.xp6(8),e.Oqu(e.xi3(31,10,n.orderEndsOn,"dd MMMM EEE hh:mm a"))}}const k=[{path:"",component:(()=>{var r;class o{constructor(i,t,s,l){this.router=i,this.model=t,this.alert=s,this.adminService=l,this.selectedSegment="All",this.filteredItems=[],this.filterSearchTerm="",this.filterDeliveryType="",this.filterDeliveryDate=""}ngOnInit(){}ionViewWillEnter(){this.filterSearchTerm="",this.filterDeliveryType="",this.filterDeliveryDate="",this.adminService.getAllListingsForCustomer({}).subscribe(i=>{this.listings=i.data||[],this.filteredItems=this.listings},i=>{console.log(i)}),this.swiperReady()}handlePress(i){i.stopPropagation()}swiperSlideChanged(i){console.log("changed: ",i)}swiperReady(){var i;this.swiper=null===(i=this.swiperRef)||void 0===i?void 0:i.nativeElement.swiper}goNext(){(!this.swiper||this.swiper.destroyed)&&this.swiperReady(),this.swiper&&!this.swiper.destroyed&&this.swiper.slideNext()}goPrev(){(!this.swiper||this.swiper.destroyed)&&this.swiperReady(),this.swiper&&!this.swiper.destroyed&&this.swiper.slidePrev()}goToListingOverview(i){this.router.navigateByUrl("/customerListings/"+i._id)}goToOrders(){this.router.navigate(["/orders"])}goToProfile(){this.router.navigate(["/customerProfile"])}onSearch(i){const t=i.target.value.trim().toLowerCase();this.filteredItems=!t||t.length<1?[...this.listings]:this.listings.filter(s=>{const l=s&&s.category?s.category.toLowerCase():"";return console.log(l,"searchhhh"),l.includes(t)})}openSearchModel(){var i=this;return(0,_.Z)(function*(){let t={search:i.filterSearchTerm||"",selectedDeliveryType:i.filterDeliveryType||"",selectedOption:i.filterDeliveryDate||""};const s=yield i.model.create({component:h.Z,componentProps:t});s.present();const{data:l}=yield s.onWillDismiss();l&&(i.filterSearchTerm=l.searchTerm,i.filterDeliveryType=l.deliveryType,i.filterDeliveryDate=l.deliveryDate,i.adminService.getAllListingsForCustomer({search:i.filterSearchTerm||"",deliveryType:i.filterDeliveryType||"",deliveryDate:i.filterDeliveryDate||""}).subscribe(p=>{i.listings=p.data||[],i.filteredItems=i.listings},p=>{console.log(p)}))})()}clearFilter(){this.filterSearchTerm="",this.filterDeliveryType="",this.filterDeliveryDate="",this.adminService.getAllListingsForCustomer({}).subscribe(i=>{this.listings=i.data||[],this.filteredItems=this.listings},i=>{console.log(i)})}handleRefresh(i){this.ionViewWillEnter(),setTimeout(()=>{i.target.complete()},500)}}return(r=o).\u0275fac=function(i){return new(i||r)(e.Y36(d.F0),e.Y36(f.IN),e.Y36(f.Br),e.Y36(y.l))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-customer-listings"]],viewQuery:function(i,t){if(1&i&&e.Gf(x,5),2&i){let s;e.iGM(s=e.CRH())&&(t.swiperRef=s.first)}},decls:37,vars:6,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","10px"],["size","3",2,"display","flex","justify-content","start","align-items","center"],["src","../../../assets/icons/Kickday-logo-removebg-preview.png","alt","",2,"height","40px","width","40px"],["size","5",1,"kd_flex","kd_flex_row_center"],["size","2",1,"kd_flex","kd_end_align"],["name","bag-handle-outline",1,"kd_svg_size"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[2,"display","flex","align-items","center"],["placeholder","Search by Category",1,"searchbar-custom",2,"padding","20px",3,"keyup"],["name","filter-circle-outline","class","kd_svg_size","style","padding-right: 20px;",3,"click",4,"ngIf"],["name","filter-circle-outline","class","kd_svg_size","style","padding-right: 20px;color:blue",3,"click",4,"ngIf"],["name","rocket-outline","style","padding-right: 20px;color:blue;font-size: 30px;",3,"click",4,"ngIf"],["style","border: solid 1px lightgray; border-radius: 14px; margin: 20px",3,"click",4,"ngFor","ngForOf"],[2,"height","100px"],[2,"bottom","0px","position","absolute"],[2,"margin","0px","border-radius","0px","padding","10px"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent",3,"click"],[1,"ripple_background"],["name","bag-handle-outline",1,"footer_icon_styles"],[1,"icon-text_styles"],[1,"kd_flex","kd_flex_col_center","ion-activatable","ripple-parent"],["name","list-circle-outline",1,"footer_icon_styles"],["name","person-circle-outline",1,"footer_icon_styles"],["name","filter-circle-outline",1,"kd_svg_size",2,"padding-right","20px",3,"click"],["name","filter-circle-outline",1,"kd_svg_size",2,"padding-right","20px","color","blue",3,"click"],["name","rocket-outline",2,"padding-right","20px","color","blue","font-size","30px",3,"click"],[2,"border","solid 1px lightgray","border-radius","14px","margin","20px",3,"click"],[2,"height","240px",3,"loop","pagination","slidesPerView","slidesPerGroup","afterinit","slidechange"],["swiper",""],[4,"ngFor","ngForOf"],["width","100%","height","100%","src","https://www.youtube.com/embed/7Y5q41D8_hs","frameborder","0","allowfullscreen","",3,"press"],[2,"font-weight","bold"],[1,"kd_flex"],[2,"padding","10px"],[1,"first_letter_styles"],[2,"padding-left","20px","font-size","13px"],[1,"kd_flex","kd_end_align"],[2,"font-size","13px","font-weight","bold"],[1,"kd_flex",2,"padding-top","5px"],["name","calendar-outline",1,"icon_style",2,"height","20px","width","20px"],[2,"font-size","13px"],[3,"src"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2),e._UZ(4,"img",3),e.qZA(),e._UZ(5,"ion-col",4)(6,"ion-col",5),e.TgZ(7,"ion-col",5),e._UZ(8,"ion-icon",6),e.qZA()()()(),e.TgZ(9,"ion-content",7)(10,"ion-refresher",8),e.NdJ("ionRefresh",function(l){return t.handleRefresh(l)}),e._UZ(11,"ion-refresher-content"),e.qZA(),e.TgZ(12,"div",9)(13,"ion-searchbar",10),e.NdJ("keyup",function(l){return t.onSearch(l)}),e.qZA(),e.YNc(14,T,1,0,"ion-icon",11)(15,w,1,0,"ion-icon",12)(16,Z,1,0,"ion-icon",13),e.qZA(),e.YNc(17,P,32,13,"div",14),e._UZ(18,"div",15),e.qZA(),e.TgZ(19,"ion-footer",16)(20,"ion-card",17)(21,"ion-row")(22,"ion-col",18),e.NdJ("click",function(){return t.goToOrders()}),e._UZ(23,"ion-ripple-effect",19)(24,"ion-icon",20),e.TgZ(25,"ion-text",21),e._uU(26,"Orders"),e.qZA()(),e.TgZ(27,"ion-col",22),e._UZ(28,"ion-ripple-effect",19)(29,"ion-icon",23),e.TgZ(30,"ion-text",21),e._uU(31,"Listings"),e.qZA()(),e.TgZ(32,"ion-col",18),e.NdJ("click",function(){return t.goToProfile()}),e._UZ(33,"ion-ripple-effect",19)(34,"ion-icon",24),e.TgZ(35,"ion-text",21),e._uU(36,"Profile"),e.qZA()()()()()),2&i&&(e.Q6J("translucent",!0),e.xp6(9),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngIf",!t.filterSearchTerm&&!t.filterDeliveryType&&!t.filterDeliveryDate),e.xp6(1),e.Q6J("ngIf",t.filterSearchTerm||t.filterDeliveryType||t.filterDeliveryDate),e.xp6(1),e.Q6J("ngIf",t.filterSearchTerm||t.filterDeliveryType||t.filterDeliveryDate),e.xp6(1),e.Q6J("ngForOf",t.filteredItems))},dependencies:[g.sg,g.O5,a.PM,a.wI,a.W2,a.fr,a.Gu,a.gu,a.nJ,a.Wo,a.H$,a.Nd,a.VI,a.yW,a.sr,a.j9,v.n,g.Ov,g.uU],styles:["ion-segment-button[_ngcontent-%COMP%]{--color-checked: #61399f;text-transform:none;font-size:12px;--padding-start: 0px;--padding-end: 0px;min-width:min-content}swiper-container[_ngcontent-%COMP%]{--swiper-pagination-bullet-inactive-color: var(--ion-color-step-500, white);--swiper-theme-color: #0aa26d}"]}),o})()}];let L=(()=>{var r;class o{}return(r=o).\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.Bz.forChild(k),d.Bz]}),o})(),D=(()=>{var r;class o{}return(r=o).\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.m,L]}),o})()}}]);