import{_ as m,c as d,o as e,x as _,w as g,e as s,d as t,z as i,t as c,F as n,O as p,P as h,g as f,X as x}from"./main-ecbaeb3e.js";const w={name:"SquareGrid",data(){return{colums:2,color:"bg-[red]",mainSquares:[],table_resulte:[]}},methods:{getresulte(){d.get(`api/able-category/flow-chart/${this.$route.params.id}`).then(r=>{this.mainSquares=r.data.data}),d.get(`api/api/evaluations/report/${this.$route.params.id}`).then(r=>{this.mainSquares=r.data.data})}},beforeMount(){setTimeout(()=>{this.getresulte()},2e3)},mounted(){setTimeout(()=>{this.getresulte()},2e3)}},y={class:"grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4"},v={class:"shadow-md py-2"},S={class:"m-auto text-center w-full py-2"},$={class:""},k={class:"flex"},q={class:"px-2 w-16"};function C(r,b,B,z,l,V){return e(),_(x,{class:"p-[1%]"},{default:g(()=>[s("div",y,[l.mainSquares?(e(!0),t(n,{key:0},i(l.mainSquares,o=>(e(),t("div",v,[s("p",S,c(o==null?void 0:o.category),1),s("div",null,[(e(!0),t(n,null,i(o.missions,a=>(e(),t("div",$,[s("div",k,[s("p",q,c(a.mission_key),1),s("div",{class:p(["bg-white grid w-[200px]",[`grid-cols-${a.mission_degree.length-1}`]])},[(e(!0),t(n,null,i(a.mission_degree.length-1,(F,u)=>(e(),t("div",{class:"w-full flex items-center justify-center",style:h({border:"1px solid black",backgroundColor:u<a.answer_score?`#${a.answer_color}`:""})},null,4))),256))],2)])]))),256))])]))),256)):f("",!0)])]),_:1})}const T=m(w,[["render",C]]);export{T as default};
