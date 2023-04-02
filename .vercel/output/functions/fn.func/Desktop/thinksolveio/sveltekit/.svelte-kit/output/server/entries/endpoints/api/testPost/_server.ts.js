async function i(t){const e=(await t.request.formData()).getAll("file").map(a=>a.name).join(", ");console.log(e);const s=e;return new Response(JSON.stringify(s),{status:303})}export{i as POST};
