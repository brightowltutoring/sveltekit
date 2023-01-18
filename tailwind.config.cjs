module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte,md,svx}'],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
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
				fadeIn: {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '100'
					}
				},
				wiggle: {
					'0%, 100%': {
						transform: 'rotate(-3deg)'
					},
					'50%': {
						transform: 'rotate(3deg)'
					}
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				fadeIn: 'fadeIn 0.7s ease-in'
			}
		}
	}
};
