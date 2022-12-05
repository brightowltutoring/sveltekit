import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, j as each, p as createEventDispatcher, v as validate_component } from "./index.js";
import { i as isDarkMode, e as elementColor } from "./store.js";
import { I as InView, j as jsToHead, c as cssToHead } from "./utils.js";
const PlansCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isDarkMode, $$unsubscribe_isDarkMode;
  let $elementColor, $$unsubscribe_elementColor;
  $$unsubscribe_isDarkMode = subscribe(isDarkMode, (value) => $isDarkMode = value);
  $$unsubscribe_elementColor = subscribe(elementColor, (value) => $elementColor = value);
  let { payNowUrl = "" } = $$props;
  let { payLaterUrl = "" } = $$props;
  const payButtons = [
    {
      resetter: false,
      url: payNowUrl,
      opacityTW: "bg-opacity-100",
      text: "Pay Now"
    },
    {
      resetter: false,
      url: payLaterUrl,
      opacityTW: "bg-opacity-70",
      text: "Pay Later"
    }
  ];
  let { btnColorHover = "" } = $$props;
  let { card } = $$props;
  let buttonColor = {
    1: "bg-[rgb(244,77,77)]",
    2: "bg-[rgb(254,164,92)]",
    3: "bg-[rgb(45,165,214)]"
  };
  if ($$props.payNowUrl === void 0 && $$bindings.payNowUrl && payNowUrl !== void 0)
    $$bindings.payNowUrl(payNowUrl);
  if ($$props.payLaterUrl === void 0 && $$bindings.payLaterUrl && payLaterUrl !== void 0)
    $$bindings.payLaterUrl(payLaterUrl);
  if ($$props.btnColorHover === void 0 && $$bindings.btnColorHover && btnColorHover !== void 0)
    $$bindings.btnColorHover(btnColorHover);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  $$unsubscribe_isDarkMode();
  $$unsubscribe_elementColor();
  return `<plans-card class="${"cardIdentifier block shadow-md hover:scale-105 " + escape($isDarkMode ? "hover:shadow-xl" : "hover:shadow-lg", true) + " rounded-xl m-1 p-7 text-center duration-300 group"}"${add_attribute("style", `background:${$elementColor}`, 0)}><p class="${"text-4xl font-Poppins py-5 text-center"}">${slots.cardTitle ? slots.cardTitle({}) : `Classico`}</p>

  ${each(payButtons, (button) => {
    return `<button class="${"" + escape(buttonColor[card], true) + " " + escape(btnColorHover, true) + " " + escape(button.opacityTW, true) + " hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white"}">${slots.buttonText ? slots.buttonText({}) : `${escape(button.text)}`}
      </button>`;
  })}

  <div class="${"py-4"}">${slots.cardText ? slots.cardText({}) : `default cardText`}</div></plans-card>`;
});
const sampleHref = "https://invoice.stripe.com/i/acct_1FViRDGlC2pXHzlt/live_YWNjdF8xRlZpUkRHbEMycFhIemx0LF9NU1ljQlpTa1hvSEhnNlkySjhrRmxRWVhQQmhrendpLDU0MTA5ODkz0200eSUPP97h?s=db";
const color = {
  red: "f34d4e",
  yellow: "fea45c",
  blue: "2aa5d6"
};
function payUrl(session_type, payment_type, color2) {
  return `https://calendly.com/thinksolve/${session_type}-${payment_type}?hide_gdpr_banner=1&primary_color=${color2}`;
}
const plansCardArray = [
  {
    card: 1,
    payNowUrl: payUrl("classico", "stripe", color.red),
    payLaterUrl: payUrl("classico", "invoice", color.red),
    buttonText: "Classico",
    cardTitle: "Classico",
    cardText: "Classic 1-on-1 session with smooth screen-sharing. Digital session notes available as a +1hr premium.",
    href: sampleHref
  },
  {
    card: 3,
    payNowUrl: payUrl("mock", "stripe", color.blue),
    payLaterUrl: payUrl("mock", "invoice", color.blue),
    buttonText: "Mock",
    cardTitle: "Mock",
    cardText: " Get test ready. We provide a mock test session with live support/ answers to completed questions. Digital solution key available as a +2hr premium.",
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
const PlansComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dispatch = createEventDispatcher();
  let { plansCards = plansCardArray } = $$props;
  let { noTransition = false } = $$props;
  let ready = noTransition;
  if ($$props.plansCards === void 0 && $$bindings.plansCards && plansCards !== void 0)
    $$bindings.plansCards(plansCards);
  if ($$props.noTransition === void 0 && $$bindings.noTransition && noTransition !== void 0)
    $$bindings.noTransition(noTransition);
  return `${validate_component(InView, "InView").$$render(
    $$result,
    {
      once: true,
      margin: "200px",
      onview: () => {
        console.log("\u{1F4C5}");
        jsToHead("calendlyJS", "https://assets.calendly.com/assets/external/widget.js");
        cssToHead("calendlyCSS", "https://assets.calendly.com/assets/external/widget.css");
      }
    },
    {},
    {
      default: () => {
        return `
  <plans-section${add_attribute("use", dispatch("boop", { plansCardArray, message: "n i boop" }), 0)} class="${"grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7"}">
    ${each(plansCards, (item, i) => {
          return `${ready ? `<div>${validate_component(PlansCard, "PlansCard").$$render(
            $$result,
            {
              card: item.card,
              payNowUrl: item.payNowUrl,
              payLaterUrl: item.payLaterUrl
            },
            {},
            {
              cardText: () => {
                return `<span slot="${"cardText"}">${escape(item.cardText)}
            </span>`;
              },
              cardTitle: () => {
                return `<span slot="${"cardTitle"}">${escape(item.cardTitle)} </span>`;
              },
              default: () => {
                return `
            

            
          `;
              }
            }
          )}
        </div>` : ``}`;
        })}</plans-section>`;
      }
    }
  )}


`;
});
export {
  PlansComponent as P
};
