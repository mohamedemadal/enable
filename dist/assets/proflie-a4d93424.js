import{_ as M,u as N,c as p,D as z,r as c,o as i,x as A,w as m,e as l,f as a,d as r,t as o,g as d,X as T,z as P,h as R,F as j,ak as X}from"./main-3b9fc998.js";import{E as Y}from"./EvaluationType-3c5bdf03.js";const G={components:{EvaluationType:Y},data(){return{child_id:N("child_id",Number),maxDate:new Date,user:{skills:[],department:[]},skills:[],roles:[],departments:[],evalate:{},error:{},deleteDialog:!1,delete_id:"",doctors:{},updatedialog:!1,evaluate_types:[{name:"side profile",id:1},{name:"milestone",id:2},{name:"barrier",id:3}]}},methods:{opennew(){this.updatedialog=!this.updatedialog},tpes(){return[{name:this.$t("driver"),id:1},{name:this.$t("doctor"),id:2},{name:this.$t("Evaluator"),id:3}]},get_request(e){p.get(`api/evaluations/requests/${localStorage.getItem("user_id")}/${e}`).then(s=>{this.user.evaluation_requests=s.data.data})},deleteAction(){p.delete(`api/evaluation-request/${this.delete_id}`).then(e=>{this.getusers(),this.deleteDialog=!this.deleteDialog})},deleteevalution(e){this.delete_id=e,this.deleteDialog=!this.deleteDialog},go_evaluate(e,s){localStorage.setItem("child_id",e),s==1&&this.$router.push({name:"SideProfiles"}),s==2&&this.$router.push({name:"milestone-evaluation",params:{id:e}}),s==3&&this.$router.push({name:"barrier-evaluation",params:{id:e}}),s==4&&this.$router.push({name:"mission-test",params:{id:e}}),s==5&&this.$router.push({name:"carolina-test",params:{id:e}})},serchdata(e){p.get(`api/users/${localStorage.getItem("doctor_id")}/search/evaluations?search=${e}`).then(s=>{this.details=s.data.evaluation_requests})},createevaluate(){p.post("api/evaluation-request",{child_id:localStorage.getItem("child_id"),consultant_id:localStorage.getItem("user_id"),evaluation_type:this.evalate.evaluation_type,date:z(this.evalate.datet).format("Y-MM-DD"),specialist_id:this.evalate.specialist_id}).then(e=>{this.updatedialog=!this.updatedialog,this.$toast.add({severity:"success",summary:"Success Message",detail:"Success",life:3e3})}).catch(e=>{console.log(e.response.data.errors.name),this.error=e.response.data.errors})},getusers(){p.post("/api/roles").then(e=>{this.roles=e.data.roles.data,console.log(users.value)}),p.get("/api/skills").then(e=>{this.skills=e.data.data}),p.get("/api/department").then(e=>{this.departments=e.data.data}),p.get(`api/users/${localStorage.getItem("user_id")}`).then(e=>{console.log(e.data.evaluation_requests),this.user.type=e.data.type,this.user.email=e.data.email,this.user.name=e.data.name,this.user.spotter=e.data.spotter,this.user.title=e.data.title,this.user.image=e.data.image,this.user.role=e.data.roles[0].id,this.user.evaluation_requests=e.data.evaluation_requests,this.user.children=e.data.children;for(let s=0;s<e.data.skills.length;s++)this.user.skills.push(e.data.skills[s].id);for(let s=0;s<e.data.departments.length;s++)this.user.department.push(e.data.departments[s].id)})},editesuser(){const e=new FormData;e.append("name",this.user.name),e.append("email",this.user.email),e.append("title",this.user.title),e.append("password",this.user.password),e.append("image",this.user.file),e.append("role",this.user.role),this.user.spotter&&e.append("spotter",this.user.spotter),this.user.skills&&e.append("skills",this.user.skills),this.user.department&&e.append("department_id",this.user.department),e.append("type",this.user.type),p.post(`/api/users/${localStorage.getItem("user_id")}/edit`,e).then(s=>{console.log(s.data),fetchData()}).catch(s=>{error.value=s.response.data.errors})},uploadFile(e){const s=e.target.files[0],y=new FileReader;y.readAsDataURL(s),y.onload=x=>{this.user.image=x.target.result,this.user.file=s},console.log(this.user.image)},getdoctors(){p.get("api/doctors").then(e=>{this.doctors=e.data.doctors}).catch(e=>{})}},mounted(){this.getusers(),this.getdoctors(),this.child_id=localStorage.getItem("child_id")}},H={class:"absolute z-50 top-1 ltr:right-0-4 rtl:left-4 flex flex-column gap-2"},J={class:"grid grid-cols-2 gap-4"},K={class:"col-span-2"},O=["src"],Q={key:1,onclick:"document.getElementById('filr').click()",class:"m-auto rounded-full",style:{width:"150px",height:"150px"},src:X},W={key:2,class:"mt-1 mb-5 text-red-500"},Z={class:"flex flex-column gap-2 py-1"},$={class:"w-full text-right",for:"username"},ee={key:0,class:"mt-1 mb-5 text-red-500"},te={class:"flex flex-column gap-2 py-1"},se={class:"w-full text-right",for:"username"},le={key:0,class:"mt-1 mb-5 text-red-500"},oe={key:0,class:"flex flex-column gap-2"},ie={class:"w-full text-right",for:"username"},re={key:0,class:"mt-1 mb-5 text-red-500"},ae={key:1,class:"flex flex-column gap-2"},ne={class:"w-full text-right",for:"username"},de={key:0,class:"mt-1 mb-5 text-red-500"},ue={key:2,class:"flex flex-column gap-2"},pe={class:"w-full text-right",for:"username"},ce={key:0,class:"mt-1 mb-5 text-red-500"},me={class:"flex flex-column gap-2 py-1"},he={class:"w-full text-right",for:"username"},fe={key:0,class:"mt-1 mb-5 text-red-500"},_e={class:"flex flex-column gap-2 py-1"},ge={class:"w-full text-right",for:"username"},ve={key:0,class:"mt-1 mb-5 text-red-500"},ye={class:"flex flex-column gap-2 py-1"},be={class:"w-full text-right",for:"username"},xe={key:0,class:"mt-1 mb-5 text-red-500"},ke={class:"flex flex-column gap-2 py-1"},we={class:"w-full text-right",for:"username"},Ve={key:0,class:"mt-1 mb-5 text-red-500"},De={class:"flex-column gap-2 py-1 hidden"},qe={class:"w-full text-right",for:"username"},Se={key:0,class:"mt-1 mb-5 text-red-500"},Ce={class:"w-full text-center"},Ie={class:"grid grid-cols-1 lg:grid-cols-2 gap-4 p-4"},Ue={class:"shadow-md bg-slate-100 rounded-sm p-4 grid grid-cols-3"},Be={class:"col-span-2"},Te={class:"flex py-2"},Le={class:"my-auto font-bold"},Ee={key:0,class:"text-xl px-1 my-auto"},Fe={key:1,class:"text-xl px-1 my-auto"},Me={key:2,class:"text-xl px-1 my-auto"},Ne={key:3,class:"text-xl px-1 my-auto"},ze={key:4,class:"text-xl px-1 my-auto"},Ae={class:"flex py-2"},Pe={class:"my-auto font-bold"},Re={class:"text-xl px-1 my-auto"},je={class:"flex py-2"},Xe={class:"my-auto font-bold"},Ye={class:"text-xl px-1 my-auto"},Ge={class:"flex py-2"},He={class:"my-auto font-bold"},Je={class:"text-xl px-1 my-auto"},Ke={class:"text-center"},Oe={class:"flex align-items-center justify-content-center"},Qe=l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1);function We(e,s,y,x,t,h){const b=c("Dropdown"),f=c("InputText"),k=c("MultiSelect"),_=c("Button"),w=c("TabPanel"),L=c("Dialog"),E=c("toast"),F=c("TabView");return i(),A(T,{class:"card relative"},{default:m(()=>[l("div",H,[a(b,{"onUpdate:modelValue":[h.get_request,s[0]||(s[0]=n=>t.user.child_id=n)],required:"",id:"pv_id_1",style:{direction:"ltr !important"},modelValue:t.user.child_id,"option-value":"id",filter:"",options:t.user.children,optionLabel:"name",placeholder:e.$t("child_name"),class:"bg-[#f7f5f5] [&>div>div>span]:bg-black w-[200px] h-[90%]"},null,8,["onUpdate:modelValue","modelValue","options","placeholder"])]),a(F,{activeIndex:e.active,"onUpdate:activeIndex":s[12]||(s[12]=n=>e.active=n)},{default:m(()=>[a(w,{header:e.$t("student_details")},{default:m(()=>{var n,g,v,V,D,q,S,C,I,U,B;return[l("div",J,[l("div",K,[l("div",null,[t.user.image?(i(),r("img",{key:0,onclick:"document.getElementById('filr').click()",class:"m-auto rounded-full",style:{width:"150px",height:"150px"},src:"https://sawa.sawa.academy/"+t.user.image},null,8,O)):(i(),r("img",Q)),(n=t.error)!=null&&n.image?(i(),r("div",W,o(t.error.image[0]),1)):d("",!0)])]),l("div",Z,[l("label",$,o(e.$t("name")),1),a(f,{required:"",class:"bg-[#f7f5f5] text-center",modelValue:t.user.name,"onUpdate:modelValue":s[1]||(s[1]=u=>t.user.name=u),placeholder:e.$t("name")},null,8,["modelValue","placeholder"]),(g=t.error)!=null&&g.name?(i(),r("div",ee,o(t.error.name[0]),1)):d("",!0)]),l("div",te,[l("label",se,o(e.$t("type")),1),a(b,{required:"",id:"pv_id_1",style:{direction:"ltr !important","text-align":"center !important"},modelValue:t.user.type,"onUpdate:modelValue":s[2]||(s[2]=u=>t.user.type=u),"option-value":"id",filter:"",options:h.tpes(),optionLabel:"name",placeholder:e.$t("type"),class:"w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem"},null,8,["modelValue","options","placeholder"]),(v=t.error)!=null&&v.type?(i(),r("div",le,o(t.error.type[0]),1)):d("",!0)]),t.user.type==0||t.user.type==2?(i(),r("div",oe,[l("label",ie,o(e.$t("skill_name")),1),a(k,{modelValue:t.user.skills,"onUpdate:modelValue":s[3]||(s[3]=u=>t.user.skills=u),filter:"","option-value":"id",options:t.skills,optionLabel:"name",placeholder:e.$t("skill_name"),class:"w-full bg-[#f7f5f5] md:w-20rem"},null,8,["modelValue","options","placeholder"]),(V=t.error)!=null&&V.skills?(i(),r("div",re,o(t.error.skills[0]),1)):d("",!0)])):d("",!0),t.user.type==0||t.user.type==2?(i(),r("div",ae,[l("label",ne,o(e.$t("department")),1),a(k,{modelValue:t.user.department,"onUpdate:modelValue":s[4]||(s[4]=u=>t.user.department=u),filter:"","option-value":"id",options:t.departments,optionLabel:"title",placeholder:e.$t("department"),class:"w-full bg-[#f7f5f5] md:w-20rem"},null,8,["modelValue","options","placeholder"]),(D=t.error)!=null&&D.permissions?(i(),r("div",de,o(t.error.permissions[0]),1)):d("",!0)])):d("",!0),t.user.type==0||t.user.type==2?(i(),r("div",ue,[l("label",pe,o(e.$t("Spotter")),1),a(f,{required:"",class:"bg-[#f7f5f5] text-center",modelValue:t.user.spotter,"onUpdate:modelValue":s[5]||(s[5]=u=>t.user.spotter=u),placeholder:e.$t("Spotter")},null,8,["modelValue","placeholder"]),(q=t.error)!=null&&q.permissions?(i(),r("div",ce,o(t.error.permissions[0]),1)):d("",!0)])):d("",!0),l("div",me,[l("label",he,o(e.$t("email")),1),a(f,{required:"",class:"bg-[#f7f5f5] text-center",modelValue:t.user.email,"onUpdate:modelValue":s[6]||(s[6]=u=>t.user.email=u),placeholder:e.$t("email")},null,8,["modelValue","placeholder"]),(S=t.error)!=null&&S.email?(i(),r("div",fe,o(t.error.email[0]),1)):d("",!0)]),l("div",_e,[l("label",ge,o(e.$t("title")),1),a(f,{required:"",class:"bg-[#f7f5f5] text-center",modelValue:t.user.title,"onUpdate:modelValue":s[7]||(s[7]=u=>t.user.title=u),placeholder:e.$t("title")},null,8,["modelValue","placeholder"]),(C=t.error)!=null&&C.title?(i(),r("div",ve,o(t.error.title[0]),1)):d("",!0)]),l("div",ye,[l("label",be,o(e.$t("password")),1),a(f,{required:"",class:"bg-[#f7f5f5] text-center",modelValue:t.user.password,"onUpdate:modelValue":s[8]||(s[8]=u=>t.user.password=u),placeholder:e.$t("password")},null,8,["modelValue","placeholder"]),(I=t.error)!=null&&I.password?(i(),r("div",xe,o(t.error.password[0]),1)):d("",!0)]),l("div",ke,[l("label",we,o(e.$t("roles")),1),a(b,{required:"",id:"pv_id_1",style:{direction:"ltr !important","text-align":"center !important"},modelValue:t.user.role,"onUpdate:modelValue":s[9]||(s[9]=u=>t.user.role=u),"option-value":"id",filter:"",options:t.roles,optionLabel:"name",placeholder:e.$t("roles"),class:"w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem"},null,8,["modelValue","options","placeholder"]),(U=t.error)!=null&&U.role?(i(),r("div",Ve,o(t.error.role[0]),1)):d("",!0)]),l("div",De,[l("label",qe,o(e.$t("personal_image")),1),a(f,{name:"file",ref:"file",onChange:h.uploadFile,accept:"image/*",id:"filr",type:"file",class:"w-full"},null,8,["onChange"]),(B=t.error)!=null&&B.image?(i(),r("div",Se,o(t.error.image[0]),1)):d("",!0)]),l("div",Ce,[a(_,{onClick:h.editesuser,class:"create m-auto w-[50%] my-4",label:e.$t("submit")},null,8,["onClick","label"])])])]}),_:1},8,["header"]),a(w,{header:e.$t("Consultations_evaluations")},{default:m(()=>[l("div",null,[a(T,null,{default:m(()=>[l("div",Ie,[(i(!0),r(j,null,P(t.user.evaluation_requests,n=>{var g;return i(),r("div",Ue,[l("div",Be,[l("div",Te,[l("h3",Le,o(e.$t("اسم التقييم"))+" :",1),n.evaluation_type==2?(i(),r("p",Ee,"milestone")):d("",!0),n.evaluation_type==1?(i(),r("p",Fe,"side profile")):d("",!0),n.evaluation_type==3?(i(),r("p",Me,"Barrier")):d("",!0),n.evaluation_type==4?(i(),r("p",Ne,"ablls")):d("",!0),n.evaluation_type==5?(i(),r("p",ze,"carolina")):d("",!0)]),l("div",Ae,[l("h3",Pe,o(e.$t("تاريخ التقييم"))+" :",1),l("p",Re,o(n.date),1)]),l("div",je,[l("h3",Xe,o(e.$t("اسم المقييم"))+" :",1),l("p",Ye,o(t.user.name),1)]),l("div",Ge,[l("h3",He,o(e.$t("child_name"))+" :",1),l("p",Je,o((g=n.child)==null?void 0:g.name),1)])]),l("div",Ke,[a(_,{onClick:v=>h.go_evaluate(n.child.id,n.evaluation_type),class:"details m-auto"},{default:m(()=>[R(o(e.$t("strart_evaluate")),1)]),_:2},1032,["onClick"]),a(_,{icon:"pi pi-trash",onClick:v=>h.deleteevalution(n.id),class:"delete m-auto"},null,8,["onClick"])])])}),256))])]),_:1}),l("div",null,[a(L,{visible:t.deleteDialog,"onUpdate:visible":s[11]||(s[11]=n=>t.deleteDialog=n),style:{width:"450px"},header:e.$t("submit"),modal:!0},{footer:m(()=>[a(_,{label:e.$t("no"),icon:"pi pi-times",class:"p-button-text",onClick:s[10]||(s[10]=n=>t.deleteDialog=!1)},null,8,["label"]),a(_,{label:e.$t("yes"),icon:"pi pi-check",class:"p-button-text",onClick:h.deleteAction},null,8,["label","onClick"])]),default:m(()=>[l("div",Oe,[Qe,l("span",null,o(e.$t("هل انت متاكد من ازالة هذا العنصر"))+" >?",1)])]),_:1},8,["visible","header"])]),a(E)])]),_:1},8,["header"])]),_:1},8,["activeIndex"])]),_:1})}const et=M(G,[["render",We]]);export{et as default};
