import{S as g,T as u,r as w,o as i,d as m,f as e,U as o,W as y,w as l,X as k,Y as h,x as C,F as S,z as E,t as V,V as F,g as B,E as L,Z as x,e as b,h as c,$ as I,i as N,a0 as P,a1 as T,a2 as U,J as $}from"./main-e6ca79c6.js";import{V as z}from"./VForm-dc6580d7.js";const A={class:"py-4"},j=["value"],q={key:1,class:"d-block"},D=b("div",{class:"text-subtitle-1 text-medium-emphasis"},"Account",-1),J={class:"text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"},X={__name:"Login",setup(M){const r=g(),d=u(!1),n=u({email:"",password:""}),p=u(!1),v=u({email:[s=>!!s||"E-mail is required",s=>/.+@.+/.test(s)||"E-mail must be valid"],password:[s=>!!s||"Password is required"]});return(s,a)=>{const _=w("router-link");return i(),m("div",A,[e(y,{class:"mx-auto mb-10","max-width":"228",src:o(h)},null,8,["src"]),e(k,{class:"mx-auto pa-12 pb-8",elevation:"8","max-width":"448",rounded:"lg"},{default:l(()=>[o(r).errors.length!==0?(i(),C(F,{key:0,class:"custom-alert-class",type:"error",variant:"tonal",border:"start",elevation:"2",closable:"","close-label":s.$t("close")},{default:l(()=>[typeof o(r).errors=="object"?(i(!0),m(S,{key:0},E(o(r).errors,(t,f)=>(i(),m("small",{class:"d-block",value:f,key:f},V(t),9,j))),128)):(i(),m("small",q,V(o(r).errors),1))]),_:1},8,["close-label"])):B("",!0),e(z,{onSubmit:a[3]||(a[3]=L(t=>o(r).handleLogin(n.value),["prevent"])),modelValue:p.value,"onUpdate:modelValue":a[4]||(a[4]=t=>p.value=t)},{default:l(()=>[D,e(x,{density:"compact",placeholder:"Email address","prepend-inner-icon":"mdi-email-outline",variant:"outlined",modelValue:n.value.email,"onUpdate:modelValue":a[0]||(a[0]=t=>n.value.email=t),rules:v.value.email},null,8,["modelValue","rules"]),b("div",J,[c(" Password "),e(_,{class:"text-caption text-decoration-none text-blue",to:{name:"ForgotPassword"},rel:"noopener noreferrer",target:"_blank"},{default:l(()=>[c(" Forgot login password?")]),_:1})]),e(x,{"append-inner-icon":d.value?"mdi-eye-off":"mdi-eye",type:d.value?"text":"password",density:"compact",placeholder:"Enter your password","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":a[1]||(a[1]=t=>d.value=!d.value),modelValue:n.value.password,"onUpdate:modelValue":a[2]||(a[2]=t=>n.value.password=t),rules:v.value.password},null,8,["append-inner-icon","type","modelValue","rules"]),e(I,{block:"",type:"submit",class:"mb-8",color:"blue",size:"large",variant:"tonal"},{default:l(()=>[N(e(T,{indeterminate:"",color:"info",class:"mx-3",size:"25"},null,512),[[P,o(r).loading]]),c(" Log In ")]),_:1})]),_:1},8,["modelValue"]),e(U,{class:"text-center"},{default:l(()=>[e(_,{class:"text-blue text-decoration-none",to:{name:"Register"},rel:"noopener noreferrer"},{default:l(()=>[c(" Sign up now "),e($,{icon:"mdi-chevron-right"})]),_:1})]),_:1})]),_:1})])}}};export{X as default};
