import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import { setUserData } from '../../../redux/auth-reducer'
import axios from "axios";

class AuthContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
			{ withCredentials: true })
			.then(res => {
				if (res.data.resultCode === 0) {
					let { email, id, login } = res.data.data
					this.props.setUserData(email, id, login)
				}
			})
	}

	render() {
		return <Auth {...this.props} />
	}
}

let mapStateToProps = state => ({
	login: state.auth.login,
	isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { setUserData })(AuthContainer)