import styled from "../../../../styledJss"
import { Error } from "../../global/Span"
import { ButtonIconFade } from '../Buttons/Buttons'

const S = {}
const textarea = styled('textarea')(({ theme }) => ({
	display: 'block',
	width: '100%',
	height: theme.font.lineHeight * 4 + 'em',
	fontSize: .9,
	lineHeight: .9 * theme.font.lineHeight,
	backgroundColor: 'transparent',
}))
S.SendContainer = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.sizes.borderRadius,
	backgroundColor: theme.colors.backgroundInput,
}))

S.SendTextarea = styled(textarea)(({ theme }) => ({
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
}))

S.SendButton = styled(ButtonIconFade)(({ theme, disabled }) => ({
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
}))

S.Fieldset = styled('fieldset')(({ theme, isError }) => ({
	border: {
		width: 2,
		style: 'solid',
		color: isError ? theme.COLORS.error : theme.colors.border
	},
	borderRadius: theme.sizes.borderRadius,
	animation: isError && '.2s cubic-bezier(.64, .19, .51, .67) 2 normal both errorPulse'
}))
S.Legend = styled('legend')(({ theme }) => ({
	display: 'block',
	fontSize: .8,
	fontFamily: theme.font.family.italic,
	marginLeft: 10,
	padding: [0, 5],
}))
S.Textarea = styled(textarea)(({ theme }) => ({
	padding: [5, 10, 10, 10],
}))

S.Error = styled(Error)({
	fontSize: .8
})

export default S