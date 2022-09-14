import { c as create_ssr_component } from "./index.js";
import katex from "katex";
const Katex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let katexString;
  let { d = false } = $$props;
  let { m } = $$props;
  const options = { displayMode: d, throwOnError: false };
  if ($$props.d === void 0 && $$bindings.d && d !== void 0)
    $$bindings.d(d);
  if ($$props.m === void 0 && $$bindings.m && m !== void 0)
    $$bindings.m(m);
  katexString = katex.renderToString(m, options);
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"}" integrity="${"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"}" crossorigin="${"anonymous"}" data-svelte="svelte-bnfb8z">`, ""}

<!-- HTML_TAG_START -->${katexString}<!-- HTML_TAG_END -->`;
});
export {
  Katex as K
};
