import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	container: {
		display: 'grid',
		gridTemplateColumns: '4fr 8fr',
		height: `calc(100vh - ${theme.sizes.headerHeight}px)`,
		padding: 20
	},
	dialogs: {
		'&>*:not(:last-child)': {
			marginBottom: 10
		}
	},
	chat: {
		rowGap: 15,
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'flex-end',
		overflow: 'hidden',
	},
	chatWrapper: {
		display: 'flex',
		position: 'relative',
		overflow: 'hidden',
		'&:hover span': {
			opacity: 0
		}
	},
	messagesBlock: {
		display: 'flex',
		width: '100%',
		flexFlow: 'column-reverse nowrap',
		overflow: 'auto',
		'&>*:not(:first-child)': {
			marginBottom: 10
		},
		'&::-webkit-scrollbar': {
			width: 5,
			backgroundColor: theme.colors.scrollbarBackground,
			borderRadius: '5px',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: theme.colors.scrollbar,
			borderRadius: '5px'
		},
		'&::-webkit-scrollbar-track': {
			borderRadius: '5px'
		}
	},
	magicBox: {
		display: 'block',
		position: 'absolute',
		height: '100%',
		width: 5,
		top: 0,
		right: 0,
		backgroundColor: theme.colors.background,
		transition: 'opacity .1s'
	}
}))

export default useStyles