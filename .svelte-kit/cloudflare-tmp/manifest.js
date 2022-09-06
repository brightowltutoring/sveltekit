export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","login-bg-video-blurred.mp4","moon-solid.svg","sun-solid.svg"]),
	mimeTypes: {".mp4":"video/mp4",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-653dc4f8.js","imports":["_app/immutable/start-653dc4f8.js","_app/immutable/chunks/index-6e580a54.js","_app/immutable/chunks/singletons-2e7d080f.js","_app/immutable/chunks/index-ee468ebe.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			},
			{
				type: 'page',
				id: "etc",
				pattern: /^\/etc\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			},
			{
				type: 'page',
				id: "plans",
				pattern: /^\/plans\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 5
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
