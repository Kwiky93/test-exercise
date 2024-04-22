import{Q as h,R as C,S as P,T as p,c as $,g as A,d as Q,U as D,L as J,A as i,t as y,z as d,M as c,V as k,x as o,v as m,O as x,P as w,y as f}from"./BHGerzUK.js";import{u as W,V as Y,c as q,a as H,b as v}from"./BLh4wsgO.js";import{m as B,a as E}from"./kRcvcyC1.js";const T=h.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),O=h.reduce((e,n)=>{const t="offset"+C(n);return e[t]={type:[String,Number],default:null},e},{}),F=h.reduce((e,n)=>{const t="order"+C(n);return e[t]={type:[String,Number],default:null},e},{}),N={col:Object.keys(T),offset:Object.keys(O),order:Object.keys(F)};function X(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const l=n.replace(e,"");a+=`-${l}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Z=["auto","start","end","center","baseline","stretch"],ee=P({cols:{type:[Boolean,String,Number],default:!1},...T,offset:{type:[String,Number],default:null},...O,order:{type:[String,Number],default:null},...F,alignSelf:{type:String,default:null,validator:e=>Z.includes(e)},...B(),...E()},"VCol"),b=p()({name:"VCol",props:ee(),setup(e,n){let{slots:t}=n;const a=$(()=>{const l=[];let u;for(u in N)N[u].forEach(s=>{const g=e[s],_=X(u,s,g);_&&l.push(_)});const r=l.some(s=>s.startsWith("v-col-"));return l.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return A(e.tag,{class:[a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),S=["start","end","center"],U=["space-between","space-around","space-evenly"];function V(e,n){return h.reduce((t,a)=>{const l=e+C(a);return t[l]=n(),t},{})}const te=[...S,"baseline","stretch"],G=e=>te.includes(e),R=V("align",()=>({type:String,default:null,validator:G})),le=[...S,...U],I=e=>le.includes(e),M=V("justify",()=>({type:String,default:null,validator:I})),ne=[...S,...U,"stretch"],z=e=>ne.includes(e),K=V("alignContent",()=>({type:String,default:null,validator:z})),j={align:Object.keys(R),justify:Object.keys(M),alignContent:Object.keys(K)},se={align:"align",justify:"justify",alignContent:"align-content"};function ae(e,n,t){let a=se[e];if(t!=null){if(n){const l=n.replace(e,"");a+=`-${l}`}return a+=`-${t}`,a.toLowerCase()}}const oe=P({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:G},...R,justify:{type:String,default:null,validator:I},...M,alignContent:{type:String,default:null,validator:z},...K,...B(),...E()},"VRow"),L=p()({name:"VRow",props:oe(),setup(e,n){let{slots:t}=n;const a=$(()=>{const l=[];let u;for(u in j)j[u].forEach(r=>{const s=e[r],g=ae(u,r,s);g&&l.push(g)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return A(e.tag,{class:["v-row",a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),re=o("thead",null,[o("tr",null,[o("th",null,"Price"),o("th",{class:"d-none d-md-flex"},"Quantity"),o("th",null,"Total")])],-1),ue={class:"overflow-auto"},ce={class:"d-none d-md-flex"},de=o("thead",null,[o("tr",null,[o("th",null,"Price"),o("th",{class:"d-none d-md-flex"},"Quantity"),o("th",null,"Total")])],-1),ie={class:"d-none d-md-flex"},me=Q({__name:"order-book",setup(e){const n=W();function t(u,r){return(parseFloat(u)*parseFloat(r)).toFixed(5)}const a=[100,500,1e3],l=D().xs;return(u,r)=>(y(),J(Y,{class:"flex-column flex-1-1 d-flex overflow-hidden"},{default:i(()=>[d(L,{class:"flex-0-1"},{default:i(()=>[d(b,null,{default:i(()=>[d(q,{label:"Symbol",modelValue:c(n).symbol.rest,"onUpdate:modelValue":r[0]||(r[0]=s=>c(n).symbol.rest=s),density:"compact",disabled:""},null,8,["modelValue"])]),_:1}),d(b,null,{default:i(()=>[d(H,{class:"flex-0-1",items:a,modelValue:c(n).selectedCounts,"onUpdate:modelValue":r[1]||(r[1]=s=>c(n).selectedCounts=s),density:"compact"},null,8,["modelValue"])]),_:1})]),_:1}),d(L,{class:"flex-1-1 overflow-hidden mt-0"},{default:i(()=>[d(b,{class:"d-flex flex-wrap h-100 pt-0"},{default:i(()=>[d(v,{class:k(["overflow-x-hidden",[c(l)?"w-100":"w-50",c(l)?"h-50":"h-100"]]),"fixed-header":""},{default:i(()=>[re,o("tbody",ue,[(y(!0),m(w,null,x(c(n).getBids,s=>(y(),m("tr",null,[o("td",null,f(s[0]),1),o("td",ce,f(s[1]),1),o("td",null,f(t(s[0],s[1])),1)]))),256))])]),_:1},8,["class"]),d(v,{class:k(["overflow-x-hidden",[c(l)?"w-100":"w-50",c(l)?"h-50":"h-100"]]),"fixed-header":""},{default:i(()=>[de,o("tbody",null,[(y(!0),m(w,null,x(c(n).getAsks,s=>(y(),m("tr",null,[o("td",null,f(s[0]),1),o("td",ie,f(s[1]),1),o("td",null,f(t(s[0],s[1])),1)]))),256))])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1}))}});export{me as default};
