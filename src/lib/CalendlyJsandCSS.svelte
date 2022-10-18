<svelte:head>
  <!-- <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  /> -->

  <!-- loading non-critical css this way is way faster on lighthouse!  ... however with svelte it seems to bug out at times...notably if i dont import this component inside the screenshare page, the website crashes -->
  <script>
    window.addEventListener("load", () => {
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    });
  </script>
  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
    async></script>
</svelte:head>
