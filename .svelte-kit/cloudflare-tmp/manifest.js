export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","facepalm.gif","favicon.png","login-bg-video-blurred.mp4","phone.svg","reviews/.DS_Store","reviews/review-ben-bare.webp","reviews/review-efe-bare.webp","reviews/review-miranda-bare.webp","reviews/review-paola-bare.webp","reviews/review-rob-bare.webp","reviews/review-tj-bare.webp","reviews/review-zaara-bare.webp","star.webp","star2.png"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".mp4":"video/mp4",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-993fd6d0.js","imports":["_app/immutable/start-993fd6d0.js","_app/immutable/chunks/index-30e2a2cf.js","_app/immutable/chunks/singletons-19b2510f.js","_app/immutable/chunks/index-99e25be1.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/calcom",
				pattern: /^\/calcom\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/homework",
				pattern: /^\/homework\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/katex",
				pattern: /^\/katex\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/mathjax",
				pattern: /^\/mathjax\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/math",
				pattern: /^\/math\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/physics",
				pattern: /^\/physics\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/plans",
				pattern: /^\/plans\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/samplequiz",
				pattern: /^\/samplequiz\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/schools",
				pattern: /^\/schools\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/screenshareA",
				pattern: /^\/screenshareA\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/screenshare",
				pattern: /^\/screenshare\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/stripe",
				pattern: /^\/stripe\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
