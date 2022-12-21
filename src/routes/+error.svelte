<script>
  import InView from "$lib/Wrappers/InView.svelte";
  let src = "";
  // import { page } from "$app/stores";$page.status
</script>

<!-- <h1>{$page.status}: {$page.error.message}</h1> -->
<div class="flex flex-col justify-center items-center gap-10">
  <p>Oops ... looks like that page doesn't exist.</p>
  <!-- <div class="animate-bounce text-4xl">🙈</div> -->
</div>

<InView once onview={() => (src = "/facepalm.gif")}>
  <div class="flex justify-center">
    <img src="" alt="face palm star trek gif" class="w-1/3 min-w-[250px]" />
  </div>
</InView>
