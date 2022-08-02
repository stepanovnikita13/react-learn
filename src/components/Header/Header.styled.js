import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	wrapper: ({ theme }) => ({
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		height: theme.sizes.headerHeight,
		zIndex: theme.zIndex.header,
		backgroundColor: theme.colors.header
	}),
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		columnGap: 15,
		padding: [10, 0],
		height: '100%'
	},
	logoLink: {
		height: 'inherit',
		'& img': {
			height: 'inherit'
		}
	}
})

export default useStyles