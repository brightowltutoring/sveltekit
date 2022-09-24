<script>
  import { onMount } from "svelte";
  import { lessThan768 } from "$lib/store.js";
  import { goto } from "$app/navigation";

  let domain, options, api, par, firstID;

  async function hangUpBtn() {
    await api.dispose();
    await setTimeout(() => {
      goto("/");
      // window.location.href = "https://thinksolve.io";
    }, 0);
  }

  onMount(() => {
    domain = "meet.jit.si";
    options = {
      roomName: "ThinkSolve12522",
      // width: "100%",
      // height: "740px",
      parentNode: document.querySelector("#meet"),
      configOverwrite: {
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
        // DEFAULT_BACKGROUND: `#f6cf02`,
        // MOBILE_APP_PROMO: false,
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

    // api.addEventListener("getNumberOfParticipants", () => {
    //   console.log("hey");
    // });

    api.addEventListener("participantRoleChanged", function (event) {
      if (event.role === "moderator") {
        api.executeCommand("toggleLobby", true);
      }

      par = [...api.getParticipantsInfo()];
      firstID = Object.values(par[0])[3];
      api.pinParticipant(firstID);
      // alert(firstID);
      // alert(par.length);
    });
  });
</script>

<svelte:head>
  <script src="https://meet.jit.si/external_api.js"></script>
</svelte:head>

<div class="relative -translate-y-10">
  <div id="meet" class="w-full h-[670px]" />
  <img
    on:click={hangUpBtn}
    alt="hangup button"
    class="absolute {!par && 'opacity-0'} {$lessThan768
      ? 'top-5 right-0 left-0 text-center mr-auto ml-auto'
      : 'bottom-10 right-10 '} flex w-[50px] rounded-full content-[url('/hangup-gray.png')] rotate-90 duration-[0.4s] hover:scale-[1.8] hover:rotate-0 hover:content-[url('/hangup-red.png')] "
  />
</div>

<!-- sm:bottom-10 sm:right-10 top-0 right-5  -->
