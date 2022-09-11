export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","login-bg-video-blurred.mp4","reviews/.DS_Store","reviews/review-ben-bare.png","reviews/review-efe-bare.png","reviews/review-miranda-bare.png","reviews/review-paola-bare.png","reviews/review-rob-bare.png","reviews/review-tj-bare.png","reviews/review-zaara-bare.png"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-7451b09b.js","imports":["_app/immutable/start-7451b09b.js","_app/immutable/chunks/index-c3c96927.js","_app/immutable/chunks/singletons-1809f604.js","_app/immutable/chunks/index-b80a8d4d.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
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
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "mdsvex-and-katex",
				pattern: /^\/mdsvex-and-katex\/?$/,
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
