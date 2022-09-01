export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","login-bg-video-blurred.mp4"]),
	mimeTypes: {".mp4":"video/mp4"},
	_: {
		entry: {"file":"_app/immutable/start-f364f4b2.js","imports":["_app/immutable/start-f364f4b2.js","_app/immutable/chunks/index-0251ac3a.js","_app/immutable/chunks/singletons-48a72146.js","_app/immutable/chunks/index-ac9af0b2.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js')
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
				leaf: 3
			},
			{
				type: 'page',
				id: "etc",
				pattern: /^\/etc\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [2],
				leaf: 5
			},
			{
				type: 'page',
				id: "plans",
				pattern: /^\/plans\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 6
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
