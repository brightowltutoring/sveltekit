<!-- <button id="btn" class="hidden">submit dummy once</button> -->
<script>
  import { showHomeworkModal } from "$lib/store";

  $: $showHomeworkModal && PostDummyOnce();

  async function PostDummyOnce() {
    // NOTE: the 'globalThis.submitOnce' logic makes sure that the function can only fire once per SESSION ... specifically due to component lifecycles; Using '{ once: true }' inside a click event listener (attached to a dom element) ... would reset when changing routes (caveat: '{once:true}' would suffice if the component is attached to the body of the document)

    if (!globalThis.submitOnce) {
      const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");
      const postUrl = PUBLIC_UPLOAD_ENDPOINT;

      const data = new FormData();
      const file = new File(["foo"], "foo.txt", {
        type: "text/plain",
      });
      data.append("file", file);

      fetch(postUrl, {
        method: "POST",
        body: data,
      });
      globalThis.submitOnce = true;
    }
  }
</script>

<!-- This component sends a dummy file (in this case: javascript constructed .txt file using 'new File()' constructor) — to be fired on the first homework button click only. REASON: to circumvent 'coldstart' of google cloud function endpoint when user submits the first file -->
