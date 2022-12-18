import { c as create_ssr_component, e as escape, d as add_attribute } from "./index.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal = false } = $$props;
  let { bgTint = "bg-[rgba(0,0,0,0.4)]" } = $$props;
  let { body } = $$props;
  let container;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.bgTint === void 0 && $$bindings.bgTint && bgTint !== void 0)
    $$bindings.bgTint(bgTint);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  return `


<button class="${"z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center " + escape(showModal ? `${bgTint} ` : "hidden", true) + " overflow-y-scroll overflow-x-clip"}"${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</button>`;
});
export {
  Modal as M
};
