import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	menu: {
		width: '100%',
		height: '100%',
		backgroundColor: theme.colors.avatarMenuBackground,
		borderRadius: '50%',
		overflow: 'hidden',
		opacity: ({ isActive }) => isActive ? 1 : 0,
		transition: 'all .1s ease-in-out',
		'& nav': {
			width: 'max-content',
			margin: '0 auto',
			marginTop: '50%',
			transform: 'translateY(-50%)'
		}
	},
	list: {
		display: ({ isActive }) => isActive ? 'block' : 'none',
		width: 'max-content',
		color: theme.colors.white,
		fontSize: '.85em',
		textAlign: 'center',
		'& li': {
			display: 'flex',
			alignItems: 'center',
			flexFlow: 'row nowrap',
			'&:not(:last-child)': {
				marginBottom: 5
			},
			'&:hover': {
				cursor: 'pointer',
				color: theme.COLORS.gray100
			}
		},
	}
}))

export default useStyles