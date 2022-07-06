import Login from "./Login"
import { connect } from 'react-redux'
import { login } from "../../redux/auth-reducer"
import { selectCaptchaUrl, selectErrorField, selectErrorMessage, selectIsAuth } from "../../redux/auth-selectors"

const LoginContainer = props => {
	return <Login {...props} />
}

const mapStateToProps = state => ({
	isAuth: selectIsAuth(state),
	error: {
		message: selectErrorMessage(state),
		field: selectErrorField(state)
	},
	captchaUrl: selectCaptchaUrl(state)
})

export default connect(mapStateToProps, { login })(LoginContainer)