import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	root: {
		'& .text-error': {
			fontSize: .75
		}
	}
})

export default useStyles