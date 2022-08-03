import { createUseStyles } from 'react-jss'
import { device } from '../../../styles/device'

const useStyles = createUseStyles({
	container: {
		flex: 'auto',
		[`@media ${device.tabletS}`]: {
			flex: [2, 0, '400px'],
		}
	},
	postList: {
		paddingTop: 20
	}
}, { name: 'MyPosts' })

export default useStyles