import { c as create_ssr_component } from "./index.js";
const CalendlyJsandCSS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1787kfc_START --><link href="${"https://assets.calendly.com/assets/external/widget.css"}" rel="${"stylesheet"}"><script src="${"https://assets.calendly.com/assets/external/widget.js"}" type="${"text/javascript"}" async><\/script><!-- HEAD_svelte-1787kfc_END -->`, ""}`;
});
const sampleHref = "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db";
const plansCardArray = [
  {
    card: 1,
    payNowUrl: "https://calendly.com/d/d52-rxr-74f?hide_gdpr_banner=1&primary_color=2aa5d6",
    payLaterUrl: "https://calendly.com/thinksolve/classico-invoice?hide_gdpr_banner=1",
    buttonText: "Classico",
    cardTitle: "Classico",
    cardText: "Classic 1-on-1 session with smooth screen-sharing. Session notes/solutions on a personal URL available as a +2hr premium.",
    href: sampleHref
  },
  {
    card: 3,
    payNowUrl: "https://calendly.com/d/dyv-xc8-bx6?hide_gdpr_banner=1&primary_color=fea45c",
    payLaterUrl: "https://calendly.com/thinksolve/mock-invoice?hide_gdpr_banner=1",
    buttonText: "Mock",
    cardTitle: "Mock",
    cardText: " Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key on a personal URL available as a +2hr premium.",
    href: sampleHref
  },
  {
    card: 2,
    payNowUrl: "https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",
    payLaterUrl: "https://calendly.com/thinksolve/custom?hide_gdpr_banner=1",
    buttonText: "Custom",
    cardTitle: "Custom",
    cardText: `Pick the first session date/time. Describe the remaining quantity of sessions + desired times/dates (check the calendar for availability), and we will send you a custom invoice. `,
    href: sampleHref
  }
];
const plansCardArraySchools = [
  {
    card: 2,
    schoolUrl: "https://calendly.com/thinksolve/school-classico?hide_gdpr_banner=1",
    buttonText: "Classico",
    cardTitle: "Classico",
    cardText: "Classic 1-on-1 session with smooth screen-sharing. Session notes/solutions on a personal URL available as a +2hr premium.",
    href: sampleHref
  },
  {
    card: 1,
    schoolUrl: "https://calendly.com/thinksolve/school-mock?hide_gdpr_banner=1",
    buttonText: "Mock",
    cardTitle: "Mock",
    cardText: " Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key on a personal URL available as a +2hr premium.",
    href: sampleHref
  }
];
export {
  CalendlyJsandCSS as C,
  plansCardArraySchools as a,
  plansCardArray as p
};
