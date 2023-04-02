import{c as t,b as n,a as c,v as l}from"./index3.js";import{s as d}from"./store.js";import{PUBLIC_UPLOAD_ENDPOINT as p}from"./public.js";const m={code:"svg.svelte-16axcyv path.svelte-16axcyv{fill:black}html.dark-mode svg.svelte-16axcyv.svelte-16axcyv{filter:invert(0.9)}",map:null},u=t((e,o,a,r)=>(e.css.add(m),'<svg width="150" height="150" viewBox="0 0 1024 1024" class="svelte-16axcyv"><path d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z" class="svelte-16axcyv"></path></svg>')),b=t((e,o,a,r)=>`
<noscript><iframe name="dummyframe" id="dummyframe" style="display: none;" title="this iframe serves as a janky solution so that the page doesnt redirect after form submission"></iframe>

	
	<form target="dummyframe" enctype="multipart/form-data" method="POST"${n("action",["/api/submit-homework","/api/testPost",p][0],0)} class="flex flex-col items-center justify-center gap-5">
		<label for="file" class="flex items-center justify-center text-lg sm:w-[60vw]"><input class="hidden px-5" type="file" name="file" id="file" multiple></label>
		<label tabindex="-1" for="submit" class="border-1 group rounded-lg bg-red-800 p-3 text-white transition-colors duration-500 hover:bg-blue-400 focus:animate-wave focus:bg-emerald-500"><span class="block group-focus:hidden">submit</span>
			<span class="hidden group-focus:block">sent</span>
			<input class="hidden" type="submit" value="Submit" id="submit"></label></form></noscript>`);const v={code:":root{--light-box-shadow-color:#ddd;--dark-box-shadow-color:#1d1c43}.submitArea.svelte-wqz77j{box-shadow:inset 0 -10px 10px var(--light-box-shadow-color);border-radius:50px;border-color:transparent;background-color:transparent;cursor:pointer}html.dark-mode .submitArea.svelte-wqz77j{box-shadow:inset 0 -10px 10px var(--dark-box-shadow-color)}",map:null},w=t((e,o,a,r)=>{let s;return s=c(d,i=>i),e.css.add(v),s(),`<button aria-label="Upload Button Area" class="submitArea mx-auto flex h-[60vh] w-[65vw] flex-wrap items-center justify-center overflow-scroll backdrop-blur-3xl sm:w-[60vw] svelte-wqz77j">
	
	<label for="file" class="w-[60vw]"><div class="flex w-[100%] flex-col items-center justify-center"><div class="animate-pulse">${l(u,"IconUpload").$$render(e,{},{},{})}</div>

			${l(b,"NoScriptSubmitHomework").$$render(e,{},{},{})}</div></label>
</button>`});export{w as D};
