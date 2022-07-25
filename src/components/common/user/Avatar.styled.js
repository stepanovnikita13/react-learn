import styled from "../../../styledJss"

const S = {}
const div = styled('div')

S.Avatar = div(({ theme }) => ({
	position: 'relative',
	height: 'fit-content',
	borderRadius: '50%',
	backgroundColor: theme.colors.background,
	border: {
		size: 8,
		style: 'solid',
		color: theme.colors.border
	},
	overflow: 'hidden',
	'& img': {
		width: '100%',
		height: 'auto',
		objectFit: 'cover'
	}
}))

S.Children = div({
	position: 'absolute',
	top: 0,
	width: '100%',
	height: '100%'
})

export default S