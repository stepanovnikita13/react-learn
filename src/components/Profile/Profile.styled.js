import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	wrapper: {
		display: 'flex',
		flexFlow: 'row wrap',
		paddingTop: 10,
		margin: [0, -10, 0, -10],
		'&>div': {
			padding: 15,
			backgroundColor: theme.colors.backgroundContainer,
			borderRadius: theme.sizes.borderRadiusLarge,
			margin: 10,
		}
	}
}), { name: 'Profile' })

export default useStyles