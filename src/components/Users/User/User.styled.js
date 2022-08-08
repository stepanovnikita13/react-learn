import { createUseStyles } from 'react-jss'
import { device } from '../../../styles/device'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-between',
		backgroundColor: ({ theme }) => theme.colors.backgroundContainer,
		borderRadius: ({ theme }) => theme.sizes.borderRadiusLarge,
		padding: 10,
		[`@media ${device.tabletS}`]: {
			flexFlow: 'column nowrap',
			width: 170,
			height: 260,
		}
	},
	avatar: {
		width: '20%',
		height: 'auto',
		margin: [0, 'auto'],
		[`@media ${device.tabletS}`]: {
			width: '85%',
		}
	},
	info: {
		flex: 1,
		paddingTop: 10,
		overflow: 'hidden',
	},
	button: {
		'&>svg': {
			width: 26,
			height: 26
		}
	}
}, { name: 'User' })

export default useStyles