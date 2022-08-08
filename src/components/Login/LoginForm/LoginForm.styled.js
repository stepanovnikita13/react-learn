import googleIcon from '../../../assets/icons/google-icon.png'
import facebookIcon from '../../../assets/icons/facebook-icon.png'
import { device } from "../../../styles/device"

import { createUseStyles } from 'react-jss'

const socialButton = {
	position: 'relative',
	width: '100%',
	'&::before': {
		content: "''",
		display: 'block',
		position: 'absolute',
		backgroundSize: 'contain',
		width: 30,
		height: 30,
		top: '50%',
		left: 10,
		transform: 'translateY(-50%)',
	}
}

const useStyles = createUseStyles({
	wrapper: {
		display: 'flex',
		flexFlow: 'column nowrap',
		rowGap: 10,
		[`@media ${device.tabletS}`]: {
			width: 300
		}
	},
	error: {
		color: ({ theme }) => theme.COLORS.error
	},
	row: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	registerLink: {
		fontWeight: 'bold',
		color: ({ theme }) => theme.colors.primary,
		marginLeft: 5
	},
	captcha: {
		display: 'flex',
		justifyContent: 'center',

		'&> img': {

		}
	},
	socialLogin: {
		display: 'flex',
		flexFlow: 'column nowrap',
		rowGap: 10,
		paddingTop: 15,
		'& p': {
			textAlign: 'center'
		}
	},
	googleButton: {
		extend: socialButton,
		backgroundColor: '#0d66ff',
		'&::before': {
			backgroundImage: `url(${googleIcon})`
		}
	},
	facebookButton: {
		extend: socialButton,
		backgroundColor: '#3b5999',
		'&::before': {
			backgroundImage: `url(${facebookIcon})`
		}
	}
})

export default useStyles