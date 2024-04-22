import{S as V,a3 as F,T as w,a4 as j,ab as J,ac as h,z as a,a0 as M,r as H,c as f,aw as R,F as Be,$ as fe,an as Pe,H as Te,ak as _e,a2 as oe,af as Ie,al as we,P as me,a7 as $e,aP as Ne,ad as Re,d as ze,aQ as Ee,v as ie,A as K,aR as Ae,t as re,x as Ge,O as Oe,B as De,y as Le}from"./BNyEH1L4.js";import{C as W,m as G,e as Q,D as Z,f as p,a as E,i as be,k as ee,G as te,H as ae,l as le,u as $,z as Me,A as He,h as ge,o as ye,t as q,a4 as Fe,a3 as je,P as Ue,N as Xe,E as Ye,$ as Ke,F as qe,j as Je,O as We,a0 as Qe,I as Ze,J as pe,R as et,r as tt,p as L,q as z,_ as at,b as lt,s as nt,y as st,v as he,B as ue,V as ot,L as it}from"./zkIFv3D6.js";const ke=V({divided:Boolean,...W(),...G(),...Q(),...Z(),...p(),...E(),...F(),...be()},"VBtnGroup"),ce=w()({name:"VBtnGroup",props:ke(),setup(e,s){let{slots:t}=s;const{themeClasses:l}=j(e),{densityClasses:c}=ee(e),{borderClasses:i}=te(e),{elevationClasses:o}=ae(e),{roundedClasses:v}=le(e);J({VBtn:{height:"auto",color:h(e,"color"),density:h(e,"density"),flat:!0,variant:h(e,"variant")}}),$(()=>a(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},l.value,i.value,c.value,o.value,v.value,e.class],style:e.style},t))}}),Ce=Symbol.for("vuetify:v-btn-toggle"),rt=V({...ke(),...Me()},"VBtnToggle");w()({name:"VBtnToggle",props:rt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const{isSelected:l,next:c,prev:i,select:o,selected:v}=He(e,Ce);return $(()=>{const r=ce.filterProps(e);return a(ce,M({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,{isSelected:l,next:c,prev:i,select:o,selected:v})]}})}),{next:c,prev:i,select:o}}});const ut=V({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...G(),...ge(),...E({tag:"div"}),...F()},"VProgressCircular"),ct=w()({name:"VProgressCircular",props:ut(),setup(e,s){let{slots:t}=s;const l=20,c=2*Math.PI*l,i=H(),{themeClasses:o}=j(e),{sizeClasses:v,sizeStyles:r}=ye(e),{textColorClasses:d,textColorStyles:B}=q(h(e,"color")),{textColorClasses:b,textColorStyles:m}=q(h(e,"bgColor")),{intersectionRef:P,isIntersecting:_}=Fe(),{resizeRef:T,contentRect:C}=je(),S=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),n=f(()=>Number(e.width)),u=f(()=>r.value?Number(e.size):C.value?C.value.width:Math.max(n.value,32)),g=f(()=>l/(1-n.value/u.value)*2),k=f(()=>n.value/u.value*g.value),N=f(()=>R((100-S.value)/100*c));return Be(()=>{P.value=i.value,T.value=i.value}),$(()=>a(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":_.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,v.value,d.value,e.class],style:[r.value,B.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[a("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${g.value} ${g.value}`},[a("circle",{class:["v-progress-circular__underlay",b.value],style:m.value,fill:"transparent",cx:"50%",cy:"50%",r:l,"stroke-width":k.value,"stroke-dasharray":c,"stroke-dashoffset":0},null),a("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:l,"stroke-width":k.value,"stroke-dasharray":c,"stroke-dashoffset":N.value},null)]),t.default&&a("div",{class:"v-progress-circular__content"},[t.default({value:S.value})])]})),{}}}),de={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},dt=V({location:String},"location");function vt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:l}=fe();return{locationStyles:f(()=>{if(!e.location)return{};const{side:i,align:o}=Ue(e.location.split(" ").length>1?e.location:`${e.location} center`,l.value);function v(d){return t?t(d):0}const r={};return i!=="center"&&(s?r[de[i]]=`calc(100% - ${v(i)}px)`:r[i]=0),o!=="center"?s?r[de[o]]=`calc(100% - ${v(o)}px)`:r[o]=0:(i==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),r})}}const ft=["static","relative","fixed","absolute","sticky"],mt=V({position:{type:String,validator:e=>ft.includes(e)}},"position");function bt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pe();return{positionClasses:f(()=>e.position?`${s}--${e.position}`:void 0)}}function gt(e,s){Te(()=>{var t;return(t=e.isActive)==null?void 0:t.value},t=>{e.isLink.value&&t&&s&&_e(()=>{s(!0)})},{immediate:!0})}const xe=V({active:{type:Boolean,default:void 0},symbol:{type:null,default:Ce},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:oe,appendIcon:oe,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...W(),...G(),...Q(),...Xe(),...Z(),...Ye(),...Ke(),...dt(),...mt(),...p(),...qe(),...ge(),...E({tag:"button"}),...F(),...be({variant:"elevated"})},"VBtn"),ve=w()({name:"VBtn",props:xe(),emits:{"group:selected":e=>!0},setup(e,s){let{attrs:t,slots:l}=s;const{themeClasses:c}=j(e),{borderClasses:i}=te(e),{colorClasses:o,colorStyles:v,variantClasses:r}=Je(e),{densityClasses:d}=ee(e),{dimensionStyles:B}=We(e),{elevationClasses:b}=ae(e),{loaderClasses:m}=Qe(e),{locationStyles:P}=vt(e),{positionClasses:_}=bt(e),{roundedClasses:T}=le(e),{sizeClasses:C,sizeStyles:S}=ye(e),n=Ze(e,e.symbol,!1),u=pe(e,t),g=f(()=>{var y;return e.active!==void 0?e.active:u.isLink.value?(y=u.isActive)==null?void 0:y.value:n==null?void 0:n.isSelected.value}),k=f(()=>(n==null?void 0:n.disabled.value)||e.disabled),N=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),I=f(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function U(y){var x;k.value||u.isLink.value&&(y.metaKey||y.ctrlKey||y.shiftKey||y.button!==0||t.target==="_blank")||((x=u.navigate)==null||x.call(u,y),n==null||n.toggle())}return gt(u,n==null?void 0:n.select),$(()=>{var D,A;const y=u.isLink.value?"a":e.tag,x=!!(e.prependIcon||l.prepend),X=!!(e.appendIcon||l.append),Y=!!(e.icon&&e.icon!==!0),O=(n==null?void 0:n.isSelected.value)&&(!u.isLink.value||((D=u.isActive)==null?void 0:D.value))||!n||((A=u.isActive)==null?void 0:A.value);return Ie(a(y,{type:y==="a"?void 0:"button",class:["v-btn",n==null?void 0:n.selectedClass.value,{"v-btn--active":g.value,"v-btn--block":e.block,"v-btn--disabled":k.value,"v-btn--elevated":N.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},c.value,i.value,O?o.value:void 0,d.value,b.value,m.value,_.value,T.value,C.value,r.value,e.class],style:[O?v.value:void 0,B.value,P.value,S.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:k.value||void 0,href:u.href.value,tabindex:e.loading?-1:void 0,onClick:U,value:I.value},{default:()=>{var ne;return[tt(!0,"v-btn"),!e.icon&&x&&a("span",{key:"prepend",class:"v-btn__prepend"},[l.prepend?a(z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},l.prepend):a(L,{key:"prepend-icon",icon:e.prependIcon},null)]),a("span",{class:"v-btn__content","data-no-activator":""},[!l.default&&Y?a(L,{key:"content-icon",icon:e.icon},null):a(z,{key:"content-defaults",disabled:!Y,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var se;return[((se=l.default)==null?void 0:se.call(l))??e.text]}})]),!e.icon&&X&&a("span",{key:"append",class:"v-btn__append"},[l.append?a(z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},l.append):a(L,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&a("span",{key:"loader",class:"v-btn__loader"},[((ne=l.loader)==null?void 0:ne.call(l))??a(ct,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[et,!k.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:n}}}),Se=Symbol.for("vuetify:v-tabs"),yt=V({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...we(xe({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ve=w()({name:"VTab",props:yt(),setup(e,s){let{slots:t,attrs:l}=s;const{textColorClasses:c,textColorStyles:i}=q(e,"sliderColor"),o=H(),v=H(),r=f(()=>e.direction==="horizontal"),d=f(()=>{var b,m;return((m=(b=o.value)==null?void 0:b.group)==null?void 0:m.isSelected.value)??!1});function B(b){var P,_;let{value:m}=b;if(m){const T=(_=(P=o.value)==null?void 0:P.$el.parentElement)==null?void 0:_.querySelector(".v-tab--selected .v-tab__slider"),C=v.value;if(!T||!C)return;const S=getComputedStyle(T).color,n=T.getBoundingClientRect(),u=C.getBoundingClientRect(),g=r.value?"x":"y",k=r.value?"X":"Y",N=r.value?"right":"bottom",I=r.value?"width":"height",U=n[g],y=u[g],x=U>y?n[N]-u[N]:n[g]-u[g],X=Math.sign(x)>0?r.value?"right":"bottom":Math.sign(x)<0?r.value?"left":"top":"center",O=(Math.abs(x)+(Math.sign(x)<0?n[I]:u[I]))/Math.max(n[I],u[I])||0,D=n[I]/u[I]||0,A=1.5;lt(C,{backgroundColor:[S,"currentcolor"],transform:[`translate${k}(${x}px) scale${k}(${D})`,`translate${k}(${x/A}px) scale${k}(${(O-1)/A+1})`,"none"],transformOrigin:Array(3).fill(X)},{duration:225,easing:nt})}}return $(()=>{const b=ve.filterProps(e);return a(ve,M({symbol:Se,ref:o,class:["v-tab",e.class],style:e.style,tabindex:d.value?0:-1,role:"tab","aria-selected":String(d.value),active:!1},b,l,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":B}),{...t,default:()=>{var m;return a(me,null,[((m=t.default)==null?void 0:m.call(t))??e.text,!e.hideSlider&&a("div",{ref:v,class:["v-tab__slider",c.value],style:i.value},null)])}})}),at({},o)}});function ht(e){return e?e.map(s=>Ne(s)?s:{text:s,value:s}):[]}const kt=V({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...st({mandatory:"force"}),...Q(),...E()},"VTabs"),Ct=w()({name:"VTabs",props:kt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const l=$e(e,"modelValue"),c=f(()=>ht(e.items)),{densityClasses:i}=ee(e),{backgroundColorClasses:o,backgroundColorStyles:v}=he(h(e,"bgColor"));return J({VTab:{color:h(e,"color"),direction:h(e,"direction"),stacked:h(e,"stacked"),fixed:h(e,"fixedTabs"),sliderColor:h(e,"sliderColor"),hideSlider:h(e,"hideSlider")}}),$(()=>{const r=ue.filterProps(e);return a(ue,M(r,{modelValue:l.value,"onUpdate:modelValue":d=>l.value=d,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},i.value,o.value,e.class],style:[{"--v-tabs-height":R(e.height)},v.value,e.style],role:"tablist",symbol:Se}),{default:()=>[t.default?t.default():c.value.map(d=>a(Ve,M(d,{key:d.text}),null))]})}),{}}}),xt=V({text:String,...G(),...E()},"VToolbarTitle"),St=w()({name:"VToolbarTitle",props:xt(),setup(e,s){let{slots:t}=s;return $(()=>{const l=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var c;return[l&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(c=t.default)==null?void 0:c.call(t)])]}})}),{}}}),Vt=[null,"prominent","default","comfortable","compact"],Bt=V({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Vt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...W(),...G(),...Z(),...p(),...E({tag:"header"}),...F()},"VToolbar"),Pt=w()({name:"VToolbar",props:Bt(),setup(e,s){var P;let{slots:t}=s;const{backgroundColorClasses:l,backgroundColorStyles:c}=he(h(e,"color")),{borderClasses:i}=te(e),{elevationClasses:o}=ae(e),{roundedClasses:v}=le(e),{themeClasses:r}=j(e),{rtlClasses:d}=fe(),B=Re(!!(e.extended||(P=t.extension)!=null&&P.call(t))),b=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),m=f(()=>B.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return J({VBtn:{variant:"text"}}),$(()=>{var S;const _=!!(e.title||t.title),T=!!(t.image||e.image),C=(S=t.extension)==null?void 0:S.call(t);return B.value=!!(e.extended||C),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,i.value,o.value,v.value,r.value,d.value,e.class],style:[c.value,e.style]},{default:()=>[T&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(ot,{key:"image-img",cover:!0,src:e.image},null)]),a(z,{defaults:{VTabs:{height:R(b.value)}}},{default:()=>{var n,u,g;return[a("div",{class:"v-toolbar__content",style:{height:R(b.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(n=t.prepend)==null?void 0:n.call(t)]),_&&a(St,{key:"title",text:e.title},{text:t.title}),(u=t.default)==null?void 0:u.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(g=t.append)==null?void 0:g.call(t)])])]}}),a(z,{defaults:{VTabs:{height:R(m.value)}}},{default:()=>[a(it,null,{default:()=>[B.value&&a("div",{class:"v-toolbar__extension",style:{height:R(m.value)}},[C])]})]})]})}),{contentHeight:b,extensionHeight:m}}}),Tt={class:"d-flex flex-column h-screen"},_t={class:"ml-6 mr-6"},$t=ze({__name:"header",setup(e){const s=Ee(),t=H(s.path),l=[{item:"index",title:"Settings",to:"./"},{item:"order-book",title:"Order Book",to:"./order-book"}];return(c,i)=>(re(),ie("div",Tt,[a(Pt,{color:"primary"},{default:K(()=>[Ge("div",_t,[a(L,{icon:"$vuetify"})]),a(Ct,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=o=>t.value=o),"bg-color":"primary"},{default:K(()=>[(re(),ie(me,null,Oe(l,o=>a(Ve,{value:o.item,to:o.to},{default:K(()=>[De(Le(o.title),1)]),_:2},1032,["value","to"])),64))]),_:1},8,["modelValue"])]),_:1}),Ae(c.$slots,"default",{class:"flex-1-1"})]))}});export{$t as default};
