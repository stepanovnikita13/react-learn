import { device } from "../../../../styles/device"

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
	container: ({ isError }) => ({
		position: 'relative',
		backgroundColor: theme.colors.backgroundInput,
		borderRadius: theme.sizes.borderRadius,
		'& svg>': {
			'&:not(.fill), &.stroke': { stroke: isError && theme.colors.error, },
			'&.fill': { fill: isError && theme.colors.error }
		},
		'& input, & input:hover, & input:active, & input:focus': {
			borderColor: isError && theme.colors.error
		},
		'& input': {
			animation: isError && '.2s cubic-bezier(.64, .19, .51, .67) 2 normal both $errorPulse'
		}
	}),

	'@keyframes errorPulse': {
		from: {
			borderColor: theme.colors.border
		},
		to: {
			borderColor: theme.colors.error
		}
	},

	icon: {
		position: 'absolute',
		top: '50%',
		bottom: 0,
		transform: 'translateY(-50%)',
		lineHeight: 0,
		height: 'min-content'
	},
	iconFieldType: {
		left: 10
	},
	iconErrorInfo: {
		right: 10
	},
	input: {
		width: '100%',
		border: {
			width: 2,
			style: 'solid',
			color: theme.colors.border
		},
		borderRadius: theme.sizes.borderRadius,
		fontSize: theme.font.baseEm,
		lineHeight: theme.font.BASE * 3,
		backgroundColor: 'transparent',
		color: theme.colors.font,
		paddingLeft: 40,
		[`@media ${device.tabletS}`]: {
			lineHeight: theme.font.BASE * 3
		},
		'&::placeholder': {
			color: theme.colors.placeholder
		},
		'&:hover': {
			borderColor: theme.colors.borderHover
		},
		'&:active, &:focus': {
			borderColor: theme.colors.primary
		},
	},

	fieldset: ({ isError }) => ({
		border: {
			width: 2,
			style: 'solid',
			color: isError ? theme.colors.error : theme.colors.border
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
	inputLbl: {
		display: 'block',
		width: '100%',
		fontSize: .9,
		padding: [5, 10, 10, 10],
		backgroundColor: 'transparent',
	}
}))

export default useStyles
