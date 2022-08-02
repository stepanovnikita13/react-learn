import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	wrapper: {
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'space-between',
		minHeight: '100vh',
		overflowX: 'hidden'
	},
	main: {
		marginTop: ({ theme }) => theme.sizes.headerHeight,
	}
})

export default useStyles