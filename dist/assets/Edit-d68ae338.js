import{a8 as E,af as B,T as m,a3 as N,o as n,x as _,w as r,U as i,V as k,e as u,t as g,g as U,d as v,F as q,z as T,f as s,a5 as D,h as F,E as M,Z as f,ag as z,a7 as $,$ as A,i as G,a1 as I,a0 as L,X as j}from"./main-e6ca79c6.js";import{u as P}from"./Users-1187e421.js";import{V as H}from"./VForm-dc6580d7.js";import{a as w,V as d}from"./VRow-a0366965.js";const X=["value"],Z={key:1,class:"d-block"},J={class:"relative m-auto"},K=["src"],O=u("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Q=u("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),W=u("g",{id:"SVGRepo_iconCarrier"},[u("path",{fill:"#29CCFF",d:"M21 3H3C1.35 3 0 4.35 0 6v12c0 1.55 1.19 2.83 2.7 2.98.1.01.2.02.3.02h18c.1 0 .2 0 .29-.02.03 0 .06-.01.09-.01C22.86 20.78 24 19.52 24 18V6c0-1.65-1.35-3-3-3zm1 13.53l-2.21-4.42c-.25-.5-.69-.87-1.22-1.03-.19-.05-.38-.08-.57-.08-.35 0-.7.09-1.01.27l-6.41 3.74-2.46-1.67C7.78 13.11 7.39 13 7 13c-.52 0-1.03.2-1.41.59L2 17.18V6c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v10.53z"}),u("circle",{fill:"#29CCFF",cx:"11",cy:"10",r:"2"})],-1),Y=[O,Q,W],re={__name:"Edit",setup(ee){const b=E(),o=P(),{getUserById:x}=B(o),a=m({user_id:null,title:"",name:"",email:"",image:"",password:"",role:null}),C=m(!1),y=m(null),V=m(""),c=m({name:[e=>e?!0:"Name is required",e=>(e==null?void 0:e.length)>=4?!0:"Name must be less than 4 charcters"],email:[e=>e?!0:"E-mail is requred.",e=>/.+@.+\..+/.test(e)?!0:"E-mail must be valid."]}),h=()=>{y.value.click()},S=e=>{const l=e.target.files[0],t=new FileReader;t.readAsDataURL(l),t.onload=p=>{V.value=p.target.result,a.value.image=l}},R=async e=>{const l=new FormData;l.append("name",e.name),l.append("title",e.title),l.append("email",e.email),l.append("role",e.role),l.append("user_id",e.user_id),e.password!=null&&l.append("password",e.password),e.image!=null&&l.append("image",e.image),await o.updateUser(l)};return N(async()=>{await o.fetchRoles(),await o.fetchUsers();const e=x.value(b.params.id);a.value.user_id=b.params.id,a.value.title=e.title,a.value.name=e.name,a.value.email=e.email,V.value=e.image,a.value.role=e.roles[0].id,a.value.password===""&&delete a.value.password,a.value.image===""&&delete a.value.image}),(e,l)=>(n(),_(j,{class:"mx-auto pa-12 pb-8",elevation:"8"},{default:r(()=>[i(o).successMsg?(n(),_(k,{key:0,class:"custom-alert-class",type:"success",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:r(()=>[u("small",null,g(i(o).successMsg),1)]),_:1},8,["close-label"])):U("",!0),i(o).errors.length!==0?(n(),_(k,{key:1,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":e.$t("close")},{default:r(()=>[typeof i(o).errors=="object"?(n(!0),v(q,{key:0},T(i(o).errors,(t,p)=>(n(),v("small",{class:"d-block",value:p,key:p},g(t),9,X))),128)):(n(),v("small",Z,g(i(o).errors),1))]),_:1},8,["close-label"])):U("",!0),s(D,{class:"mb-2"},{default:r(()=>[F(" Edit User ")]),_:1}),s(H,{modelValue:C.value,"onUpdate:modelValue":l[5]||(l[5]=t=>C.value=t),onSubmit:l[6]||(l[6]=M(t=>R(a.value),["prevent"]))},{default:r(()=>[s(w,null,{default:r(()=>[s(d,{cols:"12",md:"4"},{default:r(()=>[s(f,{modelValue:a.value.title,"onUpdate:modelValue":l[0]||(l[0]=t=>a.value.title=t),rules:c.value.title,label:"Title",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),s(d,{cols:"12",md:"4"},{default:r(()=>[s(f,{modelValue:a.value.name,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value.name=t),rules:c.value.name,counter:4,label:"Name",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),s(d,{cols:"12",md:"4"},{default:r(()=>[s(z,{modelValue:a.value.role,"onUpdate:modelValue":l[2]||(l[2]=t=>a.value.role=t),items:i(o).roles,label:"Role",variant:"solo","item-title":t=>t.name,"item-value":t=>t.id,"item-disabled":!1},null,8,["modelValue","items","item-title","item-value"])]),_:1})]),_:1}),s(w,null,{default:r(()=>[s(d,{cols:"12",md:"4"},{default:r(()=>[s(f,{modelValue:a.value.email,"onUpdate:modelValue":l[3]||(l[3]=t=>a.value.email=t),rules:c.value.email,label:"E-mail",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1}),s(d,{cols:"12",md:"4"},{default:r(()=>[s(f,{modelValue:a.value.password,"onUpdate:modelValue":l[4]||(l[4]=t=>a.value.password=t),rules:c.value.password,counter:6,label:"Password",variant:"solo",required:""},null,8,["modelValue","rules"])]),_:1})]),_:1}),s(w,null,{default:r(()=>[s(d,{cols:"12",md:"4",style:{display:"flex","align-items":"center"}},{default:r(()=>[u("div",J,[u("input",{type:"file",ref_key:"fileInput",ref:y,name:"image",id:"image",hidden:"",onChange:S},null,544),u("img",{onClick:h,src:V.value,class:"uploaded-image relative m-auto cursor-pointer rounded-full"},null,8,K),(n(),v("svg",{onClick:h,class:"cursor-pointer absolute left-[50%] m-auto bottom-0 bg-white rounded-full p-1 h-8 w-8",viewBox:"-2.4 -2.4 28.80 28.80",xmlns:"http://www.w3.org/2000/svg",fill:"#29CCFF",transform:"matrix(-1, 0, 0, 1, 0, 0)"},Y))])]),_:1})]),_:1}),s($,null,{default:r(()=>[s(A,{type:"submit",color:"success",variant:"elevated"},{default:r(()=>[G(s(I,{indeterminate:"",color:"white",class:"mx-3",size:"25"},null,512),[[L,i(o).loading]]),F(" Save ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{re as default};
