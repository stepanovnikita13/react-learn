import variables from "./variables"
import { COLORS } from "./colors"

const commonColors = {
	primary: COLORS.primary,
	buttonText: COLORS.white,
	buttonDisabled: COLORS.primary700,
	avatarMenuBackground: COLORS.gray_alpha50,
	black: COLORS.black,
	white: COLORS.white
}

const themes = {
	light: {
		header: COLORS.white,
		sidebar: COLORS.white,
		font: COLORS.black,
		background: COLORS.primary70,
		backgroundAroundModal: COLORS.black_alpha70,
		backgroundContainer: COLORS.white,
		backgroundInput: COLORS.white,
		backgroundModal: COLORS.background,
		backgroundModalLight: COLORS.white,
		backgroundSwitcher: COLORS.primary50,
		border: COLORS.primary100,
		borderHover: COLORS.primary350,
		iconFade: COLORS.primary200,
		placeholder: COLORS.primary350,
		scrollbar: COLORS.primary700_alpha20,
		scrollbarBackground: COLORS.primary100,
	},
	dark: {
		header: COLORS.gray900,
		sidebar: COLORS.gray900,
		font: COLORS.gray100,
		background: COLORS.gray950,
		backgroundAroundModal: COLORS.black_alpha40,
		backgroundContainer: COLORS.gray900,
		backgroundInput: COLORS.gray900,
		backgroundModal: COLORS.gray900,
		backgroundModalLight: COLORS.gray800,
		backgroundSwitcher: COLORS.gray970,
		border: COLORS.gray800,
		borderHover: COLORS.gray600,
		iconFade: COLORS.gray600,
		placeholder: COLORS.gray600,
		scrollbar: COLORS.primary700_alpha20,
		scrollbarBackground: COLORS.gray970,
	}
}

const getTheme = (themeType) => {
	return {
		...variables,
		colors: {
			...commonColors,
			...themes[themeType]
		},
		COLORS,
		themeType
	}
}

export default getTheme