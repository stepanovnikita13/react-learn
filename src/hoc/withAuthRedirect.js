import React from "react"
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom"

export const withAuthRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {

			if (!this.props.isAuth) return <Navigate to={'/login'} replace={true} />
			return <Component {...this.props} />
		}
	}

	let mapStateToProps = (state) => ({
		isAuth: state.auth.isAuth
	})

	return connect(mapStateToProps)(RedirectComponent)
}