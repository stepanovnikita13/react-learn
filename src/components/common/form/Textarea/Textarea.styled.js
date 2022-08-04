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
		border: {
			width: 2,
			style: 'solid',
			color: theme.colors.border
		},
		borderRadius: theme.sizes.borderRadius,
		'&::placeholder': {
			color: theme.colors.placeholder
		},
		'&:hover, &:active, &:focus': {
			borderColor: theme.colors.borderHover
		}
	},
	sendButton: {
		position: 'absolute',
		backgroundColor: 'transparent',
		right: 8,
		bottom: 8,
	},
	fieldset: ({ isError, selected }) => ({
		position: 'relative',
		border: {
			width: 2,
			style: 'solid',
			color: isError ? theme.COLORS.error : selected ? theme.colors.borderHover : theme.colors.border
		},
		borderRadius: theme.sizes.borderRadius,
		animation: isError && '.2s cubic-bezier(.64, .19, .51, .67) 2 normal both errorPulse',
		'&::placeholder': {
			color: theme.colors.placeholder
		},
		'&:hover, &:active, &:focus': {
			borderColor: theme.colors.borderHover
		},
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