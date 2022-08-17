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
	form: {
		'@global': {
			[`input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus,
		textarea:-webkit-autofill,
		textarea:-webkit-autofill:hover,
		textarea:-webkit-autofill:focus,
		select:-webkit-autofill,
		select:-webkit-autofill:hover,
		select:-webkit-autofill:focus`]: ({ theme }) => ({
					WebkitBoxShadow: `0 0 0px 1000px ${theme.colors.backgroundContainer} inset`,
					backgroundColor: theme.colors.backgroundContainer
				})
		}
	},
	wrapper: {
		display: 'flex',
		flexFlow: 'column nowrap',
		rowGap: 20,
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
}, { name: 'LoginForm' })

export default useStyles