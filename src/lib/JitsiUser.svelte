<!--TODO: for some reason have to add back external calendly js/css into head tag (below) or app breaks when leaving screenshare route, where this JitsiUser component is mounted-->
<script>
  console.log("jitsiUser component mounted");
  import "$lib/jitsi_api.js";
  import { browser, dev } from "$app/environment";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import { onMount, onDestroy } from "svelte";
  import { lessThan768 } from "$lib/store.js";

  // import { goto } from "$app/navigation";

  async function loadJitsiExternal() {
    const jitsiJS = document.createElement("script");
    jitsiJS.src = "https://meet.jit.si/external_api.js";
    jitsiJS.type = "text/javascript";
    document.head.appendChild(jitsiJS);
  }

  async function hangUpBtn() {
    await api.dispose();
    setTimeout(() => {
      // goto("/");
      window.location.href = "/";
    }, 0);
  }

  let api;
  let par;
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
  // loadJitsiExternal();
  // options.parentNode = await document.querySelector("#meet");
  // (browser || dev) && (api = new JitsiMeetExternalAPI(domain, options));
  // api = new JitsiMeetExternalAPI(domain, options);

  // api.addEventListener("participantRoleChanged", function (event) {
  //   par = [...api.getParticipantsInfo()];
  // });

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

  // jitsiStuff();
  onMount(async () => {
    options.parentNode = document.querySelector("#meet"); // this options depends on the dom being created

    try {
      // if (document.querySelector("#meet")) {
      api = await new JitsiMeetExternalAPI("meet.jit.si", options);
      api.addEventListener("participantRoleChanged", function (event) {
        par = [...api.getParticipantsInfo()];
      });
      // }
    } catch (error) {
      console.log("onMount for JitsiMeetExternalAPI broken", error);
    }
  });
  // afterNavigate(async () => {
  //   await hangUpBtn();
  // });

  beforeNavigate(() => {
    console.log("beforeNavigate from ....");
    // api.dispose();
    // setTimeout(() => {
    //   location.reload();
    // }, 100);
  });
</script>

<!-- <svelte:body
  on:load={() => {
    api = new JitsiMeetExternalAPI(domain, options);
    // await loadJitsiExternal();
    jitsiStuff();
  }}
/> -->

<!-- <svelte:head>
  <script
    async
    src="https://meet.jit.si/external_api.js"
    onload={console.log("jitsi external api loaded")}
  >
  </script>
</svelte:head> -->

<!--TODO: for some reason have to add back external calendly or app breaks when leaving screenshare route, where this JitsiUser component is mounted-->
<!-- <svelte:head>
  <script src="https://meet.jit.si/external_api.js"></script>

  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  />
  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
    async
  ></script>
</svelte:head> -->

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
</div>
