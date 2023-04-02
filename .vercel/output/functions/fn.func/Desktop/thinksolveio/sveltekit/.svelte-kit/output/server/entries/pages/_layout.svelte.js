import{c as w,a as l,b as k,v,e as x,d as j,g as R,f as U,m as oe,s as se}from"../../chunks/index3.js";import{L as re}from"../../chunks/LoginCard.js";import{M as L}from"../../chunks/Modal.js";import ae from"dropzone";import{PUBLIC_UPLOAD_ENDPOINT as le}from"../../chunks/public.js";import{s as T,c as Z,n as q,a as H,r as S,i as B,b as V,d as ne,e as ie,f as de,g as ce,l as ue}from"../../chunks/store.js";import{p as me,i as pe}from"../../chunks/utils.js";import{I as be,s as he}from"../../chunks/index4.js";import{p as z}from"../../chunks/stores.js";import"ua-parser-js";const ve=w((e,t,o,$)=>{let s,c;c=l(T,a=>s=a);let r="";async function n(){if(!globalThis.submitOnce){const{PUBLIC_UPLOAD_ENDPOINT:a,PUBLIC_GOOGLE_APP_SCRIPT:i}=await import("../../chunks/public.js");me("foo"),setTimeout(()=>r=i,5e3),globalThis.submitOnce=!0}}return s&&n(),c(),`<iframe title="Executes 'moveNamedFilesToFolder' Google App script via iFrame src" style="height: 0vh; width: 0vw"${k("src",r,0)} frameborder="0"></iframe>`});const fe={code:"svg.svelte-obwc9v path.svelte-obwc9v{fill:url(#GradHere)}html.dark-mode svg.svelte-obwc9v.svelte-obwc9v{filter:invert(0.9)}",map:null},ge=w((e,t,o,$)=>(e.css.add(fe),`
<svg width="150" height="150" viewBox="0 0 1024 1024" class="svelte-obwc9v"><path d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z" class="svelte-obwc9v"></path><defs><linearGradient id="GradHere"><stop offset="5%" stop-color="#F60"></stop><stop offset="95%" stop-color="#FF6"></stop></linearGradient></defs></svg>`));const $e={code:`.dropzone .dz-preview.dz-image-preview{background-color:transparent !important}:root{--light-box-shadow-color:#ddd;--dark-box-shadow-color:#1d1c43;--box-shadow-inset:10px}form.svelte-1beasub{box-shadow:inset 0 calc(-1 * var(--box-shadow-inset)) var(--box-shadow-inset)
			var(--light-box-shadow-color);border-radius:50px;border-color:transparent;background-color:transparent}html.dark-mode form.svelte-1beasub{box-shadow:inset 0 calc(-1 * var(--box-shadow-inset)) var(--box-shadow-inset)
			var(--dark-box-shadow-color)}`,map:null};function xe(){globalThis.popUpOnceBoolean||(setTimeout(()=>{document.querySelector(".dropzone").dispatchEvent(new CustomEvent("click"))},75),globalThis.popUpOnceBoolean=!0)}const we=w((e,t,o,$)=>{let s,c;c=l(T,d=>s=d);let{textSizeTW:r="text-3xl"}=t,{dimensionsTW:n="w-[65vw] sm:w-[60vw] h-[60vh]"}=t,{brightnessTW:a="brightness-100"}=t,i;async function h(d){console.log("drop it like its 🌶️"),i=new ae(d,{url:le,acceptedFiles:".heic,.jpeg,.jpg,.png,.txt,.pdf,.docx,.doc"}),g()}function g(){let d=[];i.on("error",u=>u.accepted&&d.push(u)),i.on("queuecomplete",()=>{setTimeout(()=>j(T,s=!1,s),1e3)}),window?.addEventListener("online",()=>{if(d.length>0)for(const u of d)i.processFile(u),u.previewElement.querySelector(".dz-error-mark").style.visibility="hidden",u.previewElement.querySelector(".dz-error-message").style.visibility="hidden"})}return t.textSizeTW===void 0&&o.textSizeTW&&r!==void 0&&o.textSizeTW(r),t.dimensionsTW===void 0&&o.dimensionsTW&&n!==void 0&&o.dimensionsTW(n),t.brightnessTW===void 0&&o.brightnessTW&&a!==void 0&&o.brightnessTW(a),e.css.add($e),s&&xe(),c(),`${v(ve,"PostDummyOnce").$$render(e,{},{},{})}


${v(be,"InView").$$render(e,{single:!0,onview:d=>h(d),once:!0,margin:"0px"},{},{default:()=>`<form method="post" class="${"dropzone flex flex-wrap items-center justify-center backdrop-blur-3xl "+x(a,!0)+" "+x(r,!0)+" "+x(n,!0)+" group mx-auto overflow-y-scroll svelte-1beasub"}">
		<div class="dz-message font-Nunito group-hover:animate-pulse" data-dz-message>
			${v(ge,"IconUploadGradient").$$render(e,{},{},{})}</div></form>`})}`}),ke=w((e,t,o,$)=>{let s,c,r,n,a,i,h,g;c=l(Z,b=>s=b),n=l(q,b=>r=b),i=l(H,b=>a=b),g=l(T,b=>h=b);const d=R("isIOS");let u,p;do u=!0,p=`${v(L,"Modal").$$render(e,{showModal:s,bgTW:"backdrop-blur-3xl"},{},{default:()=>`<ul class="flex flex-col gap-y-2 bg-gradient-to-r from-teal-700 via-rose-700 to-pink-700 bg-clip-text text-center font-Poppins text-3xl text-transparent dark:from-teal-200 dark:via-rose-300 dark:to-pink-200 sm:text-5xl"><li>Email:</li>
		<li class="p-5">thinksolve.io@gmail.com</li></ul>`})}

${v(L,"Modal").$$render(e,{all:!0,showModal:d&&r,bgTW:"text-white bg-gradient-to-br from-[#6c79f4] to-rose-400"},{},{default:()=>`<ul class="flex flex-col gap-y-8 p-10 font-Poppins text-3xl sm:text-6xl"><li><div class="text-6xl">1.</div>
			Open Safari
		</li>
		<li><div class="text-6xl">2.</div>
			<div class="flex flex-row items-center justify-center gap-x-2 pt-2"><span>Click share icon</span>
				<img class="h-7 w-7 -translate-y-1 invert" src="/safari-share-icon.png" alt="safari share icon"></div></li>

		<li class="text-black"><div class="text-6xl">3.</div>
			Click &#39;Add to Home Screen&#39; 🚀
		</li></ul>`})}


${v(L,"Modal").$$render(e,{bgTW:"backdrop-blur-md",showModal:a},{showModal:b=>{a=b,u=!1}},{default:()=>`${v(re,"LoginCard").$$render(e,{},{},{})}`})}


${v(L,"Modal").$$render(e,{transitionsOff:!0,bgTW:"bg-[rgba(0,0,0,0.1)]",showModal:h},{showModal:b=>{h=b,u=!1}},{default:()=>`${v(we,"Dropzone").$$render(e,{textSizeTW:"text-6xl",dimensionsTW:"w-[80vw] h-[85vh]",brightnessTW:"brightness-95"},{},{})}`})}`;while(!u);return c(),n(),i(),g(),p}),_e=w((e,t,o,$)=>{let s,c,r,n;return c=l(z,a=>s=a),n=l(S,a=>r=a),c(),n(),`${e.head+=`<!-- HEAD_svelte-jkhb8h_START -->${s.status===404?`${e.title="<title>Oops 💩</title>",""}`:(()=>{let a=s.route.id?.slice(1);return`

		${a===""?`${e.title=`<title>${x(r.home.title)}</title>`,""}

			<!-- HTML_TAG_START -->${r.home.meta}<!-- HTML_TAG_END -->`:`${U(Object.keys(r).slice(1),i=>{let h=r[i].title;return`

				${a?.startsWith(i)?`${e.title=`<title>${x(h)}</title>`,""}

					${r[i].meta?`<!-- HTML_TAG_START -->${r[i].meta}<!-- HTML_TAG_END -->`:""}`:""}`})}`}`})()}<!-- HEAD_svelte-jkhb8h_END -->`,""}`});let C=24;const Te=w((e,t,o,$)=>`<svg aria-label="Sun" id="lightIcon"${k("height",C,0)}${k("width",C,0)} viewBox="${"0 0 "+x(8*C,!0)+" "+x(8*C,!0)}"><path fill="rgb(247,247,247)" d="M49.828 91.317c0 22.662 18.393 41.054 41.054 41.054 22.662 0 41.054-18.392 41.054-41.054 0-22.661-18.392-41.053-41.054-41.053-22.661 0-41.054 18.392-41.054 41.053Zm49.265 82.108v-16.421c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.211v16.421c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.211Zm0-147.794V9.21c0-4.516-3.695-8.211-8.21-8.211-4.517 0-8.211 3.695-8.211 8.21v16.422c0 4.516 3.694 8.211 8.21 8.211 4.516 0 8.211-3.695 8.211-8.21ZM8.774 99.528h16.422c4.516 0 8.21-3.695 8.21-8.21 0-4.516-3.694-8.211-8.21-8.211H8.774c-4.515 0-8.21 3.695-8.21 8.21 0 4.516 3.695 8.211 8.21 8.211Zm147.795 0h16.421c4.516 0 8.211-3.695 8.211-8.21 0-4.516-3.695-8.211-8.211-8.211h-16.421c-4.516 0-8.211 3.695-8.211 8.21 0 4.516 3.695 8.211 8.211 8.211Zm-126.61 41.136c-3.203 3.203-3.203 8.457 0 11.578 3.201 3.202 8.456 3.202 11.576 0l8.704-8.704c3.202-3.202 3.202-8.457 0-11.577-3.202-3.12-8.457-3.202-11.577 0l-8.704 8.703ZM131.525 39.097c-3.202 3.202-3.202 8.457 0 11.577 3.202 3.202 8.457 3.202 11.577 0l8.703-8.703c3.203-3.202 3.203-8.457 0-11.577-3.202-3.203-8.457-3.203-11.577 0l-8.703 8.703Zm-89.99-8.704c-3.203-3.202-8.458-3.202-11.578 0-3.202 3.203-3.202 8.458 0 11.578l8.704 8.703c3.202 3.202 8.457 3.202 11.577 0 3.12-3.202 3.202-8.457 0-11.577l-8.703-8.704Zm101.567 101.568c-3.202-3.202-8.457-3.202-11.577 0-3.202 3.202-3.202 8.457 0 11.577l8.703 8.704c3.202 3.202 8.457 3.202 11.577 0 3.12-3.203 3.203-8.458 0-11.578l-8.703-8.703Z"></path></svg>`);let F=24;const Me=w((e,t,o,$)=>`


<svg aria-label="Moon" id="darkIcon"${k("height",F,0)}${k("width",F,0)}><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1Z"></path></svg>`),ye=w((e,t,o,$)=>{let s,c;return c=l(B,r=>s=r),c(),`${e.head+=`<!-- HEAD_svelte-toqe7h_START --><script>// document.documentElement.classList.add(String(initialTheme())); // one liner not liked by lighthouse

		initialTheme() === ''
			? document.documentElement.classList.remove('dark-mode')
			: document.documentElement.classList.add('dark-mode');

		function initialTheme() {
			if (sessionStorage.getItem('isDarkMode') === 'true') return 'dark-mode';
			if (sessionStorage.getItem('isDarkMode') === 'false') return '';
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark-mode';
			return '';
		}
	<\/script><!-- HEAD_svelte-toqe7h_END -->`,""}






<main class="fadeInFromNone px-2"><button><div>${s?`${v(Te,"IconSun").$$render(e,{},{},{})}`:`${v(Me,"IconMoon").$$render(e,{},{},{})}`}</div></button></main>`}),Le=w((e,t,o,$)=>{let s,c,r,n,a,i;s=l(H,f=>f),c=l(T,f=>f),n=l(z,f=>r=f),i=l(V,f=>a=f);let{href:h}=t,{name:g}=t,{routes:d}=t,{btnColorHover:u}=t,{icon:p}=t,{navIconClicked:b=!1}=t;t.href===void 0&&o.href&&h!==void 0&&o.href(h),t.name===void 0&&o.name&&g!==void 0&&o.name(g),t.routes===void 0&&o.routes&&d!==void 0&&o.routes(d),t.btnColorHover===void 0&&o.btnColorHover&&u!==void 0&&o.btnColorHover(u),t.icon===void 0&&o.icon&&p!==void 0&&o.icon(p),t.navIconClicked===void 0&&o.navIconClicked&&b!==void 0&&o.navIconClicked(b);let _,M;do{_=!0;for(let f in d)d[f].isCurrent=d[f].href===r.url.pathname;M=`


<a data-sveltekit-preload-data${k("href",h,0)} class="${"block px-2 py-1 font-Nunito font-thin duration-100 ease-in hover:rounded "+x(!a&&u,!0)}">
	<div class="hidden h-[50px] w-[50px] flex-col items-center justify-between pwa:flex">${v(p||oe,"svelte:component").$$render(e,{navIconClicked:b},{navIconClicked:f=>{b=f,_=!1}},{})}
		<span class="text-center text-xs">${x(g)}</span></div>
	
	<div class="text-2xl md:text-xl pwa:hidden">${x(g)}</div>
	</a>`}while(!_);return s(),c(),n(),i(),M}),Ce=w((e,t,o,$)=>{let s,c,r,n,a,i,h,g,d,u,p,b,_,M,f,A,O,E,N;c=l(ne,m=>s=m),r=l(q,m=>m),a=l(S,m=>n=m),h=l(ie,m=>i=m),d=l(B,m=>g=m),p=l(de,m=>u=m),_=l(ce,m=>b=m),f=l(T,m=>M=m),O=l(H,m=>A=m);const Y=!R("isIOS")&&"hidden";let y="",W=0,P=he(1,{stiffness:.1,damping:.25});N=l(P,m=>E=m);let I,G;do I=!0,s<10&&(y="bottom-0 backdrop-blur-3xl md:top-0 md:backdrop-blur-none"),s>40&&u>10&&(y="backdrop-blur-3xl duration-200"),s>400&&u>10&&(y="bottom-0 translate-y-20 md:top-0 md:-translate-y-20 backdrop-blur-3xl duration-200"),u<-100&&s!==0&&(y="bottom-0 md:top-0 backdrop-blur-3xl duration-500"),i&&!pe()&&(W=g?.75:0,P.set(1+.5*Math.sin(s))),j(S,n.login.name=i?"🚀":"Login",n),G=`



<nav class="${"fixed bottom-0 z-50 w-full ease-in md:top-0 md:h-16 md:px-[7%] md:pb-16 md:pt-4 pwa:bottom-0 pwa:translate-y-0 "+x(y,!0)}"><logo-and-navbar class="flex w-full items-center justify-center gap-x-32 md:justify-between"><a href="/" class="hidden p-2 font-Poppins text-xl transition-transform selection:bg-transparent hover:scale-110 active:text-red-600 md:block md:translate-x-3 md:translate-y-[0.1rem] md:text-[min(5.5vw,40px)]">THINKSOLVE
			</a>

		
		
		<ul class="grid w-full grid-flow-col place-items-center gap-1 overflow-y-hidden overflow-x-scroll rounded-md bg-gradient-to-r from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-red-200 p-2 text-xl scrollbar-hide dark:to-[rgb(37,35,91)] md:ml-24 md:w-auto md:rounded-xl md:p-1"><li class="${"pwa:hidden "+x(Y,!0)}"><button class="${"px-3 py-1 font-Nunito text-2xl font-thin duration-300 hover:rounded hover:shadow-lg md:text-xl "+x(b,!0)+" border-b-1 rounded duration-200 hover:bg-indigo-400 hover:text-white active:animate-pulse"}">App
				</button></li>

			${U(Object.keys(n).slice(1,5),m=>{let{href:D,name:J,icon:K,isCurrent:Q}=n[m],X=D=="/homework"&&M||D=="/login"&&A||Q,ee=m=="login"&&i&&`transform:scale(${E}); filter:hue-rotate(${W}turn)`;return`
				
				

				<li${k("style",`${ee}`,0)}>

					${v(Le,"Navitem").$$render(e,{navIconClicked:X,href:D,icon:K,name:J,btnColorHover:"hover:bg-red-300",routes:n},{routes:te=>{n=te,I=!1}},{})}
				</li>`})}

			<li class="translate-y-1 scale-125 py-2 md:scale-100">
				

				${v(ye,"LightDarkMode").$$render(e,{},{},{})}</li></ul></logo-and-navbar></nav>

`;while(!I);return c(),r(),a(),h(),d(),p(),_(),f(),O(),N(),G}),Ie=w((e,t,o,$)=>{let{contactLinkClicked:s=!1}=t;return t.contactLinkClicked===void 0&&o.contactLinkClicked&&s!==void 0&&o.contactLinkClicked(s),`<div class="mt-20 mb-10 flex flex-row items-center justify-center gap-x-1 text-sm pwa:mb-3"><span class="bg-gradient-to-l from-blue-500 to-pink-600 bg-clip-text text-transparent"><a data-sveltekit-preload-data href="/faq" class="pwa:hidden">faq   |  </a>
		<span id="contactLink">contact </span></span></div>

`}),Fe=w((e,t,o,$)=>{let s,c,r,n,a,i;s=l(ue,p=>p),c=l(V,p=>p),n=l(z,p=>r=p),i=l(Z,p=>a=p);let{data:h}=t;const{isIOS:g}=h;se("isIOS",g),t.data===void 0&&o.data&&h!==void 0&&o.data(h);let d,u;do d=!0,u=`


${e.head+='<!-- HEAD_svelte-16z919h_START --><link rel="manifest" href="/manifest.json"><script src="https://meet.jit.si/external_api.js" defer><\/script><!-- HEAD_svelte-16z919h_END -->',""}

${v(_e,"Seo").$$render(e,{},{},{})}
${v(ke,"GlobalModals").$$render(e,{},{},{})}

<main class="flex min-h-screen flex-col">${v(Ce,"Navbar").$$render(e,{},{},{})}

	<div class="px-[5%] pt-32 md:block">${$.default?$.default({}):""}</div>

	

	${["/classroom","/pwa-home"].includes(r.route?.id??"")?"":`${v(Ie,"Footer").$$render(e,{contactLinkClicked:a},{contactLinkClicked:p=>{a=p,d=!1}},{})}`}</main>`;while(!d);return s(),c(),n(),i(),u});export{Fe as default};
