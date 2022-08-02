import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	avatar: {
		position: 'relative',
		height: 'fit-content',
		borderRadius: '50%',
		backgroundColor: ({ theme }) => theme.colors.background,
		border: {
			size: 8,
			style: 'solid',
			color: ({ theme }) => theme.colors.border
		},
		overflow: 'hidden',
		'& img': {
			width: '100%',
			height: 'auto',
			objectFit: 'cover'
		}
	},
	children: {
		position: 'absolute',
		top: 0,
		width: '100%',
		height: '100%'
	}
})

export default useStyles