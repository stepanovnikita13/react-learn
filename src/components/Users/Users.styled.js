import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		justifyContent: 'center',
		padding: 20
	},
	wrapper: {
		display: 'flex',
		flexFlow: 'column'
	},
	users: {
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridGap: '15px 15px'
	}
})

export default useStyles