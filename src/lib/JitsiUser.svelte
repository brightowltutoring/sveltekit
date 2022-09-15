<script>
  import { onMount } from "svelte";

  // onDestroy(() => {
  //   api.dispose();
  // });
  let domain, options, api, hangUp, meet, par, firstID;

  onMount(() => {
    // window.addEventListener("popstate", () => {
    //   window.location.reload();
    // });

    meet = document.querySelector("#meet");

    domain = "meet.jit.si";
    options = {
      roomName: "BrightowlTutoring12522",
      width: "100%",
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
          // 'hangup',
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

    hangUp = document.getElementById("hangUp");
    hangUp.addEventListener("click", () => {
      api.dispose();

      setTimeout(() => {
        window.location.href = "https://thinksolve.io";
      }, 1000);
    });

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

<!-- <head> -->
<!-- <script>
    window.addEventListener("popstate", () => {
      window.location.reload();
    });
  </script> -->

<!-- </head> -->

<!-- <button id="demo">demo</button> -->

<div id="meet" />

<div id="cornerDIV">
  <!-- <div> -->
  <img id="hangUp" />
</div>

<style>
  body {
    background-color: rgb(15, 15, 15);
    padding: 0;
    margin: 0;
  }
  .overflow-wrapper {
    display: none;
  }

  #cornerDIV {
    position: absolute;
    left: 48%;
    bottom: 40px;
  }
  #hangUp {
    content: url("https://brightowltutoring.com/s/hangup-gray.png");
    margin: 0 auto;
    display: flex;
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    transform: rotate(90deg);
    transition: 0.4s ease-in-out;
    /* transition: transform 0.4s ease-in-out; */
  }
  #hangUp:hover {
    content: url("https://brightowltutoring.com/s/hangup-red.png");
    transform: scale(1.85);
  }
</style>
