import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
	container: {
		flex: [1, 1, '100%'],
		display: 'flex',
		flexFlow: 'row wrap'
	},
	wallpapper: {
		flex: [1, 1, '100%'],
		'&>img': {
			width: '100%',
			height: 200,
			objectFit: 'cover',
			borderRadius: theme.sizes.borderRadiusLarge
		}
	},
	avatar: {
		width: 180,
		marginLeft: 25,
		marginBottom: '-80px',
		transform: 'translateY(-80px)',
		border: {
			width: 8,
			style: 'solid',
			color: theme.colors.backgroundContainer
		}
	},
	fullName: {
		fontSize: 1.2,
		fontWeight: 'bold',
		display: 'inline-block',
		padding: 10
	}
}))

export default useStyles