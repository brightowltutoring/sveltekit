import{S as $,i as I,s as O,k as p,a as E,V as y,l as f,m as v,h as o,c as S,_ as N,n as d,L as h,b as x,F as C,A as _,o as M,Z as k,v as P,w as R,x as j,f as A,t as V,y as q}from"../../../chunks/index-e087fcf9.js";const{document:T}=k;function B(l){let e,s,t,a,i,c,n,g,b;return{c(){e=p("script"),t=E(),a=p("div"),i=p("div"),c=E(),n=p("img"),this.h()},l(r){const u=y('[data-svelte="svelte-1pkind7"]',T.head);e=f(u,"SCRIPT",{src:!0});var w=v(e);w.forEach(o),u.forEach(o),t=S(r),a=f(r,"DIV",{class:!0});var m=v(a);i=f(m,"DIV",{id:!0}),v(i).forEach(o),c=S(m),n=f(m,"IMG",{alt:!0,class:!0}),m.forEach(o),this.h()},h(){N(e.src,s="https://meet.jit.si/external_api.js")||d(e,"src",s),d(i,"id","meet"),d(n,"alt","hangup button"),d(n,"class","absolute sm:bottom-10 sm:right-10 bottom-56 right-5 flex w-[50px] rounded-full content-[url('/hangup-gray.png')] rotate-90 duration-[0.4s] hover:scale-[1.8] hover:rotate-0 hover:content-[url('/hangup-red.png')] "),d(a,"class","relative w-full")},m(r,u){h(T.head,e),x(r,t,u),x(r,a,u),h(a,i),h(a,c),h(a,n),g||(b=C(n,"click",l[0]),g=!0)},p:_,i:_,o:_,d(r){o(e),r&&o(t),r&&o(a),g=!1,b()}}}function L(l){let e,s,t,a,i;function c(){t.dispose(),setTimeout(()=>{window.location.href="https://thinksolve.io"},300)}return M(()=>{e="meet.jit.si",s={roomName:"ThinkSolve12522",height:"740px",parentNode:document.querySelector("#meet"),configOverwrite:{disableRemoteMute:!0,notifications:"lobby.notificationTitle",startWithAudioMuted:!0,startWithVideoMuted:!0,remoteVideoMenu:{disableKick:!0,disablePrivateChat:!0}},interfaceConfigOverwrite:{SHOW_CHROME_EXTENSION_BANNER:!1,SETTINGS_SECTIONS:["devices"],TOOLBAR_BUTTONS:["desktop","microphone","camera","fullscreen","settings","chat","fodeviceselection","etherpad"]}},t=new JitsiMeetExternalAPI(e,s),t.addEventListener("participantRoleChanged",function(n){n.role==="moderator"&&t.executeCommand("toggleLobby",!0),a=[...t.getParticipantsInfo()],i=Object.values(a[0])[3],t.pinParticipant(i)})}),[c]}class D extends ${constructor(e){super(),I(this,e,L,B,O,{})}}function U(l){let e,s;return e=new D({}),{c(){P(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,a){j(e,t,a),s=!0},p:_,i(t){s||(A(e.$$.fragment,t),s=!0)},o(t){V(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}class G extends ${constructor(e){super(),I(this,e,null,U,O,{})}}export{G as default};
