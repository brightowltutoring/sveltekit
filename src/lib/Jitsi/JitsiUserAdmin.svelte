<script>
  import { onMount } from "svelte";
  import { lessThan768 } from "$lib/store";
  // import { goto } from "$app/navigation";

  let domain, options, api, par, firstID;

  async function hangUpBtn() {
    await api.dispose();
    await setTimeout(() => {
      // goto("/");
      window.location.href = "/";
    }, 0);
  }

  onMount(() => {
    domain = "meet.jit.si";
    options = {
      userInfo: {
        displayName: "ThinkSolve",
      },
      roomName: "ThinkSolve12522",
      // width: "100%",
      // height: "740px",
      parentNode: document.querySelector("#meet"),
      configOverwrite: {
        disabledSounds: ["KNOCKING_PARTICIPANT_SOUND"],
        disableDeepLinking: true,
        startWithAudioMuted: true,
        startWithVideoMuted: true,
      },
      interfaceConfigOverwrite: {
        DEFAULT_BACKGROUND: `#130e21`,
        SHOW_CHROME_EXTENSION_BANNER: false,
        SETTINGS_SECTIONS: [
          "devices",
          "moderator",
          "language",
          "profile",
          "calendar",
          "sounds",
        ],
        TOOLBAR_BUTTONS: [
          // "hangup",
          "noisesuppression",
          "desktop",
          "microphone",
          "camera",
          "fullscreen",
          "settings",
          "chat",
          "fodeviceselection",
          "etherpad",
          "mute-video-everyone",
          "mute-everyone",
          "security",
          "sharedvideo",
          "videoquality",
          "profile",
          "raisehand",
          "livestreaming",
          "recording",
          "closedcaptions",
          "filmstrip",
          "feedback",
          "stats",
          "shortcuts",
          "tileview",
        ],
      },
    };

    api = new JitsiMeetExternalAPI(domain, options);

    // api.addEventListener("getNumberOfParticipants", () => {
    //   console.log("hey");
    // });

    api.addEventListener("participantRoleChanged", function (event) {
      if (event.role === "moderator") {
        api.executeCommand("password", "thnkslv");
        api.executeCommand("toggleLobby", true);
      }

      par = [...api.getParticipantsInfo()];
      // firstID = Object.values(par[0])[3];
      // api.pinParticipant(firstID);

      // alert(firstID);
      // alert(par.length);
    });
  });
</script>

<svelte:head>
  <script src="https://meet.jit.si/external_api.js"></script>
</svelte:head>

<div class="relative md:-translate-y-10 -translate-y-32 ">
  <div id="meet" class="w-full h-[95vh] md:h-[670px]" />
  <img
    on:keydown={hangUpBtn}
    on:click={hangUpBtn}
    alt="hangup button"
    class=" bg-gray-600 p-2 absolute brightness-50 {!par &&
      'opacity-0'} {$lessThan768
      ? 'top-5 right-5 '
      : 'bottom-5 right-10 '} flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0  hover:bg-red-500"
  />
</div>
