"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2536],{2536:(O,_,i)=>{i.r(_),i.d(_,{AllUsersPageModule:()=>A});var p=i(3609),s=i(2436),e=i(5678),U=i(4414),a=i(9004),m=i(5565),h=i(6814),c=i(95),f=i(9172);function T(r,u){if(1&r&&(e.TgZ(0,"ion-text",31),e._uU(1),e.qZA()),2&r){const n=e.oxw().$implicit;e.xp6(1),e.Oqu(n.userName.charAt(0).toUpperCase())}}function t(r,u){if(1&r&&(e.TgZ(0,"ion-text",31),e._UZ(1,"img",32),e.ALo(2,"async"),e.ALo(3,"getLogo"),e.qZA()),2&r){const n=e.oxw().$implicit;e.xp6(1),e.Q6J("src",e.lcZ(2,1,e.lcZ(3,3,null==n?null:n.profileId)),e.LSH)}}function v(r,u){if(1&r){const n=e.EpF();e.TgZ(0,"div",21),e.NdJ("click",function(){const d=e.CHM(n).$implicit,g=e.oxw();return e.KtG(g.navigateToUserOverview(d))}),e.TgZ(1,"ion-row")(2,"ion-col",22)(3,"ion-text"),e._uU(4),e.qZA()(),e.TgZ(5,"ion-col",23)(6,"ion-text"),e._uU(7),e.qZA()()(),e.TgZ(8,"ion-row",24)(9,"ion-col",25)(10,"div",26),e.YNc(11,T,2,1,"ion-text",27)(12,t,4,5,"ion-text",27),e.qZA(),e.TgZ(13,"ion-text",28)(14,"span"),e._uU(15),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"span"),e._uU(18),e.qZA()()(),e.TgZ(19,"ion-col",29),e._UZ(20,"ion-icon",30),e.qZA()()()}if(2&r){const n=u.$implicit;e.xp6(4),e.hij("user ID: ",null==n?null:n.ID,""),e.xp6(3),e.Oqu(null==n?null:n.role),e.xp6(4),e.Q6J("ngIf",!(null!=n&&n.profileId)),e.xp6(1),e.Q6J("ngIf",null==n?null:n.profileId),e.xp6(3),e.Oqu(null==n?null:n.userName),e.xp6(3),e.Oqu(null==n?null:n.address)}}const x=[{path:"",component:(()=>{var r;class u{constructor(o,l,d){this.router=o,this.navCtrl=l,this.adminService=d,this.selectedSegment="all",this.usersList=[],this.filteredUsersList=[]}ngOnInit(){}ionViewWillEnter(){this.adminService.getAllUsersList({selectedTab:this.selectedSegment}).subscribe(o=>{o.success&&(this.usersList=o.data||[],this.filteredUsersList=[...this.usersList])},o=>{console.log(o)})}changeSegment(o){this.selectedSegment=o.target.value,this.adminService.getAllUsersList({selectedTab:this.selectedSegment}).subscribe(l=>{l.success&&(this.usersList=l.data||[],this.filteredUsersList=[...this.usersList])},l=>{console.log(l)})}navigateToUserOverview(o){this.router.navigateByUrl("/userOverview/"+o._id)}naviageteToProfile(){this.router.navigate(["/profile"])}goToBack(){this.router.navigate(["/adminDashboard"])}handleRefresh(o){this.ionViewWillEnter(),o.target.complete()}onSearch(o){const l=o.target.value.trim().toLowerCase();this.filteredUsersList=!l||l.length<1?[...this.usersList]:this.usersList.filter(d=>{const g=d.userName.toLowerCase(),L=d.mobileNumber;return g.includes(l)||L.includes(l)})}}return(r=u).\u0275fac=function(o){return new(o||r)(e.Y36(s.F0),e.Y36(U.SH),e.Y36(m.l))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-all-users"]],decls:37,vars:4,consts:[[2,"box-shadow","none",3,"translucent"],[2,"margin","10px"],["size","2",2,"display","flex","justify-content","start","align-items","center"],["name","arrow-back-outline",1,"kd_back_button",3,"click"],["size","8",1,"kd_flex","kd_flex_row_center",2,"display","grid",3,"click"],[1,"kd_flex","kd_flex_row_center"],["name","add-circle-outline",1,"kd_svg_size"],[1,"header-text",2,"font-size","18px !important"],["size","2"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[2,"padding","0px","--background","white","box-shadow","none","background-color","#dfd9f1","--box-shadow","none"],["mode","md",3,"ngModel","ionChange","ngModelChange"],["value","all"],["value","maker"],["value","draft"],["value","customer"],["value","inactive"],[2,"padding","15px"],["placeholder","Search by name",1,"searchbar-custom",3,"keyup"],["style","margin: 15px 0px;",3,"click",4,"ngFor","ngForOf"],[2,"margin","15px 0px",3,"click"],["size","5"],["size","3.5",1,"kd_flex","kd_flex_row_center","kd_font_size_12","flex_start"],[2,"margin-top","5px"],["size","10",1,"kd_flex"],[1,"first_letter_styles"],["style","font-weight: bold;",4,"ngIf"],[2,"padding-left","20px"],["size","2",1,"kd_flex","kd_end_align"],["name","arrow-forward-circle-outline",1,"kd_svg_size"],[2,"font-weight","bold"],[3,"src"]],template:function(o,l){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-row",1)(3,"ion-col",2)(4,"ion-icon",3),e.NdJ("click",function(){return l.goToBack()}),e.qZA()(),e.TgZ(5,"ion-col",4),e.NdJ("click",function(){return l.naviageteToProfile()}),e.TgZ(6,"ion-row")(7,"ion-col",5),e._UZ(8,"ion-icon",6),e.qZA()(),e.TgZ(9,"ion-row")(10,"ion-col")(11,"ion-text",7),e._uU(12,"New Maker"),e.qZA()()()(),e._UZ(13,"ion-col",8),e.qZA()()(),e.TgZ(14,"ion-content",9)(15,"ion-refresher",10),e.NdJ("ionRefresh",function(g){return l.handleRefresh(g)}),e._UZ(16,"ion-refresher-content"),e.qZA(),e.TgZ(17,"ion-toolbar",11)(18,"ion-segment",12),e.NdJ("ionChange",function(g){return l.changeSegment(g)})("ngModelChange",function(g){return l.selectedSegment=g}),e.TgZ(19,"ion-segment-button",13)(20,"ion-label"),e._uU(21,"All"),e.qZA()(),e.TgZ(22,"ion-segment-button",14)(23,"ion-label"),e._uU(24,"Makers"),e.qZA()(),e.TgZ(25,"ion-segment-button",15)(26,"ion-label"),e._uU(27,"Drafting"),e.qZA()(),e.TgZ(28,"ion-segment-button",16)(29,"ion-label"),e._uU(30,"Customers"),e.qZA()(),e.TgZ(31,"ion-segment-button",17)(32,"ion-label"),e._uU(33,"Inactive"),e.qZA()()()(),e.TgZ(34,"div",18)(35,"ion-searchbar",19),e.NdJ("keyup",function(g){return l.onSearch(g)}),e.qZA(),e.YNc(36,v,21,6,"div",20),e.qZA()()),2&o&&(e.Q6J("translucent",!0),e.xp6(14),e.Q6J("fullscreen",!0),e.xp6(4),e.Q6J("ngModel",l.selectedSegment),e.xp6(18),e.Q6J("ngForOf",l.filteredUsersList))},dependencies:[h.sg,h.O5,a.wI,a.W2,a.Gu,a.gu,a.Q$,a.nJ,a.Wo,a.Nd,a.VI,a.cJ,a.GO,a.yW,a.sr,a.QI,a.j9,c.JJ,c.On,f.n,h.Ov],styles:["ion-segment-button[_ngcontent-%COMP%]{--color-checked: #61399f;text-transform:none;font-size:12px;--padding-start: 0px;--padding-end: 0px;min-width:min-content}.flex_start[_ngcontent-%COMP%]{align-items:flex-start}"]}),u})()}];let C=(()=>{var r;class u{}return(r=u).\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[s.Bz.forChild(x),s.Bz]}),u})(),A=(()=>{var r;class u{}return(r=u).\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.m,C]}),u})()},5565:(O,_,i)=>{i.d(_,{l:()=>h});var p=i(5861),s=i(553),e=i(5678),U=i(2436),a=i(9862),m=i(4414);let h=(()=>{var c;class f{constructor(t,v,b){this.route=t,this.http=v,this.alertController=b}getUsersCount(t){return this.http.post(s.N.baseUrl+"/admin/getUsersCount",t)}getListingsCount(t){return this.http.post(s.N.baseUrl+"/admin/getListingsCount",t)}getAllListings(t){return this.http.post(s.N.baseUrl+"/admin/getAllListings",t)}getListingBasedOnId(t){return this.http.post(s.N.baseUrl+"/admin/getListingBasedOnId",t)}getAllUsersList(t){return this.http.post(s.N.baseUrl+"/admin/getAllUsersList",t)}getUserBasedOnId(t){return this.http.post(s.N.baseUrl+"/admin/getUserBasedOnId",t)}activeDeActiveListing(t){return this.http.post(s.N.baseUrl+"/admin/activeDeActiveListing",t)}createMaker(t){return this.http.post(s.N.baseUrl+"/admin/createMaker",t)}updateKitchenImages(t){return this.http.post(s.N.baseUrl+"/admin/updateKitchenImages",t)}updateBankDetails(t){return this.http.post(s.N.baseUrl+"/admin/updateBankDetails",t)}getUserOverView(t){return this.http.post(s.N.baseUrl+"/admin/getUserOverView",t)}activeDeActiveUser(t){return this.http.post(s.N.baseUrl+"/admin/activeDeActiveUser",t)}getMakerDashboardData(t){return this.http.post(s.N.baseUrl+"/maker/getMakerDashboardData",t)}addEditListing(t){return this.http.post(s.N.baseUrl+"/maker/addEditListing",t)}deleteListing(t){return this.http.post(s.N.baseUrl+"/maker/deleteListing",t)}changeOrderStatus(t){return this.http.post(s.N.baseUrl+"/maker/changeOrderStatus",t)}updateCustomerDetails(t){return this.http.post(s.N.baseUrl+"/customer/updateCustomerDetails",t)}getCustomerOrders(t){return this.http.post(s.N.baseUrl+"/customer/getCustomerOrders",t)}getAllListingsForCustomer(t){return this.http.post(s.N.baseUrl+"/auth/getAllListingsForCustomer",t)}setFavItem(t){return this.http.post(s.N.baseUrl+"/customer/setFavItem",t)}setUnFavItem(t){return this.http.post(s.N.baseUrl+"/customer/setUnFavItem",t)}getListingForUser(t){return this.http.post(s.N.baseUrl+"/auth/getListingForUser",t)}getCustomerAddress(t){return this.http.post(s.N.baseUrl+"/customer/getCustomerAddress",t)}deleteTempOrder(t){return this.http.post(s.N.baseUrl+"/customer/deleteTempOrder",t)}addCustomerAddress(t){return this.http.post(s.N.baseUrl+"/customer/addCustomerAddress",t)}setDefaultAddress(t){return this.http.post(s.N.baseUrl+"/customer/setDefaultAddress",t)}deleteAddress(t){return this.http.post(s.N.baseUrl+"/customer/deleteAddress",t)}addToCart(t){return this.http.post(s.N.baseUrl+"/customer/addToCart",t)}getCustomerOrderSummary(t){return this.http.post(s.N.baseUrl+"/customer/getCustomerOrderSummary",t)}placeOrder(t){return this.http.post(s.N.baseUrl+"/customer/placeOrder",t)}presentDeleteConfirmation(t,v,b){var x=this;return(0,p.Z)(function*(){return new Promise(function(){var C=(0,p.Z)(function*(A){yield(yield x.alertController.create({header:t,message:v,cssClass:b,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:()=>{A(!1)}},{text:"OK",cssClass:"primary",handler:()=>{A(!0)}}]})).present()});return function(A){return C.apply(this,arguments)}}())})()}}return(c=f).\u0275fac=function(t){return new(t||c)(e.LFG(U.F0),e.LFG(a.eN),e.LFG(m.Br))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),f})()},3609:(O,_,i)=>{i.d(_,{m:()=>a});var p=i(9004),s=i(95),e=i(6814),U=i(5678);let a=(()=>{var m;class h{}return(m=h).\u0275fac=function(f){return new(f||m)},m.\u0275mod=U.oAB({type:m}),m.\u0275inj=U.cJS({imports:[e.ez,p.Pc,s.u5,s.UX,e.ez,p.Pc,s.u5,s.UX]}),h})()}}]);