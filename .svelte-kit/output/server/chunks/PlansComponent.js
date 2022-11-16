import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, d as add_attribute, j as each, p as createEventDispatcher } from "./index.js";
import { i as isDarkMode, e as elementColor } from "./store.js";
import { p as plansCardArray } from "./plansCardArray.js";
const browser = false;
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { once = false } = $$props;
  let { condition = true } = $$props;
  let { querySelectees = "div" } = $$props;
  let { action = () => {
    console.log("i c u div \u{1F441}\u{1FAE6}\u{1F441}");
  } } = $$props;
  let { margin = "0px" } = $$props;
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0)
    $$bindings.condition(condition);
  if ($$props.querySelectees === void 0 && $$bindings.querySelectees && querySelectees !== void 0)
    $$bindings.querySelectees(querySelectees);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  return ``;
});
function calendlyJSandCSStoHead() {
  console.log("\u{1F4C5}");
  if (!document.getElementById("calendlyJS")) {
    const calendlyJS = document.createElement("script");
    calendlyJS.id = "calendlyJS";
    calendlyJS.src = "https://assets.calendly.com/assets/external/widget.js";
    calendlyJS.type = "text/javascript";
    document.head.appendChild(calendlyJS);
  }
  if (!document.getElementById("calendlyCSS")) {
    const calendlyCSS = document.createElement("link");
    calendlyCSS.id = "calendlyCSS";
    calendlyCSS.href = "https://assets.calendly.com/assets/external/widget.css";
    calendlyCSS.rel = "stylesheet";
    document.head.appendChild(calendlyCSS);
  }
}
const HydratePlansCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let conditionsForObservation = browser;
  return `


${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render(
    $$result,
    {
      condition: conditionsForObservation,
      querySelectees: "plans-card",
      once: true,
      action: calendlyJSandCSStoHead,
      margin: "200px"
    },
    {},
    {}
  )}`;
});
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
const PlansComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { plansCards = plansCardArray } = $$props;
  let { hasTransition = true } = $$props;
  let ready = !hasTransition;
  if ($$props.plansCards === void 0 && $$bindings.plansCards && plansCards !== void 0)
    $$bindings.plansCards(plansCards);
  if ($$props.hasTransition === void 0 && $$bindings.hasTransition && hasTransition !== void 0)
    $$bindings.hasTransition(hasTransition);
  return `${ready ? `${validate_component(HydratePlansCard, "HydratePlansCard").$$render($$result, {}, {}, {})}` : ``}


<div id="${"elem"}" class="${"grid grid-cols-1 sm:grid-cols-dynamic sm:px-4 px-[7%] md:m-7"}">${each(plansCards, (item, i) => {
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
  })}</div>





`;
});
export {
  IntersectionObserver_1 as I,
  PlansComponent as P
};
