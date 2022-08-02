import React from "react"
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = React.createContext()

const withAuth = Component => {
	const WrappedComponent = (props) => {
		const [isAuth, setIsAuth] = useLocalStorage('isAuth', false)
		return <AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<Component {...props} setIsAuth={setIsAuth} isAuth={isAuth} />
		</AuthContext.Provider>
	}

	WrappedComponent.displayName = `WithAuth(${getDisplayName(Component)})`

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}

	return WrappedComponent
}

export default withAuth