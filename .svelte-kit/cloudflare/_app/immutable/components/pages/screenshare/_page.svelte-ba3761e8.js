import{S as de,i as ue,s as he,k as ee,a as Ee,l as te,m as ae,h as ne,c as Ce,n as H,b as Oe,O as re,H as ce,B as se,D as xe,T as pe,o as ge,w as Se,x as Re,y as Ie,f as je,t as Ne,z as Pe,U as le,a5 as Me}from"../../../chunks/index-2ea15190.js";import{g as Ae}from"../../../chunks/navigation-60784fe9.js";import{l as De,a as ie}from"../../../chunks/store-51cc123c.js";(function(T,k){typeof exports=="object"&&typeof module=="object"?module.exports=k():typeof define=="function"&&define.amd?define([],k):typeof exports=="object"?exports.JitsiMeetExternalAPI=k():T.JitsiMeetExternalAPI=k()})(self,function(){return(()=>{var T={820:(h,g,p)=>{p.d(g,{default:()=>me});var w=p(620),E=p.n(w);class o extends w{constructor(){var e,t;super(...arguments),t={},(e="_storage")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}clear(){this._storage={}}get length(){return Object.keys(this._storage).length}getItem(e){return this._storage[e]}setItem(e,t){this._storage[e]=t}removeItem(e){delete this._storage[e]}key(e){const t=Object.keys(this._storage);if(!(t.length<=e))return t[e]}serialize(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(e.length===0)return JSON.stringify(this._storage);const t={...this._storage};return e.forEach(n=>{delete t[n]}),JSON.stringify(t)}}const d=new class extends w{constructor(){super();try{this._storage=window.localStorage,this._localStorageDisabled=!1}catch{}this._storage||(console.warn("Local storage is disabled."),this._storage=new o,this._localStorageDisabled=!0)}isLocalStorageDisabled(){return this._localStorageDisabled}clear(){this._storage.clear(),this.emit("changed")}get length(){return this._storage.length}getItem(i){return this._storage.getItem(i)}setItem(i,e){let t=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this._storage.setItem(i,e),t||this.emit("changed")}removeItem(i){this._storage.removeItem(i),this.emit("changed")}key(i){return this._storage.key(i)}serialize(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(this.isLocalStorageDisabled())return this._storage.serialize(i);const e=this._storage.length,t={};for(let n=0;n<e;n++){const s=this._storage.key(n);i.includes(s)||(t[s]=this._storage.getItem(s))}return JSON.stringify(t)}};var a=p(571);const f=["__proto__","constructor","prototype"];function y(i){const e=new RegExp("^([a-z][a-z0-9\\.\\+-]*:)+","gi"),t=e.exec(i);if(t){let n=t[t.length-1].toLowerCase();n!=="http:"&&n!=="https:"&&(n="https:"),(i=i.substring(e.lastIndex)).startsWith("//")&&(i=n+i)}return i}function x(i={}){const e=[];for(const t in i)try{e.push(`${t}=${encodeURIComponent(JSON.stringify(i[t]))}`)}catch(n){console.warn(`Error encoding ${t}: ${n}`)}return e}function S(i){const e={toString:U};let t,n,s;if(i=i.replace(/\s/g,""),t=new RegExp("^([a-z][a-z0-9\\.\\+-]*:)","gi"),n=t.exec(i),n&&(e.protocol=n[1].toLowerCase(),i=i.substring(t.lastIndex)),t=new RegExp("^(//[^/?#]+)","gi"),n=t.exec(i),n){let u=n[1].substring(2);i=i.substring(t.lastIndex);const m=u.indexOf("@");m!==-1&&(u=u.substring(m+1)),e.host=u;const N=u.lastIndexOf(":");N!==-1&&(e.port=u.substring(N+1),u=u.substring(0,N)),e.hostname=u}if(t=new RegExp("^([^?#]*)","gi"),n=t.exec(i),n&&(s=n[1],i=i.substring(t.lastIndex)),s?s.startsWith("/")||(s=`/${s}`):s="/",e.pathname=s,i.startsWith("?")){let u=i.indexOf("#",1);u===-1&&(u=i.length),e.search=i.substring(0,u),i=i.substring(u)}else e.search="";return e.hash=i.startsWith("#")?i:"",e}function U(i){const{hash:e,host:t,pathname:n,protocol:s,search:u}=i||this;let m="";return s&&(m+=s),t&&(m+=`//${t}`),m+=n||"/",u&&(m+=u),e&&(m+=e),m}function W(i){let e;e=i.serverURL&&i.room?new URL(i.room,i.serverURL).toString():i.room?i.room:i.url||"";const t=S(y(e));if(!t.protocol){let I=i.protocol||i.scheme;I&&(I.endsWith(":")||(I+=":"),t.protocol=I)}let{pathname:n}=t;if(!t.host){const I=i.domain||i.host||i.hostname;if(I){const{host:$,hostname:D,pathname:G,port:C}=S(y(`org.jitsi.meet://${I}`));$&&(t.host=$,t.hostname=D,t.port=C),n==="/"&&G!=="/"&&(n=G)}}const s=i.roomName||i.room;!s||!t.pathname.endsWith("/")&&t.pathname.endsWith(`/${s}`)||(n.endsWith("/")||(n+="/"),n+=s),t.pathname=n;const{jwt:u,lang:m,release:N}=i,A=new URLSearchParams(t.search);u&&A.set("jwt",u);const{defaultLanguage:V}=i.configOverwrite||{};(m||V)&&A.set("lang",m||V),N&&A.set("release",N);const M=A.toString();M&&(t.search=`?${M}`);let{hash:q}=t;for(const I of["config","interfaceConfig","devices","userInfo","appData"]){const $=x(i[`${I}Overwrite`]||i[I]||i[`${I}Override`]);if($.length){let D=`${I}.${$.join(`&${I}.`)}`;q.length?D=`&${D}`:q="#",q+=D}}return t.hash=q,t.toString()||void 0}const K={window:window.opener||window.parent},B="message";class r{constructor(){let{postisOptions:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.postis=function(t){var n,s=t.scope,u=t.window,m=t.windowForEventListening||window,N=t.allowedOrigin,A={},V=[],M={},q=!1,I="__ready__",$=function(C){var j;try{j=JSON.parse(C.data)}catch{return}if((!N||C.origin===N)&&j&&j.postis&&j.scope===s){var J=A[j.method];if(J)for(var z=0;z<J.length;z++)J[z].call(null,j.params);else M[j.method]=M[j.method]||[],M[j.method].push(j.params)}};m.addEventListener("message",$,!1);var D={listen:function(C,j){A[C]=A[C]||[],A[C].push(j);var J=M[C];if(J)for(var z=A[C],F=0;F<z.length;F++)for(var Q=0;Q<J.length;Q++)z[F].call(null,J[Q]);delete M[C]},send:function(C){var j=C.method;(q||C.method===I)&&u&&typeof u.postMessage=="function"?u.postMessage(JSON.stringify({postis:!0,scope:s,method:j,params:C.params}),"*"):V.push(C)},ready:function(C){q?C():setTimeout(function(){D.ready(C)},50)},destroy:function(C){clearInterval(n),q=!1,m&&typeof m.removeEventListener=="function"&&m.removeEventListener("message",$),C&&C()}},G=+new Date+Math.random()+"";return n=setInterval(function(){D.send({method:I,params:G})},50),D.listen(I,function(C){if(C===G){clearInterval(n),q=!0;for(var j=0;j<V.length;j++)D.send(V[j]);V=[]}else D.send({method:I,params:C})}),D}({...K,...e}),this._receiveCallback=()=>{},this.postis.listen(B,t=>this._receiveCallback(t))}dispose(){this.postis.destroy()}send(e){this.postis.send({method:B,params:e})}setReceiveCallback(e){this._receiveCallback=e}}const c="request",l="response";class v{constructor(){let{backend:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._listeners=new Map,this._requestID=0,this._responseHandlers=new Map,this._unprocessedMessages=new Set,this.addListener=this.on,e&&this.setBackend(e)}_disposeBackend(){this._backend&&(this._backend.dispose(),this._backend=null)}_onMessageReceived(e){if(e.type===l){const t=this._responseHandlers.get(e.id);t&&(t(e),this._responseHandlers.delete(e.id))}else e.type===c?this.emit("request",e.data,(t,n)=>{this._backend.send({type:l,error:n,id:e.id,result:t})}):this.emit("event",e.data)}dispose(){this._responseHandlers.clear(),this._unprocessedMessages.clear(),this.removeAllListeners(),this._disposeBackend()}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];const u=this._listeners.get(e);let m=!1;return u&&u.size&&u.forEach(N=>{m=N(...n)||m}),m||this._unprocessedMessages.add(n),m}on(e,t){let n=this._listeners.get(e);return n||(n=new Set,this._listeners.set(e,n)),n.add(t),this._unprocessedMessages.forEach(s=>{t(...s)&&this._unprocessedMessages.delete(s)}),this}removeAllListeners(e){return e?this._listeners.delete(e):this._listeners.clear(),this}removeListener(e,t){const n=this._listeners.get(e);return n&&n.delete(t),this}sendEvent(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._backend&&this._backend.send({type:"event",data:e})}sendRequest(e){if(!this._backend)return Promise.reject(new Error("No transport backend defined!"));this._requestID++;const t=this._requestID;return new Promise((n,s)=>{this._responseHandlers.set(t,u=>{let{error:m,result:N}=u;N!==void 0?n(N):s(m!==void 0?m:new Error("Unexpected response format!"))}),this._backend.send({type:c,data:e,id:t})})}setBackend(e){this._disposeBackend(),this._backend=e,this._backend.setReceiveCallback(this._onMessageReceived.bind(this))}}(function(i,e=!1,t="hash"){typeof i=="string"&&(i=new URL(i));const n=t==="search"?i.search:i.hash,s={},u=(n==null?void 0:n.substr(1).split("&"))||[];if(t==="hash"&&u.length===1){const m=u[0];if(m.startsWith("/")&&m.split("&").length===1)return s}return u.forEach(m=>{const N=m.split("="),A=N[0];if(!A||A.split(".").some(M=>f.includes(M)))return;let V;try{if(V=N[1],!e){const M=decodeURIComponent(V).replace(/\\&/,"&");V=M==="undefined"?void 0:a.parse(M)}}catch(M){return void function(q,I=""){var $;console.error(I,q),($=window.onerror)===null||$===void 0||$.call(window,I,void 0,void 0,void 0,q)}(M,`Failed to parse URL parameter value: ${String(V)}`)}s[A]=V}),s})(window.location).jitsi_meet_external_api_id,(window.JitsiMeetJS||(window.JitsiMeetJS={}),window.JitsiMeetJS.app||(window.JitsiMeetJS.app={}),window.JitsiMeetJS.app).setExternalTransportBackend=i=>(void 0).setBackend(i);var b=p(860);const _=p.n(b)().getLogger("modules/API/external/functions.js");function L(i,e){return i.sendRequest({type:"devices",name:"setDevice",device:e})}const R=["css/all.css","libs/alwaysontop.min.js"],P={addBreakoutRoom:"add-breakout-room",answerKnockingParticipant:"answer-knocking-participant",approveVideo:"approve-video",askToUnmute:"ask-to-unmute",autoAssignToBreakoutRooms:"auto-assign-to-breakout-rooms",avatarUrl:"avatar-url",cancelPrivateChat:"cancel-private-chat",closeBreakoutRoom:"close-breakout-room",displayName:"display-name",e2eeKey:"e2ee-key",email:"email",grantModerator:"grant-moderator",hangup:"video-hangup",hideNotification:"hide-notification",initiatePrivateChat:"initiate-private-chat",joinBreakoutRoom:"join-breakout-room",localSubject:"local-subject",kickParticipant:"kick-participant",muteEveryone:"mute-everyone",overwriteConfig:"overwrite-config",overwriteNames:"overwrite-names",password:"password",pinParticipant:"pin-participant",rejectParticipant:"reject-participant",removeBreakoutRoom:"remove-breakout-room",resizeFilmStrip:"resize-film-strip",resizeLargeVideo:"resize-large-video",sendChatMessage:"send-chat-message",sendEndpointTextMessage:"send-endpoint-text-message",sendParticipantToRoom:"send-participant-to-room",sendTones:"send-tones",setFollowMe:"set-follow-me",setLargeVideoParticipant:"set-large-video-participant",setMediaEncryptionKey:"set-media-encryption-key",setNoiseSuppressionEnabled:"set-noise-suppression-enabled",setParticipantVolume:"set-participant-volume",setSubtitles:"set-subtitles",setTileView:"set-tile-view",setVideoQuality:"set-video-quality",showNotification:"show-notification",startRecording:"start-recording",startShareVideo:"start-share-video",stopRecording:"stop-recording",stopShareVideo:"stop-share-video",subject:"subject",submitFeedback:"submit-feedback",toggleAudio:"toggle-audio",toggleCamera:"toggle-camera",toggleCameraMirror:"toggle-camera-mirror",toggleChat:"toggle-chat",toggleE2EE:"toggle-e2ee",toggleFilmStrip:"toggle-film-strip",toggleLobby:"toggle-lobby",toggleModeration:"toggle-moderation",toggleNoiseSuppression:"toggle-noise-suppression",toggleParticipantsPane:"toggle-participants-pane",toggleRaiseHand:"toggle-raise-hand",toggleShareScreen:"toggle-share-screen",toggleSubtitles:"toggle-subtitles",toggleTileView:"toggle-tile-view",toggleVirtualBackgroundDialog:"toggle-virtual-background",toggleVideo:"toggle-video"},Y={"avatar-changed":"avatarChanged","audio-availability-changed":"audioAvailabilityChanged","audio-mute-status-changed":"audioMuteStatusChanged","audio-or-video-sharing-toggled":"audioOrVideoSharingToggled","breakout-rooms-updated":"breakoutRoomsUpdated","browser-support":"browserSupport","camera-error":"cameraError","chat-updated":"chatUpdated","content-sharing-participants-changed":"contentSharingParticipantsChanged","data-channel-opened":"dataChannelOpened","device-list-changed":"deviceListChanged","display-name-change":"displayNameChange","email-change":"emailChange","error-occurred":"errorOccurred","endpoint-text-message-received":"endpointTextMessageReceived","face-landmark-detected":"faceLandmarkDetected","feedback-submitted":"feedbackSubmitted","feedback-prompt-displayed":"feedbackPromptDisplayed","filmstrip-display-changed":"filmstripDisplayChanged","iframe-dock-state-changed":"iframeDockStateChanged","incoming-message":"incomingMessage","knocking-participant":"knockingParticipant",log:"log","mic-error":"micError","moderation-participant-approved":"moderationParticipantApproved","moderation-participant-rejected":"moderationParticipantRejected","moderation-status-changed":"moderationStatusChanged","mouse-enter":"mouseEnter","mouse-leave":"mouseLeave","mouse-move":"mouseMove","outgoing-message":"outgoingMessage","participant-joined":"participantJoined","participant-kicked-out":"participantKickedOut","participant-left":"participantLeft","participant-role-changed":"participantRoleChanged","participants-pane-toggled":"participantsPaneToggled","password-required":"passwordRequired","prejoin-screen-loaded":"prejoinScreenLoaded","proxy-connection-event":"proxyConnectionEvent","raise-hand-updated":"raiseHandUpdated","recording-link-available":"recordingLinkAvailable","recording-status-changed":"recordingStatusChanged","video-ready-to-close":"readyToClose","video-conference-joined":"videoConferenceJoined","video-conference-left":"videoConferenceLeft","video-availability-changed":"videoAvailabilityChanged","video-mute-status-changed":"videoMuteStatusChanged","video-quality-changed":"videoQualityChanged","screen-sharing-status-changed":"screenSharingStatusChanged","dominant-speaker-changed":"dominantSpeakerChanged","subject-change":"subjectChange","suspend-detected":"suspendDetected","tile-view-changed":"tileViewChanged","toolbar-button-clicked":"toolbarButtonClicked"};let X=0;function Z(i,e){i._numberOfParticipants+=e}function oe(i){let e;return typeof i=="string"&&String(i).match(/([0-9]*\.?[0-9]+)(em|pt|px|%)$/)!==null?e=i:typeof i=="number"&&(e=`${i}px`),e}class me extends E(){constructor(e){super();for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];const{roomName:u="",width:m="100%",height:N="100%",parentNode:A=document.body,configOverwrite:V={},interfaceConfigOverwrite:M={},jwt:q,lang:I,onload:$,invitees:D,devices:G,userInfo:C,e2eeKey:j,release:J}=function(F){if(!F.length)return{};switch(typeof F[0]){case"string":case"undefined":{const[Q,fe,ve,ye,_e,be,we,Le,ke]=F;return{roomName:Q,width:fe,height:ve,parentNode:ye,configOverwrite:_e,interfaceConfigOverwrite:be,jwt:we,onload:Le,lang:ke}}case"object":return F[0];default:throw new Error("Can't parse the arguments!")}}(n),z=d.getItem("jitsiLocalStorage");this._parentNode=A,this._url=function(F){return W({...arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},url:`https://${F}/#jitsi_meet_external_api_id=${X}`})}(e,{configOverwrite:V,interfaceConfigOverwrite:M,jwt:q,lang:I,roomName:u,devices:G,userInfo:C,appData:{localStorageContent:z},release:J}),this._createIFrame(N,m,$),this._transport=new v({backend:new r({postisOptions:{allowedOrigin:new URL(this._url).origin,scope:`jitsi_meet_external_api_${X}`,window:this._frame.contentWindow}})}),Array.isArray(D)&&D.length>0&&this.invite(D),this._tmpE2EEKey=j,this._isLargeVideoVisible=!1,this._isPrejoinVideoVisible=!1,this._numberOfParticipants=0,this._participants={},this._myUserID=void 0,this._onStageParticipant=void 0,this._setupListeners(),X++}_createIFrame(e,t,n){const s=`jitsiConferenceFrame${X}`;this._frame=document.createElement("iframe"),this._frame.allow="camera; microphone; display-capture; autoplay; clipboard-write",this._frame.src=this._url,this._frame.name=s,this._frame.id=s,this._setSize(e,t),this._frame.setAttribute("allowFullScreen","true"),this._frame.style.border=0,n&&(this._frame.onload=n),this._frame=this._parentNode.appendChild(this._frame)}_getAlwaysOnTopResources(){const e=this._frame.contentWindow,t=e.document;let n="";const s=t.querySelector("base");if(s&&s.href)n=s.href;else{const{protocol:u,host:m}=e.location;n=`${u}//${m}`}return R.map(u=>new URL(u,n).href)}_getFormattedDisplayName(e){const{formattedDisplayName:t}=this._participants[e]||{};return t}_getOnStageParticipant(){return this._onStageParticipant}_getLargeVideo(){const e=this.getIFrame();if(this._isLargeVideoVisible&&e&&e.contentWindow&&e.contentWindow.document)return e.contentWindow.document.getElementById("largeVideo")}_getPrejoinVideo(){const e=this.getIFrame();if(this._isPrejoinVideoVisible&&e&&e.contentWindow&&e.contentWindow.document)return e.contentWindow.document.getElementById("prejoinVideo")}_getParticipantVideo(e){const t=this.getIFrame();if(t&&t.contentWindow&&t.contentWindow.document)return e===void 0||e===this._myUserID?t.contentWindow.document.getElementById("localVideo_container"):t.contentWindow.document.querySelector(`#participant_${e} video`)}_setSize(e,t){const n=oe(e),s=oe(t);n!==void 0&&(this._height=e,this._frame.style.height=n),s!==void 0&&(this._width=t,this._frame.style.width=s)}_setupListeners(){this._transport.on("event",e=>{let{name:t,...n}=e;const s=n.id;switch(t){case"video-conference-joined":this._tmpE2EEKey!==void 0&&(this.executeCommand(P.e2eeKey,this._tmpE2EEKey),this._tmpE2EEKey=void 0),this._myUserID=s,this._participants[s]={email:n.email,avatarURL:n.avatarURL};case"participant-joined":this._participants[s]=this._participants[s]||{},this._participants[s].displayName=n.displayName,this._participants[s].formattedDisplayName=n.formattedDisplayName,Z(this,1);break;case"participant-left":Z(this,-1),delete this._participants[s];break;case"display-name-change":{const m=this._participants[s];m&&(m.displayName=n.displayname,m.formattedDisplayName=n.formattedDisplayName);break}case"email-change":{const m=this._participants[s];m&&(m.email=n.email);break}case"avatar-changed":{const m=this._participants[s];m&&(m.avatarURL=n.avatarURL);break}case"on-stage-participant-changed":this._onStageParticipant=s,this.emit("largeVideoChanged");break;case"large-video-visibility-changed":this._isLargeVideoVisible=n.isVisible,this.emit("largeVideoChanged");break;case"prejoin-screen-loaded":this._participants[s]={displayName:n.displayName,formattedDisplayName:n.formattedDisplayName};break;case"on-prejoin-video-changed":this._isPrejoinVideoVisible=n.isVisible,this.emit("prejoinVideoChanged");break;case"video-conference-left":Z(this,-1),delete this._participants[this._myUserID];break;case"video-quality-changed":this._videoQuality=n.videoQuality;break;case"breakout-rooms-updated":this.updateNumberOfParticipants(n.rooms);break;case"local-storage-changed":return d.setItem("jitsiLocalStorage",n.localStorageContent),!0}const u=Y[t];return!!u&&(this.emit(u,n),!0)})}updateNumberOfParticipants(e){if(!e||!Object.keys(e).length)return;const t=Object.keys(e).reduce((n,s)=>{var u;return(u=e[s])!==null&&u!==void 0&&u.participants?Object.keys(e[s].participants).length+n:n},0);this._numberOfParticipants=t}async getRoomsInfo(){return this._transport.sendRequest({name:"rooms-info"})}addEventListener(e,t){this.on(e,t)}addEventListeners(e){for(const t in e)this.addEventListener(t,e[t])}captureLargeVideoScreenshot(){return this._transport.sendRequest({name:"capture-largevideo-screenshot"})}dispose(){this.emit("_willDispose"),this._transport.dispose(),this.removeAllListeners(),this._frame&&this._frame.parentNode&&this._frame.parentNode.removeChild(this._frame)}executeCommand(e){if(e in P){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];this._transport.sendEvent({data:n,name:P[e]})}else console.error("Not supported command name.")}executeCommands(e){for(const t in e)this.executeCommand(t,e[t])}getAvailableDevices(){return function(e){return e.sendRequest({type:"devices",name:"getAvailableDevices"}).catch(t=>(_.error(t),{}))}(this._transport)}getContentSharingParticipants(){return this._transport.sendRequest({name:"get-content-sharing-participants"})}getCurrentDevices(){return function(e){return e.sendRequest({type:"devices",name:"getCurrentDevices"}).catch(t=>(_.error(t),{}))}(this._transport)}getCustomAvatarBackgrounds(){return this._transport.sendRequest({name:"get-custom-avatar-backgrounds"})}getLivestreamUrl(){return this._transport.sendRequest({name:"get-livestream-url"})}getParticipantsInfo(){const e=Object.keys(this._participants),t=Object.values(this._participants);return t.forEach((n,s)=>{n.participantId=e[s]}),t}getVideoQuality(){return this._videoQuality}isAudioAvailable(){return this._transport.sendRequest({name:"is-audio-available"})}isDeviceChangeAvailable(e){return function(t,n){return t.sendRequest({deviceType:n,type:"devices",name:"isDeviceChangeAvailable"})}(this._transport,e)}isDeviceListAvailable(){return function(e){return e.sendRequest({type:"devices",name:"isDeviceListAvailable"})}(this._transport)}isMultipleAudioInputSupported(){return function(e){return e.sendRequest({type:"devices",name:"isMultipleAudioInputSupported"})}(this._transport)}invite(e){return Array.isArray(e)&&e.length!==0?this._transport.sendRequest({name:"invite",invitees:e}):Promise.reject(new TypeError("Invalid Argument"))}isAudioMuted(){return this._transport.sendRequest({name:"is-audio-muted"})}isAudioDisabled(){return this._transport.sendRequest({name:"is-audio-disabled"})}isModerationOn(e){return this._transport.sendRequest({name:"is-moderation-on",mediaType:e})}isParticipantForceMuted(e,t){return this._transport.sendRequest({name:"is-participant-force-muted",participantId:e,mediaType:t})}isParticipantsPaneOpen(){return this._transport.sendRequest({name:"is-participants-pane-open"})}isSharingScreen(){return this._transport.sendRequest({name:"is-sharing-screen"})}isStartSilent(){return this._transport.sendRequest({name:"is-start-silent"})}getAvatarURL(e){const{avatarURL:t}=this._participants[e]||{};return t}getDeploymentInfo(){return this._transport.sendRequest({name:"deployment-info"})}getDisplayName(e){const{displayName:t}=this._participants[e]||{};return t}getEmail(e){const{email:t}=this._participants[e]||{};return t}getIFrame(){return this._frame}getNumberOfParticipants(){return this._numberOfParticipants}isVideoAvailable(){return this._transport.sendRequest({name:"is-video-available"})}isVideoMuted(){return this._transport.sendRequest({name:"is-video-muted"})}listBreakoutRooms(){return this._transport.sendRequest({name:"list-breakout-rooms"})}pinParticipant(e){this.executeCommand("pinParticipant",e)}removeEventListener(e){this.removeAllListeners(e)}removeEventListeners(e){e.forEach(t=>this.removeEventListener(t))}resizeLargeVideo(e,t){e<=this._width&&t<=this._height&&this.executeCommand("resizeLargeVideo",e,t)}sendProxyConnectionEvent(e){this._transport.sendEvent({data:[e],name:"proxy-connection-event"})}setAudioInputDevice(e,t){return function(n,s,u){return L(n,{id:u,kind:"audioinput",label:s})}(this._transport,e,t)}setAudioOutputDevice(e,t){return function(n,s,u){return L(n,{id:u,kind:"audiooutput",label:s})}(this._transport,e,t)}setLargeVideoParticipant(e){this.executeCommand("setLargeVideoParticipant",e)}setVideoInputDevice(e,t){return function(n,s,u){return L(n,{id:u,kind:"videoinput",label:s})}(this._transport,e,t)}startRecording(e){this.executeCommand("startRecording",e)}stopRecording(e){this.executeCommand("stopRecording",e)}toggleE2EE(e){this.executeCommand("toggleE2EE",e)}async setMediaEncryptionKey(e){const{key:t,index:n}=e;if(t){const s=await crypto.subtle.exportKey("raw",t);this.executeCommand("setMediaEncryptionKey",JSON.stringify({exportedKey:Array.from(new Uint8Array(s)),index:n}))}else this.executeCommand("setMediaEncryptionKey",JSON.stringify({exportedKey:!1,index:n}))}}},872:(h,g,p)=>{h.exports=p(820).default},571:(h,g)=>{const p=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*\:/;g.parse=function(w){const E=typeof(arguments.length<=1?void 0:arguments[1])=="object"&&(arguments.length<=1?void 0:arguments[1]),o=(arguments.length<=1?0:arguments.length-1)>1||!E?arguments.length<=1?void 0:arguments[1]:void 0,d=(arguments.length<=1?0:arguments.length-1)>1&&(arguments.length<=2?void 0:arguments[2])||E||{},a=JSON.parse(w,o);return d.protoAction==="ignore"||a&&typeof a=="object"&&w.match(p)&&g.scan(a,d),a},g.scan=function(w){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=[w];for(;o.length;){const d=o;o=[];for(const a of d){if(Object.prototype.hasOwnProperty.call(a,"__proto__")){if(E.protoAction!=="remove")throw new SyntaxError("Object contains forbidden prototype property");delete a.__proto__}for(const f in a){const y=a[f];y&&typeof y=="object"&&o.push(a[f])}}}},g.safeParse=function(w,E){try{return g.parse(w,E)}catch{return null}}},369:(h,g,p)=>{var w=p(7);function E(o,d){this.logStorage=o,this.stringifyObjects=!(!d||!d.stringifyObjects)&&d.stringifyObjects,this.storeInterval=d&&d.storeInterval?d.storeInterval:3e4,this.maxEntryLength=d&&d.maxEntryLength?d.maxEntryLength:1e4,Object.keys(w.levels).forEach(function(a){this[w.levels[a]]=function(){this._log.apply(this,arguments)}.bind(this,a)}.bind(this)),this.storeLogsIntervalID=null,this.queue=[],this.totalLen=0,this.outputCache=[]}E.prototype.stringify=function(o){try{return JSON.stringify(o)}catch{return"[object with circular refs?]"}},E.prototype.formatLogMessage=function(o){for(var d="",a=1,f=arguments.length;a<f;a++){var y=arguments[a];!this.stringifyObjects&&o!==w.levels.ERROR||typeof y!="object"||(y=this.stringify(y)),d+=y,a!==f-1&&(d+=" ")}return d.length?d:null},E.prototype._log=function(){var o=arguments[1],d=this.formatLogMessage.apply(this,arguments);if(d){var a=this.queue[this.queue.length-1],f=a&&a.text;f===d?a.count+=1:(this.queue.push({text:d,timestamp:o,count:1}),this.totalLen+=d.length)}this.totalLen>=this.maxEntryLength&&this._flush(!0,!0)},E.prototype.start=function(){this._reschedulePublishInterval()},E.prototype._reschedulePublishInterval=function(){this.storeLogsIntervalID&&(window.clearTimeout(this.storeLogsIntervalID),this.storeLogsIntervalID=null),this.storeLogsIntervalID=window.setTimeout(this._flush.bind(this,!1,!0),this.storeInterval)},E.prototype.flush=function(){this._flush(!1,!0)},E.prototype._flush=function(o,d){this.totalLen>0&&(this.logStorage.isReady()||o)&&(this.logStorage.isReady()?(this.outputCache.length&&(this.outputCache.forEach(function(a){this.logStorage.storeLogs(a)}.bind(this)),this.outputCache=[]),this.logStorage.storeLogs(this.queue)):this.outputCache.push(this.queue),this.queue=[],this.totalLen=0),d&&this._reschedulePublishInterval()},E.prototype.stop=function(){this._flush(!1,!1)},h.exports=E},7:h=>{var g={trace:0,debug:1,info:2,log:3,warn:4,error:5};d.consoleTransport=console;var p=[d.consoleTransport];d.addGlobalTransport=function(a){p.indexOf(a)===-1&&p.push(a)},d.removeGlobalTransport=function(a){var f=p.indexOf(a);f!==-1&&p.splice(f,1)};var w={};function E(){var a={methodName:"",fileLocation:"",line:null,column:null},f=new Error,y=f.stack?f.stack.split(`
`):[];if(!y||y.length<3)return a;var x=null;return y[3]&&(x=y[3].match(/\s*at\s*(.+?)\s*\((\S*)\s*:(\d*)\s*:(\d*)\)/)),!x||x.length<=4?(y[2].indexOf("log@")===0?a.methodName=y[3].substr(0,y[3].indexOf("@")):a.methodName=y[2].substr(0,y[2].indexOf("@")),a):(a.methodName=x[1],a.fileLocation=x[2],a.line=x[3],a.column=x[4],a)}function o(){var a=arguments[0],f=arguments[1],y=Array.prototype.slice.call(arguments,2);if(!(g[f]<a.level))for(var x=!(a.options.disableCallerInfo||w.disableCallerInfo)&&E(),S=p.concat(a.transports),U=0;U<S.length;U++){var W=S[U],K=W[f];if(K&&typeof K=="function"){var B=[];B.push(new Date().toISOString()),a.id&&B.push("["+a.id+"]"),x&&x.methodName.length>1&&B.push("<"+x.methodName+">: ");var r=B.concat(y);K.bind(W).apply(W,r)}}}function d(a,f,y,x){this.id=f,this.options=x||{},this.transports=y,this.transports||(this.transports=[]),this.level=g[a];for(var S=Object.keys(g),U=0;U<S.length;U++)this[S[U]]=o.bind(null,this,S[U])}d.setGlobalOptions=function(a){w=a||{}},d.prototype.setLevel=function(a){this.level=g[a]},h.exports=d,d.levels={TRACE:"trace",DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"}},860:(h,g,p)=>{var w=p(7),E=p(369),o={},d=[],a=w.levels.TRACE;h.exports={addGlobalTransport:function(f){w.addGlobalTransport(f)},removeGlobalTransport:function(f){w.removeGlobalTransport(f)},setGlobalOptions:function(f){w.setGlobalOptions(f)},getLogger:function(f,y,x){var S=new w(a,f,y,x);return f?(o[f]=o[f]||[],o[f].push(S)):d.push(S),S},setLogLevelById:function(f,y){for(var x=y?o[y]||[]:d,S=0;S<x.length;S++)x[S].setLevel(f)},setLogLevel:function(f){a=f;for(var y=0;y<d.length;y++)d[y].setLevel(f);for(var x in o){var S=o[x]||[];for(y=0;y<S.length;y++)S[y].setLevel(f)}},levels:w.levels,LogCollector:E}},620:h=>{var g,p=typeof Reflect=="object"?Reflect:null,w=p&&typeof p.apply=="function"?p.apply:function(r,c,l){return Function.prototype.apply.call(r,c,l)};g=p&&typeof p.ownKeys=="function"?p.ownKeys:Object.getOwnPropertySymbols?function(r){return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r))}:function(r){return Object.getOwnPropertyNames(r)};var E=Number.isNaN||function(r){return r!=r};function o(){o.init.call(this)}h.exports=o,h.exports.once=function(r,c){return new Promise(function(l,v){function b(L){r.removeListener(c,_),v(L)}function _(){typeof r.removeListener=="function"&&r.removeListener("error",b),l([].slice.call(arguments))}B(r,c,_,{once:!0}),c!=="error"&&function(L,R,P){typeof L.on=="function"&&B(L,"error",R,{once:!0})}(r,b)})},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var d=10;function a(r){if(typeof r!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}function f(r){return r._maxListeners===void 0?o.defaultMaxListeners:r._maxListeners}function y(r,c,l,v){var b,_,L,R;if(a(l),(_=r._events)===void 0?(_=r._events=Object.create(null),r._eventsCount=0):(_.newListener!==void 0&&(r.emit("newListener",c,l.listener?l.listener:l),_=r._events),L=_[c]),L===void 0)L=_[c]=l,++r._eventsCount;else if(typeof L=="function"?L=_[c]=v?[l,L]:[L,l]:v?L.unshift(l):L.push(l),(b=f(r))>0&&L.length>b&&!L.warned){L.warned=!0;var P=new Error("Possible EventEmitter memory leak detected. "+L.length+" "+String(c)+" listeners added. Use emitter.setMaxListeners() to increase limit");P.name="MaxListenersExceededWarning",P.emitter=r,P.type=c,P.count=L.length,R=P,console&&console.warn&&console.warn(R)}return r}function x(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function S(r,c,l){var v={fired:!1,wrapFn:void 0,target:r,type:c,listener:l},b=x.bind(v);return b.listener=l,v.wrapFn=b,b}function U(r,c,l){var v=r._events;if(v===void 0)return[];var b=v[c];return b===void 0?[]:typeof b=="function"?l?[b.listener||b]:[b]:l?function(_){for(var L=new Array(_.length),R=0;R<L.length;++R)L[R]=_[R].listener||_[R];return L}(b):K(b,b.length)}function W(r){var c=this._events;if(c!==void 0){var l=c[r];if(typeof l=="function")return 1;if(l!==void 0)return l.length}return 0}function K(r,c){for(var l=new Array(c),v=0;v<c;++v)l[v]=r[v];return l}function B(r,c,l,v){if(typeof r.on=="function")v.once?r.once(c,l):r.on(c,l);else{if(typeof r.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof r);r.addEventListener(c,function b(_){v.once&&r.removeEventListener(c,b),l(_)})}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return d},set:function(r){if(typeof r!="number"||r<0||E(r))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");d=r}}),o.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(r){if(typeof r!="number"||r<0||E(r))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+r+".");return this._maxListeners=r,this},o.prototype.getMaxListeners=function(){return f(this)},o.prototype.emit=function(r){for(var c=[],l=1;l<arguments.length;l++)c.push(arguments[l]);var v=r==="error",b=this._events;if(b!==void 0)v=v&&b.error===void 0;else if(!v)return!1;if(v){var _;if(c.length>0&&(_=c[0]),_ instanceof Error)throw _;var L=new Error("Unhandled error."+(_?" ("+_.message+")":""));throw L.context=_,L}var R=b[r];if(R===void 0)return!1;if(typeof R=="function")w(R,this,c);else{var P=R.length,Y=K(R,P);for(l=0;l<P;++l)w(Y[l],this,c)}return!0},o.prototype.addListener=function(r,c){return y(this,r,c,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(r,c){return y(this,r,c,!0)},o.prototype.once=function(r,c){return a(c),this.on(r,S(this,r,c)),this},o.prototype.prependOnceListener=function(r,c){return a(c),this.prependListener(r,S(this,r,c)),this},o.prototype.removeListener=function(r,c){var l,v,b,_,L;if(a(c),(v=this._events)===void 0)return this;if((l=v[r])===void 0)return this;if(l===c||l.listener===c)--this._eventsCount==0?this._events=Object.create(null):(delete v[r],v.removeListener&&this.emit("removeListener",r,l.listener||c));else if(typeof l!="function"){for(b=-1,_=l.length-1;_>=0;_--)if(l[_]===c||l[_].listener===c){L=l[_].listener,b=_;break}if(b<0)return this;b===0?l.shift():function(R,P){for(;P+1<R.length;P++)R[P]=R[P+1];R.pop()}(l,b),l.length===1&&(v[r]=l[0]),v.removeListener!==void 0&&this.emit("removeListener",r,L||c)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(r){var c,l,v;if((l=this._events)===void 0)return this;if(l.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):l[r]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete l[r]),this;if(arguments.length===0){var b,_=Object.keys(l);for(v=0;v<_.length;++v)(b=_[v])!=="removeListener"&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(c=l[r])=="function")this.removeListener(r,c);else if(c!==void 0)for(v=c.length-1;v>=0;v--)this.removeListener(r,c[v]);return this},o.prototype.listeners=function(r){return U(this,r,!0)},o.prototype.rawListeners=function(r){return U(this,r,!1)},o.listenerCount=function(r,c){return typeof r.listenerCount=="function"?r.listenerCount(c):W.call(r,c)},o.prototype.listenerCount=W,o.prototype.eventNames=function(){return this._eventsCount>0?g(this._events):[]}}},k={};function O(h){var g=k[h];if(g!==void 0)return g.exports;var p=k[h]={exports:{}};return T[h](p,p.exports,O),p.exports}return O.n=h=>{var g=h&&h.__esModule?()=>h.default:()=>h;return O.d(g,{a:g}),g},O.d=(h,g)=>{for(var p in g)O.o(g,p)&&!O.o(h,p)&&Object.defineProperty(h,p,{enumerable:!0,get:g[p]})},O.o=(h,g)=>Object.prototype.hasOwnProperty.call(h,g),O(872)})()});function Te(T){let k,O,h,g,p,w,E;return{c(){k=ee("div"),O=ee("div"),h=Ee(),g=ee("img"),this.h()},l(o){k=te(o,"DIV",{class:!0});var d=ae(k);O=te(d,"DIV",{id:!0,class:!0}),ae(O).forEach(ne),h=Ce(d),g=te(d,"IMG",{alt:!0,class:!0}),d.forEach(ne),this.h()},h(){H(O,"id","meet"),H(O,"class","w-full h-[95vh] md:h-[670px] peer"),H(g,"alt","hangup button"),H(g,"class",p="bg-gray-600 p-2 absolute brightness-50 "+(!T[0]&&"opacity-0")+" "+(T[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500"),H(k,"class","relative md:-translate-y-10 -translate-y-32 ")},m(o,d){Oe(o,k,d),re(k,O),re(k,h),re(k,g),w||(E=[ce(g,"click",T[2]),ce(g,"keydown",T[2])],w=!0)},p(o,[d]){d&3&&p!==(p="bg-gray-600 p-2 absolute brightness-50 "+(!o[0]&&"opacity-0")+" "+(o[1]?"top-5 right-5 ":"bottom-5 right-10 ")+" flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0 hover:bg-red-500")&&H(g,"class",p)},i:se,o:se,d(o){o&&ne(k),w=!1,xe(E)}}}let Ve="meet.jit.si";function qe(T,k,O){let h;pe(T,De,o=>O(1,h=o));async function g(){await p.dispose(),Ae("/")}let p,w,E={roomName:"ThinkSolve12522",configOverwrite:{hideConferenceTimer:!0,hideConferenceSubject:!0,hideParticipantsStats:!0,disablePolls:!0,disableSelfView:!1,disabledSounds:["KNOCKING_PARTICIPANT_SOUND"],disableDeepLinking:!0,disableRemoteMute:!0,notifications:"lobby.notificationTitle",startWithAudioMuted:!0,startWithVideoMuted:!0,remoteVideoMenu:{disableKick:!0,disablePrivateChat:!0}},interfaceConfigOverwrite:{DEFAULT_BACKGROUND:"#130e21",SHOW_CHROME_EXTENSION_BANNER:!1,SETTINGS_SECTIONS:["devices"],TOOLBAR_BUTTONS:["desktop","microphone","camera","fullscreen","chat","fodeviceselection","etherpad"]}};return ge(()=>{E.parentNode=document.querySelector("#meet");try{p=new JitsiMeetExternalAPI(Ve,E),p.addEventListener("participantRoleChanged",function(o){O(0,w=[...p.getParticipantsInfo()])})}catch(o){console.log("onMount for JitsiMeetExternalAPI broken",o)}}),[w,h,g]}class $e extends de{constructor(k){super(),ue(this,k,qe,Te,he,{})}}function Ue(T){let k,O;return k=new $e({}),{c(){Se(k.$$.fragment)},l(h){Re(k.$$.fragment,h)},m(h,g){Ie(k,h,g),O=!0},p:se,i(h){O||(je(k.$$.fragment,h),O=!0)},o(h){Ne(k.$$.fragment,h),O=!1},d(h){Pe(k,h)}}}function Fe(T,k,O){let h;return pe(T,ie,g=>O(0,h=g)),ge(()=>{le(ie,h=!0,h),window.document.body.classList.add("dark-mode")}),Me(()=>{le(ie,h=!1,h),window.document.body.classList.remove("dark-mode")}),[]}class Ke extends de{constructor(k){super(),ue(this,k,Fe,Ue,he,{})}}export{Ke as default};