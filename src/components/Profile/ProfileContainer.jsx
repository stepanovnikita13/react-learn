import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId || 2
		this.props.getUserProfile(userId)
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

function withRouter(Component) {
	const ComponentWithRouter = props => {
		let location = useLocation()
		let navigate = useNavigate()
		let params = useParams()
		return <Component {...props} router={{ location, navigate, params }} />
	}

	return ComponentWithRouter
}

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));