<script>
  import { scale } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  import CalendlyJsandCss from "$lib/CalendlyJsandCSS.svelte";

  let button1;
  let button2;
  function gotoCalendlyPage(slug) {
    Calendly.initPopupWidget({
      url: `https://calendly.com/thinksolve/${slug}?hide_gdpr_banner=1`,
    });
  }
</script>

<CalendlyJsandCss />

<div style="font-size:50pt; text-align:center">📚</div>

<div class="flex justify-center">
  {#key button1}
    <button
      in:scale={{ duration: 800, easing: elasticOut }}
      type="button"
      class="button"
      on:click={() => {
        button1 = !button1;
        gotoCalendlyPage("classico-invoice");
      }}
      ><b> Classico </b>
    </button>
  {/key}

  {#key button2}
    <button
      in:scale={{ duration: 800, easing: elasticOut }}
      type="button"
      class="button"
      on:click={() => {
        button2 = !button2;
        gotoCalendlyPage("mock-invoice");
      }}
      ><b> Mock </b>
    </button>
  {/key}
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
