import { jss } from "../styledJss"
import { device } from "./device";

const globalStyleSheet = jss.createStyleSheet({
	heading: {
		fontFamily: theme => theme.font.family.bold,
		marginBottom: theme => theme.font.heading.marginBottom + 'em',
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
			'-webkit-text-fill-color': theme => theme.colors.font,
			WebkitBoxShadow: '0 0 0px 1000px transparent inset',
			transition: 'background-color 5000s ease-in-out 0s',
		},
		'*': {
			transition: 'background-color .1s ease'
		},
		body: theme => ({
			color: theme.colors.font,
			backgroundColor: theme.colors.background,
			fontSize: theme.font.baseEm,
			lineHeight: theme.font.lineHeight,
			fontFamily: ['OpenSans-Regular', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
				'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
			WebkitFontSmoothing: 'antialiased',
			MozOsxFontSmoothing: 'grayscale',
		}),
		a: theme => ({
			color: theme.colors.font
		}),
		h1: {
			extend: 'heading',
			fontSize: theme => theme.font.heading.h1,
			lineHeight: theme => theme.font.heading.lineHeightH1
		},
		h2: {
			extend: 'heading',
			fontSize: theme => theme.font.heading.h2,
			lineHeight: theme => theme.font.heading.lineHeightH2
		},
		h3: {
			extend: 'heading',
			fontSize: theme => theme.font.heading.h3,
			lineHeight: theme => theme.font.heading.lineHeightH2
		},
		h4: {
			extend: 'heading',
			fontSize: theme => theme.font.heading.h4,
		},
		h5: {
			extend: 'heading',
			fontSize: theme => theme.font.heading.h5,
		},
		h6: {
			extend: 'heading',
			fontSize: theme => theme.font.heading.h6,
		},
		textarea: {
			resize: 'none'
		},
		'input, textarea': {
			color: theme => theme.colors.font
		},

		'.text-error': {
			color: theme => theme.colors.error
		},
		'.container': {
			width: '100%',
			padding: [0, 10],
			height: '100%',
			margin: [0, 'auto'],
			[`@media ${device.tabletS}`]: {
				padding: [0, 20]
			},
			[`@media ${device.laptopS}`]: {
				maxWidth: theme => theme.sizes.maxWidth,
				minWidth: theme => theme.sizes.minWidth,
				padding: 0
			},
			[`@media ${device.desktop}`]: {
				//padding: [0, 20]
			}
		},
	}
}, { link: true }).attach();

export default globalStyleSheet