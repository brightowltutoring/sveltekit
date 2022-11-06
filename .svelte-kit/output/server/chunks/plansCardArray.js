const sampleHref = "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db";
function payUrl(session_type, payment_type) {
  return `https://calendly.com/thinksolve/${session_type}-${payment_type}?hide_gdpr_banner=1`;
}
const plansCardArray = [
  {
    card: 1,
    payNowUrl: payUrl("classico", "stripe"),
    payLaterUrl: payUrl("classico", "invoice"),
    buttonText: "Classico",
    cardTitle: "Classico",
    cardText: "Classic 1-on-1 session with smooth screen-sharing. Session notes/solutions on a personal URL available as a +2hr premium.",
    href: sampleHref
  },
  {
    card: 3,
    payNowUrl: payUrl("mock", "stripe"),
    payLaterUrl: payUrl("mock", "invoice"),
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
  plansCardArraySchools as a,
  plansCardArray as p
};
