import { createUseStyles } from 'react-jss'
import { device } from '../../../../styles/device'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		flexFlow: 'row nowrap',
		[`@media ${device.tabletS}`]: {
			justifyContent: 'flex-start',
			columnGap: 5,
		}
	},
}, { name: 'Status' })

export default useStyles