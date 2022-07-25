import styled from "../../../../styledJss"
import { Error } from "../../global/Span"

const S = {}

S.Container = styled('div')(({ theme, isError }) => ({
	position: 'relative',
	backgroundColor: theme.colors.backgroundInput,
	borderRadius: theme.sizes.borderRadius,
	'& svg>': {
		'&:not(.fill), &.stroke': { stroke: isError && theme.COLORS.error, },
		'&.fill': { fill: isError && theme.COLORS.error }
	},
	'& input, & input:hover, & input:active, & input:focus': {
		borderColor: isError && theme.COLORS.error
	},
	'& input': {
		animation: isError && '.2s cubic-bezier(.64, .19, .51, .67) 2 normal both errorPulse'
	}
}))

const Icon = styled('div')(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	bottom: 0,
	transform: 'translateY(-50%)',
	lineHeight: 0,
	height: 'min-content'
}))

S.IconFieldType = styled(Icon)({
	left: 10
})

S.IconErrorInfo = styled(Icon)({
	right: 10
})

S.Input = styled('input')(({ theme }) => ({
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
	'&::placeholder': {
		color: theme.colors.placeholder
	},
	'&:hover': {
		borderColor: theme.colors.borderHover
	},
	'&:active, &:focus': {
		borderColor: theme.colors.primary
	}
}))

S.Lbl = {}

S.Lbl.Fieldset = styled('fieldset')(({ theme, isError }) => ({
	border: {
		width: 2,
		style: 'solid',
		color: isError ? theme.COLORS.error : theme.colors.border
	},
	borderRadius: theme.sizes.borderRadius,
	animation: isError && '.2s cubic-bezier(.64, .19, .51, .67) 2 normal both errorPulse'
}))

S.Lbl.Legend = styled('legend')(({ theme }) => ({
	display: 'block',
	fontSize: .8,
	fontFamily: theme.font.family.italic,
	marginLeft: 10,
	padding: [0, 5],
}))
S.Lbl.Input = styled('input')({
	display: 'block',
	width: '100%',
	fontSize: .9,
	padding: [5, 10, 10, 10],
	backgroundColor: 'transparent',
})

S.Lbl.Error = styled(Error)({
	fontSize: .8
})

export default S
