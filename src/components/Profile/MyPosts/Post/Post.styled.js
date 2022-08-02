import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	post: {
		padding: [10, 0]
	},
	likeContainer: {
		display: 'flex',
		alignItems: 'center',
		lineHeight: 1
	},
	buttonLike: {
		'&&>svg>*': {
			fill: ({ isLiked, theme }) => isLiked && theme.COLORS.error,
			stroke: ({ isLiked, theme }) => isLiked && theme.COLORS.error
		},
		'&&:hover>svg>*': {
			stroke: ({ theme }) => theme.COLORS.error
		}
	}
})

export default useStyles