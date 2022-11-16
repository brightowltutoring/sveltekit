import { c as create_ssr_component, a as subscribe, e as escape, p as onDestroy, v as validate_component, f as set_store_value } from "../../../chunks/index.js";
import { l as lessThan768, i as isDarkMode } from "../../../chunks/store.js";
!function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.JitsiMeetExternalAPI = t() : e.JitsiMeetExternalAPI = t();
}(self, function() {
  return (() => {
    var e = {
      820: (e2, t2, n2) => {
        n2.d(t2, { default: () => S });
        var i = n2(620), r = n2.n(i);
        class s extends i {
          constructor() {
            var e3, t3;
            super(...arguments), t3 = {}, (e3 = "_storage") in this ? Object.defineProperty(this, e3, {
              value: t3,
              enumerable: true,
              configurable: true,
              writable: true
            }) : this[e3] = t3;
          }
          clear() {
            this._storage = {};
          }
          get length() {
            return Object.keys(this._storage).length;
          }
          getItem(e3) {
            return this._storage[e3];
          }
          setItem(e3, t3) {
            this._storage[e3] = t3;
          }
          removeItem(e3) {
            delete this._storage[e3];
          }
          key(e3) {
            const t3 = Object.keys(this._storage);
            if (!(t3.length <= e3))
              return t3[e3];
          }
          serialize() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (0 === e3.length)
              return JSON.stringify(this._storage);
            const t3 = { ...this._storage };
            return e3.forEach((e4) => {
              delete t3[e4];
            }), JSON.stringify(t3);
          }
        }
        const o = new class extends i {
          constructor() {
            super();
            try {
              this._storage = window.localStorage, this._localStorageDisabled = false;
            } catch (e3) {
            }
            this._storage || (console.warn("Local storage is disabled."), this._storage = new s(), this._localStorageDisabled = true);
          }
          isLocalStorageDisabled() {
            return this._localStorageDisabled;
          }
          clear() {
            this._storage.clear(), this.emit("changed");
          }
          get length() {
            return this._storage.length;
          }
          getItem(e3) {
            return this._storage.getItem(e3);
          }
          setItem(e3, t3) {
            let n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._storage.setItem(e3, t3), n3 || this.emit("changed");
          }
          removeItem(e3) {
            this._storage.removeItem(e3), this.emit("changed");
          }
          key(e3) {
            return this._storage.key(e3);
          }
          serialize() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (this.isLocalStorageDisabled())
              return this._storage.serialize(e3);
            const t3 = this._storage.length, n3 = {};
            for (let i2 = 0; i2 < t3; i2++) {
              const t4 = this._storage.key(i2);
              e3.includes(t4) || (n3[t4] = this._storage.getItem(t4));
            }
            return JSON.stringify(n3);
          }
        }();
        var a = n2(571);
        const c = ["__proto__", "constructor", "prototype"];
        function l(e3) {
          const t3 = new RegExp("^([a-z][a-z0-9\\.\\+-]*:)+", "gi"), n3 = t3.exec(e3);
          if (n3) {
            let i2 = n3[n3.length - 1].toLowerCase();
            "http:" !== i2 && "https:" !== i2 && (i2 = "https:"), (e3 = e3.substring(t3.lastIndex)).startsWith("//") && (e3 = i2 + e3);
          }
          return e3;
        }
        function d(e3 = {}) {
          const t3 = [];
          for (const n3 in e3)
            try {
              t3.push(`${n3}=${encodeURIComponent(JSON.stringify(e3[n3]))}`);
            } catch (e4) {
              console.warn(`Error encoding ${n3}: ${e4}`);
            }
          return t3;
        }
        function u(e3) {
          const t3 = { toString: h };
          let n3, i2, r2;
          if (e3 = e3.replace(/\s/g, ""), n3 = new RegExp("^([a-z][a-z0-9\\.\\+-]*:)", "gi"), i2 = n3.exec(e3), i2 && (t3.protocol = i2[1].toLowerCase(), e3 = e3.substring(n3.lastIndex)), n3 = new RegExp("^(//[^/?#]+)", "gi"), i2 = n3.exec(e3), i2) {
            let r3 = i2[1].substring(2);
            e3 = e3.substring(n3.lastIndex);
            const s2 = r3.indexOf("@");
            -1 !== s2 && (r3 = r3.substring(s2 + 1)), t3.host = r3;
            const o2 = r3.lastIndexOf(":");
            -1 !== o2 && (t3.port = r3.substring(o2 + 1), r3 = r3.substring(0, o2)), t3.hostname = r3;
          }
          if (n3 = new RegExp("^([^?#]*)", "gi"), i2 = n3.exec(e3), i2 && (r2 = i2[1], e3 = e3.substring(n3.lastIndex)), r2 ? r2.startsWith("/") || (r2 = `/${r2}`) : r2 = "/", t3.pathname = r2, e3.startsWith("?")) {
            let n4 = e3.indexOf("#", 1);
            -1 === n4 && (n4 = e3.length), t3.search = e3.substring(0, n4), e3 = e3.substring(n4);
          } else
            t3.search = "";
          return t3.hash = e3.startsWith("#") ? e3 : "", t3;
        }
        function h(e3) {
          const {
            hash: t3,
            host: n3,
            pathname: i2,
            protocol: r2,
            search: s2
          } = e3 || this;
          let o2 = "";
          return r2 && (o2 += r2), n3 && (o2 += `//${n3}`), o2 += i2 || "/", s2 && (o2 += s2), t3 && (o2 += t3), o2;
        }
        function p(e3) {
          let t3;
          t3 = e3.serverURL && e3.room ? new URL(e3.room, e3.serverURL).toString() : e3.room ? e3.room : e3.url || "";
          const n3 = u(l(t3));
          if (!n3.protocol) {
            let t4 = e3.protocol || e3.scheme;
            t4 && (t4.endsWith(":") || (t4 += ":"), n3.protocol = t4);
          }
          let { pathname: i2 } = n3;
          if (!n3.host) {
            const t4 = e3.domain || e3.host || e3.hostname;
            if (t4) {
              const {
                host: e4,
                hostname: r3,
                pathname: s3,
                port: o3
              } = u(l(`org.jitsi.meet://${t4}`));
              e4 && (n3.host = e4, n3.hostname = r3, n3.port = o3), "/" === i2 && "/" !== s3 && (i2 = s3);
            }
          }
          const r2 = e3.roomName || e3.room;
          !r2 || !n3.pathname.endsWith("/") && n3.pathname.endsWith(`/${r2}`) || (i2.endsWith("/") || (i2 += "/"), i2 += r2), n3.pathname = i2;
          const { jwt: s2, lang: o2, release: a2 } = e3, c2 = new URLSearchParams(n3.search);
          s2 && c2.set("jwt", s2);
          const { defaultLanguage: h2 } = e3.configOverwrite || {};
          (o2 || h2) && c2.set("lang", o2 || h2), a2 && c2.set("release", a2);
          const p2 = c2.toString();
          p2 && (n3.search = `?${p2}`);
          let { hash: g2 } = n3;
          for (const t4 of [
            "config",
            "interfaceConfig",
            "devices",
            "userInfo",
            "appData"
          ]) {
            const n4 = d(e3[`${t4}Overwrite`] || e3[t4] || e3[`${t4}Override`]);
            if (n4.length) {
              let e4 = `${t4}.${n4.join(`&${t4}.`)}`;
              g2.length ? e4 = `&${e4}` : g2 = "#", g2 += e4;
            }
          }
          return n3.hash = g2, n3.toString() || void 0;
        }
        const g = { window: window.opener || window.parent }, m = "message";
        class f {
          constructor() {
            let { postisOptions: e3 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.postis = function(e4) {
              var t3, n3 = e4.scope, i2 = e4.window, r2 = e4.windowForEventListening || window, s2 = e4.allowedOrigin, o2 = {}, a2 = [], c2 = {}, l2 = false, d2 = "__ready__", u2 = function(e5) {
                var t4;
                try {
                  t4 = JSON.parse(e5.data);
                } catch (e6) {
                  return;
                }
                if ((!s2 || e5.origin === s2) && t4 && t4.postis && t4.scope === n3) {
                  var i3 = o2[t4.method];
                  if (i3)
                    for (var r3 = 0; r3 < i3.length; r3++)
                      i3[r3].call(null, t4.params);
                  else
                    c2[t4.method] = c2[t4.method] || [], c2[t4.method].push(t4.params);
                }
              };
              r2.addEventListener("message", u2, false);
              var h2 = {
                listen: function(e5, t4) {
                  o2[e5] = o2[e5] || [], o2[e5].push(t4);
                  var n4 = c2[e5];
                  if (n4)
                    for (var i3 = o2[e5], r3 = 0; r3 < i3.length; r3++)
                      for (var s3 = 0; s3 < n4.length; s3++)
                        i3[r3].call(null, n4[s3]);
                  delete c2[e5];
                },
                send: function(e5) {
                  var t4 = e5.method;
                  (l2 || e5.method === d2) && i2 && "function" == typeof i2.postMessage ? i2.postMessage(
                    JSON.stringify({
                      postis: true,
                      scope: n3,
                      method: t4,
                      params: e5.params
                    }),
                    "*"
                  ) : a2.push(e5);
                },
                ready: function(e5) {
                  l2 ? e5() : setTimeout(function() {
                    h2.ready(e5);
                  }, 50);
                },
                destroy: function(e5) {
                  clearInterval(t3), l2 = false, r2 && "function" == typeof r2.removeEventListener && r2.removeEventListener("message", u2), e5 && e5();
                }
              }, p2 = +new Date() + Math.random() + "";
              return t3 = setInterval(function() {
                h2.send({ method: d2, params: p2 });
              }, 50), h2.listen(d2, function(e5) {
                if (e5 === p2) {
                  clearInterval(t3), l2 = true;
                  for (var n4 = 0; n4 < a2.length; n4++)
                    h2.send(a2[n4]);
                  a2 = [];
                } else
                  h2.send({ method: d2, params: e5 });
              }), h2;
            }({ ...g, ...e3 }), this._receiveCallback = () => {
            }, this.postis.listen(m, (e4) => this._receiveCallback(e4));
          }
          dispose() {
            this.postis.destroy();
          }
          send(e3) {
            this.postis.send({ method: m, params: e3 });
          }
          setReceiveCallback(e3) {
            this._receiveCallback = e3;
          }
        }
        const v = "request", y = "response";
        class _ {
          constructor() {
            let { backend: e3 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this._listeners = /* @__PURE__ */ new Map(), this._requestID = 0, this._responseHandlers = /* @__PURE__ */ new Map(), this._unprocessedMessages = /* @__PURE__ */ new Set(), this.addListener = this.on, e3 && this.setBackend(e3);
          }
          _disposeBackend() {
            this._backend && (this._backend.dispose(), this._backend = null);
          }
          _onMessageReceived(e3) {
            if (e3.type === y) {
              const t3 = this._responseHandlers.get(e3.id);
              t3 && (t3(e3), this._responseHandlers.delete(e3.id));
            } else
              e3.type === v ? this.emit("request", e3.data, (t3, n3) => {
                this._backend.send({
                  type: y,
                  error: n3,
                  id: e3.id,
                  result: t3
                });
              }) : this.emit("event", e3.data);
          }
          dispose() {
            this._responseHandlers.clear(), this._unprocessedMessages.clear(), this.removeAllListeners(), this._disposeBackend();
          }
          emit(e3) {
            for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++)
              n3[i2 - 1] = arguments[i2];
            const r2 = this._listeners.get(e3);
            let s2 = false;
            return r2 && r2.size && r2.forEach((e4) => {
              s2 = e4(...n3) || s2;
            }), s2 || this._unprocessedMessages.add(n3), s2;
          }
          on(e3, t3) {
            let n3 = this._listeners.get(e3);
            return n3 || (n3 = /* @__PURE__ */ new Set(), this._listeners.set(e3, n3)), n3.add(t3), this._unprocessedMessages.forEach((e4) => {
              t3(...e4) && this._unprocessedMessages.delete(e4);
            }), this;
          }
          removeAllListeners(e3) {
            return e3 ? this._listeners.delete(e3) : this._listeners.clear(), this;
          }
          removeListener(e3, t3) {
            const n3 = this._listeners.get(e3);
            return n3 && n3.delete(t3), this;
          }
          sendEvent() {
            let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this._backend && this._backend.send({ type: "event", data: e3 });
          }
          sendRequest(e3) {
            if (!this._backend)
              return Promise.reject(
                new Error("No transport backend defined!")
              );
            this._requestID++;
            const t3 = this._requestID;
            return new Promise((n3, i2) => {
              this._responseHandlers.set(t3, (e4) => {
                let { error: t4, result: r2 } = e4;
                void 0 !== r2 ? n3(r2) : i2(
                  void 0 !== t4 ? t4 : new Error("Unexpected response format!")
                );
              }), this._backend.send({ type: v, data: e3, id: t3 });
            });
          }
          setBackend(e3) {
            this._disposeBackend(), this._backend = e3, this._backend.setReceiveCallback(
              this._onMessageReceived.bind(this)
            );
          }
        }
        (function(e3, t3 = false, n3 = "hash") {
          "string" == typeof e3 && (e3 = new URL(e3));
          const i2 = "search" === n3 ? e3.search : e3.hash, r2 = {}, s2 = (null == i2 ? void 0 : i2.substr(1).split("&")) || [];
          if ("hash" === n3 && 1 === s2.length) {
            const e4 = s2[0];
            if (e4.startsWith("/") && 1 === e4.split("&").length)
              return r2;
          }
          return s2.forEach((e4) => {
            const n4 = e4.split("="), i3 = n4[0];
            if (!i3 || i3.split(".").some((e5) => c.includes(e5)))
              return;
            let s3;
            try {
              if (s3 = n4[1], !t3) {
                const e5 = decodeURIComponent(s3).replace(/\\&/, "&");
                s3 = "undefined" === e5 ? void 0 : a.parse(e5);
              }
            } catch (e5) {
              return void function(e6, t4 = "") {
                var n5;
                console.error(t4, e6), null === (n5 = window.onerror) || void 0 === n5 || n5.call(window, t4, void 0, void 0, void 0, e6);
              }(e5, `Failed to parse URL parameter value: ${String(s3)}`);
            }
            r2[i3] = s3;
          }), r2;
        })(window.location).jitsi_meet_external_api_id;
        (window.JitsiMeetJS || (window.JitsiMeetJS = {}), window.JitsiMeetJS.app || (window.JitsiMeetJS.app = {}), window.JitsiMeetJS.app).setExternalTransportBackend = (e3) => (void 0).setBackend(e3);
        var b = n2(860);
        const w = n2.n(b)().getLogger("modules/API/external/functions.js");
        function L(e3, t3) {
          return e3.sendRequest({
            type: "devices",
            name: "setDevice",
            device: t3
          });
        }
        const k = ["css/all.css", "libs/alwaysontop.min.js"], E = {
          addBreakoutRoom: "add-breakout-room",
          answerKnockingParticipant: "answer-knocking-participant",
          approveVideo: "approve-video",
          askToUnmute: "ask-to-unmute",
          autoAssignToBreakoutRooms: "auto-assign-to-breakout-rooms",
          avatarUrl: "avatar-url",
          cancelPrivateChat: "cancel-private-chat",
          closeBreakoutRoom: "close-breakout-room",
          displayName: "display-name",
          e2eeKey: "e2ee-key",
          email: "email",
          grantModerator: "grant-moderator",
          hangup: "video-hangup",
          hideNotification: "hide-notification",
          initiatePrivateChat: "initiate-private-chat",
          joinBreakoutRoom: "join-breakout-room",
          localSubject: "local-subject",
          kickParticipant: "kick-participant",
          muteEveryone: "mute-everyone",
          overwriteConfig: "overwrite-config",
          overwriteNames: "overwrite-names",
          password: "password",
          pinParticipant: "pin-participant",
          rejectParticipant: "reject-participant",
          removeBreakoutRoom: "remove-breakout-room",
          resizeFilmStrip: "resize-film-strip",
          resizeLargeVideo: "resize-large-video",
          sendChatMessage: "send-chat-message",
          sendEndpointTextMessage: "send-endpoint-text-message",
          sendParticipantToRoom: "send-participant-to-room",
          sendTones: "send-tones",
          setFollowMe: "set-follow-me",
          setLargeVideoParticipant: "set-large-video-participant",
          setMediaEncryptionKey: "set-media-encryption-key",
          setNoiseSuppressionEnabled: "set-noise-suppression-enabled",
          setParticipantVolume: "set-participant-volume",
          setSubtitles: "set-subtitles",
          setTileView: "set-tile-view",
          setVideoQuality: "set-video-quality",
          showNotification: "show-notification",
          startRecording: "start-recording",
          startShareVideo: "start-share-video",
          stopRecording: "stop-recording",
          stopShareVideo: "stop-share-video",
          subject: "subject",
          submitFeedback: "submit-feedback",
          toggleAudio: "toggle-audio",
          toggleCamera: "toggle-camera",
          toggleCameraMirror: "toggle-camera-mirror",
          toggleChat: "toggle-chat",
          toggleE2EE: "toggle-e2ee",
          toggleFilmStrip: "toggle-film-strip",
          toggleLobby: "toggle-lobby",
          toggleModeration: "toggle-moderation",
          toggleNoiseSuppression: "toggle-noise-suppression",
          toggleParticipantsPane: "toggle-participants-pane",
          toggleRaiseHand: "toggle-raise-hand",
          toggleShareScreen: "toggle-share-screen",
          toggleSubtitles: "toggle-subtitles",
          toggleTileView: "toggle-tile-view",
          toggleVirtualBackgroundDialog: "toggle-virtual-background",
          toggleVideo: "toggle-video"
        }, C = {
          "avatar-changed": "avatarChanged",
          "audio-availability-changed": "audioAvailabilityChanged",
          "audio-mute-status-changed": "audioMuteStatusChanged",
          "audio-or-video-sharing-toggled": "audioOrVideoSharingToggled",
          "breakout-rooms-updated": "breakoutRoomsUpdated",
          "browser-support": "browserSupport",
          "camera-error": "cameraError",
          "chat-updated": "chatUpdated",
          "content-sharing-participants-changed": "contentSharingParticipantsChanged",
          "data-channel-opened": "dataChannelOpened",
          "device-list-changed": "deviceListChanged",
          "display-name-change": "displayNameChange",
          "email-change": "emailChange",
          "error-occurred": "errorOccurred",
          "endpoint-text-message-received": "endpointTextMessageReceived",
          "face-landmark-detected": "faceLandmarkDetected",
          "feedback-submitted": "feedbackSubmitted",
          "feedback-prompt-displayed": "feedbackPromptDisplayed",
          "filmstrip-display-changed": "filmstripDisplayChanged",
          "iframe-dock-state-changed": "iframeDockStateChanged",
          "incoming-message": "incomingMessage",
          "knocking-participant": "knockingParticipant",
          log: "log",
          "mic-error": "micError",
          "moderation-participant-approved": "moderationParticipantApproved",
          "moderation-participant-rejected": "moderationParticipantRejected",
          "moderation-status-changed": "moderationStatusChanged",
          "mouse-enter": "mouseEnter",
          "mouse-leave": "mouseLeave",
          "mouse-move": "mouseMove",
          "outgoing-message": "outgoingMessage",
          "participant-joined": "participantJoined",
          "participant-kicked-out": "participantKickedOut",
          "participant-left": "participantLeft",
          "participant-role-changed": "participantRoleChanged",
          "participants-pane-toggled": "participantsPaneToggled",
          "password-required": "passwordRequired",
          "prejoin-screen-loaded": "prejoinScreenLoaded",
          "proxy-connection-event": "proxyConnectionEvent",
          "raise-hand-updated": "raiseHandUpdated",
          "recording-link-available": "recordingLinkAvailable",
          "recording-status-changed": "recordingStatusChanged",
          "video-ready-to-close": "readyToClose",
          "video-conference-joined": "videoConferenceJoined",
          "video-conference-left": "videoConferenceLeft",
          "video-availability-changed": "videoAvailabilityChanged",
          "video-mute-status-changed": "videoMuteStatusChanged",
          "video-quality-changed": "videoQualityChanged",
          "screen-sharing-status-changed": "screenSharingStatusChanged",
          "dominant-speaker-changed": "dominantSpeakerChanged",
          "subject-change": "subjectChange",
          "suspend-detected": "suspendDetected",
          "tile-view-changed": "tileViewChanged",
          "toolbar-button-clicked": "toolbarButtonClicked"
        };
        let x = 0;
        function O(e3, t3) {
          e3._numberOfParticipants += t3;
        }
        function R(e3) {
          let t3;
          return "string" == typeof e3 && null !== String(e3).match(/([0-9]*\.?[0-9]+)(em|pt|px|%)$/) ? t3 = e3 : "number" == typeof e3 && (t3 = `${e3}px`), t3;
        }
        class S extends r() {
          constructor(e3) {
            super();
            for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++)
              n3[i2 - 1] = arguments[i2];
            const {
              roomName: r2 = "",
              width: s2 = "100%",
              height: a2 = "100%",
              parentNode: c2 = document.body,
              configOverwrite: l2 = {},
              interfaceConfigOverwrite: d2 = {},
              jwt: u2,
              lang: h2,
              onload: g2,
              invitees: m2,
              devices: v2,
              userInfo: y2,
              e2eeKey: b2,
              release: w2
            } = function(e4) {
              if (!e4.length)
                return {};
              switch (typeof e4[0]) {
                case "string":
                case "undefined": {
                  const [t4, n4, i3, r3, s3, o2, a3, c3, l3] = e4;
                  return {
                    roomName: t4,
                    width: n4,
                    height: i3,
                    parentNode: r3,
                    configOverwrite: s3,
                    interfaceConfigOverwrite: o2,
                    jwt: a3,
                    onload: c3,
                    lang: l3
                  };
                }
                case "object":
                  return e4[0];
                default:
                  throw new Error("Can't parse the arguments!");
              }
            }(n3), L2 = o.getItem("jitsiLocalStorage");
            this._parentNode = c2, this._url = function(e4) {
              return p({
                ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                url: `https://${e4}/#jitsi_meet_external_api_id=${x}`
              });
            }(e3, {
              configOverwrite: l2,
              interfaceConfigOverwrite: d2,
              jwt: u2,
              lang: h2,
              roomName: r2,
              devices: v2,
              userInfo: y2,
              appData: { localStorageContent: L2 },
              release: w2
            }), this._createIFrame(a2, s2, g2), this._transport = new _({
              backend: new f({
                postisOptions: {
                  allowedOrigin: new URL(this._url).origin,
                  scope: `jitsi_meet_external_api_${x}`,
                  window: this._frame.contentWindow
                }
              })
            }), Array.isArray(m2) && m2.length > 0 && this.invite(m2), this._tmpE2EEKey = b2, this._isLargeVideoVisible = false, this._isPrejoinVideoVisible = false, this._numberOfParticipants = 0, this._participants = {}, this._myUserID = void 0, this._onStageParticipant = void 0, this._setupListeners(), x++;
          }
          _createIFrame(e3, t3, n3) {
            const i2 = `jitsiConferenceFrame${x}`;
            this._frame = document.createElement("iframe"), this._frame.allow = "camera; microphone; display-capture; autoplay; clipboard-write", this._frame.src = this._url, this._frame.name = i2, this._frame.id = i2, this._setSize(e3, t3), this._frame.setAttribute("allowFullScreen", "true"), this._frame.style.border = 0, n3 && (this._frame.onload = n3), this._frame = this._parentNode.appendChild(this._frame);
          }
          _getAlwaysOnTopResources() {
            const e3 = this._frame.contentWindow, t3 = e3.document;
            let n3 = "";
            const i2 = t3.querySelector("base");
            if (i2 && i2.href)
              n3 = i2.href;
            else {
              const { protocol: t4, host: i3 } = e3.location;
              n3 = `${t4}//${i3}`;
            }
            return k.map((e4) => new URL(e4, n3).href);
          }
          _getFormattedDisplayName(e3) {
            const { formattedDisplayName: t3 } = this._participants[e3] || {};
            return t3;
          }
          _getOnStageParticipant() {
            return this._onStageParticipant;
          }
          _getLargeVideo() {
            const e3 = this.getIFrame();
            if (this._isLargeVideoVisible && e3 && e3.contentWindow && e3.contentWindow.document)
              return e3.contentWindow.document.getElementById("largeVideo");
          }
          _getPrejoinVideo() {
            const e3 = this.getIFrame();
            if (this._isPrejoinVideoVisible && e3 && e3.contentWindow && e3.contentWindow.document)
              return e3.contentWindow.document.getElementById("prejoinVideo");
          }
          _getParticipantVideo(e3) {
            const t3 = this.getIFrame();
            if (t3 && t3.contentWindow && t3.contentWindow.document)
              return void 0 === e3 || e3 === this._myUserID ? t3.contentWindow.document.getElementById(
                "localVideo_container"
              ) : t3.contentWindow.document.querySelector(
                `#participant_${e3} video`
              );
          }
          _setSize(e3, t3) {
            const n3 = R(e3), i2 = R(t3);
            void 0 !== n3 && (this._height = e3, this._frame.style.height = n3), void 0 !== i2 && (this._width = t3, this._frame.style.width = i2);
          }
          _setupListeners() {
            this._transport.on("event", (e3) => {
              let { name: t3, ...n3 } = e3;
              const i2 = n3.id;
              switch (t3) {
                case "video-conference-joined":
                  void 0 !== this._tmpE2EEKey && (this.executeCommand(E.e2eeKey, this._tmpE2EEKey), this._tmpE2EEKey = void 0), this._myUserID = i2, this._participants[i2] = {
                    email: n3.email,
                    avatarURL: n3.avatarURL
                  };
                case "participant-joined":
                  this._participants[i2] = this._participants[i2] || {}, this._participants[i2].displayName = n3.displayName, this._participants[i2].formattedDisplayName = n3.formattedDisplayName, O(this, 1);
                  break;
                case "participant-left":
                  O(this, -1), delete this._participants[i2];
                  break;
                case "display-name-change": {
                  const e4 = this._participants[i2];
                  e4 && (e4.displayName = n3.displayname, e4.formattedDisplayName = n3.formattedDisplayName);
                  break;
                }
                case "email-change": {
                  const e4 = this._participants[i2];
                  e4 && (e4.email = n3.email);
                  break;
                }
                case "avatar-changed": {
                  const e4 = this._participants[i2];
                  e4 && (e4.avatarURL = n3.avatarURL);
                  break;
                }
                case "on-stage-participant-changed":
                  this._onStageParticipant = i2, this.emit("largeVideoChanged");
                  break;
                case "large-video-visibility-changed":
                  this._isLargeVideoVisible = n3.isVisible, this.emit("largeVideoChanged");
                  break;
                case "prejoin-screen-loaded":
                  this._participants[i2] = {
                    displayName: n3.displayName,
                    formattedDisplayName: n3.formattedDisplayName
                  };
                  break;
                case "on-prejoin-video-changed":
                  this._isPrejoinVideoVisible = n3.isVisible, this.emit("prejoinVideoChanged");
                  break;
                case "video-conference-left":
                  O(this, -1), delete this._participants[this._myUserID];
                  break;
                case "video-quality-changed":
                  this._videoQuality = n3.videoQuality;
                  break;
                case "breakout-rooms-updated":
                  this.updateNumberOfParticipants(n3.rooms);
                  break;
                case "local-storage-changed":
                  return o.setItem("jitsiLocalStorage", n3.localStorageContent), true;
              }
              const r2 = C[t3];
              return !!r2 && (this.emit(r2, n3), true);
            });
          }
          updateNumberOfParticipants(e3) {
            if (!e3 || !Object.keys(e3).length)
              return;
            const t3 = Object.keys(e3).reduce((t4, n3) => {
              var i2;
              return null !== (i2 = e3[n3]) && void 0 !== i2 && i2.participants ? Object.keys(e3[n3].participants).length + t4 : t4;
            }, 0);
            this._numberOfParticipants = t3;
          }
          async getRoomsInfo() {
            return this._transport.sendRequest({ name: "rooms-info" });
          }
          addEventListener(e3, t3) {
            this.on(e3, t3);
          }
          addEventListeners(e3) {
            for (const t3 in e3)
              this.addEventListener(t3, e3[t3]);
          }
          captureLargeVideoScreenshot() {
            return this._transport.sendRequest({
              name: "capture-largevideo-screenshot"
            });
          }
          dispose() {
            this.emit("_willDispose"), this._transport.dispose(), this.removeAllListeners(), this._frame && this._frame.parentNode && this._frame.parentNode.removeChild(this._frame);
          }
          executeCommand(e3) {
            if (e3 in E) {
              for (var t3 = arguments.length, n3 = new Array(t3 > 1 ? t3 - 1 : 0), i2 = 1; i2 < t3; i2++)
                n3[i2 - 1] = arguments[i2];
              this._transport.sendEvent({ data: n3, name: E[e3] });
            } else
              console.error("Not supported command name.");
          }
          executeCommands(e3) {
            for (const t3 in e3)
              this.executeCommand(t3, e3[t3]);
          }
          getAvailableDevices() {
            return function(e3) {
              return e3.sendRequest({ type: "devices", name: "getAvailableDevices" }).catch((e4) => (w.error(e4), {}));
            }(this._transport);
          }
          getContentSharingParticipants() {
            return this._transport.sendRequest({
              name: "get-content-sharing-participants"
            });
          }
          getCurrentDevices() {
            return function(e3) {
              return e3.sendRequest({ type: "devices", name: "getCurrentDevices" }).catch((e4) => (w.error(e4), {}));
            }(this._transport);
          }
          getCustomAvatarBackgrounds() {
            return this._transport.sendRequest({
              name: "get-custom-avatar-backgrounds"
            });
          }
          getLivestreamUrl() {
            return this._transport.sendRequest({
              name: "get-livestream-url"
            });
          }
          getParticipantsInfo() {
            const e3 = Object.keys(this._participants), t3 = Object.values(this._participants);
            return t3.forEach((t4, n3) => {
              t4.participantId = e3[n3];
            }), t3;
          }
          getVideoQuality() {
            return this._videoQuality;
          }
          isAudioAvailable() {
            return this._transport.sendRequest({
              name: "is-audio-available"
            });
          }
          isDeviceChangeAvailable(e3) {
            return function(e4, t3) {
              return e4.sendRequest({
                deviceType: t3,
                type: "devices",
                name: "isDeviceChangeAvailable"
              });
            }(this._transport, e3);
          }
          isDeviceListAvailable() {
            return function(e3) {
              return e3.sendRequest({
                type: "devices",
                name: "isDeviceListAvailable"
              });
            }(this._transport);
          }
          isMultipleAudioInputSupported() {
            return function(e3) {
              return e3.sendRequest({
                type: "devices",
                name: "isMultipleAudioInputSupported"
              });
            }(this._transport);
          }
          invite(e3) {
            return Array.isArray(e3) && 0 !== e3.length ? this._transport.sendRequest({ name: "invite", invitees: e3 }) : Promise.reject(new TypeError("Invalid Argument"));
          }
          isAudioMuted() {
            return this._transport.sendRequest({ name: "is-audio-muted" });
          }
          isAudioDisabled() {
            return this._transport.sendRequest({ name: "is-audio-disabled" });
          }
          isModerationOn(e3) {
            return this._transport.sendRequest({
              name: "is-moderation-on",
              mediaType: e3
            });
          }
          isParticipantForceMuted(e3, t3) {
            return this._transport.sendRequest({
              name: "is-participant-force-muted",
              participantId: e3,
              mediaType: t3
            });
          }
          isParticipantsPaneOpen() {
            return this._transport.sendRequest({
              name: "is-participants-pane-open"
            });
          }
          isSharingScreen() {
            return this._transport.sendRequest({ name: "is-sharing-screen" });
          }
          isStartSilent() {
            return this._transport.sendRequest({ name: "is-start-silent" });
          }
          getAvatarURL(e3) {
            const { avatarURL: t3 } = this._participants[e3] || {};
            return t3;
          }
          getDeploymentInfo() {
            return this._transport.sendRequest({ name: "deployment-info" });
          }
          getDisplayName(e3) {
            const { displayName: t3 } = this._participants[e3] || {};
            return t3;
          }
          getEmail(e3) {
            const { email: t3 } = this._participants[e3] || {};
            return t3;
          }
          getIFrame() {
            return this._frame;
          }
          getNumberOfParticipants() {
            return this._numberOfParticipants;
          }
          isVideoAvailable() {
            return this._transport.sendRequest({
              name: "is-video-available"
            });
          }
          isVideoMuted() {
            return this._transport.sendRequest({ name: "is-video-muted" });
          }
          listBreakoutRooms() {
            return this._transport.sendRequest({
              name: "list-breakout-rooms"
            });
          }
          pinParticipant(e3) {
            this.executeCommand("pinParticipant", e3);
          }
          removeEventListener(e3) {
            this.removeAllListeners(e3);
          }
          removeEventListeners(e3) {
            e3.forEach((e4) => this.removeEventListener(e4));
          }
          resizeLargeVideo(e3, t3) {
            e3 <= this._width && t3 <= this._height && this.executeCommand("resizeLargeVideo", e3, t3);
          }
          sendProxyConnectionEvent(e3) {
            this._transport.sendEvent({
              data: [e3],
              name: "proxy-connection-event"
            });
          }
          setAudioInputDevice(e3, t3) {
            return function(e4, t4, n3) {
              return L(e4, { id: n3, kind: "audioinput", label: t4 });
            }(this._transport, e3, t3);
          }
          setAudioOutputDevice(e3, t3) {
            return function(e4, t4, n3) {
              return L(e4, { id: n3, kind: "audiooutput", label: t4 });
            }(this._transport, e3, t3);
          }
          setLargeVideoParticipant(e3) {
            this.executeCommand("setLargeVideoParticipant", e3);
          }
          setVideoInputDevice(e3, t3) {
            return function(e4, t4, n3) {
              return L(e4, { id: n3, kind: "videoinput", label: t4 });
            }(this._transport, e3, t3);
          }
          startRecording(e3) {
            this.executeCommand("startRecording", e3);
          }
          stopRecording(e3) {
            this.executeCommand("stopRecording", e3);
          }
          toggleE2EE(e3) {
            this.executeCommand("toggleE2EE", e3);
          }
          async setMediaEncryptionKey(e3) {
            const { key: t3, index: n3 } = e3;
            if (t3) {
              const e4 = await crypto.subtle.exportKey("raw", t3);
              this.executeCommand(
                "setMediaEncryptionKey",
                JSON.stringify({
                  exportedKey: Array.from(new Uint8Array(e4)),
                  index: n3
                })
              );
            } else
              this.executeCommand(
                "setMediaEncryptionKey",
                JSON.stringify({ exportedKey: false, index: n3 })
              );
          }
        }
      },
      872: (e2, t2, n2) => {
        e2.exports = n2(820).default;
      },
      571: (e2, t2) => {
        const n2 = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*\:/;
        t2.parse = function(e3) {
          const i = "object" == typeof (arguments.length <= 1 ? void 0 : arguments[1]) && (arguments.length <= 1 ? void 0 : arguments[1]), r = (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 || !i ? arguments.length <= 1 ? void 0 : arguments[1] : void 0, s = (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 && (arguments.length <= 2 ? void 0 : arguments[2]) || i || {}, o = JSON.parse(e3, r);
          return "ignore" === s.protoAction ? o : o && "object" == typeof o && e3.match(n2) ? (t2.scan(o, s), o) : o;
        }, t2.scan = function(e3) {
          let t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = [e3];
          for (; n3.length; ) {
            const e4 = n3;
            n3 = [];
            for (const i of e4) {
              if (Object.prototype.hasOwnProperty.call(i, "__proto__")) {
                if ("remove" !== t3.protoAction)
                  throw new SyntaxError(
                    "Object contains forbidden prototype property"
                  );
                delete i.__proto__;
              }
              for (const e5 in i) {
                const t4 = i[e5];
                t4 && "object" == typeof t4 && n3.push(i[e5]);
              }
            }
          }
        }, t2.safeParse = function(e3, n3) {
          try {
            return t2.parse(e3, n3);
          } catch (e4) {
            return null;
          }
        };
      },
      369: (e2, t2, n2) => {
        var i = n2(7);
        function r(e3, t3) {
          this.logStorage = e3, this.stringifyObjects = !(!t3 || !t3.stringifyObjects) && t3.stringifyObjects, this.storeInterval = t3 && t3.storeInterval ? t3.storeInterval : 3e4, this.maxEntryLength = t3 && t3.maxEntryLength ? t3.maxEntryLength : 1e4, Object.keys(i.levels).forEach(
            function(e4) {
              this[i.levels[e4]] = function() {
                this._log.apply(this, arguments);
              }.bind(this, e4);
            }.bind(this)
          ), this.storeLogsIntervalID = null, this.queue = [], this.totalLen = 0, this.outputCache = [];
        }
        r.prototype.stringify = function(e3) {
          try {
            return JSON.stringify(e3);
          } catch (e4) {
            return "[object with circular refs?]";
          }
        }, r.prototype.formatLogMessage = function(e3) {
          for (var t3 = "", n3 = 1, r2 = arguments.length; n3 < r2; n3++) {
            var s = arguments[n3];
            !this.stringifyObjects && e3 !== i.levels.ERROR || "object" != typeof s || (s = this.stringify(s)), t3 += s, n3 !== r2 - 1 && (t3 += " ");
          }
          return t3.length ? t3 : null;
        }, r.prototype._log = function() {
          var e3 = arguments[1], t3 = this.formatLogMessage.apply(this, arguments);
          if (t3) {
            var n3 = this.queue[this.queue.length - 1], i2 = n3 && n3.text;
            i2 === t3 ? n3.count += 1 : (this.queue.push({ text: t3, timestamp: e3, count: 1 }), this.totalLen += t3.length);
          }
          this.totalLen >= this.maxEntryLength && this._flush(true, true);
        }, r.prototype.start = function() {
          this._reschedulePublishInterval();
        }, r.prototype._reschedulePublishInterval = function() {
          this.storeLogsIntervalID && (window.clearTimeout(this.storeLogsIntervalID), this.storeLogsIntervalID = null), this.storeLogsIntervalID = window.setTimeout(
            this._flush.bind(this, false, true),
            this.storeInterval
          );
        }, r.prototype.flush = function() {
          this._flush(false, true);
        }, r.prototype._flush = function(e3, t3) {
          this.totalLen > 0 && (this.logStorage.isReady() || e3) && (this.logStorage.isReady() ? (this.outputCache.length && (this.outputCache.forEach(
            function(e4) {
              this.logStorage.storeLogs(e4);
            }.bind(this)
          ), this.outputCache = []), this.logStorage.storeLogs(this.queue)) : this.outputCache.push(this.queue), this.queue = [], this.totalLen = 0), t3 && this._reschedulePublishInterval();
        }, r.prototype.stop = function() {
          this._flush(false, false);
        }, e2.exports = r;
      },
      7: (e2) => {
        var t2 = { trace: 0, debug: 1, info: 2, log: 3, warn: 4, error: 5 };
        o.consoleTransport = console;
        var n2 = [o.consoleTransport];
        o.addGlobalTransport = function(e3) {
          -1 === n2.indexOf(e3) && n2.push(e3);
        }, o.removeGlobalTransport = function(e3) {
          var t3 = n2.indexOf(e3);
          -1 !== t3 && n2.splice(t3, 1);
        };
        var i = {};
        function r() {
          var e3 = {
            methodName: "",
            fileLocation: "",
            line: null,
            column: null
          }, t3 = new Error(), n3 = t3.stack ? t3.stack.split("\n") : [];
          if (!n3 || n3.length < 3)
            return e3;
          var i2 = null;
          return n3[3] && (i2 = n3[3].match(/\s*at\s*(.+?)\s*\((\S*)\s*:(\d*)\s*:(\d*)\)/)), !i2 || i2.length <= 4 ? (0 === n3[2].indexOf("log@") ? e3.methodName = n3[3].substr(0, n3[3].indexOf("@")) : e3.methodName = n3[2].substr(0, n3[2].indexOf("@")), e3) : (e3.methodName = i2[1], e3.fileLocation = i2[2], e3.line = i2[3], e3.column = i2[4], e3);
        }
        function s() {
          var e3 = arguments[0], s2 = arguments[1], o2 = Array.prototype.slice.call(arguments, 2);
          if (!(t2[s2] < e3.level))
            for (var a = !(e3.options.disableCallerInfo || i.disableCallerInfo) && r(), c = n2.concat(e3.transports), l = 0; l < c.length; l++) {
              var d = c[l], u = d[s2];
              if (u && "function" == typeof u) {
                var h = [];
                h.push(new Date().toISOString()), e3.id && h.push("[" + e3.id + "]"), a && a.methodName.length > 1 && h.push("<" + a.methodName + ">: ");
                var p = h.concat(o2);
                u.bind(d).apply(d, p);
              }
            }
        }
        function o(e3, n3, i2, r2) {
          this.id = n3, this.options = r2 || {}, this.transports = i2, this.transports || (this.transports = []), this.level = t2[e3];
          for (var o2 = Object.keys(t2), a = 0; a < o2.length; a++)
            this[o2[a]] = s.bind(null, this, o2[a]);
        }
        o.setGlobalOptions = function(e3) {
          i = e3 || {};
        }, o.prototype.setLevel = function(e3) {
          this.level = t2[e3];
        }, e2.exports = o, o.levels = {
          TRACE: "trace",
          DEBUG: "debug",
          INFO: "info",
          LOG: "log",
          WARN: "warn",
          ERROR: "error"
        };
      },
      860: (e2, t2, n2) => {
        var i = n2(7), r = n2(369), s = {}, o = [], a = i.levels.TRACE;
        e2.exports = {
          addGlobalTransport: function(e3) {
            i.addGlobalTransport(e3);
          },
          removeGlobalTransport: function(e3) {
            i.removeGlobalTransport(e3);
          },
          setGlobalOptions: function(e3) {
            i.setGlobalOptions(e3);
          },
          getLogger: function(e3, t3, n3) {
            var r2 = new i(a, e3, t3, n3);
            return e3 ? (s[e3] = s[e3] || [], s[e3].push(r2)) : o.push(r2), r2;
          },
          setLogLevelById: function(e3, t3) {
            for (var n3 = t3 ? s[t3] || [] : o, i2 = 0; i2 < n3.length; i2++)
              n3[i2].setLevel(e3);
          },
          setLogLevel: function(e3) {
            a = e3;
            for (var t3 = 0; t3 < o.length; t3++)
              o[t3].setLevel(e3);
            for (var n3 in s) {
              var i2 = s[n3] || [];
              for (t3 = 0; t3 < i2.length; t3++)
                i2[t3].setLevel(e3);
            }
          },
          levels: i.levels,
          LogCollector: r
        };
      },
      620: (e2) => {
        var t2, n2 = "object" == typeof Reflect ? Reflect : null, i = n2 && "function" == typeof n2.apply ? n2.apply : function(e3, t3, n3) {
          return Function.prototype.apply.call(e3, t3, n3);
        };
        t2 = n2 && "function" == typeof n2.ownKeys ? n2.ownKeys : Object.getOwnPropertySymbols ? function(e3) {
          return Object.getOwnPropertyNames(e3).concat(
            Object.getOwnPropertySymbols(e3)
          );
        } : function(e3) {
          return Object.getOwnPropertyNames(e3);
        };
        var r = Number.isNaN || function(e3) {
          return e3 != e3;
        };
        function s() {
          s.init.call(this);
        }
        e2.exports = s, e2.exports.once = function(e3, t3) {
          return new Promise(function(n3, i2) {
            function r2(n4) {
              e3.removeListener(t3, s2), i2(n4);
            }
            function s2() {
              "function" == typeof e3.removeListener && e3.removeListener("error", r2), n3([].slice.call(arguments));
            }
            m(e3, t3, s2, { once: true }), "error" !== t3 && function(e4, t4, n4) {
              "function" == typeof e4.on && m(e4, "error", t4, { once: true });
            }(e3, r2);
          });
        }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
        var o = 10;
        function a(e3) {
          if ("function" != typeof e3)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' + typeof e3
            );
        }
        function c(e3) {
          return void 0 === e3._maxListeners ? s.defaultMaxListeners : e3._maxListeners;
        }
        function l(e3, t3, n3, i2) {
          var r2, s2, o2, l2;
          if (a(n3), void 0 === (s2 = e3._events) ? (s2 = e3._events = /* @__PURE__ */ Object.create(null), e3._eventsCount = 0) : (void 0 !== s2.newListener && (e3.emit("newListener", t3, n3.listener ? n3.listener : n3), s2 = e3._events), o2 = s2[t3]), void 0 === o2)
            o2 = s2[t3] = n3, ++e3._eventsCount;
          else if ("function" == typeof o2 ? o2 = s2[t3] = i2 ? [n3, o2] : [o2, n3] : i2 ? o2.unshift(n3) : o2.push(n3), (r2 = c(e3)) > 0 && o2.length > r2 && !o2.warned) {
            o2.warned = true;
            var d2 = new Error(
              "Possible EventEmitter memory leak detected. " + o2.length + " " + String(t3) + " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
            d2.name = "MaxListenersExceededWarning", d2.emitter = e3, d2.type = t3, d2.count = o2.length, l2 = d2, console && console.warn && console.warn(l2);
          }
          return e3;
        }
        function d() {
          if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function u(e3, t3, n3) {
          var i2 = {
            fired: false,
            wrapFn: void 0,
            target: e3,
            type: t3,
            listener: n3
          }, r2 = d.bind(i2);
          return r2.listener = n3, i2.wrapFn = r2, r2;
        }
        function h(e3, t3, n3) {
          var i2 = e3._events;
          if (void 0 === i2)
            return [];
          var r2 = i2[t3];
          return void 0 === r2 ? [] : "function" == typeof r2 ? n3 ? [r2.listener || r2] : [r2] : n3 ? function(e4) {
            for (var t4 = new Array(e4.length), n4 = 0; n4 < t4.length; ++n4)
              t4[n4] = e4[n4].listener || e4[n4];
            return t4;
          }(r2) : g(r2, r2.length);
        }
        function p(e3) {
          var t3 = this._events;
          if (void 0 !== t3) {
            var n3 = t3[e3];
            if ("function" == typeof n3)
              return 1;
            if (void 0 !== n3)
              return n3.length;
          }
          return 0;
        }
        function g(e3, t3) {
          for (var n3 = new Array(t3), i2 = 0; i2 < t3; ++i2)
            n3[i2] = e3[i2];
          return n3;
        }
        function m(e3, t3, n3, i2) {
          if ("function" == typeof e3.on)
            i2.once ? e3.once(t3, n3) : e3.on(t3, n3);
          else {
            if ("function" != typeof e3.addEventListener)
              throw new TypeError(
                'The "emitter" argument must be of type EventEmitter. Received type ' + typeof e3
              );
            e3.addEventListener(t3, function r2(s2) {
              i2.once && e3.removeEventListener(t3, r2), n3(s2);
            });
          }
        }
        Object.defineProperty(s, "defaultMaxListeners", {
          enumerable: true,
          get: function() {
            return o;
          },
          set: function(e3) {
            if ("number" != typeof e3 || e3 < 0 || r(e3))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e3 + "."
              );
            o = e3;
          }
        }), s.init = function() {
          void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, s.prototype.setMaxListeners = function(e3) {
          if ("number" != typeof e3 || e3 < 0 || r(e3))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' + e3 + "."
            );
          return this._maxListeners = e3, this;
        }, s.prototype.getMaxListeners = function() {
          return c(this);
        }, s.prototype.emit = function(e3) {
          for (var t3 = [], n3 = 1; n3 < arguments.length; n3++)
            t3.push(arguments[n3]);
          var r2 = "error" === e3, s2 = this._events;
          if (void 0 !== s2)
            r2 = r2 && void 0 === s2.error;
          else if (!r2)
            return false;
          if (r2) {
            var o2;
            if (t3.length > 0 && (o2 = t3[0]), o2 instanceof Error)
              throw o2;
            var a2 = new Error(
              "Unhandled error." + (o2 ? " (" + o2.message + ")" : "")
            );
            throw a2.context = o2, a2;
          }
          var c2 = s2[e3];
          if (void 0 === c2)
            return false;
          if ("function" == typeof c2)
            i(c2, this, t3);
          else {
            var l2 = c2.length, d2 = g(c2, l2);
            for (n3 = 0; n3 < l2; ++n3)
              i(d2[n3], this, t3);
          }
          return true;
        }, s.prototype.addListener = function(e3, t3) {
          return l(this, e3, t3, false);
        }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e3, t3) {
          return l(this, e3, t3, true);
        }, s.prototype.once = function(e3, t3) {
          return a(t3), this.on(e3, u(this, e3, t3)), this;
        }, s.prototype.prependOnceListener = function(e3, t3) {
          return a(t3), this.prependListener(e3, u(this, e3, t3)), this;
        }, s.prototype.removeListener = function(e3, t3) {
          var n3, i2, r2, s2, o2;
          if (a(t3), void 0 === (i2 = this._events))
            return this;
          if (void 0 === (n3 = i2[e3]))
            return this;
          if (n3 === t3 || n3.listener === t3)
            0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete i2[e3], i2.removeListener && this.emit("removeListener", e3, n3.listener || t3));
          else if ("function" != typeof n3) {
            for (r2 = -1, s2 = n3.length - 1; s2 >= 0; s2--)
              if (n3[s2] === t3 || n3[s2].listener === t3) {
                o2 = n3[s2].listener, r2 = s2;
                break;
              }
            if (r2 < 0)
              return this;
            0 === r2 ? n3.shift() : function(e4, t4) {
              for (; t4 + 1 < e4.length; t4++)
                e4[t4] = e4[t4 + 1];
              e4.pop();
            }(n3, r2), 1 === n3.length && (i2[e3] = n3[0]), void 0 !== i2.removeListener && this.emit("removeListener", e3, o2 || t3);
          }
          return this;
        }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e3) {
          var t3, n3, i2;
          if (void 0 === (n3 = this._events))
            return this;
          if (void 0 === n3.removeListener)
            return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n3[e3] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[e3]), this;
          if (0 === arguments.length) {
            var r2, s2 = Object.keys(n3);
            for (i2 = 0; i2 < s2.length; ++i2)
              "removeListener" !== (r2 = s2[i2]) && this.removeAllListeners(r2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if ("function" == typeof (t3 = n3[e3]))
            this.removeListener(e3, t3);
          else if (void 0 !== t3)
            for (i2 = t3.length - 1; i2 >= 0; i2--)
              this.removeListener(e3, t3[i2]);
          return this;
        }, s.prototype.listeners = function(e3) {
          return h(this, e3, true);
        }, s.prototype.rawListeners = function(e3) {
          return h(this, e3, false);
        }, s.listenerCount = function(e3, t3) {
          return "function" == typeof e3.listenerCount ? e3.listenerCount(t3) : p.call(e3, t3);
        }, s.prototype.listenerCount = p, s.prototype.eventNames = function() {
          return this._eventsCount > 0 ? t2(this._events) : [];
        };
      }
    }, t = {};
    function n(i) {
      var r = t[i];
      if (void 0 !== r)
        return r.exports;
      var s = t[i] = { exports: {} };
      return e[i](s, s.exports, n), s.exports;
    }
    return n.n = (e2) => {
      var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
      return n.d(t2, { a: t2 }), t2;
    }, n.d = (e2, t2) => {
      for (var i in t2)
        n.o(t2, i) && !n.o(e2, i) && Object.defineProperty(e2, i, { enumerable: true, get: t2[i] });
    }, n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n(872);
  })();
});
const JitsiUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lessThan768, $$unsubscribe_lessThan768;
  $$unsubscribe_lessThan768 = subscribe(lessThan768, (value) => $lessThan768 = value);
  $$unsubscribe_lessThan768();
  return `<main><div class="${"relative md:-translate-y-10 -translate-y-36"}"><div id="${"meet"}" class="${"w-full h-[82vh] md:h-[670px]"}"></div>

    <img alt="${"hangup button"}" class="${"absolute p-2 " + escape("opacity-0", true) + " " + escape($lessThan768 ? "top-10 right-0" : "bottom-5 right-10 ", true) + " w-[50px] rounded-full content-[url('/phone.svg')] bg-[#2a1c44] active:bg-red-900 rotate-90 hover:scale-[1.3] hover:rotate-0 transition-transform duration-300"}"></div></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  onDestroy(() => {
    set_store_value(isDarkMode, $isDarkMode = false, $isDarkMode);
    window.document.body.classList.remove("dark-mode");
  });
  $$unsubscribe_isDarkMode();
  return `${validate_component(JitsiUser, "JitsiUser").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
