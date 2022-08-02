import { device } from "../../styles/device"
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	container: {
		display: 'flex',
		justifyContent: 'space-around',
		paddingTop: 50
	},
	picture: {
		display: 'none',
		width: '60%',
		'& img': {
			width: '100%'
		},
		[`@media ${device.tabletS}`]: {
			display: 'block'
		},
		[`@media ${device.laptopM}`]: {
			width: '55%'
		},
	},
	centered: {
		alignSelf: 'center',
		width: '100%',
		[`@media ${device.tabletS}`]: {
			width: 300
		}
	}
})

export default useStyles