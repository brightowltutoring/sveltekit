import{S as g,i as P,s as q,k as m,a as x,_ as R,l as _,m as p,h as o,c as b,a0 as k,n as y,N as S,b as h,f as u,A as w,o as C,q as I,r as E,P as L,Q as T}from"../../../chunks/index-1063d0c6.js";import{f as U}from"../../../chunks/firebase-ae78a3e0.js";import{S as $}from"../../../chunks/private-53926b58.js";import{e as A,f as D}from"../../../chunks/index-0fa359d1.js";function v(l){let s,c,i;return{c(){s=m("div"),c=I("Just a moment"),this.h()},l(e){s=_(e,"DIV",{class:!0});var r=p(s);c=E(r,"Just a moment"),r.forEach(o),this.h()},h(){y(s,"class","font-Poppins text-6xl text-center pt-20 animate-bounce loading svelte-x181g1")},m(e,r){h(e,s,r),S(s,c)},p(e,r){},i(e){i||L(()=>{i=T(s,D,{y:-400,duration:2e3,easing:A}),i.start()})},o:w,d(e){e&&o(s)}}}function F(l){let s,c,i,e,r=l[0]&&l[1].includes("service")&&l[1].includes("quantity"),t=r&&v();return{c(){s=m("script"),i=x(),e=m("main"),t&&t.c(),this.h()},l(a){const n=R('[data-svelte="svelte-qn95fl"]',document.head);s=_(n,"SCRIPT",{src:!0});var d=p(s);d.forEach(o),n.forEach(o),i=b(a),e=_(a,"MAIN",{});var f=p(e);t&&t.l(f),f.forEach(o),this.h()},h(){document.title="Stripe Firebase Demo",k(s.src,c="https://js.stripe.com/v3/")||y(s,"src",c)},m(a,n){S(document.head,s),h(a,i,n),h(a,e,n),t&&t.m(e,null)},p(a,[n]){n&3&&(r=a[0]&&a[1].includes("service")&&a[1].includes("quantity")),r?t?n&3&&u(t,1):(t=v(),t.c(),u(t,1),t.m(e,null)):t&&(t.d(1),t=null)},i(a){u(t)},o:w,d(a){o(s),a&&o(i),a&&o(e),t&&t.d()}}}function J(l,s,c){let i=!1,e;return C(()=>{c(0,i=!0),c(1,e=window.location.search.slice(1)),window.history.replaceState({},"",`/${btoa(e)}`),r();async function r(){try{const t=new URLSearchParams(e).get("email"),a=new URLSearchParams(e).get("extra"),n=new URLSearchParams(e).get("service"),d=new URLSearchParams(e).get("quantity");if(n&&d){const f=await U({email:t,extra:a,service:n,quantity:d});Stripe($).redirectToCheckout({sessionId:f.data.id})}}catch(t){console.log("stripeRedirectToCheckout failed",t)}}}),[i,e]}class G extends g{constructor(s){super(),P(this,s,J,F,q,{})}}export{G as default};
