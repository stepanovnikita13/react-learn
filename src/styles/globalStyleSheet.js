import { jss } from "../styledJss"

const globalStyleSheet = jss.createStyleSheet({
	heading: {
		fontFamily: () => 'OpenSans-Bold',
		marginBottom: t => t.font.heading.marginBottom + 'em',
	},
	'@global': {
		[`input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		textarea:-webkit-autofill,
		textarea:-webkit-autofill:hover,
		textarea:-webkit-autofill:focus,
		select:-webkit-autofill,
		select:-webkit-autofill:hover,
		select:-webkit-autofill:focus`]: {
			'-webkit-text-fill-color': t => t.colors.font,
			WebkitBoxShadow: '0 0 0px 1000px transparent inset',
			transition: 'background-color 5000s ease-in-out 0s',
		},
		'*': {
			transition: 'background-color .1s ease'
		},
		body: t => ({
			color: t.colors.font,
			backgroundColor: t.colors.background,
			fontSize: t.font.baseEm,
			lineHeight: t.font.lineHeight,
			fontFamily: ['OpenSans-Regular', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
				'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
			WebkitFontSmoothing: 'antialiased',
			MozOsxFontSmoothing: 'grayscale',
		}),
		a: t => ({
			color: t.colors.font
		}),
		h1: {
			extend: 'heading',
			fontSize: t => t.font.heading.h1,
			lineHeight: t => t.font.heading.lineHeightH1
		},
		h2: {
			extend: 'heading',
			fontSize: t => t.font.heading.h2,
			lineHeight: t => t.font.heading.lineHeightH2
		},
		h3: {
			extend: 'heading',
			fontSize: t => t.font.heading.h3,
			lineHeight: t => t.font.heading.lineHeightH2
		},
		h4: {
			extend: 'heading',
			fontSize: t => t.font.heading.h4,
		},
		h5: {
			extend: 'heading',
			fontSize: t => t.font.heading.h5,
		},
		h6: {
			extend: 'heading',
			fontSize: t => t.font.heading.h6,
		},
		textarea: {
			resize: 'none'
		},
		'input, textarea': {
			color: t => t.colors.font
		},
		'@keyframes errorPulse': {
			from: {
				borderColor: t => t.colors.border
			},
			to: {
				borderColor: t => t.COLORS.error
			}
		},
		'@keyframes themeSwitch': {
			from: {
				transform: 'scale(1)'
			},
			'50%': {
				transform: 'scale(0)'
			},
			to: {
				transform: 'scale(1)'
			}
		}
	}
}, { link: true }).attach();

export default globalStyleSheet