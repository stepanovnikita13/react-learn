import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	aboutList: {
		'&>li:not(:last-child)': {
			marginBottom: 10
		}
	},
	contactList: {
		display: 'flex',
		flexFlow: 'row wrap',
		rowGap: 5,
		columnGap: 5,
		padding: [5, 0]
	}
})

export default useStyles