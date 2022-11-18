<script>
  // import { onMount } from "svelte";
  // import "$lib/Dropzone/dropzone.css";
  import InView from "$lib/InView.svelte";
  import { cssToHead } from "$lib/VanillaAppender.js";

  export let uniqueId; // needed in order to instantiate multiple dropzones on one page

  let dropzone;

  async function hydrateDropzoneDomEls() {
    console.log("drop it like its 🔥");
    const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");

    const ACCEPTED_FILES_FRONTEND =
      ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc";

    const { Dropzone } = await import("dropzone");

    // await import("$lib/Dropzone/dropzone.css"); //TODO: this crashes when using InView.svelte with this function; it appears to be an issue with vite's 'npm run build' when dynamically importing css.

    cssToHead("dropzoneCSS", "/dropzone.css"); // TODO: WORKAROUND: create and append <link:css> from copy of dropzone.css inside src/static folder.

    dropzone = new Dropzone("#default", {
      url: PUBLIC_UPLOAD_ENDPOINT,
      acceptedFiles: ACCEPTED_FILES_FRONTEND,
    });

    document.querySelector("#default").id = uniqueId;
  }

  // onMount(() => {
  //   const options = {
  //     root: null,
  //     threshold: 0,
  //     rootMargin: "0px",
  //   };
  //   const observer = new IntersectionObserver(function (entries, observer) {
  //     for (let entry of entries) {
  //       if (entry.isIntersecting) {
  //         hydrateDropzoneDomEls();
  //         observer.unobserve(entry.target);
  //       }
  //     }
  //   }, options);

  //   const dropzones = document.querySelectorAll(".dropzone");

  //   for (let dz of dropzones) {
  //     observer.observe(dz);
  //   }
  // });
</script>

<InView once vanilla={".dropzone"} onview={hydrateDropzoneDomEls} />
