import { createUseStyles } from 'react-jss'
import { CustomTheme } from '../../../../styles/themes'
import { StyleProps } from './Textarea'

type RuleNames = 'wrapper' | 'root' | 'label' | 'textarea' | 'outline' |
	'@keyframes errorPulse' | 'legend'
const useStyles = createUseStyles<RuleNames, StyleProps, CustomTheme>(theme => ({
	wrapper: {
		marginTop: ({ label }) => label && 10,
		position: 'relative',
	},
	root: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
	},
	label: {
		position: 'absolute',
		top: 0,
		left: 0,
		transform: 'translate(17px, calc(-50% + 1px))',
		fontSize: .75,
		lineHeight: 1,
		color: ({ isError }) => isError ? theme.colors.error : theme.colors.fontLabel,
		zIndex: 1
	},
	textarea: {
		display: 'block',
		width: '100%',
		height: theme.font.lineHeight * 4 + 'em',
		'line-height': .9 * theme.font.lineHeight,
		font: {
			size: 1,
		},
		background: 'transparent',
		borderRadius: theme.sizes.borderRadius,
		padding: [5, 10, 10, 10],
		'&::placeholder': {
			color: theme.colors.placeholder
		},
	},
	outline: ({ isError, isActive, label }) => ({
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
}), { name: 'Textarea' })

export default useStyles