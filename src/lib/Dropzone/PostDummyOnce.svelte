<script>
  import { showHomeworkModal } from "$lib/store";
  $: $showHomeworkModal && PostDummyOnce();
  let src = "";

  // This code sends a dummy .txt file ONCE per session to a designated google drive folder via post request to the 'endpoint' (calls nodejs google cloud function to do this .... logic not here)
  // REASON: to circumvent 'cold start' of file uploader cloud function when user uploads first file (with dropzone)

  // UPDATE: DEC 21,2022: 'PostDummyOnce' also hydrates an iFrame src attribute with google apps script (logic not detailed here) .. which moves the dummy .txt file to a junk google drive folder. A timeout delay is necessary to allow the original 'foot.txt' post request to go through

  // FUTURE GOAL: use google app script or google drive api to directly delete the files ... haven't been successful in         creating an app script to do this since the google cloud function is run by a 'google service account' (one which I created) and won't allow automated deletions ...

  async function PostDummyOnce() {
    if (!globalThis.submitOnce) {
      const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");
      const endpoint = PUBLIC_UPLOAD_ENDPOINT;

      const data = new FormData();
      const file = new File(["foo"], "foo.txt", {
        type: "text/plain",
      });
      data.append("file", file);

      fetch(endpoint, {
        method: "POST",
        body: data,
      });

      const GOOGLE_APP_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbz-u_z2CVcJoIiGQCz7l9iQfPyQiyfz-IhUa9rX6cIy5zv0sfi8GfgkS6skzOJSmCAviQ/exec";

      setTimeout(() => (src = GOOGLE_APP_SCRIPT_URL), 5000);

      globalThis.submitOnce = true;
    }
  }
</script>

<iframe
  title="Executes 'moveNamedFilesToFolder' Google App script via iFrame src"
  style="height: 0vh; width: 0vw"
  {src}
  frameborder="0"
/>
