import{S as E,i as C,s as I,k as f,a as y,_ as x,l as _,m as v,h as u,c as S,a0 as A,n as d,N as g,b as N,G as D,A as b,R as O,o as k,a4 as P,$ as R,v as U,w as j,x as B,f as G,t as L,y as V,T as q}from"../../../chunks/index-07ba2c8b.js";import{l as K,b as $}from"../../../chunks/store-5cb6344d.js";import{g as W}from"../../../chunks/navigation-4821b292.js";import"../../../chunks/index-ff7f9e5a.js";import"../../../chunks/singletons-04c1c0e4.js";const{document:w}=R;function H(o){let e,a,t,s,n,l,i,p,m,T;return{c(){e=f("script"),t=y(),s=f("div"),n=f("div"),l=y(),i=f("img"),this.h()},l(r){const c=x('[data-svelte="svelte-1pkind7"]',w.head);e=_(c,"SCRIPT",{src:!0});var M=v(e);M.forEach(u),c.forEach(u),t=S(r),s=_(r,"DIV",{class:!0});var h=v(s);n=_(h,"DIV",{id:!0,class:!0}),v(n).forEach(u),l=S(h),i=_(h,"IMG",{alt:!0,class:!0}),h.forEach(u),this.h()},h(){A(e.src,a="https://meet.jit.si/external_api.js")||d(e,"src",a),d(n,"id","meet"),d(n,"class","w-full h-[95vh] md:h-[670px] peer"),d(i,"alt","hangup button"),d(i,"class",p="bg-gray-600 p-2 absolute brightness-50 "+(!o[0]&&"opacity-0")+" "+(o[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500"),d(s,"class","relative md:-translate-y-10 -translate-y-32 ")},m(r,c){g(w.head,e),N(r,t,c),N(r,s,c),g(s,n),g(s,l),g(s,i),m||(T=D(i,"click",o[2]),m=!0)},p(r,[c]){c&3&&p!==(p="bg-gray-600 p-2 absolute brightness-50 "+(!r[0]&&"opacity-0")+" "+(r[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500")&&d(i,"class",p)},i:b,o:b,d(r){u(e),r&&u(t),r&&u(s),m=!1,T()}}}function J(o,e,a){let t;O(o,K,m=>a(1,t=m));let s,n,l,i;async function p(){await l.dispose(),await setTimeout(()=>{W("/")},0)}return k(async()=>{s="meet.jit.si",n={roomName:"ThinkSolve12522",parentNode:document.querySelector("#meet"),configOverwrite:{hideConferenceTimer:!0,hideConferenceSubject:!0,hideParticipantsStats:!0,disablePolls:!0,disableSelfView:!1,disabledSounds:["KNOCKING_PARTICIPANT_SOUND"],disableDeepLinking:!0,disableRemoteMute:!0,notifications:"lobby.notificationTitle",startWithAudioMuted:!0,startWithVideoMuted:!0,remoteVideoMenu:{disableKick:!0,disablePrivateChat:!0}},interfaceConfigOverwrite:{DEFAULT_BACKGROUND:"#130e21",SHOW_CHROME_EXTENSION_BANNER:!1,SETTINGS_SECTIONS:["devices"],TOOLBAR_BUTTONS:["desktop","microphone","camera","fullscreen","chat","fodeviceselection","etherpad"]}},l=await new JitsiMeetExternalAPI(s,n),l.addEventListener("participantRoleChanged",function(m){a(0,i=[...l.getParticipantsInfo()])}),P(()=>{l.dispose()})}),[i,t,p]}class F extends E{constructor(e){super(),C(this,e,J,H,I,{})}}function X(o){let e,a;return e=new F({}),{c(){U(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,s){B(e,t,s),a=!0},p:b,i(t){a||(G(e.$$.fragment,t),a=!0)},o(t){L(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function z(o,e,a){let t;return O(o,$,s=>a(0,t=s)),k(()=>{q($,t=!0,t),window.document.body.classList.toggle("dark-mode")}),[]}class se extends E{constructor(e){super(),C(this,e,z,X,I,{})}}export{se as default};
