import { createUseStyles } from "react-jss"

const useStyles = createUseStyles((theme) => ({
	button: {
		borderRadius: 'var(--borderRadius)',
		backgroundColor: theme.colors.primary,
		color: theme.colors.buttonText,
		fontSize: theme.font.baseEm,
		lineHeight: '3em',
		width: '9em',
		'&:disabled': {
			backgroundColor: 'var(--btnDisabled)',
		}
	},
	iconFade: props => ({
		lineHeight: 0,
		backgroundColor: 'transparent',
		'&>svg>*': {
			stroke: theme.colors.iconFade,
		},
		'&:hover>svg>*': {
			stroke: props?.color ? theme.colors[props.color] : theme.colors.primary
		}
	}),

	themeSwitcher: isActive => ({
		width: 45,
		height: 28,
		backgroundColor: theme.colors.backgroundSwitcher,
		borderRadius: 50,
		WebkitBoxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2) inset',
		MozBoxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2) inset',
		boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2) inset',
		'& svg': {
			animation: isActive && '.2s ease $themeSwitch'
		}
	}),

	ellipse: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 2,
		width: 24,
		height: 24,
		borderRadius: '50%',
		backgroundColor: theme.colors.backgroundContainer,
		WebkitBoxShadow: '0 1px 3px 0px rgba(0, 0, 0, 0.3)',
		MozBoxShadow: '0 1px 3px 0px rgba(0, 0, 0, 0.3)',
		boxShadow: '0 1px 3px 0px rgba(0, 0, 0, 0.3)',
		transform: `translateX(${theme.themeType === 'light' ? 0 : '17px'})`,
		transition: 'transform .2s ease'
	},

	burger: isActive => ({
		'& svg': {
			animation: isActive && '.2s ease $themeSwitch'
		}
	}),

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
	},
}))

export default useStyles