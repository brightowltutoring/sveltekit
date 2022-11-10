<script>
  import JitsiUser from "$lib/Jitsi/JitsiUser.svelte";
  import { onMount, onDestroy } from "svelte";
  import { isDarkMode } from "$lib/store.js";

  onMount(() => {
    $isDarkMode = true;
    document.body.classList.add("dark-mode");
  });
  onDestroy(() => {
    $isDarkMode = false;
    window.document.body.classList.remove("dark-mode");
  });
</script>

<!-- <div in:fade={{ duration: 1000, easing: elasticOut }}> -->
<!-- <div in:customFade={{ duration: 6000, delay: 1000 }}> -->

<JitsiUser />

<!-- TODO: mutation observer logic -->

<!-- const observer = new MutationObserver(function (mutations_list) {
  mutations_list.forEach(function (mutation) {
    mutation.addedNodes.forEach(function (added_node) {
      // if (added_node.class == "chilwatermark leftwatermark") {
      // if (added_node.class == "leftwatermark") {
      if (added_node.tagName == "IFRAME") {
        // if (added_node.id == "videospace") {
        // if (added_node.id == "videospace") {
        // console.log("mutation detected!");
        alert("mutation detected!");
        observer.disconnect();
        // return;
      }
      // else {
      //   alert("mutation NOT detected");
      //   // console.log("mutation NOT detected");
      // }
    });
  });
});
 observer.observe(document.querySelector("#videocontainer"), {
    // observer.observe(document.querySelector("#meet"), {
    subtree: false,
    // subtree: true,
    childList: true,
  }); -->

<!-- TODO: mutation observer logic -->
