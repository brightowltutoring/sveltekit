// As of nov18 2022, dynamically importing css failed for dropzone.css when combining with InView.svelte; this seems to be a known bug with vite (https://github.com/vitejs/vite/issues/4237; I updated vite as well) and 'npm run prod' as things works fine on 'npm run dev'. Either way the code here is straightforward, vanilla way of achieving dynamic import of js/css should module bundlers fail awkwardly.

export function cssToHead(id = "dropzoneCSS", path = "/dropzone.css") {
  if (!document.getElementById(id)) {
    const element = document.createElement("link");
    element.id = id;
    element.href = path;
    element.rel = "stylesheet";
    document.head.appendChild(element);
  }
}
export function jsToHead(
  id = "calendlyJS",
  path = "external-website.com/calendly.js"
) {
  if (!document.getElementById(id)) {
    const element = document.createElement("script");
    element.id = id;
    element.src = path;
    element.type = "text/javascript";
    document.head.appendChild(element);
  }
}
