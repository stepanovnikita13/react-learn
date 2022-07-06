import { useParams } from 'react-router-dom';

export const withRouter = (Component) => {
	function WithRouter(props) {
		let params = useParams()
		return <Component {...props} router={{ params }} />
	}
	WithRouter.displayName = `WithRouter(${getDisplayName(Component)})`
	return WithRouter

	function getDisplayName(Component) {
		return Component.displayName || Component.name || 'Component'
	}
}