<script>
  import "$lib/Jitsi/jitsi_api"; // contains JitsiMeetExternalAPI ... used to import via link
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { lessThan768 } from "$lib/store";

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
      disableRemoteMute: true,
      notifications: "lobby.notificationTitle",
      startWithAudioMuted: true,
      startWithVideoMuted: true,
      remoteVideoMenu: {
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
        // 'moderator','language','profile','calendar','sounds',
      ],
      TOOLBAR_BUTTONS: [
        "desktop",
        "microphone",
        "camera",
        "fullscreen",
        "chat",
        "fodeviceselection",
        "etherpad",
        // "hangup","dock-iframe","undock-iframe","raisehand","noisesuppression","settings","select-background","participants-pane","highlight",'mute-video-everyone','mute-everyone','security','sharedvideo','videoquality','livestreaming','recording','closedcaptions','filmstrip','feedback','stats','shortcuts',"tileview","profile",
      ],
    },
  };

  // let leftwatermark;
  // $: alert(leftwatermark);

  onMount(() => {
    // can only access dom element ("#meet") after 'onMount' ... therefore have to add this to the options object HERE before instantiating the jitsi api
    try {
      options.parentNode = document.querySelector("#meet");
      api = new JitsiMeetExternalAPI(domain, options);

      api.addEventListener("participantRoleChanged", function (event) {
        par = [...api.getParticipantsInfo()]; // the last person to join sees the most people...
        // firstID = Object.values(par[0])[3];
        // api.pinParticipant(firstID);
        // alert(firstID);
        // leftwatermark = document.querySelector("div.watermark.leftwatermark");
      });
    } catch (error) {
      console.log("onMount for JitsiMeetExternalAPI broken", error);
    }
  });
</script>

<main>
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
</main>
