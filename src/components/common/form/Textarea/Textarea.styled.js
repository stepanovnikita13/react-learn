import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	textarea: {
		display: 'block',
		width: '100%',
		height: theme.font.lineHeight * 4 + 'em',
		'line-height': .9 * theme.font.lineHeight,
		font: {
			size: .9,
		},
		background: 'transparent',
		padding: [5, 10, 10, 10],
	},
	fieldset: isActive => ({
		position: 'relative',
		border: {
			width: 2,
			style: 'solid',
			color: isActive ? theme.colors.borderHover : theme.colors.border
		},
		borderRadius: theme.sizes.borderRadius,
		//animation: isError && '.2s cubic-bezier(.64, .19, .51, .67) 2 normal both errorPulse',
		'&::placeholder': {
			color: theme.colors.placeholder
		},
	}),
	legend: {
		display: 'block',
		fontSize: .8,
		fontFamily: theme.font.family.italic,
		marginLeft: 10,
		padding: [0, 5],
	},
	sendButton: {
		position: 'absolute',
		backgroundColor: 'transparent',
		right: 8,
		bottom: 8,
	},
	button: {
		position: 'absolute',
		backgroundColor: 'transparent',
		right: 5,
		bottom: 0,
	}
}))
export default useStyles