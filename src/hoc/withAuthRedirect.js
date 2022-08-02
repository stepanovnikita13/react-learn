import React from "react"
import { Navigate } from "react-router-dom"

const withAuthRedirect = Component => {
	const RedirectComponent = (props) => {
		const isOwner = !props.router?.params.userId ?? true
		if (!props.isAuth && isOwner) return <Navigate to={'/login'} replace={true} />
		return <Component {...props} />
	}

	RedirectComponent.displayName = `WithAuthRedirect(${getDisplayName(Component)})`

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}

	return RedirectComponent
}

export default withAuthRedirect