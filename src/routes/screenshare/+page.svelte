<script>
  import JitsiUser from "$lib/JitsiUser.svelte";
  // import CalendlyJsandCSS from "$lib/CalendlyJsandCSS.svelte";

  import { onMount } from "svelte";
  import { isDarkMode } from "$lib/store.js";

  onMount(() => {
    $isDarkMode = true;
    window.document.body.classList.toggle("dark-mode");
  });
</script>

<JitsiUser />

<!-- TODO: -->
<!-- jank alert! onoading this page, other pages break that make use of calendly component ... unless i import the calendly component here... Something about jitsi's head links interferes with calendly head links, when importing calendly css via js element creation -->
<!-- <CalendlyJsandCSS /> -->
