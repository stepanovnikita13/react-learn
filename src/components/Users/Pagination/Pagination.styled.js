import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	pagination: {
		marginTop: 20,
		'&>*': {
			cursor: 'pointer'
		},
		'&>:not(:last-child)': {
			marginRight: 6,
		}
	},
	selectedPage: {
		color: ({ theme }) => theme.colors.primary,
		fontWeight: 'bold',
	}
})

export default useStyles