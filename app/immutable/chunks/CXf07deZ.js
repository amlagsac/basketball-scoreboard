var fn=Array.isArray,un=Array.prototype.indexOf,$n=Array.from,Wn=Object.defineProperty,G=Object.getOwnPropertyDescriptor,on=Object.getOwnPropertyDescriptors,_n=Object.prototype,cn=Array.prototype,St=Object.getPrototypeOf,Dt=Object.isExtensible;const Xn=()=>{};function zn(t){return t()}function Ct(t){for(var e=0;e<t.length;e++)t[e]()}const b=2,Ft=4,it=8,mt=16,O=32,U=64,et=128,x=256,rt=512,m=1024,S=2048,B=4096,Y=8192,ot=16384,vn=32768,Mt=65536,Jn=1<<17,hn=1<<19,qt=1<<20,dt=1<<21,K=Symbol("$state"),Qn=Symbol("legacy props");function jt(t){return t===this.v}function pn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Lt(t){return!pn(t,this.v)}function dn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function En(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function te(){throw new Error("https://svelte.dev/e/hydration_failed")}function ne(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function mn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let _t=!1;function ee(){_t=!0}const re=1,le=2,ae=16,se=1,fe=2,ue=4,ie=8,oe=16,_e=1,ce=2,xn="[",An="[!",Rn="]",Yt={},E=Symbol();function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let d=null;function It(t){d=t}function ve(t,e=!1,n){var r=d={p:d,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};_t&&!e&&(d.l={s:null,u:null,r1:[],r2:Tt(!1)}),Nn(()=>{r.d=!0})}function he(t){const e=d;if(e!==null){const _=e.e;if(_!==null){var n=h,r=v;e.e=null;try{for(var a=0;a<_.length;a++){var l=_[a];st(l.effect),H(l.reaction),$t(l.fn)}}finally{st(n),H(r)}}d=e.p,e.m=!0}return{}}function ct(){return!_t||d!==null&&d.l===null}function j(t,e){if(typeof t!="object"||t===null||K in t)return t;const n=St(t);if(n!==_n&&n!==cn)return t;var r=new Map,a=fn(t),l=N(0),_=v,c=u=>{var s=v;H(_);var f;return f=u(),H(s),f};return a&&r.set("length",N(t.length)),new Proxy(t,{defineProperty(u,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&gn();var i=r.get(s);return i===void 0?(i=c(()=>N(f.value)),r.set(s,i)):I(i,c(()=>j(f.value))),!0},deleteProperty(u,s){var f=r.get(s);if(f===void 0)s in u&&r.set(s,c(()=>N(E)));else{if(a&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&I(i,o)}I(f,E),Ot(l)}return!0},get(u,s,f){var k;if(s===K)return t;var i=r.get(s),o=s in u;if(i===void 0&&(!o||(k=G(u,s))!=null&&k.writable)&&(i=c(()=>N(j(o?u[s]:E))),r.set(s,i)),i!==void 0){var p=L(i);return p===E?void 0:p}return Reflect.get(u,s,f)},getOwnPropertyDescriptor(u,s){var f=Reflect.getOwnPropertyDescriptor(u,s);if(f&&"value"in f){var i=r.get(s);i&&(f.value=L(i))}else if(f===void 0){var o=r.get(s),p=o==null?void 0:o.v;if(o!==void 0&&p!==E)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return f},has(u,s){var p;if(s===K)return!0;var f=r.get(s),i=f!==void 0&&f.v!==E||Reflect.has(u,s);if(f!==void 0||h!==null&&(!i||(p=G(u,s))!=null&&p.writable)){f===void 0&&(f=c(()=>N(i?j(u[s]):E)),r.set(s,f));var o=L(f);if(o===E)return!1}return i},set(u,s,f,i){var bt;var o=r.get(s),p=s in u;if(a&&s==="length")for(var k=f;k<o.v;k+=1){var Q=r.get(k+"");Q!==void 0?I(Q,E):k in u&&(Q=c(()=>N(E)),r.set(k+"",Q))}o===void 0?(!p||(bt=G(u,s))!=null&&bt.writable)&&(o=c(()=>N(void 0)),I(o,c(()=>j(f))),r.set(s,o)):(p=o.v!==E,I(o,c(()=>j(f))));var tt=Reflect.getOwnPropertyDescriptor(u,s);if(tt!=null&&tt.set&&tt.set.call(i,f),!p){if(a&&typeof s=="string"){var Rt=r.get("length"),pt=Number(s);Number.isInteger(pt)&&pt>=Rt.v&&I(Rt,pt+1)}Ot(l)}return!0},ownKeys(u){L(l);var s=Reflect.ownKeys(u).filter(o=>{var p=r.get(o);return p===void 0||p.v!==E});for(var[f,i]of r)i.v!==E&&!(f in u)&&s.push(f);return s},setPrototypeOf(){mn()}})}function Ot(t,e=1){I(t,t.v+e)}const $=new Map;function Tt(t,e){var n={f:0,v:t,reactions:null,equals:jt,rv:0,wv:0};return n}function N(t,e){const n=Tt(t);return nn(n),n}function pe(t,e=!1){var r;const n=Tt(t);return e||(n.equals=Lt),_t&&d!==null&&d.l!==null&&((r=d.l).s??(r.s=[])).push(n),n}function I(t,e,n=!1){v!==null&&!R&&ct()&&(v.f&(b|mt))!==0&&!(y!=null&&y.includes(t))&&Tn();let r=n?j(e):e;return bn(t,r)}function bn(t,e){if(!t.equals(e)){var n=t.v;z?$.set(t,e):$.set(t,n),t.v=e,t.wv=rn(),Ut(t,S),ct()&&h!==null&&(h.f&m)!==0&&(h.f&(O|U))===0&&(T===null?Ln([t]):T.push(t))}return e}function de(t,e=1){var n=L(t),r=e===1?n++:n--;return I(t,n),r}function Ut(t,e){var n=t.reactions;if(n!==null)for(var r=ct(),a=n.length,l=0;l<a;l++){var _=n[l],c=_.f;(c&S)===0&&(!r&&_===h||(D(_,e),(c&(m|x))!==0&&((c&b)!==0?Ut(_,B):ht(_))))}}let F=!1;function we(t){F=t}let A;function W(t){if(t===null)throw Ht(),Yt;return A=t}function ye(){return W(q(A))}function Ee(t){if(F){if(q(A)!==null)throw Ht(),Yt;A=t}}function ge(t=1){if(F){for(var e=t,n=A;e--;)n=q(n);A=n}}function me(){for(var t=0,e=A;;){if(e.nodeType===8){var n=e.data;if(n===Rn){if(t===0)return e;t-=1}else(n===xn||n===An)&&(t+=1)}var r=q(e);e.remove(),e=r}}var kt,Dn,Bt,Vt;function Te(){if(kt===void 0){kt=window,Dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Bt=G(e,"firstChild").get,Vt=G(e,"nextSibling").get,Dt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Dt(n)&&(n.__t=void 0)}}function wt(t=""){return document.createTextNode(t)}function yt(t){return Bt.call(t)}function q(t){return Vt.call(t)}function xe(t,e){if(!F)return yt(t);var n=yt(A);if(n===null)n=A.appendChild(wt());else if(e&&n.nodeType!==3){var r=wt();return n==null||n.before(r),W(r),r}return W(n),n}function Ae(t,e){if(!F){var n=yt(t);return n instanceof Comment&&n.data===""?q(n):n}return A}function Re(t,e=1,n=!1){let r=F?A:t;for(var a;e--;)a=r,r=q(r);if(!F)return r;var l=r==null?void 0:r.nodeType;if(n&&l!==3){var _=wt();return r===null?a==null||a.after(_):r.before(_),W(_),_}return W(r),r}function be(t){t.textContent=""}function xt(t){var e=b|S,n=v!==null&&(v.f&b)!==0?v:null;return h===null||n!==null&&(n.f&x)!==0?e|=x:h.f|=qt,{ctx:d,deps:null,effects:null,equals:jt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function De(t){const e=xt(t);return nn(e),e}function Ie(t){const e=xt(t);return e.equals=Lt,e}function Gt(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)M(e[n])}}function In(t){for(var e=t.parent;e!==null;){if((e.f&b)===0)return e;e=e.parent}return null}function On(t){var e,n=h;st(In(t));try{Gt(t),e=an(t)}finally{st(n)}return e}function Kt(t){var e=On(t),n=(P||(t.f&x)!==0)&&t.deps!==null?B:m;D(t,n),t.equals(e)||(t.v=e,t.wv=rn())}function Zt(t){h===null&&v===null&&yn(),v!==null&&(v.f&x)!==0&&h===null&&wn(),z&&dn()}function kn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function V(t,e,n,r=!0){var a=h,l={ctx:d,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:e,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(n)try{At(l),l.f|=vn}catch(u){throw M(l),u}else e!==null&&ht(l);var _=n&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(qt|et))===0;if(!_&&r&&(a!==null&&kn(l,a),v!==null&&(v.f&b)!==0)){var c=v;(c.effects??(c.effects=[])).push(l)}return l}function Nn(t){const e=V(it,null,!1);return D(e,m),e.teardown=t,e}function Oe(t){Zt();var e=h!==null&&(h.f&O)!==0&&d!==null&&!d.m;if(e){var n=d;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=$t(t);return r}}function ke(t){return Zt(),Pn(t)}function Ne(t){const e=V(U,t,!0);return(n={})=>new Promise(r=>{n.outro?Fn(e,()=>{M(e),r(void 0)}):(M(e),r(void 0))})}function $t(t){return V(Ft,t,!1)}function Pn(t){return V(it,t,!0)}function Pe(t,e=[],n=xt){const r=e.map(n);return Sn(()=>t(...r.map(L)))}function Sn(t,e=0){return V(it|mt|e,t,!0)}function Se(t,e=!0){return V(it|O,t,!0,e)}function Wt(t){var e=t.teardown;if(e!==null){const n=z,r=v;Pt(!0),H(null);try{e.call(null)}finally{Pt(n),H(r)}}}function Xt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&U)!==0?n.parent=null:M(n,e),n=r}}function Cn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&O)===0&&M(e),e=n}}function M(t,e=!0){var n=!1;if((e||(t.f&hn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:q(r);r.remove(),r=l}n=!0}Xt(t,e&&!n),ut(t,0),D(t,ot);var _=t.transitions;if(_!==null)for(const u of _)u.stop();Wt(t);var c=t.parent;c!==null&&c.first!==null&&zt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function zt(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Fn(t,e){var n=[];Jt(t,n,!0),Mn(n,()=>{M(t),e&&e()})}function Mn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function Jt(t,e,n){if((t.f&Y)===0){if(t.f^=Y,t.transitions!==null)for(const _ of t.transitions)(_.is_global||n)&&e.push(_);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Mt)!==0||(r.f&O)!==0;Jt(r,e,l?n:!1),r=a}}}function Ce(t){Qt(t,!0)}function Qt(t,e){if((t.f&Y)!==0){t.f^=Y,(t.f&m)===0&&(t.f^=m),J(t)&&(D(t,S),ht(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&Mt)!==0||(n.f&O)!==0;Qt(n,a?e:!1),n=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&l.in()}}let X=[],Et=[];function tn(){var t=X;X=[],Ct(t)}function qn(){var t=Et;Et=[],Ct(t)}function Fe(t){X.length===0&&queueMicrotask(tn),X.push(t)}function Nt(){X.length>0&&tn(),Et.length>0&&qn()}let nt=!1,lt=!1,at=null,C=!1,z=!1;function Pt(t){z=t}let Z=[];let v=null,R=!1;function H(t){v=t}let h=null;function st(t){h=t}let y=null;function jn(t){y=t}function nn(t){v!==null&&v.f&dt&&(y===null?jn([t]):y.push(t))}let w=null,g=0,T=null;function Ln(t){T=t}let en=1,ft=0,P=!1;function rn(){return++en}function J(t){var i;var e=t.f;if((e&S)!==0)return!0;if((e&B)!==0){var n=t.deps,r=(e&x)!==0;if(n!==null){var a,l,_=(e&rt)!==0,c=r&&h!==null&&!P,u=n.length;if(_||c){var s=t,f=s.parent;for(a=0;a<u;a++)l=n[a],(_||!((i=l==null?void 0:l.reactions)!=null&&i.includes(s)))&&(l.reactions??(l.reactions=[])).push(s);_&&(s.f^=rt),c&&f!==null&&(f.f&x)===0&&(s.f^=x)}for(a=0;a<u;a++)if(l=n[a],J(l)&&Kt(l),l.wv>t.wv)return!0}(!r||h!==null&&!P)&&D(t,m)}return!1}function Yn(t,e){for(var n=e;n!==null;){if((n.f&et)!==0)try{n.fn(t);return}catch{n.f^=et}n=n.parent}throw nt=!1,t}function Hn(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function vt(t,e,n,r){if(nt){if(n===null&&(nt=!1),Hn(e))throw t;return}n!==null&&(nt=!0);{Yn(t,e);return}}function ln(t,e,n=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];y!=null&&y.includes(t)||((l.f&b)!==0?ln(l,e,!1):e===l&&(n?D(l,S):(l.f&m)!==0&&D(l,B),ht(l)))}}function an(t){var p;var e=w,n=g,r=T,a=v,l=P,_=y,c=d,u=R,s=t.f;w=null,g=0,T=null,P=(s&x)!==0&&(R||!C||v===null),v=(s&(O|U))===0?t:null,y=null,It(t.ctx),R=!1,ft++,t.f|=dt;try{var f=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(ut(t,g),i!==null&&g>0)for(i.length=g+w.length,o=0;o<w.length;o++)i[g+o]=w[o];else t.deps=i=w;if(!P)for(o=g;o<i.length;o++)((p=i[o]).reactions??(p.reactions=[])).push(t)}else i!==null&&g<i.length&&(ut(t,g),i.length=g);if(ct()&&T!==null&&!R&&i!==null&&(t.f&(b|B|S))===0)for(o=0;o<T.length;o++)ln(T[o],t);return a!==null&&(ft++,T!==null&&(r===null?r=T:r.push(...T))),f}finally{w=e,g=n,T=r,v=a,P=l,y=_,It(c),R=u,t.f^=dt}}function Un(t,e){let n=e.reactions;if(n!==null){var r=un.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&b)!==0&&(w===null||!w.includes(e))&&(D(e,B),(e.f&(x|rt))===0&&(e.f^=rt),Gt(e),ut(e,0))}function ut(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Un(t,n[r])}function At(t){var e=t.f;if((e&ot)===0){D(t,m);var n=h,r=d,a=C;h=t,C=!0;try{(e&mt)!==0?Cn(t):Xt(t),Wt(t);var l=an(t);t.teardown=typeof l=="function"?l:null,t.wv=en;var _=t.deps,c}catch(u){vt(u,t,n,r||t.ctx)}finally{C=a,h=n}}}function Bn(){try{En()}catch(t){if(at!==null)vt(t,at,null);else throw t}}function sn(){var t=C;try{var e=0;for(C=!0;Z.length>0;){e++>1e3&&Bn();var n=Z,r=n.length;Z=[];for(var a=0;a<r;a++){var l=Gn(n[a]);Vn(l)}}}finally{lt=!1,C=t,at=null,$.clear()}}function Vn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(ot|Y))===0)try{J(r)&&(At(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?zt(r):r.fn=null))}catch(a){vt(a,r,null,r.ctx)}}}function ht(t){lt||(lt=!0,queueMicrotask(sn));for(var e=at=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(U|O))!==0){if((n&m)===0)return;e.f^=m}}Z.push(e)}function Gn(t){for(var e=[],n=t;n!==null;){var r=n.f,a=(r&(O|U))!==0,l=a&&(r&m)!==0;if(!l&&(r&Y)===0){if((r&Ft)!==0)e.push(n);else if(a)n.f^=m;else{var _=v;try{v=n,J(n)&&At(n)}catch(s){vt(s,n,null,n.ctx)}finally{v=_}}var c=n.first;if(c!==null){n=c;continue}}var u=n.parent;for(n=n.next;n===null&&u!==null;)n=u.next,u=u.parent}return e}function Kn(t){var e;for(Nt();Z.length>0;)lt=!0,sn(),Nt();return e}async function Me(){await Promise.resolve(),Kn()}function L(t){var e=t.f,n=(e&b)!==0;if(v!==null&&!R){if(!(y!=null&&y.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,w===null&&r!==null&&r[g]===t?g++:w===null?w=[t]:(!P||!w.includes(t))&&w.push(t))}}else if(n&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&x)===0&&(a.f^=x)}return n&&(a=t,J(a)&&Kt(a)),z&&$.has(t)?$.get(t):t.v}function qe(t){var e=R;try{return R=!0,t()}finally{R=e}}const Zn=-7169;function D(t,e){t.f=t.f&Zn|e}function je(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)gt(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&K in n&&gt(n)}}}function gt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{gt(t[r],e)}catch{}const n=St(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=on(n);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}export{Te as $,Se as A,Fn as B,A as C,G as D,Mt as E,ne as F,Ie as G,xn as H,Lt as I,j as J,I as K,Jn as L,pe as M,ie as N,Qn as O,ue as P,fe as Q,se as R,K as S,oe as T,E as U,Wn as V,H as W,st as X,fn as Y,v as Z,h as _,Oe as a,yt as a0,q as a1,Yt as a2,Rn as a3,Ht as a4,te as a5,be as a6,$n as a7,Ne as a8,wt as a9,Xn as aa,M as ab,Dn as ac,_e as ad,ce as ae,$t as af,Pn as ag,Fe as ah,Kn as ai,N as aj,Me as ak,De as al,Tt as am,Y as an,le as ao,Jt as ap,Mn as aq,re as ar,ae as as,ge as at,de as au,pn as av,qe as b,d as c,zn as d,je as e,xt as f,L as g,ee as h,Ae as i,he as j,xe as k,_t as l,Ee as m,Sn as n,F as o,ve as p,ye as q,Ct as r,Re as s,Pe as t,ke as u,An as v,me as w,W as x,we as y,Ce as z};
