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
      deeplinking: { disabled: true },
      // ADDED DEC 23,2022 as 'disableDeepLinking: true' stopped working in order to block 'add app/extension' in iframe on mobile
      disableRemoteMute: true,
      notifications: "lobby.notificationTitle",
      startWithAudioMuted: true,
      startWithVideoMuted: true,
      remoteVideoMenu: {
        disableKick: true,
        disablePrivateChat: true,
      },

      // TODO: get request still grabs all this mp3 data ... id rather not fetch this instead of disabling
      // disabledSounds: [
      //   "ASKED_TO_UNMUTE_SOUND",
      //   "E2EE_OFF_SOUND",
      //   "E2EE_ON_SOUND",
      //   "INCOMING_MSG_SOUND",
      //   "KNOCKING_PARTICIPANT_SOUND",
      //   "LIVE_STREAMING_OFF_SOUND",
      //   "LIVE_STREAMING_ON_SOUND",
      //   "NO_AUDIO_SIGNAL_SOUND",
      //   "NOISY_AUDIO_INPUT_SOUND",
      //   "OUTGOING_CALL_EXPIRED_SOUND",
      //   "OUTGOING_CALL_REJECTED_SOUND",
      //   "OUTGOING_CALL_RINGING_SOUND",
      //   "OUTGOING_CALL_START_SOUND",
      //   "PARTICIPANT_JOINED_SOUND",
      //   "PARTICIPANT_LEFT_SOUND",
      //   "RAISE_HAND_SOUND",
      //   "REACTION_SOUND",
      //   "RECORDING_OFF_SOUND",
      //   "RECORDING_ON_SOUND",
      //   "TALK_WHILE_MUTED_SOUND",
      // ],
    },
    interfaceConfigOverwrite: {
      SHOW_CHROME_EXTENSION_BANNER: false,
      VIDEO_QUALITY_LABEL_DISABLED: true,
      DEFAULT_BACKGROUND: `#130e21`,
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

<!-- <svelte:head>
  <script src="https://meet.jit.si/external_api.js"></script>
</svelte:head> -->

<main>
  <div class="relative md:-translate-y-10 -translate-y-36">
    <div id="meet" class="w-full h-[82vh] md:h-[670px]" />

    <button on:click={hangUpBtn}>
      <img
        alt="hangup button"
        class="absolute p-2 {!par && 'opacity-0'} {$lessThan768
          ? 'top-10 right-0'
          : 'bottom-5 right-10 '}  w-[50px] rounded-full content-[url('/phone.svg')] bg-[#2a1c44]  active:bg-red-900 rotate-90 hover:scale-[1.3] hover:rotate-0 transition-transform duration-300"
      />
    </button>
  </div>
</main>
