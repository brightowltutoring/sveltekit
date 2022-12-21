import{c as ne,a as re,e as ee,o as pe,v as ge,h as me}from"../../../chunks/index.js";import{l as fe,i as te}from"../../../chunks/store.js";(function(G,F){typeof exports=="object"&&typeof module=="object"?module.exports=F():typeof define=="function"&&define.amd?define([],F):typeof exports=="object"?exports.JitsiMeetExternalAPI=F():G.JitsiMeetExternalAPI=F()})(self,function(){return(()=>{var G={820:(L,v,p)=>{p.d(v,{default:()=>ie});var w=p(620),E=p.n(w);class l extends w{constructor(){var e,t;super(...arguments),t={},(e="_storage")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}clear(){this._storage={}}get length(){return Object.keys(this._storage).length}getItem(e){return this._storage[e]}setItem(e,t){this._storage[e]=t}removeItem(e){delete this._storage[e]}key(e){const t=Object.keys(this._storage);if(!(t.length<=e))return t[e]}serialize(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(e.length===0)return JSON.stringify(this._storage);const t={...this._storage};return e.forEach(n=>{delete t[n]}),JSON.stringify(t)}}const u=new class extends w{constructor(){super();try{this._storage=window.localStorage,this._localStorageDisabled=!1}catch{}this._storage||(console.warn("Local storage is disabled."),this._storage=new l,this._localStorageDisabled=!0)}isLocalStorageDisabled(){return this._localStorageDisabled}clear(){this._storage.clear(),this.emit("changed")}get length(){return this._storage.length}getItem(i){return this._storage.getItem(i)}setItem(i,e){let t=arguments.length>2&&arguments[2]!==void 0&&arguments[2];this._storage.setItem(i,e),t||this.emit("changed")}removeItem(i){this._storage.removeItem(i),this.emit("changed")}key(i){return this._storage.key(i)}serialize(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(this.isLocalStorageDisabled())return this._storage.serialize(i);const e=this._storage.length,t={};for(let n=0;n<e;n++){const s=this._storage.key(n);i.includes(s)||(t[s]=this._storage.getItem(s))}return JSON.stringify(t)}};var o=p(571);const g=["__proto__","constructor","prototype"];function f(i){const e=new RegExp("^([a-z][a-z0-9\\.\\+-]*:)+","gi"),t=e.exec(i);if(t){let n=t[t.length-1].toLowerCase();n!=="http:"&&n!=="https:"&&(n="https:"),(i=i.substring(e.lastIndex)).startsWith("//")&&(i=n+i)}return i}function x(i={}){const e=[];for(const t in i)try{e.push(`${t}=${encodeURIComponent(JSON.stringify(i[t]))}`)}catch(n){console.warn(`Error encoding ${t}: ${n}`)}return e}function C(i){const e={toString:V};let t,n,s;if(i=i.replace(/\s/g,""),t=new RegExp("^([a-z][a-z0-9\\.\\+-]*:)","gi"),n=t.exec(i),n&&(e.protocol=n[1].toLowerCase(),i=i.substring(t.lastIndex)),t=new RegExp("^(//[^/?#]+)","gi"),n=t.exec(i),n){let d=n[1].substring(2);i=i.substring(t.lastIndex);const h=d.indexOf("@");h!==-1&&(d=d.substring(h+1)),e.host=d;const j=d.lastIndexOf(":");j!==-1&&(e.port=d.substring(j+1),d=d.substring(0,j)),e.hostname=d}if(t=new RegExp("^([^?#]*)","gi"),n=t.exec(i),n&&(s=n[1],i=i.substring(t.lastIndex)),s?s.startsWith("/")||(s=`/${s}`):s="/",e.pathname=s,i.startsWith("?")){let d=i.indexOf("#",1);d===-1&&(d=i.length),e.search=i.substring(0,d),i=i.substring(d)}else e.search="";return e.hash=i.startsWith("#")?i:"",e}function V(i){const{hash:e,host:t,pathname:n,protocol:s,search:d}=i||this;let h="";return s&&(h+=s),t&&(h+=`//${t}`),h+=n||"/",d&&(h+=d),e&&(h+=e),h}function W(i){let e;e=i.serverURL&&i.room?new URL(i.room,i.serverURL).toString():i.room?i.room:i.url||"";const t=C(f(e));if(!t.protocol){let R=i.protocol||i.scheme;R&&(R.endsWith(":")||(R+=":"),t.protocol=R)}let{pathname:n}=t;if(!t.host){const R=i.domain||i.host||i.hostname;if(R){const{host:$,hostname:D,pathname:z,port:k}=C(f(`org.jitsi.meet://${R}`));$&&(t.host=$,t.hostname=D,t.port=k),n==="/"&&z!=="/"&&(n=z)}}const s=i.roomName||i.room;!s||!t.pathname.endsWith("/")&&t.pathname.endsWith(`/${s}`)||(n.endsWith("/")||(n+="/"),n+=s),t.pathname=n;const{jwt:d,lang:h,release:j}=i,N=new URLSearchParams(t.search);d&&N.set("jwt",d);const{defaultLanguage:M}=i.configOverwrite||{};(h||M)&&N.set("lang",h||M),j&&N.set("release",j);const P=N.toString();P&&(t.search=`?${P}`);let{hash:A}=t;for(const R of["config","interfaceConfig","devices","userInfo","appData"]){const $=x(i[`${R}Overwrite`]||i[R]||i[`${R}Override`]);if($.length){let D=`${R}.${$.join(`&${R}.`)}`;A.length?D=`&${D}`:A="#",A+=D}}return t.hash=A,t.toString()||void 0}const B={window:window.opener||window.parent},U="message";class r{constructor(){let{postisOptions:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.postis=function(t){var n,s=t.scope,d=t.window,h=t.windowForEventListening||window,j=t.allowedOrigin,N={},M=[],P={},A=!1,R="__ready__",$=function(k){var S;try{S=JSON.parse(k.data)}catch{return}if((!j||k.origin===j)&&S&&S.postis&&S.scope===s){var J=N[S.method];if(J)for(var K=0;K<J.length;K++)J[K].call(null,S.params);else P[S.method]=P[S.method]||[],P[S.method].push(S.params)}};h.addEventListener("message",$,!1);var D={listen:function(k,S){N[k]=N[k]||[],N[k].push(S);var J=P[k];if(J)for(var K=N[k],q=0;q<K.length;q++)for(var H=0;H<J.length;H++)K[q].call(null,J[H]);delete P[k]},send:function(k){var S=k.method;(A||k.method===R)&&d&&typeof d.postMessage=="function"?d.postMessage(JSON.stringify({postis:!0,scope:s,method:S,params:k.params}),"*"):M.push(k)},ready:function(k){A?k():setTimeout(function(){D.ready(k)},50)},destroy:function(k){clearInterval(n),A=!1,h&&typeof h.removeEventListener=="function"&&h.removeEventListener("message",$),k&&k()}},z=+new Date+Math.random()+"";return n=setInterval(function(){D.send({method:R,params:z})},50),D.listen(R,function(k){if(k===z){clearInterval(n),A=!0;for(var S=0;S<M.length;S++)D.send(M[S]);M=[]}else D.send({method:R,params:k})}),D}({...B,...e}),this._receiveCallback=()=>{},this.postis.listen(U,t=>this._receiveCallback(t))}dispose(){this.postis.destroy()}send(e){this.postis.send({method:U,params:e})}setReceiveCallback(e){this._receiveCallback=e}}const a="request",c="response";class m{constructor(){let{backend:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._listeners=new Map,this._requestID=0,this._responseHandlers=new Map,this._unprocessedMessages=new Set,this.addListener=this.on,e&&this.setBackend(e)}_disposeBackend(){this._backend&&(this._backend.dispose(),this._backend=null)}_onMessageReceived(e){if(e.type===c){const t=this._responseHandlers.get(e.id);t&&(t(e),this._responseHandlers.delete(e.id))}else e.type===a?this.emit("request",e.data,(t,n)=>{this._backend.send({type:c,error:n,id:e.id,result:t})}):this.emit("event",e.data)}dispose(){this._responseHandlers.clear(),this._unprocessedMessages.clear(),this.removeAllListeners(),this._disposeBackend()}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];const d=this._listeners.get(e);let h=!1;return d&&d.size&&d.forEach(j=>{h=j(...n)||h}),h||this._unprocessedMessages.add(n),h}on(e,t){let n=this._listeners.get(e);return n||(n=new Set,this._listeners.set(e,n)),n.add(t),this._unprocessedMessages.forEach(s=>{t(...s)&&this._unprocessedMessages.delete(s)}),this}removeAllListeners(e){return e?this._listeners.delete(e):this._listeners.clear(),this}removeListener(e,t){const n=this._listeners.get(e);return n&&n.delete(t),this}sendEvent(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._backend&&this._backend.send({type:"event",data:e})}sendRequest(e){if(!this._backend)return Promise.reject(new Error("No transport backend defined!"));this._requestID++;const t=this._requestID;return new Promise((n,s)=>{this._responseHandlers.set(t,d=>{let{error:h,result:j}=d;j!==void 0?n(j):s(h!==void 0?h:new Error("Unexpected response format!"))}),this._backend.send({type:a,data:e,id:t})})}setBackend(e){this._disposeBackend(),this._backend=e,this._backend.setReceiveCallback(this._onMessageReceived.bind(this))}}(function(i,e=!1,t="hash"){typeof i=="string"&&(i=new URL(i));const n=t==="search"?i.search:i.hash,s={},d=(n==null?void 0:n.substr(1).split("&"))||[];if(t==="hash"&&d.length===1){const h=d[0];if(h.startsWith("/")&&h.split("&").length===1)return s}return d.forEach(h=>{const j=h.split("="),N=j[0];if(!N||N.split(".").some(P=>g.includes(P)))return;let M;try{if(M=j[1],!e){const P=decodeURIComponent(M).replace(/\\&/,"&");M=P==="undefined"?void 0:o.parse(P)}}catch(P){return void function(A,R=""){var $;console.error(R,A),($=window.onerror)===null||$===void 0||$.call(window,R,void 0,void 0,void 0,A)}(P,`Failed to parse URL parameter value: ${String(M)}`)}s[N]=M}),s})(window.location).jitsi_meet_external_api_id,(window.JitsiMeetJS||(window.JitsiMeetJS={}),window.JitsiMeetJS.app||(window.JitsiMeetJS.app={}),window.JitsiMeetJS.app).setExternalTransportBackend=i=>(void 0).setBackend(i);var _=p(860);const y=p.n(_)().getLogger("modules/API/external/functions.js");function b(i,e){return i.sendRequest({type:"devices",name:"setDevice",device:e})}const O=["css/all.css","libs/alwaysontop.min.js"],I={addBreakoutRoom:"add-breakout-room",answerKnockingParticipant:"answer-knocking-participant",approveVideo:"approve-video",askToUnmute:"ask-to-unmute",autoAssignToBreakoutRooms:"auto-assign-to-breakout-rooms",avatarUrl:"avatar-url",cancelPrivateChat:"cancel-private-chat",closeBreakoutRoom:"close-breakout-room",displayName:"display-name",e2eeKey:"e2ee-key",email:"email",grantModerator:"grant-moderator",hangup:"video-hangup",hideNotification:"hide-notification",initiatePrivateChat:"initiate-private-chat",joinBreakoutRoom:"join-breakout-room",localSubject:"local-subject",kickParticipant:"kick-participant",muteEveryone:"mute-everyone",overwriteConfig:"overwrite-config",overwriteNames:"overwrite-names",password:"password",pinParticipant:"pin-participant",rejectParticipant:"reject-participant",removeBreakoutRoom:"remove-breakout-room",resizeFilmStrip:"resize-film-strip",resizeLargeVideo:"resize-large-video",sendChatMessage:"send-chat-message",sendEndpointTextMessage:"send-endpoint-text-message",sendParticipantToRoom:"send-participant-to-room",sendTones:"send-tones",setFollowMe:"set-follow-me",setLargeVideoParticipant:"set-large-video-participant",setMediaEncryptionKey:"set-media-encryption-key",setNoiseSuppressionEnabled:"set-noise-suppression-enabled",setParticipantVolume:"set-participant-volume",setSubtitles:"set-subtitles",setTileView:"set-tile-view",setVideoQuality:"set-video-quality",showNotification:"show-notification",startRecording:"start-recording",startShareVideo:"start-share-video",stopRecording:"stop-recording",stopShareVideo:"stop-share-video",subject:"subject",submitFeedback:"submit-feedback",toggleAudio:"toggle-audio",toggleCamera:"toggle-camera",toggleCameraMirror:"toggle-camera-mirror",toggleChat:"toggle-chat",toggleE2EE:"toggle-e2ee",toggleFilmStrip:"toggle-film-strip",toggleLobby:"toggle-lobby",toggleModeration:"toggle-moderation",toggleNoiseSuppression:"toggle-noise-suppression",toggleParticipantsPane:"toggle-participants-pane",toggleRaiseHand:"toggle-raise-hand",toggleShareScreen:"toggle-share-screen",toggleSubtitles:"toggle-subtitles",toggleTileView:"toggle-tile-view",toggleVirtualBackgroundDialog:"toggle-virtual-background",toggleVideo:"toggle-video"},X={"avatar-changed":"avatarChanged","audio-availability-changed":"audioAvailabilityChanged","audio-mute-status-changed":"audioMuteStatusChanged","audio-or-video-sharing-toggled":"audioOrVideoSharingToggled","breakout-rooms-updated":"breakoutRoomsUpdated","browser-support":"browserSupport","camera-error":"cameraError","chat-updated":"chatUpdated","content-sharing-participants-changed":"contentSharingParticipantsChanged","data-channel-opened":"dataChannelOpened","device-list-changed":"deviceListChanged","display-name-change":"displayNameChange","email-change":"emailChange","error-occurred":"errorOccurred","endpoint-text-message-received":"endpointTextMessageReceived","face-landmark-detected":"faceLandmarkDetected","feedback-submitted":"feedbackSubmitted","feedback-prompt-displayed":"feedbackPromptDisplayed","filmstrip-display-changed":"filmstripDisplayChanged","iframe-dock-state-changed":"iframeDockStateChanged","incoming-message":"incomingMessage","knocking-participant":"knockingParticipant",log:"log","mic-error":"micError","moderation-participant-approved":"moderationParticipantApproved","moderation-participant-rejected":"moderationParticipantRejected","moderation-status-changed":"moderationStatusChanged","mouse-enter":"mouseEnter","mouse-leave":"mouseLeave","mouse-move":"mouseMove","outgoing-message":"outgoingMessage","participant-joined":"participantJoined","participant-kicked-out":"participantKickedOut","participant-left":"participantLeft","participant-role-changed":"participantRoleChanged","participants-pane-toggled":"participantsPaneToggled","password-required":"passwordRequired","prejoin-screen-loaded":"prejoinScreenLoaded","proxy-connection-event":"proxyConnectionEvent","raise-hand-updated":"raiseHandUpdated","recording-link-available":"recordingLinkAvailable","recording-status-changed":"recordingStatusChanged","video-ready-to-close":"readyToClose","video-conference-joined":"videoConferenceJoined","video-conference-left":"videoConferenceLeft","video-availability-changed":"videoAvailabilityChanged","video-mute-status-changed":"videoMuteStatusChanged","video-quality-changed":"videoQualityChanged","screen-sharing-status-changed":"screenSharingStatusChanged","dominant-speaker-changed":"dominantSpeakerChanged","subject-change":"subjectChange","suspend-detected":"suspendDetected","tile-view-changed":"tileViewChanged","toolbar-button-clicked":"toolbarButtonClicked"};let Q=0;function Y(i,e){i._numberOfParticipants+=e}function Z(i){let e;return typeof i=="string"&&String(i).match(/([0-9]*\.?[0-9]+)(em|pt|px|%)$/)!==null?e=i:typeof i=="number"&&(e=`${i}px`),e}class ie extends E(){constructor(e){super();for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];const{roomName:d="",width:h="100%",height:j="100%",parentNode:N=document.body,configOverwrite:M={},interfaceConfigOverwrite:P={},jwt:A,lang:R,onload:$,invitees:D,devices:z,userInfo:k,e2eeKey:S,release:J}=function(q){if(!q.length)return{};switch(typeof q[0]){case"string":case"undefined":{const[H,se,oe,ae,ce,le,de,ue,he]=q;return{roomName:H,width:se,height:oe,parentNode:ae,configOverwrite:ce,interfaceConfigOverwrite:le,jwt:de,onload:ue,lang:he}}case"object":return q[0];default:throw new Error("Can't parse the arguments!")}}(n),K=u.getItem("jitsiLocalStorage");this._parentNode=N,this._url=function(q){return W({...arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},url:`https://${q}/#jitsi_meet_external_api_id=${Q}`})}(e,{configOverwrite:M,interfaceConfigOverwrite:P,jwt:A,lang:R,roomName:d,devices:z,userInfo:k,appData:{localStorageContent:K},release:J}),this._createIFrame(j,h,$),this._transport=new m({backend:new r({postisOptions:{allowedOrigin:new URL(this._url).origin,scope:`jitsi_meet_external_api_${Q}`,window:this._frame.contentWindow}})}),Array.isArray(D)&&D.length>0&&this.invite(D),this._tmpE2EEKey=S,this._isLargeVideoVisible=!1,this._isPrejoinVideoVisible=!1,this._numberOfParticipants=0,this._participants={},this._myUserID=void 0,this._onStageParticipant=void 0,this._setupListeners(),Q++}_createIFrame(e,t,n){const s=`jitsiConferenceFrame${Q}`;this._frame=document.createElement("iframe"),this._frame.allow="camera; microphone; display-capture; autoplay; clipboard-write",this._frame.src=this._url,this._frame.name=s,this._frame.id=s,this._setSize(e,t),this._frame.setAttribute("allowFullScreen","true"),this._frame.style.border=0,n&&(this._frame.onload=n),this._frame=this._parentNode.appendChild(this._frame)}_getAlwaysOnTopResources(){const e=this._frame.contentWindow,t=e.document;let n="";const s=t.querySelector("base");if(s&&s.href)n=s.href;else{const{protocol:d,host:h}=e.location;n=`${d}//${h}`}return O.map(d=>new URL(d,n).href)}_getFormattedDisplayName(e){const{formattedDisplayName:t}=this._participants[e]||{};return t}_getOnStageParticipant(){return this._onStageParticipant}_getLargeVideo(){const e=this.getIFrame();if(this._isLargeVideoVisible&&e&&e.contentWindow&&e.contentWindow.document)return e.contentWindow.document.getElementById("largeVideo")}_getPrejoinVideo(){const e=this.getIFrame();if(this._isPrejoinVideoVisible&&e&&e.contentWindow&&e.contentWindow.document)return e.contentWindow.document.getElementById("prejoinVideo")}_getParticipantVideo(e){const t=this.getIFrame();if(t&&t.contentWindow&&t.contentWindow.document)return e===void 0||e===this._myUserID?t.contentWindow.document.getElementById("localVideo_container"):t.contentWindow.document.querySelector(`#participant_${e} video`)}_setSize(e,t){const n=Z(e),s=Z(t);n!==void 0&&(this._height=e,this._frame.style.height=n),s!==void 0&&(this._width=t,this._frame.style.width=s)}_setupListeners(){this._transport.on("event",e=>{let{name:t,...n}=e;const s=n.id;switch(t){case"video-conference-joined":this._tmpE2EEKey!==void 0&&(this.executeCommand(I.e2eeKey,this._tmpE2EEKey),this._tmpE2EEKey=void 0),this._myUserID=s,this._participants[s]={email:n.email,avatarURL:n.avatarURL};case"participant-joined":this._participants[s]=this._participants[s]||{},this._participants[s].displayName=n.displayName,this._participants[s].formattedDisplayName=n.formattedDisplayName,Y(this,1);break;case"participant-left":Y(this,-1),delete this._participants[s];break;case"display-name-change":{const h=this._participants[s];h&&(h.displayName=n.displayname,h.formattedDisplayName=n.formattedDisplayName);break}case"email-change":{const h=this._participants[s];h&&(h.email=n.email);break}case"avatar-changed":{const h=this._participants[s];h&&(h.avatarURL=n.avatarURL);break}case"on-stage-participant-changed":this._onStageParticipant=s,this.emit("largeVideoChanged");break;case"large-video-visibility-changed":this._isLargeVideoVisible=n.isVisible,this.emit("largeVideoChanged");break;case"prejoin-screen-loaded":this._participants[s]={displayName:n.displayName,formattedDisplayName:n.formattedDisplayName};break;case"on-prejoin-video-changed":this._isPrejoinVideoVisible=n.isVisible,this.emit("prejoinVideoChanged");break;case"video-conference-left":Y(this,-1),delete this._participants[this._myUserID];break;case"video-quality-changed":this._videoQuality=n.videoQuality;break;case"breakout-rooms-updated":this.updateNumberOfParticipants(n.rooms);break;case"local-storage-changed":return u.setItem("jitsiLocalStorage",n.localStorageContent),!0}const d=X[t];return!!d&&(this.emit(d,n),!0)})}updateNumberOfParticipants(e){if(!e||!Object.keys(e).length)return;const t=Object.keys(e).reduce((n,s)=>{var d;return(d=e[s])!==null&&d!==void 0&&d.participants?Object.keys(e[s].participants).length+n:n},0);this._numberOfParticipants=t}async getRoomsInfo(){return this._transport.sendRequest({name:"rooms-info"})}addEventListener(e,t){this.on(e,t)}addEventListeners(e){for(const t in e)this.addEventListener(t,e[t])}captureLargeVideoScreenshot(){return this._transport.sendRequest({name:"capture-largevideo-screenshot"})}dispose(){this.emit("_willDispose"),this._transport.dispose(),this.removeAllListeners(),this._frame&&this._frame.parentNode&&this._frame.parentNode.removeChild(this._frame)}executeCommand(e){if(e in I){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];this._transport.sendEvent({data:n,name:I[e]})}else console.error("Not supported command name.")}executeCommands(e){for(const t in e)this.executeCommand(t,e[t])}getAvailableDevices(){return function(e){return e.sendRequest({type:"devices",name:"getAvailableDevices"}).catch(t=>(y.error(t),{}))}(this._transport)}getContentSharingParticipants(){return this._transport.sendRequest({name:"get-content-sharing-participants"})}getCurrentDevices(){return function(e){return e.sendRequest({type:"devices",name:"getCurrentDevices"}).catch(t=>(y.error(t),{}))}(this._transport)}getCustomAvatarBackgrounds(){return this._transport.sendRequest({name:"get-custom-avatar-backgrounds"})}getLivestreamUrl(){return this._transport.sendRequest({name:"get-livestream-url"})}getParticipantsInfo(){const e=Object.keys(this._participants),t=Object.values(this._participants);return t.forEach((n,s)=>{n.participantId=e[s]}),t}getVideoQuality(){return this._videoQuality}isAudioAvailable(){return this._transport.sendRequest({name:"is-audio-available"})}isDeviceChangeAvailable(e){return function(t,n){return t.sendRequest({deviceType:n,type:"devices",name:"isDeviceChangeAvailable"})}(this._transport,e)}isDeviceListAvailable(){return function(e){return e.sendRequest({type:"devices",name:"isDeviceListAvailable"})}(this._transport)}isMultipleAudioInputSupported(){return function(e){return e.sendRequest({type:"devices",name:"isMultipleAudioInputSupported"})}(this._transport)}invite(e){return Array.isArray(e)&&e.length!==0?this._transport.sendRequest({name:"invite",invitees:e}):Promise.reject(new TypeError("Invalid Argument"))}isAudioMuted(){return this._transport.sendRequest({name:"is-audio-muted"})}isAudioDisabled(){return this._transport.sendRequest({name:"is-audio-disabled"})}isModerationOn(e){return this._transport.sendRequest({name:"is-moderation-on",mediaType:e})}isParticipantForceMuted(e,t){return this._transport.sendRequest({name:"is-participant-force-muted",participantId:e,mediaType:t})}isParticipantsPaneOpen(){return this._transport.sendRequest({name:"is-participants-pane-open"})}isSharingScreen(){return this._transport.sendRequest({name:"is-sharing-screen"})}isStartSilent(){return this._transport.sendRequest({name:"is-start-silent"})}getAvatarURL(e){const{avatarURL:t}=this._participants[e]||{};return t}getDeploymentInfo(){return this._transport.sendRequest({name:"deployment-info"})}getDisplayName(e){const{displayName:t}=this._participants[e]||{};return t}getEmail(e){const{email:t}=this._participants[e]||{};return t}getIFrame(){return this._frame}getNumberOfParticipants(){return this._numberOfParticipants}isVideoAvailable(){return this._transport.sendRequest({name:"is-video-available"})}isVideoMuted(){return this._transport.sendRequest({name:"is-video-muted"})}listBreakoutRooms(){return this._transport.sendRequest({name:"list-breakout-rooms"})}pinParticipant(e){this.executeCommand("pinParticipant",e)}removeEventListener(e){this.removeAllListeners(e)}removeEventListeners(e){e.forEach(t=>this.removeEventListener(t))}resizeLargeVideo(e,t){e<=this._width&&t<=this._height&&this.executeCommand("resizeLargeVideo",e,t)}sendProxyConnectionEvent(e){this._transport.sendEvent({data:[e],name:"proxy-connection-event"})}setAudioInputDevice(e,t){return function(n,s,d){return b(n,{id:d,kind:"audioinput",label:s})}(this._transport,e,t)}setAudioOutputDevice(e,t){return function(n,s,d){return b(n,{id:d,kind:"audiooutput",label:s})}(this._transport,e,t)}setLargeVideoParticipant(e){this.executeCommand("setLargeVideoParticipant",e)}setVideoInputDevice(e,t){return function(n,s,d){return b(n,{id:d,kind:"videoinput",label:s})}(this._transport,e,t)}startRecording(e){this.executeCommand("startRecording",e)}stopRecording(e){this.executeCommand("stopRecording",e)}toggleE2EE(e){this.executeCommand("toggleE2EE",e)}async setMediaEncryptionKey(e){const{key:t,index:n}=e;if(t){const s=await crypto.subtle.exportKey("raw",t);this.executeCommand("setMediaEncryptionKey",JSON.stringify({exportedKey:Array.from(new Uint8Array(s)),index:n}))}else this.executeCommand("setMediaEncryptionKey",JSON.stringify({exportedKey:!1,index:n}))}}},872:(L,v,p)=>{L.exports=p(820).default},571:(L,v)=>{const p=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*\:/;v.parse=function(w){const E=typeof(arguments.length<=1?void 0:arguments[1])=="object"&&(arguments.length<=1?void 0:arguments[1]),l=(arguments.length<=1?0:arguments.length-1)>1||!E?arguments.length<=1?void 0:arguments[1]:void 0,u=(arguments.length<=1?0:arguments.length-1)>1&&(arguments.length<=2?void 0:arguments[2])||E||{},o=JSON.parse(w,l);return u.protoAction==="ignore"||o&&typeof o=="object"&&w.match(p)&&v.scan(o,u),o},v.scan=function(w){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=[w];for(;l.length;){const u=l;l=[];for(const o of u){if(Object.prototype.hasOwnProperty.call(o,"__proto__")){if(E.protoAction!=="remove")throw new SyntaxError("Object contains forbidden prototype property");delete o.__proto__}for(const g in o){const f=o[g];f&&typeof f=="object"&&l.push(o[g])}}}},v.safeParse=function(w,E){try{return v.parse(w,E)}catch{return null}}},369:(L,v,p)=>{var w=p(7);function E(l,u){this.logStorage=l,this.stringifyObjects=!(!u||!u.stringifyObjects)&&u.stringifyObjects,this.storeInterval=u&&u.storeInterval?u.storeInterval:3e4,this.maxEntryLength=u&&u.maxEntryLength?u.maxEntryLength:1e4,Object.keys(w.levels).forEach(function(o){this[w.levels[o]]=function(){this._log.apply(this,arguments)}.bind(this,o)}.bind(this)),this.storeLogsIntervalID=null,this.queue=[],this.totalLen=0,this.outputCache=[]}E.prototype.stringify=function(l){try{return JSON.stringify(l)}catch{return"[object with circular refs?]"}},E.prototype.formatLogMessage=function(l){for(var u="",o=1,g=arguments.length;o<g;o++){var f=arguments[o];!this.stringifyObjects&&l!==w.levels.ERROR||typeof f!="object"||(f=this.stringify(f)),u+=f,o!==g-1&&(u+=" ")}return u.length?u:null},E.prototype._log=function(){var l=arguments[1],u=this.formatLogMessage.apply(this,arguments);if(u){var o=this.queue[this.queue.length-1],g=o&&o.text;g===u?o.count+=1:(this.queue.push({text:u,timestamp:l,count:1}),this.totalLen+=u.length)}this.totalLen>=this.maxEntryLength&&this._flush(!0,!0)},E.prototype.start=function(){this._reschedulePublishInterval()},E.prototype._reschedulePublishInterval=function(){this.storeLogsIntervalID&&(window.clearTimeout(this.storeLogsIntervalID),this.storeLogsIntervalID=null),this.storeLogsIntervalID=window.setTimeout(this._flush.bind(this,!1,!0),this.storeInterval)},E.prototype.flush=function(){this._flush(!1,!0)},E.prototype._flush=function(l,u){this.totalLen>0&&(this.logStorage.isReady()||l)&&(this.logStorage.isReady()?(this.outputCache.length&&(this.outputCache.forEach(function(o){this.logStorage.storeLogs(o)}.bind(this)),this.outputCache=[]),this.logStorage.storeLogs(this.queue)):this.outputCache.push(this.queue),this.queue=[],this.totalLen=0),u&&this._reschedulePublishInterval()},E.prototype.stop=function(){this._flush(!1,!1)},L.exports=E},7:L=>{var v={trace:0,debug:1,info:2,log:3,warn:4,error:5};u.consoleTransport=console;var p=[u.consoleTransport];u.addGlobalTransport=function(o){p.indexOf(o)===-1&&p.push(o)},u.removeGlobalTransport=function(o){var g=p.indexOf(o);g!==-1&&p.splice(g,1)};var w={};function E(){var o={methodName:"",fileLocation:"",line:null,column:null},g=new Error,f=g.stack?g.stack.split(`
`):[];if(!f||f.length<3)return o;var x=null;return f[3]&&(x=f[3].match(/\s*at\s*(.+?)\s*\((\S*)\s*:(\d*)\s*:(\d*)\)/)),!x||x.length<=4?(f[2].indexOf("log@")===0?o.methodName=f[3].substr(0,f[3].indexOf("@")):o.methodName=f[2].substr(0,f[2].indexOf("@")),o):(o.methodName=x[1],o.fileLocation=x[2],o.line=x[3],o.column=x[4],o)}function l(){var o=arguments[0],g=arguments[1],f=Array.prototype.slice.call(arguments,2);if(!(v[g]<o.level))for(var x=!(o.options.disableCallerInfo||w.disableCallerInfo)&&E(),C=p.concat(o.transports),V=0;V<C.length;V++){var W=C[V],B=W[g];if(B&&typeof B=="function"){var U=[];U.push(new Date().toISOString()),o.id&&U.push("["+o.id+"]"),x&&x.methodName.length>1&&U.push("<"+x.methodName+">: ");var r=U.concat(f);B.bind(W).apply(W,r)}}}function u(o,g,f,x){this.id=g,this.options=x||{},this.transports=f,this.transports||(this.transports=[]),this.level=v[o];for(var C=Object.keys(v),V=0;V<C.length;V++)this[C[V]]=l.bind(null,this,C[V])}u.setGlobalOptions=function(o){w=o||{}},u.prototype.setLevel=function(o){this.level=v[o]},L.exports=u,u.levels={TRACE:"trace",DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"}},860:(L,v,p)=>{var w=p(7),E=p(369),l={},u=[],o=w.levels.TRACE;L.exports={addGlobalTransport:function(g){w.addGlobalTransport(g)},removeGlobalTransport:function(g){w.removeGlobalTransport(g)},setGlobalOptions:function(g){w.setGlobalOptions(g)},getLogger:function(g,f,x){var C=new w(o,g,f,x);return g?(l[g]=l[g]||[],l[g].push(C)):u.push(C),C},setLogLevelById:function(g,f){for(var x=f?l[f]||[]:u,C=0;C<x.length;C++)x[C].setLevel(g)},setLogLevel:function(g){o=g;for(var f=0;f<u.length;f++)u[f].setLevel(g);for(var x in l){var C=l[x]||[];for(f=0;f<C.length;f++)C[f].setLevel(g)}},levels:w.levels,LogCollector:E}},620:L=>{var v,p=typeof Reflect=="object"?Reflect:null,w=p&&typeof p.apply=="function"?p.apply:function(r,a,c){return Function.prototype.apply.call(r,a,c)};v=p&&typeof p.ownKeys=="function"?p.ownKeys:Object.getOwnPropertySymbols?function(r){return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r))}:function(r){return Object.getOwnPropertyNames(r)};var E=Number.isNaN||function(r){return r!=r};function l(){l.init.call(this)}L.exports=l,L.exports.once=function(r,a){return new Promise(function(c,m){function _(b){r.removeListener(a,y),m(b)}function y(){typeof r.removeListener=="function"&&r.removeListener("error",_),c([].slice.call(arguments))}U(r,a,y,{once:!0}),a!=="error"&&function(b,O,I){typeof b.on=="function"&&U(b,"error",O,{once:!0})}(r,_)})},l.EventEmitter=l,l.prototype._events=void 0,l.prototype._eventsCount=0,l.prototype._maxListeners=void 0;var u=10;function o(r){if(typeof r!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}function g(r){return r._maxListeners===void 0?l.defaultMaxListeners:r._maxListeners}function f(r,a,c,m){var _,y,b,O;if(o(c),(y=r._events)===void 0?(y=r._events=Object.create(null),r._eventsCount=0):(y.newListener!==void 0&&(r.emit("newListener",a,c.listener?c.listener:c),y=r._events),b=y[a]),b===void 0)b=y[a]=c,++r._eventsCount;else if(typeof b=="function"?b=y[a]=m?[c,b]:[b,c]:m?b.unshift(c):b.push(c),(_=g(r))>0&&b.length>_&&!b.warned){b.warned=!0;var I=new Error("Possible EventEmitter memory leak detected. "+b.length+" "+String(a)+" listeners added. Use emitter.setMaxListeners() to increase limit");I.name="MaxListenersExceededWarning",I.emitter=r,I.type=a,I.count=b.length,O=I,console&&console.warn&&console.warn(O)}return r}function x(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function C(r,a,c){var m={fired:!1,wrapFn:void 0,target:r,type:a,listener:c},_=x.bind(m);return _.listener=c,m.wrapFn=_,_}function V(r,a,c){var m=r._events;if(m===void 0)return[];var _=m[a];return _===void 0?[]:typeof _=="function"?c?[_.listener||_]:[_]:c?function(y){for(var b=new Array(y.length),O=0;O<b.length;++O)b[O]=y[O].listener||y[O];return b}(_):B(_,_.length)}function W(r){var a=this._events;if(a!==void 0){var c=a[r];if(typeof c=="function")return 1;if(c!==void 0)return c.length}return 0}function B(r,a){for(var c=new Array(a),m=0;m<a;++m)c[m]=r[m];return c}function U(r,a,c,m){if(typeof r.on=="function")m.once?r.once(a,c):r.on(a,c);else{if(typeof r.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof r);r.addEventListener(a,function _(y){m.once&&r.removeEventListener(a,_),c(y)})}}Object.defineProperty(l,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(r){if(typeof r!="number"||r<0||E(r))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");u=r}}),l.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},l.prototype.setMaxListeners=function(r){if(typeof r!="number"||r<0||E(r))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+r+".");return this._maxListeners=r,this},l.prototype.getMaxListeners=function(){return g(this)},l.prototype.emit=function(r){for(var a=[],c=1;c<arguments.length;c++)a.push(arguments[c]);var m=r==="error",_=this._events;if(_!==void 0)m=m&&_.error===void 0;else if(!m)return!1;if(m){var y;if(a.length>0&&(y=a[0]),y instanceof Error)throw y;var b=new Error("Unhandled error."+(y?" ("+y.message+")":""));throw b.context=y,b}var O=_[r];if(O===void 0)return!1;if(typeof O=="function")w(O,this,a);else{var I=O.length,X=B(O,I);for(c=0;c<I;++c)w(X[c],this,a)}return!0},l.prototype.addListener=function(r,a){return f(this,r,a,!1)},l.prototype.on=l.prototype.addListener,l.prototype.prependListener=function(r,a){return f(this,r,a,!0)},l.prototype.once=function(r,a){return o(a),this.on(r,C(this,r,a)),this},l.prototype.prependOnceListener=function(r,a){return o(a),this.prependListener(r,C(this,r,a)),this},l.prototype.removeListener=function(r,a){var c,m,_,y,b;if(o(a),(m=this._events)===void 0)return this;if((c=m[r])===void 0)return this;if(c===a||c.listener===a)--this._eventsCount==0?this._events=Object.create(null):(delete m[r],m.removeListener&&this.emit("removeListener",r,c.listener||a));else if(typeof c!="function"){for(_=-1,y=c.length-1;y>=0;y--)if(c[y]===a||c[y].listener===a){b=c[y].listener,_=y;break}if(_<0)return this;_===0?c.shift():function(O,I){for(;I+1<O.length;I++)O[I]=O[I+1];O.pop()}(c,_),c.length===1&&(m[r]=c[0]),m.removeListener!==void 0&&this.emit("removeListener",r,b||a)}return this},l.prototype.off=l.prototype.removeListener,l.prototype.removeAllListeners=function(r){var a,c,m;if((c=this._events)===void 0)return this;if(c.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):c[r]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete c[r]),this;if(arguments.length===0){var _,y=Object.keys(c);for(m=0;m<y.length;++m)(_=y[m])!=="removeListener"&&this.removeAllListeners(_);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(a=c[r])=="function")this.removeListener(r,a);else if(a!==void 0)for(m=a.length-1;m>=0;m--)this.removeListener(r,a[m]);return this},l.prototype.listeners=function(r){return V(this,r,!0)},l.prototype.rawListeners=function(r){return V(this,r,!1)},l.listenerCount=function(r,a){return typeof r.listenerCount=="function"?r.listenerCount(a):W.call(r,a)},l.prototype.listenerCount=W,l.prototype.eventNames=function(){return this._eventsCount>0?v(this._events):[]}}},F={};function T(L){var v=F[L];if(v!==void 0)return v.exports;var p=F[L]={exports:{}};return G[L](p,p.exports,T),p.exports}return T.n=L=>{var v=L&&L.__esModule?()=>L.default:()=>L;return T.d(v,{a:v}),v},T.d=(L,v)=>{for(var p in v)T.o(v,p)&&!T.o(L,p)&&Object.defineProperty(L,p,{enumerable:!0,get:v[p]})},T.o=(L,v)=>Object.prototype.hasOwnProperty.call(L,v),T(872)})()});const ve=ne((G,F,T,L)=>{let v,p;return p=re(fe,w=>v=w),p(),`

<main><div class="relative md:-translate-y-10 -translate-y-36"><div id="meet" class="w-full h-[82vh] md:h-[670px]"></div>

    <button><img alt="hangup button" class="${"absolute p-2 "+ee("opacity-0",!0)+" "+ee(v?"top-10 right-0":"bottom-5 right-10 ",!0)+" w-[50px] rounded-full content-[url('/phone.svg')] bg-[#2a1c44] active:bg-red-900 rotate-90 hover:scale-[1.3] hover:rotate-0 transition-transform duration-300"}"></button></div></main>`}),be=ne((G,F,T,L)=>{let v,p;return p=re(te,w=>v=w),pe(()=>{me(te,v=!1,v),window.document.body.classList.remove("dark-mode")}),p(),`




${ge(ve,"JitsiUser").$$render(G,{},{},{})}`});export{be as default};
