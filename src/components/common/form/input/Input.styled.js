import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	wrapper: {
		marginTop: ({ label }) => label && 10,
		position: 'relative',
	},
	root: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
	},
	label: ({ isError }) => ({
		position: 'absolute',
		top: 0,
		left: 0,
		transform: 'translate(17px, calc(-50% + 1px))',
		fontSize: .75,
		lineHeight: 1,
		color: isError ? theme.colors.error : theme.colors.fontLabel,
		zIndex: 1
	}),
	input: ({ withIconStart, withIconEnd }) => ({
		width: '100%',
		fontSize: theme.font.baseEm,
		paddingTop: 14,
		paddingBottom: 14,
		paddingLeft: withIconStart ? 40 : 12,
		paddingRight: withIconEnd ? 40 : 12,
		background: 'none',
		borderRadius: theme.sizes.borderRadius,
		color: theme.colors.font,
		'&::placeholder': {
			color: theme.colors.placeholder
		},
	}),
	outline: ({ isActive, isError, label }) => ({
		position: 'absolute',
		inset: 0,
		top: label ? -11 : 0,
		border: {
			width: isError ? 1 : 2,
			style: 'solid',
			color: isError
				? theme.colors.error
				: isActive
					? theme.colors.borderHover
					: theme.colors.border
		},
		borderRadius: theme.sizes.borderRadius,
		pointerEvents: 'none',
		animation: isError && `.2s cubic-bezier(.64, .19, .51, .67) 2 normal both $errorPulse`,
	}),
	'@keyframes errorPulse': {
		from: {
			borderColor: theme.colors.border
		},
		to: {
			borderColor: theme.colors.error
		}
	},
	legend: {
		marginLeft: 10,
		visibility: 'hidden',
		fontSize: .75,
		maxWidth: ({ label }) => label ? '100%' : 0,
		height: ({ label }) => label ? 'auto' : 0,
		'& span': {
			padding: [0, 5],
		}
	},
	iconStart: {
		position: 'absolute',
		left: 10,
		lineHeight: 0
	},
	iconEnd: {
		position: 'absolute',
		right: 10,
		lineHeight: 0
	}
}), { name: 'Input' })

export default useStyles
