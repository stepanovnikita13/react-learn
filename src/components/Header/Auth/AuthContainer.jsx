import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import { logout } from '../../../redux/auth-reducer.ts'
import { selectLogin, selectUserId } from "../../../redux/auth-selectors";

const AuthContainer = props => {
	return <Auth {...props} />
}

let mapStateToProps = state => ({
	login: selectLogin(state),
	userId: selectUserId(state)
})

export default connect(mapStateToProps, { logout })(AuthContainer)