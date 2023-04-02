import{c as i,e as s,f as m,b as r,v as e}from"../../chunks/index3.js";import{D as w}from"../../chunks/DropzoneOpener.js";import{P as f}from"../../chunks/PlansSection.js";import{r as n,R as x,a as h}from"../../chunks/Reviews.js";import{B as b}from"../../chunks/BackgroundVideo.js";const u={code:`.edgeCardClick.svelte-1qmnmxj{position:absolute;top:0px;z-index:10;height:100%;width:4rem;border-radius:9999px
}`,map:null},$=i((t,a,l,d)=>(n.length,t.css.add(u),`

<section class="${"mt-16 flex overflow-x-scroll scroll-smooth rounded-xl bg-[#f0efef] py-5 scrollbar-hide dark:bg-[#312e44] "+s(a.class,!0)+" svelte-1qmnmxj"}"><div class="mx-10 flex gap-x-5 md:mx-20 lg:mx-40">
		${m(n,({name:c,title:p,date:g,body:v},o)=>`
			
			<div${r("id",`card_${o}`,0)} class="relative h-[70vh] w-[85vw] max-w-sm overflow-hidden overflow-y-scroll scroll-smooth rounded-xl bg-white p-5 px-10 shadow-md transition-shadow duration-300 ease-in-out scrollbar-hide hover:shadow-xl dark:bg-[#252333]"><a${r("href",`#card_${o+1}`,0)} aria-label="right horizontal scroll to next review card" class="edgeCardClick right-0 svelte-1qmnmxj"></a>
				<a${r("href",`#card_${o-1}`,0)} aria-label="left horizontal scroll to next review card" class="edgeCardClick left-0 svelte-1qmnmxj"></a>
				${e(x,"ReviewCreator").$$render(t,{title:p,name:c,date:g},{},{default:()=>`${s(v)}
				`})}
			</div>`)}</div></section>


`));const y={code:`.gradientTextColor.svelte-11yjqo2{background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#4f46e5 var(--tw-gradient-from-position);--tw-gradient-from-position:  ;--tw-gradient-to:rgb(79 70 229 / 0)  var(--tw-gradient-from-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:#000 var(--tw-gradient-to-position);--tw-gradient-to-position:  ;-webkit-background-clip:text;background-clip:text;color:transparent
}html.dark-mode .gradientTextColor.svelte-11yjqo2{--tw-gradient-from:#fca5a5 var(--tw-gradient-from-position);--tw-gradient-from-position:  ;--tw-gradient-to:rgb(252 165 165 / 0)  var(--tw-gradient-from-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-via-position:  ;--tw-gradient-to:rgb(255 255 255 / 0)  var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), #fff var(--tw-gradient-via-position), var(--tw-gradient-to);--tw-gradient-to:#fff var(--tw-gradient-to-position);--tw-gradient-to-position:  
}`,map:null},z=i((t,a,l,d)=>(t.css.add(y),`${e(b,"BackgroundVideo").$$render(t,{},{},{})}

<div class="grid grid-cols-1 gap-y-52 lg:gap-y-64"><a href="#step1" class="z-10 flex h-[60vh] items-center justify-center text-center">
		

		<div class="grid grid-rows-1"><div class="pb-4 font-Poppins text-6xl">Math, Physics
					<span class="gradientTextColor svelte-11yjqo2">... Online! </span></div>

				<button class="animate-bounce font-Nunito text-2xl font-thin">👇 get started </button></div></a>

	
	<section id="step1" class="grid scroll-my-20 place-content-center duration-500 hover:scale-105"><a href="#step2" class="pb-7 text-center font-Poppins text-5xl">
			<span class="gradientTextColor svelte-11yjqo2">1. Upload your homework </span></a>

		${e(w,"DropzoneOpener").$$render(t,{},{},{})}</section>

	
	<section id="step2" class="grid scroll-my-20 place-content-center duration-500"><a href="#reviews" class="pb-7 text-center font-Poppins text-5xl">
			<span class="gradientTextColor svelte-11yjqo2">2. Schedule a Session </span></a>

		${e(f,"PlansSection").$$render(t,{},{},{})}
		

		

		

		</section>

	
	<section id="reviews" class="mb-[200px] scroll-my-20 duration-500 sm:mb-[500px]"><a href="#top" class="flex w-full justify-center text-center font-Poppins text-5xl">
			<span class="gradientTextColor svelte-11yjqo2">3. Do Some Reading <span class="text-black">😎 </span></span></a>

		

		${e(h,"Reviews").$$render(t,{class:"hidden sm:block"},{},{})}

		${e($,"HorizontalScrollReviews").$$render(t,{class:"block sm:hidden"},{},{})}</section>
</div>`));export{z as default};
