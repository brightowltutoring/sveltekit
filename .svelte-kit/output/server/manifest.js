export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","face-palm.gif","facepalm.gif","favicon.png","hangup-gray.png","hangup-red.png","login-bg-video-blurred.mp4","reviews/.DS_Store","reviews/review-ben-bare.webp","reviews/review-efe-bare.webp","reviews/review-miranda-bare.webp","reviews/review-paola-bare.webp","reviews/review-rob-bare.webp","reviews/review-tj-bare.webp","reviews/review-zaara-bare.webp","star.webp","star2.png"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".mp4":"video/mp4",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-3859fe11.js","imports":["_app/immutable/start-3859fe11.js","_app/immutable/chunks/index-82240eb1.js","_app/immutable/chunks/singletons-88c5b86f.js","_app/immutable/chunks/index-ac42c1e3.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js')
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
				id: "calcom",
				pattern: /^\/calcom\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "faq",
				pattern: /^\/faq\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			},
			{
				type: 'page',
				id: "katex",
				pattern: /^\/katex\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 5
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 6
			},
			{
				type: 'page',
				id: "logintest",
				pattern: /^\/logintest\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 7
			},
			{
				type: 'page',
				id: "math",
				pattern: /^\/math\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 8
			},
			{
				type: 'page',
				id: "mathjax",
				pattern: /^\/mathjax\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 9
			},
			{
				type: 'page',
				id: "physics",
				pattern: /^\/physics\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 10
			},
			{
				type: 'page',
				id: "plans",
				pattern: /^\/plans\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 11
			},
			{
				type: 'page',
				id: "reviews",
				pattern: /^\/reviews\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 12
			},
			{
				type: 'page',
				id: "samplequiz",
				pattern: /^\/samplequiz\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 13
			},
			{
				type: 'page',
				id: "schools",
				pattern: /^\/schools\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 14
			},
			{
				type: 'page',
				id: "schoolsOLD",
				pattern: /^\/schoolsOLD\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 15
			},
			{
				type: 'page',
				id: "screenshare",
				pattern: /^\/screenshare\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 16
			},
			{
				type: 'page',
				id: "screenshareA",
				pattern: /^\/screenshareA\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 17
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
