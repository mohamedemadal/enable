import{aa as G,ab as H,T as a,ac as J,a3 as K,ad as Q,r,ae as W,o as i,d as D,e as o,f as s,w as l,i as T,x as p,t as d,h as u,g as c,c as y}from"./main-e6ca79c6.js";import{L as X}from"./LeavesNave-b94fbb4b.js";const Y={class:"grid",style:{"overflow-x":"scroll"}},Z={class:"col-12"},ee={style:{},class:"shadow-xl"},te={class:"flex w-full justify-between align-items-center"},ae={class:"m-0 my-auto"},se={class:"block mt-2 md:mt-0 p-input-icon-left"},le=o("i",{class:"pi pi-search"},null,-1),oe={class:"flex align-items-center justify-content-center"},ne=o("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),ie={key:0},re={class:"flex flex-column gap-2"},de={class:"w-full text-right",for:"username"},ue={key:0,class:"mt-1 mb-5 text-red-500"},ce={class:"w-full text-center"},fe={__name:"index",setup(me){const V=G();H();const M=a([]),h=a(!0),L=a({}),b=a(""),g=a(null);a(!1);const w=a(!1),N=a(""),B=a(null),U=a(null),_=a({});a(!1);const k=a({});a({});const m=a(!1);J(()=>{A()});const q=()=>{y.post("/api/users").then(e=>{M.value=e.data.users.data})},x=()=>{y.get("/api/leaves").then(e=>{h.value=!1,g.value=e.data.data,console.log(g.value)})};K(()=>{x(),q()});const R=e=>{N.value=e,m.value=!m.value},F=()=>{y.post(`/api/leaves/reject-request/${N.value}`,k.value).then(e=>{console.log(e.data),x(),m.value=!m.value,V.add({severity:"success",summary:"Successful",detail:"Successful",life:3e3}),levels.value=a({})}).catch(e=>{b.value=e.response.data.errors})},I=e=>{h.value=!0,y.get(`/api/leaves/accept-request/${e}`).then(n=>{h.value=!1,x(),V.add({severity:"success",summary:"Successful",detail:"Successful",life:3e3})}).catch(()=>{})},A=()=>{_.value={global:{value:null,matchMode:Q.CONTAINS}}};return(e,n)=>{const z=r("Toast"),P=r("InputText"),v=r("Column"),$=r("P"),f=r("Button"),E=r("DataTable"),S=r("Dialog"),O=r("va-card"),C=W("can");return i(),D("div",Y,[o("div",Z,[s(O,{class:"card"},{default:l(()=>[s(X),s(z),o("div",ee,[T((i(),p(E,{ref_key:"dt",ref:U,selection:B.value,"onUpdate:selection":n[1]||(n[1]=t=>B.value=t),value:g.value,loading:h.value,"data-key":"id",paginator:!0,rows:10,filters:_.value,"paginator-template":"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown","rows-per-page-options":[5,10,25],"current-page-report-template":"Showing {first} to {last} of {totalRecords} products","responsive-layout":"scroll"},{header:l(()=>[o("div",te,[o("h5",ae,d(e.$t("leaves")),1),o("div",null,[o("span",se,[le,s(P,{modelValue:_.value.global.value,"onUpdate:modelValue":n[0]||(n[0]=t=>_.value.global.value=t),placeholder:e.$t("search")},null,8,["modelValue","placeholder"])])])])]),default:l(()=>[s(v,{"selection-mode":"multiple","header-style":"width: 3rem"}),s(v,{field:"employee.name",header:e.$t("employee_name"),sortable:!0,"header-style":"width:14%; min-width:10rem;",class:"ltr:text-justify"},{body:l(t=>[u(d(t.data.employee.name),1)]),_:1},8,["header"]),s(v,{field:"reason",header:e.$t("request_reason"),sortable:!0,"header-style":"width:14%; min-width:10rem;",class:"ltr:text-justify"},{body:l(t=>[u(d(t.data.reason),1)]),_:1},8,["header"]),s(v,{field:"leave_setup.title",header:e.$t("days"),sortable:!0,"header-style":"width:14%; min-width:10rem;",class:"ltr:text-justify"},{body:l(t=>[u(d(t.data.leave_setup.title),1)]),_:1},8,["header"]),s(v,{field:"status",header:e.$t("status"),sortable:!0,"header-style":"width:14%; min-width:10rem;",class:"ltr:text-justify"},{body:l(t=>[t.data.status==0?(i(),p($,{key:0,class:"bg-yellow-300 text-white w-24 text-center py-1 rounded-sm"},{default:l(()=>[u("pending")]),_:1})):c("",!0),t.data.status==1?(i(),p($,{key:1,class:"bg-[green] text-white w-24 text-center py-1 rounded-sm"},{default:l(()=>[u("accepted")]),_:1})):c("",!0),t.data.status==-1?(i(),p($,{key:2,class:"bg-[red] text-white w-24 text-center py-1 rounded-sm"},{default:l(()=>[u("rejected")]),_:1})):c("",!0)]),_:1},8,["header"]),s(v,{"header-style":"min-width:10rem;"},{body:l(t=>[o("div",null,[t.data.status==0?T((i(),p(f,{key:0,icon:"pi pi-times",class:"p-button-danger",onClick:j=>R(t.data.id)},null,8,["onClick"])),[[C,"skills edit"]]):c("",!0),t.data.status==0?T((i(),p(f,{key:1,icon:"pi pi-check",class:"p-button-success",onClick:j=>I(t.data.id)},null,8,["onClick"])),[[C,"skills delete"]]):c("",!0)])]),_:1})]),_:1},8,["selection","value","loading","filters"])),[[C,"skills list"]]),s(S,{visible:w.value,"onUpdate:visible":n[3]||(n[3]=t=>w.value=t),style:{width:"450px"},header:e.$t("submit"),modal:!0},{footer:l(()=>[s(f,{label:e.$t("no"),icon:"pi pi-times",class:"p-button-text",onClick:n[2]||(n[2]=t=>w.value=!1)},null,8,["label"]),s(f,{label:e.$t("yes"),icon:"pi pi-check",class:"p-button-text",onClick:e.deleteAction},null,8,["label","onClick"])]),default:l(()=>[o("div",oe,[ne,L.value?(i(),D("span",ie,[u(d(e.$t("remove_item"))+" ",1),o("b",null,d(L.value.first_name),1),u("?")])):c("",!0)])]),_:1},8,["visible","header"]),s(S,{visible:m.value,"onUpdate:visible":n[5]||(n[5]=t=>m.value=t),style:{width:"450px"},header:e.$t("submit"),modal:!0},{default:l(()=>{var t;return[o("div",re,[o("label",de,d(e.$t("title")),1),s(P,{required:"",class:"bg-[#f7f5f5] text-center",modelValue:k.value.rejected_reason,"onUpdate:modelValue":n[4]||(n[4]=j=>k.value.rejected_reason=j),placeholder:e.$t("title")},null,8,["modelValue","placeholder"]),(t=b.value)!=null&&t.title?(i(),D("div",ue,d(b.value.name[0]),1)):c("",!0)]),o("div",ce,[s(f,{onClick:F,class:"create m-auto w-[50%] my-4",label:e.$t("submit")},null,8,["label"])])]}),_:1},8,["visible","header"])])]),_:1})])])}}};export{fe as default};
