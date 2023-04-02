import{c as y,s as x,v as f,m as v}from"./index3.js";let u="",_=u;const h={base:u,assets:_};function C(){u=h.base,_=h.assets}function O(n){_=h.assets=n}let b={};function U(n){}function P(n){b=n}function S(){}const k=y((n,t,e,g)=>{let{stores:o}=t,{page:c}=t,{constructors:s}=t,{components:a=[]}=t,{form:l}=t,{data_0:d=null}=t,{data_1:m=null}=t;x("__svelte__",o),o.page.notify,t.stores===void 0&&e.stores&&o!==void 0&&e.stores(o),t.page===void 0&&e.page&&c!==void 0&&e.page(c),t.constructors===void 0&&e.constructors&&s!==void 0&&e.constructors(s),t.components===void 0&&e.components&&a!==void 0&&e.components(a),t.form===void 0&&e.form&&l!==void 0&&e.form(l),t.data_0===void 0&&e.data_0&&d!==void 0&&e.data_0(d),t.data_1===void 0&&e.data_1&&m!==void 0&&e.data_1(m);let i,p;do i=!0,o.page.set(c),p=`


${s[1]?`${f(s[0]||v,"svelte:component").$$render(n,{data:d,this:a[0]},{this:r=>{a[0]=r,i=!1}},{default:()=>`${f(s[1]||v,"svelte:component").$$render(n,{data:m,form:l,this:a[1]},{this:r=>{a[1]=r,i=!1}},{})}`})}`:`${f(s[0]||v,"svelte:component").$$render(n,{data:d,form:l,this:a[0]},{this:r=>{a[0]=r,i=!1}},{})}`}

`;while(!i);return p}),q={app_template_contains_nonce:!1,csp:{mode:"auto",directives:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1},reportOnly:{"upgrade-insecure-requests":!1,"block-all-mixed-content":!1}},csrf_check_origin:!0,embedded:!1,env_public_prefix:"PUBLIC_",hooks:null,preload_strategy:"modulepreload",root:k,service_worker:!0,templates:{app:({head:n,body:t,assets:e,nonce:g,env:o})=>`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="`+e+`/favicon.png" />
		<meta name="viewport" content="width=device-width" />
		`+n+`
	</head>
	<body>
		<div>`+t+`</div>
	</body>
</html>
`,error:({status:n,message:t})=>`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>`+t+`</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">`+n+`</span>
			<div class="message">
				<h1>`+t+`</h1>
			</div>
		</div>
	</body>
</html>
`},version_hash:"1lob07x"};function z(){return import("./hooks.server.js")}export{_ as a,u as b,O as c,S as d,U as e,z as g,q as o,b as p,C as r,P as s};
