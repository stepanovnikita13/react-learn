import styled from "../../../../styledJss"
import { Error } from "../../global/Span"
import { ButtonIconFade } from '../Buttons/Buttons'

const S = {}

S.Container = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.sizes.borderRadius,
	backgroundColor: theme.colors.backgroundInput,
}))

S.Textarea = styled('textarea')(({ theme }) => ({
	display: 'block',
	width: '100%',
	height: theme.font.lineHeight * 4 + 'em',
	fontSize: .9,
	lineHeight: .9 * theme.font.lineHeight,
	backgroundColor: 'transparent',
	color: theme.colors.font,
	caretColor: theme.colors.font,
	padding: [8, 30, 8, 8],
	overflow: 'hidden',
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

S.Button = styled(ButtonIconFade)(({ theme, disabled }) => ({
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
S.Lbl.Textarea = styled('textarea')(({ theme }) => ({
	display: 'block',
	width: '100%',
	height: theme.font.lineHeight * 4 + 'em',
	lineHeight: .9 * theme.font.lineHeight,
	fontSize: .9,
	padding: [5, 10, 10, 10],
	backgroundColor: 'transparent',
}))

S.Lbl.Error = styled(Error)({
	fontSize: .8
})

export default S