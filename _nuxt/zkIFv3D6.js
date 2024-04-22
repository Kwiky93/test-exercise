import{aS as ae,S as w,as as q,r as Y,az as ye,e as Z,H as A,aE as Ee,at as gt,T as N,aT as Fe,a1 as re,g as pe,Y as ht,aU as yt,ab as pt,c as h,N as D,aA as Me,aV as ze,aW as bt,aX as St,aY as _t,an as G,aw as x,a2 as fe,a3 as De,a4 as je,aZ as xt,ac as j,a_ as wt,a$ as Ct,z as g,a0 as qe,b0 as be,ad as L,ao as Rt,ak as Ge,af as Pe,ag as Tt,P as Ue,aq as Et,M as ve,aP as zt,b1 as Ie,a8 as Pt,a9 as Xe,ah as It,aF as Lt,a7 as Ye,o as $t,a6 as Je,ai as kt,b2 as Bt,b3 as Ot,$ as Ke,U as Vt,aI as Nt,aB as At,b4 as Wt,b5 as Le,aa as Ht}from"./BNyEH1L4.js";const Ze=["top","bottom"],Ft=["start","end","left","right"];function xn(e,n){let[s,t]=e.split(" ");return t||(t=ae(Ze,s)?"start":ae(Ft,s)?"top":"center"),{side:$e(s,n),align:$e(t,n)}}function $e(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function wn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Cn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Rn(e){return{side:e.align,align:e.side}}function Tn(e){return ae(Ze,e.side)?"y":"x"}class se{constructor(n){let{x:s,y:t,width:i,height:a}=n;this.x=s,this.y=t,this.width=i,this.height=a}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function En(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function zn(e){return Array.isArray(e)?new se({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Pn(e){const n=e.getBoundingClientRect(),s=getComputedStyle(e),t=s.transform;if(t){let i,a,r,o,l;if(t.startsWith("matrix3d("))i=t.slice(9,-1).split(/, /),a=+i[0],r=+i[5],o=+i[12],l=+i[13];else if(t.startsWith("matrix("))i=t.slice(7,-1).split(/, /),a=+i[0],r=+i[3],o=+i[4],l=+i[5];else return new se(n);const u=s.transformOrigin,c=n.x-o-(1-a)*parseFloat(u),d=n.y-l-(1-r)*parseFloat(u.slice(u.indexOf(" ")+1)),f=a?n.width/a:e.offsetWidth+1,v=r?n.height/r:e.offsetHeight+1;return new se({x:c,y:d,width:f,height:v})}else return new se(n)}function In(e,n,s){if(typeof e.animate>"u")return{finished:Promise.resolve()};let t;try{t=e.animate(n,s)}catch{return{finished:Promise.resolve()}}return typeof t.finished>"u"&&(t.finished=new Promise(i=>{t.onfinish=()=>{i(t)}})),t}const Q=w({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),Ln="cubic-bezier(0.4, 0, 0.2, 1)",$n="cubic-bezier(0.0, 0, 0.2, 1)",kn="cubic-bezier(0.4, 0, 1, 1)";function ee(e){const n=q("useRender");n.render=e}function ke(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const s=Y(),t=Y();if(ye){const i=new ResizeObserver(a=>{e==null||e(a,i),a.length&&(n==="content"?t.value=a[0].contentRect:t.value=a[0].target.getBoundingClientRect())});Z(()=>{i.disconnect()}),A(s,(a,r)=>{r&&(i.unobserve(Ee(r)),t.value=void 0),a&&i.observe(Ee(a))},{flush:"post"})}return{resizeRef:s,contentRect:gt(t)}}const Se=w({tag:{type:String,default:"div"}},"tag"),Mt=w({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function I(e,n,s){return N()({name:e,props:Mt({mode:s,origin:n}),setup(t,i){let{slots:a}=i;const r={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:l,offsetLeft:u,offsetWidth:c,offsetHeight:d}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${l}px`,o.style.left=`${u}px`,o.style.width=`${c}px`,o.style.height=`${d}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:l,top:u,left:c,width:d,height:f}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=l||"",o.style.top=u||"",o.style.left=c||"",o.style.width=d||"",o.style.height=f||""}}};return()=>{const o=t.group?Fe:re;return pe(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:r},a.default)}}})}function Qe(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return N()({name:e,props:{mode:{type:String,default:s},disabled:Boolean},setup(t,i){let{slots:a}=i;return()=>pe(re,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:n},a.default)}})}function et(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=ht(`offset-${s}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[s]:r.style[s]}},onEnter(r){const o=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const l=`${r[t]}px`;r.style[s]="0",r.offsetHeight,r.style.transition=o.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[s]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[s]:r.style[s]},r.style.overflow="hidden",r.style[s]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[s]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(r){e&&r._parent&&r._parent.classList.remove(e),a(r)}function a(r){const o=r._initialStyle[s];r.style.overflow=r._initialStyle.overflow,o!=null&&(r.style[s]=o),delete r._initialStyle}}I("fab-transition","center center","out-in");I("dialog-bottom-transition");I("dialog-top-transition");const Be=I("fade-transition");I("scale-transition");I("scroll-x-transition");I("scroll-x-reverse-transition");I("scroll-y-transition");I("scroll-y-reverse-transition");I("slide-x-transition");I("slide-x-reverse-transition");const Bn=I("slide-y-transition");I("slide-y-reverse-transition");const On=Qe("expand-transition",et()),Vn=Qe("expand-x-transition",et("",!0)),Dt=w({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Nn=N(!1)({name:"VDefaultsProvider",props:Dt(),setup(e,n){let{slots:s}=n;const{defaults:t,disabled:i,reset:a,root:r,scoped:o}=yt(e);return pt(t,{reset:a,root:r,scoped:o,disabled:i}),()=>{var l;return(l=s.default)==null?void 0:l.call(s)}}});function _e(e){return Me(()=>{const n=[],s={};if(e.value.background)if(ze(e.value.background)){if(s.backgroundColor=e.value.background,!e.value.text&&bt(e.value.background)){const t=St(e.value.background);if(t.a==null||t.a===1){const i=_t(t);s.color=i,s.caretColor=i}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(ze(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:s}})}function tt(e,n){const s=h(()=>({text:D(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:i}=_e(s);return{textColorClasses:t,textColorStyles:i}}function me(e,n){const s=h(()=>({background:D(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:i}=_e(s);return{backgroundColorClasses:t,backgroundColorStyles:i}}const jt=["x-small","small","default","large","x-large"],qt=w({size:{type:[String,Number],default:"default"}},"size");function Gt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return Me(()=>{let s,t;return ae(jt,e.size)?s=`${n}--size-${e.size}`:e.size&&(t={width:x(e.size),height:x(e.size)}),{sizeClasses:s,sizeStyles:t}})}const Ut=w({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:fe,...Q(),...qt(),...Se({tag:"i"}),...De()},"VIcon"),Oe=N()({name:"VIcon",props:Ut(),setup(e,n){let{attrs:s,slots:t}=n;const i=Y(),{themeClasses:a}=je(e),{iconData:r}=xt(h(()=>i.value||e.icon)),{sizeClasses:o}=Gt(e),{textColorClasses:l,textColorStyles:u}=tt(j(e,"color"));return ee(()=>{var f,v;const c=(f=t.default)==null?void 0:f.call(t);c&&(i.value=(v=wt(c).filter(m=>m.type===Ct&&m.children&&typeof m.children=="string")[0])==null?void 0:v.children);const d=!!(s.onClick||s.onClickOnce);return g(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",a.value,o.value,l.value,{"v-icon--clickable":d,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:x(e.size),height:x(e.size),width:x(e.size)},u.value,e.style],role:d?"button":void 0,"aria-hidden":!d,tabindex:d?e.disabled?-1:0:void 0},{default:()=>[c]})}),{}}}),Xt=w({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Yt(e){return{dimensionStyles:h(()=>({height:x(e.height),maxHeight:x(e.maxHeight),maxWidth:x(e.maxWidth),minHeight:x(e.minHeight),minWidth:x(e.minWidth),width:x(e.width)}))}}function Jt(e){return{aspectStyles:h(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const nt=w({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...Q(),...Xt()},"VResponsive"),Ve=N()({name:"VResponsive",props:nt(),setup(e,n){let{slots:s}=n;const{aspectStyles:t}=Jt(e),{dimensionStyles:i}=Yt(e);return ee(()=>{var a;return g("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[g("div",{class:"v-responsive__sizer",style:t.value},null),(a=s.additional)==null?void 0:a.call(s),s.default&&g("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),st=w({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function at(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{roundedClasses:h(()=>{const t=D(e)?e.value:e.rounded,i=D(e)?e.value:e.tile,a=[];if(t===!0||t==="")a.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))a.push(`rounded-${r}`);else(i||t===!1)&&a.push("rounded-0");return a})}}const Kt=w({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),ne=(e,n)=>{let{slots:s}=n;const{transition:t,disabled:i,group:a,...r}=e,{component:o=a?Fe:re,...l}=typeof t=="object"?t:{};return pe(o,qe(typeof t=="string"?{name:i?"":t}:l,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:i,group:a}).filter(u=>{let[c,d]=u;return d!==void 0})),r),s)};function Zt(e,n){if(!be)return;const s=n.modifiers||{},t=n.value,{handler:i,options:a}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var d;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const u=(d=e._observe)==null?void 0:d[n.instance.$.uid];if(!u)return;const c=o.some(f=>f.isIntersecting);i&&(!s.quiet||u.init)&&(!s.once||c||u.init)&&i(c,o,l),c&&s.once?it(e,n):u.init=!0},a);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function it(e,n){var t;const s=(t=e._observe)==null?void 0:t[n.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Qt={mounted:Zt,unmounted:it},en=Qt,tn=w({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...nt(),...Q(),...st(),...Kt()},"VImg"),An=N()({name:"VImg",directives:{intersect:en},props:tn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:s,slots:t}=n;const{backgroundColorClasses:i,backgroundColorStyles:a}=me(j(e,"color")),{roundedClasses:r}=at(e),o=q("VImg"),l=L(""),u=Y(),c=L(e.eager?"loading":"idle"),d=L(),f=L(),v=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=h(()=>v.value.aspect||d.value/f.value||0);A(()=>e.src,()=>{p(c.value!=="idle")}),A(m,(b,T)=>{!b&&T&&u.value&&z(u.value)}),Rt(()=>p());function p(b){if(!(e.eager&&b)&&!(be&&!b&&!e.eager)){if(c.value="loading",v.value.lazySrc){const T=new Image;T.src=v.value.lazySrc,z(T,null)}v.value.src&&Ge(()=>{var T;s("loadstart",((T=u.value)==null?void 0:T.currentSrc)||v.value.src),setTimeout(()=>{var R;if(!o.isUnmounted)if((R=u.value)!=null&&R.complete){if(u.value.naturalWidth||_(),c.value==="error")return;m.value||z(u.value,null),c.value==="loading"&&C()}else m.value||z(u.value),E()})})}}function C(){var b;o.isUnmounted||(E(),z(u.value),c.value="loaded",s("load",((b=u.value)==null?void 0:b.currentSrc)||v.value.src))}function _(){var b;o.isUnmounted||(c.value="error",s("error",((b=u.value)==null?void 0:b.currentSrc)||v.value.src))}function E(){const b=u.value;b&&(l.value=b.currentSrc||b.src)}let k=-1;Z(()=>{clearTimeout(k)});function z(b){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const R=()=>{if(clearTimeout(k),o.isUnmounted)return;const{naturalHeight:F,naturalWidth:te}=b;F||te?(d.value=te,f.value=F):!b.complete&&c.value==="loading"&&T!=null?k=window.setTimeout(R,T):(b.currentSrc.endsWith(".svg")||b.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,f.value=1)};R()}const W=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),H=()=>{var R;if(!v.value.src||c.value==="idle")return null;const b=g("img",{class:["v-img__img",W.value],style:{objectPosition:e.position},src:v.value.src,srcset:v.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:u,onLoad:C,onError:_},null),T=(R=t.sources)==null?void 0:R.call(t);return g(ne,{transition:e.transition,appear:!0},{default:()=>[Pe(T?g("picture",{class:"v-img__picture"},[T,b]):b,[[Et,c.value==="loaded"]])]})},U=()=>g(ne,{transition:e.transition},{default:()=>[v.value.lazySrc&&c.value!=="loaded"&&g("img",{class:["v-img__img","v-img__img--preload",W.value],style:{objectPosition:e.position},src:v.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),B=()=>t.placeholder?g(ne,{transition:e.transition,appear:!0},{default:()=>[(c.value==="loading"||c.value==="error"&&!t.error)&&g("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,O=()=>t.error?g(ne,{transition:e.transition,appear:!0},{default:()=>[c.value==="error"&&g("div",{class:"v-img__error"},[t.error()])]}):null,X=()=>e.gradient?g("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=L(!1);{const b=A(m,T=>{T&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),b())})}return ee(()=>{const b=Ve.filterProps(e);return Pe(g(Ve,qe({class:["v-img",{"v-img--booting":!V.value},i.value,r.value,e.class],style:[{width:x(e.width==="auto"?d.value:e.width)},a.value,e.style]},b,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>g(Ue,null,[g(H,null,null),g(U,null,null),g(X,null,null),g(B,null,null),g(O,null,null)]),default:t.default}),[[Tt("intersect"),{handler:p,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:u,state:c,naturalWidth:d,naturalHeight:f}}}),nn=[null,"default","comfortable","compact"],Wn=w({density:{type:String,default:"default",validator:e=>nn.includes(e)}},"density");function Hn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{densityClasses:h(()=>`${n}--density-${e.density}`)}}const sn=["elevated","flat","tonal","outlined","text","plain"];function Fn(e,n){return g(Ue,null,[e&&g("span",{key:"overlay",class:`${n}__overlay`},null),g("span",{key:"underlay",class:`${n}__underlay`},null)])}const Mn=w({color:String,variant:{type:String,default:"elevated",validator:e=>sn.includes(e)}},"variant");function Dn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();const s=h(()=>{const{variant:a}=ve(e);return`${n}--variant-${a}`}),{colorClasses:t,colorStyles:i}=_e(h(()=>{const{variant:a,color:r}=ve(e);return{[["elevated","flat"].includes(a)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:i,variantClasses:s}}const ge=Symbol("rippleStop"),an=80;function Ne(e,n){e.style.transform=n,e.style.webkitTransform=n}function he(e){return e.constructor.name==="TouchEvent"}function rt(e){return e.constructor.name==="KeyboardEvent"}const rn=function(e,n){var d;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,i=0;if(!rt(e)){const f=n.getBoundingClientRect(),v=he(e)?e.touches[e.touches.length-1]:e;t=v.clientX-f.left,i=v.clientY-f.top}let a=0,r=.3;(d=n._ripple)!=null&&d.circle?(r=.15,a=n.clientWidth/2,a=s.center?a:a+Math.sqrt((t-a)**2+(i-a)**2)/4):a=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-a*2)/2}px`,l=`${(n.clientHeight-a*2)/2}px`,u=s.center?o:`${t-a}px`,c=s.center?l:`${i-a}px`;return{radius:a,scale:r,x:u,y:c,centerX:o,centerY:l}},ie={show(e,n){var v;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=n==null?void 0:n._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),i=document.createElement("span");t.appendChild(i),t.className="v-ripple__container",s.class&&(t.className+=` ${s.class}`);const{radius:a,scale:r,x:o,y:l,centerX:u,centerY:c}=rn(e,n,s),d=`${a*2}px`;i.className="v-ripple__animation",i.style.width=d,i.style.height=d,n.appendChild(t);const f=window.getComputedStyle(n);f&&f.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Ne(i,`translate(${o}, ${l}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Ne(i,`translate(${u}, ${c}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const s=n[n.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const t=performance.now()-Number(s.dataset.activated),i=Math.max(250-t,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=s.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(s.parentNode)},300)},i)}};function ot(e){return typeof e>"u"||!!e}function J(e){const n={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[ge])){if(e[ge]=!0,he(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(n.center=s._ripple.centered||rt(e),s._ripple.class&&(n.class=s._ripple.class),he(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{ie.show(e,s,n)},s._ripple.showTimer=window.setTimeout(()=>{var t;(t=s==null?void 0:s._ripple)!=null&&t.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},an)}else ie.show(e,s,n)}}function Ae(e){e[ge]=!0}function P(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{P(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),ie.hide(n)}}function lt(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let K=!1;function ut(e){!K&&(e.keyCode===Ie.enter||e.keyCode===Ie.space)&&(K=!0,J(e))}function ct(e){K=!1,P(e)}function dt(e){K&&(K=!1,P(e))}function ft(e,n,s){const{value:t,modifiers:i}=n,a=ot(t);if(a||ie.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,zt(t)&&t.class&&(e._ripple.class=t.class),a&&!s){if(i.stop){e.addEventListener("touchstart",Ae,{passive:!0}),e.addEventListener("mousedown",Ae);return}e.addEventListener("touchstart",J,{passive:!0}),e.addEventListener("touchend",P,{passive:!0}),e.addEventListener("touchmove",lt,{passive:!0}),e.addEventListener("touchcancel",P),e.addEventListener("mousedown",J),e.addEventListener("mouseup",P),e.addEventListener("mouseleave",P),e.addEventListener("keydown",ut),e.addEventListener("keyup",ct),e.addEventListener("blur",dt),e.addEventListener("dragstart",P,{passive:!0})}else!a&&s&&vt(e)}function vt(e){e.removeEventListener("mousedown",J),e.removeEventListener("touchstart",J),e.removeEventListener("touchend",P),e.removeEventListener("touchmove",lt),e.removeEventListener("touchcancel",P),e.removeEventListener("mouseup",P),e.removeEventListener("mouseleave",P),e.removeEventListener("keydown",ut),e.removeEventListener("keyup",ct),e.removeEventListener("dragstart",P),e.removeEventListener("blur",dt)}function on(e,n){ft(e,n,!1)}function ln(e){delete e._ripple,vt(e)}function un(e,n){if(n.value===n.oldValue)return;const s=ot(n.oldValue);ft(e,n,s)}const jn={mounted:on,unmounted:ln,updated:un},cn=w({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),qn=w({value:null,disabled:Boolean,selectedClass:String},"group-item");function Gn(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=q("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Pt();Xe(Symbol.for(`${n.description}:id`),i);const a=It(n,null);if(!a){if(!s)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const r=j(e,"value"),o=h(()=>!!(a.disabled.value||e.disabled));a.register({id:i,value:r,disabled:o},t),Z(()=>{a.unregister(i)});const l=h(()=>a.isSelected(i)),u=h(()=>l.value&&[a.selectedClass.value,e.selectedClass]);return A(l,c=>{t.emit("group:selected",{value:c})},{flush:"sync"}),{id:i,isSelected:l,toggle:()=>a.select(i,!l.value),select:c=>a.select(i,c),selectedClass:u,value:r,disabled:o,group:a}}function dn(e,n){let s=!1;const t=Lt([]),i=Ye(e,"modelValue",[],f=>f==null?[]:mt(t,kt(f)),f=>{const v=vn(t,f);return e.multiple?v:v[0]}),a=q("useGroup");function r(f,v){const m=f,p=Symbol.for(`${n.description}:id`),_=Bt(p,a==null?void 0:a.vnode).indexOf(v);ve(m.value)==null&&(m.value=_),_>-1?t.splice(_,0,m):t.push(m)}function o(f){if(s)return;l();const v=t.findIndex(m=>m.id===f);t.splice(v,1)}function l(){const f=t.find(v=>!v.disabled);f&&e.mandatory==="force"&&!i.value.length&&(i.value=[f.id])}$t(()=>{l()}),Z(()=>{s=!0});function u(f,v){const m=t.find(p=>p.id===f);if(!(v&&(m!=null&&m.disabled)))if(e.multiple){const p=i.value.slice(),C=p.findIndex(E=>E===f),_=~C;if(v=v??!_,_&&e.mandatory&&p.length<=1||!_&&e.max!=null&&p.length+1>e.max)return;C<0&&v?p.push(f):C>=0&&!v&&p.splice(C,1),i.value=p}else{const p=i.value.includes(f);if(e.mandatory&&p)return;i.value=v??!p?[f]:[]}}function c(f){if(e.multiple,i.value.length){const v=i.value[0],m=t.findIndex(_=>_.id===v);let p=(m+f)%t.length,C=t[p];for(;C.disabled&&p!==m;)p=(p+f)%t.length,C=t[p];if(C.disabled)return;i.value=[t[p].id]}else{const v=t.find(m=>!m.disabled);v&&(i.value=[v.id])}}const d={register:r,unregister:o,selected:i,select:u,disabled:j(e,"disabled"),prev:()=>c(t.length-1),next:()=>c(1),isSelected:f=>i.value.includes(f),selectedClass:h(()=>e.selectedClass),items:h(()=>t),getItemIndex:f=>fn(t,f)};return Xe(n,d),d}function fn(e,n){const s=mt(e,[n]);return s.length?e.findIndex(t=>t.id===s[0]):-1}function mt(e,n){const s=[];return n.forEach(t=>{const i=e.find(r=>Je(t,r.value)),a=e[t];(i==null?void 0:i.value)!=null?s.push(i.id):a!=null&&s.push(a.id)}),s}function vn(e,n){const s=[];return n.forEach(t=>{const i=e.findIndex(a=>a.id===t);if(~i){const a=e[i];s.push(a.value!=null?a.value:i)}}),s}function We(e){const s=Math.abs(e);return Math.sign(e)*(s/((1/.501-2)*(1-s)+1))}function He(e){let{selectedElement:n,containerSize:s,contentSize:t,isRtl:i,currentScrollOffset:a,isHorizontal:r}=e;const o=r?n.clientWidth:n.clientHeight,l=r?n.offsetLeft:n.offsetTop,u=i&&r?t-l-o:l,c=s+a,d=o+u,f=o*.4;return u<=a?a=Math.max(u-f,0):c<=d&&(a=Math.min(a-(c-d-f),t-s)),a}function mn(e){let{selectedElement:n,containerSize:s,contentSize:t,isRtl:i,isHorizontal:a}=e;const r=a?n.clientWidth:n.clientHeight,o=a?n.offsetLeft:n.offsetTop,l=i&&a?t-o-r/2-s/2:o+r/2-s/2;return Math.min(t-s,Math.max(0,l))}const gn=Symbol.for("vuetify:v-slide-group"),hn=w({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:gn},nextIcon:{type:fe,default:"$next"},prevIcon:{type:fe,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Q(),...Ot(),...Se(),...cn({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Un=N()({name:"VSlideGroup",props:hn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const{isRtl:t}=Ke(),{displayClasses:i,mobile:a}=Vt(e),r=dn(e,e.symbol),o=L(!1),l=L(0),u=L(0),c=L(0),d=h(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:v}=ke(),{resizeRef:m,contentRect:p}=ke(),C=h(()=>r.selected.value.length?r.items.value.findIndex(y=>y.id===r.selected.value[0]):-1),_=h(()=>r.selected.value.length?r.items.value.findIndex(y=>y.id===r.selected.value[r.selected.value.length-1]):-1);if(ye){let y=-1;A(()=>[r.selected.value,v.value,p.value,d.value],()=>{cancelAnimationFrame(y),y=requestAnimationFrame(()=>{if(v.value&&p.value){const S=d.value?"width":"height";u.value=v.value[S],c.value=p.value[S],o.value=u.value+1<c.value}if(C.value>=0&&m.value){const S=m.value.children[_.value];C.value===0||!o.value?l.value=0:e.centerActive?l.value=mn({selectedElement:S,containerSize:u.value,contentSize:c.value,isRtl:t.value,isHorizontal:d.value}):o.value&&(l.value=He({selectedElement:S,containerSize:u.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:l.value,isHorizontal:d.value}))}})})}const E=L(!1);let k=0,z=0;function W(y){const S=d.value?"clientX":"clientY";z=(t.value&&d.value?-1:1)*l.value,k=y.touches[0][S],E.value=!0}function H(y){if(!o.value)return;const S=d.value?"clientX":"clientY",$=t.value&&d.value?-1:1;l.value=$*(z+k-y.touches[0][S])}function U(y){const S=c.value-u.value;l.value<0||!o.value?l.value=0:l.value>=S&&(l.value=S),E.value=!1}function B(){f.value&&(f.value[d.value?"scrollLeft":"scrollTop"]=0)}const O=L(!1);function X(y){if(O.value=!0,!(!o.value||!m.value)){for(const S of y.composedPath())for(const $ of m.value.children)if($===S){l.value=He({selectedElement:$,containerSize:u.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:l.value,isHorizontal:d.value});return}}}function V(y){O.value=!1}function b(y){var S;!O.value&&!(y.relatedTarget&&((S=m.value)!=null&&S.contains(y.relatedTarget)))&&R()}function T(y){m.value&&(d.value?y.key==="ArrowRight"?R(t.value?"prev":"next"):y.key==="ArrowLeft"&&R(t.value?"next":"prev"):y.key==="ArrowDown"?R("next"):y.key==="ArrowUp"&&R("prev"),y.key==="Home"?R("first"):y.key==="End"&&R("last"))}function R(y){var S,$,Ce,Re,Te;if(m.value)if(!y)(S=Nt(m.value)[0])==null||S.focus();else if(y==="next"){const M=($=m.value.querySelector(":focus"))==null?void 0:$.nextElementSibling;M?M.focus():R("first")}else if(y==="prev"){const M=(Ce=m.value.querySelector(":focus"))==null?void 0:Ce.previousElementSibling;M?M.focus():R("last")}else y==="first"?(Re=m.value.firstElementChild)==null||Re.focus():y==="last"&&((Te=m.value.lastElementChild)==null||Te.focus())}function F(y){const S=l.value+(y==="prev"?-1:1)*u.value;l.value=At(S,0,c.value-u.value)}const te=h(()=>{let y=l.value>c.value-u.value?-(c.value-u.value)+We(c.value-u.value-l.value):-l.value;l.value<=0&&(y=We(-l.value));const S=t.value&&d.value?-1:1;return{transform:`translate${d.value?"X":"Y"}(${S*y}px)`,transition:E.value?"none":"",willChange:E.value?"transform":""}}),oe=h(()=>({next:r.next,prev:r.prev,select:r.select,isSelected:r.isSelected})),le=h(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!a.value;case!0:return o.value||Math.abs(l.value)>0;case"mobile":return a.value||o.value||Math.abs(l.value)>0;default:return!a.value&&(o.value||Math.abs(l.value)>0)}}),xe=h(()=>Math.abs(l.value)>0),we=h(()=>c.value>Math.abs(l.value)+u.value);return ee(()=>g(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":le.value,"v-slide-group--is-overflowing":o.value},i.value,e.class],style:e.style,tabindex:O.value||r.selected.value.length?-1:0,onFocus:b},{default:()=>{var y,S,$;return[le.value&&g("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!xe.value}],onClick:()=>xe.value&&F("prev")},[((y=s.prev)==null?void 0:y.call(s,oe.value))??g(Be,null,{default:()=>[g(Oe,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),g("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:B},[g("div",{ref:m,class:"v-slide-group__content",style:te.value,onTouchstartPassive:W,onTouchmovePassive:H,onTouchendPassive:U,onFocusin:X,onFocusout:V,onKeydown:T},[(S=s.default)==null?void 0:S.call(s,oe.value)])]),le.value&&g("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!we.value}],onClick:()=>we.value&&F("next")},[(($=s.next)==null?void 0:$.call(s,oe.value))??g(Be,null,{default:()=>[g(Oe,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:r.selected,scrollTo:F,scrollOffset:l,focus:R}}}),Xn=w({border:[Boolean,Number,String]},"border");function Yn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{borderClasses:h(()=>{const t=D(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))i.push(`border-${a}`);return i})}}const Jn=w({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Kn(e){return{elevationClasses:h(()=>{const s=D(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}function yn(){const e=q("useRoute");return h(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function Zn(){var e,n;return(n=(e=q("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function Qn(e,n){var u,c;const s=Wt("RouterLink"),t=h(()=>!!(e.href||e.to)),i=h(()=>(t==null?void 0:t.value)||Le(n,"click")||Le(e,"click"));if(typeof s=="string"||!("useLink"in s))return{isLink:t,isClickable:i,href:j(e,"href")};const a=h(()=>({...e,to:j(()=>e.to||"")})),r=s.useLink(a.value),o=h(()=>e.to?r:void 0),l=yn();return{isLink:t,isClickable:i,route:(u=o.value)==null?void 0:u.route,navigate:(c=o.value)==null?void 0:c.navigate,isActive:h(()=>{var d,f,v;return o.value?e.exact?l.value?((v=o.value.isExactActive)==null?void 0:v.value)&&Je(o.value.route.value.query,l.value.query):((f=o.value.isExactActive)==null?void 0:f.value)??!1:((d=o.value.isActive)==null?void 0:d.value)??!1:!1}),href:h(()=>{var d;return e.to?(d=o.value)==null?void 0:d.route.value.href:e.href})}}const es=w({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ue=!1;function ts(e,n){let s=!1,t,i;ye&&(Ge(()=>{window.addEventListener("popstate",a),t=e==null?void 0:e.beforeEach((r,o,l)=>{ue?s?n(l):l():setTimeout(()=>s?n(l):l()),ue=!0}),i=e==null?void 0:e.afterEach(()=>{ue=!1})}),Ht(()=>{window.removeEventListener("popstate",a),t==null||t(),i==null||i()}));function a(r){var o;(o=r.state)!=null&&o.replaced||(s=!0,setTimeout(()=>s=!1))}}const ce=Symbol("Forwarded refs");function de(e,n){let s=e;for(;s;){const t=Reflect.getOwnPropertyDescriptor(s,n);if(t)return t;s=Object.getPrototypeOf(s)}}function ns(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),t=1;t<n;t++)s[t-1]=arguments[t];return e[ce]=s,new Proxy(e,{get(i,a){if(Reflect.has(i,a))return Reflect.get(i,a);if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const r of s)if(r.value&&Reflect.has(r.value,a)){const o=Reflect.get(r.value,a);return typeof o=="function"?o.bind(r.value):o}}},has(i,a){if(Reflect.has(i,a))return!0;if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const r of s)if(r.value&&Reflect.has(r.value,a))return!0;return!1},set(i,a,r){if(Reflect.has(i,a))return Reflect.set(i,a,r);if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const o of s)if(o.value&&Reflect.has(o.value,a))return Reflect.set(o.value,a,r);return!1},getOwnPropertyDescriptor(i,a){var o;const r=Reflect.getOwnPropertyDescriptor(i,a);if(r)return r;if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const l of s){if(!l.value)continue;const u=de(l.value,a)??("_"in l.value?de((o=l.value._)==null?void 0:o.setupState,a):void 0);if(u)return u}for(const l of s){const u=l.value&&l.value[ce];if(!u)continue;const c=u.slice();for(;c.length;){const d=c.shift(),f=de(d.value,a);if(f)return f;const v=d.value&&d.value[ce];v&&c.push(...v)}}}}})}function pn(e,n){const s=Y(),t=L(!1);if(be){const i=new IntersectionObserver(a=>{e==null||e(a,i),t.value=!!a.find(r=>r.isIntersecting)},n);Z(()=>{i.disconnect()}),A(s,(a,r)=>{r&&(i.unobserve(r),t.value=!1),a&&i.observe(a)},{flush:"post"})}return{intersectionRef:s,isIntersecting:t}}const bn=w({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Q(),...st(),...Se(),...De()},"VProgressLinear"),Sn=N()({name:"VProgressLinear",props:bn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const t=Ye(e,"modelValue"),{isRtl:i,rtlClasses:a}=Ke(),{themeClasses:r}=je(e),{textColorClasses:o,textColorStyles:l}=tt(e,"color"),{backgroundColorClasses:u,backgroundColorStyles:c}=me(h(()=>e.bgColor||e.color)),{backgroundColorClasses:d,backgroundColorStyles:f}=me(e,"color"),{roundedClasses:v}=at(e),{intersectionRef:m,isIntersecting:p}=pn(),C=h(()=>parseInt(e.max,10)),_=h(()=>parseInt(e.height,10)),E=h(()=>parseFloat(e.bufferValue)/C.value*100),k=h(()=>parseFloat(t.value)/C.value*100),z=h(()=>i.value!==e.reverse),W=h(()=>e.indeterminate?"fade-transition":"slide-x-transition"),H=h(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function U(B){if(!m.value)return;const{left:O,right:X,width:V}=m.value.getBoundingClientRect(),b=z.value?V-B.clientX+(X-V):B.clientX-O;t.value=Math.round(b/V*C.value)}return ee(()=>g(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&p.value,"v-progress-linear--reverse":z.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},v.value,r.value,a.value,e.class],style:[{height:e.active?x(_.value):0,"--v-progress-linear-height":x(_.value)},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:k.value,onClick:e.clickable&&U},{default:()=>[e.stream&&g("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...l.value,[z.value?"left":"right"]:x(-_.value),borderTop:`${x(_.value/2)} dotted`,opacity:H.value,top:`calc(50% - ${x(_.value/4)})`,width:x(100-E.value,"%"),"--v-progress-linear-stream-to":x(_.value*(z.value?1:-1))}},null),g("div",{class:["v-progress-linear__background",u.value],style:[c.value,{opacity:H.value,width:x(e.stream?E.value:100,"%")}]},null),g(re,{name:W.value},{default:()=>[e.indeterminate?g("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(B=>g("div",{key:B,class:["v-progress-linear__indeterminate",B,d.value],style:f.value},null))]):g("div",{class:["v-progress-linear__determinate",d.value],style:[f.value,{width:x(k.value,"%")}]},null)]}),s.default&&g("div",{class:"v-progress-linear__content"},[s.default({value:k.value,buffer:E.value})])]})),{}}}),ss=w({loading:[Boolean,String]},"loader");function as(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{loaderClasses:h(()=>({[`${n}--loading`]:e.loading}))}}function is(e,n){var t;let{slots:s}=n;return g("div",{class:`${e.name}__loader`},[((t=s.default)==null?void 0:t.call(s,{color:e.color,isActive:e.active}))||g(Sn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}export{ss as $,dn as A,Un as B,Xn as C,Jn as D,qn as E,es as F,Yn as G,Kn as H,Gn as I,Qn as J,Vn as K,On as L,ne as M,Xt as N,Yt as O,xn as P,wn as Q,jn as R,Cn as S,Rn as T,se as U,An as V,Tn as W,En as X,Zn as Y,ts as Z,ns as _,Se as a,as as a0,is as a1,en as a2,ke as a3,pn as a4,In as b,kn as c,$n as d,Wn as e,st as f,zn as g,qt as h,Mn as i,Dn as j,Hn as k,at as l,Q as m,Pn as n,Gt as o,Oe as p,Nn as q,Fn as r,Ln as s,tt as t,ee as u,me as v,Kt as w,Bn as x,hn as y,cn as z};
