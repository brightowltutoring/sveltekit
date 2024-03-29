module.exports = {
	darkMode: ['class', 'html.dark-mode'],
	// darkMode: ['class', '[data-mode="dark"]'],
	content: ['./src/**/*.{html,js,ts,svelte,md,svx}'],
	plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar-hide')],
	theme: {
		extend: {
			screens: {
				// This is used as 'hidden pwa:*' and 'pwa:hidden' instead of checking display-mode with async js combined svelte if-block logic ... such that when JS is turned off the conditional logic works out. Really a shame that tailwind doesn't support it natively; this css way is both more economic and non-async ...  the js way requires initializing js store variable in +layout.svelte, ... then importing per component file ... then potentially dealing with async nature, which leads to flashes of content.
				pwa: { raw: '(display-mode: standalone)' },
				notpwa: { raw: 'not all and (display-mode: standalone)' }
			},
			gridTemplateColumns: {
				dynamic: 'repeat(auto-fit, minmax(20rem, 1fr))'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			},
			fontFamily: {
				Nunito: ['Nunito', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif']
			},
			keyframes: {
				// fadeIn: {
				// 	'0%': {
				// 		opacity: '0'
				// 	},
				// 	'100%': {
				// 		opacity: '100'
				// 	}
				// }
				wave: {
					'0%, 100%': {
						transform: 'rotate(-3deg)  translateX(-5px)'
					},
					'50%': {
						transform: 'rotate(3deg)  translateX(5px)'
					}
				},
				bgsize: {
					'0%,100%': {
						backgroundSize: '100% '
					},
					'50%': {
						backgroundSize: '400% '
					}
				}
			},
			animation: {
				// fadeIn: 'fadeIn 0.7s ease-in'
				wave: 'wave 1s ease infinite',
				bgsize: 'bgsize 4s infinite'
			}
		}
	}
};
