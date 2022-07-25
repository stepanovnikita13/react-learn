import styled from "../../../styledJss"
import { NavLink } from "react-router-dom"
import { Button } from "../../common/form/Buttons/Buttons"
import googleIcon from '../../../assets/icons/google-icon.png'
import facebookIcon from '../../../assets/icons/facebook-icon.png'

const S = {}
S.Wrapper = styled('div')({
	display: 'flex',
	flexFlow: 'column nowrap',
	width: 300,
	rowGap: 10,
})
S.Error = styled('div')(({ theme }) => ({
	color: theme.COLORS.error
}))
S.Row = styled('div')({
	display: 'flex',
	justifyContent: 'space-between'
})
S.Button = styled(Button)({
	'&&': {
		width: '100%'
	}
})
const SocialButton = styled(S.Button)({
	position: 'relative',
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
})
S.GoogleButton = styled(SocialButton)({
	'&&&': {
		backgroundColor: '#0d66ff',
	},
	'&&::before': {
		backgroundImage: `url(${googleIcon})`
	}
})
S.FacebookButton = styled(SocialButton)({
	'&&&': {
		backgroundColor: '#3b5999',
	},
	'&&::before': {
		backgroundImage: `url(${facebookIcon})`
	}
})
S.SocialLogin = styled('div')({
	display: 'flex',
	flexFlow: 'column nowrap',
	rowGap: 10,
	width: 300,
	paddingTop: 15,
	'& p': {
		textAlign: 'center'
	}
})
S.RegisterLink = styled(NavLink)(({ theme }) => ({
	fontWeight: 'bold',
	color: theme.colors.primary,
	marginLeft: 5
}))

export default S