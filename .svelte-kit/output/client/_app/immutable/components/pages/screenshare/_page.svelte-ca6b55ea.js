import{S as E,i as C,s as I,k as f,a as S,_ as x,l as _,m as v,h as u,c as y,a0 as A,n as d,N as g,b as N,G as P,A as b,R as O,o as k,$ as R,v as D,w as U,x as j,f as B,t as G,y as L,T as V}from"../../../chunks/index-1063d0c6.js";import{l as q,b as $}from"../../../chunks/store-817eb231.js";import{g as K}from"../../../chunks/navigation-0b662969.js";import"../../../chunks/index-6dbc7447.js";import"../../../chunks/singletons-18830d54.js";const{document:w}=R;function W(i){let e,a,t,s,n,l,o,p,m,T;return{c(){e=f("script"),t=S(),s=f("div"),n=f("div"),l=S(),o=f("img"),this.h()},l(r){const c=x('[data-svelte="svelte-1pkind7"]',w.head);e=_(c,"SCRIPT",{src:!0});var M=v(e);M.forEach(u),c.forEach(u),t=y(r),s=_(r,"DIV",{class:!0});var h=v(s);n=_(h,"DIV",{id:!0,class:!0}),v(n).forEach(u),l=y(h),o=_(h,"IMG",{alt:!0,class:!0}),h.forEach(u),this.h()},h(){A(e.src,a="https://meet.jit.si/external_api.js")||d(e,"src",a),d(n,"id","meet"),d(n,"class","w-full h-[95vh] md:h-[670px] peer"),d(o,"alt","hangup button"),d(o,"class",p="bg-gray-600 p-2 absolute brightness-50 "+(!i[0]&&"opacity-0")+" "+(i[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500"),d(s,"class","relative md:-translate-y-10 -translate-y-32 ")},m(r,c){g(w.head,e),N(r,t,c),N(r,s,c),g(s,n),g(s,l),g(s,o),m||(T=P(o,"click",i[2]),m=!0)},p(r,[c]){c&3&&p!==(p="bg-gray-600 p-2 absolute brightness-50 "+(!r[0]&&"opacity-0")+" "+(r[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500")&&d(o,"class",p)},i:b,o:b,d(r){u(e),r&&u(t),r&&u(s),m=!1,T()}}}function H(i,e,a){let t;O(i,q,m=>a(1,t=m));let s,n,l,o;async function p(){await l.dispose(),await setTimeout(()=>{K("/")},0)}return k(()=>{s="meet.jit.si",n={roomName:"ThinkSolve12522",parentNode:document.querySelector("#meet"),configOverwrite:{hideConferenceTimer:!0,hideConferenceSubject:!0,hideParticipantsStats:!0,disablePolls:!0,disableSelfView:!1,disabledSounds:["KNOCKING_PARTICIPANT_SOUND"],disableDeepLinking:!0,disableRemoteMute:!0,notifications:"lobby.notificationTitle",startWithAudioMuted:!0,startWithVideoMuted:!0,remoteVideoMenu:{disableKick:!0,disablePrivateChat:!0}},interfaceConfigOverwrite:{DEFAULT_BACKGROUND:"#130e21",SHOW_CHROME_EXTENSION_BANNER:!1,SETTINGS_SECTIONS:["devices"],TOOLBAR_BUTTONS:["desktop","microphone","camera","fullscreen","chat","fodeviceselection","etherpad"]}},l=new JitsiMeetExternalAPI(s,n),l.addEventListener("participantRoleChanged",function(m){a(0,o=[...l.getParticipantsInfo()])})}),[o,t,p]}class J extends E{constructor(e){super(),C(this,e,H,W,I,{})}}function F(i){let e,a;return e=new J({}),{c(){D(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,s){j(e,t,s),a=!0},p:b,i(t){a||(B(e.$$.fragment,t),a=!0)},o(t){G(e.$$.fragment,t),a=!1},d(t){L(e,t)}}}function X(i,e,a){let t;return O(i,$,s=>a(0,t=s)),k(()=>{V($,t=!0,t),window.document.body.classList.toggle("dark-mode")}),[]}class te extends E{constructor(e){super(),C(this,e,X,F,I,{})}}export{te as default};