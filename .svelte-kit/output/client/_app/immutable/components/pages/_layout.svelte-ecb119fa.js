import{S as te,i as oe,s as V,e as S,b as M,g as z,t as I,A as D,d as X,f as H,h as k,E as O,k as q,q as Ve,l as Y,m as N,r as Ze,n as y,F as T,G as F,H as Qe,u as xe,I as $,J as ne,K as B,a as J,c as Q,p as ue,L as fe,M as ye,N as $e,O as ce,P as me,Q as K,R as W,v as re,w as le,x as se,T as G,y as ie,U as Be,V as et,W as tt,X as ot,Y as nt,Z as rt,C as lt,o as st,_ as it}from"../../chunks/index-64e3950e.js";import{s as ge,a as ze}from"../../chunks/index-0eb0b30d.js";import{i as ee,a as de,r as Xe,b as Pe,e as pe,s as he,c as Ue,l as ve,d as P,f as ae,q as Ke,w as we,g as Ce,h as Oe}from"../../chunks/store-ffb3fd03.js";import{p as We}from"../../chunks/stores-69193683.js";import{g as Ge,o as at,a as ut}from"../../chunks/firebase-cb899c0b.js";import{w as ft}from"../../chunks/index-57952acb.js";import"../../chunks/singletons-61e09b70.js";function He(e){let o,t,l,r,n,s;return{c(){o=q("button"),t=Ve(e[2]),this.h()},l(i){o=Y(i,"BUTTON",{class:!0});var m=N(o);t=Ze(m,e[2]),m.forEach(k),this.h()},h(){y(o,"class",l=(e[0]&&`${e[3]} sm:border-b-1 sm:rounded sm:px-3 sm:py-1`)+` flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent ${e[4]} sm:hover:rounded sm:hover:py-1 sm:hover:px-3 duration-300 hover:shadow-lg`)},m(i,m){M(i,o,m),T(o,t),n||(s=F(o,"click",Qe(e[12])),n=!0)},p(i,m){e=i,m&4&&xe(t,e[2]),m&25&&l!==(l=(e[0]&&`${e[3]} sm:border-b-1 sm:rounded sm:px-3 sm:py-1`)+` flex justify-center px-2 mx-1 font-Nunito selection:bg-transparent ${e[4]} sm:hover:rounded sm:hover:py-1 sm:hover:px-3 duration-300 hover:shadow-lg`)&&y(o,"class",l)},i(i){r||$(()=>{r=ne(o,ge,{duration:800,easing:pe}),r.start()})},o:D,d(i){i&&k(o),n=!1,s()}}}function ct(e){let o=e[5],t,l=He(e);return{c(){l.c(),t=S()},l(r){l.l(r),t=S()},m(r,n){l.m(r,n),M(r,t,n)},p(r,[n]){n&32&&V(o,o=r[5])?(z(),I(l,1,1,D),X(),l=He(r),l.c(),H(l,1),l.m(t.parentNode,t)):l.p(r,n)},i(r){H(l)},o(r){I(l)},d(r){r&&k(t),l.d(r)}}}function mt(e,o,t){let l,r,n,s,i;O(e,ee,a=>t(13,l=a)),O(e,de,a=>t(14,r=a)),O(e,We,a=>t(11,n=a)),O(e,Xe,a=>t(6,s=a)),O(e,Pe,a=>t(7,i=a));let{href:m,content:c,bool:f,mobileOpen:h,btnColor:_,btnColorHover:v,routes:g}=o,b;function d(){for(let a in g)t(9,g[a].isCurrent=!1,g);t(0,f=!f),t(5,b=!b),r&&t(10,h=!h),g.login.isCurrent&&(window.document.body.classList.remove("dark-mode"),B(ee,l=!1,l))}const u=()=>{d(),clearTimeout(s),clearInterval(i),Ge(m)};return e.$$set=a=>{"href"in a&&t(1,m=a.href),"content"in a&&t(2,c=a.content),"bool"in a&&t(0,f=a.bool),"mobileOpen"in a&&t(10,h=a.mobileOpen),"btnColor"in a&&t(3,_=a.btnColor),"btnColorHover"in a&&t(4,v=a.btnColorHover),"routes"in a&&t(9,g=a.routes)},e.$$.update=()=>{if(e.$$.dirty&2560)for(let a in g){let E=a==n.routeId||n.routeId.length==0&&a=="home";t(9,g[a].isCurrent=E,g)}},[f,m,c,_,v,b,s,i,d,g,h,n,u]}class ht extends te{constructor(o){super(),oe(this,o,mt,ct,V,{href:1,content:2,bool:0,mobileOpen:10,btnColor:3,btnColorHover:4,routes:9})}}function dt(e){let o,t,l,r,n,s,i,m,c,f,h,_,v,g;return{c(){o=q("main"),t=q("hamburger-container"),l=q("hamburger"),r=q("div"),s=J(),i=q("div"),c=J(),f=q("div"),this.h()},l(b){o=Y(b,"MAIN",{});var d=N(o);t=Y(d,"HAMBURGER-CONTAINER",{class:!0});var u=N(t);l=Y(u,"HAMBURGER",{style:!0,class:!0});var a=N(l);r=Y(a,"DIV",{style:!0,class:!0}),N(r).forEach(k),s=Q(a),i=Y(a,"DIV",{style:!0,class:!0}),N(i).forEach(k),c=Q(a),f=Y(a,"DIV",{style:!0,class:!0}),N(f).forEach(k),a.forEach(k),u.forEach(k),d.forEach(k),this.h()},h(){y(r,"style",n="height:"+x+"px; "+(e[0]&&`transform: translateY(${e[4]}px) rotate(-${e[5]}deg)`)),y(r,"class",_e+" transition duration-300 rounded"),y(i,"style",m="height:"+x+"px; "+(e[0]&&"transform: scale(0)")),y(i,"class",_e+" transition duration-300 rounded"),y(f,"style",h="height:"+x+"px; "+(e[0]&&`transform: translateY(-${e[4]}px) rotate(${e[5]}deg)`)),y(f,"class",""+_e+" transition duration-300 rounded"),ue(l,"width",Fe+"px"),ue(l,"height",e[3]+"px"),y(l,"class","relative flex flex-col justify-between"),fe(t,"class",_="sm:hidden z-50 text-4xl fixed right-6 "+e[1]+" transition-all duration-300")},m(b,d){M(b,o,d),T(o,t),T(t,l),T(l,r),T(l,s),T(l,i),T(l,c),T(l,f),v||(g=F(l,"click",e[2]),v=!0)},p(b,[d]){d&1&&n!==(n="height:"+x+"px; "+(b[0]&&`transform: translateY(${b[4]}px) rotate(-${b[5]}deg)`))&&y(r,"style",n),d&1&&m!==(m="height:"+x+"px; "+(b[0]&&"transform: scale(0)"))&&y(i,"style",m),d&1&&h!==(h="height:"+x+"px; "+(b[0]&&`transform: translateY(-${b[4]}px) rotate(${b[5]}deg)`))&&y(f,"style",h),d&2&&_!==(_="sm:hidden z-50 text-4xl fixed right-6 "+b[1]+" transition-all duration-300")&&fe(t,"class",_)},i:D,o:D,d(b){b&&k(o),v=!1,g()}}}const Fe=35,x=2,_e="bg-red-500";function _t(e,o,t){let l,r,n,s;O(e,he,g=>t(7,l=g)),O(e,Ue,g=>t(8,r=g)),O(e,de,g=>t(9,n=g)),O(e,ve,g=>t(10,s=g));let{mobileOpen:i}=o,{unique:m}=o;function c(){t(0,i=!i),t(6,m=!m),i&&B(ve,s=l,s),!i&&requestAnimationFrame(()=>window.scrollTo(0,s))}const f=Math.floor(.7*Fe),h=Math.floor(.5*(f-x)),_=45+1*90;let v="top-6";return e.$$set=g=>{"mobileOpen"in g&&t(0,i=g.mobileOpen),"unique"in g&&t(6,m=g.unique)},e.$$.update=()=>{e.$$.dirty&897&&n&&!i&&(r>0&&l>250&&t(1,v="-top-20 "),r<0&&l>250&&t(1,v="top-6"))},[i,v,c,f,h,_,m,l,r,n]}class bt extends te{constructor(o){super(),oe(this,o,_t,dt,V,{mobileOpen:0,unique:6})}}function Ie(e){return Object.prototype.toString.call(e)==="[object Date]"}function be(e,o,t,l){if(typeof t=="number"||Ie(t)){const r=l-t,n=(t-o)/(e.dt||1/60),s=e.opts.stiffness*r,i=e.opts.damping*n,m=(s-i)*e.inv_mass,c=(n+m)*e.dt;return Math.abs(c)<e.opts.precision&&Math.abs(r)<e.opts.precision?l:(e.settled=!1,Ie(t)?new Date(t.getTime()+c):t+c)}else{if(Array.isArray(t))return t.map((r,n)=>be(e,o[n],t[n],l[n]));if(typeof t=="object"){const r={};for(const n in t)r[n]=be(e,o[n],t[n],l[n]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}function gt(e,o={}){const t=ft(e),{stiffness:l=.15,damping:r=.8,precision:n=.01}=o;let s,i,m,c=e,f=e,h=1,_=0,v=!1;function g(d,u={}){f=d;const a=m={};if(e==null||u.hard||b.stiffness>=1&&b.damping>=1)return v=!0,s=ye(),c=d,t.set(e=f),Promise.resolve();if(u.soft){const E=u.soft===!0?.5:+u.soft;_=1/(E*60),h=0}return i||(s=ye(),v=!1,i=$e(E=>{if(v)return v=!1,i=null,!1;h=Math.min(h+_,1);const Z={inv_mass:h,opts:b,settled:!0,dt:(E-s)*60/1e3},w=be(Z,c,e,f);return s=E,c=e,t.set(e=w),Z.settled&&(i=null),!Z.settled})),new Promise(E=>{i.promise.then(()=>{a===m&&E()})})}const b={set:g,update:(d,u)=>g(d(f,e),u),subscribe:t.subscribe,stiffness:l,damping:r,precision:n};return b}function pt(e){let o,t;return{c(){o=ce("svg"),t=ce("path"),this.h()},l(l){o=me(l,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,style:!0,"data-metatip":!0});var r=N(o);t=me(r,"path",{d:!0}),N(t).forEach(k),r.forEach(k),this.h()},h(){y(t,"d","M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"),y(o,"aria-label","Moon"),y(o,"id","darkIcon"),y(o,"height","24"),y(o,"width","24"),ue(o,"transform","scale(1)"),y(o,"data-metatip","true")},m(l,r){M(l,o,r),T(o,t)},d(l){l&&k(o)}}}function kt(e){let o,t;return{c(){o=ce("svg"),t=ce("path"),this.h()},l(l){o=me(l,"svg",{"aria-label":!0,id:!0,height:!0,width:!0,viewBox:!0,style:!0});var r=N(o);t=me(r,"path",{fill:!0,d:!0}),N(t).forEach(k),r.forEach(k),this.h()},h(){y(t,"fill","rgb(247,247,247)"),y(t,"d","M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"),y(o,"aria-label","Sun"),y(o,"id","lightIcon"),y(o,"height","24"),y(o,"width","24"),y(o,"viewBox","0 0 182 182"),ue(o,"transform","scale(1)")},m(l,r){M(l,o,r),T(o,t)},d(l){l&&k(o)}}}function Ee(e){let o,t,l,r;function n(m,c){return m[0]?kt:pt}let s=n(e),i=s(e);return{c(){o=q("button"),i.c()},l(m){o=Y(m,"BUTTON",{});var c=N(o);i.l(c),c.forEach(k)},m(m,c){M(m,o,c),i.m(o,null),l||(r=F(o,"click",e[1]),l=!0)},p(m,c){e=m,s!==(s=n(e))&&(i.d(1),i=s(e),i&&(i.c(),i.m(o,null)))},i(m){t||$(()=>{t=ne(o,ze,{duration:1e3,easing:pe}),t.start()})},o:D,d(m){m&&k(o),i.d(),l=!1,r()}}}function yt(e){let o=e[0],t,l=Ee(e);return{c(){l.c(),t=S()},l(r){l.l(r),t=S()},m(r,n){l.m(r,n),M(r,t,n)},p(r,[n]){n&1&&V(o,o=r[0])?(z(),I(l,1,1,D),X(),l=Ee(r),l.c(),H(l,1),l.m(t.parentNode,t)):l.p(r,n)},i(r){H(l)},o(r){I(l)},d(r){r&&k(t),l.d(r)}}}function vt(e,o,t){let l;O(e,ee,n=>t(0,l=n));function r(){window.document.body.classList.toggle("dark-mode"),B(ee,l=!l,l)}return[l,r]}class Je extends te{constructor(o){super(),oe(this,o,vt,yt,V,{})}}function Le(e,o,t){const l=e.slice();return l[25]=o[t],l[26]=o,l[27]=t,l}function Ne(e){let o,t,l,r,n;return{c(){o=q("div"),t=Ve("THINKSOLVE"),this.h()},l(s){o=Y(s,"DIV",{class:!0});var i=N(o);t=Ze(i,"THINKSOLVE"),i.forEach(k),this.h()},h(){y(o,"class","translate-y-[0.2rem] translate-x-3 hidden sm:block text-xl font-Poppins font-semibold pl-[5%] sm:pr-20 sm:text-[min(5.5vw,40px)] active:text-red-600 hover:scale-110 transition-transform selection:bg-transparent")},m(s,i){M(s,o,i),T(o,t),r||(n=F(o,"mouseup",e[13]),r=!0)},p(s,i){e=s},i(s){l||$(()=>{l=ne(o,ze,{duration:1200,easing:pe}),l.start()})},o:D,d(s){s&&k(o),r=!1,n()}}}function Me(e){let o=!e[3],t,l,r=Te();return{c(){r.c(),t=S()},l(n){r.l(n),t=S()},m(n,s){r.m(n,s),M(n,t,s),l=!0},p(n,s){s&8&&V(o,o=!n[3])?(z(),I(r,1,1,D),X(),r=Te(),r.c(),H(r,1),r.m(t.parentNode,t)):r.p(n,s)},i(n){l||(H(r),l=!0)},o(n){I(r),l=!1},d(n){n&&k(t),r.d(n)}}}function Te(e){let o,t,l,r;return t=new Je({}),{c(){o=q("li"),re(t.$$.fragment),this.h()},l(n){o=Y(n,"LI",{class:!0});var s=N(o);le(t.$$.fragment,s),s.forEach(k),this.h()},h(){y(o,"class","pb-3 ")},m(n,s){M(n,o,s),se(t,o,null),r=!0},p(n,s){},i(n){r||(H(t.$$.fragment,n),l||$(()=>{l=ne(o,ge,{duration:600,easing:Ke}),l.start()}),r=!0)},o(n){I(t.$$.fragment,n),r=!1},d(n){n&&k(o),ie(t)}}}function qe(e){let o,t,l,r,n,s,i,m,c;function f(d){e[19](d)}function h(d){e[20](d,e[25])}function _(d){e[21](d)}function v(d){e[22](d)}function g(d){e[23](d)}let b={href:e[10][e[25]].href,content:e[10][e[25]].name};return e[0]!==void 0&&(b.mobileOpen=e[0]),e[10][e[25]].isCurrent!==void 0&&(b.bool=e[10][e[25]].isCurrent),e[10]!==void 0&&(b.routes=e[10]),e[8]!==void 0&&(b.btnColor=e[8]),e[9]!==void 0&&(b.btnColorHover=e[9]),t=new ht({props:b}),K.push(()=>W(t,"mobileOpen",f)),K.push(()=>W(t,"bool",h)),K.push(()=>W(t,"routes",_)),K.push(()=>W(t,"btnColor",v)),K.push(()=>W(t,"btnColorHover",g)),{c(){o=q("li"),re(t.$$.fragment),this.h()},l(d){o=Y(d,"LI",{class:!0,style:!0});var u=N(o);le(t.$$.fragment,u),u.forEach(k),this.h()},h(){y(o,"class","py-3 sm:p-1 "),y(o,"style",m=e[25]=="login"&&e[2]&&`transform:scale(${e[11]}); filter:hue-rotate(${e[4]}turn)`)},m(d,u){M(d,o,u),se(t,o,null),c=!0},p(d,u){e=d;const a={};u&1024&&(a.href=e[10][e[25]].href),u&1024&&(a.content=e[10][e[25]].name),!l&&u&1&&(l=!0,a.mobileOpen=e[0],G(()=>l=!1)),!r&&u&1024&&(r=!0,a.bool=e[10][e[25]].isCurrent,G(()=>r=!1)),!n&&u&1024&&(n=!0,a.routes=e[10],G(()=>n=!1)),!s&&u&256&&(s=!0,a.btnColor=e[8],G(()=>s=!1)),!i&&u&512&&(i=!0,a.btnColorHover=e[9],G(()=>i=!1)),t.$set(a),(!c||u&3092&&m!==(m=e[25]=="login"&&e[2]&&`transform:scale(${e[11]}); filter:hue-rotate(${e[4]}turn)`))&&y(o,"style",m)},i(d){c||(H(t.$$.fragment,d),c=!0)},o(d){I(t.$$.fragment,d),c=!1},d(d){d&&k(o),ie(t)}}}function Ye(e){let o=!e[3],t,l,r=De();return{c(){r.c(),t=S()},l(n){r.l(n),t=S()},m(n,s){r.m(n,s),M(n,t,s),l=!0},p(n,s){s&8&&V(o,o=!n[3])?(z(),I(r,1,1,D),X(),r=De(),r.c(),H(r,1),r.m(t.parentNode,t)):r.p(n,s)},i(n){l||(H(r),l=!0)},o(n){I(r),l=!1},d(n){n&&k(t),r.d(n)}}}function De(e){let o,t,l,r;return t=new Je({}),{c(){o=q("li"),re(t.$$.fragment),this.h()},l(n){o=Y(n,"LI",{class:!0});var s=N(o);le(t.$$.fragment,s),s.forEach(k),this.h()},h(){y(o,"class","px-3 translate-y-1")},m(n,s){M(n,o,s),se(t,o,null),r=!0},p(n,s){},i(n){r||(H(t.$$.fragment,n),l||$(()=>{l=ne(o,ge,{duration:600,easing:Ke}),l.start()}),r=!0)},o(n){I(t.$$.fragment,n),r=!1},d(n){n&&k(o),ie(t)}}}function Ae(e){let o,t,l,r,n=e[1]&&e[0]&&Me(e),s=Object.keys(e[10]),i=[];for(let f=0;f<s.length;f+=1)i[f]=qe(Le(e,s,f));const m=f=>I(i[f],1,1,()=>{i[f]=null});let c=!e[1]&&Ye(e);return{c(){o=q("ul"),n&&n.c(),t=J();for(let f=0;f<i.length;f+=1)i[f].c();l=J(),c&&c.c(),this.h()},l(f){o=Y(f,"UL",{class:!0});var h=N(o);n&&n.l(h),t=Q(h);for(let _=0;_<i.length;_+=1)i[_].l(h);l=Q(h),c&&c.l(h),h.forEach(k),this.h()},h(){y(o,"class","flex flex-col sm:flex-row text-3xl sm:text-lg items-center")},m(f,h){M(f,o,h),n&&n.m(o,null),T(o,t);for(let _=0;_<i.length;_+=1)i[_].m(o,null);T(o,l),c&&c.m(o,null),r=!0},p(f,h){if(f[1]&&f[0]?n?(n.p(f,h),h&3&&H(n,1)):(n=Me(f),n.c(),H(n,1),n.m(o,t)):n&&(z(),I(n,1,1,()=>{n=null}),X()),h&3861){s=Object.keys(f[10]);let _;for(_=0;_<s.length;_+=1){const v=Le(f,s,_);i[_]?(i[_].p(v,h),H(i[_],1)):(i[_]=qe(v),i[_].c(),H(i[_],1),i[_].m(o,l))}for(z(),_=s.length;_<i.length;_+=1)m(_);X()}f[1]?c&&(z(),I(c,1,1,()=>{c=null}),X()):c?(c.p(f,h),h&2&&H(c,1)):(c=Ye(f),c.c(),H(c,1),c.m(o,null))},i(f){if(!r){H(n);for(let h=0;h<s.length;h+=1)H(i[h]);H(c),r=!0}},o(f){I(n),i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)I(i[h]);I(c),r=!1},d(f){f&&k(o),n&&n.d(),Be(i,f),c&&c.d()}}}function wt(e){let o,t,l,r,n,s=e[6],i,m,c=e[5],f,h;function _(u){e[17](u)}function v(u){e[18](u)}let g={};e[0]!==void 0&&(g.mobileOpen=e[0]),e[5]!==void 0&&(g.unique=e[5]),o=new bt({props:g}),K.push(()=>W(o,"mobileOpen",_)),K.push(()=>W(o,"unique",v));let b=Ne(e),d=Ae(e);return{c(){re(o.$$.fragment),r=J(),n=q("logo-and-navbar"),b.c(),i=J(),m=q("nav"),d.c(),this.h()},l(u){le(o.$$.fragment,u),r=Q(u),n=Y(u,"LOGO-AND-NAVBAR",{class:!0});var a=N(n);b.l(a),i=Q(a),m=Y(a,"NAV",{});var E=N(m);d.l(E),E.forEach(k),a.forEach(k),this.h()},h(){fe(n,"class",f=e[7]+" sm:backdrop-blur-3xl z-50 transition-all duration-300 sm:right-0 flex sm:justify-between items-center justify-center sm:w-full h-[85vh] sm:h-16 sm:inline-flex sm:pr-10 sm:pl-10 "+(!e[0]&&"hidden"))},m(u,a){se(o,u,a),M(u,r,a),M(u,n,a),b.m(n,null),T(n,i),T(n,m),d.m(m,null),h=!0},p(u,[a]){const E={};!t&&a&1&&(t=!0,E.mobileOpen=u[0],G(()=>t=!1)),!l&&a&32&&(l=!0,E.unique=u[5],G(()=>l=!1)),o.$set(E),a&64&&V(s,s=u[6])?(z(),I(b,1,1,D),X(),b=Ne(u),b.c(),H(b,1),b.m(n,i)):b.p(u,a),a&32&&V(c,c=u[5])?(z(),I(d,1,1,D),X(),d=Ae(u),d.c(),H(d,1),d.m(m,null)):d.p(u,a),(!h||a&129&&f!==(f=u[7]+" sm:backdrop-blur-3xl z-50 transition-all duration-300 sm:right-0 flex sm:justify-between items-center justify-center sm:w-full h-[85vh] sm:h-16 sm:inline-flex sm:pr-10 sm:pl-10 "+(!u[0]&&"hidden")))&&fe(n,"class",f)},i(u){h||(H(o.$$.fragment,u),H(b),H(d),h=!0)},o(u){I(o.$$.fragment,u),I(b),I(d),h=!1},d(u){ie(o,u),u&&k(r),u&&k(n),b.d(u),d.d(u)}}}function Ct(e,o,t){let l,r,n,s,i,m,c;O(e,Ue,C=>t(15,l=C)),O(e,he,C=>t(16,r=C)),O(e,de,C=>t(1,n=C)),O(e,P,C=>t(10,s=C)),O(e,ae,C=>t(2,i=C)),O(e,ee,C=>t(3,m=C));let f=gt(1,{stiffness:.1,damping:.25});O(e,f,C=>t(11,c=C));let h=0,{mobileHamburgerClosed:_}=o,v="",g,b;function d(){Ge("/"),t(6,b=!b);for(key in s)B(P,s[key].isCurrent=!1,s);B(P,s.home.isCurrent=!0,s)}let u="",a="sm:bg-red-300 ",E="sm:hover:bg-red-300";function Z(C){v=C,t(0,v)}function w(C){g=C,t(5,g)}function j(C){v=C,t(0,v)}function p(C,ke){e.$$.not_equal(s[ke].isCurrent,C)&&(s[ke].isCurrent=C,P.set(s))}function L(C){s=C,P.set(s)}function R(C){a=C,t(8,a)}function A(C){E=C,t(9,E)}return e.$$set=C=>{"mobileHamburgerClosed"in C&&t(14,_=C.mobileHamburgerClosed)},e.$$.update=()=>{e.$$.dirty&12&&i&&t(4,h=m?.75:0),e.$$.dirty&65542&&i&&!n&&f.set(1+.5*Math.sin(r)),e.$$.dirty&1&&t(14,_=v),e.$$.dirty&4&&(i?B(P,s.login.name="\u{1F680}",s):B(P,s.login.name="Login",s)),e.$$.dirty&98306&&(n||(r>250&&l>0&&t(7,u="sm:sticky sm:-top-20"),r>250&&l<0&&t(7,u="sm:sticky sm:top-0")))},[v,n,i,m,h,g,b,u,a,E,s,c,f,d,_,l,r,Z,w,j,p,L,R,A]}class Ot extends te{constructor(o){super(),oe(this,o,Ct,wt,V,{mobileHamburgerClosed:14})}}const{clearTimeout:je,document:U}=it;function Se(e,o,t){const l=e.slice();return l[18]=o[t],l}function Ht(e){return U.title=e[2][e[18]].title+" ",{c:D,l:D,m:D,d:D}}function It(e){return U.title=e[2].home.title+"  ",{c:D,l:D,m:D,d:D}}function Re(e){let o;function t(n,s){if(n[3].routeId=="")return It;if(n[3].routeId==n[18])return Ht}let l=t(e),r=l&&l(e);return{c(){r&&r.c(),o=S()},l(n){r&&r.l(n),o=S()},m(n,s){r&&r.m(n,s),M(n,o,s)},p(n,s){l!==(l=t(n))&&(r&&r.d(1),r=l&&l(n),r&&(r.c(),r.m(o.parentNode,o)))},d(n){r&&r.d(n),n&&k(o)}}}function Et(e){let o=!1,t=()=>{o=!1},l,r,n,s,i,m,c,f,h,_,v,g,b,d;$(e[11]),$(e[12]);let u=Object.keys(e[2]),a=[];for(let p=0;p<u.length;p+=1)a[p]=Re(Se(e,u,p));function E(p){e[13](p)}let Z={};e[0]!==void 0&&(Z.mobileHamburgerClosed=e[0]),c=new Ot({props:Z}),K.push(()=>W(c,"mobileHamburgerClosed",E));const w=e[10].default,j=et(w,e,e[9],null);return{c(){r=q("link"),n=q("link"),s=q("link");for(let p=0;p<a.length;p+=1)a[p].c();i=S(),m=J(),re(c.$$.fragment),h=J(),_=q("div"),j&&j.c(),this.h()},l(p){const L=tt('[data-svelte="svelte-1cv4w2m"]',U.head);r=Y(L,"LINK",{rel:!0,href:!0}),n=Y(L,"LINK",{rel:!0,href:!0,crossorigin:!0}),s=Y(L,"LINK",{href:!0,rel:!0});for(let A=0;A<a.length;A+=1)a[A].l(L);i=S(),L.forEach(k),m=Q(p),le(c.$$.fragment,p),h=Q(p),_=Y(p,"DIV",{class:!0});var R=N(_);j&&j.l(R),R.forEach(k),this.h()},h(){y(r,"rel","preconnect"),y(r,"href","https://fonts.googleapis.com"),y(n,"rel","preconnect"),y(n,"href","https://fonts.gstatic.com"),y(n,"crossorigin",""),y(s,"href","https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poppins:wght@100&display=swap"),y(s,"rel","stylesheet"),y(_,"class",v="sm:block "+(e[0]&&e[6]&&"hidden opacity-0")+" transition-all duration-500")},m(p,L){T(U.head,r),T(U.head,n),T(U.head,s);for(let R=0;R<a.length;R+=1)a[R].m(U.head,null);T(U.head,i),M(p,m,L),se(c,p,L),M(p,h,L),M(p,_,L),j&&j.m(_,null),g=!0,b||(d=[F(window,"resize",e[7]),F(window,"popstate",e[8]),F(window,"scroll",()=>{o=!0,je(l),l=setTimeout(t,100),e[11]()}),F(window,"resize",e[12])],b=!0)},p(p,[L]){if(L&16&&!o&&(o=!0,je(l),scrollTo(window.pageXOffset,p[4]),l=setTimeout(t,100)),L&12){u=Object.keys(p[2]);let A;for(A=0;A<u.length;A+=1){const C=Se(p,u,A);a[A]?a[A].p(C,L):(a[A]=Re(C),a[A].c(),a[A].m(i.parentNode,i))}for(;A<a.length;A+=1)a[A].d(1);a.length=u.length}const R={};!f&&L&1&&(f=!0,R.mobileHamburgerClosed=p[0],G(()=>f=!1)),c.$set(R),j&&j.p&&(!g||L&512)&&ot(j,w,p,p[9],g?rt(w,p[9],L,null):nt(p[9]),null),(!g||L&65&&v!==(v="sm:block "+(p[0]&&p[6]&&"hidden opacity-0")+" transition-all duration-500"))&&y(_,"class",v)},i(p){g||(H(c.$$.fragment,p),H(j,p),g=!0)},o(p){I(c.$$.fragment,p),I(j,p),g=!1},d(p){k(r),k(n),k(s),Be(a,p),k(i),p&&k(m),ie(c,p),p&&k(h),p&&k(_),j&&j.d(p),b=!1,lt(d)}}}function Lt(e,o,t){let l,r,n,s,i,m,c,f,h,_;O(e,ae,w=>t(14,l=w)),O(e,Pe,w=>t(15,r=w)),O(e,Xe,w=>t(16,n=w)),O(e,we,w=>t(1,s=w)),O(e,Ce,w=>t(17,i=w)),O(e,P,w=>t(2,m=w)),O(e,We,w=>t(3,c=w)),O(e,he,w=>t(4,f=w)),O(e,Oe,w=>t(5,h=w)),O(e,de,w=>t(6,_=w));let{$$slots:v={},$$scope:g}=o,b=!0;function d(){B(Ce,i=document.body.scrollHeight-s,i)}function u(){clearTimeout(n),clearInterval(r)}st(()=>{d(),at(ut,w=>{w?(B(ae,l=!0,l),console.log("$isLoggedIn",l)):(B(ae,l=!1,l),console.log("$isLoggedIn",l))})});function a(){he.set(f=window.pageYOffset)}function E(){Oe.set(h=window.innerWidth),we.set(s=window.innerHeight)}function Z(w){b=w,t(0,b)}return e.$$set=w=>{"$$scope"in w&&t(9,g=w.$$scope)},[b,s,m,c,f,h,_,d,u,g,v,a,E,Z]}class jt extends te{constructor(o){super(),oe(this,o,Lt,Et,V,{})}}export{jt as default};
