import{S as E,i as I,s as k,k as f,a as T,W as A,l as g,m as _,h as u,c as N,a0 as D,n as p,G as v,b as S,H as M,A as b,K as O,o as x,$ as L,v as R,w as P,x as U,f as q,t as B,y as G,L as j}from"../../../chunks/index-bd8a2dbd.js";import{e as K,b as $}from"../../../chunks/store-9bebea51.js";import{g as W}from"../../../chunks/navigation-3a43cbf5.js";import"../../../chunks/index-125d1f03.js";import"../../../chunks/singletons-d58e058d.js";const{document:w}=L;function H(o){let e,a,t,s,l,i,n,m,c,y;return{c(){e=f("script"),t=T(),s=f("div"),l=f("div"),i=T(),n=f("img"),this.h()},l(r){const d=A('[data-svelte="svelte-1pkind7"]',w.head);e=g(d,"SCRIPT",{src:!0});var C=_(e);C.forEach(u),d.forEach(u),t=N(r),s=g(r,"DIV",{class:!0});var h=_(s);l=g(h,"DIV",{id:!0,class:!0}),_(l).forEach(u),i=N(h),n=g(h,"IMG",{alt:!0,class:!0}),h.forEach(u),this.h()},h(){D(e.src,a="https://meet.jit.si/external_api.js")||p(e,"src",a),p(l,"id","meet"),p(l,"class","w-full h-[95vh] md:h-[670px]"),p(n,"alt","hangup button"),p(n,"class",m="bg-gray-600 p-2 absolute brightness-50 "+(!o[0]&&"opacity-0")+" "+(o[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500"),p(s,"class","relative md:-translate-y-10 -translate-y-32 ")},m(r,d){v(w.head,e),S(r,t,d),S(r,s,d),v(s,l),v(s,i),v(s,n),c||(y=M(n,"click",o[2]),c=!0)},p(r,[d]){d&3&&m!==(m="bg-gray-600 p-2 absolute brightness-50 "+(!r[0]&&"opacity-0")+" "+(r[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500")&&p(n,"class",m)},i:b,o:b,d(r){u(e),r&&u(t),r&&u(s),c=!1,y()}}}function V(o,e,a){let t;O(o,K,c=>a(1,t=c));let s,l,i,n;async function m(){await i.dispose(),await setTimeout(()=>{W("/")},0)}return x(()=>{s="meet.jit.si",l={userInfo:{displayName:"ThinkSolve"},roomName:"ThinkSolve12522",parentNode:document.querySelector("#meet"),configOverwrite:{disabledSounds:["KNOCKING_PARTICIPANT_SOUND"],disableDeepLinking:!0,startWithAudioMuted:!0,startWithVideoMuted:!0},interfaceConfigOverwrite:{DEFAULT_BACKGROUND:"#130e21",SHOW_CHROME_EXTENSION_BANNER:!1,SETTINGS_SECTIONS:["devices","moderator","language","profile","calendar","sounds"],TOOLBAR_BUTTONS:["noisesuppression","desktop","microphone","camera","fullscreen","settings","chat","fodeviceselection","etherpad","mute-video-everyone","mute-everyone","security","sharedvideo","videoquality","profile","raisehand","livestreaming","recording","closedcaptions","filmstrip","feedback","stats","shortcuts","tileview"]}},i=new JitsiMeetExternalAPI(s,l),i.addEventListener("participantRoleChanged",function(c){c.role==="moderator"&&(i.executeCommand("password","thnkslv"),i.executeCommand("toggleLobby",!0)),a(0,n=[...i.getParticipantsInfo()])})}),[n,t,m]}class J extends E{constructor(e){super(),I(this,e,V,H,k,{})}}function F(o){let e,a;return e=new J({}),{c(){R(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){U(e,t,s),a=!0},p:b,i(t){a||(q(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){G(e,t)}}}function X(o,e,a){let t;return O(o,$,s=>a(0,t=s)),x(()=>{j($,t=!0,t),window.document.body.classList.toggle("dark-mode")}),[]}class te extends E{constructor(e){super(),I(this,e,X,F,k,{})}}export{te as default};
