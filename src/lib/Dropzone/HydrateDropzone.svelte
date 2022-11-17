<!-- TODO: no longer in use; replaced with slot logic of InView.svelte -->
<script>
  import { onMount } from "svelte";

  export let uniqueId = "default"; // needed in order to instantiate multiple dropzones on one page
  // TODO: this was previously inside Dropzone.svelte, which is a component imported elsewhere that uses 'uniqueId' as a param ..might neeed to fix this logic later

  let dropzone;

  async function hydrateDropzoneDomEls() {
    console.log("drop it like its 🔥");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");

    const ACCEPTED_FILES_FRONTEND =
      ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc";

    const { Dropzone } = await import("dropzone");
    await import("$lib/Dropzone/dropzone.css");

    dropzone = new Dropzone("#default", {
      url: PUBLIC_UPLOAD_ENDPOINT,
      acceptedFiles: ACCEPTED_FILES_FRONTEND,
    });

    document.querySelector("#default").id = uniqueId;
  }

  onMount(() => {
    // let conditionsForObservation = true;
    // if (conditionsForObservation) {

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          hydrateDropzoneDomEls();
          observer.unobserve(entry.target);
        }
      }
    }, options);

    const dropzones = document.querySelectorAll(".dropzone");
    for (let dropzone of dropzones) {
      observer.observe(dropzone);
    }
    // }
  });
</script>

<!-- 
<script>

  import IntersectionObserver from "$lib/IntersectionObserver.svelte";

  export let uniqueId = "default";
  let dropzone;

  async function hydrateDropzoneDomEls() {
    console.log("drop it like its 🔥");

    const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");

    const ACCEPTED_FILES_FRONTEND =
      ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc";

    // await import("$lib/Dropzone/dropzone.css");
    const { Dropzone } = await import("dropzone");

    dropzone = new Dropzone("#default", {
      url: PUBLIC_UPLOAD_ENDPOINT,
      acceptedFiles: ACCEPTED_FILES_FRONTEND,
    });

    document.querySelector("#default").id = uniqueId;
  }
</script>

<IntersectionObserver
  querySelectees={".dropzone"}
  action={() => hydrateDropzoneDomEls()}
  once
/> -->
