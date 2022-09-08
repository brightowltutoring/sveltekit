export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","login-bg-video-blurred.mp4","reviews/.DS_Store","reviews/review-ben-bare.png","reviews/review-efe-bare.png","reviews/review-miranda-bare.png","reviews/review-paola-bare.png","reviews/review-rob-bare.png","reviews/review-tj-bare.png","reviews/review-zaara-bare.png"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-18f9a2dc.js","imports":["_app/immutable/start-18f9a2dc.js","_app/immutable/chunks/index-64e3950e.js","_app/immutable/chunks/singletons-a3358018.js","_app/immutable/chunks/index-57952acb.js"],"stylesheets":[]},
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
				leaf: 2
			},
			{
				type: 'page',
				id: "katex",
				pattern: /^\/katex\/?$/,
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
				id: "mathjax",
				pattern: /^\/mathjax\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
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
