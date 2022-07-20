import variables from "./variables"
import { COLORS } from "./colors"

const themes = {
	light: {
		primary: COLORS.primary,
		header: COLORS.white,
		sidebar: COLORS.white,
		font: COLORS.black,
		background: COLORS.background,
		buttonText: COLORS.white,
		buttonDisabled: COLORS.primary700
	},
	dark: {
		primary: COLORS.primary,
		header: COLORS.background_container,
		sidebar: COLORS.background_container,
		font: '#ececec',
		background: COLORS.background_dark,
		buttonText: 'white',
		buttonDisabled: '#484978'
	}
}

const getTheme = (themeType) => {
	return {
		...variables,
		colors: {
			...themes[themeType]
		}
	}
}

export default getTheme