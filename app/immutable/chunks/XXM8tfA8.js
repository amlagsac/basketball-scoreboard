import{a9 as u,n as E,ac as g,o as d,H as w,a1 as c,y as m,x as _,C as r,a0 as l,ad as x,_ as v,ae as A,af as C,q as N}from"./DjFhngZ2.js";let t;function D(){t=void 0}function F(a){let e=null,n=d;var f;if(d){for(e=r,t===void 0&&(t=l(document.head));t!==null&&(t.nodeType!==8||t.data!==w);)t=c(t);t===null?m(!1):t=_(c(t))}d||(f=document.head.appendChild(u()));try{E(()=>a(f),g)}finally{n&&(m(!0),t=r,_(e))}}function b(a){var e=document.createElement("template");return e.innerHTML=a,e.content}function i(a,e){var n=v;n.nodes_start===null&&(n.nodes_start=a,n.nodes_end=e)}function H(a,e){var n=(e&A)!==0,f=(e&C)!==0,o,p=!a.startsWith("<!>");return()=>{if(d)return i(r,null),r;o===void 0&&(o=b(p?a:"<!>"+a),n||(o=l(o)));var s=f||x?document.importNode(o,!0):o.cloneNode(!0);if(n){var y=l(s),T=s.lastChild;i(y,T)}else i(s,s);return s}}function I(a=""){if(!d){var e=u(a+"");return i(e,e),e}var n=r;return n.nodeType!==3&&(n.before(n=u()),_(n)),i(n,n),n}function L(){if(d)return i(r,null),r;var a=document.createDocumentFragment(),e=document.createComment(""),n=u();return a.append(e,n),i(e,n),a}function O(a,e){if(d){v.nodes_end=r,N();return}a!==null&&a.before(e)}const M="5";var h;typeof window<"u"&&((h=window.__svelte??(window.__svelte={})).v??(h.v=new Set)).add(M);export{O as a,i as b,L as c,I as d,F as h,D as r,H as t};
