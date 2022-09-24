<script>
  import CalendlyJsandCss from "$lib/CalendlyJsandCSS.svelte";

  function gotoCalendlyPage(slug) {
    Calendly.initPopupWidget({
      url: `https://calendly.com/brightowltutoring/${slug}?hide_gdpr_banner=1`,
    });
  }
</script>

<CalendlyJsandCss />

<div style="font-size:50pt; text-align:center">📚</div>

<div class="flex justify-center">
  <!-- <button
    type="button"
    class="button"
    on:click={() => gotoCalendlyPage("webinowl-school")}
    ><b> Webinowl </b>
  </button>

  <button
    type="button"
    class="button"
    on:click={() => gotoCalendlyPage("mockowl-school")}
    ><b> Mockowl </b>
  </button> -->
</div>

<style>
  .button,
  .button2 {
    border: none;
    border-bottom: 1px solid #bbb;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 22px;
    /* font-weight: bold; */
    font-family: "Nunito", sans-serif;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 6px;
    transition-duration: 0.2s;
  }
  .button:hover,
  .button2:hover {
    background-color: rgb(39, 69, 131);
    color: rgb(201, 228, 15);
  }

  .button {
    color: rgb(39, 69, 131);
    background-color: hsl(0, 0%, 97%);
  }
  .button2 {
    color: salmon;
    background-color: hsl(0, 0%, 97%);
  }
</style>
