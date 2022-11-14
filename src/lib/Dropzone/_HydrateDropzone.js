export let uniqueId = "default"; // needed in order to instantiate multiple dropzones on one page
// TODO: this was previously inside Dropzone.svelte, which is a component imported elsewhere that uses 'uniqueId' as a param ..might neeed to fix this logic later

export let dropzone;

export async function hydrateDropzoneDomEls() {
  const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");

  const ACCEPTED_FILES_FRONTEND = ".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc";

  const { Dropzone } = await import("dropzone");
  await import("$lib/Dropzone/dropzone.css");

  dropzone = new Dropzone("#default", {
    url: PUBLIC_UPLOAD_ENDPOINT,
    acceptedFiles: ACCEPTED_FILES_FRONTEND,
  });

  document.querySelector("#default").id = uniqueId;
}

export function dropzoneHydrationOnMount() {
  let conditionsForObservation = true;
  //TODO: somehow limit to "import once". Edit: this link claims that additional import calls are skipped: https://dmitripavlutin.com/javascript-module-import-twice/

  if (conditionsForObservation) {
    const dropzones = document.querySelectorAll(".dropzone");
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
          console.log("drop it like its 🔥");
        }
      }
    }, options);

    for (let dropzone of dropzones) {
      observer.observe(dropzone);
    }
  }
}
