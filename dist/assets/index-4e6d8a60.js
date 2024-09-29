import{aa as J,ab as K,T as o,ac as Q,a3 as W,ad as X,r as c,ae as Y,o as h,d as $,e as s,f as l,w as i,i as x,x as Z,t as u,h as B,g as P,c as m}from"./main-e6ca79c6.js";import{B as ee}from"./Barrier-c9221028.js";const te={class:"grid"},le={class:"col-12"},ae={style:{},class:"shadow-xl"},se={class:"flex w-full justify-between align-items-center"},oe={class:"m-0 my-auto"},ie={class:"block mt-2 md:mt-0 p-input-icon-left"},ne=s("i",{class:"pi pi-search"},null,-1),ue={class:"flex align-items-center justify-content-center"},re=s("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),ce={key:0},de={class:"flex flex-column gap-2"},ve={class:"w-full text-right",for:"username"},pe={key:0,class:"mt-1 mb-5 text-red-500"},me={class:"w-full text-center"},fe={class:"flex flex-column gap-2"},be={class:"w-full text-right",for:"username"},he={key:0,class:"mt-1 mb-5 text-red-500"},ge={class:"w-full text-center"},we={__name:"index",setup(_e){const C=J();K();const V=o(!0),N=o({}),d=o(""),g=o(null);o(!1);const f=o(!1),_=o(""),U=o(null),L=o(null),y=o({}),v=o(!1),n=o({}),p=o(!1),M=o([]);Q(()=>{E()});const k=()=>{m.get("/api/barrier-subtest").then(e=>{V.value=!1,g.value=e.data.data,console.log(g.value)})},R=()=>{m.get("/api/mileston-levels").then(e=>{M.value=e.data.data})};W(()=>{k(),R()});const j=e=>{m.get(`/api/barrier-subtest/${e}`).then(a=>{V.value=!1,n.value=a.data.data,console.log(g.value)}),_.value=e,p.value=!p.value},F=()=>{m.post(`/api/barrier-subtest/${_.value}`,n.value).then(e=>{console.log(e.data),k(),p.value=!p.value,C.add({severity:"success",summary:"Successful",detail:"Successful",life:3e3}),n.value=o({})}).catch(e=>{d.value=e.response.data.errors})},I=()=>{v.value=!v.value},q=e=>{console.log(e),f.value=!0,_.value=e},A=()=>{m.post("/api/barrier-subtest",n.value).then(e=>{console.log(e.data),k(),v.value=!v.value,C.add({severity:"success",summary:"Successful",detail:"Successful",life:3e3}),skill.value=o({})}).catch(e=>{d.value=e.response.data.errors})},z=()=>{m.delete(`/api/barrier-subtest/${_.value}`).then(e=>{console.log(e.data),f.value=!1,k(),C.add({severity:"success",summary:"Successful",detail:"Successful",life:3e3})}).catch(()=>{})},E=()=>{y.value={global:{value:null,matchMode:X.CONTAINS}}};return(e,a)=>{const O=c("Toast"),r=c("Button"),D=c("InputText"),S=c("Column"),G=c("DataTable"),T=c("Dialog"),H=c("va-card"),w=Y("can");return h(),$("div",te,[s("div",le,[l(H,{class:"card"},{default:i(()=>[l(ee),l(O),s("div",ae,[x((h(),Z(G,{ref_key:"dt",ref:L,selection:U.value,"onUpdate:selection":a[1]||(a[1]=t=>U.value=t),value:g.value,loading:V.value,"data-key":"id",paginator:!0,rows:10,filters:y.value,"paginator-template":"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown","rows-per-page-options":[5,10,25],"current-page-report-template":"Showing {first} to {last} of {totalRecords} products","responsive-layout":"scroll"},{header:i(()=>[s("div",se,[x(l(r,{label:e.$t("create_button"),icon:"pi pi-plus",class:"p-button-success mr-2",onClick:I},null,8,["label"]),[[w,"skills create"]]),s("h5",oe,u(e.$t("Subtest")),1),s("div",null,[s("span",ie,[ne,l(D,{modelValue:y.value.global.value,"onUpdate:modelValue":a[0]||(a[0]=t=>y.value.global.value=t),placeholder:e.$t("search")},null,8,["modelValue","placeholder"])])])])]),default:i(()=>[l(S,{"selection-mode":"multiple","header-style":"width: 3rem"}),l(S,{field:"name",header:e.$t("name"),sortable:!0,"header-style":"width:14%; min-width:10rem;",class:"ltr:text-justify"},{body:i(t=>[B(u(t.data.title),1)]),_:1},8,["header"]),l(S,{"header-style":"min-width:10rem;"},{body:i(t=>[s("div",null,[x(l(r,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:b=>j(t.data.id)},null,8,["onClick"]),[[w,"skills edit"]]),x(l(r,{icon:"pi pi-trash",class:"delete mt-2",onClick:b=>q(t.data.id)},null,8,["onClick"]),[[w,"skills delete"]])])]),_:1})]),_:1},8,["selection","value","loading","filters"])),[[w,"skills list"]]),l(T,{visible:f.value,"onUpdate:visible":a[3]||(a[3]=t=>f.value=t),style:{width:"550px"},header:e.$t("submit"),modal:!0},{footer:i(()=>[l(r,{label:e.$t("no"),icon:"pi pi-times",class:"p-button-text",onClick:a[2]||(a[2]=t=>f.value=!1)},null,8,["label"]),l(r,{label:e.$t("yes"),icon:"pi pi-check",class:"p-button-text",onClick:z},null,8,["label"])]),default:i(()=>[s("div",ue,[re,N.value?(h(),$("span",ce,[B(u(e.$t("remove_item"))+" ",1),s("b",null,u(N.value.first_name),1),B("?")])):P("",!0)])]),_:1},8,["visible","header"]),l(T,{visible:v.value,"onUpdate:visible":a[5]||(a[5]=t=>v.value=t),style:{width:"450px"},header:e.$t("submit"),modal:!0},{default:i(()=>{var t;return[s("div",de,[s("label",ve,u(e.$t("title")),1),l(D,{required:"",class:"bg-[#f7f5f5] text-center",modelValue:n.value.title,"onUpdate:modelValue":a[4]||(a[4]=b=>n.value.title=b),placeholder:e.$t("title")},null,8,["modelValue","placeholder"]),(t=d.value)!=null&&t.title?(h(),$("div",pe,u(d.value.title[0]),1)):P("",!0)]),s("div",me,[l(r,{onClick:A,class:"create m-auto w-[50%] my-4",label:e.$t("submit")},null,8,["label"])])]}),_:1},8,["visible","header"]),l(T,{visible:p.value,"onUpdate:visible":a[7]||(a[7]=t=>p.value=t),style:{width:"550px"},header:e.$t("submit"),modal:!0},{default:i(()=>{var t;return[s("div",fe,[s("label",be,u(e.$t("title")),1),l(D,{required:"",class:"bg-[#f7f5f5] text-center",modelValue:n.value.title,"onUpdate:modelValue":a[6]||(a[6]=b=>n.value.title=b),placeholder:e.$t("title")},null,8,["modelValue","placeholder"]),(t=d.value)!=null&&t.title?(h(),$("div",he,u(d.value.title[0]),1)):P("",!0)]),s("div",ge,[l(r,{onClick:F,class:"create m-auto w-[50%] my-4",label:e.$t("submit")},null,8,["label"])])]}),_:1},8,["visible","header"])])]),_:1})])])}}};export{we as default};
