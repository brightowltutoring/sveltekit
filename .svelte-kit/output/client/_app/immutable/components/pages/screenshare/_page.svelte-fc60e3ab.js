import{S as E,i as I,s as k,k as m,a as $,l as p,m as b,h as u,c as j,n as c,b as N,O as h,H as v,B as y,D as x,T as O,o as C,e as w,f,t as g,d as D,U as S,a5 as M,w as A,x as B,y as P,z as R,g as U}from"../../../chunks/index-2ea15190.js";import{l as L,a as _}from"../../../chunks/store-0b213626.js";function V(r){let t,s,e,a,i,o,d;return{c(){t=m("div"),s=m("div"),e=$(),a=m("img"),this.h()},l(n){t=p(n,"DIV",{class:!0});var l=b(t);s=p(l,"DIV",{id:!0,class:!0}),b(s).forEach(u),e=j(l),a=p(l,"IMG",{alt:!0,class:!0}),l.forEach(u),this.h()},h(){c(s,"id","meet"),c(s,"class","w-full h-[95vh] md:h-[670px] peer"),c(a,"alt","hangup button"),c(a,"class",i="bg-gray-600 p-2 absolute brightness-50 "+(!r[0]&&"opacity-0")+" "+(r[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500"),c(t,"class","relative md:-translate-y-10 -translate-y-32 ")},m(n,l){N(n,t,l),h(t,s),h(t,e),h(t,a),o||(d=[v(a,"click",r[2]),v(a,"keydown",r[2])],o=!0)},p(n,[l]){l&3&&i!==(i="bg-gray-600 p-2 absolute brightness-50 "+(!n[0]&&"opacity-0")+" "+(n[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500")&&c(a,"class",i)},i:y,o:y,d(n){n&&u(t),o=!1,x(d)}}}let G="meet.jit.si";function J(r,t,s){let e;O(r,L,n=>s(1,e=n));async function a(){await i.dispose(),setTimeout(()=>{window.location.href="/"},0)}let i,o,d={roomName:"ThinkSolve12522",configOverwrite:{hideConferenceTimer:!0,hideConferenceSubject:!0,hideParticipantsStats:!0,disablePolls:!0,disableSelfView:!1,disabledSounds:["KNOCKING_PARTICIPANT_SOUND"],disableDeepLinking:!0,disableRemoteMute:!0,notifications:"lobby.notificationTitle",startWithAudioMuted:!0,startWithVideoMuted:!0,remoteVideoMenu:{disableKick:!0,disablePrivateChat:!0}},interfaceConfigOverwrite:{DEFAULT_BACKGROUND:"#130e21",SHOW_CHROME_EXTENSION_BANNER:!1,SETTINGS_SECTIONS:["devices"],TOOLBAR_BUTTONS:["desktop","microphone","camera","fullscreen","chat","fodeviceselection","etherpad"]}};return C(async()=>{d.parentNode=await document.querySelector("#meet"),i=new JitsiMeetExternalAPI(G,await d),i.addEventListener("participantRoleChanged",function(n){s(0,o=[...i.getParticipantsInfo()])})}),[o,e,a]}class K extends E{constructor(t){super(),I(this,t,J,V,k,{})}}function T(r){let t,s;return t=new K({}),{c(){A(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,a){P(t,e,a),s=!0},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){R(t,e)}}}function H(r){let t,s,e=r[0]&&T();return{c(){e&&e.c(),t=w()},l(a){e&&e.l(a),t=w()},m(a,i){e&&e.m(a,i),N(a,t,i),s=!0},p(a,[i]){a[0]?e?i&1&&f(e,1):(e=T(),e.c(),f(e,1),e.m(t.parentNode,t)):e&&(U(),g(e,1,1,()=>{e=null}),D())},i(a){s||(f(e),s=!0)},o(a){g(e),s=!1},d(a){e&&e.d(a),a&&u(t)}}}function W(r,t,s){let e;O(r,_,o=>s(1,e=o));let a=!1;function i(){if(!document.getElementById("jitsiId")){const o=document.createElement("script");o.id="jitsiId",o.src="https://meet.jit.si/external_api.js",o.type="text/javascript",document.head.appendChild(o)}document.getElementById("jitsiId")&&s(0,a=!0)}return i(),C(()=>{S(_,e=!0,e),window.document.body.classList.add("dark-mode")}),M(()=>{S(_,e=!1,e),window.document.body.classList.remove("dark-mode")}),[a]}class F extends E{constructor(t){super(),I(this,t,W,H,k,{})}}export{F as default};
