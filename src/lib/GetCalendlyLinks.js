export async function getCalendlyCSS() {
  let link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  //   link.type = "text/css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export async function getCalendlyJS() {
  let script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.type = "text/javascript";
  document.head.appendChild(script);
  // htmlHeader.appendChild(script);
}
