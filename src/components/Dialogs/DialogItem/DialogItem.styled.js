import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		columnGap: 10,
		'& img': {
			width: 50,
			height: 50,
			objectFit: 'cover',
			borderRadius: '50%'
		}
	}
})

export default useStyles