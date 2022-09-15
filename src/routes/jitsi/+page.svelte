<script>
  import JitsiUser from "$lib/JitsiUser.svelte";

  // import { isDarkMode } from "$lib/store.js";
  // import { page } from "$app/stores";

  // import { onMount } from "svelte";

  // function setToDm() {
  //   // if (routes[$page.routeId].isCurrent) {
  //   window.document.body.classList.remove("dark-mode");
  //   $isDarkMode = false;
  //   // }
  // }

  // onMount(() => {
  //   window.document.body.classList.remove("dark-mode");
  //   $isDarkMode = false;
  // });

  //   $: {
  //     if ($page.routeId === "/") {
  //     } else if (routes[$page.routeId].isCurrent) {
  //       window.document.body.classList.remove("dark-mode");
  //       $isDarkMode = false;
  //     }
  //   }
</script>

<JitsiUser />
