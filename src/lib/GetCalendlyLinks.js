// this function called within an intersection observer that only observers once ... which is desired
export async function getCalendlyJSandCSS() {
  let script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.type = "text/javascript";
  document.head.appendChild(script);

  let link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export async function getCalendlyCSS() {
  let link = document.createElement("link");
  link.href = "https://assets.calendly.com/assets/external/widget.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export async function getCalendlyJS() {
  let script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.type = "text/javascript";
  document.head.appendChild(script);
}
