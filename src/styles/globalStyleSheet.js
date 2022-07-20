import { jss } from "../styledJss"

const globalStyleSheet = jss.createStyleSheet({
	heading: {
		fontFamily: () => 'OpenSans-Bold',
		marginBottom: t => t.font.heading.marginBottom + 'em',
	},
	'@global': {
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
		}
	}
}, { link: true }).attach();

export default globalStyleSheet