<!--TODO: for some reason have to add back external calendly js/css into head tag (below) or app breaks when leaving screenshare route, where this JitsiUser component is mounted-->
<script>
  import { onMount } from "svelte";
  import { lessThan768 } from "$lib/store.js";
  // import { goto } from "$app/navigation";

  // function loadJitsiExternal() {
  //   const jitsiJS = document.createElement("script");
  //   jitsiJS.src = "https://meet.jit.si/external_api.js";
  //   jitsiJS.type = "text/javascript";
  //   document.head.appendChild(jitsiJS);
  // }
  // loadJitsiExternal();

  async function hangUpBtn() {
    await api.dispose();
    await setTimeout(() => {
      // goto("/");
      window.location.href = "/";
    }, 0);
  }

  let api, par, firstID, videospace;

  let domain = "meet.jit.si";
  let options = {
    roomName: "ThinkSolve12522",
    // width: "100%",
    // height: "740px",
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
        // "hangup",
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

  onMount(async () => {
    options.parentNode = await document.querySelector("#meet");
    api = await new JitsiMeetExternalAPI(domain, options);

    // api.addEventListener("getNumberOfParticipants", () => {
    //   console.log("hey");
    // });

    api.addEventListener("participantRoleChanged", function (event) {
      // leftwatermark = document.querySelector("div.leftwatermark");
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

  <!--TODO: for some reason have to add back external calendly or app breaks when leaving screenshare route, where this JitsiUser component is mounted-->
  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  />
  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
    async
  ></script>
</svelte:head>

<div class="relative md:-translate-y-10 -translate-y-32 ">
  <div id="meet" class="w-full h-[95vh] md:h-[670px] peer" />

  <img
    on:click={hangUpBtn}
    on:keydown={hangUpBtn}
    alt="hangup button"
    class=" bg-gray-600 p-2 absolute brightness-50 {!par &&
      'opacity-0'} {$lessThan768
      ? 'top-5 right-5 '
      : 'bottom-5 right-10 '} flex w-[50px] rounded-full content-[url('/phone.svg')] rotate-90 duration-[0.4s] hover:scale-[1.5] hover:rotate-0  hover:bg-red-500"
  />
  <!-- <img
    on:click={hangUpBtn}
    alt="hangup button"
    class="absolute brightness-50 {!par && 'opacity-0'} {$lessThan768
      ? 'top-5 right-5 '
      : 'bottom-5 right-10 '} flex w-[50px] rounded-full content-[url('/hangup-gray.png')] rotate-90 duration-[0.4s] hover:scale-[1.8] hover:rotate-0 hover:content-[url('/hangup-red.png')] "
  /> -->
</div>
<!-- translate-y-20 opacity-0 peer-hover:translate-y-0 peer-hover:opacity-100  -->
<!-- bottom-5 right-0 left-0 text-center mr-auto ml-auto translate-x-52  -->
<!-- bottom-10 right-10  -->
<!-- top-5 right-0 left-0 text-center mr-auto ml-auto -->

<!-- sm:bottom-10 sm:right-10 top-0 right-5  -->
