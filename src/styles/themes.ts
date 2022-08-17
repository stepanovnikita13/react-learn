import variables from "./variables"
import { COLORS, ColorsType } from "./colors"
import { Variables } from "./variables"

const commonColors = {
	primary: COLORS.primary,
	buttonText: COLORS.white,
	borderDropZone: COLORS.primary_alpha40,
	buttonDisabled: COLORS.primary700,
	buttonToDialogs: COLORS.primary700_alpha20,
	avatarMenuBackground: COLORS.gray_alpha50,
	black: COLORS.black,
	white: COLORS.white,
	error: COLORS.error,
	success: COLORS.success,
}

const themes = {
	light: {
		header: COLORS.white,
		sidebar: COLORS.white,
		font: COLORS.black,
		fontLabel: COLORS.primary350,
		background: COLORS.primary70,
		backgroundAroundModal: COLORS.black_alpha70,
		backgroundContainer: COLORS.white,
		backgroundInput: COLORS.white,
		backgroundModal: COLORS.primary70,
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
		fontLabel: COLORS.gray600,
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

type CommonColors = typeof commonColors
type ThemeColors = typeof themes.light
export interface CustomTheme extends Variables {
	colors: CommonColors & ThemeColors,
	COLORS: ColorsType,
	themeType: ThemeType
}
export type ThemeType = 'dark' | 'light'

const getTheme = (themeType: ThemeType): CustomTheme => {
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