import{S as y,i as E,s as D,k as d,a as M,l as _,m as w,c as T,h as m,n as p,$ as I,b as g,F as v,A as x,E as q,q as z,r as N,f as b,d as P,t as S,U as V,v as B,w as G,x as L,y as O,g as U}from"../../chunks/index-c5b536bd.js";import{i as j}from"../../chunks/store-6fbda247.js";import"../../chunks/index-6302803f.js";function C(c){let t,a,s,l,u,i;return{c(){t=d("div"),a=d("input"),s=M(),l=d("img"),this.h()},l(e){t=_(e,"DIV",{class:!0});var f=w(t);a=_(f,"INPUT",{inputmode:!0,class:!0}),s=T(f),l=_(f,"IMG",{class:!0,src:!0,alt:!0}),f.forEach(m),this.h()},h(){p(a,"inputmode","none"),p(a,"class","absolute opacity-0 w-full h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 peer"),p(l,"class",u="hover:shadow-2xl "+c[2]+" peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85] peer-focus:duration-300"),I(l.src,i=c[0])||p(l,"src",i),p(l,"alt",c[1]),p(t,"class","relative")},m(e,f){g(e,t,f),v(t,a),v(t,s),v(t,l)},p(e,[f]){f&4&&u!==(u="hover:shadow-2xl "+e[2]+" peer-hover:shadow-lg peer-focus:fixed peer-focus:top-10 peer-focus:left-10 peer-focus:z-50 peer-focus:-translate-x-8 peer-focus:scale-[1] sm:peer-focus:scale-[0.85] peer-focus:duration-300")&&p(l,"class",u),f&1&&!I(l.src,i=e[0])&&p(l,"src",i),f&2&&p(l,"alt",e[1])},i:x,o:x,d(e){e&&m(t)}}}function F(c,t,a){let s;q(c,j,e=>a(3,s=e));let{Src:l="/reviews/review-ben.png"}=t,{Alt:u="review ben"}=t,i;return c.$$set=e=>{"Src"in e&&a(0,l=e.Src),"Alt"in e&&a(1,u=e.Alt)},c.$$.update=()=>{c.$$.dirty&8&&(s?a(2,i="peer-focus:bg-[rgb(218,220,203)] peer-focus:invert"):a(2,i="peer-focus:bg-[#f7f7f7]"))},[l,u,i,s]}class H extends y{constructor(t){super(),E(this,t,F,C,D,{Src:0,Alt:1})}}function A(c,t,a){const s=c.slice();return s[1]=t[a],s}function k(c){let t,a;return t=new H({props:{Src:`/reviews/review-${c[1]}-bare.png`,Alt:`review ${c[1]}`}}),{c(){B(t.$$.fragment)},l(s){G(t.$$.fragment,s)},m(s,l){L(t,s,l),a=!0},p:x,i(s){a||(b(t.$$.fragment,s),a=!0)},o(s){S(t.$$.fragment,s),a=!1},d(s){O(t,s)}}}function J(c){let t,a,s,l,u,i=c[0],e=[];for(let r=0;r<i.length;r+=1)e[r]=k(A(c,i,r));const f=r=>S(e[r],1,1,()=>{e[r]=null});return{c(){t=d("div"),a=z("TESTIMONIALS"),s=M(),l=d("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=_(r,"DIV",{class:!0});var n=w(t);a=N(n,"TESTIMONIALS"),n.forEach(m),s=T(r),l=_(r,"DIV",{class:!0});var o=w(l);for(let h=0;h<e.length;h+=1)e[h].l(o);o.forEach(m),this.h()},h(){p(t,"class","font-Poppins text-center sm:text-5xl text-4xl pb-20 "),p(l,"class","grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 ")},m(r,n){g(r,t,n),v(t,a),g(r,s,n),g(r,l,n);for(let o=0;o<e.length;o+=1)e[o].m(l,null);u=!0},p(r,[n]){if(n&1){i=r[0];let o;for(o=0;o<i.length;o+=1){const h=A(r,i,o);e[o]?(e[o].p(h,n),b(e[o],1)):(e[o]=k(h),e[o].c(),b(e[o],1),e[o].m(l,null))}for(U(),o=i.length;o<e.length;o+=1)f(o);P()}},i(r){if(!u){for(let n=0;n<i.length;n+=1)b(e[n]);u=!0}},o(r){e=e.filter(Boolean);for(let n=0;n<e.length;n+=1)S(e[n]);u=!1},d(r){r&&m(t),r&&m(s),r&&m(l),V(e,r)}}}function K(c){return[["zaara","miranda","ben","efe","paola","rob","tj"]]}class X extends y{constructor(t){super(),E(this,t,K,J,D,{})}}export{X as default};
