<!-- Calendly link widget begin -->
<svelte:head>
  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  />
  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
    async></script>
</svelte:head>
<a
  href=""
  on:click={() => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/d/d52-rxr-74f?hide_gdpr_banner=1&background_color=white&primary_color=2aa5d6",
    });
    return false;
  }}>Schedule time with me</a
>

<!-- <div
  class="calendly-inline-widget"
  data-url="https://calendly.com/d/d52-rxr-74f?hide_gdpr_banner=1&primary_color=ef2282"
  style="min-width:320px;height:630px;"
/> -->
