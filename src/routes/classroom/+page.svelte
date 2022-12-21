<script>
  import JitsiUser from "$lib/Jitsi/JitsiUser.svelte";
  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store";

  onMount(() => {
    $isDarkMode = true;
    document.body.classList.add("dark-mode");
  });
  onDestroy(() => {
    $isDarkMode = false;
    window.document.body.classList.remove("dark-mode");
  });

  //  TODO: delete

  import { page } from "$app/stores";
  import { routes } from "$lib/store";
</script>

<!-- TODO: delete -->

<svelte:head>
  <title>Classroom 🍎</title>
  <meta property="og:url" content="https://thinksolve.io/classroom" />
</svelte:head>
<!-- {$routes[$page.route.id.slice(1)].meta} -->

<JitsiUser />
