<head>
  <script>
    window.addEventListener("popstate", () => {
      window.location.reload();
    });
  </script>

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
</head>

<body>
  <div id="meet" />

  <div id="cornerDIV">
    <!-- <div> -->
    <img id="hangUp" />
  </div>

  <!-- <script src="https://meet.jit.si/external_api.js"></script> -->

  <script src="https://brightowltutoring.com/s/external_api.js"></script>
  <script>
    let domain = "meet.jit.si";
    let options = {
      userInfo: {
        // email: 'jonag@pm.me',
        displayName: "JA",
      },
      roomName: "BrightowlTutoring12522",
      width: "100%",
      height: "740px",
      parentNode: document.querySelector("#meet"),
      configOverwrite: {
        disabledSounds: ["KNOCKING_PARTICIPANT_SOUND"], // TODO: admin only
        startWithAudioMuted: true,
        startWithVideoMuted: true,
      },
      interfaceConfigOverwrite: {
        // DEFAULT_BACKGROUND: `#f6cf02`,
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
          "desktop",
          "microphone",
          "camera",
          "fullscreen",
          "settings",
          "chat",
          "fodeviceselection",
          "etherpad",
          "mute-everyone",
          "security",
          "sharedvideo",
          // 'videoquality',
          // 'profile',
          // 'raisehand',
          "livestreaming",
          // 'recording',
          // 'closedcaptions',
          "filmstrip",
          // 'feedback',
          // 'stats',
          "shortcuts",
          "tileview",
          // 'hangup',
        ],
      },
    };
    let api = new JitsiMeetExternalAPI(domain, options);

    api.addEventListener("participantRoleChanged", function (event) {
      if (event.role === "moderator") {
        api.executeCommand("toggleLobby", true);
      }

      let par = [...api.getParticipantsInfo()];
      let firstID = Object.values(par[0])[3];
      api.pinParticipant(firstID);
    });

    let hangUp = document.getElementById("hangUp");

    hangUp.addEventListener("click", () => {
      // kicks all but original participant out
      let par = [...api.getParticipantsInfo()];
      let firstID = Object.values(par[0])[3];

      for (let i = 0; i < par.length; i++) {
        let participantID = Object.values(par[i])[3];
        if (participantID !== firstID) {
          api.executeCommand("kickParticipant", participantID);
        }
      }

      // hang up call
      setTimeout(() => api.dispose(), 1000);

      // redirect
      setTimeout(
        () => (window.location.href = "https://brightowltutoring.com/"),
        2000
      );
    });
  </script>
</body>
