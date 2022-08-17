const RATIO = 1.2
const BASE = 1
const baseEm = BASE + 'em'
const basePx = BASE * 16 + 'px'

const ms0 = 1
const ms1 = RATIO
const ms2 = RATIO * ms1
const ms3 = RATIO * ms2
const ms4 = RATIO * ms3

const font = {
	BASE,
	basePx,
	baseEm,
	heading: {
		h1: BASE * ms4,
		h2: BASE * ms3,
		h3: BASE * ms2,
		h4: BASE * ms1,
		h5: BASE * ms0,
		h6: BASE / ms1,
		marginBottom: BASE * .7,
		lineHeightH1: BASE * ms0,
		lineHeightH2: BASE * ms1,
	},
	lineHeight: BASE * ms2,
	family: {
		italic: 'OpenSans-Italic',
		regular: 'OpenSans-Regular',
		bold: 'OpenSans-Bold',
	}
}

//Sizes
const BORDER_RADIUS = 6
const sizes = {
	maxWidth: 1200,
	minWidth: 320,
	headerHeight: 50,
	navbarWidth: Math.sqrt(BASE) * 155,

	borderRadius: BORDER_RADIUS + 'px',
	borderRadiusLarge: BORDER_RADIUS * 2 + 'px',
}

const zIndex = {
	header: 50,
	dialogs: 10,
	buttonToDialogs: 5,
	navbar: 51,
	modal: 100,
	preloader: 150,
}

type Font = typeof font
type Sizes = typeof sizes
type ZIndex = typeof zIndex
export type Variables = {
	font: Font,
	sizes: Sizes,
	zIndex: ZIndex
}

const variables = {
	font,
	sizes,
	zIndex
}

export default variables