import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	_textarea: {
		display: 'block',
		width: '100%',
		height: theme.font.lineHeight * 4 + 'em',
		'line-height': .9 * theme.font.lineHeight,
		font: {
			size: .9,
		},
		background: 'transparent',
	},
	sendContainer: {
		position: 'relative',
		borderRadius: theme.sizes.borderRadius,
		backgroundColor: theme.colors.backgroundInput,
	},
	sendTextarea: {
		extend: '_textarea',
		padding: [8, 30, 8, 8],
		transition: 'border-color .22s ease',
		borderRadius: theme.sizes.borderRadius,
		border: {
			width: 2,
			style: 'solid',
			color: theme.colors.border
		},
		'&::placeholder': {
			color: theme.colors.placeholder
		},
		'&:hover, &:active, &:focus': {
			borderColor: theme.colors.borderHover
		}
	},
	sendButton: ({ disabled }) => ({
		position: 'absolute',
		backgroundColor: 'transparent',
		right: 8,
		bottom: 8,
		'&&>svg>*': {
			stroke: 'transparent',
			fill: !disabled ? theme.colors.primary : theme.colors.iconFade
		},
		'&&:hover>svg>*': {
			stroke: 'transparent',
			fill: disabled && theme.colors.iconFade
		}
	}),
	fieldSet: ({ isError }) => ({
		border: {
			width: 2,
			style: 'solid',
			color: isError ? theme.COLORS.error : theme.colors.border
		},
		borderRadius: theme.sizes.borderRadius,
		animation: isError && '.2s cubic-bezier(.64, .19, .51, .67) 2 normal both errorPulse'
	}),
	legend: {
		display: 'block',
		fontSize: .8,
		fontFamily: theme.font.family.italic,
		marginLeft: 10,
		padding: [0, 5],
	},
	textarea: {
		extend: '_textarea',
		padding: [5, 10, 10, 10],
	}
}))
export default useStyles