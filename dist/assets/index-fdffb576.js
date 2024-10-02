import{_ as N,c,r as h,o as a,d as r,f as d,w as T,e as l,x as U,V as F,g as i,E,t as n,P as z,F as k,z as M,h as p,X as P,Q as A,R as L}from"./main-879b312f.js";import{E as j}from"./EvaluationType-b8f3569f.js";const Q={components:{EvaluationType:j},data(){return{change:{status:"1"},strart_evaluate:!1,alert_text:"",answers:{answers:[]},type:2,answer:{color:"00a2ff"},allquestion:[],childs:{},qustions:{},error:{},maxDate:new Date,notanswer:[]}},methods:{Therapeutic(){this.$router.push({name:"answer"})},submit(){},createevalutae(e){console.log(e),c.post("api/evaluations/create",{type:this.type,title:this.answer.title,child_id:this.answer.child_id,specialist_id:localStorage.getItem("user_id"),date:this.answer.date}).then(s=>{this.answer.evaluation_id=s.data.evaluation.id,this.strart_evaluate=!this.strart_evaluate}).catch(s=>{console.log(s.response.data.errors.name),this.error=s.response.data.errors})},anserdata(e,s){console.log(e),console.log(s)},getcolor(e){this.answer.color=e.target.value},getquation(e){c.get(`api/milestone-answers/question/${localStorage.getItem("child_id")}`).then(s=>{console.log(s.data[0].subtests),this.allquestion=s.data})},getage(){c.post("api/milestone-answers/get-age-child",{date:this.answer.date,child_id:this.answer.child_id}).then(e=>{this.answer.child_age=e.data})},collectanswer(e,s){this.answers.answers[s]={question_id:s,score:e.target.value,color:this.answer.color,child_id:this.answer.child_id,date:this.answer.date,child_age:this.answer.child_age,evaluation_id:this.answer.evaluation_id},console.log(this.answers.answers)},getanswer(e,s,V){c.post("/api/milestone-answers",this.answers).then(g=>{c.post(`/api/evaluation-request/change-status/${localStorage.getItem("eavl_id")}`,this.change),this.$router.push({name:"milestone-resulte",params:{id:this.answer.child_id,evla_id:this.answer.evaluation_id}})}).catch(g=>{this.alert_text="please answer all questions",setTimeout(()=>{this.alert_text=""},2500)})},getusers(){c.get("api/child").then(e=>{console.log(localStorage.getItem("child_id")),this.childs=e.data.children,this.answer.child_id=parseInt(localStorage.getItem("child_id")),this.answer.evaluation_id=parseInt(this.$route.params.evaluation)}),c.get("api/mileston-levels").then(e=>{console.log(e.data.data),this.qustions=e.data.data})},createtreatment(){c.post("/api/milestone-answers/check/answers",{child_id:this.answer.child_id,level_id:this.answer.level_id}).then(e=>{console.log(e.data.data),this.notanswer=e.data.data,this.notanswer==""&&this.$toast.add({severity:"success",summary:"Success Message",detail:"Success",life:3e3})}).catch(e=>{console.log(e.response.data.errors.name),this.error=e.response.data.errors})}},mounted(){this.getusers(),this.getquation()}},_=e=>(A("data-v-67e575e0"),e=e(),L(),e),R=_(()=>l("div",null,null,-1)),X={class:"flex flex-column gap-2"},G={for:"username"},H={key:0,class:"mt-1 mb-5 text-red-500"},J={class:"flex flex-column gap-2"},K={for:"username"},O={key:0,class:"mt-1 mb-5 text-red-500"},W={key:0,class:"flex flex-column gap-2"},Y={for:"username"},Z={key:0,class:"mt-1 mb-5 text-red-500"},$={key:1,class:"flex flex-column gap-2"},ee={for:"username"},te={key:0,class:"mt-1 mb-5 text-red-500"},se={key:2,class:"flex flex-column gap-2"},le={for:"username"},oe={class:"flex"},ae={key:0,class:"mt-1 mb-5 text-red-500"},re={class:"col-span-2 flex flex-column gap-2"},ne={style:{border:"1px solid black","border-radius":"5px",padding:"1%"}},ie={class:"text-[black] font-bold"},de=["onChange","name"],ce=_(()=>l("label",{for:"html"},"0",-1)),ue=_(()=>l("br",null,null,-1)),he=["onChange","name"],_e=_(()=>l("label",{for:"css"},"0.5",-1)),me=_(()=>l("br",null,null,-1)),pe=["onChange","name"],ge=_(()=>l("label",{for:"javascript"},"1",-1)),we={key:4,class:"flex flex-column gap-2 w-full"},fe={style:{visibility:"hidden"},for:"username"},ve=_(()=>l("small",{id:"username-help"},null,-1));function be(e,s,V,g,t,u){const q=h("InputText"),C=h("Dropdown"),I=h("Calendar"),S=h("InputNumber"),D=h("ColorPicker"),w=h("Button"),B=h("toast");return a(),r(k,null,[R,d(P,null,{default:T(()=>{var f,v,b,x,y;return[l("div",null,[t.alert_text?(a(),U(F,{key:0,title:"Alert title",text:t.alert_text,closable:"",type:"error",class:"absolute w-full"},null,8,["text"])):i("",!0),l("form",{style:{"max-height":"80vh","overflow-y":"scroll"},"fast-fail":"",ref:"form",onSubmit:s[5]||(s[5]=E((...o)=>u.getanswer&&u.getanswer(...o),["prevent"])),class:"p-[2%] bg-[#FDFDFD] shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-4"},[l("div",X,[l("label",G,n(e.$t("evaluation_name")),1),d(q,{required:"",class:"bg-[#f7f5f5]",modelValue:t.answer.title,"onUpdate:modelValue":s[0]||(s[0]=o=>t.answer.title=o),placeholder:e.$t("evaluation_name")},null,8,["modelValue","placeholder"]),(f=t.error)!=null&&f.title?(a(),r("div",H,n(t.error.title[0]),1)):i("",!0)]),l("div",J,[l("label",K,n(e.$t("child_name")),1),d(C,{filter:"",required:"",id:"pv_id_1",disabled:"",style:{direction:"ltr !important"},modelValue:t.answer.child_id,"onUpdate:modelValue":s[1]||(s[1]=o=>t.answer.child_id=o),"option-value":"id",options:t.childs,optionLabel:"name",placeholder:e.$t("child_name"),class:"w-full bg-[#f7f5f5] [&>div>div>span]:bg-black md:w-14rem"},null,8,["modelValue","options","placeholder"]),(v=t.error)!=null&&v.child_id?(a(),r("div",O,n(t.error.child_id[0]),1)):i("",!0)]),t.answer.child_id?(a(),r("div",W,[l("label",Y,n(e.$t("date")),1),d(I,{"onUpdate:modelValue":[u.getage,s[2]||(s[2]=o=>t.answer.date=o)],style:{width:"100%"},showButtonBar:"",modelValue:t.answer.date,modelModifiers:{number:!0},showIcon:"",placeholder:e.$t("date"),minDate:t.maxDate},null,8,["onUpdate:modelValue","modelValue","placeholder","minDate"]),(b=t.error)!=null&&b.child_age?(a(),r("div",Z,n(t.error.child_age[0]),1)):i("",!0)])):i("",!0),t.answer.date?(a(),r("div",$,[l("label",ee,n(e.$t("age")),1),d(S,{readonly:"",required:"",class:"bg-[#f7f5f5]",modelValue:t.answer.child_age,"onUpdate:modelValue":s[3]||(s[3]=o=>t.answer.child_age=o),placeholder:e.$t("age")},null,8,["modelValue","placeholder"]),(x=t.error)!=null&&x.child_age?(a(),r("div",te,n(t.error.child_age[0]),1)):i("",!0)])):i("",!0),t.answer.child_id&&t.answer.child_age?(a(),r("div",se,[l("label",le,n(e.$t("color")),1),l("div",oe,[d(D,{style:z({"background-color":"#"+t.answer.color}),class:"w-full h-[50px]",modelValue:t.answer.color,"onUpdate:modelValue":s[4]||(s[4]=o=>t.answer.color=o)},null,8,["style","modelValue"]),d(w,{onClick:u.createevalutae,class:"create m-auto w-full h-[50px]",label:e.$t("strart_evaluate")},null,8,["onClick","label"])]),(y=t.error)!=null&&y.color?(a(),r("div",ae,n(t.error.color[0]),1)):i("",!0)])):i("",!0),t.strart_evaluate?(a(!0),r(k,{key:3},M(t.allquestion,o=>(a(),r("div",re,[l("div",ne,[l("h1",ie,n(o.title),1),l("div",null,[l("input",{required:"",onChange:m=>u.collectanswer(m,o.id),style:{border:"1px solid black"},class:"mx-2",type:"radio",name:o.id,value:"0"},null,40,de),p("   "),ce,ue,p("   "),l("input",{required:"",onChange:m=>u.collectanswer(m,o.id),style:{border:"1px solid black"},type:"radio",name:o.id,value:".5"},null,40,he),p("   "),_e,me,p("   "),l("input",{required:"",onChange:m=>u.collectanswer(m,o.id),style:{border:"1px solid black"},type:"radio",name:o.id,value:"1"},null,40,pe),p("   "),ge])])]))),256)):i("",!0),t.strart_evaluate?(a(),r("div",we,[l("label",fe,n(e.$t("gruop_sessaion")),1),d(w,{type:"submit",class:"create m-auto w-full",label:e.$t("submit")},null,8,["label"]),ve])):i("",!0)],544),d(B)])]}),_:1})],64)}const ke=N(Q,[["render",be],["__scopeId","data-v-67e575e0"]]);export{ke as default};
