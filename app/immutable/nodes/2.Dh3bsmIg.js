import{t as O,a as A,c as ze}from"../chunks/Bc7KEUY7.js";import{x as ue,o as z,a0 as Be,a9 as je,q as Ue,n as Ve,g as m,G as qe,v as Ye,w as ye,y as de,C as X,a3 as Qe,z as Se,A as Me,B as We,a7 as De,Y as Xe,M as q,am as xe,an as ge,_ as be,ao as Ze,ap as Je,a6 as $e,aq as et,ab as tt,ar as rt,as as nt,a1 as it,p as Q,j as W,k as _,m as E,s as D,i as oe,t as U,at as st,aj as P,K as M,a as Ie,au as K}from"../chunks/CXf07deZ.js";import{s as B,d as Re}from"../chunks/CWjyYLri.js";import{i as J,p as Y,u as se}from"../chunks/DQgY02pR.js";import{a as Le}from"../chunks/Bme7HCSx.js";import{a as Ne}from"../chunks/vxxZvVFZ.js";import{i as lt}from"../chunks/1fc67h0m.js";function ot(e,t){return t}function at(e,t,r,n){for(var i=[],l=t.length,s=0;s<l;s++)Je(t[s].e,i,!0);var o=l>0&&i.length===0&&r!==null;if(o){var c=r.parentNode;$e(c),c.append(r),n.clear(),j(e,t[0].prev,t[l-1].next)}et(i,()=>{for(var g=0;g<l;g++){var a=t[g];o||(n.delete(a.k),j(e,a.prev,a.next)),tt(a.e,!o)}})}function ft(e,t,r,n,i,l=null){var s=e,o={flags:t,items:new Map,first:null};{var c=e;s=z?ue(Be(c)):c.appendChild(je())}z&&Ue();var g=null,a=!1,h=qe(()=>{var u=r();return Xe(u)?u:u==null?[]:De(u)});Ve(()=>{var u=m(h),d=u.length;if(a&&d===0)return;a=d===0;let v=!1;if(z){var w=s.data===Ye;w!==(d===0)&&(s=ye(),ue(s),de(!1),v=!0)}if(z){for(var I=null,f,y=0;y<d;y++){if(X.nodeType===8&&X.data===Qe){s=X,v=!0,de(!1);break}var b=u[y],T=n(b,y);f=Ae(X,o,I,null,b,T,y,i,t,r),o.items.set(T,f),I=f}d>0&&ue(ye())}z||ct(u,o,s,i,t,n,r),l!==null&&(d===0?g?Se(g):g=Me(()=>l(s)):g!==null&&We(g,()=>{g=null})),v&&de(!0),m(h)}),z&&(s=X)}function ct(e,t,r,n,i,l,s){var o=e.length,c=t.items,g=t.first,a=g,h,u=null,d=[],v=[],w,I,f,y;for(y=0;y<o;y+=1){if(w=e[y],I=l(w,y),f=c.get(I),f===void 0){var b=a?a.e.nodes_start:r;u=Ae(b,t,u,u===null?t.first:u.next,w,I,y,n,i,s),c.set(I,u),d=[],v=[],a=u.next;continue}if((f.e.f&ge)!==0&&Se(f.e),f!==a){if(h!==void 0&&h.has(f)){if(d.length<v.length){var T=v[0],x;u=T.prev;var p=d[0],R=d[d.length-1];for(x=0;x<d.length;x+=1)ke(d[x],T,r);for(x=0;x<v.length;x+=1)h.delete(v[x]);j(t,p.prev,R.next),j(t,u,p),j(t,R,T),a=T,u=R,y-=1,d=[],v=[]}else h.delete(f),ke(f,a,r),j(t,f.prev,f.next),j(t,f,u===null?t.first:u.next),j(t,u,f),u=f;continue}for(d=[],v=[];a!==null&&a.k!==I;)(a.e.f&ge)===0&&(h??(h=new Set)).add(a),v.push(a),a=a.next;if(a===null)continue;f=a}d.push(f),u=f,a=f.next}if(a!==null||h!==void 0){for(var V=h===void 0?[]:De(h);a!==null;)(a.e.f&ge)===0&&V.push(a),a=a.next;var ce=V.length;if(ce>0){var He=o===0?r:null;at(t,V,He,c)}}be.first=t.first&&t.first.e,be.last=u&&u.e}function Ae(e,t,r,n,i,l,s,o,c,g){var a=(c&rt)!==0,h=(c&nt)===0,u=a?h?q(i):xe(i):i,d=(c&Ze)===0?s:xe(s),v={i:d,v:u,k:l,a:null,e:null,prev:r,next:n};try{return v.e=Me(()=>o(e,u,d,g),z),v.e.prev=r&&r.e,v.e.next=n&&n.e,r===null?t.first=v:(r.next=v,r.e.next=v.e),n!==null&&(n.prev=v,n.e.prev=v.e),v}finally{}}function ke(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,i=t?t.e.nodes_start:r,l=e.e.nodes_start;l!==n;){var s=it(l);i.before(l),l=s}}function j(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}const Ee=[...` 	
\r\f \v\uFEFF`];function ut(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i in r)if(r[i])n=n?n+" "+i:i;else if(n.length)for(var l=i.length,s=0;(s=n.indexOf(i,s))>=0;){var o=s+l;(s===0||Ee.includes(n[s-1]))&&(o===n.length||Ee.includes(n[o]))?n=(s===0?"":n.substring(0,s))+n.substring(o+1):s=o}}return n===""?null:n}function ae(e,t,r,n,i,l){var s=e.__className;if(z||s!==r||s===void 0){var o=ut(r,n,l);(!z||o!==e.getAttribute("class"))&&(o==null?e.removeAttribute("class"):e.className=o),e.__className=r}else if(l&&i!==l)for(var c in l){var g=!!l[c];(i==null||g!==!!i[c])&&e.classList.toggle(c,g)}return l}const me=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function ve(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n):e.attachEvent&&e.attachEvent("on".concat(t),r)}function Z(e,t,r,n){e.removeEventListener?e.removeEventListener(t,r,n):e.detachEvent&&e.detachEvent("on".concat(t),r)}function Oe(e,t){const r=t.slice(0,t.length-1);for(let n=0;n<r.length;n++)r[n]=e[r[n].toLowerCase()];return r}function Ke(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let r=t.lastIndexOf("");for(;r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function dt(e,t){const r=e.length>=t.length?e:t,n=e.length>=t.length?t:e;let i=!0;for(let l=0;l<r.length;l++)n.indexOf(r[l])===-1&&(i=!1);return i}const ee={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":me?173:189,"=":me?61:187,";":me?59:186,"'":222,"[":219,"]":221,"\\":220},F={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},le={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},L={16:!1,18:!1,17:!1,91:!1},S={};for(let e=1;e<20;e++)ee["f".concat(e)]=111+e;let C=[],$=null,Pe="all";const H=new Map,re=e=>ee[e.toLowerCase()]||F[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),gt=e=>Object.keys(ee).find(t=>ee[t]===e),mt=e=>Object.keys(F).find(t=>F[t]===e);function Ge(e){Pe=e||"all"}function te(){return Pe||"all"}function vt(){return C.slice(0)}function ht(){return C.map(e=>gt(e)||mt(e)||String.fromCharCode(e))}function pt(){const e=[];return Object.keys(S).forEach(t=>{S[t].forEach(r=>{let{key:n,scope:i,mods:l,shortcut:s}=r;e.push({scope:i,shortcut:s,mods:l,keys:n.split("+").map(o=>re(o))})})}),e}function yt(e){const t=e.target||e.srcElement,{tagName:r}=t;let n=!0;const i=r==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(i||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(n=!1),n}function xt(e){return typeof e=="string"&&(e=re(e)),C.indexOf(e)!==-1}function bt(e,t){let r,n;e||(e=te());for(const i in S)if(Object.prototype.hasOwnProperty.call(S,i))for(r=S[i],n=0;n<r.length;)r[n].scope===e?r.splice(n,1).forEach(s=>{let{element:o}=s;return pe(o)}):n++;te()===e&&Ge(t||"all")}function kt(e){let t=e.keyCode||e.which||e.charCode;const r=C.indexOf(t);if(r>=0&&C.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&C.splice(0,C.length),(t===93||t===224)&&(t=91),t in L){L[t]=!1;for(const n in F)F[n]===t&&(G[n]=!1)}}function Fe(e){if(typeof e>"u")Object.keys(S).forEach(i=>{Array.isArray(S[i])&&S[i].forEach(l=>ne(l)),delete S[i]}),pe(null);else if(Array.isArray(e))e.forEach(i=>{i.key&&ne(i)});else if(typeof e=="object")e.key&&ne(e);else if(typeof e=="string"){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];let[i,l]=r;typeof i=="function"&&(l=i,i=""),ne({key:e,scope:i,method:l,splitKey:"+"})}}const ne=e=>{let{key:t,scope:r,method:n,splitKey:i="+"}=e;Ke(t).forEach(s=>{const o=s.split(i),c=o.length,g=o[c-1],a=g==="*"?"*":re(g);if(!S[a])return;r||(r=te());const h=c>1?Oe(F,o):[],u=[];S[a]=S[a].filter(d=>{const w=(n?d.method===n:!0)&&d.scope===r&&dt(d.mods,h);return w&&u.push(d.element),!w}),u.forEach(d=>pe(d))})};function _e(e,t,r,n){if(t.element!==n)return;let i;if(t.scope===r||t.scope==="all"){i=t.mods.length>0;for(const l in L)Object.prototype.hasOwnProperty.call(L,l)&&(!L[l]&&t.mods.indexOf(+l)>-1||L[l]&&t.mods.indexOf(+l)===-1)&&(i=!1);(t.mods.length===0&&!L[16]&&!L[18]&&!L[17]&&!L[91]||i||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(C),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function we(e,t){const r=S["*"];let n=e.keyCode||e.which||e.charCode;if(!G.filter.call(this,e))return;if((n===93||n===224)&&(n=91),C.indexOf(n)===-1&&n!==229&&C.push(n),["metaKey","ctrlKey","altKey","shiftKey"].forEach(o=>{const c=le[o];e[o]&&C.indexOf(c)===-1?C.push(c):!e[o]&&C.indexOf(c)>-1?C.splice(C.indexOf(c),1):o==="metaKey"&&e[o]&&(C=C.filter(g=>g in le||g===n))}),n in L){L[n]=!0;for(const o in F)F[o]===n&&(G[o]=!0);if(!r)return}for(const o in L)Object.prototype.hasOwnProperty.call(L,o)&&(L[o]=e[le[o]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(C.indexOf(17)===-1&&C.push(17),C.indexOf(18)===-1&&C.push(18),L[17]=!0,L[18]=!0);const i=te();if(r)for(let o=0;o<r.length;o++)r[o].scope===i&&(e.type==="keydown"&&r[o].keydown||e.type==="keyup"&&r[o].keyup)&&_e(e,r[o],i,t);if(!(n in S))return;const l=S[n],s=l.length;for(let o=0;o<s;o++)if((e.type==="keydown"&&l[o].keydown||e.type==="keyup"&&l[o].keyup)&&l[o].key){const c=l[o],{splitKey:g}=c,a=c.key.split(g),h=[];for(let u=0;u<a.length;u++)h.push(re(a[u]));h.sort().join("")===C.sort().join("")&&_e(e,c,i,t)}}function G(e,t,r){C=[];const n=Ke(e);let i=[],l="all",s=document,o=0,c=!1,g=!0,a="+",h=!1,u=!1;for(r===void 0&&typeof t=="function"&&(r=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(l=t.scope),t.element&&(s=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(g=t.keydown),t.capture!==void 0&&(h=t.capture),typeof t.splitKey=="string"&&(a=t.splitKey),t.single===!0&&(u=!0)),typeof t=="string"&&(l=t),u&&Fe(e,l);o<n.length;o++)e=n[o].split(a),i=[],e.length>1&&(i=Oe(F,e)),e=e[e.length-1],e=e==="*"?"*":re(e),e in S||(S[e]=[]),S[e].push({keyup:c,keydown:g,scope:l,mods:i,shortcut:n[o],method:r,key:n[o],splitKey:a,element:s});if(typeof s<"u"&&window){if(!H.has(s)){const d=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;return we(w,s)},v=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;we(w,s),kt(w)};H.set(s,{keydownListener:d,keyupListenr:v,capture:h}),ve(s,"keydown",d,h),ve(s,"keyup",v,h)}if(!$){const d=()=>{C=[]};$={listener:d,capture:h},ve(window,"focus",d,h)}}}function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(S).forEach(r=>{S[r].filter(i=>i.scope===t&&i.shortcut===e).forEach(i=>{i&&i.method&&i.method()})})}function pe(e){const t=Object.values(S).flat();if(t.findIndex(n=>{let{element:i}=n;return i===e})<0){const{keydownListener:n,keyupListenr:i,capture:l}=H.get(e)||{};n&&i&&(Z(e,"keyup",i,l),Z(e,"keydown",n,l),H.delete(e))}if((t.length<=0||H.size<=0)&&(Object.keys(H).forEach(i=>{const{keydownListener:l,keyupListenr:s,capture:o}=H.get(i)||{};l&&s&&(Z(i,"keyup",s,o),Z(i,"keydown",l,o),H.delete(i))}),H.clear(),Object.keys(S).forEach(i=>delete S[i]),$)){const{listener:i,capture:l}=$;Z(window,"focus",i,l),$=null}}const he={getPressedKeyString:ht,setScope:Ge,getScope:te,deleteScope:bt,getPressedKeyCodes:vt,getAllKeyCodes:pt,isPressed:xt,filter:yt,trigger:Et,unbind:Fe,keyMap:ee,modifier:F,modifierMap:le};for(const e in he)Object.prototype.hasOwnProperty.call(he,e)&&(G[e]=he[e]);if(typeof window<"u"){const e=window.hotkeys;G.noConflict=t=>(t&&window.hotkeys===G&&(window.hotkeys=e),G),window.hotkeys=G}var _t=O('<span class="mr-2 font-[Impact] text-xl text-white md:text-4xl">POS</span> <div></div>',1),wt=O('<div></div> <span class="ml-2 font-[Impact] text-xl text-white md:text-4xl">POS</span>',1),Tt=O('<div class="flex items-center"><!></div>');function Te(e,t){Q(t,!0);var r=Tt(),n=_(r);{var i=s=>{var o=_t(),c=D(oe(o),2);let g;U(a=>g=ae(c,1,"h-0 w-0 border-y-[1rem] border-l-[2rem] border-transparent border-l-black md:border-y-[2rem] md:border-l-[4rem]",null,g,a),[()=>({"border-l-red-500":t.ballPossession==="Light"})]),A(s,o)},l=s=>{var o=wt(),c=oe(o);let g;st(2),U(a=>g=ae(c,1,"h-0 w-0 border-y-[1rem] border-r-[2rem] border-transparent border-r-black md:border-y-[2rem] md:border-r-[4rem]",null,g,a),[()=>({"border-r-red-500":t.ballPossession==="Dark"})]),A(s,o)};J(n,s=>{t.rightArrow?s(i):s(l,!1)})}E(r),A(e,r),W()}function fe(){const e=new Audio(`${Ne}/sounds/LongOfficialBuzzerSound.mp3`);return{start:function(){e.play()},stop:function(){e.pause(),e.currentTime=0}}}function Ct(){new Audio(`${Ne}/sounds/ShotClockSound.mp3`).play()}var N=(e=>(e.DARK="Dark",e.LIGHT="Light",e))(N||{}),k=(e=>(e.INCREMENT="Increment",e.DECREMENT="Decrement",e))(k||{}),St=O('<div class="flex justify-around px-1 pt-8.5 pb-3 md:p-3 md:pb-0"><!> <div class="rounded-2xl border-2 border-white bg-black px-4 py-3 md:border-4 md:py-2"><span class="font-[Digital-7] text-5xl leading-none text-red-500 md:text-[12rem]"> </span> <span class="font-[Digital-7] text-5xl leading-none text-red-500 md:text-[12rem]">:</span> <span class="font-[Digital-7] text-5xl leading-none text-red-500 md:text-[12rem]"> </span></div> <!></div>');function Mt(e,t){Q(t,!0);let r=P("Dark"),n=P(null),i=Y(t,"isGameTimerRunning",15),l=Y(t,"gameMinutes",15),s=Y(t,"gameSeconds",15);G("b, s, r, m, n, ctrl+m, ctrl+n",(p,R)=>{p.preventDefault(),R.key==="b"?o():R.key==="s"?c():R.key==="r"?d():R.key==="m"?h(k.INCREMENT):R.key==="n"?u(k.INCREMENT):R.key==="ctrl+m"?h(k.DECREMENT):R.key==="ctrl+n"&&u(k.DECREMENT)});function o(){M(r,m(r)==="Dark"?"Light":"Dark",!0)}function c(){i()?a():(t.shotClock>0||t.shotClock==="--")&&g()}function g(){i()||(i(!0),M(n,setInterval(()=>{if(l()===0&&s()===0){a(),fe().start();return}s()===0?(se(l,-1),s(59)):se(s,-1)},1e3),!0))}function a(){m(n)&&(clearInterval(m(n)),M(n,null)),i(!1)}function h(p){p===k.INCREMENT?se(l):p===k.DECREMENT&&l(Math.max(l()-1,0))}function u(p){p===k.INCREMENT?s(Math.min(s()+1,59)):p===k.DECREMENT&&s(Math.max(s()-1,0))}function d(){l(10),s(0)}Ie(()=>{t.shotClock<=0&&a()}),Le(()=>{a()});var v=St(),w=_(v);Te(w,{rightArrow:!1,get ballPossession(){return m(r)},set ballPossession(p){M(r,p,!0)}});var I=D(w,2),f=_(I),y=_(f,!0);E(f);var b=D(f,4),T=_(b,!0);E(b),E(I);var x=D(I,2);Te(x,{rightArrow:!0,get ballPossession(){return m(r)},set ballPossession(p){M(r,p,!0)}}),E(v),U(()=>{B(y,l()),B(T,(s()<=9?"0":"")+s())}),A(e,v),W()}var Dt=O('<div class="flex flex-col items-center gap-2"><h2 contenteditable="true" class="text-center font-[Impact] text-lg break-words text-white md:text-5xl md:tracking-wider"> </h2> <div class="w-full rounded-sm border border-white bg-black px-5 py-1 text-center"><span class="font-[Digital-7] text-7xl leading-none text-[#2CE71E] md:text-[12rem]"> </span></div></div>');function Ce(e,t){var r=Dt(),n=_(r),i=_(n,!0);E(n);var l=D(n,2),s=_(l),o=_(s,!0);E(s),E(l),E(r),U(()=>{B(i,t.teamName),B(o,t.teamScore)}),A(e,r)}var It=O('<div class="flex justify-between px-4 pt-3 md:justify-around md:p-5"><!> <div class="flex flex-col items-center gap-2"><h2 class="text-center font-[Impact] text-lg text-white md:text-5xl md:tracking-wider">SHOT CLOCK</h2> <div class="flex flex-col items-center justify-center rounded-sm border border-white bg-black px-2.5 py-2.5 text-center md:p-2.5"><span class="font-[Digital-7] text-6xl leading-none text-[#FFA500] md:text-[12rem]"> </span> <div></div></div></div> <!></div>');function Rt(e,t){Q(t,!0);let r=P(0),n=P(0),i=P(null),l=P(!0),s=Y(t,"shotClock",15);G("z, x, r, q, ctrl+q, ctrl+d, ctrl+1, ctrl+2, ctrl+3, ctrl+-, shift+1, shift+2, shift+3, shift+-",(x,p)=>{if(x.preventDefault(),p.key==="z")t.gameMinutes<1&&t.gameSeconds<24?s("--"):s(24);else if(p.key==="x")t.gameMinutes<1&&t.gameSeconds<14?s("--"):s(14);else if(p.key==="r")a();else if(p.key==="q")u(k.INCREMENT);else if(p.key==="ctrl+q")u(k.DECREMENT);else if(p.key==="ctrl+d")h();else if(p.key==="ctrl+-")m(r)>0&&K(r,-1);else if(p.key==="shift+-")m(n)>0&&K(n,-1);else if(p.key.startsWith("ctrl+")){const R=parseInt(p.key.split("+")[1]);M(r,m(r)+R)}else if(p.key.startsWith("shift+")){const R=parseInt(p.key.split("+")[1]);M(n,m(n)+R)}}),Ie(()=>{t.isGameTimerRunning?o():c()});function o(){m(i)||m(l)||M(i,setInterval(()=>{s()>1?se(s,-1):s()===1&&(s(0),g())},1e3),!0)}function c(){m(i)&&(clearInterval(m(i)),M(i,null))}function g(){Ct(),c()}function a(){s(24)}function h(){return M(l,!m(l))}function u(x){x===k.INCREMENT?s(Math.min(s()+1,24)):x===k.DECREMENT&&s(Math.max(s()-1,1))}Le(()=>{c()});var d=It(),v=_(d);Ce(v,{teamName:"DARK",get teamScore(){return m(r)}});var w=D(v,2),I=D(_(w),2),f=_(I),y=_(f,!0);E(f);var b=D(f,2);E(I),E(w);var T=D(w,2);Ce(T,{teamName:"LIGHT",get teamScore(){return m(n)}}),E(d),U(()=>{B(y,s()),ae(b,1,`h-1 w-1 rounded-full ${m(l)?"bg-white":"bg-[#90EE90]"}`)}),A(e,d),W()}var Lt=O('<div class="flex flex-col items-center gap-2 md:gap-1"><h3 class="text-md text-center font-[Impact] tracking-wider text-white md:text-3xl"> </h3> <div class="rounded-sm border border-white bg-black px-2 py-1 text-center md:px-5 md:py-1"><span class="font-[Digital-7] text-6xl leading-none text-red-500 md:text-[8rem]"> </span></div></div>');function ie(e,t){let r=Y(t,"isFoul",3,!1);var n=Lt(),i=_(n),l=_(i,!0);E(i);var s=D(i,2),o=_(s),c=_(o,!0);E(o),E(s),E(n),U(()=>{B(l,t.boxLabel),B(c,r()&&t.boxValue>4?"P":t.boxValue)}),A(e,n)}var Nt=O('<div class="flex justify-around px-1 pt-5 md:p-1 md:pb-5"><!> <!> <div class="flex flex-col items-center gap-2"><h3 class="text-md text-center font-[Impact] font-bold text-white md:text-3xl md:tracking-wider">PERIOD</h3> <div class="w-full rounded-sm border border-white bg-black px-2 py-1 text-center md:px-5 md:py-1"><span class="font-[Digital-7] text-6xl leading-none text-[#FFA500] md:text-[8rem]"> </span></div></div> <!> <!></div>');function At(e,t){Q(t,!1);let r=q(5),n=q(5),i=q(0),l=q(0),s=q(1);G("p, o, ctrl+t, ctrl+f, ctrl+y, ctrl+g, shift+t, shift+f, shift+y, shift+g",(b,T)=>{var p;b.preventDefault();const x={"ctrl+t":()=>o(N.DARK,k.DECREMENT),"ctrl+y":()=>o(N.DARK,k.INCREMENT),"ctrl+f":()=>c(N.DARK,k.INCREMENT),"ctrl+g":()=>c(N.DARK,k.DECREMENT),"shift+t":()=>o(N.LIGHT,k.DECREMENT),"shift+y":()=>o(N.LIGHT,k.INCREMENT),"shift+f":()=>c(N.LIGHT,k.INCREMENT),"shift+g":()=>c(N.LIGHT,k.DECREMENT),p:()=>g(k.INCREMENT),o:()=>g(k.DECREMENT)};(p=x[T.key])==null||p.call(x)});function o(b,T){let x=b===N.DARK?m(r):m(n);T===k.INCREMENT&&x<5?b===N.DARK?K(r):K(n):T===k.DECREMENT&&x>0&&(b===N.DARK?(K(r,-1),fe()):(K(n,-1),fe()))}function c(b,T){let x=b===N.DARK?m(i):m(l);T===k.INCREMENT?b===N.DARK?K(i):K(l):T===k.DECREMENT&&x>0&&(b===N.DARK?K(i,-1):K(l,-1))}function g(b){b===k.INCREMENT&&m(s)<5?K(s):b===k.DECREMENT&&m(s)>1&&K(s,-1)}lt();var a=Nt(),h=_(a);ie(h,{boxLabel:"TOL",get boxValue(){return m(r)}});var u=D(h,2);ie(u,{boxLabel:"FOULS",get boxValue(){return m(i)},isFoul:!0});var d=D(u,2),v=D(_(d),2),w=_(v),I=_(w,!0);E(w),E(v),E(d);var f=D(d,2);ie(f,{boxLabel:"FOULS",get boxValue(){return m(l)},isFoul:!0});var y=D(f,2);ie(y,{boxLabel:"TOL",get boxValue(){return m(n)}}),E(a),U(()=>B(I,m(s)>4?"OT":m(s))),A(e,a),W()}function Ot(e,t){t(!1)}var Kt=(e,t,r)=>M(t,r,!0),Pt=(e,t,r)=>e.key==="Enter"&&M(t,r,!0),Gt=O("<button> </button>"),Ft=O('<ul class="space-y-2"><li><strong>B</strong> - Change Ball Possession</li> <li><strong>S</strong> - Start/Stop Game Timer</li> <li><strong>R</strong> - Reset Game Timer</li> <li><strong>Z</strong> - Reset Shot Clock to 24</li> <li><strong>X</strong> - Reset Shot Clock to 14</li> <li><strong>Q</strong> - Increase Shot Clock value by 1</li> <li><strong>CTRL + Q</strong> - Decrease Shot Clock value by 1</li> <li><strong>CTRL + D</strong> - Disable Shot Clock</li> <li><strong>P</strong> - Add Period/Quarter by 1</li> <li><strong>O</strong> - Minus Period/Quarter by 1</li> <li><strong>H</strong> - Play Manual Buzzer Sound</li> <li><strong>M</strong> - Increase Game Minutes value by 1</li> <li><strong>CTRL + M</strong> - Decrease Game Minutes value by 1</li> <li><strong>N</strong> - Increase Game Seconds value by 1</li> <li><strong>CTRL + N</strong> - Decrease Game Seconds value by 1</li></ul>'),Ht=O('<ul class="space-y-2"><li><strong>Ctrl+1</strong> - Increase Dark Team Score by 1</li> <li><strong>Ctrl+2</strong> - Increase Dark Team Score by 2</li> <li><strong>Ctrl+3</strong> - Increase Dark Team Score by 3</li> <li><strong>Ctrl+-</strong> - Decrease Dark Team Score by 1</li> <li><strong>Ctrl+T</strong> - Dark Team Use Timeout</li> <li><strong>Ctrl+Y</strong> - Dark Team Add 1 Timeout</li> <li><strong>Ctrl+F</strong> - Dark Team Add Foul by 1</li> <li><strong>Ctrl+G</strong> - Dark Team Minus Foul by 1</li></ul>'),zt=O('<ul class="space-y-2"><li><strong>Shift+1</strong> - Increase Light Team Score by 1</li> <li><strong>Shift+2</strong> - Increase Light Team Score by 2</li> <li><strong>Shift+3</strong> - Increase Light Team Score by 3</li> <li><strong>Shift+-</strong> - Decrease Light Team Score by 1</li> <li><strong>Shift+T</strong> - Light Team Use Timeout</li> <li><strong>Shift+Y</strong> - Light Team Add 1 Timeout</li> <li><strong>Shift+F</strong> - Light Team Add Foul by 1</li> <li><strong>Shift+G</strong> - Light Team Minus Foul by 1</li></ul>'),Bt=O('<div class="fixed inset-0 flex items-center justify-center bg-black/75 p-4" role="dialog" aria-modal="true"><div class="w-full max-w-lg rounded-xl bg-white p-6 shadow-lg"><div class="mb-4 flex items-center justify-between"><h1 class="text-xl font-semibold">Hotkeys Information</h1> <button class="cursor-pointer text-gray-600 hover:text-gray-900" aria-label="Close modal">✖</button></div> <div class="mb-4 flex border-b"></div> <div class="text-gray-800"><!></div></div></div>');function jt(e,t){Q(t,!0);let r=P("general"),n=Y(t,"showHotkeyInstructionsModal",15);var i=ze(),l=oe(i);{var s=o=>{var c=Bt(),g=_(c),a=_(g),h=D(_(a),2);h.__click=[Ot,n],E(a);var u=D(a,2);ft(u,20,()=>["general","dark","light"],ot,(f,y)=>{var b=Gt();let T;b.__click=[Kt,r,y],b.__keydown=[Pt,r,y];var x=_(b,!0);E(b),U(p=>{T=ae(b,1,"flex-1 cursor-pointer border-b-2 py-2 text-center transition-colors duration-200",null,T,p),B(x,y==="general"?"General":y==="dark"?"Dark Side":"Light Side")},[()=>({"font-bold":m(r)===y,"text-blue-600":m(r)===y,"border-blue-600":m(r)===y,"text-gray-500":m(r)!==y})]),A(f,b)}),E(u);var d=D(u,2),v=_(d);{var w=f=>{var y=Ft();A(f,y)},I=(f,y)=>{{var b=x=>{var p=Ht();A(x,p)},T=(x,p)=>{{var R=V=>{var ce=zt();A(V,ce)};J(x,V=>{m(r)==="light"&&V(R)},p)}};J(f,x=>{m(r)==="dark"?x(b):x(T,!1)},y)}};J(v,f=>{m(r)==="general"?f(w):f(I,!1)})}E(d),E(g),E(c),A(o,c)};J(l,o=>{n()&&o(s)})}A(e,i),W()}Re(["click","keydown"]);var Ut=O('<div class="flex h-full min-h-screen w-full flex-col items-center bg-[#242525] p-4"><button class="absolute top-0 right-0 cursor-pointer rounded-full p-2 text-xs text-white transition hover:bg-gray-700 md:top-4 md:right-4 md:text-2xl" aria-label="Open Information Modal">ℹ️</button> <div class="flex w-full flex-1 flex-col gap-5"><!> <hr class="h-[.10rem] bg-white md:h-[.15rem]"> <!> <!></div></div> <!>',1);function Jt(e,t){Q(t,!0);let r=P(24),n=P(10),i=P(0),l=P(!1),s=P(!1);const o=fe();G("i",(f,y)=>{f.preventDefault(),y.key==="i"&&c()});function c(){M(s,!0)}document.onkeydown=function(f){f.key==="h"&&o.start()},document.onkeyup=function(f){f.key==="h"&&o.stop()};var g=Ut(),a=oe(g),h=_(a);h.__click=c;var u=D(h,2),d=_(u);Mt(d,{get shotClock(){return m(r)},set shotClock(f){M(r,f,!0)},get isGameTimerRunning(){return m(l)},set isGameTimerRunning(f){M(l,f,!0)},get gameMinutes(){return m(n)},set gameMinutes(f){M(n,f,!0)},get gameSeconds(){return m(i)},set gameSeconds(f){M(i,f,!0)}});var v=D(d,4);Rt(v,{get shotClock(){return m(r)},set shotClock(f){M(r,f,!0)},get isGameTimerRunning(){return m(l)},set isGameTimerRunning(f){M(l,f,!0)},get gameMinutes(){return m(n)},set gameMinutes(f){M(n,f,!0)},get gameSeconds(){return m(i)},set gameSeconds(f){M(i,f,!0)}});var w=D(v,2);At(w,{}),E(u),E(a);var I=D(a,2);jt(I,{get showHotkeyInstructionsModal(){return m(s)},set showHotkeyInstructionsModal(f){M(s,f,!0)}}),A(e,g),W()}Re(["click"]);export{Jt as component};
