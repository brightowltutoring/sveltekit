import { c as create_ssr_component, h as add_attribute, g as each, v as validate_component, e as escape } from "../../../chunks/index.js";
import "katex";
const Katex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayMode = false } = $$props;
  let output;
  let latex;
  if ($$props.displayMode === void 0 && $$bindings.displayMode && displayMode !== void 0)
    $$bindings.displayMode(displayMode);
  return `
<span style="${"display: none;"}"${add_attribute("this", latex, 0)}>${slots.default ? slots.default({}) : ``}</span>


<span${add_attribute("this", output, 0)}></span>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"}" integrity="${"sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"}" crossorigin="${"anonymous"}" data-svelte="svelte-9nuprp">`, ""}

${each(Array(40), (_, i) => {
    return `${validate_component(Katex, "K").$$render($$result, {}, {}, {
      default: () => {
        return `ax^2+bx+c=0`;
      }
    })}
  ${validate_component(Katex, "K").$$render($$result, { displayMode: true }, {}, {
      default: () => {
        return `ax^2+bx+c=0`;
      }
    })}

  ${validate_component(Katex, "K").$$render($$result, {}, {}, {
      default: () => {
        return `\\frac${escape("{ \\sqrt{3} }")}${escape(3)}`;
      }
    })}
  ${validate_component(Katex, "K").$$render($$result, {}, {}, {
      default: () => {
        return `\\sqrt${escape("{y}")}`;
      }
    })}

  ${validate_component(Katex, "K").$$render($$result, { displayMode: true }, {}, {
      default: () => {
        return `a\\sqrt${escape("{x}")}^2+bx+c=0`;
      }
    })}`;
  })}`;
});
export {
  Page as default
};
