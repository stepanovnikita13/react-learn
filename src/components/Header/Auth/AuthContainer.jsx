import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import { logout } from '../../../redux/auth-reducer'

const AuthContainer = props => {
	return <Auth {...props} />
}

let mapStateToProps = state => ({
	login: state.auth.login,
})

export default connect(mapStateToProps, { logout })(AuthContainer)