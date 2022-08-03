import { createUseStyles } from 'react-jss'
import { device } from '../../../styles/device'

const useStyles = createUseStyles({
	pagination: {
		marginTop: 20,
		fontSize: 1.1,
		'&>*': {
			cursor: 'pointer'
		},
		'&>:not(:last-child)': {
			marginRight: 6,
		},
		[`@media ${device.mobileS}`]: {
			fontSize: 1.3,
		},
		[`@media ${device.laptopS}`]: {
			fontSize: 1,
		}
	},
	selectedPage: {
		color: ({ theme }) => theme.colors.primary,
		fontWeight: 'bold',
	}
})

export default useStyles