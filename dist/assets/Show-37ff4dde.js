import{al as E,bA as U,ao as M,f as a,q as _,bB as N,aw as Y,bC as G,bD as Q,aG as D,az as F,as as T,aO as H,aA as j,aB as L,bE as z,F as I,bF as K,bG as J,aE as q,_ as W,a as X,H as Z,c as b,D as S,r as $,o as p,d as f,w,J as ee,h as te,t as g,$ as se,e as d,E as ae,ag as le,g as C,z as A}from"./main-e6ca79c6.js";import{V as ie}from"./VForm-dc6580d7.js";import{V as oe}from"./VSheet-dc95107c.js";const B=E({name:"VRadio",props:{...U({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,t){let{slots:r}=t;return M(()=>a(N,_(e,{class:"v-radio",type:"radio"}),r)),{}}});const re=E({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...Y(),...G(Q(),["multiple"]),trueIcon:{type:D,default:"$radioOn"},falseIcon:{type:D,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:r,slots:h}=t;const c=F(),l=T(()=>e.id||`radio-group-${c}`),n=H(e,"modelValue");return M(()=>{const[v,u]=j(r),[i,V]=L(e),[s,o]=z({...e,multiple:!1}),m=h.label?h.label({label:e.label,props:{for:l.value}}):e.label;return a(q,_({class:"v-radio-group"},v,i,{modelValue:n.value,"onUpdate:modelValue":k=>n.value=k,id:l.value}),{...h,default:k=>{let{id:y,messagesId:R,isDisabled:x,isReadonly:O}=k;return a(I,null,[m&&a(K,{id:y.value},{default:()=>[m]}),a(J,_(s,{id:y.value,"aria-describedby":R.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:x.value,readonly:O.value,"aria-labelledby":m?y.value:void 0},u,{modelValue:n.value,"onUpdate:modelValue":P=>n.value=P}),h)])}})}),{}}}),de={components:{InputText:X,Calendar:Z},data:()=>({valu:"",NameRules:[e=>e?!0:"This field is required"],title:"",skills:[],skill:{},answers:[],error:{},type:"success",snackbar:!0,load:!1,selected:[],children:[],selectBox:[],c:{},child_id:"",child:"",numberOfMonth:"",skip:[],headerAndQuestions:[],examDate:""}),methods:{fomate(){},goBack(){this.$router.go(-1)},getQuestions(){b.get(`/api/evaluations/${this.$route.params.id}`).then(e=>{this.headerAndQuestions=e.data.evaluation}),b.get(`/api/evaluations/${this.$route.params.id}/show`).then(e=>{this.title=e.data.evaluation.title})},async submit(){this.load=!0,setTimeout(()=>{this.load=!1},3e3);const{valid:e}=await this.$refs.form.validate();e&&(this.answers=[],this.selected.forEach((t,r)=>{this.answers.push({question_id:r,value:t})}),this.examDate=S(new Date).format("YYYY-MM-DD HH:mm"),b.post(`/api/evaluations/${this.$route.params.id}/submit`,{answers:this.answers,child_id:this.child_id,date:this.examDate,skills:this.skills}).then(t=>{t.data.status==200&&(this.child.childInMonths=-1,this.type="success")}).catch(t=>{this.error=t.data,this.type="error"}))},getChildren(){b.get("/api/child").then(e=>{this.children=e.data.children.forEach(t=>{this.selectBox.push({title:t.name,value:t.id})})})},radioChange(e,t,r){let h=0;if(this.skip[t]==null)this.skip[t]=[{id:r,answer:e}];else{let u=this.skip[t];u.forEach(i=>{i.id==r&&(h++,i.answer=e)}),h||(u.push({id:r,answer:e}),this.skip[t]=u)}let c=0,l=0,n=-1,v=-1;Object.entries(this.skip).reverse().forEach(u=>{const[i,V]=u;n=v,v=i;for(const s of V)if(s.answer==1)c++;else{c=0;break}if(c?(this.headerAndQuestions[i].length==c&&l++,c=0):l=0,l==2){for(const s of Object.entries(this.headerAndQuestions)){const[o,m]=s;if(i==o)break;m.forEach(k=>{this.selected[k.questions.id]=1})}this.answers=[],this.selected.forEach((s,o)=>{this.answers.push({question_id:o,value:s})}),b.post(`/api/evaluations/${this.$route.params.id}/${n}/basalAge`,{answers:this.answers,child_id:this.child_id,date:this.examDate,skills:this.skills}).then(s=>{console.log(s.data.resultEvaluation)}),this.$router.push({name:"Children",params:{alert:1}})}})},getallskills(){b.get("/api/skills").then(e=>{this.skill=e.data.data})},getSpecificChildren(){b.get(`/api/child/${this.child_id}/${this.$route.params.id}`).then(e=>{console.log(e.data.child),e.data.child.canDoExam?(this.alert_text="",this.child=e.data.child):(this.alert_text="sorry this child has this evaluate lass than 6 months",this.type="error",this.child=e.data.child,this.child.childInMonths=-1)})}},mounted(){this.getQuestions(),this.getChildren(),this.getallskills(),this.examDate=S(new Date).format("YYYY-MM-DD HH:mm"),console.log(this.examDate)}},ne={class:"text-center"},ue={class:"grid grid-cols-1 lg:grid-cols-2 gap-5"},he={class:"flex flex-column gap-2 py-2"},ce={class:"w-full text-right",for:"username"},me={key:0,class:"mt-1 mb-5 text-red-500"},pe={class:"flex flex-column gap-2 py-2"},fe={class:"w-full text-right",for:"username"},ge={key:0,class:"mt-1 mb-5 text-red-500"},be={key:0},ve={class:"font-weight-bold mb-3 mx-7"},Ve={class:"border border-1 rounded pa-5"},ke={class:"mb-3"},we=d("div",{class:"mb-7"},null,-1);function ye(e,t,r,h,c,l){const n=$("Calendar"),v=$("MultiSelect"),u=$("Button");return p(),f("div",null,[a(se,{height:"45",class:"mb-5 text-white",color:"#A9AB7F",onClick:l.goBack},{default:w(()=>[a(ee,{start:"",icon:"mdi-arrow-left"}),te(" "+g(e.$t("back")),1)]),_:1},8,["onClick"]),a(oe,{"max-width":"1200",class:"mx-auto"},{default:w(()=>[d("h1",ne,g(e.title),1),a(ie,{"fast-fail":"",ref:"form",onSubmit:ae(l.submit,["prevent"]),class:"shadow-lg lg:p-[2%]"},{default:w(()=>{var i,V;return[a(le,{label:"Child",modelValue:e.child_id,"onUpdate:modelValue":[t[0]||(t[0]=s=>e.child_id=s),l.getSpecificChildren],items:e.selectBox},null,8,["modelValue","onUpdate:modelValue","items"]),d("div",ue,[d("div",he,[d("label",ce,g(e.$t("created_at")),1),a(n,{style:{width:"100%"},modelValue:e.examDate,"onUpdate:modelValue":t[1]||(t[1]=s=>e.examDate=s),onChange:t[2]||(t[2]=s=>l.fomate()),"date-format":"dd-mm-yy",showIcon:"",rules:e.NameRules,"show-time":!0},null,8,["modelValue","rules"]),(i=e.error)!=null&&i.permissions?(p(),f("div",me,g(e.error.permissions[0]),1)):C("",!0)]),d("div",pe,[d("label",fe,g(e.$t("skill_add")),1),a(v,{modelValue:e.skills,"onUpdate:modelValue":t[3]||(t[3]=s=>e.skills=s),filter:"","option-value":"id",optionLabel:"name",options:e.skill,placeholder:e.$t("skill_add"),class:"w-full md:w-20rem"},null,8,["modelValue","options","placeholder"]),(V=e.error)!=null&&V.permissions?(p(),f("div",ge,g(e.error.permissions[0]),1)):C("",!0)])]),(p(!0),f(I,null,A(Object.values(e.headerAndQuestions).reverse(),s=>(p(),f("div",null,[s[0].min_age<=this.child.childInMonths?(p(),f("div",be,[d("ul",null,[d("li",ve,g(s[0].title),1)]),(p(!0),f(I,null,A(s,o=>(p(),f("div",Ve,[d("div",ke,g(o.questions.title),1),a(re,{modelValue:e.selected[o.questions.id],"onUpdate:modelValue":m=>e.selected[o.questions.id]=m,onChange:m=>l.radioChange(e.selected[o.questions.id],o.questions.evaluation_header_id,o.questions.id),rules:e.NameRules},{default:w(()=>[a(B,{label:"True",value:"1"}),a(B,{label:"False",value:"0"})]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","rules"])]))),256))])):C("",!0),we]))),256)),a(u,{loading:e.load,type:"submit",class:"create m-auto w-[50%] my-4",label:e.$t("submit")},null,8,["loading","label"])]}),_:1},8,["onSubmit"])]),_:1})])}const Ie=W(de,[["render",ye]]);export{Ie as default};
