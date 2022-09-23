<script>
  import { onMount } from "svelte";

  let domain, options, api, par, firstID;

  function hangUpBtn() {
    api.dispose();

    setTimeout(() => {
      window.location.href = "https://thinksolve.io";
    }, 300);
  }

  onMount(() => {
    domain = "meet.jit.si";
    options = {
      roomName: "ThinkSolve12522",
      // width: "100%",
      height: "740px",
      parentNode: document.querySelector("#meet"),
      configOverwrite: {
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
        // DEFAULT_BACKGROUND: `#f6cf02`,
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
          "settings",
          "chat",
          "fodeviceselection",
          "etherpad",
          // 'mute-video-everyone',
          // 'mute-everyone',
          // 'security',
          // "hangup",
          // 'sharedvideo',
          // 'videoquality',
          // 'profile',
          // 'raisehand',
          // 'livestreaming',
          // 'recording',
          // 'closedcaptions',
          // 'filmstrip',
          // 'feedback',
          // 'stats',
          // 'shortcuts',
          // 'tileview'
        ],
      },
    };

    api = new JitsiMeetExternalAPI(domain, options);

    api.addEventListener("participantRoleChanged", function (event) {
      if (event.role === "moderator") {
        api.executeCommand("toggleLobby", true);
      }

      par = [...api.getParticipantsInfo()];
      firstID = Object.values(par[0])[3];
      api.pinParticipant(firstID);
      // alert(firstID);
    });
  });
</script>

<svelte:head>
  <script src="https://meet.jit.si/external_api.js"></script>
</svelte:head>

<div class="relative w-full">
  <div id="meet" />
  <img
    on:click={hangUpBtn}
    alt="hangup button"
    class="absolute sm:bottom-10 sm:right-10 bottom-56 right-5 flex w-[50px] rounded-full content-[url('/hangup-gray.png')] rotate-90 duration-[0.4s] hover:scale-[1.8] hover:rotate-0  hover:content-[url('/hangup-red.png')] "
  />
</div>
