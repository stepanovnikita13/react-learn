import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	message: {
		width: 'max-content',
		padding: '6px 18px',
		backgroundColor: theme.colors.backgroundContainer,
		borderRadius: theme.sizes.borderRadius,
	}
}))

export default useStyles