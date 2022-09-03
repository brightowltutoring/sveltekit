export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","login-bg-video-blurred.mp4"]),
	mimeTypes: {".mp4":"video/mp4"},
	_: {
		entry: {"file":"_app/immutable/start-19e37b6e.js","imports":["_app/immutable/start-19e37b6e.js","_app/immutable/chunks/index-1f1b8166.js","_app/immutable/chunks/singletons-5dc40673.js","_app/immutable/chunks/index-4375fd2f.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
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
