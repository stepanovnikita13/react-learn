import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	container: {
		flex: [1, 1, '280px']
	},
	heading: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	}
})

export default useStyles