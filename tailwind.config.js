module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		fontFamily: {
			rubikFont: ['Rubik', 'sans-serif'],
		},
		extend: {
			spacing: {
				108: '27rem',
				120: '30rem',
				132: '33rem',
				144: '37rem',
				156: '40rem',
				168: '43rem',
				180: '46rem',
			},
			fontSize: {
				xxxs: '.5em',
				xxs: '.6rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
