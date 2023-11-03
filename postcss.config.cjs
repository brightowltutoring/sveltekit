const postcssNested = require('postcss-nested');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

// const config = {
// 	plugins: [postcssNested(), tailwindcss(), autoprefixer]
// };

const config = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': 'postcss-nested',
		tailwindcss: {},
		autoprefixer: {}
	}
};

module.exports = config;
