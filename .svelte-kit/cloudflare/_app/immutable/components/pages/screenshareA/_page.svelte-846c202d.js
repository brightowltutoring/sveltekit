import{S as E,i as I,s as O,k as f,a as w,a0 as D,l as _,m as v,h as u,c as T,a1 as M,n as p,P as g,b as N,H as S,B as b,D as P,Q as C,o as x,a5 as R,w as U,x as B,y as L,f as j,t as q,z as G,U as H}from"../../../chunks/index-680b99e4.js";import{l as K,i as $}from"../../../chunks/store-121681c1.js";const{document:k}=R;function V(r){let e,a,t,s,l,i,o,m,c,y;return{c(){e=f("script"),t=w(),s=f("div"),l=f("div"),i=w(),o=f("img"),this.h()},l(n){const d=D("svelte-1pkind7",k.head);e=_(d,"SCRIPT",{src:!0});var A=v(e);A.forEach(u),d.forEach(u),t=T(n),s=_(n,"DIV",{class:!0});var h=v(s);l=_(h,"DIV",{id:!0,class:!0}),v(l).forEach(u),i=T(h),o=_(h,"IMG",{alt:!0,class:!0}),h.forEach(u),this.h()},h(){M(e.src,a="https://meet.jit.si/external_api.js")||p(e,"src",a),p(l,"id","meet"),p(l,"class","w-full h-[95vh] md:h-[670px]"),p(o,"alt","hangup button"),p(o,"class",m="bg-gray-600 p-2 absolute brightness-50 "+(!r[0]&&"opacity-0")+" "+(r[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500"),p(s,"class","relative md:-translate-y-10 -translate-y-32 ")},m(n,d){g(k.head,e),N(n,t,d),N(n,s,d),g(s,l),g(s,i),g(s,o),c||(y=[S(o,"keydown",r[2]),S(o,"click",r[2])],c=!0)},p(n,[d]){d&3&&m!==(m="bg-gray-600 p-2 absolute brightness-50 "+(!n[0]&&"opacity-0")+" "+(n[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500")&&p(o,"class",m)},i:b,o:b,d(n){u(e),n&&u(t),n&&u(s),c=!1,P(y)}}}function W(r,e,a){let t;C(r,K,c=>a(1,t=c));let s,l,i,o;async function m(){await i.dispose(),await setTimeout(()=>{window.location.href="/"},0)}return x(()=>{s="meet.jit.si",l={userInfo:{displayName:"ThinkSolve"},roomName:"ThinkSolve12522",parentNode:document.querySelector("#meet"),configOverwrite:{disabledSounds:["KNOCKING_PARTICIPANT_SOUND"],disableDeepLinking:!0,startWithAudioMuted:!0,startWithVideoMuted:!0},interfaceConfigOverwrite:{DEFAULT_BACKGROUND:"#130e21",SHOW_CHROME_EXTENSION_BANNER:!1,SETTINGS_SECTIONS:["devices","moderator","language","profile","calendar","sounds"],TOOLBAR_BUTTONS:["noisesuppression","desktop","microphone","camera","fullscreen","settings","chat","fodeviceselection","etherpad","mute-video-everyone","mute-everyone","security","sharedvideo","videoquality","profile","raisehand","livestreaming","recording","closedcaptions","filmstrip","feedback","stats","shortcuts","tileview"]}},i=new JitsiMeetExternalAPI(s,l),i.addEventListener("participantRoleChanged",function(c){c.role==="moderator"&&(i.executeCommand("password","thnkslv"),i.executeCommand("toggleLobby",!0)),a(0,o=[...i.getParticipantsInfo()])})}),[o,t,m]}class J extends E{constructor(e){super(),I(this,e,W,V,O,{})}}function z(r){let e,a;return e=new J({}),{c(){U(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,s){L(e,t,s),a=!0},p:b,i(t){a||(j(e.$$.fragment,t),a=!0)},o(t){q(e.$$.fragment,t),a=!1},d(t){G(e,t)}}}function F(r,e,a){let t;return C(r,$,s=>a(0,t=s)),x(()=>{H($,t=!0,t),window.document.body.classList.add("dark-mode")}),[]}class Y extends E{constructor(e){super(),I(this,e,F,z,O,{})}}export{Y as default};
