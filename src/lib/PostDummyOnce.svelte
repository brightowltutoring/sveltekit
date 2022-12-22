<script>
  import { showHomeworkModal } from "$lib/store";
  $: $showHomeworkModal && PostDummyOnce();
  let src = "";

  async function PostDummyOnce() {
    if (!globalThis.submitOnce) {
      const { PUBLIC_UPLOAD_ENDPOINT } = await import("$env/static/public");
      const endpoint = PUBLIC_UPLOAD_ENDPOINT;

      // This code sends a dummy .txt file ONCE per session to a designated google drive folder via post request to the 'endpoint' (calls nodejs google cloud function to do this .... logic not here)
      // REASON: to circumvent 'coldstart' of google cloud function file submitter when user submits first file
      // UPDATE: DEC 21,2022: 'hydrating' the invisible iframe below with a google apps script (logic not detailed here), moves the dummy .txt file to a junk folder.
      // FUTURE GOAL: use google app script or google drive api to directly delete the files ... haven't been successful in creating a google app script to do this since the google cloud function is run by a 'google service account' (one which I created) and won't allow automated deletions ...

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
  title="google app script: moveNamedFilesToFolder"
  style="height: 0vh; width: 0vw"
  {src}
  frameborder="0"
/>
