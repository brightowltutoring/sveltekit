import{S as E,i as C,s as I,k as h,a as S,_ as x,l as f,m as v,h as u,c as y,a0 as A,n as d,N as _,b as w,G as P,A as b,R as O,o as k,$ as R,v as D,w as U,x as j,f as B,t as G,y as L,T as V}from"../../../chunks/index-1063d0c6.js";import{l as q,b as N}from"../../../chunks/store-338023ad.js";import{g as K}from"../../../chunks/navigation-493f3a83.js";import"../../../chunks/index-6dbc7447.js";import"../../../chunks/singletons-213e3f9e.js";const{document:$}=R;function W(o){let e,s,t,a,r,p,n,l,g,T;return{c(){e=h("script"),t=S(),a=h("div"),r=h("div"),p=S(),n=h("img"),this.h()},l(i){const c=x('[data-svelte="svelte-1pkind7"]',$.head);e=f(c,"SCRIPT",{src:!0});var M=v(e);M.forEach(u),c.forEach(u),t=y(i),a=f(i,"DIV",{class:!0});var m=v(a);r=f(m,"DIV",{id:!0,class:!0}),v(r).forEach(u),p=y(m),n=f(m,"IMG",{alt:!0,class:!0}),m.forEach(u),this.h()},h(){A(e.src,s="https://meet.jit.si/external_api.js")||d(e,"src",s),d(r,"id","meet"),d(r,"class","w-full h-[95vh] md:h-[670px] peer"),d(n,"alt","hangup button"),d(n,"class",l="bg-gray-600 p-2 absolute brightness-50 "+(!o[0]&&"opacity-0")+" "+(o[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500"),d(a,"class","relative md:-translate-y-10 -translate-y-32 ")},m(i,c){_($.head,e),w(i,t,c),w(i,a,c),_(a,r),_(a,p),_(a,n),g||(T=P(n,"click",o[2]),g=!0)},p(i,[c]){c&3&&l!==(l="bg-gray-600 p-2 absolute brightness-50 "+(!i[0]&&"opacity-0")+" "+(i[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500")&&d(n,"class",l)},i:b,o:b,d(i){u(e),i&&u(t),i&&u(a),g=!1,T()}}}let H="meet.jit.si";function J(o,e,s){let t;O(o,q,l=>s(1,t=l));async function a(){await r.dispose(),await setTimeout(()=>{K("/")},0)}let r,p,n={roomName:"ThinkSolve12522",configOverwrite:{hideConferenceTimer:!0,hideConferenceSubject:!0,hideParticipantsStats:!0,disablePolls:!0,disableSelfView:!1,disabledSounds:["KNOCKING_PARTICIPANT_SOUND"],disableDeepLinking:!0,disableRemoteMute:!0,notifications:"lobby.notificationTitle",startWithAudioMuted:!0,startWithVideoMuted:!0,remoteVideoMenu:{disableKick:!0,disablePrivateChat:!0}},interfaceConfigOverwrite:{DEFAULT_BACKGROUND:"#130e21",SHOW_CHROME_EXTENSION_BANNER:!1,SETTINGS_SECTIONS:["devices"],TOOLBAR_BUTTONS:["desktop","microphone","camera","fullscreen","chat","fodeviceselection","etherpad"]}};return k(async()=>{n.parentNode=await document.querySelector("#meet"),r=await new JitsiMeetExternalAPI(H,n),r.addEventListener("participantRoleChanged",function(l){s(0,p=[...r.getParticipantsInfo()])})}),[p,t,a]}class F extends E{constructor(e){super(),C(this,e,J,W,I,{})}}function X(o){let e,s;return e=new F({}),{c(){D(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,a){j(e,t,a),s=!0},p:b,i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){G(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function z(o,e,s){let t;return O(o,N,a=>s(0,t=a)),k(()=>{V(N,t=!0,t),window.document.body.classList.toggle("dark-mode")}),[]}class ae extends E{constructor(e){super(),C(this,e,z,X,I,{})}}export{ae as default};
