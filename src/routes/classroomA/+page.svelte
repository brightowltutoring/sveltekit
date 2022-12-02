<script>
  import JitsiUserAdmin from "$lib/Jitsi/JitsiUserAdmin.svelte";
  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store";

  onMount(() => {
    $isDarkMode = true;
    window.document.body.classList.add("dark-mode");
  });
  // onDestroy(() => {
  //   $isDarkMode = false;
  //   api.dispose();
  //   window.document.body.classList.remove("dark-mode");
  // });
</script>

<JitsiUserAdmin />
