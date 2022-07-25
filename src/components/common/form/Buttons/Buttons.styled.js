import styled from "../../../../styledJss"

const S = {}

S.Button = styled('button')(({ theme }) => ({
	borderRadius: 'var(--borderRadius)',
	backgroundColor: theme.colors.primary,
	color: theme.colors.buttonText,
	fontSize: theme.font.baseEm,
	lineHeight: '3em',
	width: '9em',
	'&:disabled': {
		backgroundColor: 'var(--btnDisabled)',
	}
}))

S.IconFade = styled('button')(({ theme, color }) => ({
	lineHeight: 0,
	backgroundColor: 'transparent',
	'&>svg>*': {
		stroke: theme.colors.iconFade,
	},
	'&:hover>svg>*': {
		stroke: color ? theme.COLORS[color] : theme.colors.primary
	}
}))

S.ThemeSwitcher = styled('button')(({ theme, isAnimate }) => ({
	width: 45,
	height: 28,
	backgroundColor: theme.colors.backgroundContainer,
	borderRadius: 50,
	border: {
		width: 2,
		style: 'solid',
		color: theme.colors.border
	},
	'& svg': {
		animation: isAnimate && '.2s ease themeSwitch'
	}
}))

S.Ellipse = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: -2,
	width: 28,
	height: 28,
	borderRadius: '50%',
	backgroundColor: theme.colors.border,
	transform: `translateX(${theme.themeType === 'light' ? 0 : '17px'})`,
	transition: 'transform .2s ease'
}))

export default S