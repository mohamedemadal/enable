import{_ as P,c,r as u,o as l,d as a,f as d,w as m,e as o,x as R,V as z,g as i,E as A,t as r,P as E,F as p,z as v,X as L,Q as j,R as Q}from"./main-94287103.js";import{V as X}from"./VForm-ad682301.js";const G="/assets/hhh-e88c7662.jfif",H="/assets/nnn-0bb0e021.png";const J={components:{},data(){return{change:{status:"1"},strart_evaluate:!1,alert_text:"",answers:{answers:[]},type:4,score:[],answer:{color:"00a2ff"},allquestion:{},childs:{},qustions:{},error:{},maxDate:new Date,notanswer:[]}},methods:{Therapeutic(){this.$router.push({name:"answer"})},showContrast(){this.$toast.add({severity:"success",summary:"Success Message",detail:"Message Content",life:3e3})},getanswerscore(e,t,S){console.log(e.value),this.answer.mission_id=t,this.answers.answers[t]={mission_id:t,score:e.value,color:this.answer.color,child_id:this.answer.child_id,date:this.answer.date,child_age:this.answer.child_age,evaluation_id:this.answer.evaluation_id},console.log(this.answers.answers)},createevalutae(e){console.log(e),c.post("api/evaluations/create",{type:4,title:this.answer.title,child_id:this.answer.child_id,specialist_id:localStorage.getItem("user_id"),date:this.answer.date}).then(t=>{this.answer.evaluation_id=t.data.evaluation.id,this.strart_evaluate=!this.strart_evaluate})},anserdata(e,t){console.log(e),console.log(t)},getcolor(e){this.answer.color=e.target.value},getquation(e){c.get("api/able-mission/1").then(t=>{console.log(t.data.data),this.allquestion=t.data.data})},getage(){c.post("api/milestone-answers/get-age-child",{date:this.answer.date,child_id:this.answer.child_id}).then(e=>{this.answer.child_age=e.data})},getanswer(){c.post("/api/able-answer",this.answers).then(e=>{this.change_status,c.post(`/api/evaluation-request/change-status/${localStorage.getItem("eavl_id")}`,this.change),this.$router.push({name:"ablls-resulte",params:{id:this.answer.evaluation_id}})}).catch(e=>{this.alert_text="please answer all questions",setTimeout(()=>{this.alert_text=""},2500)})},change_status(){c.post("/api/evaluation-request/change-status",this.answers)},getusers(){c.get("api/child").then(e=>{this.childs=e.data.children,this.answer.child_id=parseInt(localStorage.getItem("child_id")),this.answer.evaluation_id=parseInt(this.$route.params.evaluation)}),c.get("api/able-category/grouped/category").then(e=>{console.log(e.data.data),this.qustions=e.data.data})},createtreatment(){c.post("/api/milestone-answers/check/answers",{child_id:this.answer.child_id,level_id:this.answer.level_id}).then(e=>{console.log(e.data.data),this.notanswer=e.data.data,this.notanswer==""&&this.$toast.add({severity:"success",summary:"Success Message",detail:"Success",life:3e3})}).catch(e=>{console.log(e.response.data.errors.name),this.error=e.response.data.errors})}},mounted(){this.getusers(),this.getquation()}},g=e=>(j("data-v-855ac174"),e=e(),Q(),e),K=g(()=>o("div",null,null,-1)),O={class:"flex flex-column gap-2"},W={for:"username"},Y={key:0,class:"mt-1 mb-5 text-red-500"},Z={class:"flex flex-column gap-2"},$={for:"username"},ee={key:0,class:"mt-1 mb-5 text-red-500"},se={key:0,class:"flex flex-column gap-2"},te={for:"username"},le={key:0,class:"mt-1 mb-5 text-red-500"},oe={key:1,class:"flex flex-column gap-2"},ae={for:"username"},ne={key:0,class:"mt-1 mb-5 text-red-500"},re={key:2,class:"flex flex-column gap-2"},ie={for:"username"},de={class:"flex"},ce={key:0,class:"mt-1 mb-5 text-red-500"},ue={key:3,class:"col-span-2"},he=["href"],_e={class:"col-span-2 flex flex-column gap-2"},me={style:{border:"1px solid black"},class:"p-2"},pe=["id"],ge={class:"text-base font-semibold"},we={class:"py-2 px-4"},fe=g(()=>o("img",{src:G,height:"30",width:"30"},null,-1)),ve=g(()=>o("img",{src:H,height:"34",width:"34"},null,-1)),be={key:5,class:"flex flex-column gap-2 w-full"},ye={style:{visibility:"hidden"},for:"username"},xe=g(()=>o("small",{id:"username-help"},null,-1));function Ve(e,t,S,ke,s,_){const B=u("InputText"),D=u("Dropdown"),U=u("Calendar"),F=u("InputNumber"),T=u("ColorPicker"),b=u("Button"),q=u("Rating"),M=u("toast");return l(),a(p,null,[K,d(L,null,{default:m(()=>[o("div",null,[s.alert_text?(l(),R(z,{key:0,title:"Alert title",text:s.alert_text,closable:"",type:"error",class:"absolute w-full"},null,8,["text"])):i("",!0),d(X,{style:{"max-height":"80vh","overflow-y":"scroll"},"fast-fail":"",ref:"form",onSubmit:A(e.validation,["prevent"]),class:"p-[2%] bg-[#FDFDFD] shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-4"},{default:m(()=>{var y,x,V,k,C;return[o("div",O,[o("label",W,r(e.$t("evaluation_name")),1),d(B,{invalid:"",class:"bg-[#f7f5f5]",modelValue:s.answer.title,"onUpdate:modelValue":t[0]||(t[0]=n=>s.answer.title=n),placeholder:e.$t("evaluation_name")},null,8,["modelValue","placeholder"]),(y=s.error)!=null&&y.title?(l(),a("div",Y,r(s.error.title[0]),1)):i("",!0)]),o("div",Z,[o("label",$,r(e.$t("child_name")),1),d(D,{disabled:"",filter:"",required:"",id:"pv_id_1",style:{direction:"ltr !important"},modelValue:s.answer.child_id,"onUpdate:modelValue":t[1]||(t[1]=n=>s.answer.child_id=n),"option-value":"id",options:s.childs,optionLabel:"name",placeholder:e.$t("child_name"),class:"w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem"},null,8,["modelValue","options","placeholder"]),(x=s.error)!=null&&x.child_id?(l(),a("div",ee,r(s.error.child_id[0]),1)):i("",!0)]),s.answer.child_id?(l(),a("div",se,[o("label",te,r(e.$t("date")),1),d(U,{"onUpdate:modelValue":[_.getage,t[2]||(t[2]=n=>s.answer.date=n)],style:{width:"100%"},showButtonBar:"",modelValue:s.answer.date,modelModifiers:{number:!0},showIcon:"",placeholder:e.$t("date")},null,8,["onUpdate:modelValue","modelValue","placeholder"]),(V=s.error)!=null&&V.child_age?(l(),a("div",le,r(s.error.child_age[0]),1)):i("",!0)])):i("",!0),s.answer.date?(l(),a("div",oe,[o("label",ae,r(e.$t("age")),1),d(F,{readonly:"",required:"",class:"bg-[#f7f5f5]",modelValue:s.answer.child_age,"onUpdate:modelValue":t[3]||(t[3]=n=>s.answer.child_age=n),placeholder:e.$t("age")},null,8,["modelValue","placeholder"]),(k=s.error)!=null&&k.child_age?(l(),a("div",ne,r(s.error.child_age[0]),1)):i("",!0)])):i("",!0),s.answer.child_age&&s.answer.title?(l(),a("div",re,[o("label",ie,r(e.$t("color")),1),o("div",de,[d(T,{style:E({"background-color":"#"+s.answer.color}),class:"w-full h-[50px]",modelValue:s.answer.color,"onUpdate:modelValue":t[4]||(t[4]=n=>s.answer.color=n)},null,8,["style","modelValue"]),d(b,{onClick:_.createevalutae,class:"create m-auto w-full h-[50px]",label:e.$t("strart_evaluate")},null,8,["onClick","label"])]),(C=s.error)!=null&&C.color?(l(),a("div",ce,r(s.error.color[0]),1)):i("",!0)])):i("",!0),s.strart_evaluate?(l(),a("div",ue,[(l(!0),a(p,null,v(s.qustions,(n,w)=>(l(),a("a",{style:{color:"blue"},class:"text-xl mx-[2%] underline",href:"#"+w},r(n.category),9,he))),256))])):i("",!0),s.strart_evaluate?(l(!0),a(p,{key:4},v(s.qustions,(n,w)=>(l(),a("div",_e,[o("div",me,[o("a",{id:w,class:"text-xl font-bold underline text-blue-900 py-1"},r(n.category),9,pe),(l(!0),a(p,null,v(n.missions,(h,N)=>{var I;return l(),a("div",null,[o("h3",ge,r(h.question),1),o("div",we,[d(q,{onChange:f=>_.getanswerscore(f,h.id,N),modelValue:s.score[h.id],"onUpdate:modelValue":f=>s.score[h.id]=f,cancel:!1,stars:(I=h==null?void 0:h.benchmarks)==null?void 0:I.length},{onicon:m(()=>[fe]),officon:m(()=>[ve]),_:2},1032,["onChange","modelValue","onUpdate:modelValue","stars"])])])}),256))])]))),256)):i("",!0),s.strart_evaluate?(l(),a("div",be,[o("label",ye,r(e.$t("gruop_sessaion")),1),d(b,{onClick:_.getanswer,class:"create m-auto w-full",label:e.$t("submit")},null,8,["onClick","label"]),xe])):i("",!0)]}),_:1},8,["onSubmit"]),d(M)])]),_:1})],64)}const Se=P(J,[["render",Ve],["__scopeId","data-v-855ac174"]]);export{Se as default};
