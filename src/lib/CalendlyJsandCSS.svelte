<!-- TODO: experimental code -->
<!-- <script>
  function getCalendlyCSS() {
    let link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  function getCalendlyJS() {
    let script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.css";
    script.type = "text/javascript";
    document.head.appendChild(script);
    // htmlHeader.appendChild(script);
  }
</script> -->

<!-- TODO: put this back! -->

<svelte:head>
  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  />

  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
    async
  ></script>
</svelte:head>
