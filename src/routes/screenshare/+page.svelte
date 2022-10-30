<script>
  import JitsiUser from "$lib/JitsiUser.svelte";
  import { beforeNavigate } from "$app/navigation";
  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store.js";

  // let jitsiExternal = false;
  // async function loadJitsiExternal() {
  //   if (!document.getElementById("jitsiId")) {
  //     const jitsiJS = document.createElement("script");
  //     jitsiJS.id = "jitsiId";
  //     jitsiJS.src = "https://meet.jit.si/external_api.js";
  //     jitsiJS.type = "text/javascript";
  //     document.head.appendChild(jitsiJS);
  //   }
  //   if (document.getElementById("jitsiId")) {
  //     jitsiExternal = true;
  //   }
  // }

  onMount(() => {
    // loadJitsiExternal();
    $isDarkMode = true;
    window.document.body.classList.add("dark-mode");
  });
  onDestroy(() => {
    $isDarkMode = false;
    // (browser || dev) && window.document.body.classList.remove("dark-mode");
    window.document.body.classList.remove("dark-mode");
    console.log("heyy");
  });

  // beforeNavigate(() => {
  //   console.log("beforeNavigate from /screenshare");
  // });
</script>

<JitsiUser />

<!-- 
<svelte:head>
  <script
    async
    src="https://meet.jit.si/external_api.js"
    onload={console.log("jitsi external api loaded")}
  >
  </script>

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
