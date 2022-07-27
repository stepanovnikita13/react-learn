import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "./withAuth"

const withAuthRedirect = Component => {
	const RedirectComponent = (props) => {
		const authContext = useContext(AuthContext)
		const isOwner = !props.router?.params.userId ?? true
		if (!authContext.isAuth && isOwner) return <Navigate to={'/login'} replace={true} />
		return <Component {...props} />
	}

	RedirectComponent.displayName = `WithAuthRedirect(${getDisplayName(Component)})`

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}

	return RedirectComponent
}

export default withAuthRedirect