"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7426],{7426:(Q,P,u)=>{u.r(P),u.d(P,{ProfilePageModule:()=>J});var r=u(95),Z=u(3609),_=u(209),p=u(5861),e=u(6242),f=u(6814),k=u(6593),D=u(5565),I=u(185),l=u(9004);const C=["segment"];function N(o,s){if(1&o&&e._UZ(0,"img",32),2&o){const n=e.oxw(2);let i;e.Q6J("src",null==(i=n.userDataForm.get("image"))?null:i.value,e.LSH)}}function M(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"label",33)(1,"input",34),e.NdJ("change",function(t){e.CHM(n);const a=e.oxw(2);return e.KtG(a.onFileSelected(t))}),e.qZA(),e._uU(2," Choose Photo* "),e.qZA()}}function T(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"label",35)(1,"input",34),e.NdJ("change",function(t){e.CHM(n);const a=e.oxw(2);return e.KtG(a.onFileSelected(t))}),e.qZA(),e._uU(2," Change Photo "),e.qZA()}}function A(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"div")(1,"ion-row",15)(2,"ion-col")(3,"div",16)(4,"div",17),e.YNc(5,N,1,1,"img",18)(6,M,3,0,"label",19),e.qZA(),e.YNc(7,T,3,0,"label",20),e.qZA()()(),e.TgZ(8,"form",21)(9,"div")(10,"ion-card",22)(11,"ion-item")(12,"ion-label",23),e._uU(13,"Name*"),e.qZA(),e._UZ(14,"ion-input",24),e.qZA()(),e.TgZ(15,"ion-card",22)(16,"ion-item")(17,"ion-label",23),e._uU(18,"Email*"),e.qZA(),e._UZ(19,"ion-input",25),e.qZA()(),e.TgZ(20,"ion-card",22)(21,"ion-item")(22,"ion-label",23),e._uU(23,"Mobile*"),e.qZA(),e._UZ(24,"ion-input",26),e.qZA()(),e.TgZ(25,"ion-card",22)(26,"ion-item")(27,"ion-label",23),e._uU(28,"PIN*"),e.qZA(),e._UZ(29,"ion-input",27),e.qZA()(),e.TgZ(30,"ion-card",22)(31,"ion-item")(32,"ion-label",23),e._uU(33,"Location*"),e.qZA(),e._UZ(34,"ion-input",28),e.qZA()(),e.TgZ(35,"ion-card",29)(36,"ion-item")(37,"ion-label",23),e._uU(38,"Bio*"),e.qZA(),e._UZ(39,"ion-textarea",30),e.qZA()()()(),e.TgZ(40,"ion-button",31),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.saveProfile())}),e._uU(41,"Save"),e.qZA()()}if(2&o){const n=e.oxw();let i,t,a;e.xp6(5),e.Q6J("ngIf",null==n.userDataForm||null==(i=n.userDataForm.get("image"))?null:i.value),e.xp6(1),e.Q6J("ngIf",!(null!=(t=n.userDataForm.get("image"))&&t.value)),e.xp6(1),e.Q6J("ngIf",null==(a=n.userDataForm.get("image"))?null:a.value),e.xp6(1),e.Q6J("formGroup",n.userDataForm),e.xp6(16),e.Q6J("disabled","maker"==(null==n.userData?null:n.userData.role)),e.xp6(5),e.Q6J("disabled","maker"!=(null==n.userData?null:n.userData.role))}}function y(o,s){if(1&o){const n=e.EpF();e.ynx(0),e.TgZ(1,"div",45)(2,"ion-icon",46),e.NdJ("click",function(){const a=e.CHM(n).index,c=e.oxw(2);return e.KtG(c.removeImage(a))}),e.qZA(),e._UZ(3,"img",47),e.qZA(),e.BQk()}if(2&o){const n=s.$implicit,i=s.index;e.xp6(3),e.MGl("alt","Selected image ",i+1,""),e.Q6J("src",n.image,e.LSH)}}function F(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"div")(1,"ion-row")(2,"ion-col",36)(3,"div",37),e.NdJ("click",function(){e.CHM(n);const t=e.MAs(5);return e.KtG(t.click())}),e.TgZ(4,"input",38,39),e.NdJ("change",function(t){e.CHM(n);const a=e.oxw();return e.KtG(a.addMediaImages(t))}),e.qZA(),e._UZ(6,"ion-ripple-effect",40)(7,"ion-icon",41),e.TgZ(8,"ion-text",42),e._uU(9,"Add Image"),e.qZA()(),e.TgZ(10,"div",43),e.YNc(11,y,4,2,"ng-container",44),e.qZA()()(),e.TgZ(12,"ion-button",31),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.saveMedia())}),e._uU(13,"Save"),e.qZA()()}if(2&o){const n=e.oxw();e.xp6(11),e.Q6J("ngForOf",n.mediaImages)}}function q(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"div")(1,"form",21)(2,"div")(3,"ion-card",48)(4,"ion-item")(5,"ion-label",23),e._uU(6,"Comission*"),e.qZA(),e._UZ(7,"ion-input",49),e.qZA()(),e.TgZ(8,"ion-card",22)(9,"ion-item")(10,"ion-label",23),e._uU(11,"Account Name*"),e.qZA(),e._UZ(12,"ion-input",50),e.qZA()(),e.TgZ(13,"ion-card",22)(14,"ion-item")(15,"ion-label",23),e._uU(16,"Account Number*"),e.qZA(),e._UZ(17,"ion-input",51),e.qZA()(),e.TgZ(18,"ion-row")(19,"ion-col")(20,"ion-button",52),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.setAccountType("savings"))}),e._uU(21,"Savings"),e.qZA()(),e.TgZ(22,"ion-col")(23,"ion-button",52),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.setAccountType("current"))}),e._uU(24,"Current"),e.qZA()()(),e.TgZ(25,"ion-card",22)(26,"ion-item")(27,"ion-label",23),e._uU(28,"Bank Name*"),e.qZA(),e._UZ(29,"ion-input",53),e.qZA()(),e.TgZ(30,"ion-card",22)(31,"ion-item")(32,"ion-label",23),e._uU(33,"Branch*"),e.qZA(),e._UZ(34,"ion-input",54),e.qZA()(),e.TgZ(35,"ion-card",22)(36,"ion-item")(37,"ion-label",23),e._uU(38,"IFSC Code*"),e.qZA(),e._UZ(39,"ion-input",55),e.qZA()()()(),e.TgZ(40,"ion-button",31),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.submitProfile())}),e._uU(41,"Submit"),e.qZA()()}if(2&o){const n=e.oxw();let i,t;e.xp6(1),e.Q6J("formGroup",n.bankDetailsForm),e.xp6(19),e.Q6J("ngClass","savings"==(null==(i=n.bankDetailsForm.get("accountType"))?null:i.value)?"selected":""),e.xp6(3),e.Q6J("ngClass","current"==(null==(t=n.bankDetailsForm.get("accountType"))?null:t.value)?"selected":"")}}const U=[{path:"",component:(()=>{var o;class s{constructor(i,t,a,c,d,m,h){this.router=i,this.fb=t,this.location=a,this.sanitizer=c,this.adminService=d,this.authService=m,this.activatedroute=h,this.selectedSegment="profile",this.profilePhoto="",this.mediaImages=[],this.userDataForm=this.fb.group({userName:["",r.kI.required],email:["",r.kI.required],mobile:["",r.kI.required],pin:["",r.kI.required],city:["",r.kI.required],bio:"",image:["",r.kI.required],imageName:[""],imageId:""}),this.mediaData=this.fb.group({mediaImages:["",r.kI.required]}),this.bankDetailsForm=this.fb.group({commission:["",r.kI.required],accountName:["",r.kI.required],accountNumber:["",r.kI.required],accountType:["",r.kI.required],bankName:["",r.kI.required],branch:["",r.kI.required],ifscCode:["",r.kI.required]})}ngOnInit(){}ionViewWillEnter(){var i=this;this.bankDetailsForm.reset(),this.userDataForm.reset(),this.mediaImages=[],this.selectedSegment="profile",this.segment.value="profile",this._id=this.router.url.split("/")[2],this._id&&this.adminService.getUserBasedOnId({_id:this._id}).subscribe(function(){var t=(0,p.Z)(function*(a){a.success?(i.userData=a.data||{},i._id=i.userData._id,i.updateMakerForms("")):i.router.navigate(["/adminDashboard"])});return function(a){return t.apply(this,arguments)}}(),t=>{console.log(t)})}setAccountType(i){var t;null===(t=this.bankDetailsForm.get("accountType"))||void 0===t||t.setValue(i)}saveProfile(){var i=this;this.userDataForm.valid&&this.adminService.createMaker({...this.userDataForm.value,_id:this._id}).subscribe(function(){var t=(0,p.Z)(function*(a){a.success&&(i.userData=a.data||{},i._id=i.userData._id,i.updateMakerForms("media"))});return function(a){return t.apply(this,arguments)}}(),t=>{console.log(t)})}saveMedia(){this.adminService.updateKitchenImages({mobileNumber:this.userDataForm.value.mobile,image:this.mediaImages,_id:this._id}).subscribe(i=>{i.success&&(this.userData=i.data||{},this._id=this.userData._id,this.updateMakerForms("bank"))},i=>{console.log(i)})}onFileSelected(i){const a=i.target.files;a&&a.length>0&&this.uploadPhoto(a[0])}uploadPhoto(i){if(i&&this.userDataForm&&this.userDataForm.get("image")){const t=new FileReader;t.onload=a=>{this.userDataForm.patchValue({image:a.target.result,imageName:i.name,imageId:""})},t.readAsDataURL(i)}}addMediaImages(i){const a=i.target.files;a&&a.length>0&&this.addMultipleMediaImages(a)}addMultipleMediaImages(i){for(let t=0;t<i.length;t++){const a=i[t],c=new FileReader;c.onload=d=>{this.mediaImages.push({image:d.target.result,imageName:a.name,imageId:""})},c.readAsDataURL(a)}}submitProfile(){if(this.bankDetailsForm.valid&&this.userDataForm.valid&&this.userData._id){let i={...this.bankDetailsForm.value,...this.userDataForm.value,_id:this.userData._id};this.adminService.updateBankDetails(i).subscribe(t=>{if(t.success){let a=localStorage.getItem("userData");"admin"==JSON.parse(a).role?this.router.navigate(["/allUsers"]):(localStorage.setItem("userData",JSON.stringify(t.data)),this.router.navigate(["/makerDashboard"]))}},t=>{console.log(t)})}}removeImage(i){this.mediaImages.splice(i,1)}updateMakerForms(i=""){var t=this;return(0,p.Z)(function*(){var a,c;let d=yield t.authService.getLogoImageById({fileId:t.userData.profileId}),m="",h=null==d||null===(a=d.data)||void 0===a?void 0:a.name;d.success||(m=""),"svg+xml"==d.data.mimetype&&(m=yield t.sanitizer.bypassSecurityTrustResourceUrl(`data:image/svg+xml;base64,${d.data.data}`)),m=`data:image/jpg;base64,${d.data.data}`,t.userData.image=m,t.userData.imageName=h,t.mediaImages=[],null===(c=t.userData.kitchenImages)||void 0===c||c.map(function(){var w=(0,p.Z)(function*(v){var x;let g=yield t.authService.getLogoImageById({fileId:v}),O=null==g||null===(x=g.data)||void 0===x?void 0:x.name,b="";g.success||(b=""),"svg+xml"==g.data.mimetype&&(b=yield t.sanitizer.bypassSecurityTrustResourceUrl(`data:image/svg+xml;base64,${g.data.data}`)),b=`data:image/jpg;base64,${g.data.data}`,t.mediaImages.push({image:b,imageName:O,imageId:v})});return function(v){return w.apply(this,arguments)}}()),t.userDataForm.patchValue({userName:t.userData.userName,email:t.userData.email,mobile:t.userData.mobileNumber,pin:t.userData.pin,city:t.userData.address,bio:t.userData.bio,image:m,imageName:h,imageId:t.userData.profileId}),t.bankDetailsForm.patchValue({commission:t.userData.commission,accountName:t.userData.accountName,accountNumber:t.userData.accountNumber,accountType:t.userData.accountType,bankName:t.userData.bankName,branch:t.userData.branch,ifscCode:t.userData.ifscCode}),i&&(t.selectedSegment=i,t.segment.value=i)})()}navigateBackToMakersList(){var i=this;return(0,p.Z)(function*(){let t=yield localStorage.getItem("userData");t=JSON.parse(t),i.router.navigate("maker"==t.role?["/makerDashboard"]:["/allUsers"])})()}}return(o=s).\u0275fac=function(i){return new(i||o)(e.Y36(_.F0),e.Y36(r.qu),e.Y36(f.Ye),e.Y36(k.H7),e.Y36(D.l),e.Y36(I.u),e.Y36(_.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],viewQuery:function(i,t){if(1&i&&e.Gf(C,5),2&i){let a;e.iGM(a=e.CRH())&&(t.segment=a.first)}},decls:24,vars:7,consts:[[2,"box-shadow","none","padding","10px",3,"translucent"],["size","1.5",2,"text-align","left"],["name","person-circle-outline",1,"kd_svg_size"],["size","9",2,"padding","0px"],[2,"padding","0px","--background","white","background-color","white"],["mode","md",3,"ngModel","ngModelChange"],["segment",""],["value","profile"],["value","media",3,"disabled"],["value","bank",3,"disabled"],["size","1.5",2,"text-align","right",3,"click"],["name","close-circle-outline",1,"kd_svg_size"],[2,"height","100%"],[2,"height","100%","padding","20px"],[4,"ngIf"],[2,"border-bottom","none !important","width","100%"],[1,"kd_col_center_align",2,"flex-direction","column"],[1,"profile-photo-container"],[3,"src",4,"ngIf"],["class","upload-label",4,"ngIf"],["class","change-file-label",4,"ngIf"],[3,"formGroup"],[1,"input_selection",2,"display","grid","align-items","center"],["position","stacked"],["formControlName","userName","aria-label","Name","placeholder","Enter Name"],["formControlName","email","aria-label","Email","placeholder","Enter Email"],["formControlName","mobile","aria-label","Mobile","placeholder","Enter Mobile",3,"disabled"],["formControlName","pin","aria-label","pin","placeholder","Enter PIN",3,"disabled"],["formControlName","city","aria-label","Location","placeholder","Enter Location"],[1,"input_selection",2,"display","grid","align-items","center","height","112px","padding-top","0px"],["formControlName","bio","aria-label","Bio","maxlength","200",2,"font-size","18px"],[1,"kd_save_button",3,"click"],[3,"src"],[1,"upload-label"],["type","file","accept","image/*",3,"change"],[1,"change-file-label"],[2,"padding","0px"],[1,"add_img_div","ion-activatable","ripple-parent",3,"click"],["type","file","accept","image/*","multiple","",2,"display","none",3,"change"],["fileInput",""],[2,"color","#dfd9f1"],["name","camera-outline",2,"height","58px","width","58px"],[2,"font-size","16px"],[1,"selected-images"],[4,"ngFor","ngForOf"],[1,"image-container"],["name","close",3,"click"],[3,"src","alt"],[1,"input_selection",2,"display","grid","align-items","center","width","50%","margin-top","0px"],["type","number","formControlName","commission","aria-label","Comission","placeholder","Eg: 0%"],["formControlName","accountName","aria-label","Account Name","placeholder","Enter Name"],["formControlName","accountNumber","aria-label","Account Number","placeholder","Enter Account Number"],[3,"ngClass","click"],["formControlName","bankName","aria-label","Bank Name","placeholder","Enter Bank Name"],["formControlName","branch","aria-label","Branch","placeholder","Enter Branch"],["formControlName","ifscCode","aria-label","IFSC Code","placeholder","Enter IFSC"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-row")(2,"ion-col",1),e._UZ(3,"ion-icon",2),e.qZA(),e.TgZ(4,"ion-col",3)(5,"ion-toolbar",4)(6,"ion-segment",5,6),e.NdJ("ngModelChange",function(c){return t.selectedSegment=c}),e.TgZ(8,"ion-segment-button",7)(9,"ion-label"),e._uU(10,"Profile"),e.qZA()(),e.TgZ(11,"ion-segment-button",8)(12,"ion-label"),e._uU(13,"Media"),e.qZA()(),e.TgZ(14,"ion-segment-button",9)(15,"ion-label"),e._uU(16," Bank Account"),e.qZA()()()()(),e.TgZ(17,"ion-col",10),e.NdJ("click",function(){return t.navigateBackToMakersList()}),e._UZ(18,"ion-icon",11),e.qZA()()(),e.TgZ(19,"ion-content",12)(20,"div",13),e.YNc(21,A,42,6,"div",14)(22,F,14,1,"div",14)(23,q,42,3,"div",14),e.qZA()()),2&i&&(e.Q6J("translucent",!0),e.xp6(6),e.Q6J("ngModel",t.selectedSegment),e.xp6(5),e.Q6J("disabled","profile"===t.selectedSegment),e.xp6(3),e.Q6J("disabled","media"===t.selectedSegment||"profile"),e.xp6(7),e.Q6J("ngIf","profile"===t.selectedSegment),e.xp6(1),e.Q6J("ngIf","media"===t.selectedSegment),e.xp6(1),e.Q6J("ngIf","bank"===t.selectedSegment))},dependencies:[f.mk,f.sg,f.O5,l.YG,l.PM,l.wI,l.W2,l.Gu,l.gu,l.pK,l.Ie,l.Q$,l.H$,l.Nd,l.cJ,l.GO,l.yW,l.g2,l.sr,l.as,l.QI,l.j9,r._Y,r.JJ,r.JL,r.nD,r.On,r.sg,r.u],styles:[".input_selection[_ngcontent-%COMP%]{border:solid 2px black;border-radius:14px;height:70px;margin:20px 0;padding:15px 10px 10px;box-shadow:none}ion-label[_ngcontent-%COMP%]{font-size:16px!important}ion-item[_ngcontent-%COMP%]{--border-style: none}.selected[_ngcontent-%COMP%]{--background: #AA4A44;color:#fff}.profile-photo-container[_ngcontent-%COMP%]{position:relative;width:150px;height:150px;overflow:hidden}.profile-photo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:50%}.upload-label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;width:100%;height:100%;cursor:pointer;border:2px dashed #ccc;border-radius:50%}.upload-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.change-file-label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:150px;height:40px;cursor:pointer;background-color:#f5f5f5;border:2px dashed #ccc;border-radius:4px;margin-top:10px}.change-file-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}ion-segment-button[_ngcontent-%COMP%]{text-transform:none;min-width:65px;font-weight:700}ion-segment[_ngcontent-%COMP%]{align-items:baseline}.add_img_div[_ngcontent-%COMP%]{height:180px;width:100%;background:rgb(243,246,248);border-radius:9px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:20px}ion-input[_ngcontent-%COMP%]{font-size:18px}ion-label[_ngcontent-%COMP%]{padding-top:5px!important}.selected-images[_ngcontent-%COMP%]{max-height:350px;overflow-y:auto;display:flex;flex-wrap:wrap;gap:10px;border:solid 1px black;padding:10px;margin-bottom:20px}.selected-images[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{position:relative}.selected-images[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   ion-icon[name=close][_ngcontent-%COMP%]{position:absolute;top:5px;right:5px;font-size:20px;cursor:pointer}"]}),s})()}];let S=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[_.Bz.forChild(U),_.Bz]}),s})(),J=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[Z.m,r.UX,S]}),s})()}}]);