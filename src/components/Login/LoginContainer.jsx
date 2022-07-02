import Login from "./Login"
import { connect } from 'react-redux'
import { login } from "../../redux/auth-reducer"

const LoginContainer = props => {
	return <Login login={props.login} isAuth={props.isAuth} />
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(LoginContainer)