<script>
  import "$lib/Jitsi/jitsi_api.js"; // contains JitsiMeetExternalAPI ... used to import via link
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { lessThan768 } from "$lib/store.js";

  async function hangUpBtn() {
    await api.dispose();
    goto("/");
  }

  let api, par;
  let domain = "meet.jit.si";
  let options = {
    roomName: "ThinkSolve12522",
    // width: "100%", height: "740px",
    // parentNode: document.querySelector("#meet"),
    configOverwrite: {
      hideConferenceTimer: true,
      hideConferenceSubject: true,
      hideParticipantsStats: true,
      disablePolls: true,
      disableSelfView: false,
      // disableSelfViewSettings: true,
      disabledSounds: ["KNOCKING_PARTICIPANT_SOUND"],
      disableDeepLinking: true,
      disableRemoteMute: true, //TODO: USER ONLY
      notifications: "lobby.notificationTitle", //TODO: USER ONLY
      startWithAudioMuted: true,
      startWithVideoMuted: true,
      remoteVideoMenu: {
        //TODO: USER ONLY
        disableKick: true,
        disablePrivateChat: true,
      },
    },
    interfaceConfigOverwrite: {
      VIDEO_QUALITY_LABEL_DISABLED: true,
      DEFAULT_BACKGROUND: `#130e21`,
      SHOW_CHROME_EXTENSION_BANNER: false,
      SETTINGS_SECTIONS: [
        "devices",
        // 'moderator',
        // 'language',
        // 'profile',
        // 'calendar',
        // 'sounds',
      ],
      TOOLBAR_BUTTONS: [
        "desktop",
        "microphone",
        "camera",
        "fullscreen",
        "chat",
        "fodeviceselection",
        "etherpad",
        // "hangup",
        // "dock-iframe",
        // "undock-iframe",
        // "raisehand",
        // "noisesuppression",
        // "settings",
        // "select-background",
        // "participants-pane",
        // "highlight",
        // 'mute-video-everyone',
        // 'mute-everyone',
        // 'security',
        // 'sharedvideo',
        // 'videoquality',
        // 'livestreaming',
        // 'recording',
        // 'closedcaptions',
        // 'filmstrip',
        // 'feedback',
        // 'stats',
        // 'shortcuts',
        // "tileview",
        // "profile",
      ],
    },
  };

  onMount(() => {
    // can only access dom element ("#meet") after 'onMount' ... therefore have to add this to the options object HERE before instantiating the jitsi api
    try {
      options.parentNode = document.querySelector("#meet");
      api = new JitsiMeetExternalAPI(domain, options);

      api.addEventListener("participantRoleChanged", function (event) {
        par = [...api.getParticipantsInfo()];
      });

      // api.addEventListener("participantRoleChanged", function (event) {
      //   // leftwatermark = document.querySelector("div.leftwatermark");
      //   par = [...api.getParticipantsInfo()];
      //   // firstID = Object.values(par[0])[3];
      //   // api.pinParticipant(firstID);
      //   // alert(firstID);
      //   // alert(par.length);
      // });

      // api.addEventListener("getNumberOfParticipants", () => {
      //   console.log("hey");
      // });
    } catch (error) {
      console.log("onMount for JitsiMeetExternalAPI broken", error);
    }
  });
</script>

<div class="relative md:-translate-y-10 -translate-y-36">
  <div id="meet" class="w-full h-[82vh] md:h-[670px]" />

  <img
    on:click={hangUpBtn}
    on:keydown={hangUpBtn}
    alt="hangup button"
    class="absolute p-2 {!par && 'opacity-0'} {$lessThan768
      ? 'top-10 right-0'
      : 'bottom-5 right-10 '}  w-[50px] rounded-full content-[url('/phone.svg')] bg-[#2a1c44]  active:bg-red-900 rotate-90 hover:scale-[1.3] hover:rotate-0 transition-transform duration-300"
  />
</div>
<!-- <img
  on:click={hangUpBtn}
  on:keydown={hangUpBtn}
  alt="hangup button"
  class="absolute bg-gray-600 p-2 brightness-50 {!par &&
    'opacity-0'} {$lessThan768
    ? 'left-0 right-0 ml-auto mr-auto -bottom-20'
    : 'bottom-5 right-10 '} flex w-[50px] rounded-full content-[url('/phone.svg')] active:bg-red-500 rotate-90 hover:scale-[1.3] hover:rotate-0 transition-transform duration-300"
/> -->
