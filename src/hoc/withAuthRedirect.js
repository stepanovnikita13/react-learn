import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { selectUserId } from "../redux/auth-selectors"
import { AuthContext } from "./withAuth"
import { connect } from "react-redux"

const withAuthRedirect = Component => {
	const RedirectComponent = (props) => {
		const authContext = useContext(AuthContext)
		const isOwner = !props.router?.params.userId ?? true
		if ((!props.userId || !authContext.isAuth) && isOwner) return <Navigate to={'/login'} replace={true} />
		return <Component {...props} />
	}

	RedirectComponent.displayName = `WithAuthRedirect(${getDisplayName(Component)})`

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}

	const mapStateToProps = state => ({
		userId: selectUserId(state)
	})

	return connect(mapStateToProps)(RedirectComponent)
}

export default withAuthRedirect