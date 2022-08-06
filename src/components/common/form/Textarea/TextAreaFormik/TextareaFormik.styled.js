import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	textarea: {
		borderColor: ({ isError }) => isError && theme.colors.error
	}
}))

export default useStyles