import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import { authUser } from '../../../redux/auth-reducer'

class AuthContainer extends React.Component {
	componentDidMount() {
		this.props.authUser()
	}

	render() {
		return <Auth {...this.props} />
	}
}

let mapStateToProps = state => ({
	login: state.auth.login,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { authUser })(AuthContainer)