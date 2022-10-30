<script>
  import JitsiUser from "$lib/JitsiUser.svelte";

  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store.js";

  // let jitsiExternal = false;
  // function loadJitsiExternal() {
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
    window.document.body.classList.remove("dark-mode");
  });
</script>

<!-- {#if jitsiExternal} -->
<JitsiUser />
<!-- {/if} -->

<!-- TODO: -->
<!-- jank alert! onoading this page, other pages break that make use of calendly component ... unless i import the calendly component here... Something about jitsi's head links interferes with calendly head links, when importing calendly css via js element creation -->
<!-- <CalendlyJsandCSS /> -->
