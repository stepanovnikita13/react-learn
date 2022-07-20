import { useParams, useNavigate } from 'react-router-dom';

export const withRouter = (Component) => {
	function WithRouter(props) {
		let params = useParams()
		let navigate = useNavigate()
		return <Component {...props} router={{ params, navigate }} />
	}
	WithRouter.displayName = `WithRouter(${getDisplayName(Component)})`
	return WithRouter

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}
}