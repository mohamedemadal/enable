import{_ as x,M as f,A as w,b as v,c as b,r as s,o as n,d as l,f as r,e,t as c,w as y,F as d,z as B,h as k,x as S,B as C}from"./main-e6ca79c6.js";import{A}from"./According-1b93f571.js";import{S as V}from"./Sidbar-541f1f82.js";const E={components:{Map:f,According:A,Sidbar:V,About:w},data(){return{showsider:!1,routername:"",childs:[],parentStore:v(),errors:[]}},methods:{toggle(){this.showsider=!this.showsider},async getChilds(){await b.get("/api/parent/child/all").then(t=>{this.childs=t.data.childs,console.log(t)}).catch(t=>{console.log(t)})}},watch:{"$route.name":function(){this.routername=$route.name,console.log(this.routername)}},mounted(){this.getChilds()}},F={class:"flex justify-between border-b-2 p-2 border-x-cyan-950 border-solid"},M=C('<svg fill="#000000" width="44px" height="44px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M.5 7.42h15v1.25H.5zm0 3.6h15v1.25H.5zm0-7.29h15v1.25H.5z"></path></g></svg>',1),$=[M],z={class:"m-auto w-full"},N={class:"w-full p-2 font-bold text-center text-2xl text-[#6EB7BF]"},R={class:"relative max-w-full max-h-screen flex"},j={class:"flex-1"},G={class:"flex justify-between bg-white py-2 px-1 w-full text-[#6EB7BF] shadow"},H={class:"bg-white text-3xl py-2 text-[#6EB7BF] font-bold"},P={class:"my-auto text-center"},D={class:"overflow-auto",style:{height:"70vh"}};function L(t,i,T,q,a,_){const h=s("Map"),p=s("sidbar"),u=s("router-link"),m=s("according"),g=s("About");return n(),l(d,null,[r(h),e("div",F,[e("div",{class:"col-span-1 text-right m-auto visible md:invisible",onClick:i[0]||(i[0]=o=>_.toggle())},$),e("div",z,[e("p",N,c(t.$t("Profile_personly")),1)])]),e("div",R,[r(p,{sole:a.showsider,name:a.routername},null,8,["sole","name"]),e("div",j,[e("div",G,[e("div",H,c(t.$t("evaluation_result")),1),e("div",P,[r(u,{to:{name:"ReAction"},style:{"background-color":"#135c65"},class:"text-white py-2 px-3 rounded-lg"},{default:y(()=>[k(" اضافه طفل جديد ")]),_:1})])]),e("div",D,[(n(!0),l(d,null,B(a.childs,o=>(n(),S(m,{class:"text-xs block",name:o.name,id:o.id,age:o.age,report_date:o.report_date,report_text:o.report_text},null,8,["name","id","age","report_date","report_text"]))),256))])])]),r(g)],64)}const O=x(E,[["render",L]]);export{O as default};
