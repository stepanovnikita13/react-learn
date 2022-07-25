import styled from "../../../../styledJss"
import { ButtonIconFade } from '../../../common/form/Buttons/Buttons';

const S = {}
S.Post = styled('div')({
	padding: [10, 0]
})
S.LikeContainer = styled('div')({
	display: 'flex',
	alignItems: 'center',
	lineHeight: 1
})
S.ButtonLike = styled(ButtonIconFade)(({ theme, isLiked }) => ({
	'&&>svg>*': {
		fill: isLiked && theme.COLORS.error,
		stroke: isLiked && theme.COLORS.error
	},
	'&&:hover>svg>*': {
		stroke: theme.COLORS.error
	}
}))

export default S