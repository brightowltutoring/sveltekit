import{S as z,i as Q,s as Y,N as be,O as ge,V as B,w as G,a as R,k as N,x as Z,c as W,l as P,m as M,h as b,n as U,y as J,b as C,J as O,P as Te,Y as F,Z as V,_ as j,f as v,K as _e,L as he,t as w,z as K,D as ye,q as D,r as x,u as X,a1 as te,T as H,H as L,g as $,d as ee,U as me,I as oe,ae as ve,af as ke,o as we,e as le}from"./index-55877244.js";import{M as Ce}from"./Modal-18a4c44b.js";import{e as pe,s as Ue}from"./index-3b5fc4de.js";import{i as Ne,e as Pe}from"./store-32fee9ba.js";import{s as Me}from"./utils-e5c9c373.js";const Le=o=>({}),ae=o=>({});function Ee(o){let e,t,a;return{c(){e=N("iframe"),this.h()},l(l){e=P(l,"IFRAME",{title:!0,class:!0,src:!0}),M(e).forEach(b),this.h()},h(){U(e,"title","Thinksolve Plans"),U(e,"class",t=o[5]+" opacity-0 fixed bottom-0 w-full md:w-[80%] h-[90%] md:-translate-y-5 backdrop-blur-3xl rounded-xl border-dotted border-gray-500"),te(e.src,a=o[4])||U(e,"src",a)},m(l,s){C(l,e,s)},p(l,s){s&32&&t!==(t=l[5]+" opacity-0 fixed bottom-0 w-full md:w-[80%] h-[90%] md:-translate-y-5 backdrop-blur-3xl rounded-xl border-dotted border-gray-500")&&U(e,"class",t),s&16&&!te(e.src,a=l[4])&&U(e,"src",a)},d(l){l&&b(e)}}}function He(o){let e=o[2].text+"",t;return{c(){t=D(e)},l(a){t=x(a,e)},m(a,l){C(a,t,l)},p(a,l){l&4&&e!==(e=a[2].text+"")&&X(t,e)},d(a){a&&b(t)}}}function De(o){let e,t,a,l,s,r,n,c,y;function k(f){o[9](f)}let g={body:!0,bgTint:"bg-[rgba(0,0,0,0.1)]",$$slots:{default:[Ee]},$$scope:{ctx:o}};o[3]!==void 0&&(g.showModal=o[3]),e=new Ce({props:g}),be.push(()=>ge(e,"showModal",k));const d=o[8].buttonText,u=B(d,o,o[13],ae),T=u||He(o);return{c(){G(e.$$.fragment),a=R(),l=N("button"),T&&T.c(),this.h()},l(f){Z(e.$$.fragment,f),a=W(f),l=P(f,"BUTTON",{class:!0});var m=M(l);T&&T.l(m),m.forEach(b),this.h()},h(){U(l,"class",s="hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white "+o[6][o[1]]+" "+o[0]+" "+o[2].opacityTW)},m(f,m){J(e,f,m),C(f,a,m),C(f,l,m),T&&T.m(l,null),n=!0,c||(y=[O(l,"mouseover",o[10]),O(l,"focus",o[11]),O(l,"click",o[12])],c=!0)},p(f,[m]){o=f;const _={};m&8240&&(_.$$scope={dirty:m,ctx:o}),!t&&m&8&&(t=!0,_.showModal=o[3],Te(()=>t=!1)),e.$set(_),u?u.p&&(!n||m&8192)&&F(u,d,o,o[13],n?j(d,o[13],m,Le):V(o[13]),ae):T&&T.p&&(!n||m&4)&&T.p(o,n?m:-1),(!n||m&7&&s!==(s="hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white "+o[6][o[1]]+" "+o[0]+" "+o[2].opacityTW))&&U(l,"class",s)},i(f){n||(v(e.$$.fragment,f),v(T,f),r||_e(()=>{r=he(l,Ue,{duration:600,easing:pe}),r.start()}),n=!0)},o(f){w(e.$$.fragment,f),w(T,f),n=!1},d(f){K(e,f),f&&b(a),f&&b(l),T&&T.d(f),c=!1,ye(y)}}}function xe(o,e,t){let{$$slots:a={},$$scope:l}=e,s={1:"bg-[rgb(244,77,77)]",2:"bg-[rgb(254,164,92)]",3:"bg-[rgb(45,165,214)]"},{btnColorHover:r=""}=e,{card:n}=e,{button:c}=e,y=!1,k="",g;async function d(_){t(4,k=_),t(3,y=!0),setTimeout(()=>{t(5,g="opacity-100 transition-opacity duration-200 ease-in")},50)}function u(_){y=_,t(3,y)}const T=()=>t(4,k=c.url),f=()=>t(4,k=c.url),m=()=>{d(c.url)};return o.$$set=_=>{"btnColorHover"in _&&t(0,r=_.btnColorHover),"card"in _&&t(1,n=_.card),"button"in _&&t(2,c=_.button),"$$scope"in _&&t(13,l=_.$$scope)},[r,n,c,y,k,g,s,d,a,u,T,f,m,l]}class Se extends z{constructor(e){super(),Q(this,e,xe,De,Y,{btnColorHover:0,card:1,button:2})}}const Ae=o=>({}),se=o=>({});function re(o,e,t){const a=o.slice();return a[9]=e[t],a}const Re=o=>({}),ne=o=>({});function We(o){let e;return{c(){e=D("Classico")},l(t){e=x(t,"Classico")},m(t,a){C(t,e,a)},d(t){t&&b(e)}}}function ce(o){let e,t;return e=new Se({props:{button:o[9],btnColorHover:o[0],card:o[1]}}),{c(){G(e.$$.fragment)},l(a){Z(e.$$.fragment,a)},m(a,l){J(e,a,l),t=!0},p(a,l){const s={};l&1&&(s.btnColorHover=a[0]),l&2&&(s.card=a[1]),e.$set(s)},i(a){t||(v(e.$$.fragment,a),t=!0)},o(a){w(e.$$.fragment,a),t=!1},d(a){K(e,a)}}}function Ie(o){let e;return{c(){e=D("default cardText")},l(t){e=x(t,"default cardText")},m(t,a){C(t,e,a)},d(t){t&&b(e)}}}function Oe(o){let e,t,a,l,s,r,n,c;const y=o[8].cardTitle,k=B(y,o,o[7],ne),g=k||We();let d=o[4],u=[];for(let i=0;i<d.length;i+=1)u[i]=ce(re(o,d,i));const T=i=>w(u[i],1,1,()=>{u[i]=null}),f=o[8].cardText,m=B(f,o,o[7],se),_=m||Ie();return{c(){e=N("plans-card"),t=N("p"),g&&g.c(),a=R();for(let i=0;i<u.length;i+=1)u[i].c();l=R(),s=N("div"),_&&_.c(),this.h()},l(i){e=P(i,"PLANS-CARD",{class:!0,style:!0});var h=M(e);t=P(h,"P",{class:!0});var p=M(t);g&&g.l(p),p.forEach(b),a=W(h);for(let I=0;I<u.length;I+=1)u[I].l(h);l=W(h),s=P(h,"DIV",{class:!0});var E=M(s);_&&_.l(E),E.forEach(b),h.forEach(b),this.h()},h(){U(t,"class","text-4xl font-Poppins py-5 text-center"),U(s,"class","py-4"),H(e,"class",r="block shadow-md hover:scale-105 "+(o[2]?"hover:shadow-xl":"hover:shadow-lg")+" rounded-xl m-1 p-7 text-center duration-300 group"),H(e,"style",n=`background:${o[3]}`)},m(i,h){C(i,e,h),L(e,t),g&&g.m(t,null),L(e,a);for(let p=0;p<u.length;p+=1)u[p].m(e,null);L(e,l),L(e,s),_&&_.m(s,null),c=!0},p(i,[h]){if(k&&k.p&&(!c||h&128)&&F(k,y,i,i[7],c?j(y,i[7],h,Re):V(i[7]),ne),h&19){d=i[4];let p;for(p=0;p<d.length;p+=1){const E=re(i,d,p);u[p]?(u[p].p(E,h),v(u[p],1)):(u[p]=ce(E),u[p].c(),v(u[p],1),u[p].m(e,l))}for($(),p=d.length;p<u.length;p+=1)T(p);ee()}m&&m.p&&(!c||h&128)&&F(m,f,i,i[7],c?j(f,i[7],h,Ae):V(i[7]),se),(!c||h&4&&r!==(r="block shadow-md hover:scale-105 "+(i[2]?"hover:shadow-xl":"hover:shadow-lg")+" rounded-xl m-1 p-7 text-center duration-300 group"))&&H(e,"class",r),(!c||h&8&&n!==(n=`background:${i[3]}`))&&H(e,"style",n)},i(i){if(!c){v(g,i);for(let h=0;h<d.length;h+=1)v(u[h]);v(_,i),c=!0}},o(i){w(g,i),u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)w(u[h]);w(_,i),c=!1},d(i){i&&b(e),g&&g.d(i),me(u,i),_&&_.d(i)}}}function qe(o,e,t){let a,l;oe(o,Ne,d=>t(2,a=d)),oe(o,Pe,d=>t(3,l=d));let{$$slots:s={},$$scope:r}=e,{payNowUrl:n=""}=e,{payLaterUrl:c=""}=e;const y=[{resetter:!1,url:n,opacityTW:"bg-opacity-100",text:"Pay Now"},{resetter:!1,url:c,opacityTW:"bg-opacity-70",text:"Pay Later"}];let{btnColorHover:k=""}=e,{card:g}=e;return o.$$set=d=>{"payNowUrl"in d&&t(5,n=d.payNowUrl),"payLaterUrl"in d&&t(6,c=d.payLaterUrl),"btnColorHover"in d&&t(0,k=d.btnColorHover),"card"in d&&t(1,g=d.card),"$$scope"in d&&t(7,r=d.$$scope)},[k,g,a,l,y,n,c,r,s]}class Be extends z{constructor(e){super(),Q(this,e,qe,Oe,Y,{payNowUrl:5,payLaterUrl:6,btnColorHover:0,card:1})}}const q="https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db",S={red:"f34d4e",yellow:"fea45c",blue:"2aa5d6"};function A(o,e,t){return`https://calendly.com/thinksolve/${o}-${e}?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1&primary_color=${t}`}const ie=[{card:1,payNowUrl:A("classico","stripe",S.red),payLaterUrl:A("classico","invoice",S.red),buttonText:"Classico",cardTitle:"Classico",cardText:"Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.",href:q},{card:3,payNowUrl:A("mock","stripe",S.blue),payLaterUrl:A("mock","invoice",S.blue),buttonText:"Mock",cardTitle:"Mock",cardText:" Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key available as a +2hr premium.",href:q},{card:2,payNowUrl:"https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1",payLaterUrl:"https://calendly.com/thinksolve/custom?embed_domain=thinksolve.io&embed_type=PopupText&hide_gdpr_banner=1",buttonText:"Custom",cardTitle:"Custom",cardText:"Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. ",href:q}];function ue(o,e,t){const a=o.slice();return a[5]=e[t].card,a[6]=e[t].payNowUrl,a[7]=e[t].payLaterUrl,a[8]=e[t].cardTitle,a[9]=e[t].cardText,a[11]=t,a}function de(o){let e,t,a=o[0],l=[];for(let r=0;r<a.length;r+=1)l[r]=fe(ue(o,a,r));const s=r=>w(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=le()},l(r){for(let n=0;n<l.length;n+=1)l[n].l(r);e=le()},m(r,n){for(let c=0;c<l.length;c+=1)l[c].m(r,n);C(r,e,n),t=!0},p(r,n){if(n&1){a=r[0];let c;for(c=0;c<a.length;c+=1){const y=ue(r,a,c);l[c]?(l[c].p(y,n),v(l[c],1)):(l[c]=fe(y),l[c].c(),v(l[c],1),l[c].m(e.parentNode,e))}for($(),c=a.length;c<l.length;c+=1)s(c);ee()}},i(r){if(!t){for(let n=0;n<a.length;n+=1)v(l[n]);t=!0}},o(r){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)w(l[n]);t=!1},d(r){me(l,r),r&&b(e)}}}function Fe(o){let e,t=o[8]+"",a;return{c(){e=N("span"),a=D(t),this.h()},l(l){e=P(l,"SPAN",{slot:!0});var s=M(e);a=x(s,t),s.forEach(b),this.h()},h(){U(e,"slot","cardTitle")},m(l,s){C(l,e,s),L(e,a)},p(l,s){s&1&&t!==(t=l[8]+"")&&X(a,t)},d(l){l&&b(e)}}}function Ve(o){let e,t=o[9]+"",a;return{c(){e=N("span"),a=D(t),this.h()},l(l){e=P(l,"SPAN",{slot:!0});var s=M(e);a=x(s,t),s.forEach(b),this.h()},h(){U(e,"slot","cardText")},m(l,s){C(l,e,s),L(e,a)},p(l,s){s&1&&t!==(t=l[9]+"")&&X(a,t)},d(l){l&&b(e)}}}function fe(o){let e,t,a,l,s;return t=new Be({props:{card:o[5],payNowUrl:o[6],payLaterUrl:o[7],$$slots:{cardText:[Ve],cardTitle:[Fe]},$$scope:{ctx:o}}}),{c(){e=N("div"),G(t.$$.fragment),a=R()},l(r){e=P(r,"DIV",{});var n=M(e);Z(t.$$.fragment,n),a=W(n),n.forEach(b)},m(r,n){C(r,e,n),J(t,e,null),L(e,a),s=!0},p(r,n){o=r;const c={};n&1&&(c.card=o[5]),n&1&&(c.payNowUrl=o[6]),n&1&&(c.payLaterUrl=o[7]),n&4097&&(c.$$scope={dirty:n,ctx:o}),t.$set(c)},i(r){s||(v(t.$$.fragment,r),l||_e(()=>{l=he(e,Me,{delay:100*o[11],duration:1e3,easing:pe,noTransition:o[1]}),l.start()}),s=!0)},o(r){w(t.$$.fragment,r),s=!1},d(r){r&&b(e),K(t)}}}function je(o){let e,t,a,l,s=o[2]&&de(o);return{c(){e=N("plans-section"),s&&s.c(),this.h()},l(r){e=P(r,"PLANS-SECTION",{class:!0});var n=M(e);s&&s.l(n),n.forEach(b),this.h()},h(){H(e,"class","grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7")},m(r,n){C(r,e,n),s&&s.m(e,null),t=!0,a||(l=ve(o[3].call(null,e)),a=!0)},p(r,[n]){r[2]?s?(s.p(r,n),n&4&&v(s,1)):(s=de(r),s.c(),v(s,1),s.m(e,null)):s&&($(),w(s,1,1,()=>{s=null}),ee())},i(r){t||(v(s),t=!0)},o(r){w(s),t=!1},d(r){r&&b(e),s&&s.d(),a=!1,l()}}}function ze(o,e,t){let a=ke(),{plansCards:l=ie}=e,{noTransition:s=!1}=e,r=s;we(()=>t(2,r=!0));function n(){a("boop",{plansCardArray:ie,message:"n i boop"})}return o.$$set=c=>{"plansCards"in c&&t(0,l=c.plansCards),"noTransition"in c&&t(1,s=c.noTransition)},[l,s,r,n]}class Ke extends z{constructor(e){super(),Q(this,e,ze,je,Y,{plansCards:0,noTransition:1})}}export{Ke as default};
