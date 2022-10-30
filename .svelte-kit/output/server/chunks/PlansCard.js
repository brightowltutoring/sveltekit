import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute, j as each } from "./index.js";
import { a as isDarkMode, e as elementColor } from "./store.js";
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
  return `<div class="${"plansCard cardIdentifier block shadow-md hover:scale-105 " + escape($isDarkMode ? "hover:shadow-xl" : "hover:shadow-lg", true) + " rounded-xl w-[10] min-w-fit p-10 m-1 text-center duration-300 group"}"${add_attribute("style", `background:${$elementColor}`, 0)}><p class="${"py-6 text-5xl font-Poppins"}">${slots.cardTitle ? slots.cardTitle({}) : `Classico`}</p>

  ${each(payButtons, (button) => {
    return `<button class="${"" + escape(buttonColor[card], true) + " " + escape(btnColorHover, true) + " " + escape(button.opacityTW, true) + " hover:shadow-md hover:scale-105 duration-200 rounded-md hover:rounded-lg p-4 m-1 group-hover:bg-opacity-80 text-xl text-white"}">${slots.buttonText ? slots.buttonText({}) : `${escape(button.text)}`}
      </button>`;
  })}

  <div class="${"py-4"}">${slots.cardText ? slots.cardText({}) : `default cardText`}</div></div>`;
});
export {
  PlansCard as P
};
