import { createUseStyles } from 'react-jss'
import { device } from '../../styles/device'

const useStyles = createUseStyles({
	container: {
		padding: [20, 0],
		[`@media ${device.tabletS}`]: {
			display: 'flex',
			justifyContent: 'center'
		}
	},
	wrapper: {
		display: 'flex',
		flexFlow: 'column'
	},
	users: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridGap: '15px 15px',
		[`@media ${device.tabletS}`]: {
			gridTemplateColumns: 'repeat(3, 1fr)'
		}
	},
}, { name: 'Users' })

export default useStyles