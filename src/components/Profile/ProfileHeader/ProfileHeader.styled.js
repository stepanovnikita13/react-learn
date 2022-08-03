import { createUseStyles } from 'react-jss'
import { device } from '../../../styles/device'

const useStyles = createUseStyles(theme => ({
	container: {
		flex: [1, 1, '100%'],
		display: 'flex',
		flexFlow: 'row wrap'
	},
	wallpapper: {
		flex: [1, 1, '100%'],
		borderRadius: theme.sizes.borderRadiusLarge,
		overflow: 'hidden',
		'&>img': {
			width: '100%',
			height: 200,
			objectFit: 'cover',
			filter: `blur(50px) brightness(${theme.themeType === 'dark' ? 1.3 : 1})`,
			transform: 'scale(1.2)',
		},
		[`@media ${device.tabletS}`]: {
			'&>img': {
				transform: 'scale(1.1)',
			}
		}
	},
	avatar: {
		width: 200,
		marginLeft: 17,
		marginBottom: '-110px',
		transform: 'translateY(-110px)',
		border: {
			width: 8,
			style: 'solid',
			color: theme.colors.backgroundContainer
		},
		[`@media ${device.tabletS}`]: {
			width: 180,
			marginLeft: 25,
			marginBottom: '-80px',
			transform: 'translateY(-80px)',
		}
	},
	content: {
		flex: [1, 1, '100%'],
		[`@media ${device.tabletS}`]: {
			flex: 1
		}
	},
	fullName: {
		fontSize: 1.3,
		fontFamily: theme.font.family.bold,
		display: 'inline-block',
		padding: [10, 0],
		[`@media ${device.tabletS}`]: {
			padding: 10,
		}
	}
}), { name: 'ProfileHeader' })

export default useStyles