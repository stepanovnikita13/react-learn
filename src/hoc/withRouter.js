import { useParams, useNavigate, useLocation } from 'react-router-dom';

export const withRouter = (Component) => {
	function WithRouter(props) {
		let params = useParams()
		let navigate = useNavigate()
		let location = useLocation()
		return <Component {...props} router={{ params, navigate, location }} />
	}
	WithRouter.displayName = `WithRouter(${getDisplayName(Component)})`
	return WithRouter

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}
}