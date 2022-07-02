import { useParams } from 'react-router-dom';

export const withRouter = (Component) => {
	return function (props) {
		let params = useParams()
		return <Component {...props} router={{ params }} />
	}
}