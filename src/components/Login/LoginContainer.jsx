import Login from "./Login"
import { useContext } from "react"
import { AuthContext } from "../../hoc/withAuth"
import { connect } from 'react-redux'
import { login } from "../../redux/auth-reducer.ts"
import { selectCaptchaUrl, selectErrorField, selectErrorMessage, selectUserId } from "../../redux/auth-selectors"

const LoginContainer = props => {
	const authContext = useContext(AuthContext)
	return <Login {...props} isAuth={authContext.isAuth} setIsAuth={authContext.setIsAuth} />
}

const mapStateToProps = state => ({
	error: {
		message: selectErrorMessage(state),
		field: selectErrorField(state),
		userId: selectUserId(state),
	},
	captchaUrl: selectCaptchaUrl(state)
})

export default connect(mapStateToProps, { login })(LoginContainer)